'use client'


interface IProps {
    // inputRef?: React.MutableRefObject<HTMLInputElement | null>;
    inputRef?: any;
    desc?: string;
}

export default function Input(
    {
        inputRef,
        desc
    }: IProps
) {


    return <div>
        <input type="text" ref={inputRef} />
        {desc && desc}
    </div>
}