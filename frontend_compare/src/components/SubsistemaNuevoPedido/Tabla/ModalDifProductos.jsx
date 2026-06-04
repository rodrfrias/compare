import React from 'react';
import productosRaw from '../../../utilities/productos.js';
import { useState } from 'react';

const ModalDifProductos = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    const mainButtonClass = 'h-8 px-10 text-[10px] font-bold uppercase tracking-[0.12em] text-[#444] bg-gradient-to-b from-[#ffffff] to-[#f2f2f2] hover:from-[#f9f9f9] hover:to-[#e8e8e8] border-[0.5px] border-[#c0bfb8] shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_1px_2px_rgba(0,0,0,0.05)] transition-all duration-200 active:scale-[0.98] active:from-[#ececec] active:to-[#dadada] outline-none cursor-pointer';

    const [seleccionados, setSeleccionados] = useState([]);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/40">
            {/* Contenedor Principal del Modal con alto y scroll correcto */}
            <div className="w-full h-auto max-h-[80vh] flex flex-col bg-white p-2 rounded-ls shadow-xl overflow-hidden">
                
                {/* Contenedor con scroll exclusivo para la tabla */}
                <div className="w-full overflow-auto border border-gray-300 shadow-sm bg-white">
                    {/* Se añade table-fixed para que respete el 100% de ancho de manera uniforme */}
                    <table className="w-full table-fixed border-collapse text-left font-sans text-[9px]">
                        <tbody>
                        {productosRaw && productosRaw.length > 0 ? (
                            productosRaw.map((prod, index) => {
                                const seleccionado = seleccionados.includes(prod.id);
                                const filaBg = index % 2 === 0 ? 'bg-white' : 'bg-[#f8fafc]';
                                return (
                                    <tr
                                        key={prod.id || index}
                                        className={`border-b border-gray-100 hover:bg-blue-50 ${seleccionado ? 'bg-blue-100' : filaBg} cursor-pointer transition-colors`}
                                    >
                                        {/* Celdas con py-2.5 y truncate para perfecta visibilidad */}
                                        <td className="px-2.5 py-2.5 uppercase text-gray-600 border-r border-gray-100 text-[10px] truncate">{prod.codigo}</td>
                                        <td className="px-2.5 py-2.5 uppercase text-gray-800 font-medium border-r border-gray-100 text-[10px] truncate">{prod.nombre}</td>
                                        <td className="px-2.5 py-2.5 uppercase text-gray-600 border-r border-gray-100 text-[10px] truncate">{prod.marca}</td>
                                        <td className="px-2.5 py-2.5 uppercase text-gray-600 border-r border-gray-100 text-[10px] truncate">{prod.modelo}</td>
                                        <td className="px-2.5 py-2.5 uppercase text-gray-600 border-r border-gray-100 text-[10px] truncate">{prod.presentacion}</td>
                                        <td className="px-2.5 py-2.5 uppercase text-gray-600 border-r border-gray-100 text-[10px] truncate">{prod.proveedor_nombre}</td>
                                        <td className="px-2.5 py-2.5 uppercase text-gray-600 border-r border-gray-100 text-[10px] truncate">{prod.condicion_fiscal}</td>
                                        <td className="px-2.5 py-2.5 uppercase text-right text-gray-700 border-r border-gray-100 text-[10px]"></td>
                                        <td className="px-2.5 py-2.5 uppercase border-r border-gray-100 text-[10px]"></td>
                                        <td className="px-2.5 py-2.5 text-right text-gray-700 border-r border-gray-100 font-semibold text-[10px]"></td>
                                    </tr>
                                );
                            })
                        ) : (
                            <tr>
                                <td colSpan="10" className="px-2 py-10 text-center text-gray-400 text-[10px] uppercase">
                                    No hay resultados
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>

                {/* Botón opcional para cerrar el modal desde aquí si lo necesitas */}
                <div className="mt-4 flex justify-end">
                    <button onClick={onClose} className={mainButtonClass}>
                        Cerrar
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ModalDifProductos;