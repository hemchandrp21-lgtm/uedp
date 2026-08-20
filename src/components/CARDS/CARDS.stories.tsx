import type { Meta, StoryObj } from '@storybook/react';
import { CARDS } from './CARDS';

const meta: Meta<typeof CARDS> = {
  title: 'Components/CARDS',
  component: CARDS,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '### Figma Layer Spec Table\n\n- **Exact Layer Name**: CARDS\n- **Background**: var(--uedp-slate-900)\n- **Stroke**: #8a38f5\n- **Radius**: 5px\n- **Gap**: var(--uedp-gap-4)\n- **Padding**: var(--uedp-padding-6)',
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
type Story = StoryObj<typeof CARDS>;

export const Default: Story = {
  args: {
    title: 'CARDS',
    description: 'Synchronized React Component built directly from Figma design system node specs.',
    variant: 'positive',
  },
};

export const Interactive: Story = {
  args: {
    title: 'CARDS Active',
    description: 'Hover and inspect native Storybook controls for real-time design token customization.',
    variant: 'Variant2',
  },
};
