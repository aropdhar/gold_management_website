import React from 'react'

const NewSletter = () => {
  return (
    <div className='bg-[#f5f5f5] dark:bg-[#1c1b22]  py-[72px]'>
      <div className='flex flex-col items-center gap-y-4 justify-center'>
         <h1 className='text-[35px] font-Poppins font-medium'>Subscribe Newsletter</h1>
         <p className='text-[18px] text-[#777]'>Subscribe to our newsletter and get an instant discount code.</p>
         <div className='border-2 border-black dark:border-white relative w-[510px]'>
            <input className='w-full pl-3.5 pr-28 py-2.5 outline-none' type="email" placeholder='Enter Your Email' />
            <button className='absolute right-1 top-1 bg-black  px-5 py-1.5 rounded text-white text-[16px] cursor-pointer dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white  transition-all duration-300'>SIGN UP</button>
         </div>
      </div>
    </div>
  )
}

export default NewSletter
