import React, { useEffect, useState } from 'react'
import Header from './header/Header'
import Navbar from './navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './footer/Footer'

const Rootlayout = () => {
   const [scrolled, setScrolled] = useState(false);
    
    
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) { // 50px scroll hole active hobe
          setScrolled(true);
        } else {
          setScrolled(false);
        }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header  scrolled={scrolled}/>
      <Navbar  scrolled={scrolled}/>
        <Outlet/>
      <Footer/>
    </>
  )
}

export default Rootlayout
