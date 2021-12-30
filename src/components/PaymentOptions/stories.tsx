import type { Story, Meta } from '@storybook/react/types-6-0';
import cardsMock from './mock';
import type { PaymentOptionsProps } from '.';
import PaymentOptions from '.';

export default {
  title: 'PaymentOptions',
  component: PaymentOptions,
  args: { cards: cardsMock },
} as Meta;

export const Default: Story<PaymentOptionsProps> = (args) => {
  return <PaymentOptions {...args} />;
};
