import type { Meta, StoryObj } from '@storybook/react';
import { Frame54 } from './Frame54';

const meta: Meta<typeof Frame54> = {
  title: 'Components/Frame54',
  component: Frame54,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '### Figma Layer Spec Table\n\n- **Exact Layer Name**: Frame 54\n- **Background**: var(--uedp-slate-800)\n- **Stroke**: var(--uedp-slate-600)\n- **Radius**: 20px\n- **Gap**: var(--uedp-gap-4)\n- **Padding**: var(--uedp-padding-6)',
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
type Story = StoryObj<typeof Frame54>;

export const Default: Story = {
  args: {
    title: 'Frame 54',
    description: 'Synchronized React Component built directly from Figma design system node specs.',
    variant: 'default',
  },
};

export const Interactive: Story = {
  args: {
    title: 'Frame 54 Active',
    description: 'Hover and inspect native Storybook controls for real-time design token customization.',
    variant: 'default',
  },
};
