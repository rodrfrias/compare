import React from 'react';
import { useState } from 'react';
import { LuInfo } from "react-icons/lu";


const ModalDifProductos = ({ isOpen, onClose, productos = []}) => {
    if (!isOpen) return null;


    const mainButtonClass = 'h-8 px-10 text-[10px] font-bold uppercase tracking-[0.12em] text-[#444] bg-gradient-to-b from-[#ffffff] to-[#f2f2f2] hover:from-[#f9f9f9] hover:to-[#e8e8e8] border-[0.5px] border-[#c0bfb8] shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_1px_2px_rgba(0,0,0,0.05)] transition-all duration-200 active:scale-[0.98] active:from-[#ececec] active:to-[#dadada] outline-none cursor-pointer';

    const [seleccionados, setSeleccionados] = useState([]);

    // Formateador de precios integrado para el modal
    const formatearPrecioARS = (precio) => {
        return new Intl.NumberFormat('es-AR', {
            style: 'currency',
            currency: 'ARS',
            minimumFractionDigits: 2
        }).format(precio || 0);
    };

    const headerStyles = `
    px-2 py-2 
    text-[10px] font-semibold uppercase tracking-wider text-[#555]
    bg-gradient-to-b from-[#f9f9f9] to-[#e8e8e7] 
    border-r-[0.5px] border-b-[0.5px] border-[#c0bfb8]
    shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]
    text-center
    `;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/40">
            {/* Contenedor Principal del Modal con alto y scroll correcto */}
            <div className="w-full h-auto max-h-[80vh] flex flex-col bg-white p-2 rounded-ls shadow-xl overflow-hidden">
                
                {/* Contenedor con scroll exclusivo para la tabla */}
                <div className="w-full overflow-auto border border-gray-300 shadow-sm bg-white">
                    {/* Se añade table-fixed para que respete el 100% de ancho de manera uniforme */}
                    <table className="w-full table-fixed border-collapse text-left font-sans text-[9px]">
                        <thead>
                            <tr className="bg-[#f8f9fa] border-b border-gray-300 sticky top-0 z-20">
                                <th className={headerStyles}>código</th>
                                <th className={headerStyles}>nombre</th>
                                <th className={headerStyles}>marca</th>
                                <th className={headerStyles}>modelo</th>
                                <th className={headerStyles}>presentación</th>
                                <th className={headerStyles}>proveedor</th>
                                <th className={headerStyles}>condición proveedor</th>
                                <th className={headerStyles}>precio unitario neto</th>
                                <th className={headerStyles}>iva</th>
                                <th className={headerStyles}>precio final</th>
                            </tr>
                        </thead>
                        <tbody>
                        {productos && productos.length > 0 ? (
                            productos.map((prod, index) => {
                                const seleccionado = seleccionados.includes(prod.id);
                                const filaBg = index % 2 === 0 ? 'bg-white' : 'bg-[#f8fafc]';
                                return (
                                    <tr
                                        key={prod.id || index}
                                        className={`opacity-50 border-b border-gray-100 hover:bg-blue-50 ${seleccionado ? 'bg-blue-100' : filaBg} cursor-pointer transition-colors`}
                                    >
                                        {/* Celdas con py-2.5 y truncate para perfecta visibilidad */}
                                        <td className="px-2 py-1 text-left  uppercase text-gray-600 border-r border-gray-100 text-[11px] truncate">{prod.codigo}</td>
                                        <td className="px-2 py-1 text-left  uppercase text-gray-800 font-medium border-r border-gray-100 text-[10px] truncate">{prod.nombre}</td>
                                        <td className="px-2 py-1 text-left  uppercase text-gray-600 border-r border-gray-100 text-[11px] truncate">{prod.marca}</td>
                                        <td className="px-2 py-1 text-left  uppercase text-gray-600 border-r border-gray-100 text-[11px] truncate">{prod.modelo}</td>
                                        <td className="px-2 py-1 text-left  uppercase text-gray-600 border-r border-gray-100 text-[11px] truncate">{prod.presentacion}</td>
                                        <td className="px-2 py-1 text-left  uppercase text-gray-600 border-r border-gray-100 text-[11px] truncate">
                                            <div className="flex items-center gap-1.5 justify-between w-full">
                                                <span>{prod.proveedor_nombre}</span>
                                                <LuInfo 
                                                    size={14}
                                                    className="text-slate-500 text-[13px] cursor-help shrink-0" 
                                                    title="Costo Real Excedente: Registro evaluado y descartado por la lógica impositiva cruzada. No representa la alternativa de desembolso óptimo para tu perfil fiscal actual."
                                                />
                                            </div>
                                        </td>
                                        <td className="px-2 py-1 text-left  uppercase text-gray-600 border-r border-gray-100 text-[11px] truncate">{prod.condicion_fiscal}</td>
                                        <td className="px-2 py-1 text-right uppercase text-gray-700 border-r border-gray-100 text-[11px]">{formatearPrecioARS(prod.precio_unitario_neto)}</td>
                                        <td className="px-2 py-1 text-right uppercase text-gray-700 border-r border-gray-100 text-[11px]">{prod.alicuota_detectada}%</td>
                                        <td className="px-2 py-1 text-right uppercase text-gray-700 border-r border-gray-100 font-semibold text-[11px]">{formatearPrecioARS(prod.precio_final)}</td>
                                    </tr>
                                );
                            })
                        ) : (
                            <tr>
                                <td colSpan="10" className="px-2 py-10 text-center text-gray-400 text-[11px] uppercase">
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