import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import CartIcon from '.';

describe('<CartIcon />', () => {
  it('should render without badge', () => {
    renderWithTheme(<CartIcon />);

    screen.getByLabelText(/shopping cart/i);
    expect(screen.queryByLabelText(/cart items/i)).toBe(null);
  });

  it('should render with badge', () => {
    renderWithTheme(<CartIcon quantity={3} />);

    screen.getByLabelText(/cart items/i);
    screen.getByText(/3/);
  });

  it('should render with badge only if has positive numbers', () => {
    renderWithTheme(<CartIcon quantity={-1} />);

    expect(screen.queryByLabelText(/cart items/i)).toBe(null);
    expect(screen.queryByText(/-1/)).toBe(null);
  });
});
