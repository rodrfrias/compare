import React from 'react';
import TablaOrdenCompra from "./TablaOrdenCompra";
import { LuFileSearch2, LuSend, LuSlidersHorizontal } from "react-icons/lu";

// Sombras suaves y difusas compartidas por todas las tarjetas
const cardClass =
  'bg-white border-[0.5px] border-[#dcdad2] rounded-[4px] shadow-[0_6px_20px_-6px_rgba(15,30,50,0.10),0_1px_3px_rgba(15,30,50,0.05)]';

// Idéntico al botón "CONFIRMAR SELECCIÓN" de la interfaz principal
const mainButtonClass =
  'h-9 px-8 text-[10px] font-bold uppercase tracking-[0.14em] text-[#333] bg-gradient-to-b from-[#ffffff] to-[#f1f0ec] hover:from-[#fafaf8] hover:to-[#e7e6e1] border-[0.5px] border-[#c0bfb8] rounded-[3px] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_1px_2px_rgba(0,0,0,0.06)] transition-all duration-200 active:scale-[0.98] active:from-[#ececec] active:to-[#dadada] outline-none focus-visible:ring-2 focus-visible:ring-[#0B3C61]/40 cursor-pointer flex items-center justify-center gap-2';

// Variante prominente: mismo molde, relleno oscuro como el avatar de perfil
const primaryButtonClass =
  'h-9 px-8 text-[10px] font-bold uppercase tracking-[0.14em] text-white bg-gradient-to-b from-[#26323f] to-[#141c26] hover:from-[#2e3b4a] hover:to-[#1a232e] border-[0.5px] border-[#0d141c] rounded-[3px] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_2px_6px_rgba(15,30,50,0.25)] transition-all duration-200 active:scale-[0.98] outline-none focus-visible:ring-2 focus-visible:ring-[#0B3C61]/50 cursor-pointer flex items-center justify-center gap-2';

const labelClass = 'text-[10px] font-medium text-[#8a8982] uppercase tracking-[0.14em]';

const ModalPedido = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-[1px]">
      <div className="bg-white w-screen h-screen font-sans flex flex-col overflow-hidden">

        {/* Encabezado */}
        <div className="px-5 py-2 border-b-[0.5px] border-[#e2e1da] flex justify-between items-center bg-[#f5f4f0] shrink-0">
          <span className="text-[11px] font-semibold text-[#555] tracking-widest uppercase">
            Resumen de Pedido
          </span>
          <span className="text-[11px] font-mono text-gray-400">ID: RE-2026-0042</span>
        </div>

        {/* Cuerpo */}
        <div className="px-5 py-4 flex flex-1 gap-6 overflow-hidden min-h-0">

          {/* ============ COLUMNA IZQUIERDA ============ */}
          <div className="w-9/12 flex flex-col h-full min-h-0 gap-4">

            {/* Fila 1: Ahorro + Órdenes */}
            <div className="grid grid-cols-3 gap-4 shrink-0">
              <div className={`${cardClass} col-span-2 py-5 flex flex-col items-center justify-center border-t-2 border-t-[#0B3C61]`}>
                <p className={labelClass}>
                  Ahorro Total Potencial (Vs. proveedor más costoso)
                </p>
                <div className="flex items-baseline gap-2 mt-1.5">
                  <p className="text-[48px] font-extrabold text-[#0B3C61] leading-none tracking-tight tabular-nums">
                    $ 15.200,60
                  </p>
                  <span className="text-[13px] font-semibold text-[#6b8aa6] tracking-wider">ARS</span>
                </div>
              </div>

              <div className={`${cardClass} py-5 flex flex-col items-center justify-center text-center`}>
                <p className={`${labelClass} mb-1.5`}>Órdenes Generadas:</p>
                <p className="text-[44px] font-extrabold text-[#1f2933] leading-none tabular-nums">3</p>
              </div>
            </div>

            {/* Fila 2: Métricas secundarias */}
            <div className="grid grid-cols-2 gap-4 shrink-0">
              <div className={`${cardClass} px-4 py-3.5 text-center`}>
                <p className={`${labelClass} mb-1`}>Unidades Totales:</p>
                <p className="text-[28px] font-extrabold text-[#1f2933] leading-none tabular-nums">
                  24 Unidades
                </p>
              </div>

              <div className={`${cardClass} px-4 py-3.5 text-center`}>
                <p className={`${labelClass} mb-1`}>Costo de Órdenes Actuales:</p>
                <div className="flex items-baseline justify-center gap-1.5">
                  <p className="text-[28px] font-extrabold text-[#1f2933] leading-none tabular-nums">
                    $ 881.157,52
                  </p>
                  <span className="text-[10px] font-semibold text-[#9a998f]">ARS</span>
                </div>
              </div>
            </div>

            {/* Tabla */}
            <div className={`${cardClass} flex flex-1 min-h-0 overflow-hidden`}>
              <TablaOrdenCompra />
            </div>

            {/* Advertencia */}
            <div className="bg-[#faf9f6] border-[0.5px] border-[#e2e1da] rounded-[3px] px-3 py-2 shrink-0">
              <p className="text-[10px] text-[#6f6e66] text-left">
                * Valores impositivos y cálculos de ahorro presentados son estimativos y se encuentran sujetos a las variaciones de la facturación final emitida por cada proveedor.
              </p>
            </div>
          </div>

          {/* ============ COLUMNA DERECHA ============ */}
          <div className={`${cardClass} w-3/12 p-4 flex flex-col h-full bg-[#fdfdfc]`}>
            <div className="flex flex-col items-center justify-center h-full border-[0.5px] border-[#dcdad2] rounded-[3px] bg-white p-6 text-center">
              <div className="w-12 h-12 rounded-full border-[0.5px] border-[#c0bfb8] bg-gradient-to-b from-white to-[#f1f0ec] flex items-center justify-center shadow-[0_2px_6px_rgba(15,30,50,0.08)] mb-4">
                <LuSlidersHorizontal className="w-5 h-5 text-[#444]" strokeWidth={1.5} />
              </div>
              <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#444]">
                Panel de Configuración
              </p>
              <p className="text-[11px] leading-relaxed text-[#8a8982] mt-2 max-w-[230px]">
                Selecciona una orden de la tabla para definir su método de pago, plazo de entrega y observaciones.
              </p>
            </div>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="px-5 py-3 bg-[#f5f4f0] border-t-[0.5px] border-[#e2e1da] flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3">
            <button className={mainButtonClass}>
              <LuFileSearch2 className="w-3.5 h-3.5 text-[#555] shrink-0" />
              <span>ver documento de orden</span>
            </button>
            <button onClick={onClose} className={mainButtonClass}>
              cancelar
            </button>
          </div>
          <button className={`${primaryButtonClass} w-[360px]`}>
            <LuSend className="w-3.5 h-3.5 shrink-0" />
            <span>enviar orden</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalPedido;