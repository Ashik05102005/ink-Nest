import React from "react"
import Home from "./pages/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Wishlist from "./pages/wishlist"
import Cart from "./pages/Cart"
import Products from "./pages/Products"

function App() {
  

  return (
      <div>
        <BrowserRouter >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/" element={<Login />} />
            <Route path="/wishlist" element={<Wishlist />}/>
            <Route path="/cart" element={<Cart />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </BrowserRouter>
        

      </div>
  )
}

export default App
