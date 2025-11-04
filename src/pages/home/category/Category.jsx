import React, { useRef } from 'react'
import chain from '../../../assets/chain.jpg'
import chur from '../../../assets/chur.jpg'
import churi from '../../../assets/churi.jpg'
import earrings from '../../../assets/earrings.jpg'
import locket from '../../../assets/locket.jpg'
import Neclace from '../../../assets/NECKLACE.jpg'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import Slider from "react-slick";

const Category = () => {

    const category = [
        {
            id:1,
            item: "Chain",
            image: chain
        },
          {
            id:2,
            item: "Chur",
            image: chur
        },
          {
            id:3,
            item: "Churi",
            image: churi
        },
          {
            id:4,
            item: "Earrings",
            image: earrings
        },
          {
            id:5,
            item: "Locket",
            image: locket
        },
          {
            id:6,
            item: "Neclace",
            image: Neclace
        },
    ]
    
      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false
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
      <div className='container'>
             <h1 className='text-center my-10 font-Poppins text-[35px]'>Popular Categories</h1>
             <div className='relative'>
                <Slider ref={slideref} {...settings}>
                    {category.map((item , index)=>(
                        <div key={index}>
                            <div>
                                <div className='flex flex-col items-center gap-y-2.5'>
                                    <div className='w-[168px] h-[168px] overflow-hidden imgdesign'>
                                        <img className='w-full h-full object-cover rounded-[50%] ' src={item.image} alt={item.image} />
                                    </div>
                                    <div>
                                        <h1 className='textdesign font-Poppins font-medium cursor-pointer text-[18px]'>{item.item}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
                <div className='hidden group-hover:block transition-all duration-800'>
                  <div className='absolute -left-10 top-19 cursor-pointer' onClick={handleprev}>
                      <span className='text-[30px] text-gray-400 inline-block'><SlArrowLeft /></span>
                  </div>
                  <div className='absolute -right-10 top-19 cursor-pointer' onClick={handlenext}>
                      <span className='text-[30px] text-gray-400 inline-block'><SlArrowRight /></span>
                  </div>
                </div>
             </div>
      </div>
    </div>
  )
}

export default Category