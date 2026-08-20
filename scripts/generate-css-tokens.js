import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const basePath = path.join(rootDir, 'base-palette-tokens.json');
const foundPath = path.join(rootDir, 'foundational-tokens.json');
const outCssPath = path.join(rootDir, 'src', 'styles', 'figma-tokens.css');

const baseTokens = JSON.parse(fs.readFileSync(basePath, 'utf8'));
const foundTokens = JSON.parse(fs.readFileSync(foundPath, 'utf8'));

let cssContent = `/* Auto-generated Figma Design Tokens CSS */\n:root {\n`;

// Base Palette Tokens
cssContent += `  /* Base Color Palette Tokens */\n`;
Object.entries(baseTokens.tokens).forEach(([family, tokens]) => {
  Object.entries(tokens).forEach(([key, token]) => {
    cssContent += `  ${token.cssVar}: ${token.value}; /* Figma Var: ${token['com.figma.variableId']} */\n`;
  });
});

// Foundational Tokens
cssContent += `\n  /* Foundational Tokens (Spacing, Radii, Typography) */\n`;
Object.entries(foundTokens.tokens).forEach(([category, tokens]) => {
  Object.entries(tokens).forEach(([key, token]) => {
    cssContent += `  ${token.cssVar}: ${token.value}; /* Figma Var: ${token['com.figma.variableId']} */\n`;
  });
});

cssContent += `}\n`;

fs.mkdirSync(path.dirname(outCssPath), { recursive: true });
fs.writeFileSync(outCssPath, cssContent, 'utf8');

console.log(`Generated CSS tokens at ${outCssPath}`);
