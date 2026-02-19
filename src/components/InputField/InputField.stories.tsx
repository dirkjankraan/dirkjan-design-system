import type { Meta, StoryObj } from '@storybook/react';
import { InputField } from './InputField';

const meta: Meta<typeof InputField> = {
  title: 'Components/InputField',
  component: InputField,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    hint: { control: 'text' },
    required: { control: 'boolean' },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
  args: {
    label: 'Email',
    placeholder: 'info@dirkjankraan.nl',
    hint: 'This is a hint text to help user.',
    required: false,
    disabled: false,
    fullWidth: false,
  },
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const Default: Story = {};

export const WithRequired: Story = {
  name: 'Required',
  args: {
    required: true,
  },
};

export const Filled: Story = {
  args: {
    defaultValue: 'info@dirkjankraan.nl',
  },
};

export const Focused: Story = {
  args: {
    autoFocus: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: 'info@dirkjankraan.nl',
  },
};

export const WithoutLabel: Story = {
  args: {
    label: undefined,
  },
};

export const WithoutHint: Story = {
  args: {
    hint: undefined,
  },
};

export const AllStates: Story = {
  name: 'All States',
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <InputField {...args} placeholder="Placeholder" label="Placeholder" />
      <InputField {...args} defaultValue="info@dirkjankraan.nl" label="Filled" />
      <InputField {...args} autoFocus defaultValue="info@dirkjankraan.nl" label="Focused" />
      <InputField {...args} disabled defaultValue="info@dirkjankraan.nl" label="Disabled" />
    </div>
  ),
  args: {
    hint: 'This is a hint text to help user.',
    required: true,
  },
};
