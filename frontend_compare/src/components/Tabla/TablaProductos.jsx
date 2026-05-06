import React, { useState, useMemo } from 'react';
import productosRaw from '../../utilities/productos.js';

// ─── Aplanar datos ───────────────────────────────────────────────────────────
const productosAplanados = productosRaw.flatMap(item =>
  item.producto.map(p => ({
    ...p,
    proveedor_nombre: item.proveedor.proveedor_nombre,
    condicion_fiscal: item.proveedor.condicion_fiscal,
    iva: p.alicuota_detectada ?? 21,
  }))
);

// ─── Calcular subtotal ───────────────────────────────────────────────────────
const calcularSubtotal = (precioFinal, cantidad) =>
  (precioFinal * (cantidad || 0)).toFixed(2);

const formatearPrecioARS = (precio) => {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 2
  }).format(precio);
};

// ─── Inicializar cantidades ──────────────────────────────────────────────────
const inicializarCantidades = () => {
  const init = {};
  productosAplanados.forEach(p => init[p.id] = 0);
  return init;
};

// ─── Filtrar productos ───────────────────────────────────────────────────────
const filtrarProductos = (lista, filtro) =>
  lista.filter(p =>
    p.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
    p.codigo.toLowerCase().includes(filtro.toLowerCase()) ||
    (p.marca && p.marca.toLowerCase().includes(filtro.toLowerCase()))
  );

// ─── Ordenar por categoría ───────────────────────────────────────────────────
const ordenarPorCategoria = (lista) =>
  [...lista].sort((a, b) => (a.categoria || "").localeCompare(b.categoria || ""));

