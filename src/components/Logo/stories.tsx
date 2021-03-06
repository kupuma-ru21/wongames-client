import type { Story, Meta } from '@storybook/react/types-6-0';
import Logo from '.';
import type { LogoProps } from '.';

export default {
  title: 'Logo',
  component: Logo,
  parameters: { backgrounds: { default: 'won-dark' } },
} as Meta;

export const Default: Story<LogoProps> = (args) => {
  return <Logo {...args} />;
};
