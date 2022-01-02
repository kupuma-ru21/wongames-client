import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import Empty from '.';

const props = {
  title: 'A simple title',
  description: 'A simple description',
};

describe('<Empty />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Empty {...props} hasLink />);

    screen.getByRole('image', {
      name: /a gamer in a couch playing videogame/i,
    });

    screen.getByRole('heading', { name: /a simple title/i });

    screen.getByText(/a simple description/i);

    expect(
      screen.getByRole('link', { name: /go back to store/i })
    ).toHaveAttribute('href', '/');

    expect(container.parentElement).toMatchSnapshot();
  });

  it('should not render link when hasLink is not passed', () => {
    renderWithTheme(<Empty {...props} />);

    expect(screen.queryByRole('link', { name: /go back to store/i })).toBe(
      null
    );
  });
});
