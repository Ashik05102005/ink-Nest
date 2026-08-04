import { useMutation } from "@tanstack/react-query";
import {createUser} from "../services/api/createUser"


export function useCreateUser(){
    return useMutation ({
        mutationFn :createUser
    })
}