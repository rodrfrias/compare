import React from 'react'
import Topbar from './Topbar'
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className='flex flex-col h-screen overflow-hidden'>
      <Topbar />
      {/* Eliminamos overflow-y-auto y dejamos que el hijo maneje el espacio */}
      <div className='w-full mt-12 bg-[#f9f9f7] flex flex-1 overflow-hidden'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout