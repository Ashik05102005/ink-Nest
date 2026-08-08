import { useMutation } from "@tanstack/react-query"
import { createOrder } from "../services/api/CurrentUserApi"


export const useCreateOrder = ()=>{
    return useMutation({
        mutationFn:createOrder
    })
}