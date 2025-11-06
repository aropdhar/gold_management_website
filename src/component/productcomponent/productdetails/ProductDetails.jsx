import React from 'react'
import { useParams } from 'react-router-dom'
import product from '../productApi/ProductApi';
import image1 from '../../../assets/Bangles_card.png'
import { CiHeart } from 'react-icons/ci';
import { LuAlarmClock } from 'react-icons/lu';
import { FaFacebookF, FaLinkedinIn, FaPinterestP, FaRegWindowMinimize, FaTelegram } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { HiOutlinePlus } from 'react-icons/hi';


const ProductDetails = () => {
    const {id} = useParams();
    const products = product.find((item) => item.id === parseInt(id));
    
    
    

  return (
    <div className='py-30'>
       <div className='container'>
          <div className='flex items-center gap-x-10'>
            <div className='w-[698px] h-[684px] overflow-hidden'>
               <img className='w-full h-full object-cover' src={image1} alt={image1} />
            </div>
            <div className='flex flex-col gap-y-4'>
                <h1 className='text-[22px] font-Poppins font-medium'>Bangles</h1>
                <div className='flex items-center gap-x-8'>
                  <span className='text-[20px] font-Poppins font-normal'>300000 Vori</span>
                  <span className='w-1 h-6.5 bg-black'></span>
                  <p className='text-[18px] text-red-500'>In Stock</p>
                </div>
                <div className='border-b-2 border-gray-400'>
                  <p className='w-[500px] text-[18px] leading-8 pb-3 text-justify'>Elegant gold bangles that add a touch of tradition and sparkle to every outfit. Perfect for celebrations, weddings, and daily wear.</p>
                </div>
                <div className='flex items-center mt-5 gap-x-4'>
                  <div className='flex items-center gap-x-6 border-2 border-gray-400 py-0.5 px-4 rounded'>
                    <button className='text-[20px] -mt-1.5 cursor-pointer'><FaRegWindowMinimize /></button>
                    <span className='text-[25px]'>0</span>
                    <button className='text-[20px] cursor-pointer mt-1'><HiOutlinePlus /></button>
                  </div>
                  <div className='bg-black text-[18px] text-white px-15 py-2'>
                    <button>Add To Cart</button>
                  </div>
                </div>
                <button className='bg-[#edd2d2] py-3 text-[18px] font-Poppins font-medium mt-4'>BUY IT NOW</button>
                <div className='flex items-center gap-x-3 cursor-pointer'>
                  <span className='inline-block text-[25px]'><CiHeart /></span>
                  <span className='text-[18px]'>Browse Wishlist</span>
                </div>
                <div className='flex items-center gap-x-2 text-[18px]'>
                  <span><LuAlarmClock /></span>
                  <span>Estimate Delivery:- <span className='text-gray-400'>07 November - 10 November</span></span>
                </div>
                <p className='text-[18px]'>Category: Ring</p>
                <p className='text-[18px]'>Tag: Ring</p>
                <div className='flex items-center gap-x-4'>
                  <p className='text-[22px]'>Share:</p>
                  <div className='flex items-center text-[18px] gap-x-3'>
                    <span className='cursor-pointer transition-all duration-300 hover:text-sky-300'><FaFacebookF /></span>
                    <span className='cursor-pointer transition-all duration-300 hover:text-sky-300'><BsTwitterX /></span>
                    <span className='cursor-pointer transition-all duration-300 hover:text-sky-300'><FaLinkedinIn /></span>
                    <span className='cursor-pointer transition-all duration-300 hover:text-sky-300'><FaTelegram /></span>
                    <span className='cursor-pointer transition-all duration-300 hover:text-sky-300'><FaPinterestP /></span>
                  </div>
                </div>
            </div>
          </div>
       </div>
    </div>
  )
}

export default ProductDetails
