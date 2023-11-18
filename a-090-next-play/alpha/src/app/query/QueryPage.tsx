'use client'

import {  useQueryClient } from "@tanstack/react-query";
import useSearchQuery from "./hooks/useSearchQuery"

interface IQueryPage {
    initialData: any
}

export default function QueryPage({ initialData }: IQueryPage) {
    // console.log('initialData', initialData);
    const { data ,refetch } = useSearchQuery();
    // console.log(data)

    const queryClient = useQueryClient();
    console.log(queryClient)

    const onClick = () => {
        queryClient.invalidateQueries()
        // queryClient.invalidateQueries(['posts'])
        // queryClient.invalidateQueries({ queryKey: ['posts'] })
    }

    return <div>
        <div>
            <button onClick={onClick}>invalidate query</button>
            <button onClick={() => refetch()}>refetch query</button>
        </div>
    </div>
}