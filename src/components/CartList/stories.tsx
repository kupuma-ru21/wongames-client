import type { Story, Meta } from '@storybook/react/types-6-0';
import mockItems from './mock';
import type { CartListProps } from '.';
import CartList from '.';

export default {
  title: 'CartList',
  component: CartList,
  args: { items: mockItems, total: 'R$ 330,00' },
  argTypes: { items: { type: '' } },
  parameters: { backgrounds: { default: 'won-dark' } },
} as unknown as Meta;

export const Default: Story<CartListProps> = (args) => {
  return (
    <div style={{ maxWidth: 800 }}>
      <CartList {...args} />
    </div>
  );
};
