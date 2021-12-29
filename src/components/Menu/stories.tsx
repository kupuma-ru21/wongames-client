import type { Story, Meta } from '@storybook/react/types-6-0';
import Menu from '.';
import type { MenuProps } from '.';

export default {
  title: 'Menu',
  component: Menu,
} as Meta;

export const Default: Story<MenuProps> = (args) => {
  return <Menu {...args} />;
};

Default.parameters = {
  layout: 'fullscreen',
  backgrounds: { default: 'won-dark' },
};
