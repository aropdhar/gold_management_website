import React, { useRef, useState } from 'react'
import ProductHeading from '../../../component/productheading/ProductHeading'
import ProductCard from '../../../component/productcomponent/productcard/ProductCard'
import Slider from "react-slick";
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import product from '../../../component/productcomponent/productApi/ProductApi';

const BestseillingProduct = () => {
  
    const [ishovering , setIshovering] = useState(false)

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
    
  const handlePrev = () =>{
    sliderref.current.slickPrev()
  }

   const handleNext = () =>{
    sliderref.current.slickNext()
  }

  return (
    <div className='mb-20' onMouseEnter={()=>setIshovering(true)} onMouseLeave={()=>setIshovering(false)}>
      <div className='container'>
          <div className='relative'>
            <ProductHeading title={'Fresh Collection'} subtitle={'Discover pieces you’ll love — just in'}/>
             <div className='mt-3'>
                <div className="slider-container">
                  <Slider ref={sliderref} {...settings}>
                      {product.map((item , index)=>(
                        <ProductCard key={index} itemData={item}/>
                      ))}
                  </Slider>
                </div>
             </div>
             <div className={`text-[32px]  text-[#7777] cursor-pointer transition-all duration-300 ${ishovering ? "block" : "hidden"}`}>
                <div className='absolute -left-13 bottom-68' onClick={handlePrev}>
                  <span><SlArrowLeft /></span>
                </div>
                <div className='absolute -right-12 bottom-68' onClick={handleNext}>
                  <span><SlArrowRight /></span>
                </div>
             </div>
          </div>
      </div>
      

    </div>
  )
}

export default BestseillingProduct
