import React, { useEffect, useState } from "react";

const Demo = () => {
    const [usdPrice, setUsdPrice] = useState(null);
    const [usdToBdt, setUsdToBdt] = useState(null);
    const [bdtPrice, setBdtPrice] = useState(null);

  useEffect(() => {
    fetchPrice();
    const timer = setInterval(fetchPrice, 60000);
    return () => clearInterval(timer);
  }, []);

  async function fetchPrice() {
    try {
      // ১. ইন্টারন্যাশনাল গোল্ড প্রাইস (উদাহরণ)
      const goldUsdPerOunce = 2300; // ১ আউন্স = 2300 USD

      // ২. ডলার থেকে টাকার রেট (নতুন API)
      const res = await fetch("https://open.er-api.com/v6/latest/USD");
      const data = await res.json();
      const usdToBdt = data.rates.BDT; // ✅ BDT পাওয়া যাবে

      // ৩. ১ আউন্স = 31.1035 গ্রাম
      const usdPerGram = goldUsdPerOunce / 31.1035;

      // ৪. টাকায় কনভার্ট
      const bdtPerGram = usdPerGram * usdToBdt;

      setUsdPrice(goldUsdPerOunce);
      setUsdToBdt(usdToBdt);
      setBdtPrice(bdtPerGram);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  }

  const vori = 11.664; // ১ ভরি = ১১.৬৬৪ গ্রাম
  return (
    <>
        <div className="max-w-md mx-auto mt-10 bg-white shadow-lg p-6 rounded-2xl text-center">
      <h1 className="text-2xl font-bold mb-4 text-yellow-600">
        💰 Gold Price (Live)
      </h1>

      {bdtPrice ? (
        <>
          <p className="text-gray-600">
            <b>1 USD = {usdToBdt?.toFixed(2)} BDT</b>
          </p>
          <p className="text-gray-600">
            <b>International: ${usdPrice} / ounce</b>
          </p>

          <div className="mt-4 text-lg">
            <p>বাংলাদেশে আনুমানিক দাম:</p>

            {/* ২৪ ক্যারেট */}
            <div className="mt-3 border-t pt-2">
              <p className="text-green-600 font-bold">24K Gold</p>
              <p className="text-xl">
                {(bdtPrice * 24 / 24).toFixed(2)} BDT / gram
              </p>
              <p className="text-2xl font-semibold text-yellow-600">
                {(bdtPrice * vori).toFixed(2)} BDT / ভরি
              </p>
            </div>

            {/* ২২ ক্যারেট */}
            <div className="mt-3 border-t pt-2">
              <p className="text-green-600 font-bold">22K Gold</p>
              <p className="text-xl">
                {(bdtPrice * 22 / 24).toFixed(2)} BDT / gram
              </p>
              <p className="text-2xl font-semibold text-yellow-600">
                {((bdtPrice * 22 / 24) * vori).toFixed(2)} BDT / ভরি
              </p>
            </div>
          </div>

          <p className="text-xs text-gray-400 mt-4">
            Auto-updating every 1 minute ⏱️
          </p>
        </>
      ) : (
        <p>লোড হচ্ছে...</p>
      )}
    </div>
    </>
  )
}

export default Demo
