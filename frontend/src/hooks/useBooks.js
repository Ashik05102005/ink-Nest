import { useQuery } from "@tanstack/react-query";
import { fetchBooks } from "../services/api/fetchBooks";


export function useBooks(){
    return useQuery({
        queryKey : ['books'],
        queryFn :fetchBooks
    })
}
