import React, { useState } from 'react'
import { useFormik } from 'formik';


const BondokiHisabh = () => {
    const [result , setResult] = useState({
        bondokiloantk: 0,
        monthinteresttk: 0,
        loandaycount: 0,
        bondokiinterest: 0,
        bondokitotalhisabh: 0
    })

    const initialValue = {
        bondokiloan: 0,
        monthinterest: 0,
        loanday: 0
    }
     const formik = useFormik({
     initialValues: initialValue,
     onSubmit: values => {

       const {bondokiloan , monthinterest , loanday} = values;

    
       const bondokihisabhtotal = bondokiloan / 100000 * monthinterest * loanday / 30;
       const bondokilasthisabh = bondokiloan + bondokihisabhtotal;


       setResult({bondokiloantk: bondokiloan || 0 , monthinteresttk: monthinterest || 0, loandaycount: loanday || 0 , bondokiinterest: bondokihisabhtotal || 0 , bondokitotalhisabh: bondokilasthisabh || 0});
     },
   });

   const handlereset = () =>{
     formik.resetForm();
     setResult({bondokiloantk: 0 , monthinteresttk: 0, loandaycount: 0})
   }
  return (
    <div>
      <div className='custom-container mx-auto'>
         <div className='flex items-center justify-center'>
           <div className='bg-[#f5f5f5] mt-12 py-6 px-5 rounded-2xl w-[580px]'>
             <div className='flex flex-col gap-y-8'>
                <form onSubmit={formik.handleSubmit}>
                    <div className='flex flex-col gap-y-6'>
                        <div className='flex flex-wrap items-start gap-4 '>
                                <div className='flex flex-col gap-y-3'>
                                    <label htmlFor="loantk">বন্ধকী লোনকৃত টাকার পরিমান</label>
                                    <input  id="bondokiloan" name="bondokiloan" type="number" onChange={formik.handleChange} value={formik.values.bondokiloan} className='w-[250px] border-2 border-black px-3 py-2 outline-0' />
                                </div>
                                <div className='flex flex-col gap-y-3'>
                                    <label htmlFor="interest">লাখে মাসিক সুদ</label>
                                    <input id="monthinterest" name="monthinterest" type="number" onChange={formik.handleChange} value={formik.values.monthinterest} className='w-[250px] border-2 border-black px-3 py-2 outline-0'/>
                                </div>
                                <div className='flex flex-col gap-y-3'>
                                    <label htmlFor="totaltk">লোনকৃত দিন </label>
                                    <input id="loanday" name="loanday" type="number" onChange={formik.handleChange} value={formik.values.loanday} className='w-[250px] border-2 border-black px-3 py-2 outline-0'/>
                                </div>
                        </div>
                        <div className='flex items-center gap-x-6'>
                            <button type="submit" className='bg-black text-white px-5 py-2.5 rounded-2xl cursor-pointer'>পরিমাপ</button>
                            <button onClick={handlereset} type='button' className='bg-black text-white px-5 py-2.5 rounded-2xl cursor-pointer'>রিসেট</button>
                        </div>
                    </div>
                </form>
                <div className='flex flex-col gap-y-6'>
                    <span>আপনার বন্ধকী মূল টাকা ও লাভসহ {`${result.bondokitotalhisabh}`} এত টাকা হয়েছে</span>
                    <span>আপনার এত দিনে লাভ এসেছে {`${result.bondokiinterest}`}</span>
                </div>
             </div>
           </div>
         </div>
      </div>
    </div>
  )
}

export default BondokiHisabh
