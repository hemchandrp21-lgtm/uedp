import type { Meta, StoryObj } from '@storybook/react';
import { HeaderTopNavigationBar } from './HeaderTopNavigationBar';

const meta: Meta<typeof HeaderTopNavigationBar> = {
  title: 'Components/HeaderTopNavigationBar',
  component: HeaderTopNavigationBar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '### Figma Layer Spec Table\n\n- **Exact Layer Name**: Header - Top Navigation Bar\n- **Background**: #13161f\n- **Stroke**: #3c3f4c\n- **Radius**: var(--uedp-rounded-xl)\n- **Gap**: var(--uedp-gap-4)\n- **Padding**: var(--uedp-padding-6)',
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
type Story = StoryObj<typeof HeaderTopNavigationBar>;

export const Default: Story = {
  args: {
    title: 'Header - Top Navigation Bar',
    description: 'Synchronized React Component built directly from Figma design system node specs.',
    variant: 'default',
  },
};

export const Interactive: Story = {
  args: {
    title: 'Header - Top Navigation Bar Active',
    description: 'Hover and inspect native Storybook controls for real-time design token customization.',
    variant: 'default',
  },
};
