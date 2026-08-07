import { useMutation } from "@tanstack/react-query"
import { updateCart } from "../services/api/CurrentUserApi"


export const useUpdateCart = ()=>{
    return useMutation({
        mutationFn : updateCart
    })
};