import React from 'react'

const TarjetaTotal = () => {
return (
    <div className="bg-white rounded-xs px-5 py-1.5 flex-1 max-w-[340px] border border-black/10">
        <p className="text-[12px] font-bold uppercase tracking-widest text-gray-400 mb-0.5">total</p>
        <div className="flex items-baseline justify-center gap-1">
            <span className="text-[12px] font-medium text-gray-400">ARS</span>
            <span className="text-[20px] font-extrabold text-slate-800 leading-none">$ 143.234,00</span>
        </div>
        <p className="text-[12px] text-gray-400 text-center mt-0.5">No incluye envío ni impuestos provinciales.</p>
    </div>
)
}

export default TarjetaTotal