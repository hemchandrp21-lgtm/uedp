import type { Meta, StoryObj } from '@storybook/react';
import { AreaGraph } from './AreaGraph';

const meta: Meta<typeof AreaGraph> = {
  title: 'Graphs/AreaGraph',
  component: AreaGraph,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['success', 'danger', 'warning', 'slate'],
      description: 'Color theme variant matching Figma GRAPHS component (node-id 106-1020)',
    },
    showDots: { control: 'boolean' },
    showBaseline: { control: 'boolean' },
    height: { control: 'number' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#05080e' }],
    },
  },
};

export default meta;
type Story = StoryObj<typeof AreaGraph>;

export const SuccessGreen: Story = {
  args: {
    variant: 'success',
    height: 120,
  },
};

export const DangerRed: Story = {
  args: {
    variant: 'danger',
    height: 120,
  },
};

export const WarningAmber: Story = {
  args: {
    variant: 'warning',
    height: 120,
  },
};

export const SlateMuted: Story = {
  args: {
    variant: 'slate',
    height: 120,
  },
};

/** All 4 Variants Stack (matching Figma GRAPHS component / node-id 106-1020) */
export const GraphsFigmaStack: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        padding: '36px 48px',
        backgroundColor: '#000000',
        borderRadius: '16px',
        border: '1.5px dashed #7c3aed',
        width: '460px',
      }}
    >
      <div style={{ color: '#c084fc', fontSize: '15px', fontWeight: 600, fontFamily: 'monospace' }}>
        ❖ GRAPHS (node-id: 106-1020)
      </div>
      <AreaGraph variant="success" height={120} />
      <AreaGraph variant="danger" height={120} />
      <AreaGraph variant="warning" height={120} />
      <AreaGraph variant="slate" height={120} />
    </div>
  ),
};
