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
          'Official sasystem sales design logo with 3D tilt, radial glow, and interactive microinteractions.',
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size scaling of the logo component',
    },
    theme: {
      control: { type: 'inline-radio' },
      options: ['light', 'dark'],
      description: 'Color theme integration',
    },
    interactive: {
      control: { type: 'boolean' },
      description: 'Toggles interactive hover/click microinteractions',
    },
    tagline: {
      control: { type: 'text' },
      description: 'Tagline text shown under brand name',
    },
  },
  args: {
    size: 'lg',
    theme: 'dark',
    interactive: true,
    tagline: 'sales design',
  },
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  args: {
    size: 'lg',
    theme: 'dark',
    tagline: 'sales design',
  },
};
