import React, { useState } from 'react'
import nacklace from '../../../assets/Necklace_card.png'
import { CiHeart } from 'react-icons/ci'
import { TbCurrencyTaka } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { IoCheckmark } from 'react-icons/io5'
import { useSelector, useDispatch } from 'react-redux'
import { addtowishlist } from '../../reduxSlice/wishlistSlice/wishlistSlice'
import { addtocart } from '../../reduxSlice/addtocartSlice/addtocartSlice'

const ProductCard = ({itemData}) => {
  
  const wishlistItem = useSelector((state) => state.wishList.value);
  const isAdded = Array.isArray(wishlistItem)
  ? wishlistItem.some(item => item.id === itemData.id)
  : false;
  const dispatch = useDispatch()
  
  
  const handlewishlist = (itemData) =>{
    dispatch(addtowishlist(itemData));
  }
  
   const handlecart = (cartitem) =>{
    dispatch(addtocart(cartitem))
  }

  return (
    <div className='mb-3 mt-10 bg-white dark:bg-[#1c1b22] dark:text-white'>
      <div className='custom-container mx-auto'>
        <div className='w-[230px]  xl:w-[300px] relative group'>
            <div className='relative'>
                <div className='w-[230px] h-[220px] xl:w-[300px] xl:h-[300px] overflow-hidden'>
                    <img className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105' src={itemData.image} alt={"nacklace"} />
                </div>
                <div className="absolute opacity:100 xl:opacity-0 bottom-6 left-13  xl:left-1/2 xl:-translate-x-1/2 transition-all duration-500 xl:group-hover:bottom-8 xl:group-hover:opacity-100">
                    <Link to={`/productDetails/${itemData.id}`} className="bg-white shadow-lg px-5 py-2 font-Poppins font-normal rounded-[10px] dark:text-black cursor-pointer" >Quick View</Link>
                </div>
            </div>
            <div className='mt-4'>
                <span className='text-[16px] font-Poppins font-normal text-[#777777]'>{itemData.title}</span>
                <div className='mt-1.5 flex items-center justify-between'>
                   <h1 className='text-[18px] font-Poppins font-normal'>{itemData.subtitle}</h1>
                     
                   <span className='text-[25px] cursor-pointer z-1200' onClick={()=>handlewishlist(itemData)}>{isAdded ? <IoCheckmark /> : <CiHeart />}</span>

                </div>
                <span className='flex items-center text-[18px] mt-2 transition-all duration-500 group-hover:-translate-y-10 group-hover:opacity-0'>{itemData.price} <TbCurrencyTaka /></span>
                <button onClick={()=>handlecart(itemData)}  className="absolute left-0 -bottom-10  font-Poppins font-medium opacity-0 transition-all duration-500 group-hover:bottom-0 cursor-pointer group-hover:opacity-100 border-b border-gray-400">Add To Cart</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
