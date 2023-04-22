import useZutand from "@/zustand/store"

export default function Main() {
    const changeText = useZutand(state => state.changeText)
    const change = useZutand(state => state.changeForm)

    return <div>
        changeText : <input type="text" onChange={(e) =>changeText(e.target.value)}/>
        <br />
        change : <input type="text" onChange={(e) =>change({name: e.target.value})}/>
    </div>
}