import { useCallback } from "react";
import { useSetRecoilState } from "recoil";
import { AppState } from "../recoils/App.recoil";


export default function useAppRecoil() {
    const setCount = useSetRecoilState(AppState)
    const onClickCountPlus = useCallback(()=> {
        setCount(prev => prev + 1);
    },[setCount])

    const onClickCountMinus = useCallback(()=> {
        setCount(prev => prev - 1);
    },[setCount])


    return {
        onClickCountPlus,
        onClickCountMinus
    }
}