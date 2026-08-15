import React,{use, useState} from 'react'
import Navbar from '../../components/Admin.jsx/Navbar'
import OrderStats from '../../components/Admin.jsx/Orders/OrderStats'
import { CiSearch } from "react-icons/ci";
import OrderFilterByStatus from '../../components/Admin.jsx/Orders/OrderFilterByStatus';
import OrderFilterbyPayment from '../../components/Admin.jsx/Orders/OrderFilterbyPayment';
import { useOrders } from '../../hooks/useOrders';
import OrderSort from '../../components/Admin.jsx/Orders/OrderSort';
import OrdersList from '../../components/Admin.jsx/Orders/OrdersList';


function AdminOrders() {
  const [serach, setSearch ] = useState('');
  const [statusFilter,setStatusFilter] = useState('all');
  const [paymentFilter , setPaymentFilter] = useState('all');
  const [sortBy ,setSortBy] = useState('newest')

  const {data:orders, isLoading , error} = useOrders();
  if(isLoading) return <h1>Loading...</h1>;

  const filteredorders = orders.filter((order)=>{
    const customerName = order?.shippingAddress?.name || "";
    const customerEmail = order?.shippingAddress?.email || "";
    const orderId = order.id || "";

    //search
    const searchmatch = 
            customerName.toLowerCase().includes(serach.toLowerCase()) ||
            customerEmail.toLowerCase().includes(serach.toLowerCase()) ||
            orderId.toLowerCase().includes(serach.toLowerCase());
    //status
    const statusMatch = 
                  statusFilter === "all" ||
                  order.status?.toLowerCase() === statusFilter.toLowerCase();

    //payment
    const paymentMatch = 
                  paymentFilter === "all"  ||
                  order.PaymentMethod?.toLowerCase() === paymentFilter.toLowerCase();

    return searchmatch && statusMatch && paymentMatch;
  });
  //sort...
  const sortedOrders = [...filteredorders].sort((a,b)=>{

    switch(sortBy){

      case "newest":
      return new Date(b.orderAt) - new Date(a.orderAt);

      case "oldest":
        return new Date(a.orderAt) - new Date(b.orderAt);

      case "highest":
        return Number(b.total) - Number(a.total);

      case "lowest":
        return Number(a.total) - Number(b.total);

      default:
        return 0;
      }
  })


  console.log(paymentFilter)
  return (
    <div>
      <OrderStats />
      <div className='p-3 flex'>
        
        {/* Search  */}
        <div className=' md:w-1/3  relative '>
          <input
          onChange={(e)=>setSearch(e.target.value)}
          className='outline outline-gray-300 py-2 px-4 rounded w-full bg-white focus:border-[#1D7A46] focus:ring-1 focus:ring-[#1D7A46] '
          ></input>
          <div className='absolute top-0  h-full right-0 flex items-center px-2 text-gray-500 text-xl'>
            <CiSearch />
          </div>
        </div> 

        <div className='flex  w-full  justify-end gap-4'>
          {/* satusfilter */}
          <OrderFilterByStatus statusFilter={statusFilter} setStatusFilter={setStatusFilter}/>

          {/* payment method filter  */}
          <OrderFilterbyPayment paymentFilter={paymentFilter} setPaymentFilter={setPaymentFilter}/>

          {/* Sort  */}
          <OrderSort sortBy = {sortBy} setSortBy = {setSortBy}/>
        </div>

      </div>
      <OrdersList orders={sortedOrders} />

    </div>
  )
}

export default AdminOrders