import type { Meta, StoryObj } from '@storybook/react';
import { Property1t } from './Property1t';

const meta: Meta<typeof Property1t> = {
  title: 'Components/Property1t',
  component: Property1t,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '### Figma Layer Spec Table\n\n- **Exact Layer Name**: Property 1=t\n- **Background**: var(--uedp-amber-950)\n- **Stroke**: var(--uedp-slate-600)\n- **Radius**: 6px\n- **Gap**: 10px\n- **Padding**: 10px',
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
type Story = StoryObj<typeof Property1t>;

export const Default: Story = {
  args: {
    title: 'Property 1=t',
    description: 'Synchronized React Component built directly from Figma design system node specs.',
    variant: 'default',
  },
};

export const Interactive: Story = {
  args: {
    title: 'Property 1=t Active',
    description: 'Hover and inspect native Storybook controls for real-time design token customization.',
    variant: 'default',
  },
};
