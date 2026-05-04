import React, { useState, useMemo } from 'react';
import productosRaw from '../../utilities/productos.js';

const TablaProductos = () => {
  const [listaProductos, setListaProductos] = useState(
    [...productosRaw]
      .sort((a, b) => (a.categoria || "").localeCompare(b.categoria || ""))
      .map(p => ({ ...p, iva: p.iva || 21 }))
  );

  const [filtro, setFiltro] = useState("");
  const [seleccionados, setSeleccionados] = useState([]);
  const [cantidades, setCantidades] = useState(() => {
    const init = {};
    productosRaw.forEach(p => init[p.id] = 0);
    return init;
  });

  const productosFiltrados = useMemo(() => {
    return listaProductos.filter(p => 
      p.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
      p.codigo.toLowerCase().includes(filtro.toLowerCase()) ||
      (p.marca && p.marca.toLowerCase().includes(filtro.toLowerCase()))
    );
  }, [filtro, listaProductos]);

  const handleIvaChange = (id, nuevoIva) => {
    setListaProductos(prev => prev.map(p => p.id === id ? { ...p, iva: parseFloat(nuevoIva) || 0 } : p));
  }; 

  const handleCantidadChange = (id, valor) => setCantidades(prev => ({ ...prev, [id]: Math.max(0, parseInt(valor) || 0) }));
  
  const toggleSeleccion = (id) => setSeleccionados(prev => prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id]);
  
  const toggleTodos = () => {
    const todosVisiblesSeleccionados = productosFiltrados.every(p => seleccionados.includes(p.id));
    if (todosVisiblesSeleccionados) {
      setSeleccionados(prev => prev.filter(id => !productosFiltrados.find(p => p.id === id)));
    } else {
      const nuevos = productosFiltrados.map(p => p.id);
      setSeleccionados(prev => Array.from(new Set([...prev, ...nuevos])));
    }
  };

  const handleGenerarPedido = () => {
    const pedido = seleccionados.map(id => {
      const p = listaProductos.find(prod => prod.id === id);
      return { ...p, cantidad: cantidades[id] };
    }).filter(p => p.cantidad > 0);
    
    console.log("Pedido generado:", pedido);
    alert(`Pedido generado con ${pedido.length} productos.`);
  };

  const InputNumerico = ({ value, onChange, onClick }) => (
    <div className="flex items-center justify-center gap-1" onClick={onClick}>
      <input 
        type="number" 
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-7 h-4 text-center border border-gray-300 text-[9px] appearance-none m-0 focus:outline-none focus:border-blue-400 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
      />
      <div className="flex flex-row text-[7px] text-gray-400 gap-1 items-center">
        <button onClick={() => onChange(Math.max(0, Number(value) - 1))} className="hover:text-black transition-colors">▼</button>
        <button onClick={() => onChange(Number(value) + 1)} className="hover:text-black transition-colors">▲</button>
      </div>
    </div>
  );

  return (
    <div className='w-full h-full flex flex-col bg-[#f5f3ee] p-1'>
      
      <div className="mb-1 flex flex-col gap-1">
        <div className="relative">
          <input 
            type="text"
            placeholder="Buscar por Nombre, Código ó Marca..."
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
            className="w-full h-6 px-3 bg-white border border-gray-300 rounded-none font-sans text-[10px] focus:outline-none focus:border-blue-400 shadow-sm transition-all"
          />
        </div>
      </div>

      <div className="w-full grow flex flex-col overflow-hidden bg-white border border-gray-300 shadow-sm">
        <div className="grow overflow-auto">
          <table className="w-full border-collapse text-left font-sans text-[9px]">
            <thead>
              <tr className="bg-[#f8f9fa] border-b border-gray-300 sticky top-0 z-20">
                <th className="px-1 py-1.5 text-center w-8">
                  <input 
                    type="checkbox" 
                    onChange={toggleTodos} 
                    checked={productosFiltrados.length > 0 && productosFiltrados.every(p => seleccionados.includes(p.id))} 
                    className="w-3 h-3 accent-blue-600" 
                  />
                </th>
                <th className="px-2 py-1.5 uppercase text-gray-600 font-bold border-r border-gray-200 text-center">codigo</th>
                <th className="px-2 py-1.5 uppercase text-gray-600 font-bold border-r border-gray-200 text-center">nombre</th>
                <th className="px-2 py-1.5 uppercase text-gray-600 font-bold border-r border-gray-200 text-center">marca</th>
                <th className="px-2 py-1.5 uppercase text-gray-600 font-bold border-r border-gray-200 text-center">proveedor</th>
                <th className="px-2 py-1.5 uppercase text-gray-600 font-bold border-r border-gray-200 text-center">precio unit. neto</th>
                <th className="px-2 py-1.5 uppercase text-gray-600 font-bold border-r border-gray-200 text-center">iva</th>
                <th className="px-2 py-1.5 uppercase text-gray-600 font-bold border-r border-gray-200 text-center">precio final</th>
                <th className="px-2 py-1.5 uppercase text-gray-600 font-bold border-r border-gray-200 text-center">cantidad</th>
                <th className="px-2 py-1.5 uppercase text-gray-600 font-bold text-center">subtotal</th>
              </tr>
            </thead>
            <tbody>
              {productosFiltrados.length > 0 ? (
                productosFiltrados.map((prod, index) => {
                  const isSelected = seleccionados.includes(prod.id);
                  const rowBg = index % 2 === 0 ? 'bg-white' : 'bg-[#f8fafc]';
                  
                  return (
                    <tr 
                      key={prod.id} 
                      onClick={() => toggleSeleccion(prod.id)} 
                      className={`border-b border-gray-100 hover:bg-blue-50 ${isSelected ? 'bg-blue-100' : rowBg} cursor-pointer transition-colors`}
                    >
                      <td className="px-1 py-1 text-center">
                        <input type="checkbox" checked={isSelected} readOnly className="w-3 h-3 accent-blue-600" />
                      </td>
                      <td className="px-2 py-1 text-gray-600 border-r border-gray-100">{prod.codigo}</td>
                      <td className="px-2 py-1 text-gray-800 font-medium border-r border-gray-100 whitespace-nowrap">{prod.nombre}</td>
                      <td className="px-2 py-1 text-gray-600 border-r border-gray-100">{prod.marca}</td>
                      <td className="px-2 py-1 text-gray-600 border-r border-gray-100">{prod.proveedor_nombre}</td>
                      <td className="px-2 py-1 text-right text-gray-700 border-r border-gray-100">$0.00</td>
                      <td className="px-2 py-1 border-r border-gray-100">
                        <InputNumerico 
                          value={prod.iva} 
                          onChange={(val) => handleIvaChange(prod.id, val)}
                          onClick={(e) => e.stopPropagation()}
                        />
                      </td>
                      <td className="px-2 py-1 text-right text-gray-700 border-r border-gray-100 font-semibold">$0.00</td>
                      <td className="px-2 py-1 border-r border-gray-100">
                        <InputNumerico 
                          value={cantidades[prod.id]} 
                          onChange={(val) => handleCantidadChange(prod.id, val)}
                          onClick={(e) => e.stopPropagation()}
                        />
                      </td>
                      <td className="px-2 py-1 text-right font-bold text-gray-900">$0.00</td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="10" className="px-2 py-10 text-center text-gray-400 text-[9px] uppercase">
                    No hay resultados
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* BOTÓN GENERAR PEDIDO - ESTILO JAVA FX */}
      <button 
        onClick={handleGenerarPedido}
        className="w-full mt-1 h-7 bg-[#e1e1e1] border border-gray-400 text-gray-700 font-sans text-[10px] uppercase tracking-wider shadow-sm hover:border-blue-400 hover:bg-[#e8e8e8] active:bg-[#d4d4d4] transition-all duration-200 outline-none"
      >
        Generar Pedido
      </button>

    </div>
  );
};

export default TablaProductos;