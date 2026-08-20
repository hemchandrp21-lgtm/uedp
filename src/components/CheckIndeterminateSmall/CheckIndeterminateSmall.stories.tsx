import type { Meta, StoryObj } from '@storybook/react';
import { CheckIndeterminateSmall } from './CheckIndeterminateSmall';

const meta: Meta<typeof CheckIndeterminateSmall> = {
  title: 'Components/CheckIndeterminateSmall',
  component: CheckIndeterminateSmall,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '### Figma Layer Spec Table\n\n- **Exact Layer Name**: check_indeterminate_small\n- **Background**: var(--uedp-slate-900)\n- **Stroke**: var(--uedp-slate-600)\n- **Radius**: var(--uedp-rounded-xl)\n- **Gap**: var(--uedp-gap-4)\n- **Padding**: var(--uedp-padding-6)',
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
type Story = StoryObj<typeof CheckIndeterminateSmall>;

export const Default: Story = {
  args: {
    title: 'check_indeterminate_small',
    description: 'Synchronized React Component built directly from Figma design system node specs.',
    variant: 'default',
  },
};

export const Interactive: Story = {
  args: {
    title: 'check_indeterminate_small Active',
    description: 'Hover and inspect native Storybook controls for real-time design token customization.',
    variant: 'default',
  },
};
