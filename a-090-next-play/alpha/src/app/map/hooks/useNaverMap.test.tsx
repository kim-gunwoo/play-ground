import { render, renderHook, screen } from "@testing-library/react"
import useNaverMap from "./useNaverMap"


const Test = () => {
    const { mapElement } = useNaverMap<HTMLDivElement>();

    

    return <div ref={mapElement} style={{ width: '300px' }} data-testid="naver-map"></div>;
}

describe('hook useNaverMap', () => {
    it('use naver map init', () => {
        const { result } = renderHook(() => useNaverMap());
        expect(result.current.mapElement.current).toBeNull();
    })

    it('naver map load', () => {
        render(<Test />);
        const naverMap = screen.getByTestId('naver-map');
        expect(naverMap).toBeInTheDocument();
        expect(naverMap).toHaveStyle('width: 300px;');
        
    })
})