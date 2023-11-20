'use client'

import { clientKey } from "@/constant/naver";
import { rejects } from "assert";
import { resolve } from "path";
import { useCallback, useEffect, useImperativeHandle, useRef, useState } from "react";
import { render } from "react-dom";
import { renderToString } from 'react-dom/server'


declare global {
    interface Window {
        naver: any;
    }
}

declare namespace naver.maps {
    type MapOptions = any;
};

type Naver = any;

interface NaverMapProps {
    mark?: (map: any) => any;
}

export default function NaverMap(props: NaverMapProps) {
    const mapElement = useRef<HTMLDivElement>(null);

    const loadNaverMap = useCallback(() => {
        const id = 'naverMapScript';
        let naverMapScript = document.getElementById(id) as HTMLScriptElement;

        if (!naverMapScript) {
            naverMapScript = document.createElement('script');
            naverMapScript.id = id;
            // naverMapScript.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${clientKey}`;
            naverMapScript.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=y8p4fpp84k`;
            naverMapScript.defer = true;
            document.head.appendChild(naverMapScript);

            return new Promise((resolve, reject) => {
                naverMapScript.addEventListener('load', () => {
                    console.log('Naver success', `${id} loaded complete - ${new Date().getTime()}`)
                    resolve(window.naver);
                });
                naverMapScript.addEventListener('error', (e) => {
                    console.log('Naver error', `${id} loaded complete - ${new Date().getTime()}`)
                    reject(false);
                });
            });
        }

        return Promise.resolve(window.naver);
    }, []);


    const createMap = useCallback((naver: Naver) => {
        // const naver = window.naver;
        if (!mapElement.current || !naver) return;

        // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
        const location = new naver.maps.LatLng(37.5656, 126.9769);
        const mapOptions: naver.maps.MapOptions = {
            center: location,
            zoom: 17,
            zoomControl: false,
            // zoomControlOptions: {
            //     position: naver.maps.Position.TOP_RIGHT,
            // },
        };

        const map = new naver.maps.Map(mapElement.current, mapOptions);

        // map.setOptions({ //지도 인터랙션 끄기
        //     draggable: false,
        //     pinchZoom: false,
        //     scrollWheel: false,
        //     keyboardShortcuts: false,
        //     disableDoubleTapZoom: true,
        //     disableDoubleClickZoom: true,
        //     disableTwoFingerTapZoom: true
        // });

        // const marker = new naver.maps.Marker({
        //     position: map.getCenter(),
        //     icon: {
        //         // content: renderToHTML`<div ref={${markerElement}}>test</div>`
        //         // content: renderToString(<div>sdfaslfajsdif</div>)
        //     },
        //     // map,
        // });
        const marker = new naver.maps.Marker(props.mark && props.mark(map))
        marker.setMap(map);

        // var areaArr = new Array();  // 지역을 담는 배열 ( 지역명/위도경도 )
        // areaArr.push(
        //     /*지역구 이름*/			/*위도*/					/*경도*/
        //     { location: '강남', lat: '37.4959854', lng: '127.0664091' },  // 강남구 중심좌표
        //     { location: '강동', lat: '37.5492077', lng: '127.1464824' },  // 강동구 중심좌표
        //     { location: '강북', lat: '37.6469954', lng: '127.0147158' },  // 강북구 중심좌표
        //     { location: '강서', lat: '37.5657617', lng: '126.8226561' },  // 강서구 중심좌표
        //     { location: '관악', lat: '37.4603732', lng: '126.9536086' },  // 관악구 중심좌표
        //     { location: '광진', lat: '37.5574120', lng: '127.0796211' },  // 광진구 중심좌표
        //     { location: '구로', lat: '37.4954856', lng: '126.858121' },  // 구로구 중심좌표
        //     { location: '금천', lat: '37.4600969', lng: '126.9001546' },  // 금천구 중심좌표
        //     { location: '노원', lat: '37.6377533', lng: '127.0754623' },  // 노원구 중심좌표
        //     { location: '도봉', lat: '37.6658609', lng: '127.0317674' },  // 도봉구 중심좌표
        //     { location: '동대문', lat: '37.5838012', lng: '127.0507003' },  // 동대문구 중심좌표
        //     { location: '동작', lat: '37.4965037', lng: '126.9443073' },  // 동작구 중심좌표
        //     { location: '마포', lat: '37.5676507', lng: '126.8854549' },  // 마포구 중심좌표
        //     { location: '서대문', lat: '37.5820369', lng: '126.9356665' },  // 서대문구 중심좌표
        //     { location: '서초', lat: '37.4769528', lng: '127.0378103' },  // 서초구 중심좌표
        //     { location: '성동', lat: '37.5506753', lng: '127.0409622' },  // 성동구 중심좌표
        //     { location: '성북', lat: '37.606991', lng: '127.0232185' },  // 성북구 중심좌표
        //     { location: '송파', lat: '37.5177941', lng: '127.1127078' },  // 송파구 중심좌표
        //     { location: '양천', lat: '37.5270616', lng: '126.8561534' },  // 양천구 중심좌표
        //     { location: '영등포', lat: '37.520641', lng: '126.9139242' },  // 영등포구 중심좌표
        //     { location: '용산', lat: '37.5311008', lng: '126.9810742' },  // 용산구 중심좌표
        //     { location: '은평', lat: '37.6176125', lng: '126.9227004' },  // 은평구 중심좌표
        //     { location: '종로', lat: '37.5990998', lng: '126.9861493' },  // 종로구 중심좌표
        //     { location: '중구', lat: '37.5579452', lng: '126.9941904' },  // 중구 중심좌표
        //     { location: '중랑구', lat: '37.598031', lng: '127.092931' }   // 중랑구 중심좌표
        // );

        // for (var i = 0; i < areaArr.length; i++) {
        //     // 지역을 담은 배열의 길이만큼 for문으로 마커와 정보창을 채워주자 !

        //     const marker = new naver.maps.Marker({
        //         map: map,
        //         title: areaArr[i].location, // 지역구 이름 
        //         position: new naver.maps.LatLng(areaArr[i].lat, areaArr[i].lng) // 지역구의 위도 경도 넣기 
        //     });

        //     marker.setMap(map);
        // }

        naver.maps.Event.addListener(map, 'center_changed', function () {
            const position = map.getCenter();
            marker.setPosition(position);
        });
    }, []);


    useEffect(() => {
        loadNaverMap().then(createMap);
    }, [createMap, loadNaverMap]);

    return <div ref={mapElement} style={{ maxWidth: '100%', height: '300px' }} />
}
