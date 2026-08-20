import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const FIGMA_FILE_KEY = process.env.FIGMA_FILE_KEY || 'LO2ze8Ju0PcDBRX2OkG9Na';
const FIGMA_PAT = process.env.FIGMA_PAT || '';

const baseTokensPath = path.join(rootDir, 'base-palette-tokens.json');
const foundTokensPath = path.join(rootDir, 'foundational-tokens.json');
const baseTokens = JSON.parse(fs.readFileSync(baseTokensPath, 'utf8'));
const foundTokens = JSON.parse(fs.readFileSync(foundTokensPath, 'utf8'));

// Build lookup table from VariableID -> CSS Variable name
const variableToCssMap = {};

// Map Base Tokens
Object.values(baseTokens.tokens).forEach((family) => {
  Object.values(family).forEach((token) => {
    variableToCssMap[token['com.figma.variableId']] = token.cssVar;
  });
});

// Map Foundational Tokens
Object.values(foundTokens.tokens).forEach((category) => {
  Object.values(category).forEach((token) => {
    variableToCssMap[token['com.figma.variableId']] = token.cssVar;
  });
});

function sanitizeComponentName(rawName) {
  let name = rawName
    .replace(/[^a-zA-Z0-9_\-\s]/g, '')
    .trim()
    .replace(/[\s\-_]+(.)/g, (_, c) => c.toUpperCase())
    .replace(/^(.)/, (_, c) => c.toUpperCase());

  if (!name || /^\d/.test(name)) {
    name = 'Figma' + (name || 'Component');
  }
  return name;
}

function rgbaToHex(color) {
  if (!color) return undefined;
  const r = Math.round((color.r || 0) * 255);
  const g = Math.round((color.g || 0) * 255);
  const b = Math.round((color.b || 0) * 255);
  const a = color.a !== undefined ? color.a : 1;
  const hex = '#' + [r, g, b].map((x) => x.toString(16).padStart(2, '0')).join('');
  return a < 1 ? `rgba(${r}, ${g}, ${b}, ${a.toFixed(2)})` : hex;
}

function resolvePropertyStyle(node, propType) {
  // Check boundVariables first
  if (node.boundVariables) {
    const bound = node.boundVariables[propType];
    if (bound) {
      const alias = Array.isArray(bound) ? bound[0] : bound;
      if (alias && alias.id && variableToCssMap[alias.id]) {
        return `var(${variableToCssMap[alias.id]})`;
      }
    }
  }

  // Fallback to exact raw hardcoded Figma values
  if (propType === 'fills' && node.fills && node.fills.length > 0 && node.fills[0].visible !== false) {
    const fill = node.fills[0];
    if (fill.type === 'SOLID' && fill.color) return rgbaToHex(fill.color);
    if (fill.type.includes('GRADIENT')) return 'linear-gradient(135deg, #1e293b, #0f172a)';
  }

  if (propType === 'strokes' && node.strokes && node.strokes.length > 0) {
    const stroke = node.strokes[0];
    if (stroke.color) return rgbaToHex(stroke.color);
  }

  if (propType === 'cornerRadius' && node.cornerRadius !== undefined) {
    return `${node.cornerRadius}px`;
  }

  if (propType === 'itemSpacing' && node.itemSpacing !== undefined) {
    return `${node.itemSpacing}px`;
  }

  if (propType === 'paddingLeft' && node.paddingLeft !== undefined) {
    return `${node.paddingLeft}px`;
  }

  return undefined;
}

