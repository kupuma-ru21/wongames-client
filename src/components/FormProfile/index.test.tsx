import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import FormProfile from '.';

describe('<FormProfile />', () => {
  it('should render the profile form', () => {
    renderWithTheme(<FormProfile />);

    screen.getByRole('heading', { name: /my profile/i });

    screen.getByRole('textbox', { name: /name/i });
    screen.getByRole('textbox', { name: /e-mail/i });

    screen.getByPlaceholderText(/type your password/i);

    screen.getByPlaceholderText(/new password/i);

    screen.getByRole('button', { name: /save/i });
  });
});
