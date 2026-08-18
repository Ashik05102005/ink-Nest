import axios from "axios"

export const fetchOrders = async()=>{
    const response = await axios.get(`http://localhost:3000/orders`);
    return response.data
} 

export const fetchUsers = async()=>{
    const response = await axios.get(`http://localhost:3000/users`);
    return response.data;
}

export const updateUser = async({id,data})=>{
    const response = await axios.patch(`http://localhost:3000/users/${id}`,data );
    return response.data ;
}

export const updateOrder = async({id,data})=>{
    // console.log(id , status);
    const response = await axios.patch(`http://localhost:3000/orders/${id}`,data );
    return response.data ;
}

export const addBooks = async(book)=>{
    const response = await axios.post (`http://localhost:3000/books` , book);
    return response.data;
}