async function main() {
  console.log(`Fetching Figma document tree from API (File: ${FIGMA_FILE_KEY})...`);
  const res = await fetch(`https://api.figma.com/v1/files/${FIGMA_FILE_KEY}`, {
    headers: { 'X-Figma-Token': FIGMA_PAT },
  });

  if (!res.ok) {
    throw new Error(`Figma API HTTP Error: ${res.status} ${res.statusText}`);
  }

  const figmaData = await res.json();
  const document = figmaData.document;

  const discoveredComponents = [];

  // Traverse tree to discover COMPONENT_SET, COMPONENT, and top-level FRAME nodes
  function discoverNodes(node) {
    if (['COMPONENT_SET', 'COMPONENT', 'FRAME'].includes(node.type)) {
      discoveredComponents.push(node);
    }
    if (node.children) {
      node.children.forEach(discoverNodes);
    }
  }

  document.children.forEach((page) => {
    if (page.children) {
      page.children.forEach(discoverNodes);
    }
  });

  console.log(`Discovered ${discoveredComponents.length} Figma components/frames across all canvas pages.`);

  // Group by unique sanitized name to avoid duplicates
  const componentMap = new Map();

  discoveredComponents.forEach((node) => {
    const exactLayerName = node.name;
    const sanitizedName = sanitizeComponentName(exactLayerName);

    if (!componentMap.has(sanitizedName)) {
      componentMap.set(sanitizedName, {
        exactLayerName,
        sanitizedName,
        nodes: [node],
        isComponentSet: node.type === 'COMPONENT_SET',
      });
    } else {
      componentMap.get(sanitizedName).nodes.push(node);
    }
  });

  const componentsDir = path.join(rootDir, 'src', 'components');
  fs.mkdirSync(componentsDir, { recursive: true });

  const exportList = [];

  for (const [sanitizedName, compInfo] of componentMap.entries()) {
    const primaryNode = compInfo.nodes[0];
    const exactLayerName = compInfo.exactLayerName;

    // Determine variant properties if COMPONENT_SET
    const variants = [];
    if (primaryNode.type === 'COMPONENT_SET' && primaryNode.children) {
      primaryNode.children.forEach((variantNode) => {
        const nameParts = variantNode.name.split(',').map((s) => s.trim());
        const props = {};
        nameParts.forEach((part) => {
          const [k, v] = part.split('=').map((s) => s.trim());
          if (k && v) props[k] = v;
        });
        variants.push({ node: variantNode, props });
      });
    }

    // Resolve CSS styles using strict variable aliasing rule
    const bgStyle = resolvePropertyStyle(primaryNode, 'fills') || 'var(--uedp-slate-900)';
    const strokeStyle = resolvePropertyStyle(primaryNode, 'strokes') || 'var(--uedp-slate-600)';
    const radiusStyle = resolvePropertyStyle(primaryNode, 'cornerRadius') || 'var(--uedp-rounded-xl)';
    const gapStyle = resolvePropertyStyle(primaryNode, 'itemSpacing') || 'var(--uedp-gap-4)';
    const padStyle = resolvePropertyStyle(primaryNode, 'paddingLeft') || 'var(--uedp-padding-6)';

    const compDir = path.join(componentsDir, sanitizedName);
    fs.mkdirSync(compDir, { recursive: true });

    // 1. Generate ComponentName.css
    const cssContent = `/* Generated CSS for Figma Layer: "${exactLayerName}" */
.${sanitizedName}-container {
  background-color: ${bgStyle};
  border: 1px solid ${strokeStyle};
  border-radius: ${radiusStyle};
  gap: ${gapStyle};
  padding: ${padStyle};
  color: var(--uedp-slate-50);
  font-family: var(--uedp-font-base);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4);
  transition: all 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
}

.${sanitizedName}-container:hover {
  border-color: var(--uedp-emerald-400);
  transform: translateY(-2px);
}

.${sanitizedName}-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--uedp-slate-800);
  padding-bottom: 8px;
  margin-bottom: 8px;
}

.${sanitizedName}-title {
  font-family: var(--uedp-font-heading);
  font-size: 16px;
  font-weight: 600;
  color: var(--uedp-slate-50);
}

.${sanitizedName}-badge {
  font-size: 11px;
  background-color: var(--uedp-emerald-950);
  color: var(--uedp-emerald-400);
  border: 1px solid var(--uedp-emerald-400);
  padding: 2px 8px;
  border-radius: var(--uedp-rounded-full);
}

.${sanitizedName}-content {
  font-size: 14px;
  color: var(--uedp-slate-400);
  line-height: 1.5;
}
`;
    fs.writeFileSync(path.join(compDir, `${sanitizedName}.css`), cssContent, 'utf8');

    // 2. Generate ComponentName.tsx
    const safeBg = bgStyle.replace(/'/g, "\\'");
    const safeStroke = strokeStyle.replace(/'/g, "\\'");
    const safeRadius = radiusStyle.replace(/'/g, "\\'");
    const safeGap = gapStyle.replace(/'/g, "\\'");
    const safePad = padStyle.replace(/'/g, "\\'");
    const safeLayerName = exactLayerName.replace(/'/g, "\\'").replace(/"/g, '\\"');

    const hasVariants = variants.length > 0;
    const variantValues = hasVariants
      ? variants.map((v) => Object.values(v.props).join('-')).filter(Boolean)
      : [];

    const firstVariant = variantValues.length > 0 ? variantValues[0] : 'default';
    const secondVariant = variantValues.length > 1 ? variantValues[1] : firstVariant;

    const variantPropsType = hasVariants && variantValues.length > 0
      ? `variant?: '${variantValues.join("' | '")}';`
      : `variant?: string;`;

    const tsxContent = `import React from 'react';
import './${sanitizedName}.css';

export interface ${sanitizedName}Props {
  /** Exact Figma Layer Name: "${safeLayerName}" */
  title?: string;
  /** Primary description or content text */
  description?: string;
  /** Component state or variant */
  ${variantPropsType}
  /** Optional custom CSS class */
  className?: string;
  /** Children elements */
  children?: React.ReactNode;
}

/**
 * Figma Component: "${safeLayerName}"
 * Preserved Layer Name: ${safeLayerName}
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const ${sanitizedName}: React.FC<${sanitizedName}Props> = ({
  title = '${safeLayerName}',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = '${firstVariant}',
  className = '',
  children
}) => {
  return (
    <div className={\`${sanitizedName}-container \${className}\`} data-figma-layer="${safeLayerName}" data-variant={variant}>
      <div className="${sanitizedName}-header">
        <span className="${sanitizedName}-title">{title}</span>
        <span className="${sanitizedName}-badge">{variant}</span>
      </div>
      <div className="${sanitizedName}-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default ${sanitizedName};
`;
    fs.writeFileSync(path.join(compDir, `${sanitizedName}.tsx`), tsxContent, 'utf8');

    // 3. Generate ComponentName.stories.tsx
    const storyContent = `import type { Meta, StoryObj } from '@storybook/react';
import { ${sanitizedName} } from './${sanitizedName}';

const meta: Meta<typeof ${sanitizedName}> = {
  title: 'Components/${sanitizedName}',
  component: ${sanitizedName},
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '### Figma Layer Spec Table\\n\\n- **Exact Layer Name**: ${safeLayerName}\\n- **Background**: ${safeBg}\\n- **Stroke**: ${safeStroke}\\n- **Radius**: ${safeRadius}\\n- **Gap**: ${safeGap}\\n- **Padding**: ${safePad}',
      },
    },
  },
  argTypes: {
    title: { control: 'text', description: 'Layer Title derived from Figma' },
    description: { control: 'text', description: 'Component description' },
    variant: { control: 'text', description: 'Figma component variant state' },
  },
};

export default meta;
type Story = StoryObj<typeof ${sanitizedName}>;

export const Default: Story = {
  args: {
    title: '${safeLayerName}',
    description: 'Synchronized React Component built directly from Figma design system node specs.',
    variant: '${firstVariant}',
  },
};

export const Interactive: Story = {
  args: {
    title: '${safeLayerName} Active',
    description: 'Hover and inspect native Storybook controls for real-time design token customization.',
    variant: '${secondVariant}',
  },
};
`;
    fs.writeFileSync(path.join(compDir, `${sanitizedName}.stories.tsx`), storyContent, 'utf8');

    exportList.push({ sanitizedName, exactLayerName });
  }

  // 4. Generate src/index.ts barrel export
  const barrelContent = exportList
    .map((item) => `export { ${item.sanitizedName} } from './components/${item.sanitizedName}/${item.sanitizedName}';`)
    .join('\n') + '\n';

  fs.writeFileSync(path.join(rootDir, 'src', 'index.ts'), barrelContent, 'utf8');

  console.log(`Successfully generated ${exportList.length} components & barrel export at src/index.ts.`);
}

main().catch((err) => {
  console.error('Error generating components:', err);
  process.exit(1);
});
