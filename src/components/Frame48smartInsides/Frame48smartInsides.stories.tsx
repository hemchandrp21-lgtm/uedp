import type { Meta, StoryObj } from '@storybook/react';
import { Frame48smartInsides } from './Frame48smartInsides';

const meta: Meta<typeof Frame48smartInsides> = {
  title: 'Components/Frame48smartInsides',
  component: Frame48smartInsides,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '### Figma Layer Spec Table\n\n- **Exact Layer Name**: Frame 48/smart insides\n- **Background**: var(--uedp-slate-800)\n- **Stroke**: var(--uedp-slate-600)\n- **Radius**: 10px\n- **Gap**: 10px\n- **Padding**: 16px',
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
type Story = StoryObj<typeof Frame48smartInsides>;

export const Default: Story = {
  args: {
    title: 'Frame 48/smart insides',
    description: 'Synchronized React Component built directly from Figma design system node specs.',
    variant: 'default',
  },
};

export const Interactive: Story = {
  args: {
    title: 'Frame 48/smart insides Active',
    description: 'Hover and inspect native Storybook controls for real-time design token customization.',
    variant: 'default',
  },
};
