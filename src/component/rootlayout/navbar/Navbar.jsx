import React, { useEffect, useState } from "react";
import { Link, NavLink } from 'react-router-dom'
import { IoIosArrowUp, IoIosHeart } from 'react-icons/io';
import { FaCartShopping, FaRegMoon } from 'react-icons/fa6';
import logo from '../../../assets/logo_1.png'
import { IoSunnyOutline } from "react-icons/io5";
import { useTheme } from 'next-themes'

const Navbar = ({scrolled}) => {

  // const [darkMode, setDarkMode] = useState(false);

  // useEffect(() => {
  //   if (darkMode) {
  //     document.documentElement.classList.add('dark');
  //   } else {
  //     document.documentElement.classList.remove('dark');
  //   }
  // }, [darkMode]);
  
  const { theme, setTheme } = useTheme()

  return (
    <div className={`fixed w-full z-50 transition-all duration-300
  ${scrolled
    ? "bg-white text-black shadow-lg dark:bg-gray-900 dark:text-gray-100"
    : "bg-white text-black shadow-lg dark:bg-gray-900 dark:text-gray-100"}`}>
      <div className='container'>
        <div className='flex items-center justify-between'>
           <div className='w-20 h-20 overflow-hidden'>
              <img className='w-full h-full object-certain' src={logo} alt={logo} />
           </div>
             
        
           <ul className='flex font-Poppins items-center gap-x-5 cursor-pointer'>
              <li className='linelist'><NavLink>Home</NavLink></li>
              <li className='flex linelist items-center group gap-2 cursor-pointer relative '>
                  <div className='flex group items-end gap-x-2' >
                    Shop <span className='inline-block group-hover:rotate-180 text-[18px] transition-all duration-300'><IoIosArrowUp /></span>
                  </div>
                          
                  <ul className="absolute  hidden group-hover:block left-0 top-5 mt-2 w-60 bg-white pb-2  shadow-lg rounded-md">
                      {["Rings", "Necklaces", "Bracelets", "Earrings"].map(
                      (item, index) => (
                          <li key={index} className="px-4 py-2 hover:bg-yellow-100 border-b-2 border-gray-200 hover:text-yellow-700 transition-all">{item}</li>
                      )
                      )}
                  </ul>
              </li>
              <li className='linelist'>Live Rate</li>
              <li className='linelist'>About</li>
              <li className='linelist'>Contact</li>
           </ul>
           
           <div className='flex items-center gap-x-8.5 cursor-pointer'>
              <div>
                <span className='inline-block hover:text-sky-400 transition-all duration-300 text-[30px]' onClick={()=>setTheme(theme == "light" ? "dark" : "light")}>{theme == "light"? <FaRegMoon /> : <IoSunnyOutline /> }</span>
              </div>
              <div className="relative">
                <span className='inline-block hover:text-sky-400 transition-all duration-300 text-[30px]'><IoIosHeart /></span>
                  <span className="flex items-center justify-center w-5 h-5 absolute -right-2 -top-2 bg-yellow-500 rounded-[50%]">0</span>
              </div>
              <div className="relative">
                <span className='inline-block relative hover:text-sky-400 transition-all duration-300 text-[30px]'><FaCartShopping /></span> 
                <span className="flex items-center justify-center w-5 h-5 absolute -right-2 -top-2 bg-yellow-500 rounded-[50%]">0</span>
              </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
