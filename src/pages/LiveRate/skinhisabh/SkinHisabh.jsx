import React, { useState } from 'react'

const SkinHisabh = () => {

    const [skinbtn , setSkinBtn] = useState('Ounce');
    const skinbutton = ['Ounce' , 'Gram'];

  return (
    <div className='mt-10'>
      <div className='custom-container mx-auto'>
         <div className='flex items-center justify-center'>
            <div className='bg-[#f5f5f5] w-[560px] px-4 py-3 rounded-[10px]'> 
                 <div className='flex items-center gap-x-4'>
                    {skinbutton.map((item , index)=>(
                      <div onClick={()=>setSkinBtn(item)} key={index} className='flex items-center gap-x-2 cursor-pointer'>
                        <span className={`border-2 border-black rounded-[50%] cursor-pointer ${skinbtn == item ? 'bg-[#38BDF8] p-2' : 'bg-transparent p-2'}`}></span>
                        <span>{item}</span>
                      </div>
                    ))}
                 </div>
                 {skinbtn == "Ounce" && 
                    <div>
                        ounce
                    </div>
                 }
                  {skinbtn == "Gram" && 
                    <div>
                        gram
                    </div>
                 }
            </div>
         </div>
      </div>
    </div>
  )
}

export default SkinHisabh
