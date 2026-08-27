import type { Meta, StoryObj } from '@storybook/react';
import { RegionBar } from './RegionBar';

const meta: Meta<typeof RegionBar> = {
  title: 'Components/RegionBar',
  component: RegionBar,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['success', 'danger', 'warning', 'muted'],
      description: 'Color variant matching Figma REGIONS component (node-id 43-231)',
    },
    regionName: { control: 'text' },
    value: { control: 'text' },
    percentage: { control: 'text' },
    progress: { control: { type: 'range', min: 0, max: 100 } },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#05080e' }],
    },
  },
};

export default meta;
type Story = StoryObj<typeof RegionBar>;

export const SuccessGreen: Story = {
  args: {
    variant: 'success',
    regionName: 'North Region',
    value: '$245.2k',
    percentage: '+12.4%',
    progress: 75,
  },
};

export const DangerRed: Story = {
  args: {
    variant: 'danger',
    regionName: 'North Region',
    value: '$245.2k',
    percentage: '+12.4%',
    progress: 30,
  },
};

export const WarningAmber: Story = {
  args: {
    variant: 'warning',
    regionName: 'North Region',
    value: '$245.2k',
    percentage: '+12.4%',
    progress: 60,
  },
};

/** All 3 Region Bars Stack (matching Figma REGIONS component / node-id 43-231) */
export const RegionsFigmaStack: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        padding: '36px 48px',
        backgroundColor: '#000000',
        borderRadius: '16px',
        border: '1.5px dashed #7c3aed',
        width: '560px',
      }}
    >
      <div style={{ color: '#c084fc', fontSize: '15px', fontWeight: 600, fontFamily: 'monospace' }}>
        ❖ REGIONS (node-id: 43-231)
      </div>
      <RegionBar variant="success" regionName="North Region" value="$245.2k" percentage="+12.4%" progress={75} />
      <RegionBar variant="danger" regionName="North Region" value="$245.2k" percentage="+12.4%" progress={30} />
      <RegionBar variant="warning" regionName="North Region" value="$245.2k" percentage="+12.4%" progress={60} />
    </div>
  ),
};
