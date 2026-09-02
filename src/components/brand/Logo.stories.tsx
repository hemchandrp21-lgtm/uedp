import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from './Logo';

const meta: Meta<typeof Logo> = {
  title: 'Brand/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Official sasystem brand logo component with integrated 3D tilt, gradient flow, and tactile spring microinteractions on hover and active states.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['full', 'icon', 'stacked'],
      description: 'Layout arrangement of logo icon and brand text',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size scaling of the logo component',
    },
    theme: {
      control: { type: 'inline-radio' },
      options: ['light', 'dark'],
      description: 'Color theme for dark background or light background integration',
    },
    interactive: {
      control: { type: 'boolean' },
      description: 'Toggles interactive hover/click microinteractions',
    },
    tagline: {
      control: { type: 'text' },
      description: 'Optional tagline shown under brand name',
    },
  },
  args: {
    variant: 'full',
    size: 'md',
    theme: 'dark',
    interactive: true,
  },
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  args: {
    variant: 'full',
    size: 'md',
    theme: 'dark',
  },
};

export const WithTagline: Story = {
  args: {
    variant: 'full',
    size: 'lg',
    theme: 'dark',
    tagline: 'Design System',
  },
};

export const IconOnly: Story = {
  args: {
    variant: 'icon',
    size: 'lg',
    theme: 'dark',
  },
};

export const StackedLayout: Story = {
  args: {
    variant: 'stacked',
    size: 'lg',
    theme: 'dark',
    tagline: 'Enterprise UI Kit',
  },
};

export const SizesComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'flex-start', background: '#0f172a', padding: '32px', borderRadius: '12px' }}>
      <Logo size="sm" theme="dark" tagline="Small Logo" />
      <Logo size="md" theme="dark" tagline="Medium Logo" />
      <Logo size="lg" theme="dark" tagline="Large Logo" />
    </div>
  ),
};

export const MicrointeractionsDemo: Story = {
  render: () => (
    <div style={{ background: '#0f172a', padding: '40px', borderRadius: '16px', color: 'white', textAlign: 'center' }}>
      <p style={{ margin: '0 0 20px 0', color: '#94a3b8', fontSize: '14px', fontFamily: 'sans-serif' }}>
        👇 Hover over or click the logo below to experience 3D tilt, aura glow, and gradient microinteractions:
      </p>
      <Logo size="lg" theme="dark" tagline="Interactive Microinteractions Enabled" />
    </div>
  ),
};
