import type { Meta, StoryObj } from '@storybook/react';
import { Frame148 } from './Frame148';

const meta: Meta<typeof Frame148> = {
  title: 'Components/Frame148',
  component: Frame148,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '### Figma Layer Spec Table\n\n- **Exact Layer Name**: Frame 148\n- **Background**: var(--uedp-teal-950)\n- **Stroke**: var(--uedp-slate-600)\n- **Radius**: 8px\n- **Gap**: var(--uedp-gap-4)\n- **Padding**: var(--uedp-padding-6)',
      },
    },
  },
  argTypes: {
    title: { control: 'text', description: 'Layer Title derived from Figma' },
    description: { control: 'text', description: 'Component description' },
    variant: { control: 'text', description: 'Figma component variant state' },
  },
};

export default meta;
type Story = StoryObj<typeof Frame148>;

export const Default: Story = {
  args: {
    title: 'Frame 148',
    description: 'Synchronized React Component built directly from Figma design system node specs.',
    variant: 'default',
  },
};

export const Interactive: Story = {
  args: {
    title: 'Frame 148 Active',
    description: 'Hover and inspect native Storybook controls for real-time design token customization.',
    variant: 'default',
  },
};
