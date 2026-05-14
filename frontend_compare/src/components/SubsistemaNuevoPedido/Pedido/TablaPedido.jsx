import React from 'react'

const TablaPedido = () => {

  const headerStyles = `
  px-2 py-2 
  text-[9px] font-bold uppercase tracking-wider text-[#555]
  bg-gradient-to-b from-[#f9f9f9] to-[#e8e8e7] 
  border-r-[0.5px] border-b-[0.5px] border-[#c0bfb8]
  shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]
  text-center
`
  return (
    <div className='w-full h-full flex flex-col bg-[#f3f4f6]'>
      <div className="w-full grow flex flex-col overflow-hidden bg-white shadow-sm">
        <div className="grow overflow-auto">
          <table className="w-full border-collapse text-left font-sans text-[9px]">
            <thead>
              <tr className="bg-[#f8f9fa] border-b border-gray-300 sticky top-0 z-20">
                <th className={headerStyles}>N° orden</th>
                <th className={headerStyles}>fecha</th>
                <th className={headerStyles}>Items</th>
                <th className={headerStyles}>proveedor</th>
                <th className={headerStyles}>subtotal</th>
                <th className={headerStyles}>estado</th> 
                <th className={headerStyles}>acciones</th> 
              </tr>
            </thead>
            <tbody>
            
            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}

export default TablaPedido