import type { Meta, StoryObj } from '@storybook/react';
import { CheckBoxOutlineBlank } from './CheckBoxOutlineBlank';

const meta: Meta<typeof CheckBoxOutlineBlank> = {
  title: 'Components/CheckBoxOutlineBlank',
  component: CheckBoxOutlineBlank,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '### Figma Layer Spec Table\n\n- **Exact Layer Name**: check_box_outline_blank\n- **Background**: var(--uedp-slate-900)\n- **Stroke**: var(--uedp-slate-600)\n- **Radius**: var(--uedp-rounded-xl)\n- **Gap**: var(--uedp-gap-4)\n- **Padding**: var(--uedp-padding-6)',
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
type Story = StoryObj<typeof CheckBoxOutlineBlank>;

export const Default: Story = {
  args: {
    title: 'check_box_outline_blank',
    description: 'Synchronized React Component built directly from Figma design system node specs.',
    variant: 'default',
  },
};

export const Interactive: Story = {
  args: {
    title: 'check_box_outline_blank Active',
    description: 'Hover and inspect native Storybook controls for real-time design token customization.',
    variant: 'default',
  },
};
