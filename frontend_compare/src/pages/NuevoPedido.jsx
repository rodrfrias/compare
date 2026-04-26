import React from 'react'
import DropZone from '../components/DropZone.jsx'
import Metricas from '../components/Metricas.jsx'
import TablaProductos from '../components/TablaProductos.jsx'


const NuevoPedido = () => {
  return (
    <div className='flex justify-between gap-4 w-full' style={{ height: 'calc(100vh - 3rem)' }}>

      <div className='flex flex-col w-full h-full'>
        <div className='flex-1 min-h-0 flex flex-col bg-[#f5f3ee] border border-black/10 rounded-xs w-full overflow-hidden'>
          <div className="flex-1 min-h-0 overflow-hidden">
            <TablaProductos></TablaProductos>
          </div>
        </div>
        <button className="w-full mt-3 bg-black text-white text-[12px] font-mono uppercase tracking-[0.15em] px-8 py-1 hover:bg-gray-800 transition-colors rounded-sm active:scale-99 shrink-0">
          generar pedido/s
        </button>
      </div>
    </div>
  )
}

export default NuevoPedido