import { Story, Meta } from '@storybook/react/types-6-0';
import Checkbox from '.';
import type { CheckboxProps } from '.';

export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: { onCheck: { action: 'checked' } },
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'won-dark' },
  },
} as Meta;

export const Default: Story<CheckboxProps> = (args) => (
  <>
    <div style={{ padding: 10 }}>
      <Checkbox
        name="category"
        label="Action"
        labelFor="action"
        isChecked
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Checkbox
        name="category"
        label="Adventure"
        labelFor="adventure"
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Checkbox
        name="category"
        label="Strategy"
        labelFor="strategy"
        {...args}
      />
    </div>
  </>
);
