import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateUser } from "../../services/api/adminApi"


export const useMutateUser =()=>{

    const queryClient = useQueryClient();
    
    return useMutation({
        mutationFn : updateUser,
        onSuccess :  ()=>{
            queryClient.invalidateQueries({
                queryKey : ["users"]
            })
        }
    })
}