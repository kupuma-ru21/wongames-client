import { screen } from '@testing-library/react';
import theme from 'styles/theme';
import { renderWithTheme } from 'utils/tests/helpers';
import ProfileMenu from '.';

describe('<ProfileMenu />', () => {
  it('should render the menu', () => {
    const { container } = renderWithTheme(<ProfileMenu />);

    screen.getByRole('link', { name: /my profile/i });

    screen.getByRole('link', { name: /my cards/i });
    screen.getByRole('link', { name: /my orders/i });
    screen.getByRole('link', { name: /sign out/i });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the menu with an active link defined', () => {
    renderWithTheme(<ProfileMenu activeLink="/profile/cards" />);

    expect(screen.getByRole('link', { name: /my cards/i })).toHaveStyle({
      background: theme.colors.primary,
      color: theme.colors.white,
    });
  });
});
