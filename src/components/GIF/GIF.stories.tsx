import type { Meta, StoryObj } from '@storybook/react';
import { GIF } from './GIF';

const meta: Meta<typeof GIF> = {
  title: 'Components/GIF',
  component: GIF,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '### Figma Layer Spec Table\n\n- **Exact Layer Name**: GIF\n- **Background**: var(--uedp-slate-900)\n- **Stroke**: var(--uedp-slate-600)\n- **Radius**: var(--uedp-rounded-xl)\n- **Gap**: var(--uedp-gap-4)\n- **Padding**: var(--uedp-padding-6)',
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
type Story = StoryObj<typeof GIF>;

export const Default: Story = {
  args: {
    title: 'GIF',
    description: 'Synchronized React Component built directly from Figma design system node specs.',
    variant: 'default',
  },
};

export const Interactive: Story = {
  args: {
    title: 'GIF Active',
    description: 'Hover and inspect native Storybook controls for real-time design token customization.',
    variant: 'default',
  },
};
