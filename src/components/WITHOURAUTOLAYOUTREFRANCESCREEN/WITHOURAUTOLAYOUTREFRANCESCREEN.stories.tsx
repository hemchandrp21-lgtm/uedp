import type { Meta, StoryObj } from '@storybook/react';
import { WITHOURAUTOLAYOUTREFRANCESCREEN } from './WITHOURAUTOLAYOUTREFRANCESCREEN';

const meta: Meta<typeof WITHOURAUTOLAYOUTREFRANCESCREEN> = {
  title: 'Components/WITHOURAUTOLAYOUTREFRANCESCREEN',
  component: WITHOURAUTOLAYOUTREFRANCESCREEN,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '### Figma Layer Spec Table\n\n- **Exact Layer Name**: WITHOUR AUTOLAYOUT REFRANCE SCREEN\n- **Background**: #0f1117\n- **Stroke**: var(--uedp-slate-600)\n- **Radius**: var(--uedp-rounded-xl)\n- **Gap**: var(--uedp-gap-4)\n- **Padding**: var(--uedp-padding-6)',
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
type Story = StoryObj<typeof WITHOURAUTOLAYOUTREFRANCESCREEN>;

export const Default: Story = {
  args: {
    title: 'WITHOUR AUTOLAYOUT REFRANCE SCREEN',
    description: 'Synchronized React Component built directly from Figma design system node specs.',
    variant: 'default',
  },
};

export const Interactive: Story = {
  args: {
    title: 'WITHOUR AUTOLAYOUT REFRANCE SCREEN Active',
    description: 'Hover and inspect native Storybook controls for real-time design token customization.',
    variant: 'default',
  },
};
