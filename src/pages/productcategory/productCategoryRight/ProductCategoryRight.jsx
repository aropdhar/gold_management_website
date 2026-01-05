import React, { useState } from 'react'
import { BsGrid, BsGrid3X3Gap } from 'react-icons/bs'
import { HiViewList } from 'react-icons/hi'
import ProductCard from '../../../component/productcomponent/productcard/ProductCard'
import product from '../../../component/productcomponent/productApi/ProductApi'

const ProductCategoryRight = ({categoryItem}) => {
   
   const filteredProducts = categoryItem
  ? product.filter(item => item.title.toLowerCase() === categoryItem.toLowerCase())
  : product;
    
   const filterproductlength = filteredProducts.length; 
   const [page , setPage] = useState(1);
   const [pagepershow , setPagePerShow] = useState(4);
   const [grid, setGrid] = useState(3);
   const productlength = product.length / 4;
   const filterlength = filteredProducts.length / 4;
   const startIndex = page * 4 - 4;
   const endindex = page * pagepershow;

  const showingFrom = startIndex + 1;
  const showingTo = Math.min(endindex, categoryItem ? filterproductlength  :  product.length); 
  
  
  

   const handlepageItem =(index)=>{
    if(index > 0 && index <= Math.ceil(categoryItem ? filterlength : productlength || pagepershow)){
      setPage(index)
    }
   }
   

  return (
    <div className='w-full px-6 py-4'>
      {/* product category Heading */}

      <div className='flex items-start justify-between'>
         <div className='hidden md:block'>
            <p className='text-[18px] text-[#cda6a6] font-Roboto font-medium'>{`${showingFrom} - ${showingTo}`} Products Of {`${categoryItem ? filterproductlength : product.length}`} Products</p>
         </div>
         <div className='flex items-center gap-x-4'>
            <div className='flex items-center gap-x-3'>
               <p className='text-[18px] font-Poppins font-medium'>Short By</p>
               <select className='w-[100px] cursor-pointer dark:bg-[#1c1b22] dark:text-white' name="" id="">
                 <option value="">Default Shorting</option>
                 <option value="">Short by Popularity</option>
                 <option value="">Short by Average Rating</option>
                 <option value="">Short by Latest</option>
               </select>
            </div>
            <div className='hidden  md:flex  md:items-center gap-x-4 text-[#cda6a6]'>
              <span className='cursor-pointer'><HiViewList size={24} title="List View" /></span>
              <span onClick={()=> setGrid(2)} className={`cursor-pointer ${grid == 2 && 'text-black dark:text-white'}`}><BsGrid  size={24} title="2 Grid View" /></span>
              <span onClick={()=> setGrid(3)} className={`cursor-pointer ${grid == 3 && 'text-black dark:text-white'}`}><BsGrid3X3Gap size={24} title="3 Grid View"/></span>
            </div>
         </div>
      </div>

      {/* product category product section */}

      <div  className={`md:grid gap-6 ml-6 md:ml-0 flex flex-col items-center justify-center ${grid === 1 ? 'grid-cols-1' : grid === 2 ? 'md:grid-cols-2': 'md:grid-cols-3'}`}>
        
         {categoryItem ? 
            filteredProducts.slice(startIndex, endindex).map((item)=>(
              <div className={`${grid == 2 && 'flex items-center justify-center'}`}>
                <ProductCard itemData={item}/>
              </div>
            ))
         :

          product.slice(startIndex, endindex).map((item)=>(
              <div className={`${grid == 2 && 'flex items-center justify-center'}`}>
                <ProductCard itemData={item}/>
              </div>
            ))

         }

      </div>

      {/* product category pagination section */}

      <nav className='flex items-center justify-center mt-20 rounded' aria-label="Page navigation example">
        <ul className="flex -space-x-px text-sm">
          <li>
            <span onClick={()=>handlepageItem(page - 1)} className="flex  cursor-pointer items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium rounded-s-base text-sm px-3 h-10 focus:outline-none">Previous</span>
          </li>
          {[...new Array(Math.ceil(categoryItem ? filterproductlength  : productlength  || 4))].map((_ , index)=>(
            <li>
              <span className="flex cursor-pointer items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium text-sm w-10 h-10 focus:outline-none" onClick={()=>handlepageItem(index + 1)}>{index + 1}</span>
            </li>
          ))}
          <li>
            <span onClick={()=>handlepageItem(page + 1)} href="#" className="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium cursor-pointer hover:text-heading font-medium rounded-e-base text-sm px-3 h-10 focus:outline-none">Next</span>
          </li>
        </ul>
      </nav>

    </div>
  )
}

export default ProductCategoryRight
