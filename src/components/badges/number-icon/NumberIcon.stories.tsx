import type { Meta, StoryObj } from '@storybook/react';
import { NumberIcon } from './NumberIcon';

const meta: Meta<typeof NumberIcon> = {
  title: 'Badges/NumberIcon',
  component: NumberIcon,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['badge', 'plain'],
      description: 'Visual variant matching Figma NUMBERICONS component (node-id 98-487)',
    },
    color: {
      control: 'select',
      options: ['amber', 'green', 'red', 'indigo', 'slate'],
    },
    value: {
      control: 'text',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#05080e' }],
    },
  },
};

export default meta;
type Story = StoryObj<typeof NumberIcon>;

export const Badge: Story = {
  args: {
    variant: 'badge',
    color: 'amber',
    value: 1,
  },
};

export const Plain: Story = {
  args: {
    variant: 'plain',
    value: 1,
  },
};

/** All 2 Variants Stack (matching Figma NUMBERICONS component / node-id 98-487) */
export const NumberIconsFigmaStack: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '24px',
        padding: '36px 48px',
        backgroundColor: '#000000',
        borderRadius: '16px',
        border: '1.5px dashed #7c3aed',
        width: 'fit-content',
      }}
    >
      <div style={{ color: '#c084fc', fontSize: '15px', fontWeight: 600, fontFamily: 'monospace' }}>
        ❖ NUMBERICONS (node-id: 98-487)
      </div>
      <NumberIcon variant="badge" color="amber" value={1} />
      <NumberIcon variant="plain" value={1} />
    </div>
  ),
};
