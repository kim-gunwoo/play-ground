'use client'
import Table, { TableCellType } from "@/components/table/Table"
import { useMemo, useState } from "react";
import * as XLSX from 'xlsx'

interface IData {
    name: string,
    age: number,
    addr: string
}

export default function TablePage() {
    const [value, setValue] = useState('');

    const collumns: TableCellType<IData> = useMemo(() => [
        {
            label: 'name', renderCell(data) {
                return (
                    <div style={{ width: '300px' }} >
                        {data.name} <b> {`(${data.age})`}</b >
                    </div >
                )
            }
        },
        { label: 'age', renderCell: (data) => data.age },
        { label: 'addr', renderCell: (data) => data.addr },
        {
            label: 'dom',
            renderLabel(label) {
                return <div>
                    {label}<b>!!</b>
                </div>
            },
            renderCell: () => ''
        },
    ], []);

    let datas = [
        { name: 'ap1', age: 10, addr: 'seoul' },
        { name: 'ap2', age: 120, addr: 'seoul-1' },
        { name: 'ap3', age: 30, addr: 'seoul' },
        { name: 'ap4', age: 110, addr: 'seoul-1' },
    ]
    
    // for (let index = 0; index < 10; index++) {
    //     datas = [...datas, ...datas];
    // }

    const onClick = (data: any[]) => {
        let json = data; 
        for (let index = 0; index < 20; index++) {
            json = [...json, ...json];
        }

        console.log(json.length)

        const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
        const workbook: XLSX.WorkBook = {
            Sheets: { data: worksheet },
            SheetNames: ['data'],
        };
        const buffer = XLSX.write(workbook, {
            bookType: 'xlsx',
            type: 'array',
        });

        console.log(buffer)
    }

    return (
        <div>
            {/* <input onChange={e => setValue(e.target.value)} value={value} /> */}

            <button onClick={() => onClick(datas)}>download</button>

            {/* <Table
                collumns={collumns}
                datas={datas}
            /> */}
            <br />
        </div>
    )
}

