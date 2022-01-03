import type { Story, Meta } from '@storybook/react/types-6-0';
import Menu from '.';
import type { MenuProps } from '.';

export default {
  title: 'Menu',
  component: Menu,
  parameters: { layout: 'fullscreen', backgrounds: { default: 'won-dark' } },
} as Meta;

export const Default: Story<MenuProps> = (args) => {
  return <Menu {...args} />;
};

export const Logged: Story<MenuProps> = (args) => {
  return <Menu {...args} />;
};

Logged.args = { username: 'John Doe' };
