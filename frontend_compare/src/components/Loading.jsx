import React from 'react'

/**
 * Loading ajustado con mayor contraste en las animaciones para mejorar la visibilidad.
 */
const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-white p-4 md:p-8 space-y-8">
      
      {/* Contenedor de Información: Ancho ajustado al padre */}
      <div className="w-full max-w-3xl space-y-6">
        <div className="text-center space-y-2">
          <p className=" font-sans text-[10px] text-black/50 truncate max-w-xs mx-auto">
            Analizando Documentos, espere por favor...
          </p>
        </div>

        {/* Simulación de Tabla/Data Grid */}
        <div className="border border-black/10 rounded-sm overflow-hidden bg-white/40 backdrop-blur-md shadow-sm">
          {/* Header Shimmer: Un poco más oscuro para diferenciarlo */}
          <div className="grid grid-cols-4 gap-2 p-3 border-b border-black/10 bg-black/5">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-2 bg-black/20 rounded-full animate-pulse"></div>
            ))}
          </div>
          
          {/* Filas Shimmer */}
          <div className="p-3 space-y-5">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="grid grid-cols-4 gap-4 items-center">
                {/* Variamos las opacidades y velocidades para un efecto más natural */}
                <div className="h-2 bg-black/10 rounded-full w-3/4 animate-pulse"></div>
                <div className="h-2 bg-black/15 rounded-full w-full animate-pulse"></div>
                <div className="h-2 bg-black/20 rounded-full w-1/2 animate-pulse"></div>
                <div className="h-2 bg-black/10 rounded-full w-2/3 animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loading