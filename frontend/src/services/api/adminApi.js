import axios from "axios"

export const fetchOrders = async()=>{
    const response = await axios.get(`http://localhost:3000/orders`);
    return response.data
} 

export const fetchUsers = async()=>{
    const response = await axios.get(`http://localhost:3000/users`);
    return response.data;
}
// edit user status
export const updateUser = async({id,data})=>{
    const response = await axios.patch(`http://localhost:3000/users/${id}`,data );
    return response.data ;
}



//add new books
export const addBooks = async(book)=>{
    const response = await axios.post (`http://localhost:3000/books` , book);
    return response.data;
}

export const updateBooks = async({id,data})=>{
    const response = await axios.patch(`http://localhost:3000/books/${id}` , data);
    return response.data ;
}

// edit order status
export const updateOrder = async({id,status})=>{
    // console.log(id , status);
    const response = await axios.patch(`http://localhost:3000/orders/${id}`,{status:status} );
    return response.data ;
}

export const updateUserOrderStatus = async({userId , orderId , status})=>{
    const userResponse = await axios.get(`http://localhost:3000/users/${userId}`);
    const user = userResponse.data ;
    const updatedOrders = user.orders.map(order=>
                                            order.id===orderId
                                            ?{...order,status : status}
                                            :order);
    const response = await axios.patch(`http://localhost:3000/users/${userId}` , {orders : updatedOrders});
    return response.data; 
}

export const deleteBooks = async(id)=>{
    const response = await axios.patch(`http://localhost:3000/books/${id}`,{deleted : true})
}