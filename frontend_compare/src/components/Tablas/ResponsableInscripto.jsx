import React, { useState } from 'react';
import productosRaw from '../../utilities/productos.js';

const ResponsableInscripto = () => {
  
  const [listaProductos, setListaProductos] = useState(
    [...productosRaw]
      .sort((a, b) => (a.categoria || "").localeCompare(b.categoria || ""))
      .map(p => ({ ...p, iva: p.iva || 21 }))
  );

  const [seleccionados, setSeleccionados] = useState([]);
  const [cantidades, setCantidades] = useState(() => {
    const init = {};
    productosRaw.forEach(p => init[p.id] = 0);
    return init;
  });

  const handleIvaChange = (id, nuevoIva) => {
    setListaProductos(prev => prev.map(p => p.id === id ? { ...p, iva: parseFloat(nuevoIva) || 0 } : p));
  }; 

  const handleCantidadChange = (id, valor) => setCantidades(prev => ({ ...prev, [id]: Math.max(0, parseInt(valor) || 0) }));
  
  const toggleSeleccion = (id) => setSeleccionados(prev => prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id]);
  const toggleTodos = () => seleccionados.length === listaProductos.length ? setSeleccionados([]) : setSeleccionados(listaProductos.map(p => p.id));

  return (
    <div className='flex-1 w-full h-full flex flex-col bg-[#f5f3ee] p-4'>
      <div className="w-full h-[85vh] flex flex-col overflow-hidden bg-white rounded-xs shadow-sm border border-gray-200">
        <div className="grow overflow-auto">
          <table className="w-full border-collapse text-left font-mono leading-tight">
            <thead>
              <tr className="border-b border-gray-800 bg-gray-50 sticky top-0 z-20">
                <th className="px-2 py-3 text-center w-8">
                  <input type="checkbox" onChange={toggleTodos} checked={seleccionados.length === listaProductos.length && listaProductos.length > 0} className="accent-black" />
                </th>
                <th className="px-2 py-3 text-[11px] uppercase text-gray-500 font-bold">codigo</th>
                <th className="px-2 py-3 text-[11px] uppercase text-gray-500 font-bold">nombre</th>
                <th className="px-2 py-3 text-[11px] uppercase text-gray-500 font-bold">marca</th>
                <th className="px-2 py-3 text-[11px] uppercase text-gray-500 font-bold">proveedor</th>
                <th className="px-2 py-3 text-[11px] uppercase text-gray-500 font-bold">condicion proveedor</th>
                <th className="px-2 py-3 text-[11px] uppercase text-gray-500 font-bold text-right">precio neto p/u</th>
                <th className="px-2 py-3 text-[11px] uppercase text-gray-500 font-bold text-center">iva</th>
                <th className="px-2 py-3 text-[11px] uppercase text-gray-500 font-bold text-right">precio final</th>
                <th className="px-2 py-3 text-[11px] uppercase text-gray-500 font-bold text-right">ahorro p/u</th>
                <th className="px-2 py-3 text-[11px] uppercase text-gray-500 font-bold text-center">cantidad</th>
                <th className="px-2 py-3 text-[11px] uppercase text-gray-500 font-bold text-right">subtotal</th>
              </tr>
            </thead>
            <tbody>
              {listaProductos.map((prod) => {
                const isSelected = seleccionados.includes(prod.id);
                return (
                  <tr key={prod.id} onClick={() => toggleSeleccion(prod.id)} className={`border-b border-gray-100 hover:bg-gray-50 ${isSelected ? 'bg-gray-50' : ''} cursor-pointer`}>
                    <td className="px-2 py-3 text-center">
                      <input 
                        type="checkbox" 
                        checked={isSelected} 
                        onChange={() => {}} 
                        className="accent-black" 
                      />
                    </td>
                    <td className="px-2 py-3 text-[11px] text-gray-700">{prod.codigo}</td>
                    <td className="px-2 py-3 text-[11px] text-gray-700 font-bold">{prod.nombre}</td>
                    <td className="px-2 py-3 text-[11px] text-gray-700">{prod.marca}</td>
                    <td className="px-2 py-3 text-[11px] text-gray-700">{prod.proveedor_nombre}</td>
                    <td className="px-2 py-3 text-[11px] text-right text-gray-900">-</td>
                    <td className="px-2 py-3 text-center">
                      <input 
                        type="number" 
                        value={prod.iva} 
                        onChange={(e) => handleIvaChange(prod.id, e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                        className="w-12 h-7 text-center border border-gray-200 text-[11px] focus:outline-none focus:border-black"
                      />
                    </td>
                    <td className="px-2 py-3 text-[11px] text-right text-gray-900">-</td>
                    <td className="px-2 py-3 text-[13px] text-green-950 text-right font-bold">-</td>
                    <td className="px-2 py-3 text-center">
                      <input
                        type="number"
                        min={0}
                        value={cantidades[prod.id]}
                        onChange={(e) => handleCantidadChange(prod.id, e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                        className="w-10 h-7 text-center border border-gray-300 text-[11px]"
                      />
                    </td>
                    <td className="px-2 py-3 text-[12px] text-slate-800 text-right font-bold">-</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Sección de Totales */}
      <div className="flex flex-row justify-end mt-2 mx-4 mb-2 gap-3 font-mono">

        {/* Tarjeta Ahorro */}
        <div className="bg-white rounded-xs px-5 py-1.5 flex-1 max-w-85 border border-black/10">
          <p className="text-[13px] font-bold uppercase tracking-widest text-gray-400 mb-0.5">ahorro total</p>
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-[13px] font-medium text-gray-400">ARS</span>
            <span className="text-[24px] font-extrabold text-green-950 leading-none">-</span>
          </div>
          <p className="text-[12px] text-gray-400 text-center mt-0.5">VS comprarle TODO al proveedor más caro.</p>
        </div>

        {/* Tarjeta Total */}
        <div className="bg-white rounded-xs px-5 py-1.5 flex-1 max-w-[340px] border border-black/10">
          <p className="text-[13px] font-bold uppercase tracking-widest text-gray-400 mb-0.5">total</p>
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-[13px] font-medium text-gray-400">ARS</span>
            <span className="text-[24px] font-extrabold text-slate-800 leading-none">-</span>
          </div>
          <p className="text-[12px] text-gray-400 text-center mt-0.5">No incluye envío ni impuestos provinciales.</p>
        </div>

      </div>
    </div>
  );
};

export default ResponsableInscripto;