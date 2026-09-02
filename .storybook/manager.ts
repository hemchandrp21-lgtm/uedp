import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

const theme = create({
  base: 'dark',
  brandTitle: 'sasystem',
  brandUrl: './',
  brandTarget: '_self',

  // Theme Colors
  colorPrimary: '#6366f1',
  colorSecondary: '#06b6d4',

  // Storybook Manager UI Colors
  appBg: '#0b0f19',
  appContentBg: '#0f172a',
  appPreviewBg: '#0f172a',
  appBorderColor: '#1e293b',
  appBorderRadius: 8,

  // Text Colors
  textColor: '#f8fafc',
  textInverseColor: '#0f172a',

  // Navigation & Toolbar
  barTextColor: '#94a3b8',
  barSelectedColor: '#38bdf8',
  barHoverColor: '#6366f1',
  barBg: '#0f172a',

  // Input Controls
  inputBg: '#1e293b',
  inputBorder: '#334155',
  inputTextColor: '#f8fafc',
  inputBorderRadius: 6,
});

addons.setConfig({
  theme,
  sidebar: {
    showRoots: true,
    collapsedRoots: [],
  },
});
