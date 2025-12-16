import React from 'react'

const ProductHeading = ({title , subtitle}) => {
  return (
    <div className='flex items-center justify-center'>
      <div className='flex items-center flex-col gap-y-2'>
        <h1 className='text-[25px] md:text-[40px] font-Poppins font-medium'>{title}</h1>
        <p className='text-[14px] px-4 lg:px-0 text-center md:text-[18px] font-Poppins text-[#7777]'>{subtitle}</p>
      </div>
    </div>
  )
}

export default ProductHeading
