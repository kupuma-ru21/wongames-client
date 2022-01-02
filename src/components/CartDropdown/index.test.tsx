import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import items from 'components/CartList/mock';
import CartDropdown from '.';

describe('<CartDropdown />', () => {
  it('should render <CartIcon /> and its badge', () => {
    renderWithTheme(<CartDropdown items={items} total="R$ 300,00" />);

    screen.getByLabelText(/shopping cart/i);
    screen.getByText(`${items.length}`);
  });

  it('should render Dropdown content with cart items and total', () => {
    renderWithTheme(<CartDropdown items={items} total="R$ 300,00" />);

    screen.getByText('R$ 300,00');
    screen.getByText(`${items[0].title}`);
  });
});
