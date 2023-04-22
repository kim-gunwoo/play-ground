import useZutand from "@/zustand/store"



export default function Footer (){
    const removeAllBears = useZutand(state => state.removeAllBears)

    return <div>
        <button onClick={removeAllBears}>reset</button>
    </div>
}