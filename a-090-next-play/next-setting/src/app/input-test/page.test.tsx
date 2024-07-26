import { fireEvent, render, screen } from '@testing-library/react';
import Page from './page';

describe('/input-test page', () => {
  it('matches snapshot', () => {
    const utils = render(<Page />);
    expect(utils.container).toMatchSnapshot();
  });

  it('input-test page: text fireEvent text', () => {
    render(<Page />);
    const heading = screen.getByRole('heading', { level: 2 });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('0');

    fireEvent.click(screen.getByRole('button'));

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('1');
  });
});
