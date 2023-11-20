'use client'

import { useEffect, useRef, useState } from "react"

export default function InputPage() {
    const masking = '### ###-####';
    const inputRef = useRef<HTMLInputElement>(null);
    const [value, setValue] = useState('');

    const focusing = (count: number) => {
        inputRef.current!.selectionStart = count;
        inputRef.current!.selectionEnd = count;
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const originValue = e.target.value.replace(/[^0-9]/g, '').split('');

        const maskingSplit = masking.split('');
        const eMap = new Map<number, string>();

        masking.split('').forEach((v, i) => {
            if ([' ', '-'].includes(v)) {
                eMap.set(i, v);
            }
        })

        let count = 0;
        const currentValue = maskingSplit.map((v, idx) => {
            if (originValue[idx - count]) {
                if (eMap.has(idx)) {
                    count++;
                    return eMap.get(idx);
                }
                return originValue[idx - count];
            }
            return v;
        }).join('');

        inputRef.current!.value = currentValue;
        const changedValue = currentValue.replace(/[^0-9]/g, '');
        setValue(changedValue);
        focusing(changedValue.length + count);

    }

    useEffect(() => {
        inputRef.current!.value = masking;
    }, [])

    return <div>
        <input
            type="text"
            onChange={handleChange}
            onClick={() => focusing(value.length + 1)}
            ref={inputRef}
        />
        {value}
    </div>
}