import React from 'react'
import { LuSendHorizontal } from 'react-icons/lu'
import qrfooter from '../../../assets/footer_1.png'
import playstore from '../../../assets/footer_2.png'
import appstore from '../../../assets/footer_3.png'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaRegCopyright } from 'react-icons/fa6';
import { CiTwitter } from 'react-icons/ci';

const Footer = () => {
  return (
    <div className='bg-black text-white pt-20'>
      <div className='custom-container mx-auto'>
          <div className='flex flex-col gap-y-10 md:flex-row md:flex-wrap md:items-center pb-15 md:justify-between'>

             <div className='flex flex-col gap-y-6 '>
                <h1 className='text-[24px] font-Poppins font-bold leading-6'>Exclusive</h1>
                <div className='flex flex-col gap-y-6'>
                  <p className='font-Poppins font-medium text-5 leading-7'>Subscribe</p>
                  <div className='flex flex-col gap-y-4 '>
                    <p className='font-Poppins font-normal text-[16px] leading-6'>Get 10% off your first order</p>
                    <div className='relative'>
                      <input className='py-3 pl-2.5 pr-11 border-2 border-white' type="text" placeholder='Enter Your Email'/>
                      <span className='inline-block absolute left-50 top-3 md:right-2 text-[24px] cursor-pointer z-600'><LuSendHorizontal /></span>
                    </div>
                  </div>
                </div>
             </div>

             <div className='flex  flex-col gap-y-6'>
                <h1 className='text-[20px] font-Poppins font-medium leading-7'>Support</h1>
                <div className='flex cursor-pointer flex-col gap-y-4'>
                  <p className='font-normal w-[175px] font-Poppins text-[16px] leading-6'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                  <p className='font-normal font-Poppins text-[16px] leading-6'>exclusive@gmail.com</p>
                  <p className='font-normal font-Poppins text-[16px] leading-6'>+88015-88888-9999</p>
                </div>
             </div>

             <div className='flex md:hidden lg:block cursor-pointer flex-col gap-y-6 '>
               <h1 className='text-[20px] font-Poppins font-medium leading-7'>Quick Link</h1>
               <div className='flex flex-col gap-y-4'>
                 <p className='font-normal font-Poppins text-[16px] leading-6'>Privacy Policy</p>
                  <p className='font-normal font-Poppins text-[16px] leading-6'>Terms Of Use</p>
                  <p className='font-normal font-Poppins text-[16px] leading-6'>FAQ</p>
                  <p className='font-normal font-Poppins text-[16px] leading-6'>Contact</p>
               </div>
             </div>

             <div className='flex flex-col gap-y-6 '>
               <h1 className='text-[20px] font-Poppins font-medium leading-7'>Download App</h1>
               <div className='flex flex-col '>
                 <p className='font-Poppins font-medium text-[12px] leading-[18px]'>Save $3 with App New User Only</p>
                 <div className='flex mt-2.5 cursor-pointer items-start gap-x-2'>
                    <img src={qrfooter} alt="qrfooter" />
                    <div className='flex flex-col gap-y-3'>
                      <img src={playstore} alt="playstore" />
                      <img src={appstore} alt="appstore" />
                    </div>
                 </div>
                 <div className='flex mt-5 text-[24px] cursor-pointer  items-center gap-x-6'>
                  <a href="http://" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                   <a href="http://" target="_blank" rel="noopener noreferrer"><CiTwitter /></a>
                   <a href="http://" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                   <a href="http://" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                 </div>
               </div>
             </div>
          </div>
          <div className='flex items-center justify-center'>
            <h1 className='flex items-center gap-x-1 lg:gap-x-2 font-Poppins text-[12px] md:text-[16px] leading-6 mb-6 text-[#FFFFFF]'><FaRegCopyright />Developer By Arop Dhar 2025. All right reserved</h1>
          </div>
      </div>
    </div>
  )
}

export default Footer
