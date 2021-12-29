import type { Story, Meta } from '@storybook/react/types-6-0';
import MediaMatch from '.';

export default {
  title: 'MediaMatch',
  component: MediaMatch,
} as Meta;

export const Desktop: Story = () => {
  return <MediaMatch greaterThan="medium">Only on Desktop</MediaMatch>;
};
export const Mobile: Story = () => {
  return <MediaMatch lessThan="medium">Only on Mobile</MediaMatch>;
};

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1',
  },
};
