import type { Story, Meta } from '@storybook/react/types-6-0';
import type { UserDropdownProps } from '.';
import UserDropdown from '.';

export default {
  title: 'UserDropdown',
  component: UserDropdown,
  parameters: { backgrounds: { default: 'won-dark' } },
} as Meta;

export const Default: Story<UserDropdownProps> = (args) => {
  return (
    <div
      style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}
    >
      <UserDropdown {...args} />
    </div>
  );
};

Default.args = { username: 'Willian' };
