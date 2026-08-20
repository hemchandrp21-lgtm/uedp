import React from 'react';
import foundationalTokens from '../../../foundational-tokens.json';

export default {
  title: 'Tokens/FoundationalTokens',
  parameters: {
    docs: {
      description: {
        component: 'Gallery displaying border radii, spacing scales, geometry, and typography foundational tokens.',
      },
    },
  },
};

export const RadiiAndSpacing = () => {
  const { spacing, radii, typography } = foundationalTokens.tokens;

  return (
    <div style={{ padding: '24px', fontFamily: 'Inter, sans-serif', color: '#f8fafc', background: '#020617', borderRadius: '16px' }}>
      <h1 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '28px', marginBottom: '8px', color: '#38bdf8' }}>
        Foundational Tokens
      </h1>
      <p style={{ color: '#94a3b8', marginBottom: '32px' }}>
        Border radii, spacing scale, and geometry design tokens.
      </p>

      {/* Border Radii */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '20px', marginBottom: '16px', borderBottom: '1px solid #1e293b', paddingBottom: '8px' }}>
          Border Radii Tokens
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '20px' }}>
          {Object.entries(radii).map(([name, token]: [string, any]) => (
            <div key={name} style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: '100px',
                  height: '100px',
                  background: 'linear-gradient(135deg, #1e293b, #0f172a)',
                  border: '2px solid #38bdf8',
                  borderRadius: `var(${token.cssVar})`,
                  margin: '0 auto 12px auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  fontWeight: 'bold',
                }}
              >
                {token.value}
              </div>
              <div style={{ fontWeight: '600', fontSize: '14px' }}>{name}</div>
              <div style={{ fontSize: '11px', color: '#38bdf8', fontFamily: 'monospace' }}>{token.cssVar}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Spacing */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '20px', marginBottom: '16px', borderBottom: '1px solid #1e293b', paddingBottom: '8px' }}>
          Spacing & Gap Tokens
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {Object.entries(spacing).map(([name, token]: [string, any]) => (
            <div key={name} style={{ display: 'flex', alignItems: 'center', gap: '16px', background: '#0f172a', padding: '12px 16px', borderRadius: '10px' }}>
              <div style={{ width: '120px', fontWeight: '600', fontSize: '14px' }}>{name}</div>
              <div style={{ width: '80px', color: '#38bdf8', fontFamily: 'monospace', fontSize: '13px' }}>{token.value}</div>
              <div
                style={{
                  height: '24px',
                  width: `var(${token.cssVar})`,
                  minWidth: '4px',
                  background: '#38bdf8',
                  borderRadius: '4px',
                }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Typography */}
      <section>
        <h2 style={{ fontSize: '20px', marginBottom: '16px', borderBottom: '1px solid #1e293b', paddingBottom: '8px' }}>
          Typography Tokens
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          {Object.entries(typography).map(([name, token]: [string, any]) => (
            <div key={name} style={{ background: '#0f172a', padding: '20px', borderRadius: '12px', border: '1px solid #1e293b' }}>
              <div style={{ fontSize: '14px', fontWeight: '600', color: '#94a3b8', marginBottom: '8px' }}>{name}</div>
              <div style={{ fontFamily: `var(${token.cssVar})`, fontSize: '20px', marginBottom: '8px' }}>
                The quick brown fox jumps over the lazy dog.
              </div>
              <div style={{ fontSize: '12px', color: '#38bdf8', fontFamily: 'monospace' }}>{token.cssVar}: {token.value}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
