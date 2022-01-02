import type { Story, Meta } from '@storybook/react/types-6-0';
import type { CartIconProps } from '.';
import CartIcon from '.';

export default {
  title: 'CartIcon',
  component: CartIcon,
  parameters: { backgrounds: { default: 'won-dark' } },
} as Meta;

export const Default: Story = () => {
  return <CartIcon />;
};
export const withItems: Story<CartIconProps> = (args) => {
  return <CartIcon {...args} />;
};

withItems.args = { quantity: 3 };
