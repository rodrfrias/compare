import React from 'react';
import TablaOrdenCompra from "./TablaOrdenCompra";

const ModalPedido = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const mainButtonClass = 'h-8 px-10 text-[10px] font-bold uppercase tracking-[0.12em] text-[#444] bg-gradient-to-b from-[#ffffff] to-[#f2f2f2] hover:from-[#f9f9f9] hover:to-[#e8e8e8] border-[0.5px] border-[#c0bfb8] shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_1px_2px_rgba(0,0,0,0.05)] transition-all duration-200 active:scale-[0.98] active:from-[#ececec] active:to-[#dadada] outline-none cursor-pointer';
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-[1px]">
      <div className="bg-[#ffffff] border-[0.5px] border-[#c0bfb8] w-full max-w-[1200px] h-[650px] font-sans shadow-2xl">
        
        {/* Encabezado - Altura mínima */}
        <div className="px-2 py-1.5 border-b-[0.5px] border-[#e2e1da] flex justify-between items-center bg-[#f5f4f0]">
          <span className="text-[10px] font-semibold text-[#555] tracking-widest uppercase">
            Resumen de Pedido
          </span>
          <span className="text-[10px] font-mono text-gray-400">ID: RE-2026-0042</span>
        </div>

        {/* Cuerpo - Padding reducido para compactar */}
        <div className="px-2 py-2">

          {/* PRIMERA LÍNEA DE TARJETAS: Ahorro (Azul) + Órdenes */}
          <div className="grid grid-cols-3 gap-2 mb-2">
            
            {/* Tarjeta Ahorro Total (Ocupa 2 columnas - Fondo Azul) */}
            <div className="col-span-2 border-[0.5px] border-[#c0bfb8] py-3 bg-[#11224d] flex flex-col items-center justify-center shadow-[inset_0_1px_3px_rgba(0,0,0,0.2)]">
              <p className="text-[9px] font-bold text-blue-200 uppercase tracking-[0.15em] mb-0.5">
                Ahorro Total Potencial (Vs. proveedor más costoso)
              </p>
              <div className="flex items-baseline gap-2">
                <p className="text-[35px] font-bold text-white leading-none tracking-tight">
                  $ 15.200,60
                </p>
                <span className="text-[12px] font-bold text-blue-200 tracking-wider">ARS</span>
              </div>
            </div>

            {/* Tarjeta Órdenes Generadas (Ocupa 1 columna) */}
            <div className="border-[0.5px] border-[#e2e1da] py-3 bg-[#ffffff] flex flex-col items-center justify-center text-center">
              <p className="text-[9px] font-bold text-[#999] uppercase tracking-[0.12em] mb-1">
                Órdenes Generadas:
              </p>
              <p className="text-[30px] font-bold text-gray-800 leading-none">
                3
              </p>
            </div>
          </div>

          {/* SEGUNDA LÍNEA DE TARJETAS: Métricas secundarias de costos */}
          <div className="grid grid-cols-2 gap-2 mb-3">
          
            {/* Total de Productos (Volumen de la compra) */}
            <div className="border-[0.5px] border-[#e2e1da] px-4 py-3 bg-[#ffffff] text-center">
              <p className="text-[9px] font-bold text-[#999] uppercase tracking-[0.12em] mb-0.5">
                Unidades Totales:
              </p>
              <div className="flex items-baseline justify-center gap-1.5">
                <p className="text-[22px] font-bold text-gray-800 leading-none">
                  24 Unidades
                </p>
              </div>
            </div>
            
            {/* Costo de Órdenes Actuales */}
            <div className="border-[0.5px] border-[#e2e1da] px-4 py-3 bg-[#ffffff] text-center">
              <p className="text-[9px] font-bold text-[#999] uppercase tracking-[0.12em] mb-0.5">
                Costo de Órdenes Actuales:
              </p>
              <div className="flex items-baseline justify-center gap-1.5">
                <p className="text-[22px] font-bold text-gray-800 leading-none">
                  $ 881.157,52
                </p>
                <span className="text-[9px] font-bold text-[#aaa]">ARS</span>
              </div>
            </div>
          </div>

          {/* Contenedor de la Tabla */}
          <div className='flex items-start min-h-90 border border-black/10 mb-2'>
            <TablaOrdenCompra />
          </div>

          {/* Bloque de Advertencia Legal - Estilo banner inferior como en la imagen */}
          <div className="bg-[#333333] border-[0.5px] border-[#222] p-2 mb-3">
            <p className="text-[10px] text-[#eaeaea] text-left">
              * Valores impositivos y cálculos de ahorro presentados son estimativos y se encuentran sujetos a las variaciones de la facturación final emitida por cada proveedor.[cite: 1]
            </p>
          </div>
          <div className='flex items-center justify-end mt-2 gap-2'>
            <div>
              <button className= {mainButtonClass}> preparar y enviar</button>
            </div>
            <div>
              <button onClick={onClose} className= {mainButtonClass}> cancelar</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPedido;