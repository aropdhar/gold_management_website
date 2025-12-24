import React, { use, useState } from 'react'
import { IoIosArrowUp } from 'react-icons/io'
import category from '../../../component/productcomponent/categoryApi/CategoryApi';
import { AiOutlinePlus } from 'react-icons/ai';
import { VscChromeMinimize } from 'react-icons/vsc';
import { TbCurrencyTaka } from 'react-icons/tb';

const ProductCategoryLeft = ({handlecategory = () =>{}}) => {

  const [cursorshow , setCursorShow] = useState(false);
  const [moreshow , setMoreShow] = useState(false);
  const [priceshow , setPriceShow] = useState(false)
  

  return (
    <div className='w-full p-4'>

      {/* category heading section */}

      <div onClick={()=>setCursorShow(!cursorshow)} className='flex items-center justify-between cursor-pointer'>
        <h1 className='text-[18px] font-Poppins font-medium '>Categories</h1>
        <span className={`text-[20px] font-normal transition-all duration-300 ${cursorshow && "rotate-180"}`}><IoIosArrowUp /></span>
      </div>

      {/* category data and show more or show less section */}

      <div className={`flex flex-col gap-y-2 mt-4 transition-all duration-300 ${cursorshow ? "block translate-y-0" : "hidden -translate-y-full"}`}>
        {category.slice(0,4).map((item , index)=>(
          <div key={index} onClick={()=>handlecategory(item.id)}>
             <li className='list-none text-[16px] cursor-pointer'>{item.item}</li>
          </div>
        ))}
        
        {/* Show more items */}
          <div className={`overflow-hidden transition-all flex flex-col gap-y-2 duration-500 ${moreshow ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}>
            {category.slice(4).map((item, index) => (
              <li key={index} onClick={()=>handlecategory(item.id)} className='list-none text-[16px] cursor-pointer'>
                {item.item}
              </li>
            ))}
          </div>
        
        {/* Show more / less button */}

          {category.length > 4 && (
            <div>
              <span onClick={()=>setMoreShow(!moreshow)} className='flex items-center gap-x-1 cursor-pointer transition-all duration-300 text-[16px] font-Poppins font-medium'>{moreshow ? ( <><VscChromeMinimize />Show Less</>) : (<><AiOutlinePlus />Show More</>)}</span>
            </div>
          )}
      </div>

      {/* category filter and color section */}

      <div className='border-t border-gray-400 py-4 mt-4'>
        <div onClick={()=>setPriceShow(!priceshow)} className='flex items-center justify-between cursor-pointer'>
           <h1 className='text-[18px] font-Poppins font-medium'>Pricing Filter</h1>
           <span className={`text-[20px] transition-all duration-300 ${priceshow && "rotate-180"}`}><IoIosArrowUp /></span>
        </div>

        <div className={`mt-4 transition-all duration-300 ${priceshow ? "block translate-y-0" : "hidden -translate-y-full"}`}>
           <div>
               <input type="range" className='w-full'/>
           </div>
           <div className='mt-4 flex items-center gap-x-4'>
               <button className='bg-black px-5 py-1 text-white text-[16px] rounded cursor-pointer font-Poppins'>Filter</button>
               <div className='flex items-center gap-x-2'>
                  <p className='text-[18px] font-Inter font-medium'>Price:</p>
                  <span className='flex mt-1 items-center gap-x-0.5 text-[16px] font-Poppins font-normal'>{`${20000}`}<TbCurrencyTaka /></span>
               </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCategoryLeft

