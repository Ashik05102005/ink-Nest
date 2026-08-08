import React from "react"
import Home from "./pages/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Wishlist from "./pages/wishlist"
import Cart from "./pages/Cart"
import Products from "./pages/Products"
import ProductView from "./components/Products/productView"
import CheckOut from "./pages/CheckOut"
import Confirm from "./pages/Confirm"
import Orders from "./pages/Orders"
import ProtectedRoute from "./routes/protectedRoute"

function App() {
  

  return (
      <div>
        <BrowserRouter >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/wishlist" element={<ProtectedRoute><Wishlist /></ProtectedRoute>}/>
            <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
            <Route path="/products" element={<Products />} />
            <Route path='/books/:id' element={<ProductView />} />
            <Route path="/checkout" element={<ProtectedRoute><CheckOut /></ProtectedRoute>} />
            <Route path="/confirm/:id" element={<ProtectedRoute ><Confirm /></ProtectedRoute>} />
            <Route path="/orders" element={<Orders />} />
            

          </Routes>
        </BrowserRouter>
        

      </div>
  )
}

export default App
