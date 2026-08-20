import type { Meta, StoryObj } from '@storybook/react';
import { Property1Frame3 } from './Property1Frame3';

const meta: Meta<typeof Property1Frame3> = {
  title: 'Components/Property1Frame3',
  component: Property1Frame3,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '### Figma Layer Spec Table\n\n- **Exact Layer Name**: Property 1=Frame 3\n- **Background**: var(--uedp-emerald-950)\n- **Stroke**: var(--uedp-slate-600)\n- **Radius**: 8px\n- **Gap**: 10px\n- **Padding**: 4px',
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
type Story = StoryObj<typeof Property1Frame3>;

export const Default: Story = {
  args: {
    title: 'Property 1=Frame 3',
    description: 'Synchronized React Component built directly from Figma design system node specs.',
    variant: 'default',
  },
};

export const Interactive: Story = {
  args: {
    title: 'Property 1=Frame 3 Active',
    description: 'Hover and inspect native Storybook controls for real-time design token customization.',
    variant: 'default',
  },
};
