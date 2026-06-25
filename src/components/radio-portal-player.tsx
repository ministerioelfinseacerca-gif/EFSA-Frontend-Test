'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, Volume1, VolumeX, Loader2, Radio, AlertTriangle, AudioLines, Video } from 'lucide-react';
import { RADIO_STATIONS, DEFAULT_STATION_ID, LIVE_OFF_MESSAGE, type RadioStation } from '@/lib/radio-stations';
import LiveVideoPlayer from './live-video-player';

type PlayerMode = 'audio' | 'video';
type PlayerStatus = 'idle' | 'loading' | 'playing' | 'paused' | 'error';

export default function RadioPortalPlayer() {
  const [mode, setMode] = React.useState<PlayerMode>('audio');

  return (
    <div className="w-full flex flex-col items-center">
      {/* Selector de modo Audio / Video */}
      <div className="mb-8 flex justify-center">
        <div className="inline-flex border-2 border-surface-bright bg-surface-container-low p-1">
          <button
            type="button"
            onClick={() => setMode('audio')}
            className={`flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              mode === 'audio'
                ? 'bg-gold-base text-navy-midnight'
                : 'bg-transparent text-gold-base hover:text-gold-highlight opacity-85'
            }`}
          >
            <AudioLines className="h-4 w-4" />
            Audio en vivo
          </button>
          <button
            type="button"
            onClick={() => setMode('video')}
            className={`flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              mode === 'video'
                ? 'bg-gold-base text-navy-midnight'
                : 'bg-transparent text-gold-base hover:text-gold-highlight opacity-85'
            }`}
          >
            <Video className="h-4 w-4" />
            Video en vivo
          </button>
        </div>
      </div>

      <div className="w-full max-w-3xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {mode === 'audio' ? <AudioLivePlayer /> : <LiveVideoPlayer />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

/* --------------------------- Audio Live Player --------------------------- */

function AudioLivePlayer() {
  const audioRef = React.useRef<HTMLAudioElement | null>(null);
  const [stationId, setStationId] = React.useState<string>(DEFAULT_STATION_ID);
  const [status, setStatus] = React.useState<PlayerStatus>('idle');
  const [volume, setVolume] = React.useState<number>(0.8);
  const [muted, setMuted] = React.useState<boolean>(false);

  const station = React.useMemo<RadioStation>(
    () => RADIO_STATIONS.find((s) => s.id === stationId) ?? RADIO_STATIONS[0],
    [stationId]
  );

  // Recuperar volumen persistente
  React.useEffect(() => {
    const saved = localStorage.getItem('rtf-volume');
    if (saved !== null) {
      const v = Number(saved);
      if (!Number.isNaN(v) && v >= 0 && v <= 1) setVolume(v);
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('rtf-volume', String(volume));
  }, [volume]);

  // Sincronizar volumen del elemento audio
  React.useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = volume;
    audio.muted = muted;
  }, [volume, muted]);

  const playStream = React.useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;
    setStatus('loading');
    try {
      audio.src = station.streamUrl;
      audio.load();
      await audio.play();
    } catch (err) {
      console.error('No se pudo reproducir el stream:', err);
      setStatus('error');
    }
  }, [station.streamUrl]);

  const wasPlayingRef = React.useRef(false);
  React.useEffect(() => {
    wasPlayingRef.current = status === 'playing';
  }, [status]);

  // Al cambiar de señal, si estaba sonando, se reinicia con la nueva señal
  React.useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.src = station.streamUrl;
    audio.load();
    if (wasPlayingRef.current) {
      void playStream();
    }
  }, [stationId, station.streamUrl, playStream]);

  const togglePlay = React.useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (status === 'playing' || status === 'loading') {
      audio.pause();
    } else {
      void playStream();
    }
  }, [status, playStream]);

  const handleWaiting = React.useCallback(() => {
    setStatus((s) => (s === 'playing' ? 'loading' : s));
  }, []);

  const handlePlaying = React.useCallback(() => {
    setStatus('playing');
  }, []);

  const handlePause = React.useCallback(() => {
    setStatus('paused');
  }, []);

  const handleError = React.useCallback(() => {
    setStatus('error');
  }, []);

  const handleStalled = React.useCallback(() => {
    setStatus((s) => (s === 'playing' ? 'loading' : s));
  }, []);

  // Limpieza al desmontar
  React.useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
      }
    };
  }, []);

  const isLive = status === 'playing';
  const isLoading = status === 'loading';
  const isError = status === 'error';

  const VolumeIcon = muted || volume === 0 ? VolumeX : volume < 0.5 ? Volume1 : Volume2;

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Selector de estación (Santiago / Iquique) */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {RADIO_STATIONS.map((s) => {
          const active = s.id === stationId;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => setStationId(s.id)}
              className={`group flex items-center justify-between border-2 p-4 text-left transition-all duration-300 cursor-pointer ${
                active
                  ? 'border-gold-base bg-navy-midnight/20 shadow-none'
                  : 'border-surface-bright bg-surface-container hover:border-gold-base/50'
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center font-headline font-bold text-xs border ${
                    active ? 'border-gold-base bg-gold-base text-navy-midnight' : 'border-surface-bright bg-surface-container-lowest text-gold-base'
                  }`}
                >
                  {s.name.slice(0, 3).toUpperCase()}
                </span>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-headline text-sm font-bold uppercase tracking-tight text-off-white truncate">
                      {s.name}
                    </span>
                    <span className="font-mono text-xs text-gold-base font-bold">
                      {s.frequency}
                    </span>
                  </div>
                  <p className="font-body text-xs text-on-surface opacity-60 truncate">{s.city}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main player box */}
      <div className="relative overflow-hidden border-2 border-gold-base bg-surface-container-lowest p-6 sm:p-8 shadow-none">
        {/* Hidden live audio element */}
        <audio
          ref={audioRef}
          preload="none"
          crossOrigin="anonymous"
          onWaiting={handleWaiting}
          onPlaying={handlePlaying}
          onPause={handlePause}
          onError={handleError}
          onStalled={handleStalled}
        />

        <div className="relative flex flex-col gap-6">
          {/* Top Status */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center shrink-0">
                <Radio
                  className={`h-6 w-6 transition-colors ${
                    isLive ? 'text-gold-base animate-pulse' : 'text-on-surface opacity-40'
                  }`}
                />
              </div>
              <div>
                <p className="font-headline text-sm font-bold uppercase tracking-tight text-gold-highlight">
                  {isLive && 'Transmitiendo en vivo'}
                  {isLoading && 'Conectando con la señal...'}
                  {status === 'paused' && 'En pausa'}
                  {status === 'idle' && 'Listo para escuchar'}
                  {isError && 'Señal no disponible'}
                </p>
                <p className="font-body text-xs text-on-surface opacity-60">
                  {station.name} · {station.frequency} · {station.format}
                </p>
              </div>
            </div>

            {isLive && (
              <span className="inline-flex items-center gap-1.5 bg-error px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping bg-white opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 bg-white"></span>
                </span>
                En Vivo
              </span>
            )}
          </div>

          {/* Animating Visualizer */}
          <Visualizer active={isLive} loading={isLoading} />

          {/* Now playing label */}
          <div className="flex items-center justify-center gap-2 text-center">
            <span className="font-headline text-lg font-bold uppercase tracking-tighter text-off-white sm:text-xl">
              Radio Tiempos Finales
            </span>
            <span className="text-gold-base opacity-50 font-bold">•</span>
            <span className="font-mono text-lg text-gold-base font-bold sm:text-xl">
              {station.frequency}
            </span>
          </div>

          {/* Play/Pause Button */}
          <div className="flex items-center justify-center">
            <motion.button
              type="button"
              onClick={togglePlay}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              disabled={isLoading}
              aria-label={
                status === 'playing' || status === 'loading'
                  ? 'Pausar radio'
                  : 'Reproducir radio en vivo'
              }
              className="relative flex h-20 w-20 items-center justify-center bg-gold-base text-navy-midnight border-2 border-gold-base hover:bg-gold-highlight hover:border-gold-highlight transition-colors disabled:opacity-80 cursor-pointer"
            >
              {isLive && (
                <span className="absolute inset-0 border-2 border-gold-base opacity-40 animate-ping"></span>
              )}
              <AnimatePresence mode="wait" initial={false}>
                {isLoading ? (
                  <motion.span
                    key="loading"
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.6 }}
                  >
                    <Loader2 className="h-9 w-9 animate-spin" />
                  </motion.span>
                ) : status === 'playing' ? (
                  <motion.span
                    key="pause"
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.6 }}
                  >
                    <Pause className="h-9 w-9 fill-current" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="play"
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.6 }}
                  >
                    <Play className="ml-1 h-9 w-9 fill-current" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Error warning box */}
          <AnimatePresence>
            {isError && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="flex items-center justify-center gap-2 border border-error bg-error/10 px-4 py-3 text-center text-xs font-body text-error"
              >
                <AlertTriangle className="h-4 w-4 shrink-0" />
                <span>
                  La señal podría estar fuera del aire temporalmente. {LIVE_OFF_MESSAGE}
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Volume control range bar (zero border radius) */}
          <div className="flex items-center gap-3 bg-surface-container-low px-4 py-3 border border-surface-bright">
            <button
              type="button"
              onClick={() => setMuted((m) => !m)}
              aria-label={muted ? 'Activar sonido' : 'Silenciar'}
              className="h-9 w-9 shrink-0 flex items-center justify-center text-gold-base hover:text-gold-highlight hover:bg-surface-container transition-colors cursor-pointer"
            >
              <VolumeIcon className="h-5 w-5" />
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={muted ? 0 : volume}
              onChange={(e) => {
                setMuted(false);
                setVolume(parseFloat(e.target.value));
              }}
              aria-label="Volumen"
              className="flex-1 accent-gold-base bg-surface-container-high h-1 appearance-none cursor-pointer outline-none rounded-none"
            />
            <span className="w-10 shrink-0 text-right font-mono text-xs text-gold-base font-bold">
              {Math.round((muted ? 0 : volume) * 100)}%
            </span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="px-2 text-center font-body text-xs leading-relaxed text-on-surface opacity-70">
        {station.description}
      </p>
    </div>
  );
}

