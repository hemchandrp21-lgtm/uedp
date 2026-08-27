import type { Meta, StoryObj } from '@storybook/react';
import { NavItem } from './NavItem';
import { LayoutGrid, Users } from 'lucide-react';

const meta: Meta<typeof NavItem> = {
  title: 'Navigation/NavItem',
  component: NavItem,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['active', 'default', 'hover'],
      description: 'Visual state matching Figma Frame 149 (node-id 111-1527)',
    },
    label: {
      control: 'text',
      description: 'Navigation label text',
    },
    active: {
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
type Story = StoryObj<typeof NavItem>;

export const Active: Story = {
  args: {
    variant: 'active',
    label: 'Dashboard',
    icon: <LayoutGrid size={20} />,
  },
};

export const Default: Story = {
  args: {
    variant: 'default',
    label: 'Dashboard',
    icon: <Users size={20} />,
  },
};

export const Hover: Story = {
  args: {
    variant: 'hover',
    label: 'Dashboard',
    icon: <Users size={20} />,
  },
};

/** All 3 Variants Stack (matching Figma Frame 149 / node-id 111-1527) */
export const Frame149FigmaStack: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        padding: '32px 40px',
        backgroundColor: '#000000',
        borderRadius: '16px',
        border: '1.5px dashed #7c3aed',
        width: '320px',
      }}
    >
      <div style={{ color: '#c084fc', fontSize: '15px', fontWeight: 600, fontFamily: 'monospace' }}>
        ❖ Frame 149 (node-id: 111-1527)
      </div>
      <NavItem variant="active" label="Dashboard" icon={<LayoutGrid size={20} />} />
      <NavItem variant="default" label="Dashboard" icon={<Users size={20} />} />
      <NavItem variant="hover" label="Dashboard" icon={<Users size={20} />} />
    </div>
  ),
};
