import React, { useState } from 'react'
 import { useFormik } from 'formik';
import SkingmHisabh from './skingmhisabh/SkingmHisabh';


const SkinHisabh = () => {

    const [skinbtn , setSkinBtn] = useState('Ounce');
    const skinbutton = ['Ounce' , 'Gram'];
    const [result , setResult] = useState({
      skinrate: 0,
      dollarrate: 0,
      totalskinrate: 0,
    })
    const initialvalue = {
      skinrate: 0,
      dollarrate: 0
    }

     const formik = useFormik({
     initialValues: initialvalue,
     onSubmit: values => {
       const {skinrate , dollarrate} = values;
       const skintotalrate = skinrate * dollarrate / 2.66679;
       setResult({skinrate: skinrate|| 0 , dollarrate: dollarrate || 0 , totalskinrate: skintotalrate || 0});
     },
   });

   const handlereset = () =>{
     formik.resetForm()
     setResult({skinrate: 0 , dollarrate: 0 , totalskinrate: 0});
   }

  return (
    <div className='mt-10'>
      <div className='custom-container mx-auto'>
         <div className='flex items-center justify-center'>
            <div className='bg-[#f5f5f5] w-[560px] px-4 py-3 rounded-[10px]'> 
                 <div className='flex items-center gap-x-4'>
                    {skinbutton.map((item , index)=>(
                      <div onClick={()=>setSkinBtn(item)} key={index} className='flex items-center gap-x-2 cursor-pointer'>
                        <span className={`border-2 border-black rounded-[50%] cursor-pointer ${skinbtn == item ? 'bg-[#38BDF8] p-2' : 'bg-transparent p-2'}`}></span>
                        <span>{item}</span>
                      </div>
                    ))}
                 </div>
                 {skinbtn == "Ounce" && 
                    <div className='mt-4 flex flex-col gap-y-12'>
                      <form onSubmit={formik.handleSubmit}>
                        <div className='flex flex-col gap-y-6'>
                            <div className='flex flex-col md:flex-row items-start gap-x-6'>
                              <div className='flex flex-col gap-y-4'>
                                <label htmlFor="skinrated">আজকের  স্কিন রেট</label>
                                <input id="skinrate" name="skinrate" type="number" onChange={formik.handleChange}value={formik.values.skinrate} className='w-[250px] border-2 border-black px-3 py-2 outline-0'/>
                              </div>
                              <div className='flex flex-col gap-y-4'>
                                <label htmlFor="dollarrated">আজকের ডলার রেট</label>
                                <input id="dollarrate" name="dollarrate" type="number" onChange={formik.handleChange} value={formik.values.dollarrate} className='w-[250px] border-2 border-black px-3 py-2 outline-0'/>
                              </div>
                            </div>
                            <div className='flex items-start gap-x-4'>
                              <button type="submit" className='bg-black px-5 py-2.5 text-white rounded-2xl cursor-pointer'>পরিমাপ</button>
                              <button onClick={handlereset} type='button' className='bg-black px-5 py-2.5 text-white rounded-2xl cursor-pointer'>রিসেট</button>
                            </div>
                        </div>
                      </form>
                      <div>
                         <span>স্কিন রেট হিসাবে প্রতি ভরি মূল্য {`${result.totalskinrate}`} এর সাথে ভ্যাট বা আরো কিছু যোগ হতে পারে। </span>
                      </div>
                    </div>
                 }
                 {skinbtn == "Gram" && 
                  <div>
                      <SkingmHisabh/>
                  </div>
                 }
            </div>
         </div>
      </div>
    </div>
  )
}

export default SkinHisabh
