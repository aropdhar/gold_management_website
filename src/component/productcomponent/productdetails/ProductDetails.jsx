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
import { useSelector, useDispatch } from 'react-redux'
import { addtocart } from '../../reduxSlice/addtocartSlice/addtocartSlice';

const ProductDetails = () => {
    const dispatch = useDispatch()
    const [count , setCount] = useState(1);
    const [wishlist , setwishlist] = useState(false);
    const [show , setShow] = useState(false);
    const [scrollbar , setScrollbar] = useState(false);
    const {id} = useParams();
    const products = product.find((item) => item.id === parseInt(id));
    const relatedProducts = product.filter((item) => item.id === parseInt(id));

    // redux and localStorage data in wishlist

    const wishlistItem = useSelector((state) => state.wishList.value);
    const isAdded = Array.isArray(wishlistItem)
    ? wishlistItem.some(item => item.id === products.id)
    : false;

    //  slick slider section 

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      responsive: [
        {
            breakpoint: 1280, // large screen
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 1024, // laptop/tablet
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 768, // tablet
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 480, // mobile
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                centerMode: true,
            },
        },
      ],
    };
   
  // add to cart increment and decrement section

    const handleincrease = () =>{
      setCount(count + 1);
    }
    
    const handledecrease = () =>{
      if(count > 1){
        setCount(count - 1);
      }
    }
    
  //  slick slider section 
   const sliderref = useRef(null)
   
   const handleprev = () =>{
     sliderref.current.slickPrev()
   }

    const handlenext = () =>{
     sliderref.current.slickNext()
   }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrollbar(true);
      } else {
        setScrollbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // redux data pass in add to cart

   const handlecart = (cartitem) =>{
    dispatch(addtocart(cartitem))
  }

  return (
    <>
      {/* product details section */}
      <div className='pt-30 bg-white dark:bg-[#1c1b22] dark:text-white'>
        <div className='custom-container mx-auto'>
            <div className='flex flex-col gap-y-8 md:flex-row items-center px-4 md:px-0 md:gap-x-10'>

              <div className='w-[310px] h-[310px] md:px-0 md:w-[698px] md:h-[684px] overflow-hidden'>
                <InnerImageZoom className='w-full h-full object-cover' src={products?.image || image1} zoomSrc={products?.image || image1}  zoomType={window.innerWidth < 768 ? "click" : "hover"} zoomPreload={true}/>
              </div>
              <div className='flex flex-col gap-y-4'>
                  <h1 className='text-[22px] font-Poppins font-medium'>{products?.title}</h1>
                  <div className='flex items-center gap-x-8'>
                    <span className='text-[20px] font-Poppins font-normal'>{products?.price} Vori</span>
                    <span className='w-[3px] h-6.5 bg-black dark:bg-[#f5f5f5]'></span>
                    <p className='text-[18px] text-red-500'>In Stock</p>
                  </div>
                  <div className='border-b-2 border-gray-400'>
                    <p className='md:w-[500px] text-[18px] leading-8 pb-3 text-justify'>Elegant gold bangles that add a touch of tradition and sparkle to every outfit. Perfect for celebrations, weddings, and daily wear.</p>
                  </div>
                  <div className='flex items-center mt-5 gap-x-4'>
                    <div className='flex items-center gap-x-6 border-2 border-gray-400 py-0.5 px-4 rounded'>
                      <button className='text-[20px] mb-2 cursor-pointer' onClick={handledecrease} ><FaRegWindowMinimize /></button>
                      <span className='text-[25px] w-7 flex items-center justify-center'>{count}</span>
                      <button className='text-[20px] cursor-pointer mt-1' onClick={handleincrease}><HiOutlinePlus /></button>
                    </div>
                    <div className='bg-black text-[18px] cursor-pointer rounded-lg text-white px-6 md:px-15 py-2'>
                      <button onClick={()=>handlecart(products)} className='cursor-pointer'>Add To Cart</button>
                    </div>
                  </div>
                  <button className='bg-[#edd2d2] cursor-pointer py-3 text-[18px] font-Poppins font-medium mt-4 hover:bg-black hover:text-white transition-all duration-300 dark:text-black rounded'>BUY IT NOW</button>
                  <div className='flex items-center gap-x-0.5 cursor-pointer' onClick={()=>setwishlist(!wishlist)}>
                    {isAdded ? 
                        
                    <span className='inline-block text-[25px]'><IoCheckmarkOutline /></span>

                    :

                    <span className='inline-block text-[25px]'><CiHeart /></span>
                    }
                    <span className='text-[18px]'>Browse Wishlist</span>
                  </div>
                  <div className='flex items-center gap-x-2 text-[13px] md:text-[18px]'>
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
      <div className='my-30 bg-white dark:bg-[#1c1b22] dark:text-white' onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
        <div className='custom-container mx-auto'>
          <div className='relative'>
            <div className='flex items-center justify-center gap-x-4'>
              <span className='border w-20 md:w-40 border-gray-200'></span>
              <h1 className='md:text-[30px] font-Poppins font-normal'>Related Products</h1>
              <span className='border w-20 md:w-40 border-gray-200'></span>
            </div>

            <div className='mt-4'>
              <Slider ref={sliderref} {...settings}>
                {product.map((item)=>(
                  <ProductCard itemData={item}/>
                ))}
              </Slider>
              <div className={`transition-all duration-300 opacity-100 xl:${show ? "opacity-100" : "opacity-0" }`}>
                  <div className='absolute left-0 md:-left-14 top-45 md:top-60 cursor-pointer' >
                      <span onClick={handleprev} className='text-[30px] text-gray-400 inline-block'><SlArrowLeft /></span>
                  </div>
                  <div className='absolute right-0 top-45 md:-right-12 md:top-60 cursor-pointer'>
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
         <div className='custom-container mx-auto'>
             <div className='flex items-center justify-between'>
                <div className='flex items-center gap-x-5'>
                    <div className='w-[120px] h-[120px] md:w-[180px] md:h-[180px] overflow-hidden'>
                      <img className='w-full h-full object-contain rounded-2xl dark:shadow-2xl' src={products?.image || image1} alt={products?.image || image1} />
                    </div>
                    <div className='flex flex-col gap-y-3'>
                      <h1 className='text-xl font-Poppins font-medium'>{products?.title}</h1>
                      <p className='text-[18px] font-Poppins font-normal '>{products?.price}</p>
                      <span className='text-[18px] hidden md:block text-red-500'>In Stock</span>
                      <button onClick={()=>handlecart(products)} className='bg-black dark:bg-white dark:text-black dark:hover:bg-black transition-all duration-300 dark:hover:text-white py-1.5 px-5 text-white rounded cursor-pointer'>Add To Cart</button>
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
