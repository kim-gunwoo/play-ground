import { useCounter } from "@/stores/count"

export default function GlobalZustandStateCaseB() {
    const cats = useCounter(state => state.cats);

    return <div>
        <div>{cats}</div>
    </div>
}