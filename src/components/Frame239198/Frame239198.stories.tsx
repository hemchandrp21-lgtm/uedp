import type { Meta, StoryObj } from '@storybook/react';
import { Frame239198 } from './Frame239198';

const meta: Meta<typeof Frame239198> = {
  title: 'Components/Frame239198',
  component: Frame239198,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '### Figma Layer Spec Table\n\n- **Exact Layer Name**: Frame 239198\n- **Background**: var(--uedp-slate-900)\n- **Stroke**: var(--uedp-slate-600)\n- **Radius**: var(--uedp-rounded-xl)\n- **Gap**: 10px\n- **Padding**: 10px',
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
type Story = StoryObj<typeof Frame239198>;

export const Default: Story = {
  args: {
    title: 'Frame 239198',
    description: 'Synchronized React Component built directly from Figma design system node specs.',
    variant: 'default',
  },
};

export const Interactive: Story = {
  args: {
    title: 'Frame 239198 Active',
    description: 'Hover and inspect native Storybook controls for real-time design token customization.',
    variant: 'default',
  },
};
