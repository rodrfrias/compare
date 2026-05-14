import React, { useState, useRef, useEffect } from 'react';

// Métodos para Dibujar Firma Mejorada
const SignatureCanvas = ({ tab, labelClass, requiredDot }) => {
  const [isDrawing, setIsDrawing] = useState(false);
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  // --- MEJORA: Ref para almacenar los puntos actuales ---
  const currentPathRef = useRef([]);

  // useEffect robusto para reactivar el canvas
  useEffect(() => {
    const setupCanvas = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      // Configuración de resolución (DPI)
      canvas.width = canvas.offsetWidth * 2;
      canvas.height = canvas.offsetHeight * 2;
      canvas.style.width = `${canvas.offsetWidth}px`;
      canvas.style.height = `${canvas.offsetHeight}px`;

      const context = canvas.getContext("2d");
      context.scale(2, 2);

      // Estilo caligráfico
      context.lineCap = "round";
      context.lineJoin = "round";
      context.strokeStyle = "black";
      context.lineWidth = 1; // Grosor fino y elegante

      contextRef.current = context;
    };

    const timeoutId = setTimeout(setupCanvas, 50);
    return () => clearTimeout(timeoutId);
  }, [tab]);

  const startDrawing = ({ nativeEvent }) => {
    if (!contextRef.current) return;

    const { offsetX, offsetY } = nativeEvent;

    // --- MEJORA: Reiniciar el path e iniciar el dibujo ---
    currentPathRef.current = [];
    currentPathRef.current.push({ x: offsetX, y: offsetY });

    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing || !contextRef.current) return;

    const { offsetX, offsetY } = nativeEvent;

    // --- MEJORA: Usar Curvas de Bézier Cuadráticas ---
    const path = currentPathRef.current;

    // Añadimos el nuevo punto
    path.push({ x: offsetX, y: offsetY });

    // Necesitamos al menos 3 puntos para empezar a suavizar
    if (path.length >= 3) {
      contextRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      contextRef.current.beginPath();

      // Movemos al primer punto
      contextRef.current.moveTo(path[0].x, path[0].y);

      // Iteramos a través de los puntos suavizando cada tramo
      for (let i = 1; i < path.length - 2; i++) {
        const c = (path[i].x + path[i + 1].x) / 2;
        const d = (path[i].y + path[i + 1].y) / 2;
        contextRef.current.quadraticCurveTo(path[i].x, path[i].y, c, d);
      }

      // Dibujamos el último tramo
      const last = path[path.length - 1];
      contextRef.current.lineTo(last.x, last.y);
      contextRef.current.stroke();
    } else if (path.length === 2) {
      // Si solo hay dos puntos, dibujamos una línea recta simple
      contextRef.current.lineTo(path[1].x, path[1].y);
      contextRef.current.stroke();
    }
  };

  const stopDrawing = () => {
    if (isDrawing && contextRef.current) {
      contextRef.current.closePath();
      setIsDrawing(false);
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas || !contextRef.current) return;
    // Al usar scale(2,2), limpiamos el área total
    contextRef.current.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div className="mt-2">
      <label className={labelClass}>Firma {requiredDot}</label>
      <div className="border border-gray-200 rounded-[3px] bg-white w-full h-[175px] relative overflow-hidden">
        <canvas
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          ref={canvasRef}
          className="w-full h-full cursor-crosshair"
        />
      </div>

      <div className="flex gap-2 mt-3">
        {/* Botón Borrar */}
        <button
          type="button"
          onClick={clearCanvas}
          className="flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#444] bg-linear-to-b from-[#ffffff] to-[#f2f2f2] hover:from-[#f9f9f9] hover:to-[#e8e8e8] border-[0.5px] border-[#c0bfb8] shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_1px_2px_rgba(0,0,0,0.05)] transition-all duration-200 active:scale-[0.98] active:from-[#ececec] active:to-[#dadada] outline-none cursor-pointer"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
            <polyline points="3 6 5 6 21 6" />
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          </svg>
          Borrar
        </button>

        {/* Botón Editar */}
        <button
          type="button"
          className="flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#444] bg-gradient-to-b from-[#ffffff] to-[#f2f2f2] hover:from-[#f9f9f9] hover:to-[#e8e8e8] border-[0.5px] border-[#c0bfb8] shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_1px_2px_rgba(0,0,0,0.05)] transition-all duration-200 active:scale-[0.98] active:from-[#ececec] active:to-[#dadada] outline-none cursor-pointer"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
          </svg>
          Editar
        </button>
      </div>
    </div>
  );
};

export default SignatureCanvas;