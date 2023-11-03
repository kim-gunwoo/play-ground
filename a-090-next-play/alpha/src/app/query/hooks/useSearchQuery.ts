import { useQuery } from "@tanstack/react-query";
import * as postApi from '../api/posts'





export default function useSearchQuery() {
    // return useQuery(
    //     ['test'],
    //     async () => {
    //         return await postApi.getPosts()
    //     }
    // )
    return useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            return await postApi.getPosts()
        },
        retry: false,
        // retry: true,
        refetchOnWindowFocus: false,
        staleTime: 1000 * 100,
        cacheTime: 1000 * 500
    })
}