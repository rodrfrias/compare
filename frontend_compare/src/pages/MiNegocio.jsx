import React, { useState } from 'react'

const MiNegocio = () => {
  const [tab, setTab] = useState('preview')

  const inputClass =
    'w-full border border-black/10 rounded-sm bg-white px-3 py-2.5 text-[13px] text-gray-800 placeholder:text-gray-300 focus:outline-none focus:border-black/30 transition-colors'

  const labelClass =
    'block text-[11px] font-mono uppercase tracking-[0.15em] text-gray-500 mb-1.5'

  const requiredDot = <span className="text-blue-500 ml-0.5">*</span>

  const rows = [
    { codigo: "001", nombre: 'PRODUCTO A', marca: 'X', modelo: 'X', precio: '$ X,XX', cantidad: "X" },
    { codigo: "002", nombre: 'PRODUCTO B', marca: 'X', modelo: 'X', precio: '$ X,XX', cantidad: "X" },
    { codigo: "003", nombre: 'PRODUCTO C', marca: 'X', modelo: 'X', precio: '$ X,XX', cantidad: "X" },
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
        <div className="flex-1 overflow-y-auto p-8 flex flex-col items-center gap-6">
          
          <div className="w-[794px] min-h-[1123px] bg-white border border-black p-12 flex flex-col gap-8 mb-10">

            {/* Encabezado */}
            <div className="flex items-start justify-between border-b-2 border-gray-900 pb-6">
              <div className="flex-1">
                <p className="text-lg font-mono font-bold text-gray-900 uppercase tracking-wide mb-2">
                  Distribuidora Central S.R.L.
                </p>
                <div className="text-[12.5px] font-mono text-gray-700 space-y-1">
                  <p>CUIT: 30-71234567-8</p>
                  <p>Condición IVA: Responsable Inscripto</p>
                  <p>Av. Corrientes 1234, Piso 5, Of. 12</p>
                  <p>CABA (C1043) · Buenos Aires</p>
                  <p className="pt-1">Tel: 11 4567-8900 · lmartinez@empresaejemplo.com.ar</p>
                </div>
              </div>
              <div className="text-right ml-8">
                <p className="text-[12px] font-mono uppercase tracking-[0.25em] text-gray-900 font-bold mb-3">
                  Orden de compra
                </p>
                <p className="text-[12.5px] font-mono text-gray-700">
                  N° <span className="font-bold text-gray-900">OC-2026-00127</span>
                </p>
                <p className="text-[12.5px] font-mono text-gray-700">
                  Fecha: <span className="font-bold text-gray-900">24/04/2026</span>
                </p>
              </div>
            </div>

            {/* Proveedor */}
            <div className="border border-gray-900 rounded-sm px-6 py-5 bg-gray-50/50">
              <p className="text-[10.5px] font-mono uppercase tracking-[0.2em] text-gray-500 mb-2">
                Proveedor destinatario
              </p>
              <p className="text-[14.5px] font-mono font-bold text-gray-900 mb-1">
                Papelera del Plata S.A.
              </p>
              <div className="text-[12.5px] font-mono text-gray-700 space-y-0.5">
                <p>CUIT: 30-65432198-7 · Responsable Inscripto</p>
                <p>ventas@papeleradelplata.com.ar · 11 5234-9000</p>
                <p>Av. Juan B. Justo 3456 · CABA (C1425)</p>
              </div>
            </div>

            {/* ── Tabla de productos (7 Columnas de igual ancho y bordes completos) ── */}
            <div className="w-full mt-4 border-x border-t border-gray-900"> 
              
              {/* Encabezado con grid-cols-7 */}
              <div className="grid grid-cols-7 bg-[#f8fafc] px-5 py-2 border-b border-gray-900">
                <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-gray-700 font-bold">Código</p>
                <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-gray-700 font-bold">Producto</p>
                <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-gray-700 font-bold text-center">Marca</p>
                <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-gray-700 font-bold text-center">Modelo</p>
                <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-gray-700 font-bold text-center">Present.</p>
                <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-gray-700 font-bold text-right">Precio</p>
                <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-gray-700 font-bold text-right">Cant</p>
              </div>

              {/* Filas */}
              <div className="border-b border-gray-900">
                {rows.map((row, i) => (
                  <div
                    key={i}
                    className={`grid grid-cols-7 px-5 py-2 items-center ${
                      i < rows.length - 1 ? 'border-b border-gray-100' : ''
                    }`}
                  >
                    <p className="text-[11px] font-mono text-gray-400">{row.codigo}</p>
                    <p className="text-[12px] font-mono text-gray-900 font-medium uppercase truncate">{row.nombre}</p>
                    <p className="text-[11px] font-mono text-gray-600 text-center">{row.marca}</p>
                    <p className="text-[11px] font-mono text-gray-600 text-center">{row.modelo}</p>
                    <p className="text-[11px] font-mono text-gray-600 text-center">Unidad</p>
                    <p className="text-[12px] font-mono text-gray-900 text-right">{row.precio}</p>
                    <p className="text-[12px] font-mono text-gray-900 text-right font-medium">{row.cantidad}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Condiciones */}
            <div className="mt-auto border-t border-gray-300 pt-6 space-y-4">
              <div>
                <p className="text-[10.5px] font-mono uppercase tracking-[0.2em] text-gray-500 mb-1.5">Metodo de pago</p>
                <p className="text-[12px] font-mono text-gray-700">Transferencia Bancaria</p>
              </div>
              <div>
                <p className="text-[10.5px] font-mono uppercase tracking-[0.2em] text-gray-500 mb-1.5">Lugar de entrega</p>
                <p className="text-[12px] font-mono text-gray-700">Av. Corrientes 1234, Piso 5, Of. 12 · CABA (C1043)</p>
              </div>
            </div>

            {/* Pie de página con Indicador de Página */}
            <div className="border-t-2 border-gray-200 pt-6 flex justify-between items-end">
              <div className="max-w-[80%]">
                <p className="text-[11px] font-mono text-gray-500">
                  Solicitante: <span className="text-gray-900 font-semibold">Laura Martínez</span> · lmartinez@empresaejemplo.com.ar
                </p>
                <p className="text-[10.5px] font-mono text-gray-400 mt-2 leading-relaxed">
                  Documento generado automáticamente por Compare. Esta orden de compra no constituye factura ni comprobante fiscal válido según normas de AFIP.
                </p>
              </div>
              <p className="text-[11px] font-mono font-bold text-gray-900 uppercase tracking-widest">
                Pagina 1
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MiNegocio