import type { Meta, StoryObj } from '@storybook/react';
import { GRAPHS } from './GRAPHS';

const meta: Meta<typeof GRAPHS> = {
  title: 'Components/GRAPHS',
  component: GRAPHS,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '### Figma Layer Spec Table\n\n- **Exact Layer Name**: GRAPHS\n- **Background**: var(--uedp-slate-900)\n- **Stroke**: #8a38f5\n- **Radius**: 5px\n- **Gap**: var(--uedp-gap-4)\n- **Padding**: var(--uedp-padding-6)',
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
type Story = StoryObj<typeof GRAPHS>;

export const Default: Story = {
  args: {
    title: 'GRAPHS',
    description: 'Synchronized React Component built directly from Figma design system node specs.',
    variant: 'Default',
  },
};

export const Interactive: Story = {
  args: {
    title: 'GRAPHS Active',
    description: 'Hover and inspect native Storybook controls for real-time design token customization.',
    variant: 'Variant2',
  },
};
