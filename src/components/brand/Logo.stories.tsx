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
          'Official sasystem sales design brand logo with integrated 3D tilt, gradient flow, and tactile spring microinteractions on hover and click.',
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
    variant: 'full',
    size: 'lg',
    theme: 'dark',
    interactive: true,
    tagline: 'SALES DESIGN',
  },
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  args: {
    variant: 'full',
    size: 'lg',
    theme: 'dark',
    tagline: 'SALES DESIGN',
  },
};

export const IconOnly: Story = {
  args: {
    variant: 'icon',
    size: 'lg',
    theme: 'dark',
  },
};
