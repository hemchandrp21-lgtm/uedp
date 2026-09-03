/**
 * Crisp Sound Effects Synthesizer using Web Audio API
 * High-performance, zero-latency tactile audio feedback engine.
 * Synthesizes organic micro-variation click, snap, pop, and toggle audio effects.
 */

export type SoundEffectType = 'crisp' | 'snap' | 'pop' | 'soft' | 'toggle';

export interface SoundOptions {
  type?: SoundEffectType;
  volume?: number; // Volume multiplier (0.0 to 1.0)
  pitch?: number;  // Pitch multiplier (0.5 to 2.0)
}

class SoundEngine {
  private ctx: AudioContext | null = null;
  private muted: boolean = false;
  private enabled: boolean = false;
  private lastPlayTime: number = 0;
  private masterVolume: number = 0.25;

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

  /**
   * Play a crisp synthesized tactile click sound effect
   */
  public play(options: SoundOptions | SoundEffectType = 'crisp'): void {
    if (this.muted) return;

    // Guard against audio cluttering if triggered within 15ms
    const nowMs = typeof performance !== 'undefined' ? performance.now() : Date.now();
    if (nowMs - this.lastPlayTime < 15) return;
    this.lastPlayTime = nowMs;

    const ctx = this.getContext();
    if (!ctx) return;

    const opts: SoundOptions = typeof options === 'string' ? { type: options } : options;
    const type = opts.type || 'crisp';
    const vol = (opts.volume ?? 1.0) * this.masterVolume;
    const pitch = opts.pitch ?? 1.0;

    // Organic micro-pitch variation (+/- 2.5%) so rapid clicks sound natural
    const randomPitch = pitch * (0.975 + Math.random() * 0.05);
    const startTime = ctx.currentTime;

    const gainNode = ctx.createGain();
    gainNode.connect(ctx.destination);

    if (type === 'crisp') {
      // High-end tactile click: Pitch sweep + crisp high-frequency noise transient
      const duration = 0.024; // 24ms

      const osc = ctx.createOscillator();
      osc.type = 'sine';
      const startFreq = 2600 * randomPitch;
      const endFreq = 450 * randomPitch;

      osc.frequency.setValueAtTime(startFreq, startTime);
      osc.frequency.exponentialRampToValueAtTime(Math.max(20, endFreq), startTime + duration);

      gainNode.gain.setValueAtTime(vol * 0.85, startTime);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

      osc.connect(gainNode);
      osc.start(startTime);
      osc.stop(startTime + duration);

      this.playNoiseClick(ctx, gainNode, startTime, 0.004, vol * 0.45, randomPitch);

    } else if (type === 'snap') {
      // Sharp mechanical switch snap
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
      this.play('crisp');
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

// Auto-enable global click listener in browser environments
if (typeof window !== 'undefined') {
  enableClickSoundEngine();
}
