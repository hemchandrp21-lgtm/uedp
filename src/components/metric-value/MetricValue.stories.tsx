import type { Meta, StoryObj } from '@storybook/react';
import { MetricValue } from './MetricValue';

const meta: Meta<typeof MetricValue> = {
  title: 'Components/MetricValue',
  component: MetricValue,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['negative', 'positive', 'currency', 'muted', 'warning', 'indigo'],
      description: 'Color variant matching Figma Frame 60 (node-id 94-362)',
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
type Story = StoryObj<typeof MetricValue>;

export const Negative: Story = {
  args: {
    variant: 'negative',
    value: '123k',
  },
};

export const Positive: Story = {
  args: {
    variant: 'positive',
    value: '123k',
  },
};

export const CurrencyWhite: Story = {
  args: {
    variant: 'currency',
    value: '123k',
  },
};

export const Muted: Story = {
  args: {
    variant: 'muted',
    value: '123k',
  },
};

export const WarningAmber: Story = {
  args: {
    variant: 'warning',
    value: '123k',
  },
};

export const IndigoBlue: Story = {
  args: {
    variant: 'indigo',
    value: '123k',
  },
};

/** All 6 Variants Stack (matching Figma Frame 60 / node-id 94-362) */
export const Frame60FigmaStack: Story = {
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
        width: '240px',
      }}
    >
      <div style={{ color: '#c084fc', fontSize: '15px', fontWeight: 600, fontFamily: 'monospace' }}>
        ❖ Frame 60 (node-id: 94-362)
      </div>
      <MetricValue variant="negative" value="123k" />
      <MetricValue variant="positive" value="123k" />
      <MetricValue variant="currency" value="123k" />
      <MetricValue variant="muted" value="123k" />
      <MetricValue variant="warning" value="123k" />
      <MetricValue variant="indigo" value="123k" />
    </div>
  ),
};
