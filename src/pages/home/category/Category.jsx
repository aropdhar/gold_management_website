import React, { useRef, useState } from 'react'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import Slider from "react-slick";
import { Link } from 'react-router-dom'
import category from '../../../component/productcomponent/categoryApi/CategoryApi'

const Category = () => {

    const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
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
            },
        },
      ],
    };


    const slideref = useRef(null)
    
    const handleprev = () =>{
        slideref.current.slickPrev()
    }
    const handlenext = () =>{
        slideref.current.slickNext()
    }

    
    
    
  return (
    <div className='my-20 group'>
      <div className='custom-container mx-auto'>
             <h1 className='text-center my-10 font-Poppins text-[25px] md:text-[35px]'>Popular Categories</h1>
             <div className='relative'>
                <Slider ref={slideref} {...settings}>
                    {category.map((item , index)=>(
                        <div key={index}>
                            <Link  to={`/product-category/${item.item}`}>
                                <div className='flex flex-col cursor-pointer items-center gap-y-2.5' >
                                    <div className='w-[168px] h-[168px] overflow-hidden md:imgdesign'>
                                        <img className='w-full h-full object-cover rounded-[50%] ' src={item.image} alt={item.image} />
                                    </div>
                                    <div>
                                        <h1 className='md:textdesign font-Poppins font-medium cursor-pointer text-[18px]'>{item.item}</h1>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </Slider>
                <div className='block md:hidden md:group-hover:block transition-all duration-800'>
                  <div className='absolute md:-left-10 top-19 cursor-pointer' onClick={handleprev}>
                      <span className='text-[30px] text-gray-400 inline-block'><SlArrowLeft /></span>
                  </div>
                  <div className='absolute right-0 md:-right-10 top-19 cursor-pointer' onClick={handlenext}>
                      <span className='text-[30px] text-gray-400 inline-block'><SlArrowRight /></span>
                  </div>
                </div>
             </div>
      </div>
    </div>
  )
}

export default Category