import { useCallback, useRef } from "react";

declare global {
    interface Window {
        kakao: any;
    }
}

type Kakao = any;

const kakaoMapKey = "";

export default function useKakaoMap<T extends HTMLElement>() {
    const mapElement = useRef<T>(null);

    const load = useCallback((afterLoad: (kakao: Kakao) => void) => {
        if (window.kakao) {
            afterLoad(window.kakao);
            return;
        }

        const script = document.createElement('script');
        script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${kakaoMapKey}&autoload=false&libraries=services`;
        document.head.appendChild(script);

        script.onload = () => {
            window.kakao.maps.load(() => {
                afterLoad(window.kakao);
            });
        };
    }, []);


    return {
        mapElement,
        load
    }

}