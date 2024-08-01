import React from 'react'
import Profile from "./Profile";
import logo from "../assets/bankkaro/bankkaro.png";
import { FaChevronDown } from "react-icons/fa";
import border from "../assets/bankkaro/border.png"
const Navbar = () => {
  return (
    <>
      <nav className='flex justify-between items-center py-4 bg-gradient-to-r from-black to-gray w-full'>
      <img src={logo} alt='logo' className='h-4 w-24 ml-10' />
      <div className='flex justify-between w-1/3 text-xs'>
        <div className='flex'>OUR PRODUCTS <FaChevronDown className='mt-0.5 ml-0.5' /></div>
        <div className='flex'>TOOLS <FaChevronDown className='mt-0.5 ml-0.5' /></div>
        <div>BLOGS</div>
        <div>ABOUT US</div>
      </div>
      <div className='mr-10'>
          <Profile />
      </div>
     
    </nav>
    <img src={border} className='w-full' />
    </>
  
  )
}


export default Navbar