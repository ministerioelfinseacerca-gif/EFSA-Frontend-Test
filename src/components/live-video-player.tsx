'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Loader2, AlertTriangle, Video, Maximize2, Radio } from 'lucide-react';

const VIDEO_STREAM_URL = 'https://v2.tustreaming.cl/tiemposf/index.m3u8';

type VideoStatus = 'idle' | 'loading' | 'playing' | 'paused' | 'error';

export default function LiveVideoPlayer() {
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const hlsRef = React.useRef<any | null>(null);
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const [status, setStatus] = React.useState<VideoStatus>('idle');
  const [supported, setSupported] = React.useState<boolean>(true);

  const isLive = status === 'playing';
  const isLoading = status === 'loading';
  const isError = status === 'error';

  React.useEffect(() => {
    return () => {
      destroyHls();
    };
  }, []);

  function destroyHls() {
    if (hlsRef.current) {
      try {
        hlsRef.current.destroy();
      } catch {
        /* noop */
      }
    }
    hlsRef.current = null;
  }

  const startPlayback = React.useCallback(async () => {
    const video = videoRef.current;
    if (!video) return;

    const canNative = video.canPlayType('application/vnd.apple.mpegurl') !== '';

    setStatus('loading');
    destroyHls();

    if (canNative) {
      video.src = VIDEO_STREAM_URL;
    } else {
      let HlsCtor: any = null;
      try {
        const mod = await import('hls.js');
        HlsCtor = mod.default;
      } catch (err) {
        console.error('No se pudo cargar hls.js:', err);
        setSupported(false);
        setStatus('error');
        return;
      }

      if (!HlsCtor || !HlsCtor.isSupported()) {
        setSupported(false);
        setStatus('error');
        return;
      }

      const hls = new HlsCtor({
        enableWorker: true,
        lowLatencyMode: true,
        backBufferLength: 30,
      });
      hlsRef.current = hls;

      hls.loadSource(VIDEO_STREAM_URL);
      hls.attachMedia(video);

      hls.on('hlsError', (_event: string, data: any) => {
        if (data.fatal) {
          switch (data.type) {
            case 'networkError':
              try {
                hls.startLoad();
              } catch {
                /* noop */
              }
              break;
            case 'mediaError':
              try {
                hls.recoverMediaError();
              } catch {
                /* noop */
              }
              break;
            default:
              destroyHls();
              setStatus('error');
              break;
          }
        }
      });
    }

    try {
      await video.play();
    } catch (err) {
      console.error('No se pudo reproducir el video:', err);
      setStatus('error');
    }
  }, []);

  const togglePlay = React.useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (status === 'playing' || status === 'loading') {
      video.pause();
    } else {
      void startPlayback();
    }
  }, [status, startPlayback]);

  const handlePlaying = React.useCallback(() => setStatus('playing'), []);
  const handlePause = React.useCallback(() => setStatus('paused'), []);
  const handleWaiting = React.useCallback(
    () => setStatus((s) => (s === 'playing' ? 'loading' : s)),
    []
  );
  const handleError = React.useCallback(() => {
    setStatus('error');
  }, []);

  const toggleFullscreen = React.useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    if (document.fullscreenElement) {
      void document.exitFullscreen();
    } else {
      void container.requestFullscreen?.();
    }
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      <div
        ref={containerRef}
        className="relative aspect-video w-full overflow-hidden border-2 border-gold-base bg-surface-container-lowest shadow-none"
      >
        <video
          ref={videoRef}
          className="h-full w-full object-contain"
          playsInline
          muted={false}
          onPlaying={handlePlaying}
          onPause={handlePause}
          onWaiting={handleWaiting}
          onError={handleError}
        />

        {/* Poster / overlay when not playing */}
        <AnimatePresence>
          {!isLive && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-surface-container-lowest/90 p-6 text-center"
            >
              <div className="flex h-16 w-16 items-center justify-center border-2 border-gold-base bg-navy-midnight/20">
                <Video className="h-8 w-8 text-gold-base" />
              </div>
              <div className="max-w-md">
                <p className="text-lg font-headline font-bold text-gold-highlight uppercase">
                  {isLoading
                    ? 'Conectando con la señal de video...'
                    : isError
                      ? 'Señal de video no disponible'
                      : 'Transmisión de video en vivo'}
                </p>
                <p className="mt-1 font-body text-xs text-on-surface opacity-70">
                  {isLoading
                    ? 'Esto puede tardar unos segundos.'
                    : isError
                      ? 'La transmisión podría estar fuera del aire temporalmente. ¡Pronto regresamos!'
                      : 'Presiona para ver el estudio en vivo desde Santiago en HD 720p.'}
                </p>
              </div>
              {!isLoading && (
                <button
                  type="button"
                  onClick={togglePlay}
                  disabled={!supported}
                  className="mt-2 inline-flex items-center gap-2 border-2 border-gold-base bg-gold-base px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-navy-midnight hover:bg-gold-highlight hover:border-gold-highlight transition-colors cursor-pointer"
                >
                  {isError ? (
                    <>
                      <AlertTriangle className="h-4 w-4" /> Reintentar señal
                    </>
                  ) : (
                    <>
                      <Play className="h-4 w-4 fill-current" /> Ver en vivo
                    </>
                  )}
                </button>
              )}
              {isLoading && (
                <Loader2 className="h-6 w-6 animate-spin text-gold-base" />
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Top controls overlay when playing */}
        <AnimatePresence>
          {isLive && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between p-4"
            >
              <div className="pointer-events-auto flex items-center gap-2 border border-error bg-error/95 px-3 py-1 shadow-none">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping bg-white opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 bg-white"></span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-white">
                  En Vivo
                </span>
              </div>
              <button
                type="button"
                onClick={toggleFullscreen}
                aria-label="Pantalla completa"
                className="pointer-events-auto flex h-9 w-9 items-center justify-center border-2 border-gold-base bg-background/80 text-gold-base hover:bg-gold-base hover:text-navy-midnight transition-colors cursor-pointer"
              >
                <Maximize2 className="h-4 w-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom controls overlay when playing */}
        <AnimatePresence>
          {isLive && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-gradient-to-t from-background/90 to-transparent p-4"
            >
              <div className="flex items-center gap-2 text-gold-highlight">
                <Video className="h-4 w-4 text-gold-base" />
                <span className="font-body text-xs font-bold uppercase tracking-wider">
                  Estudio en vivo · HD 720p
                </span>
              </div>
              <button
                type="button"
                onClick={togglePlay}
                className="inline-flex items-center gap-1.5 border border-gold-base bg-transparent px-3 py-1.5 font-body text-xs font-bold uppercase tracking-wider text-gold-base hover:bg-gold-base hover:text-navy-midnight transition-colors cursor-pointer"
              >
                <Pause className="h-4 w-4 fill-current" /> Pausar video
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Inner loading spinner */}
        <AnimatePresence>
          {isLoading && isLive === false && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center bg-background/50"
            >
              <Loader2 className="h-8 w-8 animate-spin text-gold-base" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Info status line */}
      <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-[10px] font-body text-on-surface opacity-60 uppercase tracking-widest">
        <span className="inline-flex items-center gap-1">
          <Video className="h-3.5 w-3.5 text-gold-base" /> HLS · 720p · H.264
        </span>
        <span className="mx-1">•</span>
        <span className="inline-flex items-center gap-1">
          <Radio className="h-3.5 w-3.5 text-gold-highlight animate-pulse" /> Audio sincronizado
        </span>
      </div>
    </div>
  );
}
