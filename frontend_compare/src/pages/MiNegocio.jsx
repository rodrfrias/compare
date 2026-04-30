import React, { useState } from 'react'

const MiNegocio = () => {
  const [tab, setTab] = useState('datos')

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
          <div className="w-[794px] min-h-[1123px] bg-white border border-black/20 p-12 flex flex-col gap-0 mb-10 font-sans text-[11px] text-gray-900">

            {/* ── Encabezado ── */}
            <div className="flex items-start justify-between mb-2">
              <div>
                <p className="text-[17px] font-bold text-gray-900">Nombre de la Compañía</p>
                <p className="italic text-[10px] text-gray-500 mb-2">Eslogan de su compañía</p>
                <p className="text-[10px] text-gray-700 leading-tight">
                  CUIT: 30-71234567-8 · Responsable Inscripto<br />
                  Dirección · Ciudad, Provincia, CP<br />
                  Tel: 123.456.7890 · email@empresa.com.ar
                </p>
              </div>
              <div className="text-right">
                <p className="text-[38px] font-black text-gray-400 leading-tight tracking-tight">
                  ORDEN DE<br />COMPRA
                </p>
              </div>
            </div>

            {/* ── Aviso N° OC ── */}
            <div className="mb-6">
              <p className="text-[10px] text-gray-600 leading-relaxed mb-3">
                El siguiente número debe figurar en toda la correspondencia,<br />
                remitos y facturas vinculadas a este pedido:
              </p>
              <p className="font-bold text-[13px]">N° O/C: OC-2026-00001</p>
            </div>

            {/* ── Para / Entregar en ── */}
            <div className="grid grid-cols-2 mb-6">
              <div className="text-[11px] leading-relaxed">
                <p className="font-bold text-[11px] mb-1">Para (Proveedor):</p>
                <p className="text-gray-600">Razón Social</p>
                <p className="text-gray-600">CUIT: XX-XXXXXXXX-X</p>
                <p className="text-gray-600">Condición IVA: Responsable Inscripto</p>
                <p className="text-gray-600">Dirección · Ciudad, Provincia</p>
                <p className="text-gray-600">Tel / Email</p>
              </div>
              <div className="text-[11px] leading-relaxed">
                <p className="font-bold text-[11px] mb-1">Entregar en:</p>
                <p className="text-gray-600">Razón Social / Nombre</p>
                <p className="text-gray-600">Dirección de entrega</p>
                <p className="text-gray-600">Ciudad, Provincia, CP</p>
                <p className="text-gray-600">Contacto / Tel</p>
              </div>
            </div>

            {/* ── Tabla de metadatos ── */}
            <table className="w-full border-collapse mb-6">
              <thead>
                <tr className="bg-gray-100">
                  {['FECHA DE O/C', 'SOLICITANTE', 'CONDICIÓN DE PAGO', 'PLAZO DE ENTREGA', 'OBSERVACIONES'].map((h, i) => (
                    <th key={i} className="border border-gray-800 px-2 py-1 text-[9px] font-bold text-left uppercase">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-800 px-2 h-7"></td>
                  <td className="border border-gray-800 px-2 h-7"></td>
                  <td className="border border-gray-800 px-2 h-7 text-gray-400 italic">30 días / contado / etc.</td>
                  <td className="border border-gray-800 px-2 h-7 text-gray-400 italic">X días hábiles</td>
                  <td className="border border-gray-800 px-2 h-7 w-[25%]"></td>
                </tr>
              </tbody>
            </table>

            {/* ── Tabla de productos ── */}
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-800 px-2 py-1 text-[9px] font-bold text-left w-[8%]">CANT.</th>
                  <th className="border border-gray-800 px-2 py-1 text-[9px] font-bold text-left w-[10%]">UNIDAD</th>
                  <th className="border border-gray-800 px-2 py-1 text-[9px] font-bold text-left w-[42%]">DESCRIPCIÓN</th>
                  <th className="border border-gray-800 px-2 py-1 text-[9px] font-bold text-left w-[12%]">CÓDIGO</th>
                  <th className="border border-gray-800 px-2 py-1 text-[9px] font-bold text-right w-[14%]">PRECIO UNIT. NETO</th>
                  <th className="border border-gray-800 px-2 py-1 text-[9px] font-bold text-right w-[14%]">SUBTOTAL NETO</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 9 }).map((_, i) => (
                  <tr key={i}>
                    <td className="border border-gray-800 px-2 h-7"></td>
                    <td className="border border-gray-800 px-2 h-7"></td>
                    <td className="border border-gray-800 px-2 h-7"></td>
                    <td className="border border-gray-800 px-2 h-7"></td>
                    <td className="border border-gray-800 px-2 h-7 text-right text-gray-400">$</td>
                    <td className="border border-gray-800 px-2 h-7 text-right text-gray-400">$</td>
                  </tr>
                ))}
                {/* Totales */}
                {[
                  { label: 'SUBTOTAL NETO', value: '$ -' },
                  { label: 'IVA 21%', value: '$ -' },
                  { label: 'IVA 10,5% (si aplica)', value: '$ -', muted: true },
                  { label: 'Perc. IIBB (si aplica)', value: '$ -', muted: true },
                  { label: 'TOTAL', value: '$ -', bold: true },
                ].map(({ label, value, bold, muted }, i) => (
                  <tr key={i}>
                    <td colSpan={4} className="border-none px-2"></td>
                    <td className={`px-2 py-1 text-right text-[10px] border border-gray-800 bg-white ${bold ? 'font-bold' : ''} ${muted ? 'text-gray-400 text-[9px]' : ''}`}>
                      {label}
                    </td>
                    <td className={`border border-gray-800 px-2 py-1 text-right text-[11px] ${bold ? 'font-bold bg-gray-50' : ''}`}>
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* ── Footer ── */}
            <div className="grid grid-cols-2 gap-8 mt-8">
              <div className="text-[10px] text-gray-800">
                <ol className="list-decimal pl-4 space-y-1.5">
                  <li>Emitir factura a nombre de la empresa compradora con los datos del encabezado.</li>
                  <li>El número de O/C debe figurar en la factura y en el remito de entrega.</li>
                  <li>Respetar precios, cantidades y condiciones pactadas en este documento.</li>
                  <li>Notificar con anticipación cualquier imposibilidad de cumplimiento.</li>
                  <li>
                    <span className="font-bold uppercase text-[9px]">Enviar documentación a:</span>
                    <div className="pl-4 mt-1 space-y-0.5 text-gray-600">
                      <p>Nombre del contacto</p>
                      <p>Dirección</p>
                      <p>Tel:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email:</p>
                    </div>
                  </li>
                </ol>
              </div>
              <div className="border border-gray-800 flex flex-col">
                <p className="px-3 py-1 font-bold text-[10px] border-b border-gray-800 bg-gray-100">AUTORIZACIÓN</p>
                <div className="flex-1 min-h-[70px]"></div>
                <div className="grid grid-cols-2 border-t border-gray-800">
                  <span className="px-3 py-1 text-[9px] border-r border-gray-800 text-gray-500 italic">Autorizado por</span>
                  <span className="px-3 py-1 text-[9px] text-gray-500 italic">Fecha</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  )
}

export default MiNegocio