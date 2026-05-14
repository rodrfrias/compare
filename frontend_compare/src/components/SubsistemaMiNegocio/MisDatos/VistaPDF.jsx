import React from 'react';

const vistaPDF = () => {

  return (
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

        {/* Tabla de productos */}
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
  );
}

export default vistaPDF;