'use client'
import useNaverMap from "@/app/map/hooks/useNaverMap";
// import NaverMap from "./naver";
import { useEffect, useRef, useState } from "react";

export default function NaverPage() {
    const { mapElement, loadMap, load } = useNaverMap<HTMLDivElement>();
    const [origin, setOrigin] = useState<{ lng: number, lat: number }>();
    // const orginRef = useRef<{ lng: number, lat: number }>();
    const [latlng, setLatlng] = useState<{ lng: number, lat: number }>();

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
                // icon: {
                // content: renderToHTML`<div ref={${markerElement}}>test</div>`
                // content: renderToString(<div>sdfaslfajsdif</div>)
                // },
                map,
            });
            marker.setMap(map);

            // const locationBtnHtml = `<button disabled="${!orginRef.current}">center</button>`;
            // console.log(locationBtnHtml, origin)

            // const customControl = new naver.maps.CustomControl(locationBtnHtml, {
            //     // position: naver.maps.Position.TOP_LEFT
            //     position: naver.maps.Position.BOTTOM_RIGHT
            //     // position: naver.maps.Position.RIGHT_BOTTOM
            // });

            // customControl.setMap(map);
            // naver.maps.Event.addDOMListener(customControl.getElement(), 'click', function () {
            //     map.setCenter(new naver.maps.LatLng(origin?.lat, origin?.lng));
            // });
            naver.maps.Event.once(map, 'init', function () {
                // customControl.setMap(map);
                // naver.maps.Event.addDOMListener(customControl.getElement(), 'click', function () {
                //     console.log(origin);
                //     map.setCenter(new naver.maps.LatLng(origin?.lat, origin?.lng));
                // });
            });

            map.addListener('center_changed', () => {
                const { x: lng, y: lat } = map.getCenter();
                setLatlng({ lng, lat });
                const position = map.getCenter();
                marker.setPosition(position);
            })

            map.addListener('click', () => {
                const tm128 = naver.maps.TransCoord.fromLatLngToTM128(map.getCenterPoint());
                const naverCoord = naver.maps.TransCoord.fromTM128ToNaver(tm128)
                console.log('tm128', tm128);
                console.log('naverCoord', naverCoord)
                console.log(map.getCenterPoint())
                console.log(map.getCenter())
                const { x: lng, y: lat } = map.getCenter();
                setOrigin({ lng, lat });
                // if(orginRef.current){
                //     orginRef.current = { lng, lat };
                // }

                // naver.maps.Service.reverseGeocode({
                //     coords: new naver.maps.LatLng(lat, lng),
                //     orders: 'roadaddr'
                // }, (status: any, response: any) => {
                //     console.log(response)
                //     console.log(response.v2.address.roadAddress)
                //     // console.log(status, response.result.address)
                // })
            });

        });

        // loadMap().then(naver => {
        // loadMap(naver => {
        //     if (!mapElement.current) {
        //         return;
        //     }

        //     const location = new naver.maps.LatLng(37.5656, 126.9769);
        //     // const mapOptions: naver.maps.MapOptions = {
        //     const mapOptions = {
        //         // center: location,
        //         zoom: 17,
        //         zoomControl: false,
        //         // mapTypeControl: true
        //         // zoomControlOptions: {
        //         //     position: naver.maps.Position.TOP_RIGHT,
        //         // },
        //     };

        //     const map = new naver.maps.Map(mapElement.current, mapOptions);

        //     // console.log(naver.maps.Service)

        //     // console.log(naver.maps.Service.CoordType.TM128)
        //     // console.log(naver.maps.Service.CoordinatesType.TM128)

        //     // naver.maps.Event.addListener(map, 'center_changed', function () {
        //     //     console.log(map)
        //     //     const tm128 = naver.maps.TransCoord.fromLatLngToTM128(maps);

        //     //     console.log(">>>>",tm128)


        //     //     naver.maps.Service.reverseGeocode({
        //     //         // location: tm128,
        //     //         coords: tm128,
        //     //         // coordType: naver.maps.Service.CoordType.TM128
        //     //     }, (status: any, response: any) => {
        //     //         console.log(status, response.result.address)
        //     //     })

        //     //     const position = map.getCenter();
        //     //     console.log(position);
        //     //     // marker.setPosition(position);
        //     // });

        //     map.addListener('click', () => {
        //         const tm128 = naver.maps.TransCoord.fromLatLngToTM128(map.getCenterPoint());
        //         const naverCoord = naver.maps.TransCoord.fromTM128ToNaver(tm128)
        //         console.log('tm128', tm128);
        //         console.log('naverCoord', naverCoord)
        //         console.log(map.getCenterPoint())
        //         console.log(map.getCenter())
        //         const { x: lng, y: lat } = map.getCenter();
        //         // coords: nw naver.maps.LatLng(37.3595316, 127.1052133),

        //         naver.maps.Service.reverseGeocode({
        //             coords: new naver.maps.LatLng(lat, lng),
        //             orders: 'roadaddr'                    
        //         }, (status : any, response: any) => {
        //             console.log(response)
        //             console.log(response.v2.address.roadAddress)
        //             // console.log(status, response.result.address)
        //         })
        //     })



        //     // map.addListener('click', () => {
        //     //     console.log('click')
        //     //     const tm128 = naver.maps.TransCoord.fromLatLngToTM128(e.coord);
        //     //     naver.maps.Service.reverseGeocode({
        //     //         location: tm128,
        //     //         coordType: naver.maps.Service.CoordType.TM128
        //     //     }, (status: any, response: any) => {
        //     //         console.log('click',status, response.result.items)
        //     //     })
        //     // });

        //     // naver.maps.Event.addListener(map, 'center_changed', function (e:any) {
        //     //     console.log("center_changed",map, e.coord)
        //     //     const tm128 = naver.maps.TransCoord.fromLatLngToTM128(e);

        //     //     console.log(tm128)

        //     //     naver.maps.Service.reverseGeocode({
        //     //         location: tm128,
        //     //         coordType: naver.maps.Service.CoordType.TM128
        //     //     }, (status: any, response: any) => {
        //     //         console.log(status, response.result.items)
        //     //     })

        //     //     const position = map.getCenter();
        //     //     console.log(position);

        //     //     // marker.setPosition(position);
        //     // });

        //     // map.setOptions({ //지도 인터랙션 끄기
        //     //     draggable: false,
        //     //     pinchZoom: false,
        //     //     scrollWheel: false,
        //     //     keyboardShortcuts: false,
        //     //     disableDoubleTapZoom: true,
        //     //     disableDoubleClickZoom: true,
        //     //     disableTwoFingerTapZoom: true
        //     // });

        //     // const marker = new naver.maps.Marker({
        //     //     position: map.getCenter(),
        //     //     icon: {
        //     //         // content: renderToHTML`<div ref={${markerElement}}>test</div>`
        //     //         // content: renderToString(<div>sdfaslfajsdif</div>)
        //     //     },
        //     //     // map,
        //     // });
        //     // marker.setMap(map);

        // })
    }, [loadMap, origin])

    // return <div>
    //     {/* <NaverMap
    //         mark={(map) => {
    //             console.log("......", map)
    //             return {
    //                 position: map.getCenter(),
    //                 icon: {
    //                     content: <div>adfasdfadF</div>
    //                 }
    //             }
    //         }} /> */}
    //     <div ref={mapElement} style={{ maxWidth: '100%', height: '300px' }} />
    //     {/* <button >cen</button> */}
    //     <div>{latlng?.lat}</div>
    //     <div>{latlng?.lng}</div>
    // </div>
    return <div ref={mapElement} style={{ maxWidth: '100%', height: '300px' }} >
        <button
            style={{ position: 'absolute', zIndex: 900 }}
            onClick={() => {
                console.log('first')
            }}
        >button</button>
    </div>

}