import type { Meta, StoryObj } from '@storybook/react';
import { Property1mid } from './Property1mid';

const meta: Meta<typeof Property1mid> = {
  title: 'Components/Property1mid',
  component: Property1mid,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '### Figma Layer Spec Table\n\n- **Exact Layer Name**: Property 1=mid\n- **Background**: var(--uedp-red-950-alt)\n- **Stroke**: var(--uedp-slate-600)\n- **Radius**: 24px\n- **Gap**: 10px\n- **Padding**: 10px',
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
type Story = StoryObj<typeof Property1mid>;

export const Default: Story = {
  args: {
    title: 'Property 1=mid',
    description: 'Synchronized React Component built directly from Figma design system node specs.',
    variant: 'default',
  },
};

export const Interactive: Story = {
  args: {
    title: 'Property 1=mid Active',
    description: 'Hover and inspect native Storybook controls for real-time design token customization.',
    variant: 'default',
  },
};
