'use client'

import { useCallback, useDeferredValue, useState, useTransition } from "react"

export default function Search() {
    const [search, setSearch] = useState('');
    const [data, setData] = useState('');
    // const [isPending, startTransition] = useTransition();
    // const deferredQuery = useDeferredValue(search);

    const onChangeInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value);
        // startTransition(async () => {
        //     const res = await fetch(
        //         `https://www.juso.go.kr/addrlink/addrLinkApi.do?confmKey=U01TX0FVVEgyMDIyMDYyOTE2NDcwMDExMjc0ODU%3D&keyword=${e.currentTarget.value}&currentPage=1&countPerPage=50&resultType=json`
        //     )
        //     const resData = await res.json();
        //     setData(resData);
        // })
    }, [])

    return <div>
        <input type="text" value={search} onChange={onChangeInput} />
        <div>
            {/* {isPending ? <div>loading...</div> : <div>{search}</div>} */}
            
        </div>
    </div>
}