'use client'


import {
    QueryFunction,
    QueryOptions,
    UseBaseQueryOptions,
    useInfiniteQuery,
    useQuery,
    useQueryClient,
    UseQueryOptions,
} from '@tanstack/react-query';
import axios, { AxiosError, AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';


type TQueryKey = string[];
type TQueryFnData = unknown;
type TError = unknown;
type TData = unknown;

// type QueryFunction<T> = () => Promise<T>;
// type QueryFunction = () => Promise<any>;

// type Query

function usePage(
    queryKeys: TQueryKey,
    queryFn: QueryFunction<TQueryFnData, TQueryKey>,
    queryOptions?: Omit<UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'queryKey' | 'queryFn'>,
) {
    const queryClient = useQueryClient();

    // const prefetchTodos = async () => {
    //     // The results of this query will be cached like a normal query
    //     await queryClient.prefetchQuery({
    //         queryKey: ['todos'],
    //         queryFn: getTodos,
    //     })
    // }

    return useQuery(queryKeys, queryFn, queryOptions);
}


type TReq = any;
type TRes = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}[];


const getTodos = async (): Promise<AxiosResponse<TRes, TReq>> => {
    try {
        return await axios.get<TRes>('https://jsonplaceholder.typicode.com/todos')
    } catch (error) {
        throw error;
    }
}


export default function TestPage() {
    // const a = usePage(['test'], getDate, {});
    const [isEnabled, setEnabled] = useState(false);
    
    // const { data } = useQuery<AxiosResponse<TRes, TReq>, AxiosError, TRes>(['todos'], getTodos, {
    //     enabled: isEnabled,
    //     select(data) {
    //         return data.data
    //     },
    // })

    const {data} = usePage(['todos'], getTodos, {
        enabled :isEnabled
    })


    console.log(data)
    // console.log(data?.data[0].title)


    useEffect(() => {
        (async () => {
            const res = await getTodos()
            console.log(res, res?.data[0].title)
        })()
    }, [])





    return <div>
        <div>
            <button onClick={
                () => setEnabled(p => !p)
            }>toggle</button>
        </div>
        <div></div>
    </div>
}