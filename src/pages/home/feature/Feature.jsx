import React, { useState } from 'react'
import ProductHeading from '../../../component/productheading/ProductHeading'

const Feature = () => {
    
    const [isActive , setIsActive] = useState("New Arrival")

    const tabs = ['New Arrival' , 'Feature' , 'Best Seller']

  return (
    <div className='mb-20'>
      <div className='container'>
         <ProductHeading title={'Feature Product'}/>
         <div className='mt-2 flex items-center gap-x-3 text-[20px]  text-[#777] justify-center'>
            {tabs.map((tab)=>(
               <button key={tab} onClick={()=>setIsActive(tab)} className={`cursor-pointer border-b-2  transition-all duration-300 ${isActive == tab ? "text-black border-b-2 text-[20px] border-black" : "text-[#777] border-0 border-transparent"}`}>{tab}</button>
            ))}
         </div>
         {isActive == "New Arrival" &&

            "New Arrival"

         }

         {isActive == "Feature" &&

          "Feature"

         }

         {isActive == "Best Seller" &&

          "Best Seller"

         }
      </div>
    </div>
  )
}

export default Feature
