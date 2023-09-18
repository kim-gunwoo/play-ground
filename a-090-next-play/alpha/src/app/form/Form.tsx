'use client'

import Input from "./Input"
import { InputType } from "./page"


interface IProps {
    // inputRef: React.MutableRefObject<HTMLInputElement | null>
    // inputRef: React.MutableRefObject<HTMLInputElement[] | null>
    inputRef: React.MutableRefObject<InputType>
}

export default function Form(
    { inputRef }: IProps
) {

    return <div>
        <Input inputRef={(el: HTMLInputElement) => {
            // if (inputRef.current) {
            // inputRef.current['name'].el = el
            inputRef.current['name'] = el
            // }
        }} />
        <br />
        <br />
        <br />
        <br />
        <Input inputRef={(el: HTMLInputElement) => {
            inputRef.current['addr'] = el
        }}
        />
        <br />
        <br />
        <br />
        <br />
        <Input inputRef={(el: HTMLInputElement) => {
            inputRef.current['test'] = el
        }} />
        <br />
        <br />
        <br />
        <br />
    </div>
}