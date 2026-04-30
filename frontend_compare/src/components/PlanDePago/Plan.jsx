import React from 'react'

// Iconos (Mantenemos los mismos del componente base)
const FileIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
  </svg>
)
const BarChartIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="20" x2="12" y2="10" /><line x1="18" y1="20" x2="18" y2="4" /><line x1="6" y1="20" x2="6" y2="16" />
  </svg>
)
const TagIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" />
  </svg>
)
const PiggyBankIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2z" /><path d="M2 9v1a2 2 0 0 0 2 2h1" />
  </svg>
)
const ClipboardIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
  </svg>
)
const MessageCircleIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
)
const MailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
  </svg>
)
const BriefcaseIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
  </svg>
)

const features = {
  free: [
    { icon: <FileIcon />, title: 'Procesamiento IA hasta 5 MB', description: 'IA compara automáticamente tus PDFs.' },
    { icon: <BarChartIcon />, title: 'Comparaciones ilimitadas', description: 'Sin límite mensual de productos.' },
    { icon: <TagIcon />, title: 'Mejor precio por producto', description: 'Proveedor más conveniente por ítem.' },
    { icon: <PiggyBankIcon />, title: 'Ahorro estimado con IVA', description: 'Cálculo real del ahorro por proveedor.' },
  ],
  full: [
    { icon: <ClipboardIcon />, title: 'Órdenes de compra en PDF', description: 'Generación automática por proveedor.' },
    { icon: <MessageCircleIcon />, title: 'Envío por WhatsApp', description: 'Mandá pedidos con un solo clic.' },
    { icon: <MailIcon />, title: 'Envío por Gmail', description: 'Órdenes directas desde la plataforma.' },
    { icon: <BriefcaseIcon />, title: 'Personalización de marca', description: 'Tu logo y datos en cada orden.' },
  ],
}

const PricingCard = ({ badge, title, subtitle, originalPrice, currentPrice, currentPriceSuffix, includesLabel, featureList, onStart, highlighted }) => (
  <div className={`flex-1 min-w-[280px] max-w-[340px] bg-white p-6 flex flex-col border transition-all duration-200 ${
    highlighted ? 'border-[3px] border-black shadow-md' : 'border-gray-200 shadow-sm'
  }`}>
    {badge && (
      <span className="self-start text-[9px] uppercase tracking-wider font-bold bg-black text-white px-2 py-0.5 mb-4">
        {badge}
      </span>
    )}

    <div className="mb-1">
      <h3 className="text-xl font-bold text-gray-900 tracking-tight leading-none">{title}</h3>
      {subtitle && <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1.5">{subtitle}</p>}
    </div>

    <div className="mb-6 mt-4">
      {originalPrice && (
        <p className="text-[11px] text-gray-400 line-through mb-0.5 font-medium">{originalPrice}</p>
      )}
      <div className="flex items-baseline gap-1.5">
        <span className="text-4xl font-bold text-black">{currentPrice}</span>
        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">
          {currentPriceSuffix}
        </span>
      </div>
    </div>

    <button
      onClick={onStart}
      className={`w-full py-3 text-[10px] font-bold uppercase tracking-widest transition-all active:scale-[0.97] mb-8 cursor-pointer ${
        highlighted
          ? 'bg-black text-white hover:bg-gray-800'
          : 'bg-transparent text-black border-2 border-black hover:bg-gray-50'
      }`}
    >
      {highlighted ? 'Suscribirme' : 'Empezar Gratis'}
    </button>

    <div className="border-t border-gray-100 pt-6 flex-1">
      <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-4">{includesLabel}</p>
      <div className="flex flex-col gap-5">
        {featureList.map((f, i) => (
          <div key={i} className="flex gap-3 items-start">
            <span className="text-gray-400 shrink-0 mt-0.5">{f.icon}</span>
            <div>
              <p className="text-[13px] font-bold text-gray-800 leading-tight mb-0.5">{f.title}</p>
              <p className="text-[11px] text-gray-500 leading-snug font-medium">{f.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {!highlighted && (
      <p className="mt-6 text-[9px] text-gray-400 border-t border-gray-50 pt-3 italic font-medium">
        * Sin exportación de órdenes.
      </p>
    )}
  </div>
)

const Plan = () => {
  return (
    <div className="p-6 md:p-10 bg-[#f7f6f2]">
      <div className="text-center mb-10 max-w-xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 tracking-tight">
          Elegí tu plan
        </h2>
        <div className="h-[2px] w-12 bg-black mx-auto mb-4"></div>
        <p className="text-xs md:text-sm text-gray-500 font-medium tracking-wide">
          Empezá gratis y escalá cuando lo necesites.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto px-4">
        <PricingCard
          title="Plan Gratuito"
          subtitle="Sin riesgo"
          originalPrice="$4,99 USD/mes"
          currentPrice="$0"
          currentPriceSuffix="USD / mes"
          includesLabel="Incluye:"
          featureList={features.free}
          onStart={() => console.log('Free selected')}
          highlighted={false}
        />
        <PricingCard
          badge="Más popular"
          title="Plan Full"
          subtitle="Gestión total"
          originalPrice="$9,99 USD/mes"
          currentPrice="$6,99"
          currentPriceSuffix="USD / mes"
          includesLabel="Todo lo anterior, más:"
          featureList={features.full}
          onStart={() => console.log('Full selected')}
          highlighted={true}
        />
      </div>
    </div>
  )
}

export default Plan