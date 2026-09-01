import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';
import '../src/styles/figma-tokens.css';

const preview: Preview = {
  parameters: {
    layout: 'centered',
    docs: {
      theme: themes.dark,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'm3-surface',
      values: [
        { name: 'm3-surface', value: '#121318' },
        { name: 'm3-container', value: '#1b1b21' },
        { name: 'dark', value: '#020617' },
        { name: 'light', value: '#ffffff' }
      ]
    }
  },
};

export default preview;
