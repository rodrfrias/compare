import React from 'react';
import TablaOrdenCompra from "./TablaOrdenCompra"

const ModalPedido = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const mainButtonClass = 'h-8 px-10  text-[10px] font-bold uppercase tracking-[0.12em] text-[#444] bg-gradient-to-b from-[#ffffff] to-[#f2f2f2] hover:from-[#f9f9f9] hover:to-[#e8e8e8] border-[0.5px] border-[#c0bfb8] shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_1px_2px_rgba(0,0,0,0.05)] transition-all duration-200  active:scale-[0.98] active:from-[#ececec] active:to-[#dadada] outline-none cursor-pointer';
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-[1px]">
      <div className="bg-[#ffffff] border-[0.5px] border-[#c0bfb8] w-full max-w-[950px] h-auto font-sans shadow-2xl">
        
        {/* Encabezado - Altura mínima */}
        <div className="px-7 py-1.5 border-b-[0.5px] border-[#e2e1da] flex justify-between items-center bg-[#f5f4f0]">
          <span className="text-[10px] font-semibold text-[#555] tracking-widest uppercase">
            Resumen de Pedido
          </span>
        </div>

        {/* Cuerpo - Padding reducido para compactar */}
        <div className="px-2 py-2">

          {/* Tarjeta Ahorro Total - Altura reducida */}
          <div className="border-[0.5px] border-[#e2e1da] py-3 mb-3 bg-[#fbfaf8] flex flex-col items-center justify-center shadow-[inset_0_1px_3px_rgba(0,0,0,0.02)]">
            <p className="text-[9px] font-bold text-[#aaa] uppercase tracking-[0.15em] mb-0.5">
              Ahorro Total
            </p>
            <div className="flex items-baseline gap-2">
              <p className="text-[35px] font-medium text-[#1a1a1a] leading-none tracking-tight">
                $ 15.200,60
              </p>
              <span className="text-[12px] font-bold text-[#888] tracking-wider">ARS</span>
            </div>
            <p className="text-[10px] text-gray-400 text-center mt-1">VS proveedor más caro.</p>
          </div>

          {/* Métricas secundarias - Altura reducida en py-2 */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="border-[0.5px] border-[#e2e1da] px-4 py-2 bg-[#f9f8f4] text-center">
              <p className="text-[9px] font-bold text-[#999] uppercase tracking-[0.12em]">
                Subtotal
              </p>
              <div className="flex items-baseline justify-center gap-1.5">
                <p className="text-[20px] font-medium text-black">
                  $ 120.500,00
                </p>
                <span className="text-[9px] font-bold text-[#aaa]">ARS</span>
              </div>
            </div>
            
            <div className="border-[0.5px] border-[#e2e1da] px-4 py-2 bg-[#f9f8f4] flex flex-col justify-center text-center">
              <p className="text-[9px] font-bold text-[#999] uppercase tracking-[0.12em]">
                Proveedores
              </p>
              <p className="text-[20px] font-medium  text-black">
                3 pedidos
              </p>
            </div>
          </div>

          {/* Texto informativo - Menos margen y padding */}
          <p className="text-[10px] text-[#b0afaa] text-center italic mb-4 border-b border-[#eee] pb-2">
            Impuestos estimativos sujetos a facturación final.
          </p>

          <div className='flex items-start min-h-50 border border-black/10'>
            <TablaOrdenCompra></TablaOrdenCompra>
          </div>
          <div className='flex items-center justify-end mt-2'>
              <button onClick={onClose} className= {mainButtonClass}> Cerrar</button>
          </div>
  
        </div>
      </div>
    </div>
  );
};

export default ModalPedido;