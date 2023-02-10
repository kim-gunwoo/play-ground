import { useQuery } from "@tanstack/react-query";





export default function useAppQuery() {
    return useQuery<{test: string}, Error>(
        ["queryKeys"],
        ()=> {
            return {test: ""}
        },
        {
            retry: false,
        }
    );
}