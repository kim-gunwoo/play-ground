'use client'
import Table, { TableCellType } from "@/components/table/Table"
import { useMemo } from "react";

interface IData {
    name: string,
    age: number,
    addr: string
}

export default function TablePage() {
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
    for (let index = 0; index < 10; index++) {
        datas = [...datas, ...datas];
    }

    return (
        <div>
            <Table
                collumns={collumns}
                datas={datas}
            />
            <br />
        </div>
    )
}