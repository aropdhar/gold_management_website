import React from 'react'
import { IoHomeOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const Finding = () => {
  return (
    <div className='my-20'>
      <div className='custom-container mx-auto'>
         <div className='flex flex-col lg:flex-row gap-y-4 text-center items-center justify-center bg-[#121111ef] py-10 lg:gap-x-5 text-white rounded-[5px]'>
            <span className='inline-block text-[35px]'><IoHomeOutline /></span>
            <p className='text-[14px] lg:text-[22px] font-Poppins font-medium'>Find Beauty in Every Corner — Nearby Jewelry Stores</p>
            <Link to={'/find-location'} className='inline-block border-2 border-white py-1 px-6 text-[18px]'>Find Store</Link>
         </div>
      </div>
    </div>
  )
}

export default Finding
