import React from 'react'

// Icons
const FileIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
  </svg>
)

const BarChartIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="20" x2="12" y2="10" />
    <line x1="18" y1="20" x2="18" y2="4" />
    <line x1="6" y1="20" x2="6" y2="16" />
  </svg>
)

const TagIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
    <line x1="7" y1="7" x2="7.01" y2="7" />
  </svg>
)

const PiggyBankIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2z" />
    <path d="M2 9v1a2 2 0 0 0 2 2h1" />
  </svg>
)

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
)

const ClipboardIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
  </svg>
)

const MessageCircleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
)

const BriefcaseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
  </svg>
)

const features = {
  free: [
    {
      icon: <FileIcon />,
      title: 'Procesamiento IA hasta 5 MB',
      description: 'Subí listas en PDF y la IA las compara automáticamente.',
    },
    {
      icon: <BarChartIcon />,
      title: 'Comparaciones ilimitadas',
      description: 'Sin límite mensual. Identificación automática de productos comunes entre proveedores.',
    },
    {
      icon: <TagIcon />,
      title: 'Mejor precio por producto',
      description: 'Listado claro del proveedor más conveniente para cada ítem.',
    },
    {
      icon: <PiggyBankIcon />,
      title: 'Ahorro estimado con IVA',
      description: 'Cálculo del ahorro real considerando el IVA de cada proveedor.',
    },
  ],
  full: [
    {
      icon: <ClipboardIcon />,
      title: 'Órdenes de compra en PDF',
      description: 'Generación automática de PDFs por proveedor. Soporta hasta 25 MB por sesión.',
    },
    {
      icon: <MessageCircleIcon />,
      title: 'Envío por WhatsApp',
      description: 'Mandá el pedido al proveedor con un solo clic, directo desde la app.',
    },
    {
      icon: <MailIcon />,
      title: 'Envío por Gmail',
      description: 'Enviá las órdenes por email sin salir de la plataforma.',
    },
    {
      icon: <BriefcaseIcon />,
      title: 'Personalización de marca',
      description: 'Agregá tu logo y datos del negocio en cada orden de compra.',
    },
  ],
}

const PricingCard = ({
  badge,
  title,
  subtitle,
  originalPrice,
  currentPrice,
  currentPriceSuffix,
  includesLabel,
  featureList,
  onStart,
  highlighted,
}) => (
  <div className={`flex-1 min-w-[280px] bg-white rounded-2xl p-6 flex flex-col ${highlighted ? 'border-2 border-gray-900' : 'border border-gray-200'}`}>

    {/* Badge */}
    {badge && (
      <span className="self-start text-[11px] font-medium bg-gray-900 text-white px-3 py-0.5 rounded-full mb-3">
        {badge}
      </span>
    )}

    {/* Header */}
    <div className="mb-1">
      <p className="text-xl font-medium text-gray-900">{title}</p>
      {subtitle && <p className="text-xs text-gray-400 mt-0.5">{subtitle}</p>}
    </div>

    {/* Pricing */}
    <div className="mb-5 mt-4">
      {originalPrice && (
        <p className="text-sm text-gray-400 line-through mb-1">{originalPrice}</p>
      )}
      <div className="flex items-baseline gap-1.5 flex-wrap">
        <span className="text-4xl font-medium text-gray-900">{currentPrice}</span>
        <span className="text-sm text-gray-500">{currentPriceSuffix}</span>
      </div>
    </div>

    {/* CTA */}
    <button
      onClick={onStart}
      className={`w-full py-2.5 rounded-full text-sm font-medium transition-all duration-150 active:scale-[0.98] mb-6 cursor-pointer ${
        highlighted
          ? 'bg-gray-900 text-white hover:bg-gray-700'
          : 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-50'
      }`}
    >
      {highlighted ? 'Suscribirme' : 'Empezar gratis'}
    </button>

    {/* Divider + Features */}
    <div className="border-t border-gray-100 pt-4 flex-1">
      <p className="text-xs font-medium text-gray-500 mb-3">{includesLabel}</p>
      <div className="flex flex-col gap-3">
        {featureList.map((f, i) => (
          <div key={i} className="flex gap-2.5 items-start">
            <span className="text-gray-400 shrink-0 mt-0.5">{f.icon}</span>
            <div>
              <p className="text-[13px] font-medium text-gray-900 mb-0.5">{f.title}</p>
              <p className="text-xs text-gray-500 leading-relaxed">{f.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Bottom restriction note for free plan */}
    {!highlighted && (
      <p className="mt-4 text-[11px] text-gray-400 border-t border-gray-100 pt-3">
        * No incluye exportación de órdenes de compra.
      </p>
    )}
  </div>
)

const Plan = () => {
  return (
    <div className="p-8 font-sans">

      {/* Header */}
      <div className="text-center mb-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-medium text-gray-900 mb-2">Elegí el plan que se adapta a tu negocio</h2>
        <p className="text-sm text-gray-500">Empezá gratis y escalá cuando lo necesites. Sin compromisos.</p>
      </div>

      <div className="flex flex-wrap gap-4 max-w-3xl mx-auto">
        <PricingCard
          title="Plan Gratuito"
          subtitle="Para empezar sin riesgo"
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
          subtitle="Gestión operativa total"
          originalPrice="$9,99 USD/mes"
          currentPrice="$7,99"
          currentPriceSuffix="USD / mes"
          includesLabel="Todo lo del plan gratuito, más:"
          featureList={features.full}
          onStart={() => console.log('Full selected')}
          highlighted={true}
        />
      </div>
    </div>
  )
}

export default Plan