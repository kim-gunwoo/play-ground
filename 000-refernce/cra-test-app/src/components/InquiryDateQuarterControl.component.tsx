import React, { useCallback, useMemo, useState } from 'react';

import { QuartersInterface, Quater } from '../hooks/useDateQuarter';

interface InquiryDateQuarterControlComponentInterface {
    quarter: QuartersInterface;
    minYear: number;
    fromYearMonth?: Date;
    toYearMonth?: Date;
    resetDate: () => void;
    onSubmit: () => void;
    onChangeYear: (year: number) => void;
    showFromMonthPicker: () => void;
    showToMonthPicker: () => void;
}

function InquiryDateQuarterControlComponent({
    quarter,
    minYear,
    fromYearMonth,
    toYearMonth,
    resetDate,
    onSubmit,
    onChangeYear,
    showFromMonthPicker,
    showToMonthPicker,
}: InquiryDateQuarterControlComponentInterface) {
    const currentYear = useMemo(() => new Date().getFullYear(), []);
    const [selectYear, setSelectYear] = useState<number>(currentYear);
    const yearList = useMemo(
        () =>
            new Array(currentYear - minYear).fill(currentYear).map((year, idx) => ({
                label: (year - idx).toString(),
                value: year - idx,
            })),
        [currentYear, minYear],
    );

    const changeYear = useCallback(
        (changeYear: number) => {
            setSelectYear(changeYear);
            onChangeYear(changeYear);
            resetDate();
        },
        [onChangeYear, resetDate],
    );

    const isDisabledQuaterDateCheck = useCallback((year: number, month: number) => {
        const currentDate = new Date();
        const checkDate = new Date(year, month, 5);
        return currentDate.getTime() < checkDate.getTime();
    }, []);

    const isDisabledQuaterButton = useCallback(
        (type: Quater) => {
            switch (type) {
                case Quater.First:
                    return quarter.Third.isClick || quarter.Fourth.isClick || isDisabledQuaterDateCheck(selectYear, 3);
                case Quater.Second:
                    return quarter.Fourth.isClick || isDisabledQuaterDateCheck(selectYear, 6);
                case Quater.Third:
                    return quarter.First.isClick || isDisabledQuaterDateCheck(selectYear, 9);
                case Quater.Fourth:
                    return (
                        quarter.First.isClick || quarter.Second.isClick || isDisabledQuaterDateCheck(selectYear + 1, 0)
                    );
            }
        },
        [
            isDisabledQuaterDateCheck,
            quarter.First.isClick,
            quarter.Fourth.isClick,
            quarter.Second.isClick,
            quarter.Third.isClick,
            selectYear,
        ],
    );

    return (
        <div >
            <div >
                <div >
                    <button
                        onClick={() => quarter.First.changeQuarter(selectYear)}
                        disabled={isDisabledQuaterButton(Quater.First)}
                    >
                        1분기
                    </button>
                    <button
                        onClick={() => quarter.Second.changeQuarter(selectYear)}
                        disabled={isDisabledQuaterButton(Quater.Second)}
                    >
                        2분기
                    </button>
                    <button
                        onClick={() => quarter.Third.changeQuarter(selectYear)}
                        disabled={isDisabledQuaterButton(Quater.Third)}
                    >
                        3분기
                    </button>
                    <button
                        onClick={() => quarter.Fourth.changeQuarter(selectYear)}
                        disabled={isDisabledQuaterButton(Quater.Fourth)}
                    >
                        4분기
                    </button>
                </div>
            </div>
            <div >
            </div>
        </div>
    );
}

export default React.memo(InquiryDateQuarterControlComponent);
