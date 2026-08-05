import { useMutation } from "@tanstack/react-query"
import { updateWishlist } from "../services/api/CurrentUserApi"


export const useUpadateWishlist = () =>{
    return useMutation ({
        mutationFn : updateWishlist
    })
}