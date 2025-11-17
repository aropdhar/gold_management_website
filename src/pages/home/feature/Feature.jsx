import React, { useRef, useState } from 'react'
import ProductHeading from '../../../component/productheading/ProductHeading'
import product from '../../../component/productcomponent/productApi/ProductApi'
import ProductCard from '../../../component/productcomponent/productcard/ProductCard'
import Slider from "react-slick";
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';


const Feature = () => {
    
    const [isActive , setIsActive] = useState("New Arrival")
    const [ishovering , setIshovering] = useState(false);
    const tabs = ['New Arrival' , 'Feature' , 'Best Seller']
    
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false
    };

    const sliderref = useRef(null);

    const handleprev = () =>{
      sliderref.current.slickPrev();
    }

    const handlenext = () =>{
      sliderref.current.slickNext();
    }
    

  return (
    <div className='mb-20' onMouseEnter={()=>setIshovering(true)} onMouseLeave={()=>setIshovering(false)}>
      <div className='container'>
         <ProductHeading title={'Feature Product'}/>
         <div className='mt-2 flex items-center gap-x-3 text-[20px]  text-[#777] justify-center'>
            {tabs.map((tab)=>(
               <button key={tab} onClick={()=>setIsActive(tab)} className={`cursor-pointer border-b-2  transition-all duration-500 ${isActive == tab ? "text-black dark:text-[#777] border-b-2 text-[20px] border-black dark:border-white" : "text-[#777] border-0 border-transparent"}`}>{tab}</button>
            ))}
         </div>
         {isActive == "New Arrival" &&
           <div className='relative'>
               <Slider ref={sliderref} {...settings}>
                  {product.map((item)=>(
                     <ProductCard itemData={item}/>
                  ))}
               </Slider>

               <div className={`cursor-pointer text-[#777777b8] transition-all duration-300 ${isActive == "New Arrival" && ishovering ? "block" : "hidden"}`}>
                  <div className='absolute -left-15 top-45' onClick={handleprev}>
                    <span className='inline-block text-[30px]'><SlArrowLeft /></span>
                  </div>
                  <div className='absolute -right-15 top-45' onClick={handlenext}>
                    <span className='inline-block text-[30px]'><SlArrowRight /></span>
                  </div>
               </div>
           </div>
         }

         {isActive == "Feature" &&
           <div className='relative'>
                <Slider ref={sliderref} {...settings}>
                    {product.map((item)=>(
                      <ProductCard itemData={item}/>
                    ))}
                </Slider>

                <div className={`cursor-pointer text-[#777777b8] transition-all duration-300 ${isActive == "Feature" && ishovering ? "block" : "hidden"}`}>
                      <div className='absolute -left-15 top-45' onClick={handleprev}>
                        <span className='inline-block text-[30px]'><SlArrowLeft /></span>
                      </div>
                      <div className='absolute -right-15 top-45' onClick={handlenext}>
                        <span className='inline-block text-[30px]'><SlArrowRight /></span>
                      </div>
                </div>
           </div>
         }

         {isActive == "Best Seller" &&
          <div className='relative'>
            <Slider ref={sliderref} {...settings}>
                {product.map((item)=>(
                  <ProductCard itemData={item}/>
                ))}
            </Slider>
            <div className={`cursor-pointer text-[#777777b8] transition-all duration-300 ${isActive == "Best Seller" && ishovering ? "block" : "hidden"}`}>
                  <div className='absolute -left-15 top-45' onClick={handleprev}>
                    <span className='inline-block text-[30px]'><SlArrowLeft /></span>
                  </div>
                  <div className='absolute -right-15 top-45' onClick={handlenext}>
                    <span className='inline-block text-[30px]'><SlArrowRight /></span>
                  </div>
               </div>
          </div>
         }
      </div>
    </div>
  )
}

export default Feature