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
          <ScrollReveal animation="fade" staggerChildren={true} stagger={0.08} className="lg:col-span-2 flex flex-col gap-4 sm:gap-5 h-full">
            {/* YouTube Video card (Main Live) */}
            <a
              href="https://www.youtube.com/@tiemposfinaleshd4648/streams"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full h-full min-h-[300px] md:min-h-[400px] bg-surface-container-lowest border border-gold-base/20 flex flex-col items-center justify-center group overflow-hidden"
            >
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-efsa-red px-3 py-1">
                <span className="w-2 h-2 rounded-full bg-white live-pulse" />
                <span className="font-headline text-xs text-white font-bold uppercase tracking-widest">LIVE</span>
              </div>
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                style={{ backgroundImage: `url("/pastor-predicando.jpeg")` }}
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


          </ScrollReveal>

          {/* RIGHT COLUMN */}
          <ScrollReveal animation="fade" staggerChildren={true} stagger={0.1} className="flex flex-col gap-4 sm:gap-5 h-full">
            {/* Ecosistema Social Sidebar Box */}
            <div className="flex-1 bg-surface-container-lowest border border-gold-base/20 p-6 sm:p-7 flex flex-col gap-6 justify-center">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-efsa-red" strokeWidth={1.5} />
                <span className="font-headline text-xs font-bold text-gold-base uppercase tracking-wider">
                  REDES SOCIALES
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <a href="https://www.facebook.com/people/Pastor-Marcos-Morales/61578795157619/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-on-surface opacity-80 hover:opacity-100 hover:text-gold-base transition-colors group">
                  <span className="w-1.5 h-1.5 bg-gold-base/50 group-hover:bg-gold-base rounded-full transition-colors" />
                  <span className="font-body text-sm font-medium">Pastor Marcos (Facebook)</span>
                </a>
                <a href="https://www.youtube.com/@coroisraeloficial" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-on-surface opacity-80 hover:opacity-100 hover:text-gold-base transition-colors group">
                  <span className="w-1.5 h-1.5 bg-gold-base/50 group-hover:bg-gold-base rounded-full transition-colors" />
                  <span className="font-body text-sm font-medium">Coro Israel (YouTube)</span>
                </a>
                <a href="https://www.instagram.com/coroisrael/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-on-surface opacity-80 hover:opacity-100 hover:text-gold-base transition-colors group">
                  <span className="w-1.5 h-1.5 bg-gold-base/50 group-hover:bg-gold-base rounded-full transition-colors" />
                  <span className="font-body text-sm font-medium">Coro Israel (Instagram)</span>
                </a>
                <a href="https://www.tiktok.com/@pastor.marcos.mor" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-on-surface opacity-80 hover:opacity-100 hover:text-gold-base transition-colors group">
                  <span className="w-1.5 h-1.5 bg-gold-base/50 group-hover:bg-gold-base rounded-full transition-colors" />
                  <span className="font-body text-sm font-medium">Pastor Marcos (TikTok)</span>
                </a>
              </div>
            </div>

            {/* Radio Sidebar Box */}
            <div className="flex-1 bg-surface-container-lowest border border-gold-base/20 p-6 sm:p-7 flex flex-col gap-6 justify-center">
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
                  className="flex-1 border-2 border-gold-base/40 text-gold-base font-black text-[10px] sm:text-xs uppercase tracking-widest px-4 py-2.5 rounded-full hover:bg-gold-base hover:text-navy-midnight transition-colors text-center flex items-center justify-center"
                >
                  PÁGINA WEB
                </a>
                <a
                  href="/radio"
                  className="flex-1 bg-gold-base text-navy-midnight border-2 border-gold-base font-black text-[10px] sm:text-xs uppercase tracking-widest px-4 py-2.5 rounded-full hover:bg-gold-highlight hover:border-gold-highlight transition-colors text-center flex items-center justify-center"
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

