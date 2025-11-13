import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import product from '../productApi/ProductApi';
import image1 from '../../../assets/Bangles_card.png'
import { CiHeart } from 'react-icons/ci';
import { LuAlarmClock } from 'react-icons/lu';
import { FaFacebookF, FaLinkedinIn, FaPinterestP, FaRegWindowMinimize, FaTelegram } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { HiOutlinePlus } from 'react-icons/hi';
import { IoCheckmarkOutline } from 'react-icons/io5';
import InnerImageZoom from 'react-inner-image-zoom';
import ProductCard from '../productcard/ProductCard';
import Slider from "react-slick";
import { SlArrowLeft, SlArrowRight, SlArrowUp } from 'react-icons/sl';

const ProductDetails = () => {
    const [count , setCount] = useState(1);
    const [wishlist , setwishlist] = useState(false);
    const [show , setShow] = useState(false);
    const [scrollbar , setScrollbar] = useState(false);
    const {id} = useParams();
    const products = product.find((item) => item.id === parseInt(id));
    const relatedProducts = product.filter((item) => item.id === parseInt(id));
    
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false
    };

    const handleincrease = () =>{
      setCount(count + 1);
    }
    
    const handledecrease = () =>{
      if(count > 1){
        setCount(count - 1);
      }
    }
    
    
   const sliderref = useRef(null)
   
   const handleprev = () =>{
     sliderref.current.slickPrev()
   }

    const handlenext = () =>{
     sliderref.current.slickNext()
   }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { // কতটুকু স্ক্রল করলে দেখাবে সেটা adjust করতে পারো
        setScrollbar(true);
      } else {
        setScrollbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* product details section */}
      <div className='pt-30'>
        <div className='container'>
            <div className='flex items-center gap-x-10'>
              <div className='w-[698px] h-[684px] overflow-hidden'>
                <InnerImageZoom className='w-full h-full object-cover' src={products?.image || image1} zoomSrc={products?.image || image1}  zoomType="hover" zoomPreload={true}/>
              </div>
              <div className='flex flex-col gap-y-4'>
                  <h1 className='text-[22px] font-Poppins font-medium'>{products?.title}</h1>
                  <div className='flex items-center gap-x-8'>
                    <span className='text-[20px] font-Poppins font-normal'>{products?.price} Vori</span>
                    <span className='w-[3px] h-6.5 bg-black'></span>
                    <p className='text-[18px] text-red-500'>In Stock</p>
                  </div>
                  <div className='border-b-2 border-gray-400'>
                    <p className='w-[500px] text-[18px] leading-8 pb-3 text-justify'>Elegant gold bangles that add a touch of tradition and sparkle to every outfit. Perfect for celebrations, weddings, and daily wear.</p>
                  </div>
                  <div className='flex items-center mt-5 gap-x-4'>
                    <div className='flex items-center gap-x-6 border-2 border-gray-400 py-0.5 px-4 rounded'>
                      <button className='text-[20px] mb-2 cursor-pointer' onClick={handledecrease} ><FaRegWindowMinimize /></button>
                      <span className='text-[25px] w-7 flex items-center justify-center'>{count}</span>
                      <button className='text-[20px] cursor-pointer mt-1' onClick={handleincrease}><HiOutlinePlus /></button>
                    </div>
                    <div className='bg-black text-[18px] cursor-pointer rounded-lg text-white px-15 py-2'>
                      <button className='cursor-pointer'>Add To Cart</button>
                    </div>
                  </div>
                  <button className='bg-[#edd2d2] cursor-pointer py-3 text-[18px] font-Poppins font-medium mt-4 hover:bg-black hover:text-white transition-all duration-300 dark:text-black rounded'>BUY IT NOW</button>
                  <div className='flex items-center gap-x-0.5 cursor-pointer' onClick={()=>setwishlist(!wishlist)}>
                    {wishlist ? 
                        
                    <span className='inline-block text-[25px]'><IoCheckmarkOutline /></span>

                    :

                    <span className='inline-block text-[25px]'><CiHeart /></span>
                    }
                    <span className='text-[18px]'>Browse Wishlist</span>
                  </div>
                  <div className='flex items-center gap-x-2 text-[18px]'>
                    <span><LuAlarmClock /></span>
                    <span>Estimate Delivery:- <span className='text-gray-400'>07 November - 10 November</span></span>
                  </div>
                  <p className='text-[18px]'>Category: {products?.title}</p>
                  <p className='text-[18px]'>Tag: {products?.title}</p>
                  <div className='flex items-center gap-x-4'>
                    <p className='text-[22px]'>Share:</p>
                    <div className='flex items-center text-[18px] gap-x-5'>
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


      {/* productdetails related product section */}
      <div className='mt-30' onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
        <div className='container'>
          <div className='relative'>
            <div className='flex items-center justify-center gap-x-4'>
              <span className='border w-40 border-gray-200'></span>
              <h1 className='text-[30px] font-Poppins font-normal'>Related Products</h1>
              <span className='border w-40 border-gray-200'></span>
            </div>

            <div className='mt-4'>
              <Slider ref={sliderref} {...settings}>
                {product.map((item)=>(
                  <ProductCard itemData={item}/>
                ))}
              </Slider>
              <div className={`transition-all duration-300 ${show ? "block" : "hidden" }`}>
                  <div className='absolute -left-14 top-72 cursor-pointer' >
                      <span onClick={handleprev} className='text-[30px] text-gray-400 inline-block'><SlArrowLeft /></span>
                  </div>
                  <div className='absolute -right-12 top-72 cursor-pointer'>
                      <span onClick={handlenext} className='text-[30px] text-gray-400 inline-block'><SlArrowRight /></span>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* productdetails scroll section  */}
      <div className={`bg-white dark:bg-black dark:text-white z-1000 shadow-lg py-2 w-full text-black fixed left-0 transition-all duration-500 ease-in-out
       ${scrollbar ? "bottom-0 opacity-100" : "-bottom-40 opacity-0"}`}>
         <div className='container'>
             <div className='flex items-center justify-between'>
                <div className='flex items-center gap-x-5'>
                    <div className='w-[180px] h-[180px] overflow-hidden'>
                      <img className='w-full h-full object-contain rounded-2xl dark:shadow-2xl' src={products?.image || image1} alt={products?.image || image1} />
                    </div>
                    <div className='flex flex-col gap-y-3'>
                      <h1 className='text-xl font-Poppins font-medium'>{products?.title}</h1>
                      <p className='text-[18px] font-Poppins font-normal '>{products?.price}</p>
                      <span className='text-[18px] text-red-500'>In Stock</span>
                      <button className='bg-black dark:bg-white dark:text-black dark:hover:bg-black transition-all duration-300 dark:hover:text-white py-1.5 px-5 text-white rounded cursor-pointer'>Add To Cart</button>
                    </div>
                </div>
                <div onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className='bg-black dark:bg-white dark:text-black dark:hover:bg-sky-300 transition-all duration-300 dark:hover:text-white text-white py-3.5 px-3.5 rounded cursor-pointer text-[22px]'>
                  <SlArrowUp />
                </div>
             </div>
         </div>
      </div>
      
    </>
  )
}

export default ProductDetails
