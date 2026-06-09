import React from 'react'
import Navbar from '../layout/Navbar'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import Brands from '../components/Brands'
import PopularWeek from '../components/PopularWeek'
import Devices from '../components/Devices'
import FAQ from '../components/FAQ'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Categories/>
      <Brands/>
      <PopularWeek/>
      <Devices/>
      <FAQ/>
    </>
  )
}

export default Home
