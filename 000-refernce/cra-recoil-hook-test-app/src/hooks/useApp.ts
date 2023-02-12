import { useCallback, useState } from "react";


export default function useApp(initCount : number) {
    const [count, setCount] = useState(initCount);
    const onClickCountPlus = useCallback(()=> {
        setCount(prev => prev + 1);
    },[])

    const onClickCountMinus = useCallback(()=> {
        setCount(prev => prev - 1);
    },[])


    return {
        count,
        onClickCountPlus,
        onClickCountMinus
    }
}