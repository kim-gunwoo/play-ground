import { useCallback, useRef } from 'react';

export default function useObserver<T extends HTMLElement>() {
    const observerRef = useRef<IntersectionObserver>();
    const targetRef = useCallback(
        (node: T) => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
            observerRef.current = new IntersectionObserver(entries => {
                if (entries[0].isIntersecting) {
                    // 감지 영역에 있을 경우
                } else {
                    // 감지 영역 바깥에 있을 경우
                }
            },{ threshold: 0 });

        if (node) {
            observerRef.current.observe(node);
        }
    },[]);

    return { targetRef };
}