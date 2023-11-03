'use client'

import { useLayoutEffect, useRef } from "react"
import { useMapContent } from "./contexts/MapContext"

export default function RenderMapPage() {
    const naver = useMapContent();
    const mapElement = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (mapElement.current) {
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
                const position = map.getCenter();
                marker.setPosition(position);
            })
        }
    }, []);


    return <div ref={mapElement} style={{ maxWidth: '200px', height: '200px' }} ></div>
}