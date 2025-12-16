import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { IoCloseCircleOutline } from 'react-icons/io5'
import { TbCurrencyTaka } from 'react-icons/tb'
import { VscChromeMinimize } from 'react-icons/vsc'
import image1 from '../../assets/chur.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { decreasecart, removecart } from '../reduxSlice/addtocartSlice/addtocartSlice'
import { increasecart } from '../reduxSlice/addtocartSlice/addtocartSlice'
import { Link } from 'react-router-dom'

const NavbarCart = ({cartshow , setcartshow}) => {

    const cartItem = useSelector((state) => state.addtocartItem.value)
    const subtotal = useSelector((state) => state.addtocartItem)
    const dispatch = useDispatch()
    
    
    
    const handleremove = (cartremove) =>{
       dispatch(removecart(cartremove));
    }

    const handleincrease = (increaseItem) =>{
       dispatch(increasecart(increaseItem));
    }
    
    const handledecrease = (decreaseItem) =>{
       dispatch(decreasecart(decreaseItem));
    }
  return (
    <div>
       {/* Cart Drawer — always inside DOM */}
      <div className={`fixed top-0 right-0 h-full w-[300px] md:w-[410px] bg-[#f5f5f5] z-2000 transition-transform  duration-500 dark:text-black ease-in-out ${cartshow ? "translate-x-0" : "translate-x-full"}`}> 
            {/* cart header section */}
            <div className="bg-[#e7e1e1] shadow-lg flex items-center justify-between py-4 px-5">
                <h1 className="text-[18px] font-Poppins font-medium">Your Cart {`(${cartItem.length})`}</h1>
                <button className="text-[18px] cursor-pointer font-Poppins font-normal"  onClick={() => setcartshow(false)}>Close</button>
            </div>
            
            {/* cart bottom section */}
            <div className="p-4 flex flex-col">
                <div className="flex flex-col py-2 px-2 gap-y-2 overflow-y-scroll h-[410px]">
                    {cartItem.map((item , index)=>(
                        <div key={index} className="flex items-center justify-between">
                            <div className="flex flex-col lg:flex-row items-center gap-x-3 relative">
                                <div className="w-[75px] h-[75px] overflow-hidden">
                                <img className="w-full h-full object-cover rounded" src={item.image} alt={item.image} />
                                </div>
                                <span onClick={()=>handleremove(item)} className="absolute z-3000 -left-2 -top-2 text-black bg-[#e7e1e1] rounded-[50%] cursor-pointer"><IoCloseCircleOutline /></span>
                                <h1 className="text-[16px] font-Poppins font-normal">{item.title}</h1>
                            </div>
                            <div className="flex items-center border-2 border-gray-400 gap-x-5 py-1 px-2 rounded">
                            <span onClick={()=>handledecrease(item)} className='cursor-pointer'><VscChromeMinimize /></span>
                            <span>{`${parseInt(item.cartQuantity)}`}</span>
                            <span onClick={()=>handleincrease(item)} className='cursor-pointer'><AiOutlinePlus /></span>
                            </div>
                            <p className="text-[16px] font-Poppins">{`${ parseInt(item.cartQuantity) * parseInt(item.price)}`}</p>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col z-1000 p-2 gap-y-3 border-t  border-gray-400 mt-12">
                <div className="flex items-center justify-between">
                    <h1 className="text-[18px]">Subtotal:</h1>
                    <span className="flex items-center gap-x-0.5 text-[16px] font-Poppins ">{`${subtotal.totalAmount}`} <TbCurrencyTaka /></span>
                </div>
                <Link to={'/addtocart'} onClick={()=>setcartshow(false)} className="flex items-center justify-center py-2 cursor-pointer text-[18px] border-2 border-black transition-all duration-300 hover:bg-black hover:text-white">
                    <button className="cursor-pointer">View Cart</button>
                </Link>
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
