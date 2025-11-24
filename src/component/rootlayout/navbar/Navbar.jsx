import React, { useEffect, useState } from "react";
import { Link, NavLink } from 'react-router-dom'
import { IoIosArrowUp, IoIosHeart } from 'react-icons/io';
import { FaCartShopping, FaRegMoon } from 'react-icons/fa6';
import logo from '../../../assets/logo_1.png'
import { IoCloseCircleOutline, IoSunnyOutline } from "react-icons/io5";
import { useTheme } from 'next-themes'
import category from "../../productcomponent/categoryApi/CategoryApi";
import image1 from '../../../assets/chur.jpg'
import { VscChromeMinimize } from "react-icons/vsc";
import { AiOutlinePlus } from "react-icons/ai";
import { TbCurrencyTaka } from "react-icons/tb";
import { useSelector } from "react-redux";

const Navbar = ({scrolled}) => {

  const { theme, setTheme } = useTheme();
  const [cartshow , setcartshow] = useState(false);
  const wishlistItem = useSelector((state) => state.wishList.value);


  return (
    <>
      <div className={`fixed w-full z-50 transition-all duration-700 ease-in-out
        ${scrolled
          ? "bg-white text-black shadow-lg dark:bg-gray-900 dark:text-gray-100 scale-x-99"
          : "bg-white text-black shadow-lg dark:bg-gray-900 dark:text-gray-100 scale-x-100"}`}>
        <div className='container'>
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
            
            <div className='flex items-center gap-x-8.5 cursor-pointer'>
                <div>
                  <span className='inline-block hover:text-sky-400 transition-all duration-300 text-[30px]' onClick={()=>setTheme(theme == "light" ? "dark" : "light")}>{theme == "light"? <FaRegMoon /> : <IoSunnyOutline /> }</span>
                </div>
                <Link to={'/wishlist'} className="relative">
                  <span className='inline-block hover:text-sky-400 transition-all duration-300 text-[30px]'><IoIosHeart /></span>
                    <span className="flex items-center justify-center w-5 h-5 absolute -right-2 -top-2 bg-yellow-500 rounded-[50%]">{wishlistItem.length}</span>
                </Link>
                <div className="relative transition-all duration-300" onClick={()=>setcartshow(!cartshow)}>
                  <span className='inline-block relative hover:text-sky-400 transition-all duration-300 text-[30px]'><FaCartShopping /></span> 
                  <span className="flex items-center justify-center w-5 h-5 absolute -right-2 -top-2 bg-yellow-500 rounded-[50%]">0</span>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cart Drawer — always inside DOM */}
      <div className={`fixed top-0 right-0 h-full w-[430px] bg-[#f5f5f5] z-2000
        transition-transform duration-500 dark:text-black ease-in-out ${cartshow ? "translate-x-0" : "translate-x-full"}`}>

        {/* cart header section */}
         <div className="bg-[#e7e1e1] shadow-lg flex items-center justify-between py-4 px-5">
            <h1 className="text-[18px] font-Poppins font-medium">Your Cart {`(${0})`}</h1>
            <button className="text-[18px] cursor-pointer font-Poppins font-normal"  onClick={() => setcartshow(false)}>Close</button>
         </div>
         
        {/* cart bottom section */}
         <div className="p-4  flex flex-col h-full">
             <div className="flex flex-col py-2 px-2 gap-y-2 overflow-y-auto max-h-[410px] ">
                {[...new Array(5)].map(()=>(
                      <div className="flex items-center justify-between">
                          <div className="flex items-center gap-x-3 relative">
                            <div className="w-[75px] h-[75px] overflow-hidden">
                              <img className="w-full h-full object-cover rounded" src={image1} alt={image1} />
                            </div>
                            <span className="absolute z-3000 -left-2 -top-2 text-black bg-[#e7e1e1] rounded-[50%] cursor-pointer"><IoCloseCircleOutline /></span>
                            <h1 className="text-[16px] font-Poppins font-normal">Chur001</h1>
                          </div>
                            <div className="flex items-center border-2 border-gray-400 gap-x-5 py-1 px-2 rounded">
                              <span><VscChromeMinimize /></span>
                              <span>0</span>
                              <span><AiOutlinePlus /></span>
                            </div>
                            <p className="text-[16px] font-Poppins">320000</p>
                      </div>
                ))}
             </div>
             <div className="flex flex-col z-1000 p-2 gap-y-3 border-t border-gray-400 mt-14">
               <div className="flex items-center justify-between">
                 <h1 className="text-[18px]">Subtotal:</h1>
                 <span className="flex items-center gap-x-0.5 text-[16px] font-Poppins ">320000 <TbCurrencyTaka /></span>
               </div>
               <div className="flex items-center justify-center py-2 cursor-pointer text-[18px] border-2 border-black">
                 <button className="cursor-pointer">View Cart</button>
               </div>
               <div className="flex items-center justify-center py-2 cursor-pointer text-[18px] text-white bg-black">
                 <button className="cursor-pointer">Checkout</button>
               </div>
             </div>
         </div>
      </div>
    </>
  )
}

export default Navbar
