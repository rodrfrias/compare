import React, { useRef, useEffect, useState } from 'react';
import FirmaDigital from "../components/MisDatos/FirmaDigital.jsx"
import VistaPDF from '../components/MisDatos/VistaPDF.jsx';

const MiNegocio = () => {
  const [tab, setTab] = useState('datos')

  // UI / UX Refactorizado para coincidir con la tabla de datos (image_2c3db8.png)
  const inputClass =
    'w-full h-7 border border-gray-300 bg-white px-2 text-[11px] text-gray-700 placeholder:text-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400 transition-all shadow-sm';

  const labelClass =
    'block text-[10px] font-bold uppercase tracking-tight text-gray-500 mb-1';
    
  const subLabelClass = 
    'text-[9px] text-gray-400 mt-0.5 italic leading-tight';

  // Botón estilo "Generar Pedido" de la tabla
  const mainButtonClass = 
    'h-8 px-10  text-[10px] font-bold uppercase tracking-[0.12em] text-[#444] bg-gradient-to-b from-[#ffffff] to-[#f2f2f2] hover:from-[#f9f9f9] hover:to-[#e8e8e8] border-[0.5px] border-[#c0bfb8] shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_1px_2px_rgba(0,0,0,0.05)] transition-all duration-200  active:scale-[0.98] active:from-[#ececec] active:to-[#dadada] outline-none cursor-pointer';


  const requiredDot = <span className="text-blue-500 ml-0.5">*</span>

  return (
    <div className="flex-1 flex flex-col h-full border border-gray-300 bg-[#f9f9f7] overflow-hidden font-sans">

      {/* ── Tabs (Navegación Superior) ── */}
      <div className="flex items-center border-b border-gray-300 bg-[#f9f9f7] px-8 pt-4">
        <button
          onClick={() => setTab('datos')}
          className={`text-[10px] font-bold uppercase tracking-widest pb-3 px-2 mr-8 border-b-2 transition-colors ${
            tab === 'datos'
              ? 'border-blue-500 text-gray-900'
              : 'border-transparent text-gray-400 hover:text-gray-600'
          }`}
        >
          CONSULTAR DATOS
        </button>
        <button
          onClick={() => setTab('preview')}
          className={`text-[10px] font-bold uppercase tracking-widest pb-3 px-2 border-b-2 transition-colors flex items-center gap-2 ${
            tab === 'preview'
              ? 'border-blue-500 text-gray-900'
              : 'border-transparent text-gray-400 hover:text-gray-600'
          }`}
        >
          VISTA PREVIA
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

                  {/* Nuevo módulo de firma */}
                  <FirmaDigital></FirmaDigital>

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
                    <select className={inputClass}>
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
                    <select className={`${inputClass} cursor-pointer`}>
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
            <button className={mainButtonClass}>
              Guardar cambios
            </button>
          </div>
        </div>
      )}

      {/* ── Tab: Preview PDF ── */}
      {tab === 'preview' && ( <VistaPDF></VistaPDF>
      )}
    </div>
  )
}

export default MiNegocio