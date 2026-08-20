import type { Meta, StoryObj } from '@storybook/react';
import { PERCENTAGES } from './PERCENTAGES';

const meta: Meta<typeof PERCENTAGES> = {
  title: 'Components/PERCENTAGES',
  component: PERCENTAGES,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '### Figma Layer Spec Table\n\n- **Exact Layer Name**: PERCENTAGES\n- **Background**: var(--uedp-slate-900)\n- **Stroke**: #8a38f5\n- **Radius**: 5px\n- **Gap**: var(--uedp-gap-4)\n- **Padding**: var(--uedp-padding-6)',
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
type Story = StoryObj<typeof PERCENTAGES>;

export const Default: Story = {
  args: {
    title: 'PERCENTAGES',
    description: 'Synchronized React Component built directly from Figma design system node specs.',
    variant: 'positive',
  },
};

export const Interactive: Story = {
  args: {
    title: 'PERCENTAGES Active',
    description: 'Hover and inspect native Storybook controls for real-time design token customization.',
    variant: 'Variant2',
  },
};
