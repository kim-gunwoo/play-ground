'use client';

import dayjs from "dayjs"
import { useState } from "react"

export default function DayJs() {
    const [day, setDay] = useState(dayjs(dayjs().format('YYYY-MM-DD')).toDate())

    const changeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newday = dayjs(e.target.value);
        setDay(newday.toDate())
    }


    return (
        <div>
            <div>
                <input type="date" value={dayjs(day).format('YYYY-MM-DD')}  onChange={changeDate} />
            </div>
            <div>
                {dayjs(day).hour(0).minute(0).toISOString()}
                ~
                {dayjs(day).hour(23).minute(59).toISOString()}
            </div>
            <div>
                {day.toISOString()}
            </div>
            <div>
                {dayjs(day).toISOString()}
            </div>
            <div>
                {dayjs(day).format('YYYY-MM-DD')}
            </div>
        </div>
    )
}