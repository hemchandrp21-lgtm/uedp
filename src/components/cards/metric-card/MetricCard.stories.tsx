import type { Meta, StoryObj } from '@storybook/react';
import { MetricCard } from './MetricCard';

const meta: Meta<typeof MetricCard> = {
  title: 'Cards/MetricCard',
  component: MetricCard,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['success', 'danger', 'warning', 'muted'],
      description: 'Color theme variant matching Figma CARDS component (node-id 60-147)',
    },
    title: { control: 'text' },
    value: { control: 'text' },
    percentage: { control: 'text' },
    comparisonText: { control: 'text' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#05080e' }],
    },
  },
};

export default meta;
type Story = StoryObj<typeof MetricCard>;

export const SuccessGreen: Story = {
  args: {
    variant: 'success',
    title: 'ACTIVE COSTUMERS',
    value: '12,000',
    percentage: '0.0%',
    comparisonText: 'vs last month',
  },
};

export const DangerRed: Story = {
  args: {
    variant: 'danger',
    title: 'ACTIVE COSTUMERS',
    value: '12,000',
    percentage: '0.0%',
    comparisonText: 'vs last month',
  },
};

export const WarningAmber: Story = {
  args: {
    variant: 'warning',
    title: 'ACTIVE COSTUMERS',
    value: '12,000',
    percentage: '0.0%',
    comparisonText: 'vs last month',
  },
};

/** All 3 Cards Stack (matching Figma CARDS component / node-id 60-147) */
export const CardsFigmaStack: Story = {
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
        width: 'fit-content',
      }}
    >
      <div style={{ color: '#c084fc', fontSize: '15px', fontWeight: 600, fontFamily: 'monospace' }}>
        ❖ CARDS (node-id: 60-147)
      </div>
      <MetricCard variant="success" title="ACTIVE COSTUMERS" value="12,000" percentage="0.0%" />
      <MetricCard variant="danger" title="ACTIVE COSTUMERS" value="12,000" percentage="0.0%" />
      <MetricCard variant="warning" title="ACTIVE COSTUMERS" value="12,000" percentage="0.0%" />
    </div>
  ),
};
