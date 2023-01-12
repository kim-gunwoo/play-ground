import { act, renderHook } from '@testing-library/react';
import useDateQuarter from './useDateQuarter';

describe('useDateQuarter', () => {
    it('init', () => {
        const { result } = renderHook(() => useDateQuarter());
        expect(result.current.isFromShow).toBe(false);
        expect(result.current.isToShow).toBe(false);
        expect(result.current.fromYearMonth).toBe(undefined);
        expect(result.current.toYearMonth).toBe(undefined);
        expect(result.current.quarter.First.isClick).toBe(false);
        expect(result.current.quarter.Second.isClick).toBe(false);
        expect(result.current.quarter.Third.isClick).toBe(false);
        expect(result.current.quarter.Fourth.isClick).toBe(false);
    });

    describe("quarter => changeQuearter", () => {
        
        it("First", () => {
            const { result } = renderHook(() => useDateQuarter());
            const year = new Date().getFullYear();

            act(() => {
                result.current.quarter.First.changeQuarter(year);
            });
            
            expect(result.current.quarter.First.isClick).toBe(true);
            expect(result.current.quarter.Second.isClick).toBe(false);
            expect(result.current.quarter.Third.isClick).toBe(false);
            expect(result.current.quarter.Fourth.isClick).toBe(false);
            expect(result.current.fromYearMonth).toStrictEqual(new Date(year, 1 - 1, 1))
            expect(result.current.toYearMonth).toStrictEqual(new Date(year, 3, 0))
        });

        it("Second", () => {
            const { result } = renderHook(() => useDateQuarter());
            const year = new Date().getFullYear();

            act(() => {
                result.current.quarter.Second.changeQuarter(year);
            });
            
            expect(result.current.quarter.First.isClick).toBe(false);
            expect(result.current.quarter.Second.isClick).toBe(true);
            expect(result.current.quarter.Third.isClick).toBe(false);
            expect(result.current.quarter.Fourth.isClick).toBe(false);
            expect(result.current.fromYearMonth).toStrictEqual(new Date(year, 4 - 1, 1))
            expect(result.current.toYearMonth).toStrictEqual(new Date(year, 6, 0))
        });

        it("Third", () => {
            const { result } = renderHook(() => useDateQuarter());
            const year = new Date().getFullYear();

            act(() => {
                result.current.quarter.Third.changeQuarter(year);
            });
            
            expect(result.current.quarter.First.isClick).toBe(false);
            expect(result.current.quarter.Second.isClick).toBe(false);
            expect(result.current.quarter.Third.isClick).toBe(true);
            expect(result.current.quarter.Fourth.isClick).toBe(false);
            expect(result.current.fromYearMonth).toStrictEqual(new Date(year, 7 - 1, 1))
            expect(result.current.toYearMonth).toStrictEqual(new Date(year, 9, 0)) 
        });

        it("Fourth", () => {
            const { result } = renderHook(() => useDateQuarter());
            const year = new Date().getFullYear();

            act(() => {
                result.current.quarter.Fourth.changeQuarter(year);
            });
            
            expect(result.current.quarter.First.isClick).toBe(false);
            expect(result.current.quarter.Second.isClick).toBe(false);
            expect(result.current.quarter.Third.isClick).toBe(false);
            expect(result.current.quarter.Fourth.isClick).toBe(true);
            expect(result.current.fromYearMonth).toStrictEqual(new Date(year, 10 - 1, 1))
            expect(result.current.toYearMonth).toStrictEqual(new Date(year, 12, 0)) 
        });
    })

    describe("visibleControl", () => {
        it("fromMonthPickerVisibleControl", () => {
            const { result } = renderHook(() => useDateQuarter());
            act(()=> {
                result.current.fromMonthPickerVisibleControl.showFromMonthPicker()
            })
            expect(result.current.isFromShow).toBe(true);
            act(()=> {
                result.current.fromMonthPickerVisibleControl.hideFromMonthPicker()
            })
            expect(result.current.isFromShow).toBe(false);
        })
        it("toMonthPickerVisibleControl", () => {
            const { result } = renderHook(() => useDateQuarter());
            act(()=> {
                result.current.toMonthPickerVisibleControl.showToMonthPicker()
            })
            expect(result.current.isToShow).toBe(true);
            act(()=> {
                result.current.toMonthPickerVisibleControl.hideToMonthPicker()
            })
            expect(result.current.isToShow).toBe(false);
        })
    })

    describe("changeDate", () => {
        const { result } = renderHook(() => useDateQuarter());
        const changeDate = new Date(2022, 1, 1);

        act(()=> result.current.fromMonthPickerVisibleControl.showFromMonthPicker());
        expect(result.current.isFromShow).toBe(true);

        act(()=> result.current.changeFromDate(changeDate));

        expect(result.current.fromYearMonth).not.toEqual(new Date());
        expect(result.current.fromYearMonth).toStrictEqual(changeDate);
        expect(result.current.isFromShow).toBe(true);
        expect(result.current.isToShow).toBe(true);
        expect(result.current.quarter.First.isClick).toBe(false);
        expect(result.current.quarter.Second.isClick).toBe(false);
        expect(result.current.quarter.Third.isClick).toBe(false);
        expect(result.current.quarter.Fourth.isClick).toBe(false);

        act(()=> result.current.changeToDate(changeDate));
        expect(result.current.toYearMonth).not.toEqual(new Date());
        expect(result.current.toYearMonth).toStrictEqual(changeDate);
        expect(result.current.isFromShow).toBe(false);
        expect(result.current.isToShow).toBe(true);
        expect(result.current.quarter.First.isClick).toBe(false);
        expect(result.current.quarter.Second.isClick).toBe(false);
        expect(result.current.quarter.Third.isClick).toBe(false);
        expect(result.current.quarter.Fourth.isClick).toBe(false);

        act(()=> result.current.changeFromDate(changeDate));
        expect(result.current.isToShow).toBe(false);
    })
});
