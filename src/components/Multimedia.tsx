'use client';

import { Play, Tv, Users, Instagram, Video, Radio, Youtube, ArrowUpRight } from 'lucide-react';
import ScrollReveal from './scroll-reveal';
import TextReveal from './text-reveal';

export default function Multimedia() {
  return (
    <section id="multimedia" className="py-20 sm:py-28 px-4 bg-transparent">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16">
        
        {/* Title */}
        <div className="w-full">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-efsa-red mb-4">
            Ecosistema Digital
          </p>
          <TextReveal
            as="h2"
            className="font-headline text-4xl sm:text-5xl text-gold-highlight uppercase tracking-tight font-bold mb-6"
          >
            CENTRO MULTIMEDIA
          </TextReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5">
          {/* LEFT COLUMN */}
          <ScrollReveal animation="fade" staggerChildren={true} stagger={0.08} className="lg:col-span-2 flex flex-col gap-4 sm:gap-5">
            {/* YouTube Video card (Main Live) */}
            <a
              href="https://www.youtube.com/@tiemposfinaleshd4648/streams"
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-video bg-surface-container-lowest border border-gold-base/20 flex flex-col items-center justify-center group overflow-hidden"
            >
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-efsa-red px-3 py-1">
                <span className="w-2 h-2 rounded-full bg-white live-pulse" />
                <span className="font-headline text-xs text-white font-bold uppercase tracking-widest">LIVE</span>
              </div>
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                style={{ backgroundImage: `url("/live_broadcast_cover.png")` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
              
              <Play className="h-16 w-16 text-white fill-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 z-20" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <div className="flex items-center gap-3">
                  <Tv className="h-6 w-6 text-efsa-red" strokeWidth={1.5} />
                  <span className="font-headline text-lg sm:text-xl text-white uppercase font-bold tracking-tight">
                    TRANSMISIÓN EN VIVO
                  </span>
                </div>
              </div>
            </a>

            {/* Two column grid for Facebook & Coro Israel */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 w-full">
              {/* Pastor Marcos Facebook */}
              <div className="bg-surface-container-lowest border border-gold-base/20 p-6 sm:p-7 flex flex-col justify-between gap-6 group hover:border-gold-base/40 transition-colors duration-300">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-efsa-red" strokeWidth={1.5} />
                    <span className="font-headline text-sm font-bold text-gold-base uppercase">PASTOR MARCOS</span>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-gold-base/40" strokeWidth={1.5} />
                </div>
                <a
                  href="https://www.facebook.com/people/Pastor-Marcos-Morales/61578795157619/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative min-h-[160px] bg-surface-container border border-gold-base/20 flex flex-col justify-end overflow-hidden"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                    style={{ backgroundImage: `url("/pastor_facebook_cover.png")` }}
                  />
                  <div className="p-4 z-10 w-full bg-gradient-to-t from-black/80 to-transparent">
                    <h4 className="font-headline text-sm font-bold text-white uppercase tracking-tight">
                      PERFIL OFICIAL
                    </h4>
                    <p className="font-sans text-[11px] text-zinc-300 tracking-wider mt-0.5">
                      @pastormarcosmorales
                    </p>
                  </div>
                </a>
              </div>

              {/* Coro Israel YouTube */}
              <div className="bg-surface-container-lowest border border-gold-base/20 p-6 sm:p-7 flex flex-col justify-between gap-6 group hover:border-gold-base/40 transition-colors duration-300">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Youtube className="h-5 w-5 text-efsa-red" strokeWidth={1.5} />
                    <span className="font-headline text-sm font-bold text-gold-base uppercase">CORO ISRAEL</span>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-gold-base/40" strokeWidth={1.5} />
                </div>
                
                <a
                  href="https://www.youtube.com/@coroisraeloficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative min-h-[160px] bg-surface-container border border-gold-base/20 flex flex-col justify-end overflow-hidden"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                    style={{ backgroundImage: `url("/coro_israel_thumbnail.png")` }}
                  />
                  <div className="p-4 z-10 w-full bg-gradient-to-t from-black/80 to-transparent">
                    <h4 className="font-headline text-sm font-bold text-white uppercase tracking-tight">
                      YOUTUBE CANAL
                    </h4>
                    <p className="font-sans text-[11px] text-zinc-300 tracking-wider mt-0.5">
                      @coroisraeloficial
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* RIGHT COLUMN */}
          <ScrollReveal animation="fade" staggerChildren={true} stagger={0.1} className="flex flex-col gap-4 sm:gap-5">
            {/* Coro Israel Instagram */}
            <div className="bg-surface-container-lowest border border-gold-base/20 p-6 sm:p-7 flex flex-col gap-6 group hover:border-gold-base/40 transition-colors duration-300">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Instagram className="h-5 w-5 text-efsa-red" strokeWidth={1.5} />
                  <span className="font-headline text-sm font-bold text-gold-base uppercase">INSTAGRAM</span>
                </div>
                <ArrowUpRight className="h-4 w-4 text-gold-base/40" strokeWidth={1.5} />
              </div>
              <a href="https://www.instagram.com/coroisrael/" target="_blank" rel="noopener noreferrer" className="relative aspect-square bg-surface-container-lowest border border-gold-base/20 flex flex-col justify-end overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                  style={{ backgroundImage: `url("/coro_instagram_cover.png")` }}
                />
                <div className="p-4 z-10 w-full text-center bg-gradient-to-t from-black/90 to-transparent pt-12">
                  <h4 className="font-headline text-sm font-bold text-white tracking-widest uppercase">
                    @coroisrael
                  </h4>
                </div>
              </a>
            </div>

            {/* Pastor Marcos TikTok Embed */}
            <div className="bg-surface-container-lowest border border-gold-base/20 p-6 sm:p-7 flex flex-col gap-6 group hover:border-gold-base/40 transition-colors duration-300">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Video className="h-5 w-5 text-efsa-red" strokeWidth={1.5} />
                  <span className="font-headline text-sm font-bold text-gold-base uppercase">TIKTOK</span>
                </div>
                <ArrowUpRight className="h-4 w-4 text-gold-base/40" strokeWidth={1.5} />
              </div>
              <a href="https://www.tiktok.com/@pastor.marcos.mor" target="_blank" rel="noopener noreferrer" className="relative aspect-[9/16] h-48 mx-auto bg-surface-container border border-gold-base/20 flex flex-col justify-end overflow-hidden w-full">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                  style={{ backgroundImage: `url("/pastor_tiktok_cover.png")` }}
                />
                <div className="p-4 z-10 w-full bg-gradient-to-t from-black/80 to-transparent text-center">
                  <span className="font-headline text-xs font-bold text-white tracking-widest block mb-1">@pastor.marcos.mor</span>
                  <span className="font-sans text-[11px] text-zinc-300 uppercase">Ver videos</span>
                </div>
              </a>
            </div>

            {/* Radio Sidebar Box */}
            <div className="bg-surface-container-lowest border border-gold-base/20 p-6 sm:p-7 flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <Radio className="h-5 w-5 text-efsa-red" strokeWidth={1.5} />
                <span className="font-headline text-xs font-bold text-gold-base uppercase tracking-wider">
                  TIEMPOS FINALES
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-headline text-lg text-gold-highlight uppercase font-bold tracking-tight">
                  PÁGINA Y RADIO WEB
                </h3>
                <p className="font-body text-sm text-on-surface opacity-70 leading-relaxed">
                  Visite nuestro sitio web oficial o sintonice nuestra señal en vivo.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                <a
                  href="https://www.tiemposfinales.cl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 border-2 border-gold-base/40 text-gold-base font-headline text-xs font-bold uppercase tracking-widest px-4 py-3 hover:bg-gold-base hover:text-navy-midnight transition-colors text-center block"
                >
                  PÁGINA WEB
                </a>
                <a
                  href="/radio"
                  className="flex-1 bg-gold-base text-navy-midnight border-2 border-gold-base font-headline text-xs font-bold uppercase tracking-widest px-4 py-3 hover:bg-gold-highlight hover:border-gold-highlight transition-colors text-center block"
                >
                  ESCUCHAR
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

