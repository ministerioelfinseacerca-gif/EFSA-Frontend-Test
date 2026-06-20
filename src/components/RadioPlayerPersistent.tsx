'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function RadioPlayerPersistent() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Fallback stream url for testing (using a placeholder or standard shoutcast/icecast stream)
  const streamUrl = 'https://stream.zeno.fm/9sgxsz11yzzux'; 

  const handlePlayPause = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      // For live stream streams, reload to prevent delay accumulation
      audioRef.current.src = streamUrl;
      audioRef.current.load();
      audioRef.current.play().catch((err) => {
        console.error('Audio play failed:', err);
      });
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (audioRef.current) {
      audioRef.current.volume = val;
    }
    if (val > 0) {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    audioRef.current.muted = nextMuted;
  };

  // Setup audio on mount
  useEffect(() => {
    const audio = new Audio();
    audio.src = streamUrl;
    audio.volume = volume;
    audio.crossOrigin = 'anonymous';
    audioRef.current = audio;

    return () => {
      if (audio) {
        audio.pause();
        audio.src = '';
      }
    };
  }, []);

  return (
    <div
      id="radio-player"
      className="fixed bottom-0 left-0 right-0 z-50 bg-surface-container-lowest/80 backdrop-blur-md border-t-2 border-gold-base transition-all duration-300 shadow-none"
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left Side: Program Information */}
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="w-12 h-12 bg-navy-midnight border border-gold-base flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-gold-base animate-pulse">radio</span>
          </div>
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-error animate-ping rounded-full inline-block shrink-0"></span>
              <span className="font-body text-[10px] font-bold text-gold-highlight tracking-widest uppercase">
                EN VIVO
              </span>
            </div>
            <span className="font-headline text-sm font-bold text-off-white uppercase truncate">
              RADIO TIEMPOS FINALES
            </span>
            <span className="font-body text-xs text-on-surface-variant opacity-70 truncate">
              Programa: Mensajes Proféticos de Fe
            </span>
          </div>
        </div>

        {/* Center: Play Control & Equalizer Animation */}
        <div className="flex items-center gap-6 justify-center w-full md:w-auto">
          {/* Equalizer (simulated audio bars) */}
          <div className="flex items-end gap-1 h-6 w-12 shrink-0 justify-center">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 bg-gold-base"
                animate={isPlaying ? {
                  height: [6, 24, 8, 20, 10, 24, 6][(i + Math.floor(Math.random() * 5)) % 7]
                } : { height: 4 }}
                transition={isPlaying ? {
                  repeat: Infinity,
                  duration: 0.8 + (i * 0.1),
                  ease: 'easeInOut',
                  repeatType: 'reverse'
                } : { duration: 0.3 }}
              />
            ))}
          </div>

          {/* Play/Pause Button */}
          <motion.button
            onClick={handlePlayPause}
            className="w-14 h-14 bg-gold-base text-navy-midnight border-2 border-gold-base hover:bg-gold-highlight hover:border-gold-highlight flex items-center justify-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={isPlaying ? 'Pausar Radio' : 'Reproducir Radio'}
          >
            <span className="material-symbols-outlined text-4xl fill">
              {isPlaying ? 'pause' : 'play_arrow'}
            </span>
          </motion.button>

          {/* Stream Status Text */}
          <div className="hidden lg:block w-32 font-body text-xs text-gold-base/80 font-bold uppercase tracking-wider">
            {isPlaying ? 'SINTONIZANDO...' : 'SINAL EN PAUSA'}
          </div>
        </div>

        {/* Right Side: Volume & Stats */}
        <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto">
          {/* Listener Count */}
          <div className="flex items-center gap-2 text-gold-base">
            <span className="material-symbols-outlined text-base">groups</span>
            <span className="font-body text-xs font-bold uppercase tracking-wider">
              142 oyentes
            </span>
          </div>

          {/* Volume Control */}
          <div 
            className="relative flex items-center"
            onMouseEnter={() => setShowVolumeSlider(true)}
            onMouseLeave={() => setShowVolumeSlider(false)}
          >
            <motion.button
              onClick={toggleMute}
              className="text-gold-base hover:text-gold-highlight cursor-pointer p-1"
              whileHover={{ scale: 1.1 }}
              aria-label="Silenciar / Activar sonido"
            >
              <span className="material-symbols-outlined">
                {isMuted || volume === 0
                  ? 'volume_off'
                  : volume < 0.4
                  ? 'volume_down'
                  : 'volume_up'}
              </span>
            </motion.button>

            <AnimatePresence>
              {showVolumeSlider && (
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 80 }}
                  exit={{ opacity: 0, width: 0 }}
                  className="overflow-hidden flex items-center h-8 ml-2"
                >
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    className="w-full accent-gold-base bg-surface-container-high h-1 appearance-none cursor-pointer outline-none"
                    aria-label="Volumen"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
