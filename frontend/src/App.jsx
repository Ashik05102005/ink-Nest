import React from "react"
import Home from './pages/User/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Wishlist from "./pages/User/wishlist"
import Cart from "./pages/User/Cart"
import Products from "./pages/User/Products"
import ProductView from "./components/Products/productView"
import CheckOut from "./pages/User/CheckOut"
import Confirm from "./pages/user/Confirm"
import Orders from "./pages/User/Orders"
import ProtectedRoute from "./routes/protectedRoute"
import Admin from "./pages/Admin/Admin"

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
            <Route path="/admin" element={<Admin />} />

          </Routes>
        </BrowserRouter>
        

      </div>
  )
}

export default App
