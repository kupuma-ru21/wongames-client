import type { Story, Meta } from '@storybook/react/types-6-0';
import type { DropdownProps } from '.';
import Dropdown from '.';

export default {
  title: 'Dropdown',
  component: Dropdown,
  parameters: { backgrounds: { default: 'won-dark' } },
} as Meta;

export const Default: Story<DropdownProps> = (args) => {
  return <Dropdown {...args} />;
};

Default.args = { title: 'Click here', children: 'content' };
