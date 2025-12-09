import React from 'react'

const Header = ({scrolled}) => {
  return (
    <div className={`bg-sky-400 dark:bg-black px-5 md:px-0  flex justify-center items-center py-[15px] transition-all duration-700 ease-in-out w-full
      ${scrolled ? "hidden " : "block"}`}>
      <h1 className='font-Poppins font-normal truncate  text-[14px] leading-[21px]'>Summer Sale For Largest <span>Gold Jewellery</span> Shop Online & Brand in Bangladesh</h1>
    </div>
  )
}

export default Header
