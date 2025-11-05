import React from 'react'
import Banner from './banner/Banner'
import Category from './category/Category'
import BestseillingProduct from './bestseilling/BestseillingProduct'
import Location from './location/Location'
import Finding from './Finding/Finding'
import Demo from './Demo'
import LiveMoment from './livemoment/LiveMoment'
import Feature from './feature/Feature'


const Home = () => {
  return (
    <>
      <Banner/>
      <Category/>
      <BestseillingProduct/>
      <Finding/>
      <LiveMoment/>
      <Feature/>
    </>
  )
}

export default Home
