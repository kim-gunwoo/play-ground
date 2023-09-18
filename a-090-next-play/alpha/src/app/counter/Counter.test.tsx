import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CounterPage from '@/app/counter/page';

describe('<Counter />', () => {
  it('matches snapshot', () => {
    const utils = render(<CounterPage />);
    expect(utils.container).toMatchSnapshot();
  });
  it('has a number and two buttons', () => {
    const utils = render(<CounterPage />);
    // 버튼과 숫자가 있는지 확인
    utils.getByText('0');
    utils.getByText('+1');
    utils.getByText('-1');
  });
  it('increases', () => {
    const utils = render(<CounterPage />);
    const number = utils.getByText('0');
    const plusButton = utils.getByText('+1');
    // 클릭 이벤트를 두번 발생시키기
    fireEvent.click(plusButton);
    fireEvent.click(plusButton);
    expect(number).toHaveTextContent('2'); // jest-dom 의 확장 matcher 사용
    expect(number.textContent).toBe('2'); // textContent 를 직접 비교
  });
  it('decreases', () => {
    const utils = render(<CounterPage />);
    const number = utils.getByText('0');
    const plusButton = utils.getByText('-1');
    // 클릭 이벤트를 두번 발생시키기
    fireEvent.click(plusButton);
    fireEvent.click(plusButton);
    expect(number).toHaveTextContent('-2'); // jest-dom 의 확장 matcher 사용
  });
});