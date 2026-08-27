import type { Meta, StoryObj } from '@storybook/react';
import { StockBadge } from './StockBadge';

const meta: Meta<typeof StockBadge> = {
  title: 'Components/StockBadge',
  component: StockBadge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['success', 'danger', 'warning', 'muted'],
      description: 'Color variant matching Figma Frame 2... (node-id 142-1576)',
    },
    label: {
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
type Story = StoryObj<typeof StockBadge>;

export const SuccessInStock: Story = {
  args: {
    variant: 'success',
    label: 'In Stock',
  },
};

export const DangerOutOfStock: Story = {
  args: {
    variant: 'danger',
    label: 'In Stock',
  },
};

export const WarningLowStock: Story = {
  args: {
    variant: 'warning',
    label: 'In Stock',
  },
};

export const Muted: Story = {
  args: {
    variant: 'muted',
    label: 'In Stock',
  },
};

/** All 3 Variants Stack (matching Figma Frame 2... component / node-id 142-1576) */
export const StockBadgeFigmaStack: Story = {
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
        ❖ Frame 2... (node-id: 142-1576)
      </div>
      <StockBadge variant="success" label="In Stock" />
      <StockBadge variant="danger" label="In Stock" />
      <StockBadge variant="warning" label="In Stock" />
    </div>
  ),
};
