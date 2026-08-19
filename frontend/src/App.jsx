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
import DashBoard from "./pages/Admin/DashBoard"
import Books from "./pages/Admin/Books"
import AdminOrders from "./pages/Admin/Orders"
import Users from "./pages/Admin/Users"
import BookForm from "./components/Admin.jsx/books/BookForm"
import BookModal from "./components/Admin.jsx/books/BookModal"

function App() {
  

  return (
      <div>
        <BrowserRouter >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/wishlist" element={<ProtectedRoute allowedRoute="user"><Wishlist /></ProtectedRoute>}/>
            <Route path="/cart" element={<ProtectedRoute allowedRoute="user"><Cart /></ProtectedRoute>} />
            <Route path="/products" element={<Products />} />
            <Route path='/books/:id' element={<ProductView />} />
            <Route path="/checkout" element={<ProtectedRoute allowedRoute="user"><CheckOut /></ProtectedRoute>} />
            <Route path="/confirm/:id" element={<ProtectedRoute  allowedRoute="user"><Confirm /></ProtectedRoute>} />
            <Route path="/orders" element={<ProtectedRoute allowedRoute="user"><Orders /></ProtectedRoute>} />


            <Route path="/admin" element={<Admin allowedRoute="admin"/>}>

              <Route index element={<DashBoard />} />

              <Route path="books" element={<Books />} />

              <Route path="orders" element={<AdminOrders />} />

              <Route path="users" element={<Users />} />
            </Route>
            <Route path='/bookform' element={<BookModal />}/>
          </Routes>
        </BrowserRouter>
        

      </div>
  )
}

export default App
