import { fireEvent, screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Menu from '.';

describe('<Menu />', () => {
  it('should render the menu', () => {
    renderWithTheme(<Menu />);
    screen.getByLabelText(/open menu/i);
    screen.getByLabelText(/search/i);
    screen.getByRole('img', { name: /won games/i });
    expect(screen.getAllByLabelText(/shopping cart/i)).toHaveLength(2);
  });

  it('should handle the open/close mobile menu', () => {
    renderWithTheme(<Menu />);
    const fullMenuElement = screen.getByRole('navigation', { hidden: true });
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true');
    expect(fullMenuElement).toHaveStyle({ opacity: 0 });

    fireEvent.click(screen.getByLabelText(/open menu/i));
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false');
    expect(fullMenuElement).toHaveStyle({ opacity: 1 });

    fireEvent.click(screen.getByLabelText(/close menu/i));
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true');
    expect(fullMenuElement).toHaveStyle({ opacity: 0 });
  });

  it('should show register box when logged out', () => {
    renderWithTheme(<Menu />);

    expect(screen.queryByText(/my profile/i)).toBe(null);
    expect(screen.queryByText(/wishlist/i)).toBe(null);
    screen.getByText(/sign up/i);
    expect(screen.getAllByText(/sign in/i)).toHaveLength(2);
  });

  it('should show wishlight and account when logged in', () => {
    renderWithTheme(<Menu username="will" />);

    expect(screen.getAllByText(/my profile/i)).toHaveLength(2);
    expect(screen.getAllByText(/wishlist/i)).toHaveLength(2);
    expect(screen.queryByText(/sign in/i)).toBe(null);
    expect(screen.queryByText(/sign up/i)).toBe(null);
  });
});
