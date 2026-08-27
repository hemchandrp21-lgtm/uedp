import type { Meta, StoryObj } from '@storybook/react';
import { PercentageBadge } from './PercentageBadge';

const meta: Meta<typeof PercentageBadge> = {
  title: 'Components/PercentageBadge',
  component: PercentageBadge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['danger', 'success', 'warning', 'muted'],
      description: 'Color variant matching Figma NUMBERS status component (id 41-214)',
    },
    value: {
      control: 'text',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#05080e' }],
    },
  },
};

export default meta;
type Story = StoryObj<typeof PercentageBadge>;

export const Danger: Story = {
  args: {
    variant: 'danger',
    value: '+12.4%',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    value: '+12.4%',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    value: '+12.4%',
  },
};

export const Muted: Story = {
  args: {
    variant: 'muted',
    value: '+12.4%',
  },
};

/** All 3 Variants Row (matching Figma NUMBERS status component / id 41-214) */
export const NumbersStatusFigmaRow: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        padding: '36px 48px',
        backgroundColor: '#000000',
        borderRadius: '16px',
        border: '1.5px dashed #7c3aed',
        width: 'fit-content',
      }}
    >
      <div style={{ color: '#c084fc', fontSize: '15px', fontWeight: 600, fontFamily: 'monospace' }}>
        ❖ NUMBERS status (id: 41-214)
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <PercentageBadge variant="danger" value="+12.4%" />
        <PercentageBadge variant="success" value="+12.4%" />
        <PercentageBadge variant="warning" value="+12.4%" />
      </div>
    </div>
  ),
};
