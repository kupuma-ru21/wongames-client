import type { Story, Meta } from '@storybook/react/types-6-0';
import items from 'components/CartList/mock';
import type { CartDropdownProps } from '.';
import CartDropdown from '.';

export default {
  title: 'CartDropdown',
  component: CartDropdown,
  args: { items, total: 'R$ 300,00' },
  parameters: { backgrounds: { default: 'won-dark' } },
} as Meta;

export const Default: Story<CartDropdownProps> = (args) => {
  return (
    <div
      style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}
    >
      <CartDropdown {...args} />
    </div>
  );
};
