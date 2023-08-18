import Calendar from '@/components/date/Calendar';
import dayjs from 'dayjs'
import { useState } from 'react'


function DateInput() {
    console.log(dayjs.locale())
    const [date, setDate] = useState<string>('');
    const [selectedDate, setSelectedDate] = useState<Date>();

    const onChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        const changeValue = value.replace(/[a-zA-Z]/, '');

        const formatDate = covertFormat(changeValue.replace(/[a-zA-Z]/, ''));
        const changeDate = dayjs(changeValue, 'YYYY-MM-DD');

        if (changeDate.isValid()) {
            setSelectedDate(changeDate.toDate());
        }

        setDate(
            formatDate.length < 10
                ? formatDate : covertFormat(changeDate.format('YYYY-MM-DD'))
        );
    }

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const { key } = e;
        const escapeKeys = ['ArrowLeft', 'ArrowRight', 'Backspace', '-', 'a'];

        if (/^\d+$/.test(key) || escapeKeys.includes(key)) {
            return;
        }

        e.preventDefault();
    }

    const covertFormat = (str: string) => {
        return str.replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3').slice(0, 10);
    }

    return (
        <div>
            <input type="text"
                placeholder={dayjs(new Date()).format('YYYY-MM-DD')}
                value={date}
                onChange={onChangeDate}
                onKeyDown={onKeyDown}
                maxLength={10}
            />
            <Calendar />
        </div>
    )
}

export default DateInput;