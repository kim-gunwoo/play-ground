import Axios from "axios"


const axios = Axios.create()


const getPosts = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return res.data;
}

export {
    getPosts
}