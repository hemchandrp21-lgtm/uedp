/**
 * Crisp & Acoustic Sound Effects Synthesizer using Web Audio API
 * High-performance, zero-latency tactile audio feedback engine.
 * Synthesizes organic micro-variation click, snap, pop, toggle, and piano audio effects.
 */

export type SoundEffectType = 'crisp' | 'snap' | 'pop' | 'soft' | 'toggle' | 'piano';

export interface SoundOptions {
  type?: SoundEffectType;
  volume?: number; // Volume multiplier (0.0 to 1.0)
  pitch?: number;  // Pitch multiplier (0.5 to 2.0)
  noteFreq?: number; // Specific frequency for piano note (e.g. 523.25)
}

// C Major Pentatonic Scale for piano melody progression
const PIANO_SCALE = [
  523.25, // C5
  587.33, // D5
  659.25, // E5
  783.99, // G5
  880.00, // A5
  1046.50, // C6
  987.77, // B5
  783.99, // G5
  659.25, // E5
];

class SoundEngine {
  private ctx: AudioContext | null = null;
  private muted: boolean = false;
  private enabled: boolean = false;
  private lastPlayTime: number = 0;
  private masterVolume: number = 0.28;
  private activeMode: SoundEffectType = 'piano';
  private pianoNoteIndex: number = 0;

