import { useQuery } from "@tanstack/react-query"
import { fetchOrderById } from "../services/api/fetchOrderById"

export const useFetchOrderById = (id)=>{
    return useQuery({
        queryKey : ["Orders",id],
        queryFn :()=>fetchOrderById(id),
        enabled : !!id
    })
}