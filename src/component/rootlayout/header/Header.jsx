import React from 'react'

const Header = ({scrolled}) => {
  return (
    <div className={`bg-sky-400 w-full dark:bg-black px-5 md:px-0  flex justify-center items-center py-[15px] transition-all duration-700 ease-in-out
      ${scrolled ? "-translate-y-full opacity-0 " : "translate-y-0 opacity-100"}`}>
      <h1 className='font-Poppins font-normal truncate  text-[14px] leading-[21px]'>Summer Sale For Largest <span>Gold Jewellery</span> Shop Online & Brand in Bangladesh</h1>
    </div>
  )
}

export default Header
