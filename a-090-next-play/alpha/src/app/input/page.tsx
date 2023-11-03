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
        const { value: changedValud } = e.target;
        const targetValue = changedValud.replace(/[^0-9]/g, '');

        const originValue = targetValue.split('');
        const maskingSplit = masking.split('');

        const eMap = new Map<number, string>();

        masking.split('').forEach((v, i) => {
            if ([' ', '-'].includes(v)) {
                eMap.set(i, v);
            }
        })

        let maskingValue = '';
        let count = 0;
        for (let idx in maskingSplit) {
            if (originValue[idx]) {
                let prefix = '';
                if (eMap.has(Number(idx))) {
                    prefix = maskingSplit[idx];
                    count++;
                }

                maskingValue += prefix + originValue[idx];
                continue;
            }

            maskingValue += maskingSplit[idx];
        }

        setValue(targetValue);
        inputRef.current!.value = maskingValue;
        focusing(targetValue.length + count);
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