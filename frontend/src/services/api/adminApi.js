import axios from "axios"

export const fetchOrders = async()=>{
    const response = await axios.get(`http://localhost:3000/orders`);
    return response.data
} 