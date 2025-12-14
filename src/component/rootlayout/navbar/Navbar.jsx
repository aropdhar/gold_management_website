import React, { useEffect, useState } from "react";
import { Link, NavLink } from 'react-router-dom'
import { IoIosArrowUp, IoIosHeart } from 'react-icons/io';
import { FaCartShopping, FaRegMoon } from 'react-icons/fa6';
import logo from '../../../assets/logo_1.png'
import { IoCloseCircleOutline, IoSunnyOutline } from "react-icons/io5";
import { useTheme } from 'next-themes'
import category from "../../productcomponent/categoryApi/CategoryApi";
import { useSelector } from "react-redux";
import NavbarCart from "../../navbarcart/NavbarCart";
import NavbarResponsive from "../navbarresponsive/NavbarResponsive";
import { CiMenuFries } from "react-icons/ci";
import { RiCloseLargeFill } from "react-icons/ri";

const Navbar = ({scrolled}) => {

  const { theme, setTheme } = useTheme();
  const [cartshow , setcartshow] = useState(false);
  const wishlistItem = useSelector((state) => state.wishList.value);
  const cartItem = useSelector((state) => state.addtocartItem.value)
  const [navbarshow , setNavbarShow] = useState(false)
  

  return (
    <>
      <div className={`fixed px-5 md:px-0 w-full z-50 transition-all duration-500 ease-in-out
        ${scrolled
          ? "-translate-y-13 bg-white shadow-lg dark:bg-gray-900"
          : "translate-y-0 bg-white dark:bg-gray-900"}`}>
        <div className='custom-container mx-auto'>
          <div className='flex items-center justify-between'>
            <div className='w-20 h-20 overflow-hidden'>
                <img className='w-full h-full object-certain' src={logo} alt={logo} />
            </div>
              
            <ul className='hidden  md:flex font-Poppins items-center gap-x-5 cursor-pointer'>
                <li className='linelist'><NavLink to={'/'}>Home</NavLink></li>
                <li className='flex linelist items-center group gap-2 cursor-pointer relative '>
                    <div className='flex group items-end gap-x-2' >
                      Shop <span className='inline-block group-hover:rotate-180 text-[18px] transition-all duration-300'><IoIosArrowUp /></span>
                    </div>
                            
                    <ul className="absolute  hidden group-hover:block left-0 top-5 mt-2 w-60 dark:bg-[#1c1b22]  bg-white pb-2  shadow-lg rounded-md">
                        {category.map(
                        (item, index) => (
                            <li key={index} className="px-4 py-2  dark:text-white hover:bg-yellow-100 border-b-2 border-gray-200 hover:text-yellow-700 transition-all"><NavLink to={`/product-category/${item.item}`}>{item.item}</NavLink></li>
                        )
                        )}
                    </ul>
                </li>
                <li className='linelist'>Live Rate</li>
                <li className='linelist'>About</li>
                <li className='linelist'><NavLink to={'/contact'}>Contact</NavLink></li>
            </ul>
            
            <div className='flex items-center gap-x-3 md:gap-x-8.5 cursor-pointer'>
                <div className="block md:hidden">
                  <span onClick={()=> setNavbarShow(!navbarshow)} className={`text-[30px] hover:text-sky-400 transition-all duration-300`}>{navbarshow ? <RiCloseLargeFill /> : <CiMenuFries />}</span>
                </div>
                <div>
                  <span className='hover:text-sky-400 transition-all duration-300 text-[30px] hidden md:block' onClick={()=>setTheme(theme == "light" ? "dark" : "light")}>{theme == "light"? <FaRegMoon /> : <IoSunnyOutline /> }</span>
                </div> 
                <Link to={'/wishlist'} className="relative hidden md:block">
                  <span className='hover:text-sky-400 transition-all duration-300 text-[30px]'><IoIosHeart /></span>
                    <span className="flex items-center justify-center w-5 h-5 absolute -right-2 -top-2 bg-yellow-500 rounded-[50%]">{wishlistItem.length}</span>
                </Link>
                <div className="relative transition-all duration-300" onClick={()=>setcartshow(!cartshow)}>
                  <span className='inline-block relative hover:text-sky-400 transition-all duration-300 text-[30px]'><FaCartShopping /></span> 
                  <span className="flex items-center justify-center w-5 h-5 absolute -right-2 -top-2 bg-yellow-500 rounded-[50%]">{`${cartItem.length}`}</span>
                </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* navbar cart section */}
 
      <NavbarResponsive theme={theme} setTheme={setTheme} navbarshow={navbarshow} setNavbarShow={setNavbarShow}/>

      <NavbarCart cartshow={cartshow} setcartshow={setcartshow}/>
    </>
  )
}

export default Navbar
