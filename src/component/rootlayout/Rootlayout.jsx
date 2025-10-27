import React from 'react'
import Header from './header/Header'
import Navbar from './navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './footer/Footer'

const Rootlayout = () => {
  return (
    <>
      <Header/>
      <Navbar/>
        <Outlet/>
      <Footer/>
    </>
  )
}

export default Rootlayout
