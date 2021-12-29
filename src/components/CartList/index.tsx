import type { GameItemProps } from 'components/GameItem';
import GameItem from 'components/GameItem';
import * as S from './styles';

export type CartListProps = { items: GameItemProps[]; total: string };

const CartList = ({ items, total }: CartListProps) => {
  return (
    <S.Wrapper>
      {items.map((item) => {
        return <GameItem key={item.title} {...item} />;
      })}

      <S.Footer>
        Total <S.Total>{total}</S.Total>
      </S.Footer>
    </S.Wrapper>
  );
};

export default CartList;
