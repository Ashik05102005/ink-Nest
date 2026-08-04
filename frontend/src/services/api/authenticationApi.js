import axios from "axios"

const URL ='http://localhost:3000/users'

export const checkEmail = async (email)=>{
    const response = await axios.get(`${URL}?email=${email}`);
    console.log(response.data)
    return response.data;
}

export const loginCheck = ()=>{

}