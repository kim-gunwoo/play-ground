import { setTimeout } from "timers/promises";
import Counter from "./Coutnter";



async function getData() {
    // await setTimeout(() => 'success', 5000);
    // const res = await setTimeout(1000, 'success');
    // const road = '호매실로'
    // const res = await fetch(`https://dapi.kakao.com/v2/local/search/address.json?query=${road}&page=1&size=1`,{
    //     cache: 'no-store',
    //     headers: {
    //         authorization: 'KakaoAK 44c92e472ea17d511963d34e07a3369d'
    //     }
    // })
    const res = await fetch(`http://localhost:9999/api`, { cache: 'no-store' });
    console.log(res.status)
    const data = await res.json();
    return data;
}


export default async function CounterPage() {
    const data = await getData();
    return <div>
        {/* {data.msg} */}
        <Counter />
    </div>
}