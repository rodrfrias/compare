import React, { useState } from 'react';

/**
 * Componente DropXone
 * Estética inspirada en aplicaciones de escritorio (JavaFX/Swing)
 * Gris neutro, bordes definidos y acentos azules en interacción.
 */
const DropXone = () => {
  // Estado para simular archivos cargados
  const [archivos, setArchivos] = useState([
    { id: 1, nombre: "CV_Rodrigo_2024.docx", progreso: 60, tipo: "DOCX" },
    { id: 2, nombre: "DNI_Frente.jpg", progreso: 100, tipo: "JPG" },
    { id: 3, nombre: "Factura_A_001.pdf", progreso: 100, tipo: "PDF" }
  ]);

  // Botón estilo "Generar Pedido" de la tabla
  const mainButtonClass = 'h-8 px-10  text-[10px] font-bold uppercase tracking-[0.12em] text-[#444] bg-gradient-to-b from-[#ffffff] to-[#f2f2f2] hover:from-[#f9f9f9] hover:to-[#e8e8e8] border-[0.5px] border-[#c0bfb8] shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_1px_2px_rgba(0,0,0,0.05)] transition-all duration-200  active:scale-[0.98] active:from-[#ececec] active:to-[#dadada] outline-none cursor-pointer';
    
  return (
    <div className='w-full h-full flex flex-col bg-[#f9f9f7] p-4 gap-6 font-sans'>
      
      {/* SECCIÓN: CARGA DE DOCUMENTOS */}
      <section className="flex flex-col gap-3">
        <div className="flex justify-between items-end border-b border-gray-300 pb-1">
          <h2 className="text-[11px] font-bold text-gray-600 uppercase tracking-widest">
            Documentación del Responsable
          </h2>
          <span className="text-[9px] text-gray-400 uppercase font-medium">
            Formatos admitidos: PDF, JPG, PNG
          </span>
        </div>
        
        {/* ÁREA DE DROPZONE CORREGIDA */}
        <div 
          className="w-full border border-gray-300 bg-[#f9f9f9] p-10 flex flex-col items-center justify-center gap-3 hover:border-blue-400 hover:bg-white transition-all cursor-pointer group"
          onDragOver={(e) => e.preventDefault()}
        >
          {/* Icono de subir sobrio */}
          <div className="w-10 h-10 border-2 border-gray-300 flex items-center justify-center group-hover:border-blue-400 transition-colors">
            <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="square" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
          </div>
          
          <div className="text-center">
            <p className="text-[11px] text-gray-600 uppercase tracking-tight">
              Arrastrá y soltá archivos o <span className="text-blue-600 font-bold underline">examinar equipo</span>
            </p>
            <p className="text-[9px] text-gray-400 mt-1 uppercase tracking-tighter">
              Límite de carga: 50MB por archivo
            </p>
          </div>
        </div>

        {/* LISTA DE ARCHIVOS CARGADOS */}
        <div className="flex flex-col border border-gray-300 bg-white shadow-sm">
          {archivos.map((archivo, index) => (
            <div 
              key={archivo.id} 
              className={`flex items-center gap-4 px-3 py-2 ${index !== archivos.length - 1 ? 'border-b border-gray-100' : ''} hover:bg-blue-50/30 transition-colors`}
            >
              {/* Icono de archivo cuadrado estilo Windows/Java */}
              <div className="flex-shrink-0 w-7 h-9 bg-gray-100 border border-gray-300 flex items-center justify-center text-[8px] font-bold text-gray-500 leading-none text-center px-1">
                {archivo.tipo}
              </div>

              {/* Info y Progreso */}
              <div className="flex-grow flex flex-col gap-1">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-medium text-gray-700 truncate uppercase tracking-tighter">
                    {archivo.nombre}
                  </span>
                  <span className="text-[9px] font-mono font-bold text-gray-400">
                    {archivo.progreso === 100 ? "COMPLETADO" : `${archivo.progreso}%`}
                  </span>
                </div>
                
                {/* Progress Bar Plana */}
                <div className="w-full h-1.5 bg-gray-100 border border-gray-200">
                  <div 
                    className={`h-full transition-all duration-500 ${archivo.progreso === 100 ? 'bg-blue-600' : 'bg-blue-400'}`} 
                    style={{ width: `${archivo.progreso}%` }}
                  ></div>
                </div>
              </div>

              {/* Botón Eliminar */}
              <button 
                className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-gray-400 hover:text-red-600 hover:bg-red-50 transition-all text-lg"
                onClick={(e) => {
                  e.stopPropagation();
                  setArchivos(archivos.filter(a => a.id !== archivo.id));
                }}
              >
                ×
              </button>
            </div>
          ))}
          
          {archivos.length === 0 && (
            <div className="py-8 text-center text-[10px] text-gray-400 uppercase italic">
              No hay archivos seleccionados
            </div>
          )}
        </div>
      </section>

      {/* FOOTER DE ACCIONES UNIFICADO */}
      <section className="mt-auto pt-4 border-t border-gray-300 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-[9px] text-gray-400 italic">* Verifique que los datos sean legibles</span>
          <span className="text-[9px] text-gray-400 italic">* Procesamiento seguro SSL</span>
        </div>
        
        <div className="flex gap-2">
          <button className={mainButtonClass}>
              confirmar
            </button>
        </div>
      </section>

    </div>
  );
};

export default DropXone;