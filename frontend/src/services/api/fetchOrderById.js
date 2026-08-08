import axios from "axios"



export const fetchOrderById = async(id)=>{
    const response = await axios.get(`http://localhost:3000/orders/${id}`);
    return response.data ;
}