import type { Meta, StoryObj } from '@storybook/react';
import { INSIDEGRAPHS } from './INSIDEGRAPHS';

const meta: Meta<typeof INSIDEGRAPHS> = {
  title: 'Components/INSIDEGRAPHS',
  component: INSIDEGRAPHS,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '### Figma Layer Spec Table\n\n- **Exact Layer Name**: INSIDE GRAPHS\n- **Background**: var(--uedp-slate-900)\n- **Stroke**: #8a38f5\n- **Radius**: 5px\n- **Gap**: var(--uedp-gap-4)\n- **Padding**: var(--uedp-padding-6)',
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
type Story = StoryObj<typeof INSIDEGRAPHS>;

export const Default: Story = {
  args: {
    title: 'INSIDE GRAPHS',
    description: 'Synchronized React Component built directly from Figma design system node specs.',
    variant: 'negetive',
  },
};

export const Interactive: Story = {
  args: {
    title: 'INSIDE GRAPHS Active',
    description: 'Hover and inspect native Storybook controls for real-time design token customization.',
    variant: 'positive',
  },
};
