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


    const sliderref = useRef(null);
      
    const handlePrev = () =>{
      sliderref.current.slickPrev()
    }

    const handleNext = () =>{
      sliderref.current.slickNext()
    }

  return (
    <div className='mb-20' onMouseEnter={()=>setIshovering(true)} onMouseLeave={()=>setIshovering(false)}>
      <div className='custom-container mx-auto'>
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
             <div className={`text-[32px] w-full flex justify-between text-[#b0a0a077] lg:text-[#7777] cursor-pointer absolute top-[50%] -translate-y-[50%] transition-all duration-300 ${ishovering ? "opacity-100" : "opacity-0"} opacity-100`}>
                <div onClick={handlePrev}>
                  <span className=''><SlArrowLeft /></span>
                </div>
                <div onClick={handleNext}>
                  <span><SlArrowRight /></span>
                </div>
             </div>
          </div>
      </div>
      

    </div>
  )
}

export default BestseillingProduct
