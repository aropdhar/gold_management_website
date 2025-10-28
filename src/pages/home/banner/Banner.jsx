import React from 'react'
import banner1 from '../../../assets/banner_1.png'
import banner2 from '../../../assets/banner_2.png'
import banner3 from '../../../assets/banner_3.png'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

const Banner = () => {
 
 const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true
  };

  const banner = [
    {
      id:1,
      image: banner1,
    },
    {
      id:2,
      image: banner2,
    },
    {
      id:3,
      image: banner3,
    },

  ]


  return (
    <div className="w-full mx-auto">
      <Slider {...settings}>
        {banner.map((item , index) => (
          <div key={item.id} className="w-full h-[600px] md:h-[500px] sm:h-[300px] overflow-hidden">
            <img 
              className="w-full h-full object-cover" 
              src={item.image} 
              alt={`banner-${item.id}`} 
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Banner
