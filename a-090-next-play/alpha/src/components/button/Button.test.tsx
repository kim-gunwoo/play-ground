import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";

describe('Button', () => {
    it('renders Button', () => {
        const onClick = jest.fn(); // 가짜 함수
        const { getByText } = render(<Button onClick={onClick} >버튼</Button>);
        const button = getByText('버튼');
        expect(button).toBeInTheDocument();
        fireEvent.click(button);
        expect(onClick).toBeCalledTimes(1);
    });

    it('snapshot Button', () => {
        const { container } = render(<Button>버튼</Button>);
        expect(container).toMatchSnapshot();
    })

    it('renders Button2', () => {
        const onClick = jest.fn(); // 가짜 함수
        render(<Button onClick={onClick} >버튼</Button>);
        const button = screen.getByRole('button', { name: '버튼' })
        expect(button).toBeInTheDocument();
        fireEvent.click(button);
        expect(onClick).toBeCalledTimes(1);
    });
});