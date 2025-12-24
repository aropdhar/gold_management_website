import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Breadcrum from '../../component/breadcrum/Breadcrum';
import ProductCategoryLeft from './productCategoryLeft/ProductCategoryLeft';
import ProductCategoryRight from './productCategoryRight/ProductCategoryRight';

const ProductCategory = () => {
    const {name} = useParams();
    const [categoryid , setCategoryid] = useState('')

    const handlecategory = (id) =>{
         setCategoryid(id);     
    }
    
  return (
    <div>
      <div className='flex flex-col pt-30 pb-20 bg-[#f5f5f5] dark:bg-[#1c1b22] items-center gap-y-2 justify-center'>
        <h1 className='text-[22px] font-Poppins font-medium'>{name}</h1>
        <Breadcrum/>
      </div>
      <div className='my-15'>
        <div className='custom-container mx-auto'>
            <div className='flex items-start'>
               <div className='w-[25%]'>
                 <ProductCategoryLeft handlecategory={handlecategory}/>
               </div>
               <div className='w-[75%]'> 
                  <ProductCategoryRight categoryid={categoryid}/>
               </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCategory
