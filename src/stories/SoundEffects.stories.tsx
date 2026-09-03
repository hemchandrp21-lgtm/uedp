import React, { useState } from 'react';
import { playClickSound, setSoundMuted, isSoundMuted, toggleSoundMute, SoundEffectType } from '../utils/sound';
import { Volume2, VolumeX, Sparkles, Sliders, Play, Zap } from 'lucide-react';

export default {
  title: 'Utilities/SoundEffects',
  parameters: {
    docs: {
      description: {
        component: 'Interactive demo of the Web Audio API synthesized crisp sound effects engine. Every click on any UI component automatically triggers crisp tactile audio feedback.',
      },
    },
  },
};

export const AudioEffectsGallery = () => {
  const [muted, setMutedState] = useState(isSoundMuted());
  const [pitch, setPitch] = useState(1.0);
  const [volume, setVolume] = useState(1.0);
  const [clickCount, setClickCount] = useState(0);
  const [lastPreset, setLastPreset] = useState<string>('crisp');

  const handleToggleMute = () => {
    const newState = toggleSoundMute();
    setMutedState(newState);
  };

  const triggerSound = (type: SoundEffectType) => {
    setClickCount((c) => c + 1);
    setLastPreset(type);
    playClickSound({ type, volume, pitch });
  };

  const soundPresets: { type: SoundEffectType; name: string; desc: string; iconColor: string; bg: string }[] = [
    {
      type: 'crisp',
      name: 'Crisp Click',
      desc: 'Default tactile click with high-frequency noise transient burst and rapid decay.',
      iconColor: '#38bdf8',
      bg: 'linear-gradient(135deg, rgba(56, 189, 248, 0.15), rgba(99, 102, 241, 0.15))',
    },
    {
      type: 'snap',
      name: 'Mechanical Snap',
      desc: 'Sharp, punchy switch snap for primary buttons and critical actions.',
      iconColor: '#a855f7',
      bg: 'linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(236, 72, 153, 0.15))',
    },
    {
      type: 'pop',
      name: 'Bubble Pop',
      desc: 'Smooth resonant pop for pill selections, tags, and badge clicks.',
      iconColor: '#34d399',
      bg: 'linear-gradient(135deg, rgba(52, 211, 153, 0.15), rgba(16, 185, 129, 0.15))',
    },
    {
      type: 'toggle',
      name: 'UI Toggle Flick',
      desc: 'Rising pitch flick for switch toggles and mode state changes.',
      iconColor: '#f59e0b',
      bg: 'linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(239, 68, 68, 0.15))',
    },
    {
      type: 'soft',
      name: 'Soft Tap',
      desc: 'Subtle ambient tap for background card selections and minor inputs.',
      iconColor: '#94a3b8',
      bg: 'linear-gradient(135deg, rgba(148, 163, 184, 0.15), rgba(51, 65, 85, 0.15))',
    },
  ];

  return (
    <div
      style={{
        padding: '32px',
        fontFamily: "'Inter', system-ui, sans-serif",
        color: '#f8fafc',
        background: '#020617',
        borderRadius: '20px',
        maxWidth: '900px',
        margin: '0 auto',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Sparkles style={{ width: '28px', height: '28px', color: '#38bdf8' }} />
            <h1
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '30px',
                fontWeight: 700,
                margin: 0,
                background: 'linear-gradient(135deg, #38bdf8 0%, #818cf8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Crisp Sound Effects Engine
            </h1>
          </div>
          <p style={{ color: '#94a3b8', marginTop: '6px', fontSize: '14px' }}>
            Zero-latency, Web Audio API synthesized tactile microinteraction sound feedback on every click.
          </p>
        </div>

        {/* Mute Toggle Button */}
        <button
          onClick={handleToggleMute}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 18px',
            borderRadius: '12px',
            background: muted ? 'rgba(239, 68, 68, 0.15)' : 'rgba(16, 185, 129, 0.15)',
            border: muted ? '1px solid rgba(239, 68, 68, 0.4)' : '1px solid rgba(16, 185, 129, 0.4)',
            color: muted ? '#fca5a5' : '#6ee7b7',
            fontWeight: 600,
            cursor: 'pointer',
            fontSize: '14px',
            transition: 'all 0.2s ease',
          }}
        >
          {muted ? <VolumeX style={{ width: '18px', height: '18px' }} /> : <Volume2 style={{ width: '18px', height: '18px' }} />}
          {muted ? 'Audio Muted' : 'Audio Active'}
        </button>
      </div>

      {/* Live Audio Feedback Status Bar */}
      <div
        style={{
          background: 'rgba(15, 23, 42, 0.8)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          padding: '16px 20px',
          borderRadius: '14px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '32px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Zap style={{ width: '20px', height: '20px', color: '#f59e0b' }} />
          <div>
            <span style={{ fontSize: '12px', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Last Triggered Sound
            </span>
            <div style={{ fontWeight: 600, fontSize: '15px', color: '#38bdf8' }}>{lastPreset.toUpperCase()} EFFECT</div>
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{ fontSize: '12px', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Total Clicks</span>
          <div style={{ fontWeight: 700, fontSize: '18px', color: '#f8fafc' }}>{clickCount}</div>
        </div>
      </div>

      {/* Preset Sound Cards */}
      <h2 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px', color: '#cbd5e1' }}>
        Synthesized Sound Effect Presets
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px', marginBottom: '36px' }}>
        {soundPresets.map((preset) => (
          <div
            key={preset.type}
            onClick={() => triggerSound(preset.type)}
            style={{
              background: preset.bg,
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              padding: '20px',
              cursor: 'pointer',
              transition: 'all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
              userSelect: 'none',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.transform = 'scale(0.96)';
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ fontWeight: 700, fontSize: '16px', color: '#f8fafc' }}>{preset.name}</span>
                <Play style={{ width: '18px', height: '18px', color: preset.iconColor }} />
              </div>
              <p style={{ fontSize: '13px', color: '#94a3b8', margin: 0, lineHeight: 1.4 }}>{preset.desc}</p>
            </div>
            <div
              style={{
                marginTop: '16px',
                fontSize: '11px',
                fontFamily: 'monospace',
                color: preset.iconColor,
                background: 'rgba(0, 0, 0, 0.3)',
                padding: '4px 8px',
                borderRadius: '6px',
                width: 'fit-content',
              }}
            >
              playClickSound('{preset.type}')
            </div>
          </div>
        ))}
      </div>

      {/* Dynamic Sound Controls (Pitch & Volume) */}
      <div
        style={{
          background: '#0f172a',
          borderRadius: '16px',
          padding: '24px',
          border: '1px solid #1e293b',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
          <Sliders style={{ width: '20px', height: '20px', color: '#818cf8' }} />
          <h3 style={{ fontSize: '16px', fontWeight: 600, margin: 0 }}>Custom Audio Modulation</h3>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          <div>
            <label style={{ fontSize: '13px', color: '#94a3b8', display: 'block', marginBottom: '8px' }}>
              Pitch Shift: <strong style={{ color: '#38bdf8' }}>{pitch.toFixed(2)}x</strong>
            </label>
            <input
              type="range"
              min="0.5"
              max="2.0"
              step="0.05"
              value={pitch}
              onChange={(e) => setPitch(parseFloat(e.target.value))}
              style={{ width: '100%', accentColor: '#38bdf8', cursor: 'pointer' }}
            />
          </div>

          <div>
            <label style={{ fontSize: '13px', color: '#94a3b8', display: 'block', marginBottom: '8px' }}>
              Volume Multiplier: <strong style={{ color: '#818cf8' }}>{Math.round(volume * 100)}%</strong>
            </label>
            <input
              type="range"
              min="0.1"
              max="1.0"
              step="0.05"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              style={{ width: '100%', accentColor: '#818cf8', cursor: 'pointer' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
