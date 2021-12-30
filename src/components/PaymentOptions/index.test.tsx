import { render, screen } from '@testing-library/react';
import PaymentOptions from '.';

describe('<PaymentOptions />', () => {
  it.skip('should render the heading', () => {
    const { container } = render(<PaymentOptions handlePayment={jest.fn()} />);

    expect(
      screen.getByRole('heading', { name: /PaymentOptions/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
