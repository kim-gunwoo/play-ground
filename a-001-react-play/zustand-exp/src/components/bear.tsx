import { useBearStore } from "@/zustand/store"


export default function Bear() {
    const { bears, addABear } = useBearStore(state => state)
    return <div>
        bear :  <input type="text" value={bears} onChange={addABear} />
    </div>
}