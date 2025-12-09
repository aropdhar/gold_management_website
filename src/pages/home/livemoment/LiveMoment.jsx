import React from 'react'
import recover from '../../../assets/recover.png'
import recover2 from '../../../assets/recover2.png'

const LiveMoment = () => {
  return (
    <div className='my-20'>
      <div className='custom-container mx-auto'>
         <div className='flex items-center gap-x-4'>
            <div className='w-[668px] h-[403px] overflow-hidden'>
               <img className='w-full h-full object-center transition-all duration-500 hover:scale-105' src={recover} alt={recover} />
            </div>
            <div className='w-[668px] h-[403px] overflow-hidden'>
               <img className='w-full h-full object-center transition-all duration-500 hover:scale-105' src={recover2} alt={recover2} />
            </div>
         </div>
      </div>
    </div>
  )
}

export default LiveMoment
