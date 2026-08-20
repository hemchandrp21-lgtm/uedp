import type { Meta, StoryObj } from '@storybook/react';
import { Property1khelKhatam } from './Property1khelKhatam';

const meta: Meta<typeof Property1khelKhatam> = {
  title: 'Components/Property1khelKhatam',
  component: Property1khelKhatam,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '### Figma Layer Spec Table\n\n- **Exact Layer Name**: Property 1=khel khatam\n- **Background**: #211e18\n- **Stroke**: var(--uedp-red-400)\n- **Radius**: 16px\n- **Gap**: 303px\n- **Padding**: 10px',
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
type Story = StoryObj<typeof Property1khelKhatam>;

export const Default: Story = {
  args: {
    title: 'Property 1=khel khatam',
    description: 'Synchronized React Component built directly from Figma design system node specs.',
    variant: 'default',
  },
};

export const Interactive: Story = {
  args: {
    title: 'Property 1=khel khatam Active',
    description: 'Hover and inspect native Storybook controls for real-time design token customization.',
    variant: 'default',
  },
};
