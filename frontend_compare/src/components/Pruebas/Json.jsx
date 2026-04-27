import React, { useState } from 'react';

// ─── Servicio Actualizado ─────────────────────────────────────────────────────
export async function enviarPDFParaExtraerJSON(archivo) {
  const formData = new FormData();
  formData.append('pdf', archivo);

  // IMPORTANTE: Asegúrate de que esta URL sea la de tu nueva View de Django
  const response = await fetch('http://127.0.0.1:8000/api/v1/sanitize-pdf/', {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || `Error ${response.status}`);
  }

  // Ahora el backend responde con un JSON directamente
  return await response.json();
}

// ─── Componente ───────────────────────────────────────────────────────────────
const Json = () => {
  const [cargando, setCargando] = useState(false);
  const [datosIA, setDatosIA] = useState(null); // Aquí guardaremos el JSON de Gemini
  const [archivoNombre, setArchivoNombre] = useState('');
  const [error, setError] = useState('');

  const alSeleccionarArchivo = async (event) => {
    const archivo = event.target.files[0];
    if (!archivo) return;

    setError('');
    setDatosIA(null);
    setArchivoNombre(archivo.name);
    setCargando(true);

    try {
      const jsonRecibido = await enviarPDFParaExtraerJSON(archivo);
      setDatosIA(jsonRecibido);
    } catch (err) {
      setError(err.message || 'Error al conectar con el servidor.');
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-8 bg-white rounded-xl shadow-lg border border-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Extracción con IA</h2>
        <p className="text-gray-500 mt-2">Subí un catálogo o lista de precios para convertirlo en datos.</p>
      </div>

      {/* Drop zone */}
      <div className="relative border-2 border-dashed border-blue-200 rounded-lg p-6 hover:border-blue-400 transition-colors bg-blue-50/30">
        <input
          type="file"
          accept=".pdf"
          onChange={alSeleccionarArchivo}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          disabled={cargando}
        />
        <div className="text-center">
          <svg className="mx-auto h-12 w-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <p className="mt-2 text-sm text-gray-600">
            {cargando ? "Procesando con Gemini..." : <><span className="font-semibold text-blue-600">Hacé clic para subir</span> o arrastrá el PDF</>}
          </p>
          <p className="text-xs text-blue-500 mt-1 font-medium">{archivoNombre || 'Solo archivos PDF'}</p>
        </div>
      </div>

      {/* Loading */}
      {cargando && (
        <div className="mt-6 flex flex-col items-center justify-center text-blue-600 font-medium">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mb-2" />
          <p>Gemini está analizando el documento...</p>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {error}
        </div>
      )}

      {/* Resultado (Visualizador de JSON) */}
      {datosIA && (
        <div className="mt-8 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-gray-700">Datos Extraídos</h3>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase">
              {datosIA.proveedor?.tipo_comercio || 'Procesado'}
            </span>
          </div>

          {/* Card del Proveedor */}
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-gray-400 uppercase font-bold">Proveedor</p>
              <p className="text-gray-800 font-medium">{datosIA.proveedor?.nombre}</p>
              <p className="text-sm text-gray-500">CUIT: {datosIA.proveedor?.cuit}</p>
            </div>
            <div className="text-right sm:text-left md:text-right">
              <p className="text-xs text-gray-400 uppercase font-bold">Contacto</p>
              <p className="text-sm text-gray-600">{datosIA.proveedor?.email}</p>
              <p className="text-sm text-gray-600">{datosIA.proveedor?.localidad}, {datosIA.proveedor?.provincia}</p>
            </div>
          </div>

          {/* Tabla de Productos */}
          <div className="overflow-x-auto border border-gray-200 rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase">Producto</th>
                  <th className="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase">Presentación</th>
                  <th className="px-4 py-3 text-right text-xs font-bold text-gray-500 uppercase">Precio Neto P/U</th>
                  <th className="px-4 py-3 text-right text-xs font-bold text-gray-500 uppercase">IVA</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {datosIA.productos?.map((prod, idx) => (
                  <tr key={idx} className="hover:bg-blue-50/50 transition-colors">
                    <td className="px-4 py-3 text-sm">
                      <div className="font-medium text-gray-800">{prod.nombre}</div>
                      <div className="text-xs text-gray-400">{prod.marca} | {prod.categoria}</div>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">{prod.presentacion}</td>
                    <td className="px-4 py-3 text-sm text-right font-mono font-bold text-gray-700">
                      ${prod.precio_unitario_neto?.toLocaleString() || '0.00'}
                    </td>
                    <td className="px-4 py-3 text-sm text-right">
                      <span className={`px-2 py-0.5 rounded text-xs font-bold ${prod.iva === 'INCLUIDO' ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-600'}`}>
                        {prod.iva === 'INCLUIDO' ? 'INCLUIDO' : `${prod.iva}%`}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Vista RAW (JSON para programadores) */}
          <details className="mt-4">
            <summary className="text-xs text-blue-500 cursor-pointer hover:underline">Ver JSON crudo</summary>
            <pre className="mt-2 p-4 bg-gray-900 text-green-400 text-xs rounded-lg overflow-auto max-h-60">
              {JSON.stringify(datosIA, null, 2)}
            </pre>
          </details>
        </div>
      )}
    </div>
  );
};

export default Json;