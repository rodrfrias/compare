import React, { useState, useMemo } from 'react';
import productosRaw from '../../../utilities/productos.js';
import ModalPedido from '../Pedido/ModalPedido.jsx';
import comparacionPreciosPro from "../../../utilities/ModuloComparacion/compPro.js"
import ModalDifProductos from './ModalDifProductos.jsx';
import { TbCircleCheck } from "react-icons/tb";


//_____Buscamos los productos con mejores precios (Provisional)_________________

const [prodGanadores, prodRechazados]= comparacionPreciosPro(productosRaw,"Responsable Inscripto");

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
  prodGanadores.forEach(p => init[p.id] = 0);
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
      className="w-7 h-4 text-center border border-gray-300 text-[11px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:outline-none focus:border-blue-400"
    />
    <div className="flex flex-row text-[7px] text-gray-400 gap-1 items-center">
      <button onClick={(e) => { e.stopPropagation(); onChange(Math.max(0, Number(value) - 1)); }} className="hover:text-black text-[10px]">▼</button>
      <button onClick={(e) => { e.stopPropagation(); onChange(Number(value) + 1); }} className="hover:text-black text-[10px]">▲</button>
    </div>
  </div>
);


// ────────────────────────────────────────────────────────────────────────────
const TablaProductos = () => {
  const [listaProductos, setListaProductos] = useState(ordenarPorCategoria(prodGanadores));
  const [filtro, setFiltro]                 = useState("");
  const [seleccionados, setSeleccionados]   = useState([]);
  const [cantidades, setCantidades]         = useState(inicializarCantidades);
  // 1. Definimos el estado para controlar la visibilidad
  const [isModalOpen, setIsModalOpen] = useState(false);
  // 2. Definimos el estado para controlar la visibilidad del Modal de diferencia de productos
  const [mostrarModalDif, setMostrarModalDif] = useState(false);
  // Para los productos Rechazados
  const [rechazadosFiltrados, setRechazadosFiltrados] = useState([]);

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

  // ___MODAL_____________________________________________________________________

  // 2. Funciona para abrir el Modal
  const handleOpenModal = () => {
      setIsModalOpen(true);
    }

  // 3. Funcion para cerrar el Modal
  const handleCloseModal = () => {
      setIsModalOpen(false);
    }

  const handleMostrarModalDif = () => {
    setMostrarModalDif(true);
  }

  const handleCerrarModalDif = () => {
    setMostrarModalDif(false);
    setRechazadosFiltrados([]); // Limpiamos el estado al cerrar
  }

  // Para mostrar buscar los pro rechazados /  Filtra basándose en el producto seleccionado de la fila 
  const buscarProductosRechazadosPara = (productoActual) => {
    const coincidentes = prodRechazados.filter(p => 
      p.nombre?.toLowerCase() === productoActual.nombre?.toLowerCase() &&
      p.marca?.toLowerCase() === productoActual.marca?.toLowerCase() &&
      p.modelo?.toLowerCase() === productoActual.modelo?.toLowerCase() &&
      p.presentacion?.toLowerCase() === productoActual.presentacion?.toLowerCase()
    );
    
    setRechazadosFiltrados(coincidentes);
  }

  const headerStyles = `
  px-2 py-2 
  text-[10px] font-semibold uppercase tracking-wider text-[#555]
  bg-gradient-to-b from-[#f9f9f9] to-[#e8e8e7] 
  border-r-[0.5px] border-b-[0.5px] border-[#c0bfb8]
  shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]
  text-center
`;

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <div className='w-full h-full flex flex-col bg-[#f3f4f6] p-1'>

      {/* Buscador */}
      <div className="mb-1">
        <input
          type="text"
          placeholder="Buscar por Nombre, Código ó Marca..."
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          className="w-full h-6 px-3 bg-white border border-gray-300 font-sans text-[12px] focus:outline-none focus:border-blue-400 shadow-sm"
        />
      </div>

      {/* Tabla */}
      <div className="w-full grow flex flex-col overflow-hidden bg-white border border-gray-300 shadow-sm">
        <div className="grow overflow-auto">
          <table className="w-full border-collapse text-left font-sans text-[9px]">
            <thead>
              <tr className="bg-[#f8f9fa] border-b border-gray-300 sticky top-0 z-20">
                <th className={headerStyles}>
                  <input
                    type="checkbox"
                    onChange={toggleTodos}
                    checked={productosFiltrados.length > 0 && productosFiltrados.every(p => seleccionados.includes(p.id))}
                    className="w-3 h-3 accent-blue-600"
                  />
                </th>
                <th className={`${headerStyles} min-w-[120px]`}>código</th>
                <th className={headerStyles}>nombre</th>
                <th className={headerStyles}>marca</th>
                <th className={headerStyles}>modelo</th>
                <th className={headerStyles}>presentación</th>
                <th className={headerStyles}>proveedor</th>
                <th className={headerStyles}>condición proveedor</th>
                <th className={headerStyles}>precio unitario neto</th>
                <th className={headerStyles}>iva</th>
                <th className={headerStyles}>precio final</th>
                <th className={headerStyles}>diferencia unitaria</th>
                <th className={headerStyles}>cantidad</th>
                <th className={headerStyles}>subtotal</th>
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
                    <td className="px-2 py-1 uppercase text-gray-600 border-r border-gray-100 text-[11px]">{prod.codigo}</td>
                    <td className="px-2 py-1 uppercase text-gray-800 font-medium border-r border-gray-100 whitespace-nowrap text-[10px]">{prod.nombre}</td>
                    <td className="px-2 py-1 uppercase text-gray-600 border-r border-gray-100 text-[11px]">{prod.marca}</td>
                    <td className="px-2 py-1 uppercase text-gray-600 border-r border-gray-100 text-[11px]">{prod.modelo}</td>
                    <td className="px-2 py-1 uppercase text-gray-600 border-r border-gray-100 text-[11px]">{prod.presentacion}</td>
                    <td className="px-2 py-1 uppercase text-gray-600 border-r border-gray-100 text-[11px]">
                      <div className="flex items-center gap-1.5 justify-between w-full">
                        <span>{prod.proveedor_nombre}</span>
                        {prod.diferencia > 0 ? (
                        <TbCircleCheck 
                          size={14}
                          className="text-slate-500 text-[13px] cursor-help shrink-0" 
                          title="Eficiencia de Compra: Opción validada mediante el análisis de impacto impositivo cruzado entre comprador y proveedor. Maximiza tu margen de ganancia."
                        />): ""}
                        
                      </div>
                    </td>
                    <td className="px-2 py-1 uppercase text-gray-600 border-r border-gray-100 text-[11px]">{prod.condicion_fiscal}</td>
                    <td className="px-2 py-1 uppercase text-right text-gray-700 border-r border-gray-100 text-[11px]">{formatearPrecioARS(prod.precio_unitario_neto)}</td>
                    <td className="px-2 py-1 uppercase border-r border-gray-100 text-[11px]" onClick={(e) => e.stopPropagation()}>
                      <InputNumerico value={prod.iva} onChange={(val) => cambiarIva(prod.id, val)} />
                    </td>
                    <td className="px-2 py-1 text-right text-gray-700 border-r border-gray-100 text-[11px]">{formatearPrecioARS(prod.precio_final)}</td>
                    <td className='px-2 py-1 text-center border-r border-gray-100'>
                      {prod.diferencia && prod.diferencia > 0 ?
                      (<span title='Optimización de Costo Real: Este indicador representa el beneficio económico directo obtenido al seleccionar la alternativa más eficiente frente al precio máximo identificado en el mercado para este mismo producto.' className='uppercase text-[11px] text-blue-900 font-extrabold inline-block transition-transform duration-100 hover:scale-110 cursor-pointer' onClick={() => {setMostrarModalDif(true) ; buscarProductosRechazadosPara(prod)}}>{formatearPrecioARS(prod.diferencia)}</span>)
                      :(<span className='uppercase text-gray-600 text-[11px]'>producto único</span>)}</td>
                    <td className="px-2 py-1 border-r border-gray-100" onClick={(e) => e.stopPropagation()}>
                      <InputNumerico value={cantidades[prod.id]} onChange={(val) => cambiarCantidad(prod.id, val)} />
                    </td>
                    <td className="px-2 py-1 text-right font-semibold text-gray-900 text-[11px]">{ formatearPrecioARS(subtotal)}</td>
                  </tr>
                );
              }) : (
                <tr>
                  <td colSpan="13" className="px-2 py-10 text-center text-gray-400 text-[10px] uppercase">
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
          onClick={handleOpenModal}
          className="
            w-full mt-1 h-8 
            /* Tipografía y Texto */
            text-[10px] font-bold uppercase tracking-[0.12em] text-[#444]
            
            /* Fondo y Gradiente (Efecto JavaFX) */
            bg-gradient-to-b from-[#ffffff] to-[#f2f2f2] 
            hover:from-[#f9f9f9] hover:to-[#e8e8e8]
            
            /* Bordes y Profundidad */
            border-[0.5px] border-[#c0bfb8]
            shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_1px_2px_rgba(0,0,0,0.05)]
            
            /* Estados y Transición */
            transition-all duration-200 
            active:scale-[0.98] active:from-[#ececec] active:to-[#dadada]
            outline-none cursor-pointer
          "
        >
          confirmar selección
      </button>
      <ModalPedido isOpen = {isModalOpen} onClose={handleCloseModal}></ModalPedido>
      <ModalDifProductos isOpen = {mostrarModalDif} onClose={handleCerrarModalDif } productos={rechazadosFiltrados}></ModalDifProductos>
    </div>
  );
};

export default TablaProductos;