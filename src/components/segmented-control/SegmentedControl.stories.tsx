import type { Meta, StoryObj } from '@storybook/react';
import { SegmentedControl } from './SegmentedControl';

const meta: Meta<typeof SegmentedControl> = {
  title: 'Components/SegmentedControl',
  component: SegmentedControl,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'select',
      options: ['daily', 'Weakly', 'Monthly'],
      description: 'Currently active tab matching Figma Container component (node-id 46-150)',
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
type Story = StoryObj<typeof SegmentedControl>;

export const DailySelected: Story = {
  args: {
    options: ['daily', 'Weakly', 'Monthly'],
    value: 'daily',
  },
};

export const WeeklySelected: Story = {
  args: {
    options: ['daily', 'Weakly', 'Monthly'],
    value: 'Weakly',
  },
};

export const MonthlySelected: Story = {
  args: {
    options: ['daily', 'Weakly', 'Monthly'],
    value: 'Monthly',
  },
};

/** All 3 Variants Stack (matching Figma Container component / node-id 46-150) */
export const ContainerFigmaStack: Story = {
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
        ❖ Container (node-id: 46-150)
      </div>
      <SegmentedControl value="daily" />
      <SegmentedControl value="Weakly" />
      <SegmentedControl value="Monthly" />
    </div>
  ),
};
