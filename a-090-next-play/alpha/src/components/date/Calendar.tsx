import React, { useState } from "react"
import dayjs from "dayjs"
import "./style.css"
import 'dayjs/locale/ko'

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

export default function Calendar() {
    dayjs.locale('ko')

    const todayObj = dayjs();
    const [dayObj, setDayObj] = useState(dayjs())

    const thisYear = dayObj.year()
    const thisMonth = dayObj.month()
    const daysInMonth = dayObj.daysInMonth()

    const dayObjOf1 = dayjs(`${thisYear}-${thisMonth + 1}-1`)
    const weekDayOf1 = dayObjOf1.day()

    const dayObjOfLast = dayjs(`${thisYear}-${thisMonth + 1}-${daysInMonth}`)
    const weekDayOfLast = dayObjOfLast.day()

    const handlePrev = () => {
        setDayObj(dayObj.subtract(1, "month"))
    }

    const handleNext = () => {
        setDayObj(dayObj.add(1, "month"))
    }

    return (
        <div className="calendar">
            <div className="header">
                <button type="button" className="nav nav--prev" onClick={handlePrev}>
                    &lt;
                </button>
                <div className="datetime">{dayObj.format("YYYY MMM")}</div>
                <button type="button" className="nav nav--prev" onClick={handleNext}>
                    &gt;
                </button>
            </div>
            <div className="week-container">
                {weekDays.map(d => (
                    <div className="week-cell" key={d}>
                        {d}
                    </div>
                ))}
            </div>
            <div className="day-container">
                {Array(weekDayOf1).fill('').map((_, i) => {
                    const _date = dayObjOf1.subtract(weekDayOf1 - i, "day").date();
                    return <div className="day-cell day-cell--faded" key={i}>
                        {_date}
                    </div>
                })}

                {Array.from({ length: daysInMonth }, (_, i) => i).map(i => (
                    <div
                        className={`day-cell day-cell--in-month${i + 1 === todayObj.date() &&
                            thisMonth === todayObj.month() &&
                            thisYear === todayObj.year()
                            ? " day-cell--today"
                            : ""
                            }`}
                        key={i}
                    >
                        {i + 1}
                    </div>
                ))}

                {Array.from({ length: 6 - weekDayOfLast }, (_, i) => i).map(i => (
                    <div className="day-cell day-cell--faded" key={i}>
                        {dayObjOfLast.add(i + 1, "day").date()}
                    </div>
                ))}
            </div>
        </div>
    )
}