  private getContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;

    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }

    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }

    return this.ctx;
  }

  public isMuted(): boolean {
    return this.muted;
  }

  public setMuted(muted: boolean): void {
    this.muted = muted;
  }

  public toggleMute(): boolean {
    this.muted = !this.muted;
    return this.muted;
  }

  public setMasterVolume(vol: number): void {
    this.masterVolume = Math.max(0, Math.min(1, vol));
  }

  public getSoundMode(): SoundEffectType {
    return this.activeMode;
  }

  public setSoundMode(mode: SoundEffectType): void {
    this.activeMode = mode;
  }

  /**
   * Play a synthesized audio effect (defaulting to the active sound mode)
   */
  public play(options?: SoundOptions | SoundEffectType): void {
    if (this.muted) return;

    // Guard against audio cluttering if triggered within 15ms
    const nowMs = typeof performance !== 'undefined' ? performance.now() : Date.now();
    if (nowMs - this.lastPlayTime < 15) return;
    this.lastPlayTime = nowMs;

    const ctx = this.getContext();
    if (!ctx) return;

    const opts: SoundOptions = typeof options === 'string'
      ? { type: options }
      : options || { type: this.activeMode };

    const type = opts.type || this.activeMode;
    const vol = (opts.volume ?? 1.0) * this.masterVolume;
    const pitch = opts.pitch ?? 1.0;

    const startTime = ctx.currentTime;
    const gainNode = ctx.createGain();
    gainNode.connect(ctx.destination);

    if (type === 'piano') {
      this.playPianoNote(ctx, gainNode, startTime, vol, pitch, opts.noteFreq);
    } else if (type === 'crisp') {
      // High-end tactile click: Pitch sweep + crisp high-frequency noise transient
      const randomPitch = pitch * (0.975 + Math.random() * 0.05);
      const duration = 0.024;

      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(2600 * randomPitch, startTime);
      osc.frequency.exponentialRampToValueAtTime(450 * randomPitch, startTime + duration);

      gainNode.gain.setValueAtTime(vol * 0.85, startTime);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

      osc.connect(gainNode);
      osc.start(startTime);
      osc.stop(startTime + duration);

      this.playNoiseClick(ctx, gainNode, startTime, 0.004, vol * 0.45, randomPitch);

    } else if (type === 'snap') {
      // Sharp mechanical switch snap
      const randomPitch = pitch * (0.975 + Math.random() * 0.05);
      const duration = 0.018;

      const osc = ctx.createOscillator();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(3400 * randomPitch, startTime);
      osc.frequency.exponentialRampToValueAtTime(650 * randomPitch, startTime + duration);

      gainNode.gain.setValueAtTime(vol * 0.9, startTime);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

      osc.connect(gainNode);
      osc.start(startTime);
      osc.stop(startTime + duration);

      this.playNoiseClick(ctx, gainNode, startTime, 0.003, vol * 0.6, randomPitch);

    } else if (type === 'pop') {
      // Round bubble / pill pop sound
      const randomPitch = pitch * (0.975 + Math.random() * 0.05);
      const duration = 0.035;

      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(950 * randomPitch, startTime);
      osc.frequency.exponentialRampToValueAtTime(280 * randomPitch, startTime + duration);

      gainNode.gain.setValueAtTime(vol * 0.75, startTime);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

      osc.connect(gainNode);
      osc.start(startTime);
      osc.stop(startTime + duration);

    } else if (type === 'toggle') {
      // Modern UI toggle flick
      const randomPitch = pitch * (0.975 + Math.random() * 0.05);
      const duration = 0.03;

      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(550 * randomPitch, startTime);
      osc.frequency.exponentialRampToValueAtTime(1500 * randomPitch, startTime + duration);

      gainNode.gain.setValueAtTime(vol * 0.65, startTime);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

      osc.connect(gainNode);
      osc.start(startTime);
      osc.stop(startTime + duration);

    } else {
      // Soft tap
      const randomPitch = pitch * (0.975 + Math.random() * 0.05);
      const duration = 0.02;

      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(1300 * randomPitch, startTime);
      osc.frequency.exponentialRampToValueAtTime(350 * randomPitch, startTime + duration);

      gainNode.gain.setValueAtTime(vol * 0.45, startTime);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

      osc.connect(gainNode);
      osc.start(startTime);
      osc.stop(startTime + duration);
    }
  }

  /**
   * Synthesize acoustic piano note with overtones & hammer strike
   */
  private playPianoNote(
    ctx: AudioContext,
    destination: GainNode,
    startTime: number,
    volume: number,
    pitch: number,
    explicitFreq?: number
  ) {
    // Select base note frequency from pentatonic scale or explicit argument
    let baseFreq = explicitFreq;
    if (!baseFreq) {
      baseFreq = PIANO_SCALE[this.pianoNoteIndex];
      this.pianoNoteIndex = (this.pianoNoteIndex + 1) % PIANO_SCALE.length;
    }

    const freq = baseFreq * pitch;
    const duration = 0.22; // 220ms acoustic decay

    // Piano Master Envelope (Fast attack, natural exponential decay)
    destination.gain.setValueAtTime(0.0001, startTime);
    destination.gain.linearRampToValueAtTime(volume * 0.7, startTime + 0.003); // 3ms hammer strike attack
    destination.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    // 1. Fundamental Tone (Sine)
    const osc1 = ctx.createOscillator();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(freq, startTime);

    const gain1 = ctx.createGain();
    gain1.gain.setValueAtTime(0.8, startTime);
    osc1.connect(gain1);
    gain1.connect(destination);
    osc1.start(startTime);
    osc1.stop(startTime + duration);

    // 2. Second Harmonic Over-Tone (Triangle at 2x frequency for string body resonance)
    const osc2 = ctx.createOscillator();
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(freq * 2.001, startTime);

    const gain2 = ctx.createGain();
    gain2.gain.setValueAtTime(0.35, startTime);
    gain2.gain.exponentialRampToValueAtTime(0.0001, startTime + (duration * 0.7));
    osc2.connect(gain2);
    gain2.connect(destination);
    osc2.start(startTime);
    osc2.stop(startTime + duration);

    // 3. Third Harmonic Sparkle (Sine at 3x frequency for high bell timbre)
    const osc3 = ctx.createOscillator();
    osc3.type = 'sine';
    osc3.frequency.setValueAtTime(freq * 3.002, startTime);

    const gain3 = ctx.createGain();
    gain3.gain.setValueAtTime(0.15, startTime);
    gain3.gain.exponentialRampToValueAtTime(0.0001, startTime + (duration * 0.4));
    osc3.connect(gain3);
    gain3.connect(destination);
    osc3.start(startTime);
    osc3.stop(startTime + duration);

    // 4. Soft Felt Hammer Click (Lowpass noise burst in first 3ms)
    this.playFeltHammerClick(ctx, destination, startTime, 0.004, volume * 0.2, pitch);
  }

  private playFeltHammerClick(
    ctx: AudioContext,
    destination: GainNode,
    startTime: number,
    duration: number,
    volume: number,
    pitch: number
  ) {
    const bufferSize = Math.floor(ctx.sampleRate * duration);
    if (bufferSize <= 0) return;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      output[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.2));
    }

    const whiteNoise = ctx.createBufferSource();
    whiteNoise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1400 * pitch, startTime);
    filter.Q.setValueAtTime(2.0, startTime);

    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(volume, startTime);
    noiseGain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    whiteNoise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(destination);

    whiteNoise.start(startTime);
    whiteNoise.stop(startTime + duration);
  }

  private playNoiseClick(
    ctx: AudioContext,
    destination: GainNode,
    startTime: number,
    duration: number,
    volume: number,
    pitch: number
  ) {
    const bufferSize = Math.floor(ctx.sampleRate * duration);
    if (bufferSize <= 0) return;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      output[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.3));
    }

    const whiteNoise = ctx.createBufferSource();
    whiteNoise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.setValueAtTime(2200 * pitch, startTime);

    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(volume, startTime);
    noiseGain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    whiteNoise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(destination);

    whiteNoise.start(startTime);
    whiteNoise.stop(startTime + duration);
  }

  /**
   * Enable global click sound engine on every click/pointer event
   */
  public enableGlobalClickSound(): void {
    if (typeof window === 'undefined' || this.enabled) return;

    this.enabled = true;

    const handlePointerDown = () => {
      this.getContext();
      this.play(this.activeMode);
    };

    window.addEventListener('pointerdown', handlePointerDown, { capture: true, passive: true });
  }
}

export const soundEngine = new SoundEngine();

export const playClickSound = (options?: SoundOptions | SoundEffectType) => soundEngine.play(options);
export const enableClickSoundEngine = () => soundEngine.enableGlobalClickSound();
export const setSoundMuted = (muted: boolean) => soundEngine.setMuted(muted);
export const isSoundMuted = () => soundEngine.isMuted();
export const toggleSoundMute = () => soundEngine.toggleMute();
export const setSoundMode = (mode: SoundEffectType) => soundEngine.setSoundMode(mode);
export const getSoundMode = () => soundEngine.getSoundMode();

// Auto-enable global click listener in browser environments
if (typeof window !== 'undefined') {
  enableClickSoundEngine();
}
