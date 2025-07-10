import React from 'react'
import Hero from '../Components/Hero'
import CarCard from '../Components/CarCard'
import FeaturedSection from '../Components/FeaturedSection'
import Banner from '../Components/Banner'
import Testimonials from '../Components/Testimonials'

const Home = () => {
  return (
    <>
      <Hero/>
      <FeaturedSection/>
      <Banner/>
      <Testimonials/>
    </>
  )
}

export default Home