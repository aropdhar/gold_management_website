import React from 'react'
import Banner from './banner/Banner'
import Category from './category/Category'
import BestseillingProduct from './bestseilling/BestseillingProduct'
import Location from './location/Location'
import Finding from './Finding/Finding'


const Home = () => {
  return (
    <>
      <Banner/>
      <Category/>
      <BestseillingProduct/>
      <Finding/>
    </>
  )
}

export default Home
