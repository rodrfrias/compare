import React  from 'react'
import { LiaClipboardListSolid } from "react-icons/lia";
import { LuArchive } from "react-icons/lu";
import { PiUserList } from "react-icons/pi";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {

  // Cremos un ARRAY de objetos que seran los bloques de mi lista
  const SIDEBAR_LINKS =[
    {id:1,  path:"/app/nuevoPedido", name: "NUEVO PEDIDO", icon: LiaClipboardListSolid},
    {id:3,  path:"/app/miNegocio",  name: "MIS DATOS", icon: PiUserList},
  ];

  // Guardamos el id del botón que el usuario presionó
  const [activeLink, setActiveLink] = useState("");

  const hadleClickLink = (index) => {
    setActiveLink(index);
  }

  return (
    
    <div className='w-8 md:w-52 fixed left-0 top-0 z-10 h-screen pt-8 px-4 bg-[#f9f9f7] border-r border-gray-300 antialiased flex flex-col justify-between pb-6'>
    
    <span className="font-serif text-[25px] tracking-tight text-[#1d1d19] antialiased  flex items-center gap-2 ">
      Compare 
    </span>
    {/* Navegación Links */}
    <div>
        <ul className='mt-6 space-y-4'>
        
        <hr className="border-t border-gray-300 my-4" />
        {/* Es un bucle que recorre tu array. Por cada objeto, genera un elemento <li>. link: objeto actual, index: posicion del objeto */}
        {/* <Li> indica un elemento de la lista */}

        {/* Sacamos los primeros 2 elementos del array*/}
        {SIDEBAR_LINKS.slice(0,1).map((link, index) => (
        
          <li
            className={`group cursor-pointer rounded-lg transition-colors duration-150 py-1 px-3
            ${activeLink === link.id 
              ? "bg-gray-100" 
              : "hover:bg-gray-100/70" 
            }`}   
          >
            <Link 
            to={link.path}
            className='flex justify-center md:justify-start items-center md:space-x-3'
            onClick={() => hadleClickLink(link.id)}
            >
              <span className={`text-[13px] ${activeLink === link.id ? "text-gray-900" : "text-gray-500 group-hover:text-gray-700"}`}>
                {<link.icon />}</span>
              <span className={`text-[10px] font-light hidden md:flex ${activeLink === link.id ? "text-gray-900" : "text-gray-600 group-hover:text-gray-800"}`}>
                    {link.name}</span>
            </Link>
          </li>
        ))}

        <hr className="border-t border-gray-300 my-4" />

        {/* Sacamos el último elemento del array*/}
        {SIDEBAR_LINKS.slice(-1).map((link, index) => (
        
          <li
            className={`group cursor-pointer rounded-lg transition-colors duration-150 py-1 px-3
            ${activeLink === link.id 
              ? "bg-gray-100" 
              : "hover:bg-gray-100/70" 
            }`}   
          >
            <Link
            to={link.path} 
            className='flex justify-center md:justify-start items-center md:space-x-3'
            onClick={() => hadleClick(link.id)}
            >
              <span className={`text-[13px] ${activeLink === link.id ? "text-gray-900" : "text-gray-500 group-hover:text-gray-700"}`}>
                {<link.icon />}</span>
              <span className={`text-[10px] font-light  hidden md:flex ${activeLink === link.id ? "text-gray-900" : "text-gray-600 group-hover:text-gray-800"}`}>
                    {link.name}</span>
            </Link>
          </li>
        ))}

        </ul> 
    </div>
    {/* Parte inferior: Perfil de Usuario (NUEVO) */}
    <div className="border-t border-gray-300 pt-4 mt-auto flex items-center space-x-3">
        {/* Avatar Circular */}
        <div className="w-9 h-9 rounded-full bg-black/85 flex items-center justify-center shrink-0 border border-gray-300">
          <span className="text-white font-bold text-lg">R</span>
        </div>

        {/* Información del Usuario (Oculta en mobile para mantener la estética) */}
        <div className="hidden md:flex flex-col min-w-0">
          <span className="text-[13px] font-semibold text-gray-900 leading-tight">
            Rodrigo Frias
          </span>
          <span className="text-[10px] font-normal text-gray-500 leading-tight">
            ivfriasrodrigo18@gmail.com
          </span>
        </div>
      </div>
    
    </div>
  )
}

export default Sidebar