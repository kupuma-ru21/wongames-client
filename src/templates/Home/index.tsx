import Base from 'templates/Base';
import Showcase from 'components/Showcase';
import { Container } from 'components/Container';
import Banner from 'components/Banner';
import BannerSlider from 'components/BannerSlider';
import type { GameCardProps } from 'components/GameCard';
import type { HighlightProps } from 'components/Highlight';
import * as S from './styles';

type BannerProps = React.ComponentProps<typeof Banner>;

export type HomeTemplateProps = {
  banners: BannerProps[];
  newGames: GameCardProps[];
  mostPopularHighlight: HighlightProps;
  mostPopularGames: GameCardProps[];
  upcomingGames: GameCardProps[];
  upcommingHighlight: HighlightProps;
  upcomingMoreGames: GameCardProps[];
  freeGames: GameCardProps[];
  freeHighlight: HighlightProps;
};

const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcomingGames,
  upcommingHighlight,
  upcomingMoreGames,
  freeGames,
  freeHighlight,
}: HomeTemplateProps) => {
  return (
    <Base>
      <Container>
        <S.SectionBanner>
          <BannerSlider items={banners} />
        </S.SectionBanner>
      </Container>

      <S.SectionNews>
        <Showcase title="News" games={newGames} />
      </S.SectionNews>

      <Showcase
        title="Most Popular"
        highlight={mostPopularHighlight}
        games={mostPopularGames}
      />

      <S.SectionUpcoming>
        <Showcase title="Upcoming" games={upcomingGames} />
        <Showcase highlight={upcommingHighlight} games={upcomingMoreGames} />
      </S.SectionUpcoming>

      <Showcase
        title="Free games"
        highlight={freeHighlight}
        games={freeGames}
      />
    </Base>
  );
};

export default Home;
