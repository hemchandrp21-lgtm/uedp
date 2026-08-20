import type { Meta, StoryObj } from '@storybook/react';
import { Property1costumers } from './Property1costumers';

const meta: Meta<typeof Property1costumers> = {
  title: 'Components/Property1costumers',
  component: Property1costumers,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '### Figma Layer Spec Table\n\n- **Exact Layer Name**: Property 1=costumers\n- **Background**: var(--uedp-slate-900)\n- **Stroke**: var(--uedp-slate-600)\n- **Radius**: var(--uedp-rounded-xl)\n- **Gap**: 15px\n- **Padding**: var(--uedp-padding-6)',
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
type Story = StoryObj<typeof Property1costumers>;

export const Default: Story = {
  args: {
    title: 'Property 1=costumers',
    description: 'Synchronized React Component built directly from Figma design system node specs.',
    variant: 'default',
  },
};

export const Interactive: Story = {
  args: {
    title: 'Property 1=costumers Active',
    description: 'Hover and inspect native Storybook controls for real-time design token customization.',
    variant: 'default',
  },
};
