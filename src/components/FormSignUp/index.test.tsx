import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import FormSignUp from '.';

describe('<FormSignUp />', () => {
  it('should render the form', () => {
    const { container } = renderWithTheme(<FormSignUp />);

    screen.getByPlaceholderText(/name/i);
    screen.getByPlaceholderText(/email/i);
    screen.getByPlaceholderText('Password');
    screen.getByPlaceholderText('Confirm password');
    screen.getByRole('button', { name: /sign up now/i });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render text and link to sign in', () => {
    renderWithTheme(<FormSignUp />);

    screen.getByRole('link', { name: /sign in/i });
    screen.getByText(/already have an account\?/i);
  });
});
