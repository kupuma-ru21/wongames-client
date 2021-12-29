import type { Story, Meta } from '@storybook/react/types-6-0';
import BannerSlider from '.';
import items from './mock';

type BannerSliderProps = React.ComponentProps<typeof BannerSlider>;

export default {
  title: 'BannerSlider',
  component: BannerSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark',
    },
  },
} as Meta;

export const Default: Story<BannerSliderProps> = (args) => {
  return (
    <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
      <BannerSlider {...args} />
    </div>
  );
};
