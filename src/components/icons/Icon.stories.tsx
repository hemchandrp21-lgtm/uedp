import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'Icons/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: [
        'menu', 'arrow-left', 'arrow-right', 'arrow-up', 'arrow-down',
        'chevron-left', 'chevron-right', 'chevron-up', 'chevron-down',
        'check', 'close', 'plus', 'minus', 'search', 'star', 'trash',
        'edit', 'settings', 'folder', 'file', 'mail', 'bookmark', 'sun',
        'moon', 'calendar', 'clock', 'bell', 'user', 'users', 'volume',
        'play', 'pause', 'share', 'filter', 'link'
      ],
      description: 'Icon name matching Figma Icon component set (node-id 60-1101)',
    },
    size: { control: 'number' },
    color: { control: 'color' },
    hasDot: { control: 'boolean' },
    dotColor: { control: 'color' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#05080e' }],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const DefaultBell: Story = {
  args: {
    name: 'bell',
    size: 24,
    color: '#ffffff',
  },
};

export const BellWithNotificationDot: Story = {
  args: {
    name: 'bell',
    size: 24,
    color: '#ffffff',
    hasDot: true,
    dotColor: '#ef4444',
  },
};

export const Search: Story = {
  args: {
    name: 'search',
    size: 24,
    color: '#34d399',
  },
};

export const UsersGroup: Story = {
  args: {
    name: 'users',
    size: 24,
    color: '#fbbf24',
  },
};

/** All Icons Grid (reproducing Figma Icon set / node-id 60-1101) */
export const IconSetFigmaGrid: Story = {
  render: () => {
    const iconNames = [
      'menu', 'arrow-left', 'arrow-right', 'arrow-up', 'arrow-down',
      'chevron-left', 'chevron-right', 'chevron-up', 'chevron-down',
      'check', 'close', 'plus', 'minus', 'search', 'star', 'trash',
      'edit', 'settings', 'folder', 'file', 'mail', 'bookmark', 'sun',
      'moon', 'calendar', 'clock', 'bell', 'user', 'users', 'volume',
      'play', 'pause', 'share', 'filter', 'link'
    ];

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          padding: '36px 48px',
          backgroundColor: '#000000',
          borderRadius: '16px',
          border: '1.5px dashed #7c3aed',
          width: 'fit-content',
        }}
      >
        <div style={{ color: '#c084fc', fontSize: '15px', fontWeight: 600, fontFamily: 'monospace' }}>
          ❖ Icon (node-id: 60-1101)
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 1fr)',
            gap: '24px',
            alignItems: 'center',
            justifyItems: 'center',
          }}
        >
          {iconNames.map((iconName) => (
            <div
              key={iconName}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
                padding: '12px',
                borderRadius: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                minWidth: '64px',
              }}
            >
              <Icon name={iconName} size={22} color="#ffffff" />
              <span style={{ fontSize: '11px', color: '#64748b', fontFamily: 'monospace' }}>{iconName}</span>
            </div>
          ))}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
              padding: '12px',
              borderRadius: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              minWidth: '64px',
            }}
          >
            <Icon name="bell" size={22} color="#ffffff" hasDot={true} />
            <span style={{ fontSize: '11px', color: '#ef4444', fontFamily: 'monospace' }}>bell-dot</span>
          </div>
        </div>
      </div>
    );
  },
};
