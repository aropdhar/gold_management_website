import React, { useState } from 'react'
import { useFormik } from 'formik';

const VoriRate = () => {
    
    const [result , setResult] = useState({
        vori: 0,
        ana: 0,
        roti: 0,
        point: 0,
        goldprice: 0,
    })
    
    const [totalresult , setTotalResult] = useState({
      totalgoldprice: 0,
      totalgmprice: 0,
      totalgm: 0
    })

    const initialValue = {
        vori: 0,
        ana: 0,
        roti: 0,
        point: 0,
        goldmojuri: 0,
        goldprice: 0,
    }
    
    const formik = useFormik({
     initialValues: initialValue,
     onSubmit: (values , actions) => {

       const {vori , ana , roti , point , goldmojuri , goldprice} = values;
       setResult({vori: vori || 0, ana: ana || 0, roti: roti || 0, point: point || 0, goldprice:  goldprice});
       
       // point → roti convert
       const displayRoti = Math.floor(point / 10)
       const displayPoint = point % 10
       let displayValue = displayPoint === 0 ? displayRoti : `${displayRoti}.${displayPoint}`


       const TotalRoti = vori * 96 + ana * 6 + roti + Number(displayValue);
       const totalPrice = goldprice / 96 * TotalRoti;
       const Mojuri = TotalRoti / 96;
       const mojuricalcu = goldmojuri * Mojuri;
       const TotalGoldAmount = totalPrice + mojuricalcu;
       const totalprotigm = goldprice / 11.664;
       const totalrotitogm = TotalRoti * 0.1215;
       setTotalResult({totalgoldprice: TotalGoldAmount || 0 , totalgmprice: totalprotigm || 0 , totalgm: totalrotitogm || 0})
    },});


    const handlereset = () =>{
      formik.resetForm()
      setResult({
        vori: 0,
        ana: 0,
        roti: 0,
        point: 0,
      }),
      setTotalResult({
        totalgoldprice: 0,
        totalgm: 0
      })
    }

  return (
    <div>
      <div className='custom-container mx-auto'>
        <div className='flex items-center justify-center'>
          <div className="mt-12 py-12 px-5 rounded-2xl flex flex-col md:w-[580px] items-center gap-y-8 md:items-start md:gap-x-8 bg-[#f5f5f5] dark:bg-[#1c1b22]">
            <form onSubmit={formik.handleSubmit}>
                <div className="flex flex-col gap-y-8">
                    <div className="flex flex-col gap-y-4 items-center justify-center md:flex-row md:items-start md:gap-x-10 ">
                    <div className="flex flex-col gap-y-4">
                        <div className="flex flex-col gap-y-2">
                            <label htmlFor="Vori">ভরি</label>
                            <input className="w-[250px] border rounded border-black py-1.5 px-2 outline-0 dark:border-white" id="vori" name="vori" type="number" onChange={formik.handleChange} value={formik.values.vori} />
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <label htmlFor="Ana">আনা</label>
                            <input className="w-[250px] rounded border border-black py-1.5 px-2 outline-0 dark:border-white" id="ana" name="ana" type="number" onChange={formik.handleChange} value={formik.values.ana}/>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <label htmlFor="Roti">রতি</label>
                            <input className="w-[250px] rounded border border-black py-1.5 px-2 outline-0 dark:border-white" id="roti" name="roti" type="number" onChange={formik.handleChange} value={formik.values.roti}/>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <div className="flex flex-col gap-y-2">
                            <label htmlFor="Point">পয়েন্ট</label>
                            <input className="w-[250px] rounded border border-black py-1.5 px-2 outline-0 dark:border-white" id="point" name="point" type="number" onChange={formik.handleChange} value={formik.values.point}/>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <label htmlFor="Mojuri">প্রতি ভরির মজুরি</label>
                            <input className="w-[250px] rounded border border-black py-1.5 px-2 outline-0 dark:border-white" id="goldmojuri" name="goldmojuri" type="number" onChange={formik.handleChange} value={formik.values.goldmojuri}/>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <label htmlFor="GoldPrice">প্রতি ভরির দাম</label>
                            <input className="w-[250px] rounded border border-black py-1.5 px-2 outline-0 dark:border-white" id="goldprice" name="goldprice" type="number" onChange={formik.handleChange} value={formik.values.goldprice}/>
                        </div>
                    </div>
                    </div>
                    <div className="flex items-center gap-x-4">
                    <button type="submit" className="bg-black dark:bg-white dark:text-black text-white px-5 py-2.5 text-[16px] rounded-2xl cursor-pointer">পরিমাপ</button>
                    <button onClick={handlereset} type="button" className="bg-black text-white dark:bg-white dark:text-black px-5 py-2.5 text-[16px] rounded-2xl cursor-pointer">রিসেট</button>
                    </div>
                </div>
            </form>

             <div>
               <span className="md:text-[20px] text-[16px]  font-Inter">{result.vori} ভরি, {result.ana} আনা, {result.roti} রতি, {result.point} পয়েন্ট</span>
              <div className='mt-10 flex flex-col gap-y-4'>
                <span className='font-Roboto'>মোট টাকা পরিমান: {totalresult.totalgoldprice}</span>
                <span className='font-Roboto'>প্রতি ভরির দাম: {result.goldprice}</span>
                <span className='font-Roboto'>প্রতি গ্রামের দাম: {totalresult.totalgmprice}</span>
                <span className='font-Roboto'>মোট গ্রাম: {totalresult.totalgm}</span>
              </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default VoriRate
