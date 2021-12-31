import type { Story, Meta } from '@storybook/react/types-6-0';
import itemsMock from './mock';
import type { OrdersListProps } from '.';
import OrdersList from '.';

export default {
  title: 'Profile/OrdersList',
  component: OrdersList,
  args: { items: itemsMock },
} as Meta;

export const Default: Story<OrdersListProps> = (args) => {
  return (
    <div style={{ maxWidth: 850, margin: 'auto' }}>
      <OrdersList {...args} />
    </div>
  );
};
