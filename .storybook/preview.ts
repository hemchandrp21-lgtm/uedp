import type { Preview } from '@storybook/react';
import '../src/styles/figma-tokens.css';
import '../src/utils/sound';


const preview: Preview = {
  parameters: {
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
