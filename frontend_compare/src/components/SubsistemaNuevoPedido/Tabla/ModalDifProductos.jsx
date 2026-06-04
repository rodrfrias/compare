import React from 'react'
import ordenesCompra from '../../../utilities/ordenes';

const ModalDifProductos = ({ isOpen, position, onClose }) => {
    if (!isOpen || !position) return null;

    // Ajuste para que no se corte en el borde derecho de la pantalla
    const left = Math.min(position.left, window.innerWidth - 420);

    return (
        <div
            style={{
                position: 'fixed',
                top: position.top + 4,  // 4px de separación bajo la celda
                left: left,
                zIndex: 9999,
                width: '420px',
            }}
            className='shadow-lg border border-gray-300 bg-[#f3f4f6]'
            // Evita que el modal se cierre al mover el mouse dentro de él
            onMouseEnter={(e) => e.stopPropagation()}
        >
            <div className="w-full flex flex-col overflow-hidden bg-white max-h-[180px]">
                <div className="overflow-auto">
                    <table className="w-full border-collapse text-left font-sans text-[9px]">
                        <thead>
                            <tr className="bg-[#f8f9fa] border-b border-gray-300 sticky top-0 z-20">
                                <th className="px-2 py-1 text-[9px] font-bold uppercase text-[#555]">N° Orden</th>
                                <th className="px-2 py-1 text-[9px] font-bold uppercase text-[#555]">Fecha</th>
                                <th className="px-2 py-1 text-[9px] font-bold uppercase text-[#555]">Proveedor</th>
                                <th className="px-2 py-1 text-[9px] font-bold uppercase text-[#555]">Email</th>
                                <th className="px-2 py-1 text-[9px] font-bold uppercase text-[#555]">Detalle</th>
                                <th className="px-2 py-1 text-[9px] font-bold uppercase text-[#555]">Subtotal</th>
                                <th className="px-2 py-1 text-[9px] font-bold uppercase text-[#555]">Estado</th>
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
                                        <td className="px-2 py-1 uppercase text-gray-600 border-r border-gray-100">{orden.fecha_emision}</td>
                                        <td className="px-2 py-1 uppercase text-gray-600 border-r border-gray-100">{orden.proveedor}</td>
                                        <td className="px-2 py-1 uppercase text-gray-600 border-r border-gray-100">{orden.proveedor_email}</td>
                                        <td className="px-2 py-1 uppercase text-gray-600 border-r border-gray-100">{orden.detalle_orden}</td>
                                        <td className="px-2 py-1 uppercase text-right text-gray-700 border-r border-gray-100">
                                            {new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(orden.subtotal)}
                                        </td>
                                        <td className="px-2 py-1 uppercase text-gray-600 text-center font-bold">{orden.estado}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="7" className="px-2 py-6 text-center text-gray-400 text-[9px] uppercase">
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

export default ModalDifProductos;