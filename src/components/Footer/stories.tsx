import type { Story, Meta } from '@storybook/react/types-6-0';
import Footer from '.';

export default {
  title: 'Footer',
  component: Footer,
} as Meta;

export const Default: Story = () => {
  return (
    <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
      <Footer />
    </div>
  );
};
