import { create } from '@storybook/theming';

export default create({
  base: 'dark',

  // Typography
  fontBase: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  fontCode: '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',

  // Branding
  brandTitle: '❖ UEDP Design System',
  brandUrl: './',
  brandTarget: '_self',

  // Color palette
  colorPrimary: '#38bdf8',
  colorSecondary: '#34d399',

  // UI colors
  appBg: '#020617',
  appContentBg: '#070b14',
  appPreviewBg: '#020617',
  appBorderColor: 'rgba(255, 255, 255, 0.08)',
  appBorderRadius: 12,

  // Text colors
  textColor: '#f8fafc',
  textMutedColor: '#94a3b8',
  textInverseColor: '#020617',

  // Toolbar default & active colors
  barTextColor: '#94a3b8',
  barSelectedColor: '#38bdf8',
  barHoverColor: '#34d399',
  barBg: '#070b14',

  // Form input controls
  inputBg: '#0f172a',
  inputBorder: 'rgba(255, 255, 255, 0.12)',
  inputTextColor: '#f8fafc',
  inputBorderRadius: 10,
});
