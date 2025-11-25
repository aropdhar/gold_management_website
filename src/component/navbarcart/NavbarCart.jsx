import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { IoCloseCircleOutline } from 'react-icons/io5'
import { TbCurrencyTaka } from 'react-icons/tb'
import { VscChromeMinimize } from 'react-icons/vsc'
import image1 from '../../assets/chur.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { removeaddtocart } from '../reduxSlice/addtocartSlice/addtocartSlice'

const NavbarCart = ({cartshow , setcartshow}) => {

  const dispatch = useDispatch()
  const cartItem = useSelector((state) => state.addtocart.value);
  
  const handleremove = (removeItem) =>{
    dispatch(removeaddtocart(removeItem))
  }

  return (
    <div>
       {/* Cart Drawer — always inside DOM */}
      <div className={`fixed top-0 right-0 h-full w-[430px] bg-[#f5f5f5] z-2000
        transition-transform  duration-500 dark:text-black ease-in-out ${cartshow ? "translate-x-0" : "translate-x-full"}`}> 
            {/* cart header section */}
            <div className="bg-[#e7e1e1] shadow-lg flex items-center justify-between py-4 px-5">
                <h1 className="text-[18px] font-Poppins font-medium">Your Cart {`(${cartItem.length})`}</h1>
                <button className="text-[18px] cursor-pointer font-Poppins font-normal"  onClick={() => setcartshow(false)}>Close</button>
            </div>
            
            {/* cart bottom section */}
            <div className="p-4 flex flex-col h-full">
                <div className="flex flex-col py-2 px-2 gap-y-2 overflow-y-auto max-h-[410px] ">
                    {cartItem.map((item)=>(
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-x-3 relative">
                                <div className="w-[75px] h-[75px] overflow-hidden">
                                <img className="w-full h-full object-cover rounded" src={item.image} alt={item.image} />
                                </div>
                                <span onClick={()=>handleremove(item)}  className="absolute z-3000 -left-2 -top-2 text-black bg-[#e7e1e1] rounded-[50%] cursor-pointer"><IoCloseCircleOutline /></span>
                                <h1 className="text-[16px] font-Poppins font-normal">{item.title}</h1>
                            </div>
                                <div className="flex items-center border-2 border-gray-400 gap-x-5 py-1 px-2 rounded">
                                <span className='cursor-pointer'><VscChromeMinimize /></span>
                                <span>{item.cartQuantity}</span>
                                <span className='cursor-pointer'><AiOutlinePlus /></span>
                                </div>
                                <p className="text-[16px] font-Poppins">{`${parseInt(item.cartQuantity) * parseInt(item.price)}`}</p>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col z-1000 p-2 gap-y-3 border-t  border-gray-400 mt-12">
                <div className="flex items-center justify-between">
                    <h1 className="text-[18px]">Subtotal:</h1>
                    <span className="flex items-center gap-x-0.5 text-[16px] font-Poppins ">320000 <TbCurrencyTaka /></span>
                </div>
                <div className="flex items-center justify-center py-2 cursor-pointer text-[18px] border-2 border-black">
                    <button className="cursor-pointer">View Cart</button>
                </div>
                <div className="flex items-center justify-center py-2 cursor-pointer text-[18px] text-white bg-black">
                    <button className="cursor-pointer">Checkout</button>
                </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default NavbarCart
