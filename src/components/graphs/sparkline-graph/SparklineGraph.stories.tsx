import type { Meta, StoryObj } from '@storybook/react';
import { SparklineGraph } from './SparklineGraph';

const meta: Meta<typeof SparklineGraph> = {
  title: 'Graphs/SparklineGraph',
  component: SparklineGraph,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['danger', 'success', 'warning', 'purple', 'slate'],
      description: 'Color theme variant matching Figma INSIDE GRAPHS component (node-id 78-265)',
    },
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
type Story = StoryObj<typeof SparklineGraph>;

export const DangerRed: Story = {
  args: {
    variant: 'danger',
  },
};

export const SuccessGreen: Story = {
  args: {
    variant: 'success',
  },
};

export const WarningYellow: Story = {
  args: {
    variant: 'warning',
  },
};

export const Purple: Story = {
  args: {
    variant: 'purple',
  },
};

export const SlateMuted: Story = {
  args: {
    variant: 'slate',
  },
};

/** All 5 Variants Stack (matching Figma INSIDE GRAPHS component / node-id 78-265) */
export const InsideGraphsFigmaStack: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        padding: '36px 48px',
        backgroundColor: '#000000',
        borderRadius: '16px',
        border: '1.5px dashed #7c3aed',
        width: '420px',
      }}
    >
      <div style={{ color: '#c084fc', fontSize: '15px', fontWeight: 600, fontFamily: 'monospace' }}>
        ❖ INSIDE GRAPHS (node-id: 78-265)
      </div>
      <SparklineGraph variant="danger" />
      <SparklineGraph variant="success" />
      <SparklineGraph variant="warning" />
      <SparklineGraph variant="purple" />
      <SparklineGraph variant="slate" />
    </div>
  ),
};
