import 'match-media-mock';
import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import gamesMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';
import Showcase from '.';

const props = {
  title: 'Most Popular',
  highlight: highlightMock,
  games: gamesMock.slice(0, 1),
};

describe('<Showcase />', () => {
  it('should render full showcase', () => {
    renderWithTheme(<Showcase {...props} />);

    expect(screen.getByRole('heading', { name: /most popular/i }));

    expect(screen.getByRole('heading', { name: highlightMock.title }));

    expect(screen.getByRole('heading', { name: gamesMock[0].title }));
  });

  it('should render without title', () => {
    renderWithTheme(
      <Showcase games={props.games} highlight={props.highlight} />
    );

    screen.getByRole('heading', { name: highlightMock.title });
    screen.getByRole('heading', { name: gamesMock[0].title });

    expect(screen.queryByRole('heading', { name: /most popular/i })).not;
  });

  it('should render without highlight', () => {
    renderWithTheme(<Showcase title={props.title} games={props.games} />);

    screen.getByRole('heading', { name: /most popular/i });
    screen.getByRole('heading', { name: gamesMock[0].title });

    expect(screen.queryByRole('heading', { name: highlightMock.title })).not;
  });

  it('should render without games', () => {
    renderWithTheme(
      <Showcase title={props.title} highlight={props.highlight} />
    );

    screen.getByRole('heading', { name: /most popular/i });
    screen.getByRole('heading', { name: highlightMock.title });

    expect(screen.queryByRole('heading', { name: gamesMock[0].title })).not;
  });
});
