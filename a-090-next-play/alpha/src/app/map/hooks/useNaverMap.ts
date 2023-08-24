import { useCallback, useRef } from "react";

declare global {
  interface Window {
    naver: any;
  }
}

// declare namespace naver.maps {
//     type MapOptions = any;
// };

type Naver = any;

export interface MapOptionsType {
  zoom?: number;
  zoomControl?: boolean;
}

// export type Naver = any;

const naverMapKey = "";

export default function useNaverMap<T extends HTMLElement>() {
  const mapElement = useRef<T>(null);

  const load = useCallback((afterLoad: (naver: Naver) => void) => {
    if (window.naver) {
      afterLoad(window.naver);
      return;
    }

    const naverMapScript = document.createElement("script");
    naverMapScript.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${naverMapKey}&submodules=geocoder`;
    naverMapScript.defer = true;
    document.head.appendChild(naverMapScript);

    naverMapScript.addEventListener("load", () => {
      window.naver.maps.onJSContentLoaded = () => {
        afterLoad(window.naver);
      };
    });
  }, []);

  const loadNaverMap = useCallback((): Promise<Naver> => {
    const id = "naverMapScript";
    let naverMapScript = document.getElementById(id) as HTMLScriptElement;

    if (!naverMapScript) {
      naverMapScript = document.createElement("script");
      naverMapScript.id = id;
      naverMapScript.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=y8p4fpp84k&submodules=geocoder`;
      naverMapScript.defer = true;
      document.head.appendChild(naverMapScript);

      return new Promise((resolve, reject) => {
        naverMapScript.addEventListener("load", () => {
          console.log(
            "Naver success",
            `${id} loaded complete - ${new Date().getTime()}`
          );
          window.naver.maps.onJSContentLoaded = () => {
            resolve(window.naver);
          };
        });
        naverMapScript.addEventListener("error", (e) => {
          console.log(
            "Naver error",
            `${id} loaded complete - ${new Date().getTime()}`
          );
          reject(false);
        });
      });
    }

    return Promise.resolve(window.naver);
  }, []);

  const loadMap = useCallback(
    (afterLoadMap: (naver: Naver) => void) => {
      loadNaverMap().then((naver: Naver) => afterLoadMap(naver));
      // return loadNaverMap().then(naver => naver)
    },
    [loadNaverMap]
  );

  return {
    mapElement,
    loadMap,
    load,
  };
}
