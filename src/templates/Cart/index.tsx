import Base from 'templates/Base';
import type { PaymentOptionsProps } from 'components/PaymentOptions';
import type { HighlightProps } from 'components/Highlight';
import type { GameCardProps } from 'components/GameCard';
import type { CartListProps } from 'components/CartList';
import { Container } from 'components/Container';
import { Divider } from 'components/Divider';
import PaymentOptions from 'components/PaymentOptions';
import CartList from 'components/CartList';
import Heading from 'components/Heading';
import Showcase from 'components/Showcase';
import Empty from 'components/Empty';
import * as S from './styles';

export type CartProps = {
  recommendedGames: GameCardProps[];
  recommendedHighlight: HighlightProps;
} & CartListProps &
  Pick<PaymentOptionsProps, 'cards'>;

const Cart = ({
  recommendedGames,
  recommendedHighlight,
  items,
  total,
  cards,
}: CartProps) => {
  const handlePayment = () => {
    return {};
  };

  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My cart
        </Heading>

        {items?.length ? (
          <S.Content>
            <CartList items={items} total={total} />

            <PaymentOptions cards={cards} handlePayment={handlePayment} />
          </S.Content>
        ) : (
          <Empty
            title="Your cart is empty"
            description="Go back to the store and explore great games and offers"
            hasLink
          />
        )}

        <Divider />
      </Container>

      <Showcase
        title="You may like these games"
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  );
};

export default Cart;
