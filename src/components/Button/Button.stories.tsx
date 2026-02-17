import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    isDisabled: { control: 'boolean' },
    showLeadingIcon: { control: 'boolean' },
    showTrailingIcon: { control: 'boolean' },
    label: { control: 'text' },
  },
  args: {
    label: 'Button CTA',
    isDisabled: false,
    showLeadingIcon: false,
    showTrailingIcon: false,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// ── Variants ──

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'md',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'md',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    size: 'md',
  },
};

// ── All sizes ──

export const AllSizes: Story = {
  name: 'All Sizes (Primary)',
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
      <Button {...args} size="sm" label="Small" />
      <Button {...args} size="md" label="Medium" />
      <Button {...args} size="lg" label="Large" />
    </div>
  ),
  args: {
    variant: 'primary',
  },
};

// ── With icons ──

export const WithLeadingIcon: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    showLeadingIcon: true,
  },
};

export const WithTrailingIcon: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    showTrailingIcon: true,
  },
};

export const WithBothIcons: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    showLeadingIcon: true,
    showTrailingIcon: true,
  },
};

// ── Disabled ──

export const Disabled: Story = {
  name: 'Disabled (all variants)',
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
      <Button {...args} variant="primary" isDisabled label="Primary" />
      <Button {...args} variant="secondary" isDisabled label="Secondary" />
      <Button {...args} variant="ghost" isDisabled label="Ghost" />
    </div>
  ),
};
