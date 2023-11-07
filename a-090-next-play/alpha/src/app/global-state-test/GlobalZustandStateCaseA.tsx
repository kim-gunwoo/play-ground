import { useCounter } from "@/stores/count"


export default function GlobalZustandStateCaseA() {
    const bears = useCounter(state => state.bears);
    return <div>
        <div>{bears}</div>
    </div>
}