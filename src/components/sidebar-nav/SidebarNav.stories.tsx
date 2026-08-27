import type { Meta, StoryObj } from '@storybook/react';
import { SidebarNav } from './SidebarNav';

const meta: Meta<typeof SidebarNav> = {
  title: 'Components/SidebarNav',
  component: SidebarNav,
  tags: ['autodocs'],
  argTypes: {
    activeItem: {
      control: 'select',
      options: ['dashboard', 'sales-pipeline', 'revenue', 'inventory', 'costumers', 'teams', 'settings'],
      description: 'Active item matching Figma Frame 158 (node-id 173-2792)',
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
type Story = StoryObj<typeof SidebarNav>;

export const DashboardActive: Story = {
  args: {
    activeItem: 'dashboard',
  },
};

export const SalesPipelineActive: Story = {
  args: {
    activeItem: 'sales-pipeline',
  },
};

export const RevenueActive: Story = {
  args: {
    activeItem: 'revenue',
  },
};

export const SettingsActive: Story = {
  args: {
    activeItem: 'settings',
  },
};

/** All 7 Variants Side-by-Side (matching Figma Frame 158 / node-id 173-2792) */
export const Frame158FigmaGrid: Story = {
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
        width: 'max-content',
        overflowX: 'auto',
      }}
    >
      <div style={{ color: '#c084fc', fontSize: '15px', fontWeight: 600, fontFamily: 'monospace' }}>
        ❖ Frame 158 (node-id: 173-2792)
      </div>
      <div style={{ display: 'flex', gap: '20px' }}>
        <SidebarNav activeItem="dashboard" />
        <SidebarNav activeItem="sales-pipeline" />
        <SidebarNav activeItem="revenue" />
        <SidebarNav activeItem="inventory" />
        <SidebarNav activeItem="costumers" />
        <SidebarNav activeItem="teams" />
        <SidebarNav activeItem="settings" />
      </div>
    </div>
  ),
};
