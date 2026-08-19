import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteBooks } from "../../services/api/adminApi"


export const useDeleteBooks = ()=>{
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn : deleteBooks ,

        onSuccess : ()=>{
            queryClient.invalidateQueries({
                queryKey:["books"]
            })
        }
    })
}