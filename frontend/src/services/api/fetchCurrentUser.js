import axios from "axios";

export const fetchCurrentUser = async(id)=>{
    const response = await axios.get(`http://localhost:3000/users/${id}`);
    // console.log(response);
    return response.data

}