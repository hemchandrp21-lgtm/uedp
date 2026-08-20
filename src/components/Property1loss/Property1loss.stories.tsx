import type { Meta, StoryObj } from '@storybook/react';
import { Property1loss } from './Property1loss';

const meta: Meta<typeof Property1loss> = {
  title: 'Components/Property1loss',
  component: Property1loss,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '### Figma Layer Spec Table\n\n- **Exact Layer Name**: Property 1=loss\n- **Background**: #eceef0\n- **Stroke**: var(--uedp-slate-600)\n- **Radius**: 12px\n- **Gap**: var(--uedp-gap-4)\n- **Padding**: var(--uedp-padding-6)',
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
type Story = StoryObj<typeof Property1loss>;

export const Default: Story = {
  args: {
    title: 'Property 1=loss',
    description: 'Synchronized React Component built directly from Figma design system node specs.',
    variant: 'default',
  },
};

export const Interactive: Story = {
  args: {
    title: 'Property 1=loss Active',
    description: 'Hover and inspect native Storybook controls for real-time design token customization.',
    variant: 'default',
  },
};
