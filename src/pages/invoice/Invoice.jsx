import React, { useRef, useEffect, useState } from "react";
import { TbCurrencyTaka } from "react-icons/tb";
import { useSelector } from "react-redux";
import logo from '../../assets/logo_1.png'
import html2canvas from "html2canvas";
import { useNavigate } from "react-router-dom";
import { successToast } from "../../component/toastify/toastify";
import { FaDownload } from "react-icons/fa";

const Invoice = () => {

   const navigate = useNavigate();
   const printRef = useRef(null)
   const cartItem = useSelector((state) => state.addtocartItem.value)
   const totalItem = useSelector((state) => state.addtocartItem)
   
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
  

  const handleDownloadPDF = () => {
    html2canvas(printRef.current, { scale: 10 }).then((canvas) => {
        const link = document.createElement("a");
        link.download = "invoice.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
    }).finally(()=>{
        successToast('Invoice Pdf & Image Download SuccessFully!!!')
        setTimeout(() => {
            navigate('/')
        }, 2000);
    })
  };

  const subtotal = totalItem.totalAmount;
  const mojuri = subtotal * 6 / 100;
  const vat = subtotal * 5 / 100;
  const total = subtotal + mojuri + vat;
  
  

  return (
    <>
        <div className="w-full flex justify-center my-10 bg-white dark:bg-[#1c1b22] dark:text-white">
            <div className="custom-container mx-auto">
                <div ref={printRef} className="shadow-lg relative bg-white text-black w-full md:w-[210mm] min-h-[297mm] p-4 sm:p-6 md:p-[20mm]pb-0 print:w-[210mm] print:min-h-[297mm] print:p-[20mm] print:pb-0">
                    {/* Invoice Header Section */}
                        <div className="flex items-center py-2 border-b border-black justify-between">
                            <div>
                                <h1 className="text-[40px] font-Poppins font-semibold">INVOICE</h1>
                            </div>
                            <div className="w-[60px] h-[60px] overflow-hidden">
                                <img className="w-full h-full object-cover"  src={logo} alt={logo} />
                            </div>
                        </div>
                    {/* Invoice Address And Time Section */}
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
                    {/* Invoice product Title Section */}
                        <div className="mt-10 flex items-center justify-between  p-3 rounded text-black border-b border-black">
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
                    {/* Invoice product Content Section */}
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
                    {/* Invoice Subtotal And Total Section */}    
                        <div className="flex flex-col items-end justify-end">
                            <div className="flex flex-1 w-[280px] justify-end mt-4 border-b  items-center gap-x-20 p-3">
                                <h1 className="text-[16px] font-Poppins font-medium">Sub-Total: </h1>
                                <div>
                                    <span className="text-[16px]  font-Poppins font-semibold">{totalItem.totalAmount}</span>
                                </div>
                            </div>
                            <div className="flex flex-1 w-[280px] justify-end mt-4 border-b  items-center gap-x-20 p-3">
                                <h1 className="text-[16px] font-Poppins font-medium">মজুরি (6%): </h1>
                                <div>
                                    <span className="text-[16px]  font-Poppins font-semibold">{mojuri}</span>
                                </div>
                            </div>
                            <div className="flex flex-1 w-[280px] justify-end mt-4 border-b  items-center gap-x-20 p-3">
                                <h1 className="text-[16px] font-Poppins font-medium">Vat(5%): </h1>
                                <div>
                                    <span className="text-[16px]  font-Poppins font-semibold">{vat}</span>
                                </div>
                            </div>
                            <div className="flex flex-1 w-[280px] justify-end mt-4 border-b gap-x-20 p-3">
                                <h1 className="text-[16px] font-Poppins font-medium">Total: </h1>
                                <div>
                                    <span className="text-[16px]  font-Poppins font-semibold">{total}</span>
                                </div>
                            </div>
                        </div>
                    
                    {/* Invoice Signature and Thankyou Section */}
                        
                        <div className="flex justify-between mt-30">
                            <div className="flex items-center flex-col gap-y-5">
                                <h1 className="text-[17px] font-signature text-[#60A5FA]">AropDhar</h1>
                                <div className="border-t">
                                    <span className="text-[22px] font-Poppins font-medium">Administration</span>
                                </div>
                            </div>
                            <div>
                                <h1 className="text-[36px] font-Poppins font-semibold">Thank You!!</h1>
                            </div>
                        </div> 

                    {/* Invoice Footer Section */}    
                        <div className="flex absolute left-0 right-0 bottom-0 text-[17px] font-Poppins font-normal items-center justify-between border-t  p-6">
                            <p>+880132022204</p>
                            <h1>aropdhar0@gmail.com</h1>
                            <span>Narsingdi Sadar,Narsingdi.</span>
                        </div>
                        <div className="fixed bottom-0 right-0 md:absolute md:top-3 md:-right-15">
                            <button onClick={handleDownloadPDF} className="bg-black text-white px-5 py-2.5 text-[18px] rounded cursor-pointer"><FaDownload /></button>
                        </div>
                </div>
            </div>
        </div> 
    </>
  )
}

export default Invoice
