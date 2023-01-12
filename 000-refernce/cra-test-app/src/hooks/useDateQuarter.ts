import { useCallback, useMemo, useReducer } from 'react';

export enum DateQuarterMonthReducerActionType {
    SHOW = 'show',
    HIDE = 'hide',
    FETCH = 'fetch',
    QUATER_CLICK = 'quater-click',
    RESET = 'reset',
}

export interface DateQuarterMonthStateInterface {
    isFromShow: boolean;
    isToShow: boolean;
    fromYearMonth?: Date;
    toYearMonth?: Date;
    isFirstQuarter: boolean;
    isSecondQuarter: boolean;
    isThirdQuarter: boolean;
    isFourthQuarter: boolean;
}

export enum Quater {
    First = 'isFirstQuarter',
    Second = 'isSecondQuarter',
    Third = 'isThirdQuarter',
    Fourth = 'isFourthQuarter',
}

export interface QuarterType {
    isClick: boolean;
    changeQuarter: (year: number) => void;
}

export interface QuartersInterface {
    First: QuarterType;
    Second: QuarterType;
    Third: QuarterType;
    Fourth: QuarterType;
}

type Payload = Partial<DateQuarterMonthStateInterface>;

export interface DateQuarterMonthDispatchInterface {
    type: DateQuarterMonthReducerActionType;
    payload?: Payload;
}

function dateQuarterReducer(
    state: DateQuarterMonthStateInterface,
    { type, payload }: DateQuarterMonthDispatchInterface,
): DateQuarterMonthStateInterface {
    switch (type) {
        case DateQuarterMonthReducerActionType.SHOW:
            return {
                ...state,
                ...payload,
            };
        case DateQuarterMonthReducerActionType.HIDE:
            return {
                ...state,
                ...payload,
            };
        case DateQuarterMonthReducerActionType.FETCH:
            return {
                ...state,
                ...payload,
                isFirstQuarter: false,
                isSecondQuarter: false,
                isThirdQuarter: false,
                isFourthQuarter: false,
                isToShow: !state.toYearMonth,
                isFromShow: !state.fromYearMonth,
            };
        case DateQuarterMonthReducerActionType.QUATER_CLICK:
            return {
                ...state,
                ...payload,
            };
        case DateQuarterMonthReducerActionType.RESET:
            return {
                ...state,
                ...payload,
            };
    }
}

