import React, { useRef } from 'react'
import html2pdf from "html2pdf.js";
import { AiOutlinePlus } from 'react-icons/ai';
import { VscChromeMinimize } from 'react-icons/vsc';
import image1 from '../../assets/chain.jpg'
import { useLocation } from 'react-router-dom'
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { TbCurrencyTaka } from 'react-icons/tb';
import { FaFileDownload } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { decreasecart, increasecart } from '../../component/reduxSlice/addtocartSlice/addtocartSlice';


const Addtocart = () => {
  
  const printRef = useRef(null);
  const {pathname} = useLocation();
  const filter = pathname.replace("/" , " ").toLocaleUpperCase();
  const cartItem = useSelector((state) => state.addtocartItem.value)
  const dispatch = useDispatch()

  const handleDownloadPDF = () =>{
     const element = printRef.current;

    const options = {
      margin: 10,
      filename: 'cart-details.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(options).from(element).save();
  }

    const handleincrease = (increaseItem) =>{
      dispatch(increasecart(increaseItem));
    }
      
    const handledecrease = (decreaseItem) =>{
      dispatch(decreasecart(decreaseItem));
    }
  
  return (
    <div>
      <div className='pt-30 pb-18 dark:bg-[#1c1b22] bg-[#f5f5f5] flex items-center justify-center '>
        <h1 className='text-[40px]'>{filter}</h1>
      </div>
      <div className='mt-15 mb-25'>
        <div className='container'>
          {/* cart section */}
          <div className='mb-20'>
            {/* add to cart title section */}
            <div className='flex items-center p-4 border-b-2 border-gray-300 justify-between'>
              <div className='flex flex-1 justify-start'>
                <h1 className='text-[15px] font-Poppins'>Product Name</h1>
              </div>
              <div className='flex flex-1 justify-center'>
                <h1 className='text-[15px] font-Poppins'>Price</h1>
              </div>
              <div className='flex flex-1 justify-center'>
                <h1 className='text-[15px] font-Poppins'>Quantity</h1>
              </div>
              <div className='flex flex-1 justify-end'>
                <h1 className='text-[15px] font-Poppins'>SubTotal</h1>
              </div>
            </div>
              
            {/* add to cart product details section */}
            <div className='flex flex-col h-[400px] overflow-y-scroll'>
              {cartItem.map((item , index)=>(
                <div key={index} className='flex  items-center border-b-2 p-4 border-gray-300 justify-between'>
                    <div className='flex flex-1 justify-start items-center gap-x-2.5'>
                      <span><IoIosCloseCircleOutline /></span>
                      <div className='w-[65px] h-[65px] overflow-hidden'>
                          <img className='w-full h-full object-cover rounded' src={item.image} alt={item.image} />
                      </div>
                      <h1>{item.title}</h1>
                    </div>
                    <div className='flex flex-1 justify-center'>
                      <h1>{item.price}</h1>
                    </div>
                    <div className='flex flex-1 justify-center items-center'>
                      <div className='flex items-center justify-between py-1 px-1.5  border-2 border-gray-300 w-[120px]'>
                        <span onClick={()=>handledecrease(item)} className='cursor-pointer'><VscChromeMinimize/></span>
                        <span>{item.cartQuantity}</span>
                        <span onClick={()=>handleincrease(item)} className='cursor-pointer'><AiOutlinePlus/></span>
                      </div>
                    </div>
                    <div className='flex flex-1 justify-end'>
                      <h1>{`${parseInt(item.cartQuantity) * parseInt(item.price)}`}</h1>
                    </div>
                </div>
              ))}
            </div>
          </div>
          {/* apply Subtotal section */}
          <div className='flex items-start justify-between'>
            <div className='flex items-center gap-x-5'>
               <input className='border-2 border-black py-2 outline-none px-1.5 w-[250px] rounded' type="text" placeholder='Apply Coupon'/>
               <button className='bg-red-500 py-2 px-5 text-white rounded cursor-pointer'>Apply Coupon</button>
            </div>
            <div ref={printRef} className='w-[420px] p-5 rounded border-2 border-black'>
               <h1 className='text-[20px] font-Poppins '>Cart Totals</h1>
               <div className='flex flex-col'>
                 <div className='flex items-center justify-between border-b border-[#999] px-1.5 py-3'>
                   <h1 className='text-[17px] font-Poppins font-semibold'>SubTotal</h1>
                   <span className='flex items-center gap-x-0.5 text-[15px] font-Poppins font-medium'>620000<TbCurrencyTaka /></span>
                 </div>
                 <div className='flex items-center justify-between border-b border-[#999] px-1.5 py-3'>
                   <h1>Total Item</h1>
                   <span>{`${cartItem.length}`}</span>
                 </div>
                 <div className='flex items-center justify-between border-b border-[#999] px-1.5 py-3'>
                   <h1>মজুরি (6%)</h1>
                   <span className='flex items-center gap-x-0.5 text-[15px] font-Poppins font-medium'>30000 <TbCurrencyTaka /></span>
                 </div>
                 <div className='flex items-center justify-between border-b border-[#999] px-1.5 py-3'>
                   <h1>VAT (5%)</h1>
                   <span className='flex items-center gap-x-0.5 text-[15px] font-Poppins font-medium'>30000 <TbCurrencyTaka /></span>
                 </div>
                 <div className='flex items-center justify-between border-b border-[#999] px-1.5 py-3'>
                    <h1 className='text-[17px] font-Poppins font-semibold'>Total</h1>
                    <span className='flex items-center gap-x-0.5 text-[15px] font-Poppins font-medium'>130000 <TbCurrencyTaka /></span>
                 </div>
                 <div className='flex items-center gap-x-1.5 mt-6'>
                    <button className='bg-black py-2.5 rounded cursor-pointer text-white w-[340px] text-[18px] font-Poppins'>Process To Checkout</button>
                    <span onClick={handleDownloadPDF} className='inline-block text-[45px] cursor-pointer'><FaFileDownload /></span>
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
