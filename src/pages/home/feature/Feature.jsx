import React, { useState } from 'react'
import ProductHeading from '../../../component/productheading/ProductHeading'
import product from '../../../component/productcomponent/productApi/ProductApi'
import ProductCard from '../../../component/productcomponent/productcard/ProductCard'
import Slider from "react-slick";
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';


const Feature = () => {
    
    const [isActive , setIsActive] = useState("New Arrival")

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

  return (
    <div className='mb-20'>
      <div className='container'>
         <ProductHeading title={'Feature Product'}/>
         <div className='mt-2 flex items-center gap-x-3 text-[20px]  text-[#777] justify-center'>
            {tabs.map((tab)=>(
               <button key={tab} onClick={()=>setIsActive(tab)} className={`cursor-pointer border-b-2  transition-all duration-500 ${isActive == tab ? "text-black dark:text-[#777] border-b-2 text-[20px] border-black dark:border-white" : "text-[#777] border-0 border-transparent"}`}>{tab}</button>
            ))}
         </div>
         {isActive == "New Arrival" &&
           <div className='relative'>
               <Slider {...settings}>
                  {product.map((item)=>(
                     <ProductCard itemData={item}/>
                  ))}
               </Slider>

               <div className={`cursor-pointer text-[#777777b8] `}>
                  <div className='absolute -left-15 top-45'>
                    <span className='inline-block text-[30px]'><SlArrowLeft /></span>
                  </div>
                  <div className='absolute -right-15 top-45'>
                    <span className='inline-block text-[30px]'><SlArrowRight /></span>
                  </div>
               </div>
           </div>
         }

         {isActive == "Feature" &&
            <Slider {...settings}>
                {product.map((item)=>(
                  <ProductCard itemData={item}/>
                ))}
            </Slider>
         }

         {isActive == "Best Seller" &&
            <Slider {...settings}>
                {product.map((item)=>(
                  <ProductCard itemData={item}/>
                ))}
            </Slider>
         }
      </div>
    </div>
  )
}

export default Feature