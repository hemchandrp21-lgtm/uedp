import type { Meta, StoryObj } from '@storybook/react';
import { IconBadge } from './IconBadge';
import { Users } from 'lucide-react';

const meta: Meta<typeof IconBadge> = {
  title: 'Badges/IconBadge',
  component: IconBadge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['danger', 'success', 'warning', 'muted'],
      description: 'Color variant matching Figma material icon component (node-id 60-99)',
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
type Story = StoryObj<typeof IconBadge>;

export const Danger: Story = {
  args: {
    variant: 'danger',
    icon: <Users size={22} />,
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    icon: <Users size={22} />,
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    icon: <Users size={22} />,
  },
};

export const Muted: Story = {
  args: {
    variant: 'muted',
    icon: <Users size={22} />,
  },
};

/** All 3 Variants Stack (matching Figma material icon badge component / node-id 60-99) */
export const MaterialIconFigmaStack: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        padding: '32px 40px',
        backgroundColor: '#000000',
        borderRadius: '16px',
        border: '1.5px dashed #7c3aed',
        width: 'fit-content',
      }}
    >
      <div style={{ color: '#c084fc', fontSize: '15px', fontWeight: 600, fontFamily: 'monospace' }}>
        ❖ material... (node-id: 60-99)
      </div>
      <IconBadge variant="danger" icon={<Users size={22} />} />
      <IconBadge variant="success" icon={<Users size={22} />} />
      <IconBadge variant="warning" icon={<Users size={22} />} />
    </div>
  ),
};
