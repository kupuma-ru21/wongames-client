import type { GameItemProps } from 'components/GameItem';
// import CartIcon from 'components/CartIcon';
// import CartList from 'components/CartList';
// import Dropdown from 'components/Dropdown';
import * as S from './styles';

export type CartDropdownProps = { items: GameItemProps[]; total: string };

const CartDropdown = () => {
  return (
    <S.Wrapper>
      {/* <Dropdown title={<CartIcon quantity={items.length} />}>
        <CartList items={items} total={total} hasButton />
      </Dropdown> */}
    </S.Wrapper>
  );
};

export default CartDropdown;
