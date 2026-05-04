import React from 'react'

const TarjetaTotalAhorro = () => {
    return (
    <div className="bg-white rounded-xs px-5 py-1.5 flex-1 max-w-85 border border-black/10">
        <p className="text-[12px] font-bold uppercase tracking-widest text-gray-400 mb-0.5">ahorro total</p>
        <div className="flex items-baseline justify-center gap-1">
            <span className="text-[12px] font-medium text-gray-400">ARS</span>
            <span className="text-[20px] font-extrabold text-green-800 leading-none">$ 9.453,00</span>
        </div>
        <p className="text-[11px] text-gray-400 text-center mt-0.5">VS comprarle TODO al proveedor más caro.</p>
    </div>
)
}

export default TarjetaTotalAhorro