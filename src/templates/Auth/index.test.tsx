import { renderWithTheme } from 'utils/tests/helpers';
import { screen } from '@testing-library/react';
import Auth from '.';

describe('<Auth />', () => {
  it('should render all components and children', () => {
    renderWithTheme(
      <Auth title="Auth Title">
        <input type="text" />
      </Auth>
    );

    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2);

    screen.getByRole('heading', {
      name: /All your favorite games in one place/i,
    });

    screen.getByRole('heading', {
      name: /won is the best and most complete gaming platform/i,
    });

    screen.getByRole('heading', { name: /auth title/i });

    screen.getByRole('textbox');
  });
});
