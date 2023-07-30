import { act, renderHook } from "@testing-library/react";
import useIsOpen from "./useIsOpen";

test('isOpen의 초기값은 false다', () => {
    const { result } = renderHook(() => useIsOpen());
    
    expect(result.current.isOpen).toBe(false);

    act(() => {
        result.current.setIsOpen(true);
    });

    expect(result.current.isOpen).toBe(true);
});