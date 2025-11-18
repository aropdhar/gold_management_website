import React from 'react'
import { useParams } from 'react-router-dom'
import Breadcrum from '../../component/breadcrum/Breadcrum';

const ProductCategory = () => {
    const {name} = useParams();
    
    
  return (
    <div className='pt-30 pb-40'>
      <div className='flex flex-col items-center gap-y-2 justify-center'>
        <h1 className='text-[22px] font-Poppins font-medium'>{name}</h1>
        <Breadcrum/>
      </div>
    </div>
  )
}

export default ProductCategory
