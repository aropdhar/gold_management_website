import React from 'react'
import { useParams } from 'react-router-dom'
import product from '../productApi/ProductApi';

const ProductDetails = () => {
    const {id} = useParams();
    const products = product.find((item) => item.id === parseInt(id));
    
  return (
    <div>
       
    </div>
  )
}

export default ProductDetails
