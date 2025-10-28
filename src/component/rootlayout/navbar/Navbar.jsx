import React, { useEffect, useState } from "react";
import { Link, NavLink } from 'react-router-dom'
import { IoIosArrowUp, IoIosHeart } from 'react-icons/io';
import { FaCartShopping, FaRegMoon } from 'react-icons/fa6';
import logo from '../../../assets/logo_1.png'

const Navbar = ({scrolled}) => {
  return (
    <div className={`fixed w-full z-50 transition-all duration-300
      ${scrolled ? "bg-white text-black shadow-lg" : "bg-white text-black shadow-lg"}`}>
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
                <span className='inline-block hover:text-sky-400 transition-all duration-300 text-[30px]'><FaRegMoon /></span>
                <span className='inline-block hover:text-sky-400 transition-all duration-300 text-[30px]'><IoIosHeart /></span>
                <span className='inline-block hover:text-sky-400 transition-all duration-300 text-[30px]'><FaCartShopping /></span> 
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
