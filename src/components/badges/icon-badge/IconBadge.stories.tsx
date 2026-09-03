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
    on: {
      control: 'boolean',
      description: 'Boolean ON/OFF state toggle for icon badge active/inactive appearance',
      defaultValue: true,
    },
    active: {
      control: 'boolean',
      description: 'Alias boolean ON/OFF active toggle',
      defaultValue: true,
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

export const DangerON: Story = {
  args: {
    variant: 'danger',
    icon: <Users size={22} />,
    on: true,
  },
};

export const DangerOFF: Story = {
  args: {
    variant: 'danger',
    icon: <Users size={22} />,
    on: false,
  },
};

export const SuccessON: Story = {
  args: {
    variant: 'success',
    icon: <Users size={22} />,
    on: true,
  },
};

export const WarningON: Story = {
  args: {
    variant: 'warning',
    icon: <Users size={22} />,
    on: true,
  },
};

export const Muted: Story = {
  args: {
    variant: 'muted',
    icon: <Users size={22} />,
    on: true,
  },
};

/** All 3 Variants Stack with ON vs OFF boolean state comparison */
export const MaterialIconFigmaStackOnOff: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '24px',
        padding: '32px 40px',
        backgroundColor: '#000000',
        borderRadius: '16px',
        border: '1.5px dashed #7c3aed',
        width: 'fit-content',
      }}
    >
      <div style={{ color: '#c084fc', fontSize: '15px', fontWeight: 600, fontFamily: 'monospace' }}>
        ❖ material... (node-id: 60-99) with Boolean ON/OFF States
      </div>
      <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
          <span style={{ fontSize: '12px', color: '#38bdf8', fontWeight: 600 }}>ON (Active)</span>
          <IconBadge variant="danger" icon={<Users size={22} />} on={true} />
          <IconBadge variant="success" icon={<Users size={22} />} on={true} />
          <IconBadge variant="warning" icon={<Users size={22} />} on={true} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
          <span style={{ fontSize: '12px', color: '#64748b', fontWeight: 600 }}>OFF (Inactive)</span>
          <IconBadge variant="danger" icon={<Users size={22} />} on={false} />
          <IconBadge variant="success" icon={<Users size={22} />} on={false} />
          <IconBadge variant="warning" icon={<Users size={22} />} on={false} />
        </div>
      </div>
    </div>
  ),
};
