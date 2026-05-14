import React from 'react'
import TablaProductos from '../components/SubsistemaNuevoPedido/Tabla/TablaProductos.jsx'
import Loading from "../components/SubsistemaNuevoPedido/Loading.jsx"
import DropZone from "../components/SubsistemaNuevoPedido/DropZone.jsx"

const NuevoPedido = () => {
  return (
    <div className='flex justify-between gap-4 w-full h-full p-1'> {/* h-full en lugar de calc */}
      <div className='flex flex-col w-full h-full'>
        <div className='flex-1 min-h-0 flex flex-col bg-[#f5f3ee] border border-black/10 w-full overflow-hidden'>
          <TablaProductos></TablaProductos>
        </div>
      </div>
    </div>
  )
}

export default NuevoPedido

