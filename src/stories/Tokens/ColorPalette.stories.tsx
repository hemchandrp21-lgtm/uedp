import React from 'react';
import baseTokens from '../../../base-palette-tokens.json';

export default {
  title: 'Tokens/ColorPalette',
  parameters: {
    docs: {
      description: {
        component: 'Interactive documentation of all Base Palette Color Families extracted directly from Figma Design Tokens.',
      },
    },
  },
};

export const PaletteGallery = () => {
  const families = baseTokens.tokens;

  return (
    <div style={{ padding: '24px', fontFamily: 'Inter, sans-serif', color: '#f8fafc', background: '#020617', borderRadius: '16px' }}>
      <h1 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '28px', marginBottom: '8px', color: '#34d399' }}>
        Figma Base Color Palette Tokens
      </h1>
      <p style={{ color: '#94a3b8', marginBottom: '32px' }}>
        Mapped from <code>com.figma.variableId</code> to CSS custom properties.
      </p>

      {Object.entries(families).map(([family, tokens]) => (
        <div key={family} style={{ marginBottom: '36px' }}>
          <h2 style={{ fontSize: '20px', textTransform: 'capitalize', marginBottom: '16px', borderBottom: '1px solid #1e293b', paddingBottom: '8px' }}>
            {family} Palette
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
            {Object.entries(tokens).map(([shade, token]: [string, any]) => (
              <div
                key={shade}
                style={{
                  background: '#0f172a',
                  border: '1px solid #1e293b',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                }}
              >
                <div
                  style={{
                    height: '80px',
                    backgroundColor: `var(${token.cssVar})`,
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                  }}
                />
                <div style={{ padding: '12px' }}>
                  <div style={{ fontWeight: '600', fontSize: '14px', marginBottom: '4px', color: '#f8fafc' }}>
                    {family}-{shade}
                  </div>
                  <div style={{ fontSize: '12px', color: '#34d399', fontFamily: 'monospace', marginBottom: '4px' }}>
                    {token.value}
                  </div>
                  <div style={{ fontSize: '11px', color: '#94a3b8', fontFamily: 'monospace' }}>
                    {token.cssVar}
                  </div>
                  <div style={{ fontSize: '10px', color: '#64748b', marginTop: '4px' }}>
                    ID: {token['com.figma.variableId']}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
