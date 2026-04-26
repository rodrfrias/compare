import { RiFileUploadLine, RiCloseLine } from "react-icons/ri";
import { BiSolidFilePdf } from "react-icons/bi";

// Sub-componente optimizado (se mantiene igual, con shrink-0 para evitar colapso interno)
const FileProgressItem = ({ fileName, progress, size, timeLeft }) => (
  <div className="flex items-center gap-3 border border-gray-200 rounded-lg px-3 py-1 w-full bg-[#f5f3ee] shrink-0">
    <div className="shrink-0 w-5 h-5 bg-red-600 rounded-md flex items-center justify-center text-white">
      <BiSolidFilePdf size={30} />
    </div>

    <div className="flex-1 min-w-0">
      <div className="flex items-center justify-between mb-0.5">
        <span className="text-[10px] font-medium text-gray-800 truncate">{fileName}</span>
        <button className="text-gray-400 hover:text-gray-600 transition-colors ml-2 shrink-0">
          <RiCloseLine size={16} />
        </button>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex-1 bg-white rounded-full h-0.5">
          <div 
            className="bg-black/80 h-0.5 rounded-full transition-all duration-300" 
            style={{ width: `${progress}%` }} 
          />
        </div>
        <span className="text-xs text-gray-400 shrink-0">{progress}%</span>
      </div>
      <p className="text-[10px] text-gray-400 mt-0.5">{size} · Queda {timeLeft}</p>
    </div>
  </div>
);

const DropZone = () => {
  return (
    /* Contenedor Principal: h-full y flex-col para establecer el contexto de altura */
    <div className="w-full h-full px-8 py-6 flex flex-col bg-[#f5f3ee]bg-gray-50 overflow-hidden">
      
      {/* Header: shrink-0 para que no se aplaste */}
      <div className="flex items-center justify-center mb-4 shrink-0">
        <span className="text-gray-900 font-semibold text-lg leading-tight text-center">
          ¡Hola Rodrigo, sube tus documentos y busquemos el mejor precio hoy!
        </span>
      </div>

      {/* Drop area: shrink-0 para mantener tamaño fijo */}
      <div className="border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center py-6 gap-2 bg-[#f5f3ee] cursor-pointer hover:border-gray-800 hover:bg-gray-50 transition-colors shrink-0">
        <div className="text-gray-400">
          <RiFileUploadLine size={40} color="black" />
        </div>
        <p className="text-[13px] text-gray-600 font-medium">
          Arrastrá y soltá o{' '}
          <span className="text-blue-600 font-semibold cursor-pointer hover:underline">buscá un archivo</span>{' '}
          para subir
        </p>
        <p className="text-xs text-gray-400">Tamaño máximo de archivo: 50 MB</p>
      </div>

      {/* Accepted formats */}
      Formatos permitidos: <span className="text-xs text-gray-400">PDF, JPG y PNG</span>

      {/* Lista de archivos: flex-1 y min-h-0 son los que activan el scroll real en Flexbox */}
      <div className="flex-1 min-h-0 flex flex-col gap-2 mt-4 overflow-y-auto pr-1 custom-scrollbar">
        <FileProgressItem fileName="CV_Rodrigo_2024.docx" progress={60} size="5.3 MB" timeLeft="1 min" />
        <FileProgressItem fileName="DNI_Frente.jpg" progress={100} size="1.2 MB" timeLeft="Completado" />
        <FileProgressItem fileName="DNI_Frente.jpg" progress={100} size="1.2 MB" timeLeft="Completado" />
        <FileProgressItem fileName="DNI_Frente.jpg" progress={100} size="1.2 MB" timeLeft="Completado" />
        <FileProgressItem fileName="DNI_Frente.jpg" progress={100} size="1.2 MB" timeLeft="Completado" />
    

      </div>

      {/* Footer: shrink-0 y borde superior */}
      <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-4 shrink-0">
        <button className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-600 transition-colors">
          Centro de ayuda
        </button>
        <button className="flex items-center gap-2 px-6 py-1.5 rounded-md text-[13px] uppercase font-semibold bg-blue-600 text-white border border-gray-300 hover:bg-blue-700 transition-all duration-200 active:scale-95">
          Confirmar
        </button>
      </div>
    </div>
  );
};

export default DropZone;