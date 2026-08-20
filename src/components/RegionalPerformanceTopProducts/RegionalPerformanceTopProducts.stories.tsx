import type { Meta, StoryObj } from '@storybook/react';
import { RegionalPerformanceTopProducts } from './RegionalPerformanceTopProducts';

const meta: Meta<typeof RegionalPerformanceTopProducts> = {
  title: 'Components/RegionalPerformanceTopProducts',
  component: RegionalPerformanceTopProducts,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '### Figma Layer Spec Table\n\n- **Exact Layer Name**: Regional Performance & Top Products\n- **Background**: #13161f\n- **Stroke**: #32353c\n- **Radius**: 8px\n- **Gap**: var(--uedp-gap-4)\n- **Padding**: var(--uedp-padding-6)',
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
type Story = StoryObj<typeof RegionalPerformanceTopProducts>;

export const Default: Story = {
  args: {
    title: 'Regional Performance & Top Products',
    description: 'Synchronized React Component built directly from Figma design system node specs.',
    variant: 'default',
  },
};

export const Interactive: Story = {
  args: {
    title: 'Regional Performance & Top Products Active',
    description: 'Hover and inspect native Storybook controls for real-time design token customization.',
    variant: 'default',
  },
};
