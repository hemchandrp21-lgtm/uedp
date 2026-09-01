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
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'slate-50', value: '#f8fafc' },
        { name: 'dark', value: '#020617' },
        { name: 'slate-900', value: '#0f172a' }
      ]
    }
  },
};

export default preview;
