import { useMutation, useQueries, useQueryClient } from "@tanstack/react-query"
import { updateBooks } from "../../services/api/adminApi"


export const useUpdateBooks = ()=>{
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn : updateBooks,

        onSuccess : ()=> {
            queryClient.invalidateQueries({
                queryKey : ["books"]
            })
        }
    })
}