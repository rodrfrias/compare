import React from 'react';

const ModalPedido = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const btnBase = "flex-1 py-2 px-5 text-[11px] font-bold uppercase tracking-[0.08em] transition-all duration-200 active:scale-[0.98] shadow-sm";
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-[1px]">
      {/* Ajuste de ancho: max-w-[850px] */}
      <div className="bg-[#ffffff] border-[0.5px] border-[#c0bfb8] w-full max-w-[850px] font-sans shadow-2xl">
        
        {/* Encabezado - Reducido levemente en padding vertical */}
        <div className="px-7 py-2 border-b-[0.5px] border-[#e2e1da] flex justify-between items-center bg-[#f5f4f0]">
          <span className="text-[11px] font-semibold text-[#555] tracking-[0.1em] uppercase">
            Resumen de Pedido
          </span>
        </div>

        {/* Cuerpo - py-6 para reducir altura total */}
        <div className="px-10 py-6">

          {/* Ahorro total - Altura reducida de py-10 a py-6 */}
          <div className="border-[0.5px] border-[#e2e1da] py-6 mb-4 bg-[#fbfaf8] flex flex-col items-center justify-center shadow-[inset_0_1px_3px_rgba(0,0,0,0.02)]">
            <p className="text-[10px] font-bold text-[#aaa] uppercase tracking-[0.15em] mb-1">
              Ahorro Total
            </p>
            <p className="text-[42px] font-medium text-[#1a1a1a] leading-none tracking-tight">
              $ 15.200,60
            </p>
          </div>

          {/* Métricas secundarias - mb-6 en lugar de mb-10 */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="border-[0.5px] border-[#e2e1da] px-6 py-4 bg-[#f9f8f4]">
              <p className="text-[9px] font-bold text-[#999] uppercase tracking-[0.12em] mb-1">
                Subtotal
              </p>
              <p className="text-[20px] font-medium text-[#333]">
                $ 120.500,00
              </p>
            </div>
            <div className="border-[0.5px] border-[#e2e1da] px-6 py-4 bg-[#f9f8f4]">
              <p className="text-[9px] font-bold text-[#999] uppercase tracking-[0.12em] mb-1">
                Proveedores
              </p>
              <p className="text-[20px] font-medium text-[#333]">
                3 pedidos
              </p>
            </div>
          </div>

          {/* Texto informativo - mb-6 y pb-4 */}
          <p className="text-[11px] text-[#b0afaa] text-center italic mb-6 border-b border-[#eee] pb-4">
            Los valores de impuestos son estimativos y sujetos a la facturación final del proveedor.
          </p>

          {/* Acciones */}
          <div className="flex gap-4">
            <button
              onClick={onClose}
              className={`${btnBase} bg-gradient-to-b from-[#ffffff] to-[#f2f2f2] border-[0.5px] border-[#c0bfb8] text-[#444] hover:from-[#f9f9f9] hover:to-[#e8e8e8] shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]`}
            >
              Cancelar
            </button>
            
            <button
              className={`${btnBase} bg-gradient-to-b from-[#4a4a48] to-[#2c2c2a] border-[0.5px] border-[#1a1a19] text-white hover:from-[#5a5a58] hover:to-[#3c3c3a] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]`}
            >
              Siguiente
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ModalPedido;