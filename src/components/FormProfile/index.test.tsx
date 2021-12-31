import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import FormProfile from '.';

describe('<FormProfile />', () => {
  it('should render the profile form', () => {
    renderWithTheme(<FormProfile />);

    expect(screen.getByRole('heading', { name: /my profile/i }));

    expect(screen.getByRole('textbox', { name: /name/i }));
    expect(screen.getByRole('textbox', { name: /e-mail/i }));

    expect(screen.getByPlaceholderText(/type your password/i));

    expect(screen.getByPlaceholderText(/new password/i));

    expect(screen.getByRole('button', { name: /save/i }));
  });
});
