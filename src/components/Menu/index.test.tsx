import { screen, fireEvent } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import Menu from '.';

describe('<Menu />', () => {
  it('should render the menu', () => {
    renderWithTheme(<Menu />);
    expect(screen.getByLabelText(/open menu/i));
    expect(screen.getByLabelText(/search/i));
    expect(screen.getByLabelText(/open shopping cart/i));
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

    expect(screen.queryByText(/my account/i)).not;
    expect(screen.queryByText(/wishlist/i)).not;
    expect(screen.getByText(/sign up/i));
    expect(screen.getAllByText(/sign in/i)).toHaveLength(2);
  });

  it('should show wishlight and account when logged in', () => {
    renderWithTheme(<Menu username="will" />);

    expect(screen.getByText(/my account/i));
    expect(screen.getByText(/wishlist/i));
    expect(screen.queryByText(/sign in/i)).not;
    expect(screen.queryByText(/sign up/i)).not;
  });
});
