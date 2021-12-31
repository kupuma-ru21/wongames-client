import type { Story, Meta } from '@storybook/react/types-6-0';
import type { ProfileMenuProps } from '.';
import ProfileMenu from '.';

export default {
  title: 'ProfileMenu',
  component: ProfileMenu,
  parameters: { backgrounds: { default: 'won-dark' } },
} as Meta;

export const Default: Story<ProfileMenuProps> = (args) => {
  return <ProfileMenu {...args} />;
};
