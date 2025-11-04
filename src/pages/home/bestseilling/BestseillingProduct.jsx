import React, { useRef, useState } from 'react'
import ProductHeading from '../../../component/productheading/ProductHeading'
import ProductCard from '../../../component/productcomponent/ProductCard'
import nacklace from '../../../assets/Necklace_card.png'
import chain from '../../../assets/chain_card.png'
import churi from '../../../assets/churi_card.png'
import chur from '../../../assets/Chur_card.png'
import bangles from '../../../assets/Bangles_card.png'
import shitahar from '../../../assets/shitahar_card.png'
import Slider from "react-slick";
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'

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

  const product = [
    {
      id:1,
      title: "nacklace",
      subtitle: "nacklace",
      price: 320000,
      image: nacklace
    },
    {
      id:2,
      title: "chain",
      subtitle: "chain",
      price: 320000,
      image: chain
    },
    {
      id:3,
      title: "churi",
      subtitle: "churi",
      price: 320000,
      image: churi
    },
    {
      id:4,
      title: "chur",
      subtitle: "chur",
      price: 320000,
      image: chur
    },
    {
      id:5,
      title: "bangles",
      subtitle: "bangles",
      price: 320000,
      image: bangles
    },
    {
      id:6,
      title: "shitahar",
      subtitle: "shitahar",
      price: 320000,
      image: shitahar
    },
  ]

  const sliderref = useRef(null);
    
  const handlePrev = () =>{
    sliderref.current.slickPrev()
  }

   const handleNext = () =>{
    sliderref.current.slickNext()
  }

  return (
    <div className='mb-20'  onMouseEnter={() => setIshovering(true)}
      onMouseLeave={() => setIshovering(false)}>
      <div className='container'>
          <div className='relative' >
            <ProductHeading title={'Fresh Collection'} subtitle={'Discover pieces you’ll love — just in'}/>
             <div className='mt-5'>
                <div className="slider-container">
                  <Slider ref={sliderref} {...settings}>
                      {product.map((item , index)=>(
                        <ProductCard key={index} itemData={item}/>
                      ))}
                  </Slider>
                </div>
             </div>
             <div className={`text-[32px] text-[#7777] cursor-pointer transition-all duration-300 ${ishovering ? 'opacity-100' : 'opacity-0'}`}>
                <div className='absolute -left-13 bottom-85' onClick={handlePrev}>
                  <span><SlArrowLeft /></span>
                </div>
                <div className='absolute -right-12 bottom-85' onClick={handleNext}>
                  <span><SlArrowRight /></span>
                </div>
             </div>
          </div>
      </div>
      

    </div>
  )
}

export default BestseillingProduct
