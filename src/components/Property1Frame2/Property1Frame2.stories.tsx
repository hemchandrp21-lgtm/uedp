import type { Meta, StoryObj } from '@storybook/react';
import { Property1Frame2 } from './Property1Frame2';

const meta: Meta<typeof Property1Frame2> = {
  title: 'Components/Property1Frame2',
  component: Property1Frame2,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '### Figma Layer Spec Table\n\n- **Exact Layer Name**: Property 1=Frame 2\n- **Background**: var(--uedp-red-950-alt)\n- **Stroke**: var(--uedp-slate-600)\n- **Radius**: 8px\n- **Gap**: 10px\n- **Padding**: 4px',
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
type Story = StoryObj<typeof Property1Frame2>;

export const Default: Story = {
  args: {
    title: 'Property 1=Frame 2',
    description: 'Synchronized React Component built directly from Figma design system node specs.',
    variant: 'default',
  },
};

export const Interactive: Story = {
  args: {
    title: 'Property 1=Frame 2 Active',
    description: 'Hover and inspect native Storybook controls for real-time design token customization.',
    variant: 'default',
  },
};
