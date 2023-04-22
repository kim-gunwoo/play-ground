import { FormSelectorFamily, formAtom, nameAtom, nameSelector } from "@/atom/form"
import { useRecoilValue } from "recoil"


export default function Name() {
    // const {name} = useRecoilValue(formAtom)
    // const name = useRecoilValue(nameSelector)
    // const name = useRecoilValue(nameSelector)
    const name = useRecoilValue(FormSelectorFamily("name"));
    // const name = useRecoilValue(nameAtom)

    return <div>
        name : {name} <br />
    </div>
}