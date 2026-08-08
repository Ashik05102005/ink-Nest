import { useQuery } from "@tanstack/react-query";
import {fetchBookById } from "../services/api/fetchBookById"

export const useBookById = (id)=>{
    return useQuery({
        queryKey : ["books",1],
        queryFn : ()=>fetchBookById(id)
    })
}