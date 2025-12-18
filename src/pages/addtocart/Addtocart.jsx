import React, { useEffect, useRef } from 'react'
import html2pdf from "html2pdf.js";
import { AiOutlinePlus } from 'react-icons/ai';
import { VscChromeMinimize } from 'react-icons/vsc';
import image1 from '../../assets/chain.jpg'
import { Link, useLocation } from 'react-router-dom'
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { TbCurrencyTaka } from 'react-icons/tb';
import { FaFileDownload } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { decreasecart, increasecart , getTotal, removecart} from '../../component/reduxSlice/addtocartSlice/addtocartSlice';


const Addtocart = () => {
  
  const printRef = useRef(null);
  const {pathname} = useLocation();
  const filter = pathname.replace("/" , " ").toLocaleUpperCase();
  const cartItem = useSelector((state) => state.addtocartItem.value)
  const totalAmount = useSelector((state) => state.addtocartItem)
  const dispatch = useDispatch()
  
  
    useEffect(()=>{
      
      dispatch(getTotal())

    },[dispatch , localStorage.getItem("cartItem")])
  
    const handleincrease = (increaseItem) =>{
      dispatch(increasecart(increaseItem));
    }
      
    const handledecrease = (decreaseItem) =>{
      dispatch(decreasecart(decreaseItem));
    }

    const handlecartclose = (closeItem) =>{
       dispatch(removecart(closeItem)) 
    }
    
    const subtotal = totalAmount.totalAmount;
    const mojuri = subtotal * 6 / 100;
    const vat = subtotal * 5 / 100;
    const total = subtotal + mojuri + vat;
    
    
    
    
  return (
    <div>
      <div className='pt-30 pb-18 dark:bg-[#1c1b22] dark:text-white bg-[#f5f5f5] flex items-center justify-center '>
        <h1 className='text-[40px]'>{filter}</h1>
      </div>
      <div className='pt-15 pb-25 md:mt-15 md:mb-25 dark:bg-[#1c1b22] dark:text-white bg-white'>
        <div className='custom-container mx-auto'>
          {/* cart section */}
          <div className='pb-20 md:mb-20'>
            {/* add to cart title section */}
            <div className='flex items-center px-2 py-4 md:p-4 border-b-2 border-gray-300 justify-between'>
              <div className='flex flex-1 justify-start'>
                <h1 className='text-[10px] lg:text-[15px] font-Poppins'>Product Name</h1>
              </div>
              <div className='flex flex-1 justify-center'>
                <h1 className='text-[10px] lg:text-[15px] font-Poppins'>Price</h1>
              </div>
              <div className='flex flex-1 justify-center'>
                <h1 className='text-[10px] lg:text-[15px] font-Poppins'>Quantity</h1>
              </div>
              <div className='flex flex-1 justify-end'>
                <h1 className='text-[10px] lg:text-[15px] font-Poppins'>SubTotal</h1>
              </div>
            </div>
              
            {/* add to cart product details section */}
            {cartItem.length > 0 ?

              <div className='flex flex-col h-[400px] overflow-y-scroll'>
                {cartItem.map((item , index)=>(
                  <div key={index} className='flex items-center border-b-2 px-2 py-4 md:p-4 border-gray-300 justify-between'>
                      <div className='flex flex-col md:flex-row flex-1 justify-start items-center gap-x-2.5'>
                        <div className='relative'>
                          <span className='absolute -left-1 -top-1 bg-[#f5f5f5] rounded-[50%] text-black dark:text-black' onClick={()=>handlecartclose(item)}><IoIosCloseCircleOutline /></span>
                          <div className='w-[65px] h-[65px] overflow-hidden'>
                              <img className='w-full h-full object-cover rounded' src={item.image} alt={item.image} />
                          </div>
                        </div>
                        <h1 className='text-[12px] md:text-[16px]'>{item.title}</h1>
                      </div>
                      <div className='flex flex-1 justify-center'>
                        <h1 className='text-[12px] md:text-[16px]'>{item.price}</h1>
                      </div>
                      <div className='flex flex-1 justify-center items-center'>
                        <div className='flex items-center justify-between py-1 px-1.5  border-2 border-gray-300 w-20 md:w-[120px]'>
                          <span onClick={()=>handledecrease(item)} className='cursor-pointer'><VscChromeMinimize/></span>
                          <span className='text-[12px] md:text-[16px]'>{item.cartQuantity}</span>
                          <span onClick={()=>handleincrease(item)} className='cursor-pointer'><AiOutlinePlus/></span>
                        </div>
                      </div>
                      <div className='flex flex-1 justify-end'>
                        <h1 className='text-[12px] md:text-[16px]'>{`${parseInt(item.cartQuantity) * parseInt(item.price)}`}</h1>
                      </div>
                  </div>
                ))}
              </div>
            :
              <div className='flex items-center justify-center h-[400px] translate-y-[50% , 50%]'>
                <h1>ProductCart Item Not Found</h1>
              </div>
            }
          </div>
          {/* apply Subtotal section */}
            <div className='flex flex-col gap-y-2  md:flex-row md:gap-x-2 lg:gap-x-0 md:items-start md:justify-between items-center justify-center'>
              <div className='flex items-center gap-x-1'>
                <input className='border-2 dark:border-white border-black py-2 md:py-1 lg:py-2 outline-none px-1.5 lg:w-[250px] rounded' type="text" placeholder='Apply Coupon'/>
                <button className='bg-red-500 py-2 px-3 md:px-2 md:text-[14px] lg:px-5 lg:text-[18px] text-white rounded cursor-pointer'>Apply Coupon</button>
              </div>
              <div className='lg:w-[420px] p-5 rounded border-2 dark:border-white border-black'>
                <h1 className='text-[20px] font-Poppins '>Cart Totals</h1>
                <div className='flex flex-col'>
                  <div className='flex items-center justify-between border-b border-[#999] px-1.5 py-3'>
                    <h1 className='text-[17px] font-Poppins font-semibold'>SubTotal</h1>
                    <span className='flex items-center gap-x-0.5 text-[15px] font-Poppins font-medium'>{subtotal}<TbCurrencyTaka /></span>
                  </div>
                  <div className='flex items-center justify-between border-b border-[#999] px-1.5 py-3'>
                    <h1>Total Item</h1>
                    <span>{`${totalAmount.totalItem}`}</span>
                  </div>
                  <div className='flex items-center justify-between border-b border-[#999] px-1.5 py-3'>
                    <h1>মজুরি (6%)</h1>
                    <span className='flex items-center gap-x-0.5 text-[15px] font-Poppins font-medium'>{mojuri} <TbCurrencyTaka /></span>
                  </div>
                  <div className='flex items-center justify-between border-b border-[#999] px-1.5 py-3'>
                    <h1>VAT (5%)</h1>
                    <span className='flex items-center gap-x-0.5 text-[15px] font-Poppins font-medium'>{vat} <TbCurrencyTaka /></span>
                  </div>
                  <div className='flex items-center justify-between border-b border-[#999] px-1.5 py-3'>
                      <h1 className='text-[17px] font-Poppins font-semibold'>Total</h1>
                      <span className='flex items-center gap-x-0.5 text-[15px] font-Poppins font-medium'>{total} <TbCurrencyTaka /></span>
                  </div>
                  <div className='flex items-center justify-center gap-x-1.5 mt-6'>
                      <button className='bg-black py-2.5 rounded cursor-pointer text-white px-3 md:px-5  text-[18px] font-Poppins'>Checkout</button>
                      <Link to={'/invoice'} className='bg-black py-2.5 rounded cursor-pointer md:px-5 flex items-center gap-x-1.5 text-white  md:text-[18px] px-3 font-Poppins'>Generate Invoice <FaFileDownload/></Link>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Addtocart
