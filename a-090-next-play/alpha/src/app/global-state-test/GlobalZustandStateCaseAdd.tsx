import { useCounter } from "@/stores/count"


export default function GlobalZustandStateCaseAdd() {
    const {
        increaseBears,
        increaseCats
    } = useCounter();

    return <div>
        <button onClick={increaseBears}>add bears</button>
        <button onClick={increaseCats}>add cats</button>
    </div>
}