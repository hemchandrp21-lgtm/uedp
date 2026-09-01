import type { Preview } from '@storybook/react';
import '../src/styles/figma-tokens.css';

const preview: Preview = {
  parameters: {
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#020617' },
        { name: 'slate-900', value: '#0f172a' },
        { name: 'light', value: '#ffffff' }
      ]
    }
  },
};

export default preview;
