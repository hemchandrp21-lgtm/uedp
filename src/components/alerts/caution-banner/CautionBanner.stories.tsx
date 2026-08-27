import type { Meta, StoryObj } from '@storybook/react';
import { CautionBanner } from './CautionBanner';

const meta: Meta<typeof CautionBanner> = {
  title: 'Alerts/CautionBanner',
  component: CautionBanner,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['warning', 'danger', 'success', 'muted'],
      description: 'Color theme variant matching Figma CAUTIONS component (node-id 111-1303)',
    },
    title: { control: 'text' },
    description: { control: 'text' },
    actionText: { control: 'text' },
    showAction: { control: 'boolean' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#05080e' }],
    },
  },
};

export default meta;
type Story = StoryObj<typeof CautionBanner>;

export const WarningAmber: Story = {
  args: {
    variant: 'warning',
  },
};

export const DangerRed: Story = {
  args: {
    variant: 'danger',
  },
};

export const SuccessGreen: Story = {
  args: {
    variant: 'success',
  },
};

export const SlateMuted: Story = {
  args: {
    variant: 'muted',
  },
};

/** All 4 Variants Stack (matching Figma CAUTIONS component / node-id 111-1303) */
export const CautionsFigmaStack: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        padding: '36px 48px',
        backgroundColor: '#000000',
        borderRadius: '16px',
        border: '1.5px dashed #7c3aed',
        width: '900px',
      }}
    >
      <div style={{ color: '#c084fc', fontSize: '15px', fontWeight: 600, fontFamily: 'monospace' }}>
        ❖ CAUTIONS (node-id: 111-1303)
      </div>
      <CautionBanner variant="warning" />
      <CautionBanner variant="danger" />
      <CautionBanner variant="success" />
      <CautionBanner variant="muted" />
    </div>
  ),
};
