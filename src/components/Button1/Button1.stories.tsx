import type { Meta, StoryObj } from '@storybook/react';
import { Button1 } from './Button1';

const meta: Meta<typeof Button1> = {
  title: 'Components/Button1',
  component: Button1,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '### Figma Layer Spec Table\n\n- **Exact Layer Name**: button 1\n- **Background**: var(--uedp-slate-900)\n- **Stroke**: #8a38f5\n- **Radius**: 5px\n- **Gap**: var(--uedp-gap-4)\n- **Padding**: var(--uedp-padding-6)',
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
type Story = StoryObj<typeof Button1>;

export const Default: Story = {
  args: {
    title: 'button 1',
    description: 'Synchronized React Component built directly from Figma design system node specs.',
    variant: 'Default',
  },
};

export const Interactive: Story = {
  args: {
    title: 'button 1 Active',
    description: 'Hover and inspect native Storybook controls for real-time design token customization.',
    variant: 'Variant2',
  },
};
