import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import FormSignUp from '.';

describe('<FormSignUp />', () => {
  it('should render the form', () => {
    const { container } = renderWithTheme(<FormSignUp />);

    expect(screen.getByPlaceholderText(/name/i));
    expect(screen.getByPlaceholderText(/email/i));
    expect(screen.getByPlaceholderText('Password'));
    expect(screen.getByPlaceholderText('Confirm password'));
    expect(screen.getByRole('button', { name: /sign up now/i }));

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render text and link to sign in', () => {
    renderWithTheme(<FormSignUp />);

    expect(screen.getByRole('link', { name: /sign in/i }));
    expect(screen.getByText(/already have an account\?/i));
  });
});
