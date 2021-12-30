import type { Story, Meta } from '@storybook/react/types-6-0';
import cardsMock from './mock';
import type { PaymentOptionsProps } from '.';
import PaymentOptions from '.';

export default {
  title: 'PaymentOptions',
  component: PaymentOptions,
  args: { cards: cardsMock },
  argTypes: { cards: { type: '' }, handlePayment: { action: 'clicked' } },
  parameters: { backgrounds: { default: 'won-dark' } },
} as unknown as Meta;

export const Default: Story<PaymentOptionsProps> = (args) => {
  return (
    <div style={{ padding: 16, maxWidth: 400 }}>
      <PaymentOptions {...args} />
    </div>
  );
};
