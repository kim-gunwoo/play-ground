import { useEffect } from "react"

interface IHeader<T> {
    collumns: Omit<TableCell<T>, 'renderCell'>[],
}

export function Header<T>({ collumns }: IHeader<T>) {
    return (
        <thead >
            <tr>
                {collumns.map((collumn, idx) => (
                    <th key={`collumns-${collumn.label}-${idx}`}>
                        {collumn.renderLabel ? collumn.renderLabel(collumn.label) : collumn.label}
                    </th>
                ))}
            </tr >
        </thead>
    )
}

interface IBody<T> {
    collumns: Pick<TableCell<T>, 'renderCell' | 'label'>[],
    datas: T[]
}

export function Body<T>({ collumns, datas }: IBody<T>) {
    return (
        <tbody>
            {datas.map((row, idx) => (
                // <tr key={`body-data-row-${idx}`}>
                //     {collumns.map((col, idx) =>
                //         <td key={`col-${col.label}-${idx}`}>{col.renderCell(row)}</td>
                //     )}
                // </tr >
                <Row key={`body-data-row-${idx}`} collumns={collumns} row={row} />
            ))}
        </tbody>
    )
}

interface IRow<T> {
    collumns:  Pick<TableCell<T>, 'renderCell' | 'label'>[],
    row: T;
}

export function Row<T>({collumns, row}:IRow<T>) {
    return (
        <tr>
            {collumns.map((col, idx) =>
                <td key={`col-${col.label}-${idx}`}>{col.renderCell(row)}</td>
            )}
        </tr>
    )
}

export type TableCell<T> = {
    label: string,
    renderCell: (data: T) => React.ReactNode
    renderLabel?: (label: string) => React.ReactNode
}
export type TableCellType<T> = TableCell<T>[]


interface ITable<T> {
    collumns: TableCellType<T>,
    datas: T[]
}

export default function Table<T>({ collumns, datas }: ITable<T>) {
    return (
        <table>
            <Header collumns={collumns} />
            <Body
                collumns={collumns}
                datas={datas}
            />
        </table >
    )
}