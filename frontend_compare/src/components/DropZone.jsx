import { RiFileUploadLine, RiCloseLine } from "react-icons/ri";
import { BiSolidFilePdf } from "react-icons/bi";

const FileProgressItem = ({ fileName, progress, size, timeLeft }) => (
  <div className="flex items-center gap-3 border rounded-lg px-3 py-2 w-full shrink-0"
    style={{ background: "#ffffff", borderColor: "#e5e5e5" }}>
    <div className="shrink-0 w-7 h-7 bg-red-700 rounded-md flex items-center justify-center text-white">
      <BiSolidFilePdf size={16} />
    </div>

    <div className="flex-1 min-w-0">
      <div className="flex items-center justify-between mb-1">
        <span className="truncate"
          style={{ fontSize: "10px", fontWeight: 600, color: "#1a1a1a", letterSpacing: "0.02em", fontFamily: "'Courier New', Courier, monospace" }}>
          {fileName}
        </span>
        <button className="ml-2 shrink-0 transition-colors" style={{ color: "#aaa" }}>
          <RiCloseLine size={15} />
        </button>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex-1 rounded-full" style={{ height: "2px", background: "#f0f0f0" }}>
          <div
            className="rounded-full transition-all duration-300"
            style={{ width: `${progress}%`, height: "2px", background: "#1a1a1a" }}
          />
        </div>
        <span className="shrink-0"
          style={{ fontSize: "9px", color: "#888", letterSpacing: "0.04em", fontFamily: "'Courier New', Courier, monospace" }}>
          {progress}%
        </span>
      </div>

      <p style={{ fontSize: "9px", color: "#999", marginTop: "3px", letterSpacing: "0.03em", fontFamily: "'Courier New', Courier, monospace" }}>
        {size} · Queda {timeLeft}
      </p>
    </div>
  </div>
);

const DropZone = () => {
  return (
    <div className="w-full h-full flex flex-col overflow-hidden"
      style={{ background: "#ffffff", fontFamily: "'Courier New', Courier, monospace" }}>

      {/* Header */}
      <div className="flex items-center justify-center mb-4 shrink-0 px-8 pt-6">
        <span 
          className="text-center text-[18px] text-black/90 tracking-tight"
          style={{ 
            fontFamily: "Arial, Helvetica, sans-serif", 
            fontWeight: "700" 
          }}
        >
          ¡Hola Rodrigo, sube tus documentos y busquemos el mejor precio hoy!
        </span>
      </div>

      {/* Drop area */}
      <div className="mx-8 shrink-0 flex flex-col items-center justify-center py-8 gap-2 cursor-pointer rounded-xl"
        style={{ border: "1.5px dashed #e5e5e5", background: "#fafafa" }}>
        <RiFileUploadLine size={36} color="#555" />
        <p style={{ fontSize: "12px", color: "#555", margin: 0, letterSpacing: "0.02em" }}>
          Arrastrá y soltá o{" "}
          <span style={{ color: "#1a1a1a", fontWeight: 700, textDecoration: "underline", cursor: "pointer" }}>
            buscá un archivo
          </span>{" "}
          para subir
        </p>
        <p style={{ fontSize: "10px", color: "#999", margin: 0, letterSpacing: "0.04em", textTransform: "uppercase" }}>
          Tamaño máximo de archivo: 50 MB
        </p>
      </div>

      {/* Accepted formats */}
      <div className="flex items-center gap-2 mx-8 mt-4 shrink-0">
        <span style={{ fontSize: "11px", color: "#555", letterSpacing: "0.02em" }}>Formatos permitidos:</span>
        <span style={{ fontSize: "10px", color: "#888", letterSpacing: "0.06em", textTransform: "uppercase", background: "#f5f5f5", border: "1px solid #eee", borderRadius: "4px", padding: "2px 8px" }}>
          PDF · JPG · PNG
        </span>
      </div>

      {/* File list */}
      <div className="flex-1 min-h-0 flex flex-col gap-2 mt-4 mx-8 overflow-y-auto pr-1 custom-scrollbar">
        <FileProgressItem fileName="CV_Rodrigo_2024.docx" progress={60} size="5.3 MB" timeLeft="1 min" />
        <FileProgressItem fileName="DNI_Frente.jpg" progress={100} size="1.2 MB" timeLeft="Completado" />
        <FileProgressItem fileName="DNI_Frente.jpg" progress={100} size="1.2 MB" timeLeft="Completado" />
        <FileProgressItem fileName="DNI_Frente.jpg" progress={100} size="1.2 MB" timeLeft="Completado" />
        <FileProgressItem fileName="DNI_Frente.jpg" progress={100} size="1.2 MB" timeLeft="Completado" />
        <FileProgressItem fileName="DNI_Frente.jpg" progress={100} size="1.2 MB" timeLeft="Completado" />
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-8 py-4 mt-auto shrink-0"
        style={{ borderTop: "1px solid #f0f0f0" }}>
        <button style={{ background: "none", border: "none", cursor: "pointer", fontSize: "10px", color: "#888", letterSpacing: "0.06em", textTransform: "uppercase", fontFamily: "'Courier New', Courier, monospace", padding: 0 }}>
          Centro de ayuda
        </button>
        <button style={{ background: "#1a1a1a", border: "none", cursor: "pointer", fontSize: "10px", fontWeight: 700, color: "#fff", letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "'Courier New', Courier, monospace", padding: "8px 24px", borderRadius: "5px" }}>
          Confirmar
        </button>
      </div>

    </div>
  );
};

export default DropZone;