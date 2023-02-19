import { useQuery } from "@tanstack/react-query"
import axios, { AxiosError } from "axios"
import { Suspense } from "react"


const helloKeys = {
    all: ['hello'] as const,
    lists: () => [...helloKeys.all, 'list'] as const,
    list: (filters: string) => [...helloKeys.lists(), { filters }] as const,
    details: () => [...helloKeys.all, 'detail'] as const,
    detail: (id: number) => [...helloKeys.details(), id] as const,
  }

export default function Home() {
    const { isFetching ,data } = useQuery<{ name : string }, AxiosError>(helloKeys.all, async () => {
        return await axios("/api/hello").then(res => res.data)
        // return await axios("/api/hello");
      },{
        suspense: true,
        retry: false,
        cacheTime: 0,
        staleTime: 0
      })

    //   console.log(isFetching)
    
      return (
        // <Suspense fallback={<div>loading</div>}>
          <div>
            {data?.name}
          </div>
        // </Suspense>
      )
}