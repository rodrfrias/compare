import React, { useState } from 'react'

const Metricas = () => {
  const [recargo, setRecargo] = useState('')

  // Datos de ejemplo
  const subtotalNeto = 71983.47
  const ivaDesglose = [
    { alicuota: '10,5%', base: 18500, monto: 1942.5 },
    { alicuota: '21%',   base: 53483.47, monto: 11231.53 },
  ]
  const ivaTotal = ivaDesglose.reduce((acc, i) => acc + i.monto, 0)
  const recargoPorc = parseFloat(recargo) || 0
  const recargoMonto = (subtotalNeto + ivaTotal) * (recargoPorc / 100)
  const totalFinal = subtotalNeto + ivaTotal + recargoMonto

  const fmt = (n) =>
    n.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

  const labelClass = 'text-[10px] text-gray-400 font-mono uppercase tracking-[0.12em]'
  const rowClass = 'flex items-baseline justify-between'
  const valueClass = 'text-[12px] font-mono text-gray-700'

  return (
    <div className="w-70 shrink-0 h-full bg-[#f5f3ee] border border-black/10 rounded-sm overflow-y-auto flex flex-col">

      {/* Header */}
      <div className="px-4 pt-4 pb-3 border-b border-black/8 text-center">
        <span className="font-mono text-[14px] uppercase tracking-[0.2em] text-gray-400 ">
          Resumen
        </span>
      </div>

      <div className="flex flex-col gap-2 p-3">

        {/* ── Ahorro estimado ── */}
        <div className="bg-white rounded-sm p-3 border border-black/6 shadow-sm text-center">
          <p className={`${labelClass} mb-2`}>tú ahorro</p>
          <div className="flex justify-center items-baseline gap-1 mb-1">
            <span className="text-[13px] text-gray-400 font-light">ARS</span>
            <span className="text-green-600 font-bold text-2xl leading-tight tracking-tight">
              21.453,11
            </span>
          </div>
          <p className="text-[11px] text-gray-400 leading-snug">
            vs. comprarle todo al proveedor más caro
          </p>
        </div>

        {/* ── Desglose fiscal ── */}
        <div className="bg-white rounded-sm border border-black/6 shadow-sm overflow-hidden">

          {/* Subtotal neto */}
          <div className="px-3 py-2.5 border-b border-black/6">
            <div className={rowClass}>
              <p className={labelClass}>Subtotal neto</p>
              <span className={valueClass}>ARS {fmt(subtotalNeto)}</span>
            </div>
            <p className="text-[11px] text-gray-400 mt-0.5">Suma de productos sin impuestos</p>
          </div>

          {/* IVA desglosado */}
          <div className="px-3 py-2.5 border-b border-black/6 flex flex-col gap-2">
            <p className={labelClass}>IVA</p>
            {ivaDesglose.map((iva, i) => (
              <div key={i} className={rowClass}>
                <div className="flex items-center gap-1.5">
                  <span className="text-[11px] font-mono text-gray-500">{iva.alicuota}</span>
                  <span className="text-[11px] text-gray-400 font-mono">
                    sobre {fmt(iva.base)}
                  </span>
                </div>
                <span className={valueClass}>+ {fmt(iva.monto)}</span>
              </div>
            ))}
            <div className={`${rowClass} border-t border-black/6 pt-1.5`}>
              <span className="text-[11px] font-mono text-gray-500">IVA total</span>
              <span className={valueClass}>ARS {fmt(ivaTotal)}</span>
            </div>
          </div>

          {/* Recargo adicional */}
          <div className="px-3 py-2.5 border-b border-black/6">
            <div className={`${rowClass} mb-1.5`}>
              <p className={labelClass}>Recargo adicional</p>
              {recargoPorc > 0 && (
                <span className={valueClass}>+ {fmt(recargoMonto)}</span>
              )}
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center border border-black/10 rounded-sm bg-[#f5f3ee] overflow-hidden flex-1">
                <input
                  type="number"
                  min="0"
                  max="100"
                  step="0.5"
                  value={recargo}
                  onChange={e => setRecargo(e.target.value)}
                  placeholder="0"
                  className="w-full bg-transparent px-2 py-1 text-[12px] font-mono text-gray-800 placeholder:text-gray-300 focus:outline-none"
                />
                <span className="text-[11px] font-mono text-gray-400 pr-2">%</span>
              </div>
              <p className="text-[11px] text-gray-400 font-mono leading-snug">
                envío / logística
              </p>
            </div>
          </div>

          {/* Total final */}
          <div className="px-3 py-3 bg-gray-50">
            <div className={rowClass}>
              <p className="text-[11px] font-mono uppercase tracking-[0.12em] text-gray-900 font-semibold">
                Total Estimado
              </p>
              <div className="text-right">
                <span className="text-[10px] text-gray-400 font-mono mr-1">ARS</span>
                <span className="text-[15px] font-mono font-bold text-gray-900">
                  {fmt(totalFinal)}
                </span>
              </div>
            </div>
            <p className="text-[11px] text-gray-400 mt-1 font-mono">
              Neto + IVA{recargoPorc > 0 ? ` + ${recargoPorc}% recargo` : ''}
            </p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Metricas