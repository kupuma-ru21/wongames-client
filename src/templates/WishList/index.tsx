import Base from 'templates/Base';
import Heading from 'components/Heading';
import Showcase from 'components/Showcase';
import { Container } from 'components/Container';
import type { GameCardProps } from 'components/GameCard';
import type { HighlightProps } from 'components/Highlight';
// import * as S from './styles';

export type WishlistTemplateProps = {
  recommendedGames: GameCardProps[];
  recommendedHighlight: HighlightProps;
};

const Wishlist = ({
  recommendedGames,
  recommendedHighlight,
}: WishlistTemplateProps) => {
  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          Wishlist
        </Heading>
      </Container>

      <Showcase
        title="You may like these games"
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  );
};

export default Wishlist;
