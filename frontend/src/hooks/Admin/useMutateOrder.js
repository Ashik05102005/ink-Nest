import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateOrder } from "../../services/api/adminApi"


export const useMutateOrder = ()=>{
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn : updateOrder , 
        onSuccess : (newdata)=>{
            console.log("sucess" , newdata)
            queryClient.invalidateQueries({
                queryKey : ["orders"]
            })
        },
        onError:(error)=>{
            console.error("fail" , error);
            
        }

    })
}