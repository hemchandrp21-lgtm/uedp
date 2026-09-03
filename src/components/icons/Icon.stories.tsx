import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
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
    on: {
      control: 'boolean',
      description: 'Boolean ON/OFF state toggle for icon active/inactive appearance',
      defaultValue: true,
    },
    active: {
      control: 'boolean',
      description: 'Alias boolean ON/OFF active toggle',
      defaultValue: true,
    },
    size: { control: 'number' },
    color: { control: 'color' },
    activeColor: { control: 'color' },
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

export const DefaultBellON: Story = {
  args: {
    name: 'bell',
    size: 24,
    color: '#38bdf8',
    on: true,
  },
};

export const DefaultBellOFF: Story = {
  args: {
    name: 'bell',
    size: 24,
    color: '#94a3b8',
    on: false,
  },
};

export const BellWithNotificationDotON: Story = {
  args: {
    name: 'bell',
    size: 24,
    color: '#ffffff',
    hasDot: true,
    dotColor: '#ef4444',
    on: true,
  },
};

export const InteractiveOnOffMasterToggle: Story = {
  render: () => {
    const [globalOn, setGlobalOn] = useState(true);

    const iconNames = [
      'menu', 'search', 'star', 'settings', 'bell', 'user', 'users',
      'volume', 'play', 'pause', 'mail', 'bookmark', 'sun', 'moon'
    ];

    return (
      <div style={{ padding: '24px', background: '#0f172a', borderRadius: '16px', border: '1px solid #1e293b' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <div>
            <h3 style={{ margin: 0, color: '#f8fafc', fontSize: '18px' }}>Boolean ON/OFF State Controller</h3>
            <p style={{ margin: '4px 0 0 0', color: '#94a3b8', fontSize: '13px' }}>
              Toggle the boolean switch below to see all icons seamlessly switch between ON (active glow) and OFF (muted grayscale).
            </p>
          </div>
          <button
            onClick={() => setGlobalOn(!globalOn)}
            style={{
              padding: '10px 20px',
              borderRadius: '12px',
              fontWeight: 700,
              fontSize: '14px',
              border: 'none',
              cursor: 'pointer',
              background: globalOn ? 'linear-gradient(135deg, #38bdf8, #6366f1)' : '#334155',
              color: '#ffffff',
              boxShadow: globalOn ? '0 4px 14px rgba(56, 189, 248, 0.4)' : 'none',
              transition: 'all 0.2s ease',
            }}
          >
            STATE: {globalOn ? 'ON 🟢' : 'OFF 🔴'}
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '16px', justifyItems: 'center' }}>
          {iconNames.map((name) => (
            <div
              key={name}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
                padding: '16px',
                borderRadius: '12px',
                background: globalOn ? 'rgba(56, 189, 248, 0.08)' : 'rgba(255, 255, 255, 0.02)',
                border: globalOn ? '1px solid rgba(56, 189, 248, 0.3)' : '1px solid rgba(255, 255, 255, 0.05)',
                width: '76px',
                transition: 'all 0.2s ease',
              }}
            >
              <Icon name={name} size={24} color="#38bdf8" on={globalOn} />
              <span style={{ fontSize: '11px', color: globalOn ? '#38bdf8' : '#64748b', fontFamily: 'monospace' }}>
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

/** All Icons Grid with Side-by-Side ON vs OFF comparison */
export const IconSetFigmaGridOnOff: Story = {
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
          maxWidth: '960px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ color: '#c084fc', fontSize: '15px', fontWeight: 600, fontFamily: 'monospace' }}>
            ❖ Icon Component Set with Boolean ON/OFF States (node-id: 60-1101)
          </div>
          <div style={{ display: 'flex', gap: '16px', fontSize: '12px', fontWeight: 600 }}>
            <span style={{ color: '#38bdf8' }}>● ON (active)</span>
            <span style={{ color: '#64748b' }}>○ OFF (inactive)</span>
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: '16px',
            alignItems: 'center',
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
                borderRadius: '10px',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
              }}
            >
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Icon name={iconName} size={22} color="#38bdf8" on={true} />
                <Icon name={iconName} size={22} color="#94a3b8" on={false} />
              </div>
              <span style={{ fontSize: '11px', color: '#94a3b8', fontFamily: 'monospace' }}>{iconName}</span>
            </div>
          ))}
        </div>
      </div>
    );
  },
};
