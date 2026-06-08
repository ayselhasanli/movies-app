import React from 'react'
import Navbar from '../layout/Navbar'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import Brands from '../components/Brands'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Categories/>
      <Brands/>
    </>
  )
}

export default Home
