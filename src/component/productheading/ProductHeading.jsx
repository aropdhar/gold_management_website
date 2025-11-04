import React from 'react'

const ProductHeading = ({title , subtitle}) => {
  return (
    <div className='flex items-center justify-center'>
      <div className='flex items-center flex-col gap-y-2'>
        <h1 className='text-[40px] font-Poppins font-medium'>{title}</h1>
        <p className='text-[18px] font-Poppins text-[#7777]'>{subtitle}</p>
      </div>
    </div>
  )
}

export default ProductHeading
