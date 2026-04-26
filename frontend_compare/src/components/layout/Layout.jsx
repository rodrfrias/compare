import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className='flex h-screen overflow-hidden'>
      <Sidebar />
      <div className='w-full ml-5 md:ml-52 bg-[#f9f9f7] overflow-y-auto px-3 py-6 flex justify-between mx-auto'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout