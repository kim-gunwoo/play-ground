'use client'

import { useState } from "react"

// i dont know .... 

class TestForm {
    name?: string;
    age?: number;

    constructor(name?: string, age?: number) {
        this.name = name;
        this.age = age;
    }

    // setValue({ name: value }: { [index: string]: string | number }) {
    //     this[name] = value;
    // }

    isOrd() {
        return this.age && this.age > 10;
    }
}


export default function StateMangement() {
    const [state, setState] = useState<TestForm>(new TestForm());
    // const st = new TestForm(state)
    

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        console.log(name, value);
        // const cl = new TestForm();
        // cl[name] = value;
        // cl.name = value;
        // setState(cl);
    }

    return <div>
        state-management <br />
        <input name="name" type="text" value={state.name} onChange={onChange} />
        {state.name} <br />
        <input name="age" type="text" value={state.age} onChange={
            e => {
                // cl.age = Number(e.target.value)
                // setState(cl)
            }
        } />
        {state.age} <br />
        isord? : {state.isOrd() ? 'Y' : 'N'} <br />
    </div>
}