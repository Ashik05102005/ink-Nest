import axios from "axios";



export async function createUser(data){
    const response = await axios.post(`http://localhost:3000/users` , data);
    return response
}