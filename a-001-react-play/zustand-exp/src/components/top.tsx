import useZutand from "@/zustand/store"

export default function Top(){
    const text = useZutand(state => state.text)
    
    return <div>
        {text}
    </div>
}