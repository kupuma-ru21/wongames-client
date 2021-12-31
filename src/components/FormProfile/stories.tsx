import type { Story, Meta } from '@storybook/react/types-6-0';
import FormProfile from '.';

export default {
  title: 'Form/FormProfile',
  component: FormProfile,
} as Meta;

export const Default: Story = () => {
  return (
    <div style={{ maxWidth: 860, margin: 'auto' }}>
      <FormProfile />
    </div>
  );
};
