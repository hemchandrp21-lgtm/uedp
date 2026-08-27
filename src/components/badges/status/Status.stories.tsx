import type { Meta, StoryObj } from '@storybook/react';
import { Status } from './Status';

const meta: Meta<typeof Status> = {
  title: 'Badges/Status',
  component: Status,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['success', 'danger', 'warning', 'muted'],
      description: 'Color variant matching Figma status component (node-id 30-88)',
    },
    label: {
      control: 'text',
      description: 'Status label text',
    },
    showDot: {
      control: 'boolean',
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
type Story = StoryObj<typeof Status>;

export const Success: Story = {
  args: {
    variant: 'success',
    label: 'March 2026',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    label: 'March 2026',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    label: 'March 2026',
  },
};

export const Muted: Story = {
  args: {
    variant: 'muted',
    label: 'March 2026',
  },
};

/** All 4 Variants Stack (matching Figma status component / node-id 30-88) */
export const StatusFigmaStack: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '24px',
        padding: '36px 48px',
        backgroundColor: '#000000',
        borderRadius: '16px',
        border: '1.5px dashed #7c3aed',
        width: '280px',
      }}
    >
      <div style={{ color: '#c084fc', fontSize: '15px', fontWeight: 600, fontFamily: 'monospace' }}>
        ❖ status (node-id: 30-88)
      </div>
      <Status variant="success" label="March 2026" />
      <Status variant="danger" label="March 2026" />
      <Status variant="warning" label="March 2026" />
      <Status variant="muted" label="March 2026" />
    </div>
  ),
};
