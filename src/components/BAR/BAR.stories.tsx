import type { Meta, StoryObj } from '@storybook/react';
import { BAR } from './BAR';

const meta: Meta<typeof BAR> = {
  title: 'Components/BAR',
  component: BAR,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '### Figma Layer Spec Table\n\n- **Exact Layer Name**: BAR\n- **Background**: var(--uedp-slate-900)\n- **Stroke**: #8a38f5\n- **Radius**: 5px\n- **Gap**: var(--uedp-gap-4)\n- **Padding**: var(--uedp-padding-6)',
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
type Story = StoryObj<typeof BAR>;

export const Default: Story = {
  args: {
    title: 'BAR',
    description: 'Synchronized React Component built directly from Figma design system node specs.',
    variant: 'profit',
  },
};

export const Interactive: Story = {
  args: {
    title: 'BAR Active',
    description: 'Hover and inspect native Storybook controls for real-time design token customization.',
    variant: 'loss',
  },
};
