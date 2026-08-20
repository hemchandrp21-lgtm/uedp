import type { Meta, StoryObj } from '@storybook/react';
import { Property1MIDACTIVE } from './Property1MIDACTIVE';

const meta: Meta<typeof Property1MIDACTIVE> = {
  title: 'Components/Property1MIDACTIVE',
  component: Property1MIDACTIVE,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '### Figma Layer Spec Table\n\n- **Exact Layer Name**: Property 1=MID ACTIVE\n- **Background**: var(--uedp-slate-900)\n- **Stroke**: var(--uedp-slate-600)\n- **Radius**: var(--uedp-rounded-xl)\n- **Gap**: -18px\n- **Padding**: var(--uedp-padding-6)',
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
type Story = StoryObj<typeof Property1MIDACTIVE>;

export const Default: Story = {
  args: {
    title: 'Property 1=MID ACTIVE',
    description: 'Synchronized React Component built directly from Figma design system node specs.',
    variant: 'default',
  },
};

export const Interactive: Story = {
  args: {
    title: 'Property 1=MID ACTIVE Active',
    description: 'Hover and inspect native Storybook controls for real-time design token customization.',
    variant: 'default',
  },
};
