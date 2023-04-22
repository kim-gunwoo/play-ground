import { FormAtom, FormSelectorFamily, addrAtom, addrSelector, ageAtom, ageSelector, nameAtom, nameSelector } from "@/atom/form"
import { useSetRecoilState } from "recoil"

export default function Form() {
    const changeName = useSetRecoilState(nameAtom)
    const changeAddr = useSetRecoilState(addrAtom)
    const changeAge = useSetRecoilState(ageAtom)

    const changeSelectName = useSetRecoilState(nameSelector);
    const changeSelectAddr = useSetRecoilState(addrSelector);
    const changeSelectAge = useSetRecoilState(ageSelector);

    const changeForm = useSetRecoilState(FormAtom);

    const changeSelectorFamilyName = useSetRecoilState(FormSelectorFamily("name"));
    const changeSelectorFamilyAddr = useSetRecoilState(FormSelectorFamily("addr"));

    return <div>
        name : <input type="text" onChange={e => changeName(e.target.value)} /><br />
        name-selector : <input type="text" onChange={e => changeSelectName(e.target.value)} /><br />
        addr : <input type="text" onChange={e => changeAddr(e.target.value)} /><br />
        addr-selector : <input type="text" onChange={e => changeSelectAddr(e.target.value)} /><br />
        age add :<button onClick={() => changeAge(p => p + 1)}>add</button><br />
        age-selector add :<button onClick={() => changeSelectAge(p => p + 1)}>add</button><br />

        name-form : <input type="text" onChange={e => changeForm(prev => ({ ...prev, name: e.target.value }))} /><br />
        addr-form : <input type="text" onChange={e => changeForm(prev => ({ ...prev, addr: e.target.value }))} /><br />
        age-form : <button onClick={e => changeForm(prev => ({ ...prev, age: prev.age + 1 }))} >
            add</button><br />

        name-form-selector-family : <input type="text" onChange={e => changeSelectorFamilyName(e.target.value)} /><br />
        addr-form-selector-family : <input type="text" onChange={e => changeSelectorFamilyAddr(e.target.value)} /><br />
    </div>
}