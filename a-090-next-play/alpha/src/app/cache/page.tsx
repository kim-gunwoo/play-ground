'use client'

import axios from "axios";
import { useCallback, useEffect } from "react";


export default function CachePage() {

    const getTest = useCallback(async () => {
        const URL = 'https://jsonplaceholder.typicode.com/photos';
        const cacheStoreage = await caches.open('test');
        const resCache = await cacheStoreage.match(URL);

        try {
            if (resCache) {
                const resultCache = await resCache.json();
                console.log('resultCache ', resultCache);
            } else {
                const res = await fetch(URL);
                cacheStoreage.put(URL, res);
            }
        } catch (error) {

        }
    }, [])

    useEffect(() => {
        getTest();
    }, [])


    return <div>
        cache page
    </div>
}