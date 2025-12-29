import React, { useEffect, useState } from "react";
import VoriRate from "./vorirate/VoriRate";
import GmRate from "./gmrate/GmRate";



const LiveRate = () => {
  
  const [goldtab , setGoldtab] = useState('আনা-রতি হিসাবে');
  const tab = ['আনা-রতি হিসাবে' , 'গ্রাম হিসাবে' , 'স্কিন হিসাব' , 'বন্ধকী হিসাব'];
  
  return (
    <div className="py-20 px-3 md:px-0">
      
          {/* live rate gold calculation headding section */}
          <div className="mt-20 flex flex-col gap-y-4 items-center justify-center">
            <h1 className="text-[30px] font-Poppins">Gold Calculation</h1>
            <div className="flex items-center gap-x-4 bg-[#38BDF8] dark:text-black py-3 px-6 rounded-[40px]">
                {tab.map((item , index)=>(
                  <button key={index} onClick={()=>setGoldtab(item)} className={`md:text-[18px] text-[10px] font-Roboto font-medium cursor-pointer transition-all duration-300 ${goldtab == item ? "bg-[#f5f5f5] py-2 px-3 rounded-4xl" : "bg-transparent py-2 px-3 rounded-4xl"}`}>{item}</button>
                ))}
            </div>
          </div>

          {/* live rate gold calculation main section */}
          {goldtab == "আনা-রতি হিসাবে" &&
             <VoriRate/>
          }
          {goldtab == "গ্রাম হিসাবে" &&  
             <GmRate/>
          }
           
    </div>
  )
}

export default LiveRate
