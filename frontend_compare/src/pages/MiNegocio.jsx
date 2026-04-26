import React, { useState } from 'react'

const MiNegocio = () => {
  const [tab, setTab] = useState('datos')

  const inputClass =
    'w-full border border-black/10 rounded-sm bg-white px-3 py-2.5 text-[13px] text-gray-800 placeholder:text-gray-300 focus:outline-none focus:border-black/30 transition-colors'

  const labelClass =
    'block text-[11px] font-mono uppercase tracking-[0.15em] text-gray-500 mb-1.5'

  const requiredDot = <span className="text-blue-500 ml-0.5">*</span>

  const rows = [
    { nombre: 'PRODUCTO A', marca: 'X', modelo: 'X', presentacion: 'X',precio: '$ X,XX', cantidad: "X" },
    { nombre: 'PRODUCTO B', marca: 'X', modelo: 'X', presentacion: 'X',precio: '$ X,XX', cantidad: "X" },
    { nombre: 'PRODUCTO C', marca: 'X', modelo: 'X', presentacion: 'X',precio: '$ X,XX', cantidad: "X" },
  ]

  return (
    <div className="flex-1 flex flex-col h-[90vh] border border-black/10 rounded-sm overflow-hidden bg-[#f5f3ee]">

      {/* ── Tabs ── */}
      <div className="flex items-center border-b border-black/10 bg-[#f5f3ee] px-6 pt-4">
        <button
          onClick={() => setTab('datos')}
          className={`text-[11px] font-mono uppercase tracking-[0.15em] pb-3 px-1 mr-6 border-b-2 transition-colors ${
            tab === 'datos'
              ? 'border-black text-gray-900'
              : 'border-transparent text-gray-400 hover:text-gray-600'
          }`}
        >
          Datos de la empresa
        </button>
        <button
          onClick={() => setTab('preview')}
          className={`text-[11px] font-mono uppercase tracking-[0.15em] pb-3 px-1 border-b-2 transition-colors flex items-center gap-1.5 ${
            tab === 'preview'
              ? 'border-black text-gray-900'
              : 'border-transparent text-gray-400 hover:text-gray-600'
          }`}
        >
          Vista previa del PDF
          <span className="text-[9px] bg-black/8 text-gray-400 font-mono px-1.5 py-0.5 rounded-sm tracking-normal normal-case">
            Orden de compra
          </span>
        </button>
      </div>

      {/* ── Tab: Datos ── */}
      {tab === 'datos' && (
        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-2 gap-x-8 gap-y-5">

            <div className="col-span-1">
              <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-gray-300 mb-1">Datos del responsable</p>
              <div className="h-px bg-black/6 mb-5" />
            </div>
            <div className="col-span-1">
              <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-gray-300 mb-1">Datos de la empresa</p>
              <div className="h-px bg-black/6 mb-5" />
            </div>

            {/* Columna izquierda - Datos del responsable */}
            <div className="flex flex-col gap-5">
              <div>
                <label className={labelClass}>Nombre y apellido {requiredDot}</label>
                <input placeholder="Ej: Laura Martínez" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Email {requiredDot}</label>
                <input
                  placeholder="lmartinez@empresaejemplo.com.ar"
                  disabled
                  className={`${inputClass} bg-[#eeece7] text-gray-400 cursor-not-allowed`}
                />
                <p className="text-[11px] text-gray-500 mt-1.5 font-mono">
                  Registrado al crear la cuenta · No editable.
                </p>
              </div>
              <div>
                <label className={labelClass}>Teléfono {requiredDot}</label>
                <input placeholder="Ej: 11 4567-8900" className={inputClass} />
              </div>
            </div>

            {/* Columna derecha - Datos de la empresa */}
            <div className="flex flex-col gap-5">
              <div>
                <label className={labelClass}>Razón social {requiredDot}</label>
                <input placeholder="Ej: Distribuidora Central S.R.L." className={inputClass} />
                <p className="text-[11px] text-gray-500 mt-1.5 font-mono">
                  Nombre legal de la empresa según AFIP.
                </p>
              </div>
              <div>
                <label className={labelClass}>CUIT {requiredDot}</label>
                <input placeholder="Ej: 30-71234567-8" className={inputClass} />
                <p className="text-[11px] text-gray-500 mt-1.5 font-mono">
                  Necesario para que el proveedor emita la factura.
                </p>
              </div>
              <div>
                <label className={labelClass}>Condición frente al IVA {requiredDot}</label>
                <select className={`${inputClass} appearance-none cursor-pointer`}>
                  <option value="">Seleccioná tu condición</option>
                  <option>Responsable Inscripto</option>
                  <option>Monotributista</option>
                  <option>Exento</option>
                  <option>Consumidor Final</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Dirección fiscal {requiredDot}</label>
                <input placeholder="Ej: Av. Corrientes 1234, Piso 5, Of. 12" className={inputClass} />
                <p className="text-[11px] text-gray-500 mt-1.5 font-mono">
                  Domicilio registrado en AFIP.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className={labelClass}>Localidad {requiredDot}</label>
                  <input placeholder="Ej: CABA" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Código postal {requiredDot}</label>
                  <input placeholder="Ej: C1043" className={inputClass} />
                </div>
              </div>
              <div>
                <label className={labelClass}>Provincia {requiredDot}</label>
                <select className={`${inputClass} appearance-none cursor-pointer`}>
                  <option value="">Seleccioná una provincia</option>
                  {['Buenos Aires','CABA','Catamarca','Chaco','Chubut','Córdoba','Corrientes',
                    'Entre Ríos','Formosa','Jujuy','La Pampa','La Rioja','Mendoza','Misiones',
                    'Neuquén','Río Negro','Salta','San Juan','San Luis','Santa Cruz','Santa Fe',
                    'Santiago del Estero','Tierra del Fuego','Tucumán'
                  ].map(p => <option key={p}>{p}</option>)}
                </select>
              </div>
            </div>

            {/* Footer */}
            <div className="col-span-2 flex items-center justify-between pt-2 border-t border-black/6 mt-2">
              <p className="text-[11px] font-mono text-gray-400">
                <span className="text-blue-500">*</span> Campos obligatorios
              </p>
              <button className="bg-black text-white text-[12px] font-mono uppercase tracking-[0.15em] px-8 py-2.5 rounded-sm hover:bg-gray-800 transition-colors active:scale-99">
                Guardar cambios
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ── Tab: Preview PDF ── */}
      {tab === 'preview' && (
        <div className="flex-1 overflow-y-auto p-6 flex flex-col items-center gap-5">

          <p className="text-[11px] font-mono text-gray-400 text-center max-w-md pt-1">
            Así se verá tu orden de compra. Todos los datos se completan automáticamente con la información de tu perfil.
          </p>

          {/* Hoja A4 simulada */}
          <div className="w-full max-w-2xl bg-white border border-gray-900 shadow-lg p-10 flex flex-col gap-6 mb-6">

            {/* Encabezado de la empresa compradora */}
            <div className="flex items-start justify-between border-b-2 border-gray-900 pb-5">
              <div className="flex-1">
                <p className="text-base font-mono font-bold text-gray-900 uppercase tracking-wide mb-2">
                  Distribuidora Central S.R.L.
                </p>
                <p className="text-[11.5px] font-mono text-gray-700 leading-relaxed">
                  CUIT: 30-71234567-8
                </p>
                <p className="text-[11.5px] font-mono text-gray-700 leading-relaxed">
                  Condición IVA: Responsable Inscripto
                </p>
                <p className="text-[11.5px] font-mono text-gray-700 leading-relaxed">
                  Av. Corrientes 1234, Piso 5, Of. 12
                </p>
                <p className="text-[11.5px] font-mono text-gray-700 leading-relaxed">
                  CABA (C1043) · Buenos Aires
                </p>
                <p className="text-[11.5px] font-mono text-gray-700 leading-relaxed mt-1.5">
                  Tel: 11 4567-8900 · lmartinez@empresaejemplo.com.ar
                </p>
              </div>
              <div className="text-right ml-8">
                <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-gray-900 font-bold mb-3">
                  Orden de compra
                </p>
                <p className="text-[11.5px] font-mono text-gray-700">
                  N° <span className="font-bold text-gray-900">OC-2026-00127</span>
                </p>
                <p className="text-[11.5px] font-mono text-gray-700">
                  Fecha: <span className="font-bold text-gray-900">24/04/2026</span>
                </p>
              </div>
            </div>

            {/* Información del proveedor */}
            <div className="border border-gray-900 rounded-sm px-5 py-4 bg-gray-50/50">
              <p className="text-[9.5px] font-mono uppercase tracking-[0.2em] text-gray-500 mb-2">
                Proveedor destinatario
              </p>
              <p className="text-[13.5px] font-mono font-bold text-gray-900 mb-1">
                Papelera del Plata S.A.
              </p>
              <p className="text-[11.5px] font-mono text-gray-700">
                CUIT: 30-65432198-7 · Responsable Inscripto
              </p>
              <p className="text-[11.5px] font-mono text-gray-700">
                ventas@papeleradelplata.com.ar · 11 5234-9000
              </p>
              <p className="text-[11.5px] font-mono text-gray-700">
                Av. Juan B. Justo 3456 · CABA (C1425)
              </p>
            </div>

            {/* Tabla de productos */}
            <div className="border border-gray-900 rounded-sm overflow-hidden">
              {/* Header de tabla */}
              <div className="grid grid-cols-12 bg-gray-900 px-5 py-2.5">
                <p className="col-span-2 text-[9px] font-mono uppercase tracking-[0.1em] text-white font-semibold">
                  Nombre
                </p>
                <p className="col-span-2 text-[9px] font-mono uppercase tracking-[0.1em] text-white text-center font-semibold">
                  Marca
                </p>
                <p className="col-span-2 text-[9px] font-mono uppercase tracking-[0.1em] text-white text-center font-semibold">
                  Modelo
                </p>
                <p className="col-span-2 text-[9px] font-mono uppercase tracking-[0.1em] text-white text-center font-semibold">
                  Presentación
                </p>
                <p className="col-span-2 text-[9px] font-mono uppercase tracking-[0.1em] text-white text-center font-semibold">
                  Precio
                </p>
                <p className="col-span-2 text-[9px] font-mono uppercase tracking-[0.1em] text-white text-right font-semibold">
                  Cantidad
                </p>
              </div>
              {/* Filas de productos */}
              {rows.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-12 px-5 py-3 items-center ${
                    i < rows.length - 1 ? 'border-b border-gray-200' : ''
                  }`}
                >
                  <p className="col-span-2 text-[11px] font-mono text-gray-900 truncate">
                    {row.nombre}
                  </p>
                  <p className="col-span-2 text-[11px] font-mono text-gray-600 text-center truncate px-1">
                    {row.marca}
                  </p>
                  <p className="col-span-2 text-[11px] font-mono text-gray-600 text-center truncate px-1">
                    {row.modelo}
                  </p>
                  <p className="col-span-2 text-[11px] font-mono text-gray-600 text-center truncate px-1">
                    {row.presentacion}
                  </p>
                  <p className="col-span-2 text-[11px] font-mono text-gray-900 text-center truncate">
                    {row.precio}
                  </p>
                  <p className="col-span-2 text-[11px] font-mono text-gray-900 text-right">
                    {row.cantidad}
                  </p>
                </div>
              ))}
          
            </div>

            {/* Condiciones y observaciones */}
            <div className="border-t border-gray-300 pt-5 space-y-3">
              <div>
                <p className="text-[9.5px] font-mono uppercase tracking-[0.2em] text-gray-500 mb-1.5">
                  metodo de pago
                </p>
                <p className="text-[11px] font-mono text-gray-700">
                  Transferencia
                </p>
              </div>
              <div>
                <p className="text-[9.5px] font-mono uppercase tracking-[0.2em] text-gray-500 mb-1.5">
                  Lugar de entrega
                </p>
                <p className="text-[11px] font-mono text-gray-700">
                  Av. Corrientes 1234, Piso 5, Of. 12 · CABA (C1043)
                </p>
              </div>
            </div>

            {/* Pie de documento */}
            <div className="border-t-2 border-gray-200 pt-4 mt-2">
              <p className="text-[10px] font-mono text-gray-500">
                Solicitante: <span className="text-gray-900 font-semibold">Laura Martínez</span> · lmartinez@empresaejemplo.com.ar
              </p>
              <p className="text-[9.5px] font-mono text-gray-400 mt-2">
                Documento generado automáticamente por Compare · Esta orden de compra no constituye factura ni comprobante fiscal
              </p>
            </div>

          </div>
        </div>
      )}

    </div>
  )
}

export default MiNegocio