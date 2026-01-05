import React, { useState } from 'react'
 import { useFormik } from 'formik';


const GmRate = () => {
  
    const [result , setResult] = useState({
      protivoriprice: 0,
      totalgmprice: 0,
      protigmprice: 0
    })

    const initialvalue = {
      goldgmprice: 0,
      totalgm: 0,
    }
    const formik = useFormik({
     initialValues: initialvalue,
     onSubmit: values => {
       const {goldgmprice , totalgm} = values;
       const totalgmprice = goldgmprice / 11.664 * totalgm;
       const protigmprice = goldgmprice / 11.664;
       setResult({protivoriprice: goldgmprice || 0 , totalgmprice: totalgmprice || 0 , protigmprice: protigmprice || 0});
     },
    });

   const handlereset = () =>{
    formik.resetForm();
    setResult({protivoriprice: 0 , totalgmprice: 0 , protigmprice: 0});
   }
  return (
    <div className='mt-10'>
      <div className='custom-container mx-auto'>
        <div className='flex items-center justify-center'>
          <div className='bg-[#f5f5f5] dark:bg-[#1c1b22] md:w-[560px] py-3 px-4 rounded-[10px]'>
            <div className='flex flex-col gap-y-10'>
                <form onSubmit={formik.handleSubmit}>
                  <div className='flex flex-col gap-y-6'>
                    <div className='flex flex-col gap-y-6 md:flex-row items-start md:gap-x-4'>
                      <div className='flex flex-col gap-y-2'>
                        <label htmlFor="goldprice">প্রতি ভরির দাম</label>
                        <input id="goldgmprice" name="goldgmprice" type="number" onChange={formik.handleChange} value={formik.values.goldgmprice} className='w-[250px] border border-black dark:border-white px-3 py-2 outline-0'/>
                      </div>
                      <div className='flex flex-col gap-y-2'>
                        <label htmlFor="goldprice">সোনার ওজন গ্রাম </label>
                        <input id="totalgm" name="totalgm" type="number" onChange={formik.handleChange} value={formik.values.totalgm} className='w-[250px] border border-black dark:border-white px-3 py-2 outline-0'/>
                      </div>
                    </div>
                    <div className='flex items-center gap-x-6'>
                      <button type="submit" className='bg-black dark:bg-white dark:text-black px-5 py-1.5 text-white rounded cursor-pointer'>পরিমাপ</button>
                      <button onClick={handlereset} type='button' className='bg-black dark:bg-white dark:text-black px-5 py-1.5 text-white rounded cursor-pointer'>রিসেট</button>
                    </div>
                  </div>
                </form>
                <div className='flex flex-col gap-y-6'>
                    <span>প্রতি ভরির দাম: {result.protivoriprice}</span>
                    <span>মোট টাকা পরিমান: {result.totalgmprice}</span>
                    <span>প্রতি গ্রামের দাম: {result.protigmprice}</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GmRate
