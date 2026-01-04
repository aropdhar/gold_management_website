import React, { useState } from 'react'
import { useFormik } from 'formik';


const SkingmHisabh = () => {

    const [result , setResult] = useState({
        skingmrate: 0,
        gmdollarrate: 0,
        totalgmprice: 0,
        protigoldgmprice: 0
    });
    const initialvaluegm = {
        skingmrate: 0,
        gmdollarrate: 0
    }
    const formik = useFormik({
     initialValues: initialvaluegm,
     onSubmit: values => {
       const {skingmrate , gmdollarrate} = values;
       const skingmtotal = skingmrate * 11.664 * gmdollarrate;
       const protigmprice = skingmtotal / 11.664;
       setResult({skingmrate: skingmrate || 0 , gmdollarrate: gmdollarrate || 0, totalgmprice: skingmtotal || 0 , protigoldgmprice: protigmprice || 0});
     },
   });

   const handleresetgm = () =>{
     formik.resetForm()
     setResult({skingmrate: 0 , gmdollarrate:0 , totalgmprice: 0 , protigoldgmprice: 0});
   }

  return (
    <div>
      <div className='mt-4 flex flex-col gap-y-12'>
            <form onSubmit={formik.handleSubmit}>
            <div className='flex flex-col gap-y-6'>
                <div className='flex items-start gap-x-6'>
                    <div className='flex flex-col gap-y-4'>
                    <label htmlFor="skinrated">আজকের প্রতি গ্রামের স্কিন রেট</label>
                    <input id="skingmrate" name="skingmrate" type="number" onChange={formik.handleChange}value={formik.values.skingmrate} className='w-[250px] border-2 border-black px-3 py-2 outline-0'/>
                    </div>
                    <div className='flex flex-col gap-y-4'>
                    <label htmlFor="gmdollarrated">আজকের ডলার রেট</label>
                    <input id="gmdollarrate" name="gmdollarrate" type="number" onChange={formik.handleChange} value={formik.values.gmdollarrate} className='w-[250px] border-2 border-black px-3 py-2 outline-0'/>
                    </div>
                </div>
                <div className='flex items-start gap-x-4'>
                    <button type="submit" className='bg-black px-5 py-2.5 text-white rounded-2xl cursor-pointer'>পরিমাপ</button>
                    <button onClick={handleresetgm} type='button' className='bg-black px-5 py-2.5 text-white rounded-2xl cursor-pointer'>রিসেট</button>
                </div>
            </div>
            </form>
            <div className='flex flex-col gap-y-6'>
                <span>প্রতি গ্রামের স্কিন রেট হিসাবে প্রতি ভরি মূল্য {`${result.totalgmprice}`} এর সাথে ভ্যাট বা আরো কিছু যোগ হতে পারে। </span>
                <span>প্রতি গ্রামের দাম: {`${result.protigoldgmprice}`}</span>
            </div>
        </div>
    </div>
  )
}

export default SkingmHisabh
