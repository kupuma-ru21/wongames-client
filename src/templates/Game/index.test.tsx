import 'match-media-mock';
import { render, screen } from '@testing-library/react';
import Game from '.';

describe('<Game />', () => {
  it.skip('should render the heading', () => {
    const { container } = render(
      <Game
        cover=""
        gameInfo={{ title: '', description: '', price: '' }}
        description=""
        details={{
          developer: '',
          publisher: '',
          platforms: [],
          releaseDate: '',
          rating: 'BR0',
          genres: [],
        }}
        upcomingGames={[]}
        upcomingHighlight={{
          title: '',
          subtitle: '',
          backgroundImage: '',
          buttonLabel: '',
          buttonLink: '',
        }}
        recommendedGames={[]}
      />
    );

    expect(screen.getByRole('heading', { name: /Game/i })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
