import type { Meta, StoryObj } from '@storybook/react';
import { Frame108 } from './Frame108';

const meta: Meta<typeof Frame108> = {
  title: 'Components/Frame108',
  component: Frame108,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '### Figma Layer Spec Table\n\n- **Exact Layer Name**: Frame 108\n- **Background**: var(--uedp-slate-900)\n- **Stroke**: var(--uedp-slate-600)\n- **Radius**: var(--uedp-rounded-xl)\n- **Gap**: -20px\n- **Padding**: var(--uedp-padding-6)',
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
type Story = StoryObj<typeof Frame108>;

export const Default: Story = {
  args: {
    title: 'Frame 108',
    description: 'Synchronized React Component built directly from Figma design system node specs.',
    variant: 'default',
  },
};

export const Interactive: Story = {
  args: {
    title: 'Frame 108 Active',
    description: 'Hover and inspect native Storybook controls for real-time design token customization.',
    variant: 'default',
  },
};
