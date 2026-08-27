import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBar } from './ProgressBar';

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['success', 'danger', 'warning', 'blue', 'indigo', 'slate'],
      description: 'Color theme variant matching Figma BAR component (node-id 42-223)',
    },
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
    height: {
      control: 'number',
    },
    showLabel: {
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
type Story = StoryObj<typeof ProgressBar>;

export const SuccessGreen: Story = {
  args: {
    variant: 'success',
    value: 75,
  },
};

export const DangerRed: Story = {
  args: {
    variant: 'danger',
    value: 30,
  },
};

export const WarningYellow: Story = {
  args: {
    variant: 'warning',
    value: 60,
  },
};

export const Blue: Story = {
  args: {
    variant: 'blue',
    value: 60,
  },
};

export const Indigo: Story = {
  args: {
    variant: 'indigo',
    value: 60,
  },
};

export const SlateMuted: Story = {
  args: {
    variant: 'slate',
    value: 60,
  },
};

/** All 6 Variants Stack (matching Figma BAR component / node-id 42-223) */
export const BarFigmaStack: Story = {
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
        width: '500px',
      }}
    >
      <div style={{ color: '#c084fc', fontSize: '15px', fontWeight: 600, fontFamily: 'monospace' }}>
        ❖ BAR (node-id: 42-223)
      </div>
      <ProgressBar variant="success" value={75} />
      <ProgressBar variant="danger" value={30} />
      <ProgressBar variant="warning" value={60} />
      <ProgressBar variant="blue" value={60} />
      <ProgressBar variant="indigo" value={60} />
      <ProgressBar variant="slate" value={60} />
    </div>
  ),
};
