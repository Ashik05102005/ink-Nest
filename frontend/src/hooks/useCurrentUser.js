import { useQuery } from "@tanstack/react-query";
import { fetchCurrentUser } from "../services/api/fetchCurrentUser";


export function useCurrentUser (id){
    return useQuery({
        queryKey : ["currentUser",id],
        queryFn : ()=>fetchCurrentUser(id),
        enabled : !!id,
    });
};