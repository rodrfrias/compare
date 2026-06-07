import React, { useState } from 'react';
import ordenesCompra from '../../../utilities/ordenes';

const TablaOrdenCompra = () => {
  // Estado para almacenar únicamente el ID de la fila seleccionada (o null si ninguna)
  const [seleccionadoId, setSeleccionadoId] = useState(null);

  // Al hacer clic, si ya estaba seleccionado se deselecciona, sino se marca el nuevo
  const handleSeleccionar = (id) => {
    setSeleccionadoId((prevId) => (prevId === id ? null : id));
  };

  const headerStyles = `
    px-2 py-2 
    text-[9px] font-semibold uppercase tracking-wider text-[#555]
    bg-gradient-to-b from-[#f9f9f9] to-[#e8e8e7] 
    border-r-[0.5px] border-b-[0.5px] border-[#c0bfb8]
    shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]
    text-center
  `;

  return (
    <div className='w-full h-full flex flex-col bg-[#f3f4f6]'>
      <div className="w-full grow flex flex-col overflow-hidden bg-white">
        <div className="grow overflow-auto">
          <table className="w-full border-collapse text-left font-sans text-[9px]">
            <thead>
              <tr className="bg-[#f8f9fa] border-b border-gray-300 sticky top-0 z-20">
                {/* Columna para el indicador de selección (vacía en el header) */}
                <th className={headerStyles}></th>
                <th className={headerStyles}>N° orden</th>
                <th className={headerStyles}>fecha emisión</th>
                <th className={headerStyles}>proveedor</th>
                <th className={headerStyles}>email proveedor</th>
                <th className={headerStyles}>detalle de orden</th>
                <th className={headerStyles}>subtotal</th>
                <th className={headerStyles}>estado</th>
              </tr>
            </thead>
            <tbody>
              {ordenesCompra && ordenesCompra.length > 0 ? (
                ordenesCompra.map((orden, index) => {
                  const idFila = orden.id || index;
                  // Comprobamos si este ID coincide con el único seleccionado
                  const esSeleccionado = seleccionadoId === idFila;
                  const filaBg = index % 2 === 0 ? 'bg-white' : 'bg-[#f8fafc]';

                  return (
                    <tr 
                      key={idFila} 
                      onClick={() => handleSeleccionar(idFila)}
                      className={`border-b border-gray-100 hover:bg-blue-50 cursor-pointer transition-colors ${
                        esSeleccionado ? 'bg-blue-100 hover:bg-blue-100' : filaBg
                      }`}
                    >
                      {/* Indicador visual de tipo Radio */}
                      <td className="px-1 py-1 text-center border-r border-gray-100">
                        <input 
                          type="radio" 
                          checked={esSeleccionado} 
                          readOnly 
                          className="w-3 h-3 accent-blue-600 cursor-pointer" 
                        />
                      </td>
                      <td className="px-2 py-1 uppercase text-gray-600 border-r border-gray-100 text-[10px]">{orden.n_orden}</td>
                      <td className="px-2 py-1 uppercase text-gray-600 border-r border-gray-100 text-[10px]">
                        {orden.fecha_emision}
                      </td>
                      <td className="px-2 py-1 uppercase text-gray-600 border-r border-gray-100 text-[10px]">{orden.proveedor}</td>
                      <td className="px-2 py-1 uppercase text-gray-600 border-r border-gray-100 text-[10px]">{orden.proveedor_email}</td>
                      <td className="px-2 py-1 uppercase text-gray-600 border-r border-gray-100 text-[10px] font-semibold">{orden.detalle_orden}</td>
                      <td className="px-2 py-1 uppercase text-right text-gray-700 border-r border-gray-100 text-[10px]">
                        {new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(orden.subtotal)}
                      </td>
                      <td className="px-2 py-2 uppercase text-gray-600 border-r border-gray-100 text-center text-[10px] font-semibold">
                        {orden.estado}
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="8" className="px-2 py-10 text-center text-gray-400 text-[9px] uppercase">
                    No hay resultados
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TablaOrdenCompra;