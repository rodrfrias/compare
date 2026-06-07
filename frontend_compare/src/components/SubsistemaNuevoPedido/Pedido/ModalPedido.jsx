import React from 'react';
import TablaOrdenCompra from "./TablaOrdenCompra";
import { LuFileSearch2 } from "react-icons/lu";
import { LuSend } from "react-icons/lu";

const ModalPedido = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const mainButtonClass = 'h-8 px-10 text-[10px] font-bold uppercase tracking-[0.12em] text-[#444] bg-gradient-to-b from-[#ffffff] to-[#f2f2f2] hover:from-[#f9f9f9] hover:to-[#e8e8e8] border-[0.5px] border-[#c0bfb8] shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_1px_2px_rgba(0,0,0,0.05)] transition-all duration-200 active:scale-[0.98] active:from-[#ececec] active:to-[#dadada] outline-none cursor-pointer';
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-[1px]">
      <div className="bg-[#ffffff] border-[0.5px] border-[#c0bfb8] w-screen h-screen font-sans shadow-2xl flex flex-col justify-between overflow-hidden">
        
        {/* Encabezado - Pegado arriba con un padding interno sutil */}
        <div className="px-4 py-1 border-b-[0.5px] border-[#e2e1da] flex justify-between items-center bg-[#f5f4f0] shrink-0">
          <span className="text-[11px] font-semibold text-[#555] tracking-widest uppercase">
            Resumen de Pedido
          </span>
          <span className="text-[11px] font-mono text-gray-400">ID: RE-2026-0042</span>
        </div>

        {/* Cuerpo del Modal 
          RETOQUE: Cambiado 'py-4' a 'py-2' y aumentado el espacio entre columnas con 'gap-6' para aprovechar el ancho.
        */}
        <div className="px-4 py-2 flex flex-1 gap-6 overflow-hidden">
          
          {/* ================= COLUMNA IZQUIERDA (75%) ================= */}
          <div className="w-9/12 flex flex-col h-full justify-between overflow-y-auto pr-1">
            
            <div className="flex flex-col flex-1">
              {/* PRIMERA LÍNEA DE TARJETAS: Ahorro (Azul) + Órdenes */}
              <div className="grid grid-cols-3 gap-3 mb-2 shrink-0">
                {/* Tarjeta Ahorro Total */}
                <div className="col-span-2 border-[0.5px] border-[#c0bfb8] py-3 bg-[#0B3C61] flex flex-col items-center justify-center shadow-[inset_0_1px_3px_rgba(0,0,0,0.2)]">
                  <p className="text-[10px] font-bold text-white uppercase tracking-[0.15em] mb-0.5">
                    Ahorro Total Potencial (Vs. proveedor más costoso)
                  </p>
                  <div className="flex items-baseline gap-2">
                    <p className="text-[36px] font-bold text-white leading-none tracking-tight">
                      $ 15.200,60
                    </p>
                    <span className="text-[13px] font-bold text-blue-200 tracking-wider">ARS</span>
                  </div>
                </div>

                {/* Tarjeta Órdenes Generadas */}
                <div className="border-[0.5px] border-[#e2e1da] py-3 bg-[#ffffff] flex flex-col items-center justify-center text-center">
                  <p className="text-[10px] font-bold text-[#999] uppercase tracking-[0.12em] mb-1">
                    Órdenes Generadas:
                  </p>
                  <p className="text-[32px] font-bold text-gray-800 leading-none">
                    3
                  </p>
                </div>
              </div>

              {/* SEGUNDA LÍNEA DE TARJETAS: Métricas secundarias */}
              <div className="grid grid-cols-2 gap-3 mb-3 shrink-0">
                {/* Total de Productos */}
                <div className="border-[0.5px] border-[#e2e1da] px-4 py-2.5 bg-[#ffffff] text-center">
                  <p className="text-[10px] font-bold text-[#999] uppercase tracking-[0.12em] mb-0.5">
                    Unidades Totales:
                  </p>
                  <div className="flex items-baseline justify-center gap-1.5">
                    <p className="text-[22px] font-bold text-gray-800 leading-none">
                      24 Unidades
                    </p>
                  </div>
                </div>
                
                {/* Costo de Órdenes Actuales */}
                <div className="border-[0.5px] border-[#e2e1da] px-4 py-2.5 bg-[#ffffff] text-center">
                  <p className="text-[10px] font-bold text-[#999] uppercase tracking-[0.12em] mb-0.5">
                    Costo de Órdenes Actuales:
                  </p>
                  <div className="flex items-baseline justify-center gap-1.5">
                    <p className="text-[22px] font-bold text-gray-800 leading-none">
                      $ 881.157,52
                    </p>
                    <span className="text-[10px] font-bold text-[#aaa]">ARS</span>
                  </div>
                </div>
              </div>

              {/* Contenedor de la Tabla 
                RETOQUE: Se cambió 'min-h-88' por 'flex-1' para que la tabla absorba todo el alto vertical restante del monitor de manera automática.
              */}
              <div className='flex flex-1 items-start border border-black/10 mb-2 bg-[#ffffff] overflow-hidden'>
                <TablaOrdenCompra />
              </div>
            </div>

            {/* Bloque de Advertencia Legal */}
            <div className="bg-[#333333] border-[0.5px] border-[#222] p-2 shrink-0">
              <p className="text-[10px] text-[#eaeaea] text-left">
                * Valores impositivos y cálculos de ahorro presentados son estimativos y se encuentran sujetos a las variaciones de la facturación final emitida por cada proveedor.
              </p>
            </div>
          </div>

          {/* ================= COLUMNA DERECHA (25%) ================= */}
          <div className="w-3/12 border-[0.5px] border-[#c0bfb8] bg-[#fafaf8] p-3 flex flex-col h-full justify-between shadow-sm">
            <div className="flex flex-col items-center justify-center h-full border border-dashed border-[#c0bfb8] bg-[#ffffff] text-gray-400 p-4 text-center">
              <p className="text-[11px] uppercase tracking-wider font-medium text-[#777]">
                Panel de Configuración
              </p>
              <p className="text-[10px] text-gray-400 mt-1 max-w-[220px]">
                Selecciona una orden de la tabla para definir su método de pago, plazo de entrega y observaciones.
              </p>
            </div>
          </div>

        </div>

        {/* Barra de Acciones General Inferior 
          RETOQUE: Se redujo 'py-3' a 'py-2' para que el botón "cancelar" esté perfectamente al ras inferior.
        */}
        <div className='px-4 py-2 bg-[#f5f4f0] border-t-[0.5px] border-[#e2e1da] flex items-center justify-between gap-2 shrink-0'>
          <button className={`${mainButtonClass} flex items-center justify-center gap-2`}>
            <LuFileSearch2 className="w-3.5 h-3.5 text-[#555] shrink-0" />
            <span>ver documento de orden</span>
          </button>
          <div className='flex items-center gap-2'>
            <button className={`${mainButtonClass} flex items-center justify-center gap-2`}>
              <LuSend className="w-3.5 h-3.5 shrink-0" />
              <span>enviar orden</span>
            </button>
            <button onClick={onClose} className={mainButtonClass}>
            cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPedido;