import React from 'react'
import { IoCloseCircleOutline } from 'react-icons/io5'
import image1 from '../../assets/chain_card.png'
import { TbCurrencyTaka } from 'react-icons/tb'
import NewSletter from '../home/newsletter/NewSletter'
import { FaPinterest, FaSquareFacebook, FaSquareWhatsapp, FaXTwitter } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import { useSelector, useDispatch } from 'react-redux'
import { removewishlist } from '../../component/reduxSlice/wishlistSlice/wishlistSlice'
import { addtocart } from '../../component/reduxSlice/addtocartSlice/addtocartSlice'
import { useLocation } from 'react-router-dom'

const Wishlist = () => {
   
  const { pathname } = useLocation();
  const formatted = pathname.replace("/", "").toUpperCase();
  const wishlistItem = useSelector((state) => state.wishList.value);
  const dispatch = useDispatch()
  
  const handlewishlist = (wishListItem) =>{
     dispatch(removewishlist(wishListItem));
  }

  const handlecart = (cartitem) =>{
    dispatch(addtocart(cartitem))
  }
  
  
  
  return (
    <div>
        <div className='pt-35 pb-22 dark:bg-[#1c1b22] bg-[#f5f5f5] flex items-center justify-center'>
          <h1 className='text-[40px] font-Poppins font-medium'>{formatted}</h1>
        </div>
        <div className='my-15 '>
          <div className='container'>
              <div className='flex items-center justify-between border-b-2  border-gray-200 p-4'>
                <div className='flex flex-1 justify-start'>
                  <span className='text-[16px] font-Poppins'>Product Name</span>
                </div>
                <div className='flex flex-1 justify-center'>
                  <span className='text-[16px] font-Poppins'>Unit Price</span>
                </div>
                <div className='flex flex-1 justify-center'>
                  <span className='text-[16px] font-Poppins'>Stock Status</span>
                </div>
                <div className='flex flex-1 justify-end'>
                  <span className='text-[16px] font-Poppins'>Add To Cart</span>
                </div>
              </div>
              {wishlistItem.length > 0 ?

                <div className='h-[400px] overflow-y-scroll'>
                    {wishlistItem.map((item)=>(
                      <div>
                        <div className='flex items-center justify-between p-4 border-b-2  border-gray-200'>
                          <div className='flex flex-1 justify-start items-center gap-x-2.5'>
                              <span onClick={()=>handlewishlist(item)} className='cursor-pointer'><IoCloseCircleOutline /></span>
                              <div className='w-[65px] h-[65px] overflow-hidden'>
                                <img className='w-full h-full object-cover rounded-[10px]' src={item.image} alt={item.image} />
                              </div>
                              <h1 className='text-[16px] font-Poppins'>{item.title}</h1>
                          </div>
                          <div className='flex flex-1 justify-center'>
                            <span className='flex items-center gap-x-0.5 text-[16px] font-Poppins'>{item.price}<TbCurrencyTaka /></span>
                          </div>
                          <div className='flex flex-1 justify-center'>
                            <span className='text-[16px] font-Poppins text-red-500'>In Stock</span>
                          </div>
                          <div className='flex   flex-1 justify-end'>
                            <button onClick={()=>handlecart(item)} className='bg-black px-4 py-1.5 rounded-[10px] text-white cursor-pointer'>Add To Cart</button>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>

                :
                <div className='flex h-[400px] items-center justify-center translate-y-12.5'>
                  <span className='inline-block text-[30px] font-Poppins'>Wishlist Not Found</span>
                </div>
              }
              <div className='flex flex-col items-center gap-y-3 mt-10 justify-center'>
                <span className='text-[20px] font-Poppins'>Share On:</span>
                <div className='flex text-[25px]  items-center gap-x-4'>
                  <span className='cursor-pointer text-blue-400'><FaSquareFacebook /></span>
                  <span className='cursor-pointer '><FaXTwitter /></span>
                  <span className='cursor-pointer text-red-400'><FaPinterest /></span>
                  <span className='cursor-pointer text-yellow-500'><MdEmail /></span>
                  <span className='cursor-pointer text-green-400'><FaSquareWhatsapp /></span>
                </div>
              </div>
          </div>
        </div>
        <NewSletter/>
    </div>
  )
}

export default Wishlist
