import axios from "axios"


export const fetchAllUsers = async ()=>{
    const response = await axios.get(`http://localhost:3000/users`)
    return response
}