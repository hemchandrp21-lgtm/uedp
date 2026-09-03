import React, { useState } from 'react';
import {
  playClickSound,
  setSoundMuted,
  isSoundMuted,
  toggleSoundMute,
  setSoundMode,
  getSoundMode,
  SoundEffectType,
} from '../utils/sound';
import { Volume2, VolumeX, Sparkles, Sliders, Play, Zap, Music } from 'lucide-react';

export default {
  title: 'Utilities/SoundEffects',
  parameters: {
    docs: {
      description: {
        component:
          'Interactive demo of the Web Audio API synthesized piano & crisp sound effects engine. Every click on any UI component automatically triggers tactile piano audio feedback.',
      },
    },
  },
};

export const AudioEffectsGallery = () => {
  const [muted, setMutedState] = useState(isSoundMuted());
  const [activeMode, setActiveModeState] = useState<SoundEffectType>(getSoundMode());
  const [pitch, setPitch] = useState(1.0);
  const [volume, setVolume] = useState(1.0);
  const [clickCount, setClickCount] = useState(0);
  const [lastPreset, setLastPreset] = useState<string>('piano');

  const handleToggleMute = () => {
    const newState = toggleSoundMute();
    setMutedState(newState);
  };

  const handleSelectMode = (mode: SoundEffectType) => {
    setSoundMode(mode);
    setActiveModeState(mode);
    setLastPreset(mode);
    playClickSound({ type: mode, volume, pitch });
  };

  const triggerSound = (type: SoundEffectType, explicitFreq?: number) => {
    setClickCount((c) => c + 1);
    setLastPreset(type);
    playClickSound({ type, volume, pitch, noteFreq: explicitFreq });
  };

  const pianoKeys = [
    { note: 'C5', freq: 523.25, isBlack: false },
    { note: 'C#5', freq: 554.37, isBlack: true },
    { note: 'D5', freq: 587.33, isBlack: false },
    { note: 'D#5', freq: 622.25, isBlack: true },
    { note: 'E5', freq: 659.25, isBlack: false },
    { note: 'F5', freq: 698.46, isBlack: false },
    { note: 'F#5', freq: 739.99, isBlack: true },
    { note: 'G5', freq: 783.99, isBlack: false },
    { note: 'G#5', freq: 830.61, isBlack: true },
    { note: 'A5', freq: 880.0, isBlack: false },
    { note: 'A#5', freq: 932.33, isBlack: true },
    { note: 'B5', freq: 987.77, isBlack: false },
    { note: 'C6', freq: 1046.5, isBlack: false },
  ];

  const soundPresets: { type: SoundEffectType; name: string; desc: string; iconColor: string; bg: string }[] = [
    {
      type: 'piano',
      name: 'Acoustic Piano Note',
      desc: 'Rich harmonic acoustic piano tone with fundamental, 2nd & 3rd overtones, felt hammer strike, and pentatonic progression.',
      iconColor: '#ec4899',
      bg: 'linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(168, 85, 247, 0.2))',
    },
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
        maxWidth: '920px',
        margin: '0 auto',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Music style={{ width: '28px', height: '28px', color: '#ec4899' }} />
            <h1
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '30px',
                fontWeight: 700,
                margin: 0,
                background: 'linear-gradient(135deg, #ec4899 0%, #a855f7 50%, #38bdf8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Piano & Tactile Audio Engine
            </h1>
          </div>
          <p style={{ color: '#94a3b8', marginTop: '6px', fontSize: '14px' }}>
            Synthesized acoustic piano notes & crisp microinteraction sound feedback on every click.
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

      {/* Interactive Piano Keyboard Keyboard */}
      <div
        style={{
          background: 'linear-gradient(180deg, #0f172a 0%, #020617 100%)',
          border: '1px solid rgba(236, 72, 153, 0.3)',
          borderRadius: '18px',
          padding: '24px',
          marginBottom: '32px',
          boxShadow: '0 10px 30px rgba(236, 72, 153, 0.15)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Sparkles style={{ width: '18px', height: '18px', color: '#ec4899' }} />
            <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 700, color: '#f472b6' }}>
              Synthesized Acoustic Piano Keyboard
            </h3>
          </div>
          <span style={{ fontSize: '12px', color: '#94a3b8' }}>Click any key to play pure Web Audio harmonic piano notes</span>
        </div>

        {/* Piano Keys Container */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: '4px',
            background: '#090d16',
            padding: '16px',
            borderRadius: '14px',
            overflowX: 'auto',
          }}
        >
          {pianoKeys.map((key) => (
            <button
              key={key.note}
              onClick={() => triggerSound('piano', key.freq)}
              style={{
                width: key.isBlack ? '36px' : '48px',
                height: key.isBlack ? '110px' : '160px',
                background: key.isBlack
                  ? 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)'
                  : 'linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%)',
                color: key.isBlack ? '#f472b6' : '#0f172a',
                border: key.isBlack ? '1px solid rgba(236, 72, 153, 0.4)' : '1px solid #cbd5e1',
                borderRadius: '0 0 8px 8px',
                fontWeight: 700,
                fontSize: '12px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
                paddingBottom: '10px',
                boxShadow: key.isBlack
                  ? '0 6px 12px rgba(0, 0, 0, 0.6)'
                  : '0 6px 12px rgba(0, 0, 0, 0.3)',
                transition: 'all 0.1s ease',
                userSelect: 'none',
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.transform = 'translateY(4px)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {key.note}
            </button>
          ))}
        </div>
      </div>

      {/* Default Sound Mode Selector */}
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
              Active Sound Mode on Clicks
            </span>
            <div style={{ fontWeight: 600, fontSize: '15px', color: '#ec4899' }}>{activeMode.toUpperCase()} MODE</div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '8px' }}>
          {(['piano', 'crisp', 'snap', 'pop'] as SoundEffectType[]).map((mode) => (
            <button
              key={mode}
              onClick={() => handleSelectMode(mode)}
              style={{
                padding: '6px 14px',
                borderRadius: '8px',
                fontSize: '12px',
                fontWeight: 600,
                background: activeMode === mode ? '#ec4899' : '#1e293b',
                color: activeMode === mode ? '#ffffff' : '#94a3b8',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {mode.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Preset Sound Cards */}
      <h2 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px', color: '#cbd5e1' }}>
        Synthesized Sound Effect Presets
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px', marginBottom: '36px' }}>
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
