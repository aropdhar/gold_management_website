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
    arrows: false,
    responsive: [
    {
      breakpoint: 1024, // Tablet & small laptop
      settings: {
        slidesToShow: 1,
        arrows: false
      }
    },
    {
      breakpoint: 768, // Mobile landscape
      settings: {
        slidesToShow: 1,
        arrows: false
      }
    },
    {
      breakpoint: 480, // Mobile portrait
      settings: {
        slidesToShow: 1,
        arrows: false
      }
    }
  ]
  };

  const banner = [
    {
      id:1,
      title: "Timeless Gold, Crafted with Elegance.",
      subtitle: "Handcrafted jewellery that defines grace and sophistication.",
      image: banner1,
    },
    {
      id:2,
      title: "Royal Touch for Every Celebration.",
      subtitle: "Shine with the purity and elegance of authentic gold craftsmanship.",
      image: banner2,
    },
    {
      id:3,
      title: "Golden Bride, Where Dreams Unite.",
      subtitle: "Adorn yourself with the splendour of heritage jewellery.",
      image: banner3,
    },

  ]


  return (
    <div className='pt-24 pb-5 md:pt-24 md:pb-24 dark:from-gray-800 dark:to-gray-800 bg-linear-to-r from-yellow-50 to-blue-200'>
      <div className='custom-container mx-auto'>
            <Slider {...settings}>
              {banner.map((item) => (
                <div key={item.id}>
                  <div className='flex items-center px-5 justify-between'>
                      <div className='flex flex-col'>
                        <h1 className="text-[12px] md:text-[18px] font-bold bg-linear-to-r from-yellow-500 to-amber-700 bg-clip-text text-transparent">{item.title}</h1>
                        <p className='text-gray-600 dark:text-gray-300 text-[12px] md:text-[35px] font-light  mt-4 w-auto  md:w-[460px] md:leading-10'>{item.subtitle}</p>
                        <div>
                            <button className='mt-6 cursor-pointer bg-yellow-500 hover:bg-yellow-600 transition-all duration-300 text-white font-medium px-3 py-1.5 md:px-6 md:py-3 rounded-full text-[12px] shadow-md hover:shadow-lg'>Shop Now</button>
                        </div>
                      </div>
                      <div key={item.id} className='w-[250px] h-[250px] md:w-[500px] md:h-[500px] overflow-hidden'>
                        <img className='w-full h-full object-contain' src={item.image}  alt={`banner-${item.id}`} />
                      </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
    </div>
  )
}

export default Banner
