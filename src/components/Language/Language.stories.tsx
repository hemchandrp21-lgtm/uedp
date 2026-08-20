import type { Meta, StoryObj } from '@storybook/react';
import { Language } from './Language';

const meta: Meta<typeof Language> = {
  title: 'Components/Language',
  component: Language,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '### Figma Layer Spec Table\n\n- **Exact Layer Name**: language\n- **Background**: var(--uedp-slate-900)\n- **Stroke**: var(--uedp-slate-600)\n- **Radius**: var(--uedp-rounded-xl)\n- **Gap**: var(--uedp-gap-4)\n- **Padding**: var(--uedp-padding-6)',
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
type Story = StoryObj<typeof Language>;

export const Default: Story = {
  args: {
    title: 'language',
    description: 'Synchronized React Component built directly from Figma design system node specs.',
    variant: 'default',
  },
};

export const Interactive: Story = {
  args: {
    title: 'language Active',
    description: 'Hover and inspect native Storybook controls for real-time design token customization.',
    variant: 'default',
  },
};
