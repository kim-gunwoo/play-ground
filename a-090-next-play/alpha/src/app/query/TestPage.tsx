'use client'


import api from '@/api';
import { Todos } from '@/api/Todos';
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
    queryKey: TQueryKey,
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

    // useQuery(queryKeys, queryFn, queryOptions);


    return useQuery({ queryKey, queryFn, ...queryOptions });
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
        // const response =  await axios.get<TRes>('https://jsonplaceholder.typicode.com/todos')
        // const response =  await axios.get<TRes>('https://jsonplaceholder.typicode.com/todos')
        // const response = await Todos.getAll();
        const response = await api.Todos.getAll();
        // const response = await api.Todos2.getAll();
        return response;
    } catch (error) {
        throw error;
    }
}

function useGetTodo(
    queryOptions?: UseQueryOptions<TQueryFnData, TError, TData>,
    // queryOptions?: Omit<UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'queryKey' | 'queryFn'>,
    // queryOptions?: Omit<UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'queryKey' | 'queryFn'>,
    // queryOptions?: Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey' | 'queryFn'>,
) {
    const queryClient = useQueryClient();

    // const prefetchTodos = async () => {
    //     // The results of this query will be cached like a normal query
    //     await queryClient.prefetchQuery({
    //         queryKey: ['todos'],
    //         queryFn: getTodos,
    //     })
    // }
    // return useQuery(['todos'], getTodos, queryOptions);

    // useQuery(['todos'], async () => await api.Todos.getAll(), queryOptions);

    useQuery({
        queryKey: ['todos'],
        queryFn: async () => await api.Todos.getAll(),
        ...queryOptions
    });

    useQuery<TQueryFnData, TError, TData>({
        queryKey: ['todos'],
        queryFn: async () => await api.Todos.getAll(),
        ...queryOptions
    });
    return
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
    const queryClient = useQueryClient()
    const query = useQuery({
        queryKey: ['todos'],
        queryFn: ({ signal }) => api.Todos.getAll({ signal }),
    });

    // const { data } = usePage(['todos'], getTodos, { enabled: isEnabled })

    // const { error, data: data2 } = useGetTodo();

    // console.log(data,data2)
    // console.log(data?.data[0].title)

    console.log(query.isFetching, query.isLoading, query.isPending, query.status)

    // useEffect(() => {
    //     (async () => {
    //         const res = await getTodos()
    //         console.log(res, res?.data[0].title)
    //     })()
    // }, [])

    return <div>
        <div>
            {/* <button onClick={
                () => setEnabled(p => !p)
            }>toggle</button> */}
            <button onClick={
                () => query.refetch()
            }>refetch</button>
            <button onClick={(e) => {
                e.preventDefault();
                queryClient.cancelQueries({ queryKey: ['todos'] });
                console.log('?????')
            }} >cancel</button>
        </div>
        <div></div>
    </div>
}