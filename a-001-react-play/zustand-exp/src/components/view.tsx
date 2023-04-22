import useZutand from "@/zustand/store"

export default function View(){
    const bears = useZutand(state => state.bears)
    return<div>{bears}</div>
}