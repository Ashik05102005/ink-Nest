import React from 'react'
import NavBar from '../components/Home/NavBar'
import Carousel from '../components/Home/Carousel'
import MainProducts from '../components/Home/MainProducts'
import Categories from '../components/Home/Categories'
import NewBooks from '../components/Home/NewBooks'
import Hero from '../components/Home/Hero'
import CustomerReview from '../components/Home/CustomerReview'
import Footer from '../components/Home/Footer'

function Home() {
  return (
    <div className='  min-h-screen bg-[#F8F6F1]'>
        <NavBar />
        <Hero />
        <MainProducts />
        <Carousel />
        <NewBooks />
        <Categories />
        <CustomerReview />
        <Footer />
    </div>
  )
}

export default Home