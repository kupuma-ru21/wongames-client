import type { Story, Meta } from '@storybook/react/types-6-0';
import Radio from '.';
import type { RadioProps } from '.';

export default {
  title: 'Form/Radio',
  component: Radio,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark',
    },
  },
  argTypes: {
    onCheck: { action: 'checked' },
  },
} as Meta;

export const Default: Story<RadioProps> = (args) => {
  return (
    <>
      <div style={{ padding: 10 }}>
        <Radio
          label="primeiro"
          labelFor="primeiro"
          id="primeiro"
          name="nome"
          value="primeiro"
          defaultChecked
          {...args}
        />
      </div>
      <div style={{ padding: 10 }}>
        <Radio
          label="segundo"
          labelFor="segundo"
          id="segundo"
          name="nome"
          value="segundo"
          {...args}
        />
      </div>
      <div style={{ padding: 10 }}>
        <Radio
          label="terceiro"
          labelFor="terceiro"
          id="terceiro"
          name="nome"
          value="terceiro"
          {...args}
        />
      </div>
    </>
  );
};
