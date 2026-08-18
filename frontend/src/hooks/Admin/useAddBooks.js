import { useMutation, useQueryClient } from "@tanstack/react-query"
import { addBooks } from "../../services/api/adminApi"


export const useAddBooks = ()=>{

    const queryClient = useQueryClient();
    
    return useMutation({
        mutationFn :addBooks,

        onSuccess : ()=>{
            queryClient.invalidateQueries({
                queryKey : ["books"]
            })
        }
    })
}