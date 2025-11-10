import React from 'react'

const Header = ({scrolled}) => {
  return (
    <div className={`bg-sky-400 dark:bg-black  flex justify-center items-center py-[15px] transition-all duration-700 ease-in-out
      ${scrolled ? "hidden " : "block"}`}>
      <h1 className='font-Poppins font-normal text-[14px] leading-[21px]'>Summer Sale For Largest <span>Gold Jewellery</span> Shop Online & Brand in Bangladesh</h1>
    </div>
  )
}

export default Header
