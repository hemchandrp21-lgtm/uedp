import type { Meta, StoryObj } from '@storybook/react';
import { StatBadge } from './StatBadge';

const meta: Meta<typeof StatBadge> = {
  title: 'Badges/StatBadge',
  component: StatBadge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['success', 'danger', 'warning', 'muted'],
      description: 'Color variant matching Figma Frame 94 (node-id 104-637)',
    },
    subtitle: {
      control: 'text',
      description: 'Header line text',
    },
    title: {
      control: 'text',
      description: 'Main metric value text',
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
type Story = StoryObj<typeof StatBadge>;

export const Success: Story = {
  args: {
    variant: 'success',
    subtitle: 'BEST DAY',
    title: 'WED',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    subtitle: 'BEST DAY',
    title: 'WED',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    subtitle: 'BEST DAY',
    title: 'WED',
  },
};

export const Muted: Story = {
  args: {
    variant: 'muted',
    subtitle: 'BEST DAY',
    title: 'WED',
  },
};

/** All 4 Variants Stack (matching Figma Frame 94 / node-id 104-637) */
export const Frame94FigmaStack: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '36px',
        padding: '40px 48px',
        backgroundColor: '#000000',
        borderRadius: '16px',
        border: '1.5px dashed #7c3aed',
        width: '240px',
      }}
    >
      <div style={{ color: '#c084fc', fontSize: '15px', fontWeight: 600, fontFamily: 'monospace' }}>
        ❖ Frame 94 (node-id: 104-637)
      </div>
      <StatBadge variant="success" subtitle="BEST DAY" title="WED" />
      <StatBadge variant="danger" subtitle="BEST DAY" title="WED" />
      <StatBadge variant="warning" subtitle="BEST DAY" title="WED" />
      <StatBadge variant="muted" subtitle="BEST DAY" title="WED" />
    </div>
  ),
};
