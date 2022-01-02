import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import cardsMock from 'components/PaymentOptions/mock';
import CardsList from '.';

describe('<CardsList />', () => {
  it('should render the cards list', () => {
    renderWithTheme(<CardsList cards={cardsMock} />);

    screen.getByRole('heading', { name: /my cards/i });

    expect(screen.getByRole('img', { name: /visa/i })).toHaveAttribute(
      'src',
      '/img/visa.png'
    );

    expect(screen.getByRole('img', { name: /mastercard/i })).toHaveAttribute(
      'src',
      '/img/master-card.png'
    );

    screen.getByText(/4325/);
    screen.getByText(/4326/);
  });
});
