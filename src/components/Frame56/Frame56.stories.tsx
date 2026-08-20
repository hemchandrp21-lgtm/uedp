import type { Meta, StoryObj } from '@storybook/react';
import { Frame56 } from './Frame56';

const meta: Meta<typeof Frame56> = {
  title: 'Components/Frame56',
  component: Frame56,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '### Figma Layer Spec Table\n\n- **Exact Layer Name**: Frame 56\n- **Background**: #854d0e\n- **Stroke**: var(--uedp-slate-600)\n- **Radius**: 4px\n- **Gap**: 10px\n- **Padding**: 10px',
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
type Story = StoryObj<typeof Frame56>;

export const Default: Story = {
  args: {
    title: 'Frame 56',
    description: 'Synchronized React Component built directly from Figma design system node specs.',
    variant: 'default',
  },
};

export const Interactive: Story = {
  args: {
    title: 'Frame 56 Active',
    description: 'Hover and inspect native Storybook controls for real-time design token customization.',
    variant: 'default',
  },
};
