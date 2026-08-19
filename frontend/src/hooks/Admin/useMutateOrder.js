import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateOrder, updateUserOrderStatus } from "../../services/api/adminApi"


export const useMutateOrder = ()=>{
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn :async({id,userId,status})=> {
            await updateOrder({id,status});
            await updateUserOrderStatus({userId , orderId:id , status});
        } , 
        onSuccess : (newdata)=>{
            console.log("sucess" , newdata)
            queryClient.invalidateQueries({
                queryKey : ["orders"]
            });
        },
        onError:(error)=>{
            console.error("fail" , error);
            
        }

    })
}