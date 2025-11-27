import React, { useRef, useEffect, useState } from "react";
import html2pdf from "html2pdf.js";
import { TbCurrencyTaka } from "react-icons/tb";
import { useSelector } from "react-redux";
import logo from '../../assets/logo_1.png'

const Invoice = () => {
     
   const printRef = useRef(null)
   const cartItem = useSelector((state) => state.addtocartItem.value)
   const [dateTime, setDateTime] = useState({
    date: "",
    time: ""
   });
    
   
   useEffect(() => {
    const now = new Date();

    const currentDate = now.toLocaleDateString("en-GB"); // DD/MM/YYYY
    const currentTime = now.toLocaleTimeString("en-US"); // 12-hour format

    setDateTime({
      date: currentDate,
      time: currentTime
    });

  }, []);
  
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
  return (
    <div className="my-6">
      <div className="container">
        <div className="flex items-end gap-x-5 justify-center">
            <div ref={printRef} className="bg-[#f5f5f5] rounded-[10px] py-3 px-10  w-[600px]">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-[35px] font-Poppins font-medium">INVOICE</h1>
                        </div>
                        <div className="w-[60px] h-[60px] overflow-hidden">
                            <img className="w-full h-full object-cover"  src={logo} alt={logo} />
                        </div>
                    </div>

                    <div className="mt-10 flex items-center justify-between">
                        <div className="text-[18px] font-normal flex flex-col gap-y-1.5">
                        <h1>Arop Shorno Shilpaloy And Jewellers.</h1>
                        <p>Shop: Patil Bari Road,</p>
                        <span>Narsingdi Sadar,Narsingdi.</span>
                        </div>
                        <div className="flex flex-col gap-y-2 text-[16px] font-Poppins">
                            <span>Time: {dateTime.time}</span>
                            <span>Date: {dateTime.date}</span>
                        </div>
                    </div>

                    <div className="mt-10 flex items-center justify-between bg-[#2563EB] p-3 rounded text-white">
                        <div className="flex flex-1 justify-start">
                            <h1 className="text-[16px] font-Poppins font-semibold">Product Name</h1>
                        </div>
                        <div className="flex flex-1 justify-center">
                            <h1 className="text-[16px] font-Poppins font-semibold">Unit Price</h1>
                        </div>
                        <div className="flex flex-1 justify-center">
                            <h1 className="text-[16px] font-Poppins font-semibold">Quantity</h1>
                        </div>
                        <div className="flex flex-1 justify-end">
                            <h1 className="text-[16px] font-Poppins font-semibold">Total</h1>
                        </div>
                    </div>
                    <div className="flex flex-col h-[200px] overflow-y-scroll">
                        {cartItem.map((item)=>(
                            <div className="flex  items-center justify-between p-3 border-b border-[#999]">
                                <div className="flex flex-1 justify-start">
                                    <h1 className="text-[16px] font-Poppins font-semibold">{item.title}</h1>
                                </div>
                                <div className="flex flex-1 justify-center">
                                    <h1 className="text-[16px] font-Poppins font-semibold">{item.price}</h1>
                                </div>
                                <div className="flex flex-1 justify-center">
                                    <h1 className="text-[16px] font-Poppins font-semibold">{item.cartQuantity}</h1>
                                </div>
                                <div className="flex flex-1 justify-end">
                                    <h1 className="text-[16px] font-Poppins font-semibold">{`${parseInt(item.price) * parseInt(item.cartQuantity)}`}</h1>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="bg-[#887c7c32] p-3 flex justify-between items-center rounded-[10px]">
                        <div>
                            <h1 className="text-[18px] font-Poppins font-semibold">Subtotal</h1>
                        </div>
                        <div>
                            <span className="text-[18px] font-Poppins ">120000</span>
                        </div>
                    </div>
                    <div className="mt-5 flex flex-col gap-y-3">
                        <h1 className="text-[25px] font-Poppins font-normal">Bank Details</h1>
                        <span className="text-[16px] font-Poppins font-normal">SSL Commerze</span>
                    </div>
            </div>
            <div>
                <button onClick={handleDownloadPDF} className="bg-black text-white px-5 py-2.5 text-[18px] rounded cursor-pointer">DownLoad Pdf</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Invoice