/* ------------------------------ Visualizer ----------------------------- */

function Visualizer({ active, loading }: { active: boolean; loading: boolean }) {
  const bars = React.useMemo(() => Array.from({ length: 28 }, (_, i) => i), []);

  return (
    <div
      className="flex h-20 items-center justify-center gap-[3px] border border-surface-bright bg-surface-container px-4 sm:gap-1"
      aria-hidden="true"
    >
      {bars.map((i) => {
        const delay = (i % 7) * 0.1;
        const duration = 0.5 + (i % 5) * 0.15;
        return (
          <motion.span
            key={i}
            className="w-[3px] sm:w-1 bg-gold-base"
            style={{
              backgroundColor: active ? 'var(--color-gold-base)' : 'rgba(255,255,255,0.15)',
            }}
            initial={{ height: 6 }}
            animate={
              active
                ? {
                    height: [8, 48, 16, 56, 10],
                  }
                : loading
                  ? { height: [6, 24, 6], opacity: [0.4, 1, 0.4] }
                  : { height: 6, opacity: 0.3 }
            }
            transition={
              active
                ? {
                    duration,
                    repeat: Infinity,
                    repeatType: 'mirror',
                    ease: 'easeInOut',
                    delay,
                  }
                : loading
                  ? { duration: 1, repeat: Infinity, ease: 'easeInOut', delay }
                  : { duration: 0.3 }
            }
          />
        );
      })}
    </div>
  );
}