function useDateQuarter(
    defaultInit?: {
        fromYearMonth?: Date;
        toYearMonth?: Date;
    },
    reducer: (
        state: DateQuarterMonthStateInterface,
        { type, payload }: DateQuarterMonthDispatchInterface,
    ) => DateQuarterMonthStateInterface = dateQuarterReducer,
) {
    const initializeData = useMemo(
        () => ({
            isFromShow: false,
            isToShow: false,
            fromYearMonth: defaultInit?.fromYearMonth,
            toYearMonth: defaultInit?.toYearMonth,
            isFirstQuarter: false,
            isSecondQuarter: false,
            isThirdQuarter: false,
            isFourthQuarter: false,
        }),
        [defaultInit?.fromYearMonth, defaultInit?.toYearMonth],
    );
    const [
        {
            isFromShow,
            isToShow,
            fromYearMonth,
            toYearMonth,
            isFirstQuarter,
            isSecondQuarter,
            isThirdQuarter,
            isFourthQuarter,
        },
        dispatch,
    ] = useReducer(reducer, initializeData);

    const showFromMonthPicker = useCallback(() => {
        dispatch({
            type: DateQuarterMonthReducerActionType.SHOW,
            payload: { isFromShow: true },
        });
    }, []);
    const hideFromMonthPicker = useCallback(() => {
        dispatch({
            type: DateQuarterMonthReducerActionType.HIDE,
            payload: { isFromShow: false },
        });
    }, []);
    const showToMonthPicker = useCallback(() => {
        dispatch({
            type: DateQuarterMonthReducerActionType.SHOW,
            payload: { isToShow: true },
        });
    }, []);
    const hideToMonthPicker = useCallback(() => {
        dispatch({
            type: DateQuarterMonthReducerActionType.HIDE,
            payload: { isToShow: false },
        });
    }, []);
    const changeFromDate = useCallback((changeDate?: Date) => {
        dispatch({
            type: DateQuarterMonthReducerActionType.FETCH,
            payload: {
                fromYearMonth: changeDate,
            },
        });
    }, []);
    const changeToDate = useCallback((changeDate?: Date) => {
        dispatch({
            type: DateQuarterMonthReducerActionType.FETCH,
            payload: {
                toYearMonth: changeDate,
            },
        });
    }, []);
    const resetDate = useCallback(() => {
        dispatch({ type: DateQuarterMonthReducerActionType.RESET, payload: initializeData });
    }, [initializeData]);
    const changeQuarter = useCallback(
        (quaterType: Quater, year: number, isClick: boolean) => {
            const fromMonthArray = [],
                toMonthArray = [];
            let fromYearMonth, toYearMonth;

            if (isFirstQuarter && quaterType !== Quater.First) {
                fromMonthArray.push(1);
                toMonthArray.push(3);
            }
            if (isSecondQuarter && quaterType !== Quater.Second) {
                fromMonthArray.push(4);
                toMonthArray.push(6);
            }
            if (isThirdQuarter && quaterType !== Quater.Third) {
                fromMonthArray.push(7);
                toMonthArray.push(9);
            }
            if (isFourthQuarter && quaterType !== Quater.Fourth) {
                fromMonthArray.push(10);
                toMonthArray.push(12);
            }

            if (isClick) {
                switch (quaterType) {
                    case Quater.First:
                        fromMonthArray.push(1);
                        toMonthArray.push(3);
                        break;
                    case Quater.Second:
                        fromMonthArray.push(4);
                        toMonthArray.push(6);
                        break;
                    case Quater.Third:
                        fromMonthArray.push(7);
                        toMonthArray.push(9);
                        break;
                    case Quater.Fourth:
                        fromMonthArray.push(10);
                        toMonthArray.push(12);
                        break;
                }
            }

            if (fromMonthArray.length > 0 && toMonthArray.length > 0) {
                fromYearMonth = new Date(year, Math.min(...fromMonthArray) - 1, 1);
                toYearMonth = new Date(year, Math.max(...toMonthArray), 0);
            }

            dispatch({
                type: DateQuarterMonthReducerActionType.QUATER_CLICK,
                payload: {
                    [quaterType]: isClick,
                    fromYearMonth,
                    toYearMonth,
                },
            });
        },
        [isFourthQuarter, isFirstQuarter, isThirdQuarter, isSecondQuarter],
    );

    return {
        isFromShow,
        isToShow,
        fromYearMonth,
        toYearMonth,
        quarter: {
            First: {
                isClick: isFirstQuarter,
                changeQuarter: (year: number) => changeQuarter(Quater.First, year, !isFirstQuarter),
            },
            Second: {
                isClick: isSecondQuarter,
                changeQuarter: (year: number) => changeQuarter(Quater.Second, year, !isSecondQuarter),
            },
            Third: {
                isClick: isThirdQuarter,
                changeQuarter: (year: number) => changeQuarter(Quater.Third, year, !isThirdQuarter),
            },
            Fourth: {
                isClick: isFourthQuarter,
                changeQuarter: (year: number) => changeQuarter(Quater.Fourth, year, !isFourthQuarter),
            },
        } as QuartersInterface,
        dispatch,
        fromMonthPickerVisibleControl: {
            showFromMonthPicker,
            hideFromMonthPicker,
        },
        toMonthPickerVisibleControl: {
            showToMonthPicker,
            hideToMonthPicker,
        },
        changeFromDate,
        changeToDate,
        resetDate,
    };
}

export default useDateQuarter;
