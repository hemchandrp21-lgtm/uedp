import type { Meta, StoryObj } from '@storybook/react';
import { TopNavBar } from './TopNavBar';

const meta: Meta<typeof TopNavBar> = {
  title: 'Components/TopNavBar',
  component: TopNavBar,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    statusLabel: { control: 'text' },
    primaryActionText: { control: 'text' },
    secondaryActionText: { control: 'text' },
    hasUnreadNotifications: { control: 'boolean' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#05080e' }],
    },
  },
};

export default meta;
type Story = StoryObj<typeof TopNavBar>;

export const Default: Story = {
  args: {
    title: 'Sales Dashboard',
    statusLabel: 'March 2026',
    hasUnreadNotifications: true,
  },
};

/** Exact Figma Top Nav Bar Reproduction (node-id 171-1524) */
export const TopNavBarFigma: Story = {
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
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      <div style={{ color: '#c084fc', fontSize: '15px', fontWeight: 600, fontFamily: 'monospace' }}>
        ❖ top nav bar (node-id: 171-1524)
      </div>
      <TopNavBar
        title="Sales Dashboard"
        statusLabel="March 2026"
        secondaryActionText="All Categories"
        primaryActionText="+ All Regions"
        hasUnreadNotifications={true}
      />
    </div>
  ),
};
