import useZutand from "@/zustand/store"



export default function Count() {
    const increasePopulation = useZutand(state => state.increasePopulation)

    return <div>
        <button onClick={increasePopulation}>add</button>
    </div>
}