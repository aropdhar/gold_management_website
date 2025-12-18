import React, { useState } from 'react'
import logo from '../../../assets/logo_1.png'
import { GrClose } from 'react-icons/gr'
import { Link, NavLink } from 'react-router-dom';
import category from '../../productcomponent/categoryApi/CategoryApi';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa6';
import { ImYoutube2 } from 'react-icons/im';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';
import { CiHeart } from 'react-icons/ci';

const NavbarResponsive = ({navbarshow , setNavbarShow , theme , setTheme , wishlistItem}) => {

    console.log(wishlistItem.length);
    
    
    const [Show , setShow] = useState("Menu");
    const tabs = ['Menu' , 'Categories']


  return (
    <div className={`bg-white dark:bg-[#1c1b22]  z-2000 fixed w-[300px] h-full left-0 top-0 transition-transform duration-300 ${navbarshow ? "translate-x-0" : "-translate-x-full" }`} >
       <div className='bg-[#f5f5f5] dark:bg-[#1c1b22] px-5 py-3'>
     {/* dark mode section */}
         <div className='flex items-end justify-end'>
            <div className='flex items-center gap-x-5'>
               <Link to={'/wishlist'} className='relative cursor-pointer'>
                 <span className='absolute -top-1 -right-1.5 bg-yellow-500 w-5 h-5 flex items-center justify-center rounded-[50%]'>{`${wishlistItem.length}`}</span>
                 <span className='text-[30px]'><CiHeart /></span>
               </Link>
               <span onClick={()=>setTheme(theme == "light" ? "dark" : "light")} className='text-[26px]'>{theme == "light" ? <IoMoonOutline /> : <IoSunnyOutline />}</span>
            </div>
         </div>
     {/* navbar responsive header */}
         <div className='flex items-center justify-between'>
            <div>
                <img src={logo} alt={logo} />
            </div>
            <span onClick={()=>setNavbarShow(false)} className='text-[20px] cursor-pointer'><GrClose /></span>
         </div>
       </div>
       <div>
            {/* navbar responsive title */}
            <div className='flex px-5  border-b-2 border-gray-300 items-center gap-x-8'>
                {tabs.map((tabs)=>(
                <button  onClick={()=>setShow(tabs)}  className={`text-[20px] font-Poppins text-[#777] cursor-pointer py-3 border-b-2 transition-all duration-300 ${Show == tabs ? "border-b-2 border-black text-black dark:text-white dark:border-gray-400" : "border-b-0 border-transparent"}`}>{tabs}</button>
                ))}
            </div>
            {Show == 'Menu' &&
             
                <div>
                    <ul className='p-5 flex flex-col gap-y-5 text-[16px] font-Poppins font-normal'>
                        <li className='cursor-pointer'><Link to={'/'}>Home</Link></li>
                        <li className='cursor-pointer'>Live Rate</li>
                        <li className='cursor-pointer'>About</li>
                        <li className='cursor-pointer'><Link to={'/contact'}>Contact</Link></li>
                        <li className='cursor-pointer'>Terms & Condition</li>
                    </ul>
                    <div className='p-5 flex items-center gap-x-5 text-[20px]'>
                       <span className='cursor-pointer'><FaFacebookF /></span>
                       <span className='cursor-pointer'><FaTiktok /></span>
                       <span className='cursor-pointer'><FaInstagram /></span>
                       <span className='cursor-pointer'><ImYoutube2 /></span>
                    </div>
                </div>
            }

             {Show == 'Categories' &&
                <div className='p-5 flex flex-col gap-y-5 text-[16px] font-Poppins font-normal'>
                    {category.map((item)=>(
                      <li key={item.id} className='cursor-pointer list-none'><Link to={`/product-category/${item.item}`}>{item.item}</Link></li>
                    ))}
                </div>
            }
            
       </div>
    </div>
  )
}

export default NavbarResponsive
