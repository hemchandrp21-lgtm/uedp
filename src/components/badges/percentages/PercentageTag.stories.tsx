import type { Meta, StoryObj } from '@storybook/react';
import { PercentageTag } from './PercentageTag';

const meta: Meta<typeof PercentageTag> = {
  title: 'Badges/PercentageTag',
  component: PercentageTag,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['success', 'danger', 'warning', 'neutral'],
      description: 'Color variant matching Figma PERCENTAGES component (node-id 45-95)',
    },
    value: {
      control: 'text',
    },
    arrowDirection: {
      control: 'select',
      options: ['up', 'down', 'none'],
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
type Story = StoryObj<typeof PercentageTag>;

export const Success: Story = {
  args: {
    variant: 'success',
    value: '0.0%',
    arrowDirection: 'up',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    value: '0.0%',
    arrowDirection: 'up',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    value: '0.0%',
    arrowDirection: 'up',
  },
};

export const NeutralWhite: Story = {
  args: {
    variant: 'neutral',
    value: '0.0%',
    arrowDirection: 'up',
  },
};

/** All 4 Variants Stack (matching Figma PERCENTAGES component / node-id 45-95) */
export const PercentagesFigmaStack: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        padding: '36px 48px',
        backgroundColor: '#000000',
        borderRadius: '16px',
        border: '1.5px dashed #7c3aed',
        width: 'fit-content',
      }}
    >
      <div style={{ color: '#c084fc', fontSize: '15px', fontWeight: 600, fontFamily: 'monospace' }}>
        ❖ PERCENTAGES (node-id: 45-95)
      </div>
      <PercentageTag variant="success" value="0.0%" />
      <PercentageTag variant="danger" value="0.0%" />
      <PercentageTag variant="warning" value="0.0%" />
      <PercentageTag variant="neutral" value="0.0%" />
    </div>
  ),
};
