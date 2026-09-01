import { create } from '@storybook/theming';

export default create({
  base: 'dark',

  // Typography
  fontBase: '"Roboto", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  fontCode: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',

  // Branding
  brandTitle: '❖ UEDP Design System (M3)',
  brandUrl: './',
  brandTarget: '_self',

  // M3 Tonal Palette
  colorPrimary: '#d0bcff',
  colorSecondary: '#a8c7fa',

  // UI colors
  appBg: '#121318',
  appContentBg: '#1b1b21',
  appPreviewBg: '#121318',
  appBorderColor: '#49454f',
  appBorderRadius: 16,

  // Text colors
  textColor: '#e6e1e5',
  textMutedColor: '#938f96',
  textInverseColor: '#121318',

  // Toolbar default & active colors
  barTextColor: '#938f96',
  barSelectedColor: '#d0bcff',
  barHoverColor: '#a8c7fa',
  barBg: '#1b1b21',

  // Form input controls
  inputBg: '#282930',
  inputBorder: '#49454f',
  inputTextColor: '#e6e1e5',
  inputBorderRadius: 28,
});
