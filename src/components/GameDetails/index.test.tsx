import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import GameDetails, { type GameDetailsProps } from '.';

const props: GameDetailsProps = {
  developer: 'Different Tales',
  publisher: 'Walktrough',
  platforms: ['windows', 'mac', 'linux'],
  releaseDate: '2020-11-21T23:00:00',
  rating: 'BR0',
  genres: ['Role-playing', 'Narrative'],
};

describe('<GameDetails />', () => {
  it('should render the blocks', () => {
    renderWithTheme(<GameDetails {...props} />);

    screen.getByRole('heading', { name: /developer/i });

    screen.getByRole('heading', { name: /release date/i });

    screen.getByRole('heading', { name: /platforms/i });

    screen.getByRole('heading', { name: /publisher/i });

    screen.getByRole('heading', { name: /rating/i });

    screen.getByRole('heading', { name: /genres/i });
  });

  it('should render platform icons', () => {
    renderWithTheme(<GameDetails {...props} />);

    screen.getByRole('img', { name: /linux/i });
    screen.getByRole('img', { name: /windows/i });
    screen.getByRole('img', { name: /mac/i });
  });

  it('should render free rating when BR0', () => {
    renderWithTheme(<GameDetails {...props} />);

    screen.getByText(/free/i);
  });

  it('should render the developer', () => {
    renderWithTheme(<GameDetails {...props} />);

    screen.getByText(/Different Tales/i);
  });

  it('should render the publisher', () => {
    renderWithTheme(<GameDetails {...props} />);

    screen.getByText(/walktrough/i);
  });

  it('should render 18+ rating when BR18', () => {
    renderWithTheme(<GameDetails {...props} rating="BR18" />);

    screen.getByText(/18\+/i);
  });

  it('should render the formated date', () => {
    renderWithTheme(<GameDetails {...props} />);

    screen.getByText('Nov 21, 2020');
  });

  it('should render a list of genres', () => {
    renderWithTheme(<GameDetails {...props} />);

    screen.getByText('Role-playing / Narrative');
  });
});
