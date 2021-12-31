import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import FormSignIn from '.';

describe('<FormSignIn />', () => {
  it('should render the form', () => {
    const { container } = renderWithTheme(<FormSignIn />);

    expect(screen.getByPlaceholderText(/email/i));
    expect(screen.getByPlaceholderText(/password/i));
    expect(screen.getByRole('button', { name: /sign in now/i }));

    expect(container.parentElement).toMatchSnapshot();
  });

  it('should render the forgot password link', () => {
    renderWithTheme(<FormSignIn />);

    expect(screen.getByRole('link', { name: /forgot your password\?/i }));
  });

  it('should render text to sign up if already have an account', () => {
    renderWithTheme(<FormSignIn />);

    expect(screen.getByRole('link', { name: /sign up/i }));
    expect(screen.getByText(/don’t have an account\?/i));
  });
});
