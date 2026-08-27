import type { Meta, StoryObj } from '@storybook/react';
import { SmartInsightCard } from './SmartInsightCard';

const meta: Meta<typeof SmartInsightCard> = {
  title: 'Cards/SmartInsightCard',
  component: SmartInsightCard,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['success', 'danger', 'warning', 'muted'],
      description: 'Color variant matching Figma Frame 48/smart insides (node-id 106-658)',
    },
    statSubtitle: {
      control: 'text',
    },
    statTitle: {
      control: 'text',
    },
    description: {
      control: 'text',
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
type Story = StoryObj<typeof SmartInsightCard>;

export const DefaultSuccess: Story = {
  args: {
    variant: 'success',
    statSubtitle: 'BEST DAY',
    statTitle: 'WED',
    description: 'Wednesday Drives 23% Of Weekly Revenue — Highest Peak This Month',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    statSubtitle: 'LOWEST DAY',
    statTitle: 'SUN',
    description: 'Sunday Saw a 15% Drop In Conversion — Requires Marketing Boost',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    statSubtitle: 'CAUTION',
    statTitle: 'MON',
    description: 'Monday Stock Levels Are Running Below 10% Threshold',
  },
};

/** Figma Component Reproduction (node-id 106-658) */
export const SmartInsidesFigmaCard: Story = {
  render: () => (
    <div
      style={{
        padding: '32px 40px',
        backgroundColor: '#000000',
        borderRadius: '16px',
        border: '1.5px dashed #7c3aed',
        width: 'fit-content',
      }}
    >
      <div style={{ color: '#c084fc', fontSize: '15px', fontWeight: 600, fontFamily: 'monospace', marginBottom: '20px' }}>
        ❖ Frame 48/smart insides (node-id: 106-658)
      </div>
      <SmartInsightCard
        variant="success"
        statSubtitle="BEST DAY"
        statTitle="WED"
        description="Wednesday Drives 23% Of Weekly Revenue — Highest Peak This Month"
      />
    </div>
  ),
};
