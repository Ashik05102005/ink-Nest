import { useQuery } from "@tanstack/react-query"
import { fetchUsers } from "../services/api/adminApi"


export const useUsers = ()=>{
    return useQuery({
        queryKey:["users"],
        queryFn :fetchUsers
    })
}