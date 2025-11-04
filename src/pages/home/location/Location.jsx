import React from 'react'

const Location = () => {
  return (
    <div className='pt-20'>
         <div className='py-10 bg-[#F5F5F5] flex flex-col gap-y-2 items-center justify-center'>
                    <h1 className='text-[38px] font-Poppins font-medium'>Our Store Locations</h1>
                    <p className='text-[16px] font-medium text-[#777777]'>Find your nearest store and get instant directions via Google Maps.</p>
        </div>
        <div className='container'>
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
                gfgfgfg
            </div>
        </div>
    </div>
  )
}

export default Location
