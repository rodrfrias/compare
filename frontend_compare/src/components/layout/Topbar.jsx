import React from 'react'
import { LiaClipboardListSolid } from "react-icons/lia";
import { PiUserList } from "react-icons/pi";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Topbar = () => {

  const SIDEBAR_LINKS = [
    { id: 1, path: "/app/nuevoPedido", name: "NUEVO PEDIDO", icon: LiaClipboardListSolid },
    { id: 3, path: "/app/miNegocio",   name: "MIS DATOS",    icon: PiUserList },
  ];

  const [activeLink, setActiveLink] = useState("");

  return (
    <div className='w-full fixed top-0 left-0 z-10 h-12 bg-[#f9f9f7] border-b border-gray-300 antialiased flex items-center justify-between px-4'>

      {/* Logo */}
      <span className="font-serif text-[20px] tracking-tight text-[#1d1d19]">
        Compare
      </span>

      {/* Pestañas de navegación */}
      <nav className="flex items-center h-full">
        {SIDEBAR_LINKS.map((link) => (
          <Link
            key={link.id}
            to={link.path}
            onClick={() => setActiveLink(link.id)}
            className={`flex items-center gap-2 h-full px-5 text-[10px] font-light border-b-2 transition-colors duration-150
              ${activeLink === link.id
                ? 'border-gray-900 text-gray-900'
                : 'border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-400'
              }`}
          >
            <link.icon className="text-[11px]" />
            <span>{link.name}</span>
          </Link>
        ))}
      </nav>

      {/* Perfil de usuario */}
      <div className="flex items-center gap-3">
        <div className="flex flex-col min-w-0">
          <span className="text-[12px] font-semibold text-gray-900 leading-tight">Rodrigo Frias</span>
          <span className="text-[10px] font-normal text-gray-500 leading-tight">ivfriasrodrigo18@gmail.com</span>
        </div>
         <div className="w-9 h-9 rounded-full bg-black/85 flex items-center justify-center border border-gray-300 shrink-0">
          <span className="text-white font-bold text-sm">R</span>
        </div>
      </div>

    </div>
  )
}

export default Topbar