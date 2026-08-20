import type { Meta, StoryObj } from '@storybook/react';
import { Frame94 } from './Frame94';

const meta: Meta<typeof Frame94> = {
  title: 'Components/Frame94',
  component: Frame94,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '### Figma Layer Spec Table\n\n- **Exact Layer Name**: Frame 94\n- **Background**: var(--uedp-slate-900)\n- **Stroke**: #8a38f5\n- **Radius**: 5px\n- **Gap**: var(--uedp-gap-4)\n- **Padding**: var(--uedp-padding-6)',
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
type Story = StoryObj<typeof Frame94>;

export const Default: Story = {
  args: {
    title: 'Frame 94',
    description: 'Synchronized React Component built directly from Figma design system node specs.',
    variant: 'SUCCESS ACTIVE',
  },
};

export const Interactive: Story = {
  args: {
    title: 'Frame 94 Active',
    description: 'Hover and inspect native Storybook controls for real-time design token customization.',
    variant: 'RISK ACTIVE',
  },
};
