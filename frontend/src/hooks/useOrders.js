import { useQuery } from "@tanstack/react-query"
import { fetchOrders } from "../services/api/adminApi"



export const useOrders = ()=>{
    return useQuery({
        queryKey : ["orders"],
        queryFn : fetchOrders

    })
}