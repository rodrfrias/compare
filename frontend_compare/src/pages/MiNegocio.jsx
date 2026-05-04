import React, { useState } from 'react'

const MiNegocio = () => {
  const [tab, setTab] = useState('datos')

  // Clases unificadas para estética JavaFX / Escritorio profesional
  const inputClass =
    'w-full h-8 border border-gray-300 bg-white px-3 text-[11px] text-gray-800 placeholder:text-gray-300 focus:outline-none focus:border-blue-400 transition-all shadow-sm'

  const labelClass =
    'block text-[10px] font-sans font-bold uppercase tracking-wider text-[#7a8a99] mb-1'

  const subLabelClass = 
    'text-[9px] text-gray-400 mt-1 italic leading-tight'

  const requiredDot = <span className="text-blue-500 ml-0.5">*</span>

  return (
    <div className="flex-1 flex flex-col h-full border border-gray-300 bg-[#f5f3ee] overflow-hidden font-sans">

      {/* ── Tabs (Navegación Superior) ── */}
      <div className="flex items-center border-b border-gray-300 bg-[#f5f3ee] px-8 pt-4">
        <button
          onClick={() => setTab('datos')}
          className={`text-[10px] font-bold uppercase tracking-widest pb-3 px-2 mr-8 border-b-2 transition-colors ${
            tab === 'datos'
              ? 'border-blue-500 text-gray-900'
              : 'border-transparent text-gray-400 hover:text-gray-600'
          }`}
        >
          MOSTRAR DATOS
        </button>
        <button
          onClick={() => setTab('preview')}
          className={`text-[10px] font-bold uppercase tracking-widest pb-3 px-2 border-b-2 transition-colors flex items-center gap-2 ${
            tab === 'preview'
              ? 'border-blue-500 text-gray-900'
              : 'border-transparent text-gray-400 hover:text-gray-600'
          }`}
        >
          MOSTRAR VISTA PREVIA DEL PDF
          <span className="text-[8px] bg-gray-200 text-gray-500 px-2 py-0.5 border border-gray-300 tracking-normal normal-case font-normal">
            orden de compra
          </span>
        </button>
      </div>

      {/* ── Tab: Datos ── */}
      {tab === 'datos' && (
        <div className="flex-1 overflow-hidden flex flex-col px-10 py-6">
          <div className="grid grid-cols-2 gap-x-20 flex-1 min-h-0">

            {/* Columna Izquierda: Datos del responsable */}
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#b0bec5] mb-2">Datos del responsable</p>
                <div className="h-px bg-gray-200 w-full mb-6" />
                <div className="flex flex-col gap-5">
                  <div>
                    <label className={labelClass}>Nombre y apellido {requiredDot}</label>
                    <input placeholder="Ej: Laura Martínez" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Email {requiredDot}</label>
                    <input placeholder="lmartinez@empresaejemplo.com.ar" disabled
                      className={`${inputClass} bg-[#e9e7e2] text-gray-400 cursor-not-allowed border-gray-200`} />
                    <p className={subLabelClass}>Registrado al crear la cuenta · No editable.</p>
                  </div>
                  <div>
                    <label className={labelClass}>Teléfono {requiredDot}</label>
                    <input placeholder="Ej: 11 4567-8900" className={inputClass} />
                  </div>
                </div>
              </div>
            </div>

            {/* Columna Derecha: Datos de la empresa */}
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#b0bec5] mb-2">Datos de la empresa</p>
                <div className="h-px bg-gray-200 w-full mb-6" />
                <div className="flex flex-col gap-4">
                  <div>
                    <label className={labelClass}>Razón social {requiredDot}</label>
                    <input placeholder="Ej: Distribuidora Central S.R.L." className={inputClass} />
                    <p className={subLabelClass}>Nombre legal según AFIP.</p>
                  </div>
                  <div>
                    <label className={labelClass}>CUIT {requiredDot}</label>
                    <input placeholder="Ej: 30-71234567-8" className={inputClass} />
                    <p className={subLabelClass}>Necesario para emitir factura.</p>
                  </div>
                  <div>
                    <label className={labelClass}>Condición frente al IVA {requiredDot}</label>
                    <select className={`${inputClass} appearance-none cursor-pointer bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23aaa%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C/polyline%3E%3C/svg%3E')] bg-[length:12px] bg-[right_10px_center] bg-no-repeat`}>
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
                    <p className={subLabelClass}>Domicilio registrado en AFIP.</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
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
                    <select className={`${inputClass} appearance-none cursor-pointer bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23aaa%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C/polyline%3E%3C/svg%3E')] bg-[length:12px] bg-[right_10px_center] bg-no-repeat`}>
                      <option value="">Seleccioná una provincia</option>
                      {['Buenos Aires','CABA','Catamarca','Chaco','Chubut','Córdoba','Corrientes',
                      'Entre Ríos','Formosa','Jujuy','La Pampa','La Rioja','Mendoza','Misiones',
                      'Neuquén','Río Negro','Salta','San Juan','San Luis','Santa Cruz','Santa Fe',
                      'Santiago del Estero','Tierra del Fuego','Tucumán'
                    ].map(p => <option key={p}>{p}</option>)}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-6 border-t border-gray-300 mt-6 flex-shrink-0">
            <p className="text-[10px] text-gray-400">
              <span className="text-blue-500 font-bold">*</span> Campos obligatorios
            </p>
            <button className="h-8 px-10 bg-[#e1e1e1] border border-gray-400 text-gray-700 font-sans text-[10px] uppercase tracking-wider shadow-sm hover:border-blue-400 hover:bg-[#e8e8e8] active:bg-[#d4d4d4] transition-all duration-200 outline-none">
              Guardar cambios
            </button>
          </div>
        </div>
      )}

      {/* ── Tab: Preview PDF ── */}
      {tab === 'preview' && (
        <div className="flex-1 overflow-y-auto p-8 bg-gray-200/50 flex flex-col items-center">
          <div className="w-[794px] min-h-[1123px] bg-white border border-gray-400 p-12 shadow-2xl mb-10 font-sans text-[11px] text-gray-900">
            
            {/* Encabezado */}
            <div className="flex items-start justify-between mb-2">
              <div>
                <p className="text-[17px] font-bold text-gray-900 uppercase tracking-tight">Nombre de la Compañía</p>
                <p className="italic text-[10px] text-gray-500 mb-2">Eslogan de su compañía</p>
                <p className="text-[10px] text-gray-700 leading-tight">
                  CUIT: 30-71234567-8 · Responsable Inscripto<br />
                  Dirección · Ciudad, Provincia, CP<br />
                  Tel: 123.456.7890 · email@empresa.com.ar
                </p>
              </div>
              <div className="text-right">
                <p className="text-[38px] font-black text-gray-400 leading-tight tracking-tight uppercase">
                  ORDEN DE<br />COMPRA
                </p>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-[10px] text-gray-600 leading-relaxed mb-3">
                El siguiente número debe figurar en toda la correspondencia,<br />
                remitos y facturas vinculadas a este pedido:
              </p>
              <p className="font-bold text-[13px]">N° O/C: OC-2026-00001</p>
            </div>

            <div className="grid grid-cols-2 mb-6 gap-4">
              <div className="text-[11px] leading-relaxed">
                <p className="font-bold text-[11px] mb-1 uppercase border-b border-gray-800">Para (Proveedor):</p>
                <p className="text-gray-600">Razón Social</p>
                <p className="text-gray-600">CUIT: XX-XXXXXXXX-X</p>
                <p className="text-gray-600">Condición IVA: Responsable Inscripto</p>
                <p className="text-gray-600">Dirección · Ciudad, Provincia</p>
              </div>
              <div className="text-[11px] leading-relaxed">
                <p className="font-bold text-[11px] mb-1 uppercase border-b border-gray-800">Entregar en:</p>
                <p className="text-gray-600">Razón Social / Nombre</p>
                <p className="text-gray-600">Dirección de entrega</p>
                <p className="text-gray-600">Ciudad, Provincia, CP</p>
              </div>
            </div>

            {/* Tabla de metadatos */}
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
                  <td className="border border-gray-800 px-2 h-7 text-gray-400 italic">30 días / contado</td>
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

            {/* Footer Legal */}
            <div className="grid grid-cols-2 gap-8 mt-8">
              <div className="text-[10px] text-gray-800">
                <p className="font-bold mb-2 uppercase text-[9px]">Términos y Condiciones:</p>
                <ol className="list-decimal pl-4 space-y-1.5">
                  <li>Emitir factura a nombre de la empresa compradora.</li>
                  <li>El número de O/C debe figurar en la factura y remito.</li>
                  <li>Respetar precios y condiciones pactadas.</li>
                  <li>Notificar cualquier imposibilidad de cumplimiento.</li>
                </ol>
              </div>
              <div className="border border-gray-800 flex flex-col">
                <p className="px-3 py-1 font-bold text-[10px] border-b border-gray-800 bg-gray-100 uppercase">Autorización</p>
                <div className="flex-1 min-h-[70px]"></div>
                <div className="grid grid-cols-2 border-t border-gray-800">
                  <span className="px-3 py-1 text-[9px] border-r border-gray-800 text-gray-500 italic">Firma y Sello</span>
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