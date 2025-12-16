import React from 'react'
import ProductHeading from '../../../component/productheading/ProductHeading'
import NewSletter from '../newsletter/NewSletter'

const Location = () => {
  return (
    <div className='pt-20'>
       {/* contact heading section */}

         <div className='py-10 bg-[#F5F5F5] dark:bg-[#1c1b22] flex flex-col gap-y-2 items-center justify-center'>    
           <ProductHeading title={'Our Store Locations'} subtitle={'Find your nearest store and get instant directions via Google Maps.'}/>
         </div>
         
       {/* contact and map section */}

         <div className='custom-container mx-auto'>
          <div>
                  <div className="w-full h-[400px]">
                          <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.3980582674834!2d90.41720767433734!3d23.92465498450702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37541b9e2e21b1d7%3A0xf64a50575e5b43a7!2sPatil%20Bari%20Rd%2C%20Narsingdi!5e0!3m2!1sen!2sbd!4v1730718320000!5m2!1sen!2sbd"
                              width="100%"
                              height="100%"
                              style={{ border: 0 }}
                              allowFullScreen=""
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                          ></iframe>
                  </div>
          </div>
          <div className='mt-20 border-t-2 py-10 border-gray-200'>
              <div className='flex flex-col items-center gap-y-4 justify-center'>
                  <h1 className='text-[16px] lg:text-[30px] font-Poppins font-medium'>Need help? Get in touch with us</h1>
                  <div className='flex flex-col gap-y-3 lg:flex-row items-center lg:gap-x-3 mt-5'>
                    <input className='w-[350px] lg:w-[370px] border-2 border-gray-300 py-2 px-2 rounded' type="text" placeholder='Enter Your Name'/>
                    <input className='w-[350px] lg:w-[370px] border-2 border-gray-300 py-2 px-2 rounded' type="email" placeholder='Enter Your Email'/>
                  </div>
                  <input className='w-[350px] lg:w-[752px] border-2 border-gray-300 py-2 px-2 rounded' type="text" placeholder='Enter Your Subject'/>
                  <div>
                    <textarea className='w-[350px] lg:w-[752px] h-48 border-2 border-gray-300 py-2 px-2 rounded' name="" id="" placeholder='Enter Your Message'></textarea>
                  </div>
                  <button className='bg-black text-white text-[16px] rounded w-[320px] lg:w-[752px] py-2 cursor-pointer'>Send Message</button>
              </div>
          </div>
         </div>
       
       {/* newsletter promo code section */}

         <NewSletter/>
        
    </div>
  )
}

export default Location
