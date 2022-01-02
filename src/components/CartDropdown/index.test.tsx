import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import items from 'components/CartList/mock';
import CartDropdown from '.';

describe.skip('<CartDropdown />', () => {
  it('should render <CartIcon /> and its badge', () => {
    renderWithTheme(<CartDropdown />);

    screen.getByLabelText(/shopping cart/i);
    screen.getByText(`${items.length}`);
  });

  it('should render Dropdown content with cart items and total', () => {
    renderWithTheme(<CartDropdown />);

    screen.getByText('R$ 300,00');
    screen.getByText(`${items[0].title}`);
  });
});
