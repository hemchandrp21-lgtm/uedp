import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { Upload, ChevronDown } from 'lucide-react';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'active', 'active-glow', 'disabled'],
      description: 'Visual variant matching Figma node-id 111-1422',
    },
    label: {
      control: 'text',
      description: 'Button text label',
    },
    showLeftIcon: {
      control: 'boolean',
    },
    showRightIcon: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#080c14' }],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: 'default',
    label: 'All Regions',
  },
};

export const Active: Story = {
  args: {
    variant: 'active',
    label: 'All Regions',
  },
};

export const ActiveGlow: Story = {
  args: {
    variant: 'active-glow',
    label: 'All Regions',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'disabled',
    label: 'All Regions',
  },
};

/** All Variants Stack (matching Figma component node-id 111-1422) */
export const Button1FigmaStack: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '24px',
        padding: '36px 48px',
        backgroundColor: '#05080e',
        borderRadius: '16px',
        border: '1.5px dashed #7c3aed',
        width: 'fit-content',
      }}
    >
      <div style={{ color: '#c084fc', fontSize: '15px', fontWeight: 600, fontFamily: 'monospace' }}>
        ❖ button 1 (node-id: 111-1422)
      </div>
      <Button variant="default" label="All Regions" />
      <Button variant="active" label="All Regions" />
      <Button variant="active-glow" label="All Regions" />
      <Button variant="disabled" label="All Regions" />
    </div>
  ),
};
