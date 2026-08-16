import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NavBar from '../../components/Home/NavBar';
import { FaAngleRight } from "react-icons/fa6";
import CheckoutForm from '../../components/CheckOut/checkForm';
import PaymentMethod from '../../components/CheckOut/PaymentMethod'
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { setCurrentUser } from '../../redux/slices/currentUserSlice';
import { clearCart, setCart } from '../../redux/slices/CartSlice';
import CartSummary from '../../components/CheckOut/CartSummary';
import { de } from 'zod/v4/locales';
import { useCreateOrder } from '../../hooks/useCreateOrder';
import { useNavigate } from 'react-router-dom';
import { useUpdateCart } from '../../hooks/useUpdateCart';
import { addOrderById } from '../../services/api/CurrentUserApi';



function CheckOut() {

  const [selectedAddress, setSelectedAddress] = useState(null);
  const cart = useSelector((state)=>state.cart.items);
  const currentUser = useSelector((state)=>state.currentUser.currentUser);
  const [payment , setPayment] = useState("cod");
  const userId = JSON.parse(localStorage.getItem("userId"));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [orders,setOrders] = useState([]);
  const [step , setStep ] = useState(1);

  const {data:user , isLoading , error} = useCurrentUser(userId);


  const subtotal = cart.reduce((total ,book)=>total + book.price *(book.quantity || 1),0);

  const delivery = subtotal >= 500 ? 0 : 40 ;

  const total = subtotal + delivery;

  const createOrderMutation = useCreateOrder();
  const updatecartMutation = useUpdateCart();

  const handlePlaceOrder = ()=> {
    if(!selectedAddress) {
      alert("please select a delivery address");
      return ;
    }

    const orderData = {
      id : `ORD-${Date.now()}`,
      userId ,
      name :user.name,
      email:user.email ,
      items : cart.map(book=>({
        id : book.id,
        title : book.title,
        quantity : book.quantity || 1,
        image : book.image
      })),
      
      shippingAddress : selectedAddress,

      PaymentMethod : payment ,

      subtotal,

      delivery,

      total,
      
      status : "pending" ,

      orderAt : new Date().toISOString()
    }
  
    createOrderMutation.mutate(orderData,{
                onSuccess : async(order)=>{
                    try {
                      // Add order to current user's orders
                      await addOrderById({
                          userId: userId,
                          order: order
                      });
                      // Clear cart on server
                      await updatecartMutation.mutateAsync({
                          userId: userId,
                          cart: []
                      });
                      // Clear Redux cart
                      dispatch(clearCart());
                      // Go to confirmation
                      navigate(`/confirm/${order.id}`);

                  } catch (error) {

                      console.error(
                          "Failed to update user/order:",
                          error
                      );

                  }
                },
                onError: (error) => {
                    console.error("Order creation failed:", error);
                }
    });

  }

  

  useEffect(()=>{
    if(user){
      dispatch(setCurrentUser(user))
      dispatch(setCart(user.cart))
      if (user.address?.length > 0) {
            setSelectedAddress(user.address[0]);
        }
      setOrders(user.orders?[...(user.orders)]:[])
    }
    
  },[user,dispatch])

  if(isLoading) return <h1>Loading</h1>
  if(error) return <h1>error</h1>

  console.log(selectedAddress)

  return (
    <div>
      <NavBar />
      <div className='pt-28 md:px-10 px-3'>
          <h1 className='text-4xl  font-semibold'>Check Out</h1>
          <span className='flex items-center gap-3 mt-2'>
            Home  
            <FaAngleRight /> 
            Cart 
            <FaAngleRight />
            <span className='text-[#1D7A46]'>Checkout</span>
          </span>


          <div className='mt-3 grid md:grid-cols-2 gap-5'>
            <div className='flex flex-col gap-3'>
              
                  {step===1 && <CheckoutForm  selectedAddress={selectedAddress} 
                               setSelectedAddress={setSelectedAddress}
                               onContinue={()=>setStep(2)}/>
                  }
                  {step===2&&
                    <PaymentMethod payment={payment} setPayment={setPayment}/>}
              
                
            </div>
            
            <div >
              <CartSummary
                cart={cart}
                subtotal={subtotal}
                delivery={delivery}
                total={total}
                selectedAddress={selectedAddress}
                payment={payment}
                onPlaceOrder={handlePlaceOrder}
            />
              
            </div>
            
          </div>

      </div>
    </div>
  )
}

export default CheckOut