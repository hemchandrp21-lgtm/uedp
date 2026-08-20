import type { Meta, StoryObj } from '@storybook/react';
import { MaterialSymbolsgroupOutlineRounded } from './MaterialSymbolsgroupOutlineRounded';

const meta: Meta<typeof MaterialSymbolsgroupOutlineRounded> = {
  title: 'Components/MaterialSymbolsgroupOutlineRounded',
  component: MaterialSymbolsgroupOutlineRounded,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '### Figma Layer Spec Table\n\n- **Exact Layer Name**: material-symbols:group-outline-rounded\n- **Background**: #412933\n- **Stroke**: var(--uedp-slate-600)\n- **Radius**: 5px\n- **Gap**: 10px\n- **Padding**: 4px',
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
type Story = StoryObj<typeof MaterialSymbolsgroupOutlineRounded>;

export const Default: Story = {
  args: {
    title: 'material-symbols:group-outline-rounded',
    description: 'Synchronized React Component built directly from Figma design system node specs.',
    variant: 'default',
  },
};

export const Interactive: Story = {
  args: {
    title: 'material-symbols:group-outline-rounded Active',
    description: 'Hover and inspect native Storybook controls for real-time design token customization.',
    variant: 'default',
  },
};
