import { create } from '@storybook/theming';

export default create({
  base: 'light',

  // Typography
  fontBase: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  fontCode: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',

  // Branding
  brandTitle: 'UEDP Sales Dashboard Design System',
  brandUrl: './',
  brandTarget: '_self',

  // Color palette
  colorPrimary: '#059669',
  colorSecondary: '#10b981',

  // UI colors
  appBg: '#f8fafc',
  appContentBg: '#ffffff',
  appPreviewBg: '#ffffff',
  appBorderColor: '#e2e8f0',
  appBorderRadius: 10,

  // Text colors
  textColor: '#0f172a',
  textMutedColor: '#64748b',
  textInverseColor: '#ffffff',

  // Toolbar default & active colors
  barTextColor: '#475569',
  barSelectedColor: '#059669',
  barHoverColor: '#10b981',
  barBg: '#ffffff',

  // Form input controls
  inputBg: '#ffffff',
  inputBorder: '#cbd5e1',
  inputTextColor: '#0f172a',
  inputBorderRadius: 8,
});