// ─── Componente InputNumerico ────────────────────────────────────────────────
const InputNumerico = ({ value, onChange }) => (
  <div className="flex items-center justify-center gap-1">
    <input
      type="number"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-7 h-4 text-center border border-gray-300 text-[9px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:outline-none focus:border-blue-400"
    />
    <div className="flex flex-row text-[7px] text-gray-400 gap-1 items-center">
      <button onClick={(e) => { e.stopPropagation(); onChange(Math.max(0, Number(value) - 1)); }} className="hover:text-black">▼</button>
      <button onClick={(e) => { e.stopPropagation(); onChange(Number(value) + 1); }} className="hover:text-black">▲</button>
    </div>
  </div>
);


// ────────────────────────────────────────────────────────────────────────────
const TablaProductos = () => {
  const [listaProductos, setListaProductos] = useState(ordenarPorCategoria(productosAplanados));
  const [filtro, setFiltro]                 = useState("");
  const [seleccionados, setSeleccionados]   = useState([]);
  const [cantidades, setCantidades]         = useState(inicializarCantidades);

  const productosFiltrados = useMemo(
    () => filtrarProductos(listaProductos, filtro),
    [filtro, listaProductos]
  );

  // ── Handlers ──────────────────────────────────────────────────────────────

  // Esta función busca un producto específico dentro de una lista y modifica solo su propiedad iva
  const cambiarIva = (id, nuevoIva) =>
    setListaProductos(prev => prev.map(p =>
      p.id === id ? { ...p, iva: parseFloat(nuevoIva) || 0 } : p
    ));

  const cambiarCantidad = (id, valor) =>
    setCantidades(prev => ({ ...prev, [id]: Math.max(0, parseInt(valor) || 0) }));

  // Esta función sirve para seleccionar o deseleccionar un ítem individualmente
  const toggleSeleccion = (id) =>
    setSeleccionados(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );

  const toggleTodos = () => {
    const todosSeleccionados = productosFiltrados.every(p => seleccionados.includes(p.id));
    if (todosSeleccionados) {
      setSeleccionados(prev => prev.filter(id => !productosFiltrados.find(p => p.id === id)));
    } else {
      const nuevos = productosFiltrados.map(p => p.id);
      setSeleccionados(prev => Array.from(new Set([...prev, ...nuevos])));
    }
  };

  const generarPedido = () => {
    const pedido = seleccionados
      .map(id => ({ ...listaProductos.find(p => p.id === id), cantidad: cantidades[id] }))
      .filter(p => p.cantidad > 0);

    console.log("Pedido generado:", pedido);
    alert(`Pedido generado con ${pedido.length} productos.`);
  };

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <div className='w-full h-full flex flex-col bg-[#f5f3ee] p-1'>

      {/* Buscador */}
      <div className="mb-1">
        <input
          type="text"
          placeholder="Buscar por Nombre, Código ó Marca..."
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          className="w-full h-6 px-3 bg-white border border-gray-300 font-sans text-[10px] focus:outline-none focus:border-blue-400 shadow-sm"
        />
      </div>

      {/* Tabla */}
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
                <th className="px-2 py-1.5 uppercase text-gray-600 font-bold border-r border-gray-200 text-center">modelo</th>
                <th className="px-2 py-1.5 uppercase text-gray-600 font-bold border-r border-gray-200 text-center">presentacion</th>
                <th className="px-2 py-1.5 uppercase text-gray-600 font-bold border-r border-gray-200 text-center">proveedor</th>
                <th className="px-2 py-1.5 uppercase text-gray-600 font-bold border-r border-gray-200 text-center">condicion proveedor</th>
                <th className="px-2 py-1.5 uppercase text-gray-600 font-bold border-r border-gray-200 text-center">precio unit. neto</th>
                <th className="px-2 py-1.5 uppercase text-gray-600 font-bold border-r border-gray-200 text-center">iva</th>
                <th className="px-2 py-1.5 uppercase text-gray-600 font-bold border-r border-gray-200 text-center">precio final</th>
                <th className='px-2 py-1.5 uppercase text-gray-600 font-bold border-r border-gray-200 text center'>ahorro unit</th>
                <th className="px-2 py-1.5 uppercase text-gray-600 font-bold border-r border-gray-200 text-center">cantidad</th>
                <th className="px-2 py-1.5 uppercase text-gray-600 font-bold text-center">subtotal</th>
              </tr>
            </thead>
            <tbody>
              {productosFiltrados.length > 0 ? productosFiltrados.map((prod, index) => {
                const seleccionado = seleccionados.includes(prod.id);
                const filaBg       = index % 2 === 0 ? 'bg-white' : 'bg-[#f8fafc]';
                const subtotal     = calcularSubtotal(prod.precio_final, cantidades[prod.id]);

                return (
                  <tr
                    key={prod.id}
                    onClick={() => toggleSeleccion(prod.id)}
                    className={`border-b border-gray-100 hover:bg-blue-50 ${seleccionado ? 'bg-blue-100' : filaBg} cursor-pointer transition-colors`}
                  >
                    <td className="px-1 py-1 text-center">
                      <input type="checkbox" checked={seleccionado} readOnly className="w-3 h-3 accent-blue-600" />
                    </td>
                    <td className="px-2 py-1 uppercase text-gray-600 border-r border-gray-100">{prod.codigo}</td>
                    <td className="px-2 py-1 uppercase text-gray-800 font-medium border-r border-gray-100 whitespace-nowrap">{prod.nombre}</td>
                    <td className="px-2 py-1 uppercase text-gray-600 border-r border-gray-100">{prod.marca}</td>
                    <td className="px-2 py-1 uppercase text-gray-600 border-r border-gray-100">{prod.modelo}</td>
                    <td className="px-2 py-1 uppercase text-gray-600 border-r border-gray-100">{prod.presentacion}</td>
                    <td className="px-2 py-1 uppercase text-gray-600 border-r border-gray-100">{prod.proveedor_nombre}</td>
                    <td className="px-2 py-1 uppercase text-gray-600 border-r border-gray-100">{prod.condicion_fiscal}</td>
                    <td className="px-2 py-1 uppercase text-right text-gray-700 border-r border-gray-100">{formatearPrecioARS(prod.precio_unitario_neto)}</td>
                    <td className="px-2 py-1 uppercase border-r border-gray-100" onClick={(e) => e.stopPropagation()}>
                      <InputNumerico value={prod.iva} onChange={(val) => cambiarIva(prod.id, val)} />
                    </td>
                    <td className="px-2 py-1 text-right text-gray-700 border-r border-gray-100 font-semibold">{formatearPrecioARS(prod.precio_final)}</td>
                    <td className='px-2 py-1 text-right text-gray-700 border-r border-gray-100 font-semibold'></td>
                    <td className="px-2 py-1 border-r border-gray-100" onClick={(e) => e.stopPropagation()}>
                      <InputNumerico value={cantidades[prod.id]} onChange={(val) => cambiarCantidad(prod.id, val)} />
                    </td>
                    <td className="px-2 py-1 text-right font-bold text-gray-900">{ formatearPrecioARS(subtotal)}</td>
                  </tr>
                );
              }) : (
                <tr>
                  <td colSpan="13" className="px-2 py-10 text-center text-gray-400 text-[9px] uppercase">
                    No hay resultados
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Botón */}
      <button
        onClick={generarPedido}
        className="w-full mt-1 h-7 bg-[#e1e1e1] border border-gray-400 text-gray-700 font-sans text-[10px] uppercase tracking-wider shadow-sm hover:border-blue-400 hover:bg-[#e8e8e8] active:bg-[#d4d4d4] transition-all duration-200 outline-none"
      >
        Generar Pedido
      </button>

    </div>
  );
};

export default TablaProductos;