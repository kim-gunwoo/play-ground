'use client'
import useNaverMap, { Naver } from "@/app/map/hooks/useNaverMap";
import { useCallback, useEffect, useRef, useState } from "react";

export default function NaverPage() {
    const { mapElement, load } = useNaverMap<HTMLDivElement>();
    const [origin, setOrigin] = useState<{ lng: number, lat: number }>();
    const [latlng, setLatlng] = useState<{ lng: number, lat: number }>();
    const mapRef = useRef<{ naver: Naver, map: any, marker: any }>();

    const changeCenter = useCallback(() => {
        if (!mapRef.current || !origin) { return; }
        const { lat, lng } = origin;
        const { naver, map, marker } = mapRef.current;
        const originCenter = naver.maps.LatLng(lat, lng);
        map.setCenter(originCenter);
        marker.setPosition(originCenter);
    }, [origin, mapRef]);

    useEffect(() => {
        load((naver) => {
            const mapOptions = {
                zoom: 17,
                zoomControl: false,
                mapDataControl: false,
                logoControlOptions: {
                    position: naver.maps.Position.LEFT_BOTTOM
                },
                scaleControlOptions: {
                    position: naver.maps.Position.LEFT_BOTTOM
                },
            };
            const map = new naver.maps.Map(mapElement.current, mapOptions);
            const marker = new naver.maps.Marker({
                position: map.getCenter(),
                map,
            });
            marker.setMap(map);

            map.addListener('center_changed', () => {
                const { x: lng, y: lat } = map.getCenter();
                setLatlng({ lng, lat });
                const position = map.getCenter();
                marker.setPosition(position);
            })

            map.addListener('click', (e: any) => {
                const { x: lng, y: lat } = e.latlng;
                setOrigin({ lng, lat });
            });

            mapRef.current = { naver, map, marker };
        });
    }, [load]);

    return <div ref={mapElement} style={{ maxWidth: '200px', height: '200px' }} >
        <button
            style={{ position: 'absolute', zIndex: 900 }}
            onClick={changeCenter}
        >button</button>
    </div>

}