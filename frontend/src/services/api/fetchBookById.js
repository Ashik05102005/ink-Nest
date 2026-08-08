import axios from "axios"

export const fetchBookById = async(id)=>{
    const response = await axios.get(`http://localhost:3000/books/${id}`);
    return response.data
}