import { Story, Meta } from '@storybook/react/types-6-0';
import Showcase, { ShowcaseProps } from '.';
import highlightMock from 'components/Highlight/mock';
import gamesMock from 'components/GameCardSlider/mock';

export default {
  title: 'Showcase',
  component: Showcase,
  decorators: [
    (Story) => {
      return (
        <div style={{ margin: '0 auto' }}>
          <Story />
        </div>
      );
    },
  ],
  parameters: { layout: 'fullscreen', backgrounds: { default: 'won-dark' } },
} as Meta;

export const Default: Story<ShowcaseProps> = (args) => {
  return <Showcase {...args} />;
};
Default.args = {
  title: 'Most Popular',
  highlight: highlightMock,
  games: gamesMock,
};

export const WithoutHighlight: Story<ShowcaseProps> = (args) => {
  return <Showcase {...args} />;
};
WithoutHighlight.args = {
  title: 'Most Popular',
  games: gamesMock,
};

export const WithoutGames: Story<ShowcaseProps> = (args) => {
  return <Showcase {...args} />;
};
WithoutGames.args = {
  title: 'Most Popular',
  highlight: highlightMock,
};
