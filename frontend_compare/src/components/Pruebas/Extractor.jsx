import React, { useState } from 'react';

// ─── Servicio (reemplaza tu services/api.js) ──────────────────────────────────
// Envía el PDF al backend y devuelve un objeto con el Blob del PDF limpio
// y la metadata que el backend manda en los headers.
export async function enviarPDFAlBackend(archivo) {
  const formData = new FormData();
  formData.append('pdf', archivo);

  const response = await fetch('http://127.0.0.1:8000/api/supplier-docs/sanitize/', {
    method: 'POST',
    body: formData,
    // No pongas Content-Type: el browser lo setea solo con el boundary correcto
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || `Error ${response.status}`);
  }

  // El backend devuelve el PDF como binario — lo leemos como Blob
  const blob = await response.blob();

  // Levantamos la metadata de los headers informativos
  const meta = {
    originalSize:  parseInt(response.headers.get('X-Original-Size') || '0'),
    cleanSize:     parseInt(response.headers.get('X-Clean-Size')    || '0'),
    reduction:     parseFloat(response.headers.get('X-Reduction-Percent') || '0'),
    pages:         parseInt(response.headers.get('X-Pages-Processed') || '0'),
    imagesRemoved: parseInt(response.headers.get('X-Images-Removed')  || '0'),
  };

  return { blob, meta };
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

// ─── Componente ───────────────────────────────────────────────────────────────
const Extractor = () => {
  const [cargando,   setCargando]   = useState(false);
  const [resultado,  setResultado]  = useState(null);   // { blob, meta, nombre }
  const [archivoNombre, setArchivoNombre] = useState('');
  const [error, setError] = useState('');

  const alSeleccionarArchivo = async (event) => {
    const archivo = event.target.files[0];
    if (!archivo) return;

    setError('');
    setResultado(null);
    setArchivoNombre(archivo.name);
    setCargando(true);

    try {
      const datos = await enviarPDFAlBackend(archivo);
      setResultado({
        blob:   datos.blob,
        meta:   datos.meta,
        nombre: `sanitized_${archivo.name}`,
      });
    } catch (err) {
      setError(err.message || 'Error al conectar con el servidor.');
    } finally {
      setCargando(false);
    }
  };

  const descargarPDF = () => {
    if (!resultado?.blob) return;
    const url = URL.createObjectURL(resultado.blob);
    const a   = document.createElement('a');
    a.href     = url;
    a.download = resultado.nombre;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-8 bg-white rounded-xl shadow-lg border border-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Carga de Documentos</h2>
        <p className="text-gray-500 mt-2">Subí el PDF de tu proveedor para sanitizarlo.</p>
      </div>

      {/* Drop zone */}
      <div className="relative border-2 border-dashed border-blue-200 rounded-lg p-6 hover:border-blue-400 transition-colors bg-blue-50/30">
        <input
          type="file"
          accept=".pdf"
          onChange={alSeleccionarArchivo}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        <div className="text-center">
          <svg className="mx-auto h-12 w-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
          <p className="mt-2 text-sm text-gray-600">
            <span className="font-semibold text-blue-600">Hacé clic para subir</span> o arrastrá y soltá
          </p>
          {archivoNombre
            ? <p className="text-xs text-blue-500 mt-1 font-medium">{archivoNombre}</p>
            : <p className="text-xs text-gray-400">Solo archivos PDF</p>
          }
        </div>
      </div>

      {/* Loading */}
      {cargando && (
        <div className="mt-6 flex items-center justify-center text-blue-600 font-medium">
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600 mr-3" />
          Sanitizando PDF...
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {error}
        </div>
      )}

      {/* Resultado */}
      {resultado && (
        <div className="mt-8 space-y-4">

          {/* Metadata */}
          <div className="grid grid-cols-2 gap-3 text-sm">
            {[
              { label: 'Tamaño original',   value: formatBytes(resultado.meta.originalSize) },
              { label: 'Tamaño limpio',      value: formatBytes(resultado.meta.cleanSize)    },
              { label: 'Reducción',          value: `${resultado.meta.reduction}%`           },
              { label: 'Imágenes eliminadas',value: resultado.meta.imagesRemoved             },
            ].map(({ label, value }) => (
              <div key={label} className="bg-gray-50 rounded-lg p-3 border border-gray-100">
                <p className="text-gray-400 text-xs uppercase tracking-wide">{label}</p>
                <p className="text-gray-800 font-semibold mt-0.5">{value}</p>
              </div>
            ))}
          </div>

          {/* Botón de descarga */}
          <button
            onClick={descargarPDF}
            className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Descargar PDF sanitizado
          </button>

          <p className="text-xs text-gray-400 text-center">
            Este PDF limpio será el input de Gemini en el próximo paso.
          </p>
        </div>
      )}
    </div>
  );
};

export default Extractor;