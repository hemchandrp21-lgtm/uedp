import type { Meta, StoryObj } from '@storybook/react';
import { Frame158 } from './Frame158';

const meta: Meta<typeof Frame158> = {
  title: 'Components/Frame158',
  component: Frame158,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '### Figma Layer Spec Table\n\n- **Exact Layer Name**: Frame 158\n- **Background**: var(--uedp-slate-900)\n- **Stroke**: #8a38f5\n- **Radius**: 5px\n- **Gap**: 68px\n- **Padding**: 20px',
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
type Story = StoryObj<typeof Frame158>;

export const Default: Story = {
  args: {
    title: 'Frame 158',
    description: 'Synchronized React Component built directly from Figma design system node specs.',
    variant: 'dashboard',
  },
};

export const Interactive: Story = {
  args: {
    title: 'Frame 158 Active',
    description: 'Hover and inspect native Storybook controls for real-time design token customization.',
    variant: 'pipeline',
  },
};
