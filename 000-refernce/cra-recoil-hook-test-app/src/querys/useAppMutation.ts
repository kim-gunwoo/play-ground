import { MutateOptions, useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";


interface ResponseData {
    res1 : string,
    
}

interface RequestData {
    req1: string
}

const postTest = async (requestData: RequestData): Promise<ResponseData> => {
    try {
        return await axios.post("/",requestData);
    } catch (error) {
        throw error;
    }
}


export default function useAppMutaion(options ?: MutateOptions<ResponseData , AxiosError, RequestData>) {
    return useMutation<ResponseData, AxiosError, RequestData>(
        async (requestData) => await postTest(requestData),
        {
            retry: false,
            ...options
        }
    );
}