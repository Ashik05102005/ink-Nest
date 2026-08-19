import React, { useEffect } from 'react'
import NavBar from '../../components/Home/NavBar'
import Carousel from '../../components/Home/Carousel'
import MainProducts from '../../components/Home/MainProducts'
import Categories from '../../components/Home/Categories'
import NewBooks from '../../components/Home/NewBooks'
import Hero from '../../components/Home/Hero'
import CustomerReview from '../../components/Home/CustomerReview'
import Footer from '../../components/Home/Footer'
import { useCurrentUser } from '../../hooks/useCurrentUser'
import { useDispatch } from 'react-redux'
import { setCurrentUser } from '../../redux/slices/currentUserSlice'
import { setWishlist } from '../../redux/slices/wishlistSlice'
import { setCart } from '../../redux/slices/CartSlice'
import FadeUp from '../../Animation/FadeUp'


function Home() {
  const dispatch = useDispatch()
  const userId = JSON.parse(localStorage.getItem("userId"));

  const{data: user , isLoading , error} = useCurrentUser(userId);

  
  useEffect(()=>{
    if(user){;
      dispatch(setCurrentUser(user));
      dispatch(setWishlist(user.wishlist));
      dispatch(setCart(user.cart))
    }
    
  },[user,dispatch])
  
  if(isLoading) return<h1>Loading</h1>
  if(error) return<h1>error</h1>
  

  return (
    <div className='  min-h-screen bg-[#F8F6F1]'>
        <NavBar />
        <Hero />
        <FadeUp >
          <MainProducts />
        </FadeUp>
        <FadeUp>
          <Carousel />
        </FadeUp>
        <FadeUp>
          <NewBooks />
        </FadeUp>
        <FadeUp>
          <Categories />
        </FadeUp>
        <FadeUp>
          <CustomerReview />
        </FadeUp>
        <Footer />
    </div>
  )
}

export default Home