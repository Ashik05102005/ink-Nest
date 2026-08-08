// import GooeyNav from './GooeyNav'
// import GooeyNav from '../AdditionalComponents/GooeyNav ';
import { CiLogin } from "react-icons/ci";
import { TiShoppingCart } from "react-icons/ti";
import { GrFavorite } from "react-icons/gr";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import LoginComponent from "../buttons/LoginComponent";
import { Link } from "react-router-dom";
import SearchComponent from "../Products/SearchComponent";
import WishlistButtonNavbar from "../Navbar/WishlistButtonNavbar";
import CartNavbarButton from "../Navbar/CartNavbarButton";


export default function NavBar() {
  return (
    <div className="bg-white/10 backdrop-blur-lg fixed max-w-full min-w-full z-100 ">
      <div className='  shadow  max-h-20 flex items-center justify-between px-8  z-50 max-w-full  min-w-full '>
        <div className='h-20  flex items-center '>
          <Link 
          to={'/'}
          className="text-3xl">Ink<span className="text-[#1D7A46]">Nest</span></Link>
        </div>
        <div className="text-sm  gap-4  flex">
          <Link to={'/'}>Home</Link>
          <Link to={'/products'} >Products</Link>
          <Link to={'/orders'}>Orders</Link>
        </div>
        
         <div className=' flex gap-2'>
          <button className=' px-2 py-2 rounded-xl '>
            <Link to={'/cart'}> <CartNavbarButton /> </Link>
          </button>
          <button className=' px-2 py-2 rounded-xl '>
            <Link to={'/wishlist'}><WishlistButtonNavbar /></Link>
          </button>
          <div className=' px-2 py-2  '>
            <LoginComponent />
          </div>
        </div>
      </div>
       
    </div>
  )
}
