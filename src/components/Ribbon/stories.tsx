import type { Story, Meta } from '@storybook/react/types-6-0';
import Ribbon from '.';
import type { RibbonProps } from '.';

export default {
  title: 'Ribbon',
  component: Ribbon,
  args: { children: 'Best Seller' },
  argTypes: { children: { type: 'string' } },
} as Meta;

export const Default: Story<RibbonProps> = (args) => {
  return (
    <div
      style={{
        width: '40rem',
        height: '25rem',
        position: 'relative',
        backgroundColor: '#888',
      }}
    >
      <Ribbon {...args} />
    </div>
  );
};
