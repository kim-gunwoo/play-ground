import QueryPage from "./QueryPage";
import TestPage from "./TestPage";
import { getPosts } from "./api/posts";






export default async function QuerysPage() {
    // const initialData = await getPosts()

    // console.log(initialData)

    // return <QueryPage initialData={initialData} />
    return <TestPage />
}