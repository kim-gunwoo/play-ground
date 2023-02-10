import { act, renderHook } from '@testing-library/react';
import { RecoilRoot, useRecoilSnapshot, useRecoilState, useRecoilValue } from 'recoil';
import { AppState } from '../recoils/App.recoil';
import useApp from './useApp';
import useAppRecoil from './useAppRecoil';

describe('useApp hook test', () => {
    
    
    describe('plus', () => {
        const { result } = renderHook(() => useApp(0));

        it("plus test", () => {

            act(() => {
                result.current.onClickCountPlus();
            });
            
            expect(result.current.count).toEqual(1);
            
            act(() => {
                result.current.onClickCountMinus();
                result.current.onClickCountMinus();
            });

            expect(result.current.count).toEqual(-1);
        })
        
    })


    describe('recoil test', () => {
        const wrapper = ({ children }: {children: React.ReactNode}) => <RecoilRoot>{children}</RecoilRoot>

        const {result} = renderHook(
            () => {
                const [state] = useRecoilState(AppState)
                return {
                    state,
                    ...useAppRecoil(),
                }
            },
            { wrapper}
        )
        
        expect(result.current.state).toBe(0)

        // act(() => result.current.setState(10))
        // Normal setRecoilState works
        act(() => {
            result.current.onClickCountPlus()
        })
        expect(result.current.state).toBe(1)

        act(() => result.current.onClickCountPlus())
        // custom setState now also work
        expect(result.current.state).toBe(2)

        act(() => {
            result.current.onClickCountMinus()
            result.current.onClickCountMinus()
            result.current.onClickCountMinus()
        })
        expect(result.current.state).toBe(-1)
    })

    // describe('recoil test', () => {
    //     const wrapper = ({ children }:{children: React.ReactNode}) => <RecoilRoot>{children}</RecoilRoot>;

    //     // const { result } = renderHook(() => useAppRecoil(),{ wrapper: RecoilRoot });
    //     const { result } = renderHook(() => useAppRecoil(),{ wrapper });
    //     // const { result } = renderHook(() =>{
    //     //     const count = useRecoilValue(AppState);
    //     //     const {onClickCountPlus,onClickCountMinus } = useAppRecoil();
    //     //     return {  count,onClickCountPlus,onClickCountMinus}
    //     // },{ wrapper });
    //     const { result: resultValue} = renderHook(()=> useRecoilValue(AppState),{ wrapper});

    //     // const {result : snapshot} = renderHook(() => useRecoilSnapshot(), {wrapper: RecoilRoot});
    //     // const { result: resultValue} = renderHook(()=> useRecoilValue(AppState),{ wrapper: RecoilRoot });

    //     it("plus test", () => {
    //         // expect(result.current.count).toEqual(0);
    //         expect(resultValue.current).toEqual(0);

    //         act(() => {
    //             result.current.onClickCountPlus();
    //         });
            
    //         // expect(snapshot.current.getLoadable(AppState).contents).toEqual(1);
    //         expect(resultValue.current).toEqual(1);
    //         // expect(result.current.count).toEqual(1);
            
    //         act(() => {
    //             result.current.onClickCountMinus();
    //             result.current.onClickCountMinus();
    //         });

    //         // expect(result.current.count).toEqual(-1);
    //     })
        
    // })
    
})

