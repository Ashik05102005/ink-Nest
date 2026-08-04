import {email, z} from "zod"

// const INITIALSTATE ={name:'',email:'',password:'',confirm:''}

export const RegisterSchema = z.object({
    name : z
            .string()
            .min(3,"Full name must contain at least 3 charecters ") ,

    email : z   
            .string()
            .min(1, "Email is required")
            .email("Please enter a valid email"),

    password : z        
            .string()
            .min(6,"Password must contain at least 6 characters ")
            .max(20,"Password cannot exceed 20 characters") ,

    confirm : z
            .string()
            .min(1,"Please confirm your password")
})
.refine((data)=>data.password === data.confirm , {
    message : "Passwords do not match",
    path : ["confirm"]
});