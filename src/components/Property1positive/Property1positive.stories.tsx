import type { Meta, StoryObj } from '@storybook/react';
import { Property1positive } from './Property1positive';

const meta: Meta<typeof Property1positive> = {
  title: 'Components/Property1positive',
  component: Property1positive,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '### Figma Layer Spec Table\n\n- **Exact Layer Name**: Property 1=positive\n- **Background**: var(--uedp-teal-950)\n- **Stroke**: var(--uedp-slate-600)\n- **Radius**: 6px\n- **Gap**: 10px\n- **Padding**: var(--uedp-padding-6)',
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
type Story = StoryObj<typeof Property1positive>;

export const Default: Story = {
  args: {
    title: 'Property 1=positive',
    description: 'Synchronized React Component built directly from Figma design system node specs.',
    variant: 'default',
  },
};

export const Interactive: Story = {
  args: {
    title: 'Property 1=positive Active',
    description: 'Hover and inspect native Storybook controls for real-time design token customization.',
    variant: 'default',
  },
};
