import React from 'react'
import nacklace from '../../../assets/Necklace_card.png'
import { CiHeart } from 'react-icons/ci'
import { TbCurrencyTaka } from 'react-icons/tb'
import { Link } from 'react-router-dom'

const ProductCard = ({itemData}) => {
  
  return (
    <div className='mb-3 mt-10'>
      <div className='container'>
        <div className='w-[300px] relative group'>
            <div className='relative'>
                <div className='w-[300px] h-[300px] overflow-hidden'>
                    <img className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105' src={itemData.image} alt={"nacklace"} />
                </div>
                <div className="absolute opacity-0 bottom-6 left-1/2 -translate-x-1/2 transition-all duration-500 group-hover:bottom-8 group-hover:opacity-100">
                    <Link to={`/productDetails/${itemData.id}`} className="bg-white shadow-lg px-5 py-2 font-Poppins font-normal rounded-[10px] dark:text-black cursor-pointer" >Quick View</Link>
                </div>
            </div>
            <div className='mt-4'>
                <span className='text-[16px] font-Poppins font-normal text-[#777777]'>{itemData.title}</span>
                <div className='mt-1.5 flex items-center justify-between'>
                   <h1 className='text-[18px] font-Poppins font-normal'>{itemData.subtitle}</h1>
                   <span className='text-[25px] cursor-pointer'><CiHeart /></span>
                </div>
                <span className='flex items-center text-[18px] mt-2 transition-all duration-500 group-hover:-translate-y-10 group-hover:opacity-0'>{itemData.price} <TbCurrencyTaka /></span>
                <button className="absolute left-0 -bottom-10  font-Poppins font-medium opacity-0 transition-all duration-500 group-hover:bottom-0 cursor-pointer group-hover:opacity-100 carddesign">Add To Cart</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
