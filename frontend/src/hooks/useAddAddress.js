import { useMutation } from "@tanstack/react-query"
import { updateAddress } from "../services/api/CurrentUserApi"

export const useAddAddress = ()=>{
    return useMutation({
        mutationFn: updateAddress
    })
}