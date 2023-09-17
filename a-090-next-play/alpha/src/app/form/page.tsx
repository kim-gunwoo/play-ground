'use client'

import { useRef } from "react"
import Form from "./Form";
import { setTimeout } from "timers";

interface ElType {
    el?: HTMLInputElement;
    desc?: string;
}

// export interface InputType {
//     name: ElType;
//     addr: ElType;
//     test: ElType;
// }
export interface InputType {
    name?: HTMLInputElement;
    addr?: HTMLInputElement;
    test?: HTMLInputElement;
}



export default async function FormPage() {

    const inputRef = useRef<InputType>({
        // name : {},
        // addr : {},
        // test : {}
    });
    // const errorDesc = useState<{}>()

    const onSubmit = () => {
        // if (!inputRef.current) {
        //     return;
        // }
        console.log('first')
        // if(inputRef.current['name'].el){
        //     inputRef.current['name'].el.focus();
        // }
        // if(inputRef.current['addr'].el){
        //     inputRef.current['addr'].el.focus();
        //     inputRef.current['addr'].desc = 'asdlfjasldifajsldf';
        // }
        // if(inputRef.current['name'].el){
        //     inputRef.current['name'].el.focus();
        // }
        if(inputRef.current['test']){
            inputRef.current['test'].focus();
        }
    }

    return <div>
        <Form inputRef={inputRef} />
        <button onClick={onSubmit}>onSubmit</button>
    </div>
}