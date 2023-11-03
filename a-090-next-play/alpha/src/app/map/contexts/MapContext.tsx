import React, { createContext, useCallback, useContext, useEffect, useLayoutEffect, useState } from 'react';

export type Naver = any;

interface MapContextInterface {
  clientKey: string;
  naver: Naver;
}

function loadScript(source: string) {
  const element = document.querySelector(`script[src="${source}"]`);

  // 이미 로드되어 있거나 로드 중
  if (element) {
    return Promise.resolve();
  }

  return new Promise(resolve => {
    const script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.src = source;
    document.body.append(script);
    script.addEventListener('load', resolve);
  });
}

const MapContext = createContext<MapContextInterface | null>(null);

interface MapProviderProps extends Omit<MapContextInterface, 'naver'> {
  children?: React.ReactNode;
}

export const MapProvider: React.FC<MapProviderProps> = ({ children, ...options }) => {
  const [map, setMap] = useState<Naver>();

  const loadNaverScript = useCallback((key: string) => {
    const naverSource = `https://openapi.map.naver.com/openapi/v3/maps.js?`
      + `ncpClientId=${key}&submodules=geocoder`;
    return new Promise((resolve, reject) => {
      loadScript(naverSource).then(
        () => {
          console.log('Naver success', `loaded complete - ${new Date().getTime()}`)
          window.naver.maps.onJSContentLoaded = () => {
            resolve(window.naver);
          }
        }
      ).catch((e) => {
        console.log('Naver error', `loaded complete - ${new Date().getTime()}`)
        reject(false);
      })
    });
  }, []);

  useEffect(() => {
    loadNaverScript(options.clientKey).then((naver) => {
      setMap(naver)
    });
  }, [options]);

  if (!map) {
    return <div>not loading</div>;
  }

  return <MapContext.Provider value={{ ...options, naver: map }}>{children}</MapContext.Provider>;
};

export const useMapContent = () => {
  const map = useContext(MapContext);
  if (!map) throw new Error('Cannot find map');
  return map.naver;
}