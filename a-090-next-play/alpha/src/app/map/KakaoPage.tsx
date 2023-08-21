'use client'
import { useEffect } from "react";
import useKakaoMap from "./hooks/useKakaoMap";

export default function KakaoPage() {
    const { mapElement, load } = useKakaoMap<HTMLDivElement>();

    useEffect(() => {
        load((kakao) => {
            const options = { //지도를 생성할 때 필요한 기본 옵션
                center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
                level: 3 //지도의 레벨(확대, 축소 정도)
            };
            const map = new kakao.maps.Map(mapElement.current, options);
        });
    }, [load])

    return <div ref={mapElement} style={{ maxWidth: '100%', height: '300px' }} />
}