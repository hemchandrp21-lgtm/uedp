import type { Meta, StoryObj } from '@storybook/react';
import { Property1caution1 } from './Property1caution1';

const meta: Meta<typeof Property1caution1> = {
  title: 'Components/Property1caution1',
  component: Property1caution1,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '### Figma Layer Spec Table\n\n- **Exact Layer Name**: Property 1=caution 1\n- **Background**: #211e18\n- **Stroke**: var(--uedp-amber-400)\n- **Radius**: 16px\n- **Gap**: 303px\n- **Padding**: 10px',
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
type Story = StoryObj<typeof Property1caution1>;

export const Default: Story = {
  args: {
    title: 'Property 1=caution 1',
    description: 'Synchronized React Component built directly from Figma design system node specs.',
    variant: 'default',
  },
};

export const Interactive: Story = {
  args: {
    title: 'Property 1=caution 1 Active',
    description: 'Hover and inspect native Storybook controls for real-time design token customization.',
    variant: 'default',
  },
};
