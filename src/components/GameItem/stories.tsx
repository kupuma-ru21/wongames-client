import { Story, Meta } from '@storybook/react/types-6-0';
import GameItem from '.';
import type { GameItemProps } from '.';

export default {
  title: 'GameItem',
  component: GameItem,
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/151x70',
    title: 'Red Dead Redemption 2',
    price: 'R$ 215,00',
  },
} as Meta;

export const Default: Story<GameItemProps> = (args) => {
  return <GameItem {...args} />;
};

export const WithPayment: Story<GameItemProps> = (args) => {
  return <GameItem {...args} />;
};

WithPayment.args = {
  downloadLink: 'https://wongames.com/game/download/21312ndasd',
};
