import { render, screen } from '@testing-library/react';
import FormSignIn from '.';

describe('<FormSignIn />', () => {
  it.skip('should render the heading', () => {
    render(<FormSignIn />);
    expect(
      screen.getByRole('heading', { name: /FormSignIn/i })
    ).toBeInTheDocument();
  });
});
