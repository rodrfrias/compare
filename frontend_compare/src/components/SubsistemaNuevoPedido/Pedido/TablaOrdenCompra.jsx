import React from 'react';
import ordenesCompra from '../../../utilities/ordenes';
import { LuSendHorizontal } from "react-icons/lu";
import { GrDocument } from "react-icons/gr";
import { SiGmail } from "react-icons/si";

const TablaOrdenCompra = () => {
  const headerStyles = `
    px-2 py-2 
    text-[9px] font-bold uppercase tracking-wider text-[#555]
    bg-gradient-to-b from-[#f9f9f9] to-[#e8e8e7] 
    border-r-[0.5px] border-b-[0.5px] border-[#c0bfb8]
    shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]
    text-center
  `;

  const cellStyles = "px-2 py-1 uppercase text-gray-600 border-r border-gray-100";

  return (
    <div className='w-full h-full flex flex-col bg-[#f3f4f6]'>
      <div className="w-full grow flex flex-col overflow-hidden bg-white">
        <div className="grow overflow-auto">
          <table className="w-full border-collapse text-left font-sans text-[9px]">
            <thead>
              <tr className="bg-[#f8f9fa] border-b border-gray-300 sticky top-0 z-20">
                <th className={headerStyles}>N° orden</th>
                <th className={headerStyles}>fecha emisión</th>
                <th className={headerStyles}>proveedor</th>
                <th className={headerStyles}>email proveedor</th>
                <th className={headerStyles}>detalle de orden</th>
                <th className={headerStyles}>subtotal</th>
                <th className={headerStyles}>estado</th>
                <th className={headerStyles}>acciones</th>
              </tr>
            </thead>
            <tbody>
              {ordenesCompra && ordenesCompra.length > 0 ? (
                ordenesCompra.map((orden, index) => (
                  <tr 
                    key={orden.id || index} 
                    className={`${index % 2 === 0 ? 'bg-white' : 'bg-[#f8fafc]'} border-b border-gray-100 hover:bg-blue-50 transition-colors`}
                  >
                    <td className="px-2 py-1 uppercase text-gray-600 border-r border-gray-100">{orden.n_orden}</td>
                    <td className="px-2 py-1 uppercase text-gray-600 border-r border-gray-100">
                      {orden.fecha_emision}
                    </td>
                    <td className="px-2 py-2 uppercase text-gray-600 border-r border-gray-100">{orden.proveedor}</td>
                    <td className="px-2 py-2 uppercase text-gray-600 border-r border-gray-100">{orden.proveedor_email}</td>
                    <td className="px-2 py-2 uppercase text-gray-600 border-r border-gray-100">{orden.detalle_orden}</td>
                    <td className="px-2 py-2 uppercase text-right text-gray-700 border-r border-gray-100">
                      {/* Asumiendo que quieres formato moneda */}
                      {new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(orden.subtotal)}
                    </td>
                    <td className="px-2 py-2 uppercase text-gray-600 border-r border-gray-100 text-center font-bold">

                        {orden.estado}
        
                    </td>
                    <td className="px-2 py-2 text-center">
                      <div className='flex items-center justify-center gap-2'>
                        <button title="Ver Orden" className='cursor-pointer text-gray-600 hover:scale-110'> <GrDocument size={12}></GrDocument>  </button>
                        <button title="Redactar un Mensaje" className='cursor-pointer text-gray-600 hover:scale-110'> <SiGmail size={12}></SiGmail> </button>
                        <button title="Enviar Orden de Compra" className='cursor-pointer text-gray-600 hover:scale-110'><LuSendHorizontal size={12} /></button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="px-2 py-10 text-center text-gray-400 text-[9px] uppercase">
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