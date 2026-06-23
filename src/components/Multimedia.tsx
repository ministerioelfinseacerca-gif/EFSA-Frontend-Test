'use client';

import { motion } from 'framer-motion';
import { Play, Tv, Users, FileText, Instagram, Image, Video, Smartphone, Radio, Youtube } from 'lucide-react';
import FadeInCascade, { FadeInItem } from './FadeInCascade';
import TextReveal from './TextReveal';

export default function Multimedia() {
  return (
    <section
      id="multimedia"
      className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full flex flex-col gap-8 scroll-mt-24"
    >
      {/* Title */}
      <div className="border-b-2 border-gold-base pb-2">
        <h2 className="font-headline text-2xl text-gold-base uppercase tracking-tighter font-semibold">
          CENTRO MULTIMEDIA Y REDES SOCIALES
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
        {/* LEFT COLUMN */}
        <FadeInCascade className="lg:col-span-2 flex flex-col gap-6">
          {/* YouTube Video card (Main Live) */}
          <FadeInItem className="relative aspect-video bg-surface-dark border-2 border-gold-base flex flex-col items-center justify-center group overflow-hidden cursor-pointer">
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-error px-3 py-1">
              <span className="w-2 h-2 bg-off-white rounded-full animate-ping"></span>
              <span className="font-body text-xs text-off-white font-bold uppercase">LIVE</span>
            </div>
            <motion.a
              href="https://www.youtube.com/@tiemposfinaleshd4648/featured"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 opacity-20 bg-cover bg-center"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida/AP1WRLu_i-vX45c61t-fxUJX-3ye9w7Ef9VIF4HzKuhmUtUiJI4iOXU8QBQkZk62Fb9DFRv43O4R3Ekn1FbkR8-sRtqtumumplluIl6UGzbAoYsghQ96LNftF4PUsj4HNbenc38u-i5E1LWuvQmdRpvZDGmPBrwF-uYhyqbc3Ts0eoKoxJs0wfbcJRRW3-O8y3zdqrlmIQbPWnkKg-UR1_6KL3EF0Up49NR0-6svnZh-SlpKu0lAk0SaQhD2yy3j")`,
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
            <a href="https://www.youtube.com/@tiemposfinaleshd4648/featured" target="_blank" rel="noopener noreferrer" className="z-10">
              <Play className="h-16 w-16 text-error fill-current opacity-80 hover:opacity-100 hover:scale-110 transition-all" />
            </a>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none">
              <div className="flex items-center gap-3">
                <Tv className="h-6 w-6 text-gold-base" />
                <span className="font-headline text-lg text-off-white uppercase font-bold tracking-tight">
                  TRANSMISIÓN EN VIVO - RADIO TIEMPOS FINALES
                </span>
              </div>
            </div>
          </FadeInItem>

          {/* Two column grid for Facebook & Coro Israel */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {/* Pastor Marcos Morales Facebook */}
            <FadeInItem className="bg-surface-container-high border-2 border-gold-base p-4 flex flex-col justify-between gap-4 w-full h-full">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-gold-base" />
                  <span className="font-body text-xs font-bold text-off-white uppercase">FACEBOOK - PASTOR MARCOS</span>
                </div>
                <motion.a
                  href="https://www.facebook.com/people/Pastor-Marcos-Morales/61578795157619/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gold-base text-gold-base px-3 py-1 font-body text-[10px] font-bold uppercase hover:bg-gold-base hover:text-navy-midnight transition-colors cursor-pointer block text-center"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  VISITAR PERFIL
                </motion.a>
              </div>
              <a
                href="https://www.facebook.com/people/Pastor-Marcos-Morales/61578795157619/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-h-[160px] bg-surface-dark border border-gold-base/30 flex flex-col items-center justify-center p-6 text-center gap-3 hover:bg-surface-container transition-colors"
              >
                <FileText className="h-10 w-10 text-gold-base opacity-45" />
                <div>
                  <h4 className="font-headline text-xs font-bold text-gold-highlight uppercase tracking-wider">
                    PERFIL OFICIAL
                  </h4>
                  <p className="font-body text-[11px] text-on-surface opacity-70 mt-1 leading-relaxed">
                    Siga las publicaciones, prédicas y reflexiones del Pastor Marcos Morales.
                  </p>
                </div>
              </a>
            </FadeInItem>

            {/* Coro Israel YouTube Card */}
            <FadeInItem className="bg-surface-container-high border-2 border-gold-base p-4 flex flex-col justify-between gap-4 w-full h-full">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Youtube className="h-5 w-5 text-gold-base" />
                  <span className="font-body text-xs font-bold text-off-white uppercase">CORO ISRAEL OFICIAL</span>
                </div>
                <motion.a
                  href="https://www.youtube.com/@coroisraeloficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gold-base text-gold-base px-3 py-1 font-body text-[10px] font-bold uppercase hover:bg-gold-base hover:text-navy-midnight transition-colors cursor-pointer block"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  VER CANAL
                </motion.a>
              </div>
              
              <a
                href="https://www.youtube.com/@coroisraeloficial"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 relative min-h-[160px] bg-surface-dark border border-gold-base/30 flex flex-col justify-end group overflow-hidden cursor-pointer"
              >
                <motion.div
                  className="absolute inset-0 opacity-40 bg-cover bg-center"
                  style={{
                    backgroundImage: `url("/coro_israel_thumbnail.png")`,
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex items-center justify-center">
                  <Play className="h-10 w-10 text-error fill-current opacity-85 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                </div>
                
                <div className="p-4 bg-gradient-to-t from-black to-transparent z-10 w-full">
                  <h4 className="font-headline text-xs font-bold text-off-white uppercase tracking-tight">
                    CORO ISRAEL
                  </h4>
                  <p className="font-body text-[10px] text-gold-highlight tracking-widest uppercase mt-0.5">
                    @coroisraeloficial
                  </p>
                </div>
              </a>
            </FadeInItem>
          </div>
        </FadeInCascade>

        {/* RIGHT COLUMN: Social Feed Sidebar */}
        <FadeInCascade className="flex flex-col gap-6">
          {/* Coro Israel Instagram / Facebook */}
          <FadeInItem className="bg-surface-container-high border-2 border-gold-base p-4 flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Instagram className="h-5 w-5 text-gold-base" />
                <span className="font-body text-xs font-bold text-off-white uppercase">CORO ISRAEL</span>
              </div>
              <motion.a
                href="https://www.instagram.com/coroisrael/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gold-base text-gold-base px-3 py-1 font-body text-[10px] font-bold uppercase hover:bg-gold-base hover:text-navy-midnight transition-colors cursor-pointer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                INSTAGRAM
              </motion.a>
            </div>
            <div className="aspect-square bg-surface-dark border border-gold-base/30 flex flex-col items-center justify-center p-4 text-center">
              <Image className="h-12 w-12 text-gold-base opacity-20 mb-2" />
              <p className="font-body text-xs text-on-surface opacity-70">Sigue la galería de fotos y reels de Coro Israel</p>
              <a href="https://www.facebook.com/people/Coro-Israel-Chile/100028975343072/" target="_blank" rel="noopener noreferrer" className="text-gold-highlight text-xs font-bold mt-4 underline hover:text-white transition-colors">Ver también en Facebook</a>
            </div>
          </FadeInItem>

          {/* Pastor Marcos TikTok Embed */}
          <FadeInItem className="bg-surface-container-high border-2 border-gold-base p-4 flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Video className="h-5 w-5 text-gold-base" />
                <span className="font-body text-xs font-bold text-off-white uppercase">TIKTOK PASTOR MARCOS</span>
              </div>
              <motion.a
                href="https://www.tiktok.com/@pastor.marcos.mor"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gold-base text-gold-base px-3 py-1 font-body text-[10px] font-bold uppercase hover:bg-gold-base hover:text-navy-midnight transition-colors cursor-pointer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                FOLLOW
              </motion.a>
            </div>
            {/* Simulated feed UI / Link to TikTok */}
            <a href="https://www.tiktok.com/@pastor.marcos.mor" target="_blank" rel="noopener noreferrer" className="aspect-[9/16] h-48 mx-auto bg-surface-dark border border-gold-base/30 flex flex-col items-center justify-center group w-full hover:bg-surface-container transition-colors">
              <Smartphone className="h-12 w-12 text-gold-base opacity-40 group-hover:scale-110 transition-transform mb-3" />
              <span className="font-headline text-xs font-bold text-gold-highlight tracking-widest">@pastor.marcos.mor</span>
              <span className="font-body text-[10px] text-off-white opacity-60 mt-1">Ver videos y reflexiones</span>
            </a>
          </FadeInItem>

          {/* Radio Sidebar Box */}
          <FadeInItem className="bg-surface-container-high border-2 border-gold-base p-6 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Radio className="h-5 w-5 text-gold-base" />
              <span className="font-body text-xs font-bold text-off-white uppercase tracking-wider">
                TIEMPOS FINALES
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-headline text-lg text-gold-highlight uppercase font-bold tracking-tight">
                PÁGINA Y RADIO WEB
              </h3>
              <p className="font-body text-sm text-on-surface-variant opacity-70 leading-relaxed">
                Visite nuestro sitio web oficial o sintonice nuestra señal en vivo.
              </p>
            </div>
            <div className="flex gap-2 mt-2">
              <motion.a
                href="https://www.tiemposfinales.cl/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-transparent border-2 border-gold-base text-gold-base font-body text-[11px] font-bold uppercase px-2 py-3 hover:bg-gold-base hover:text-navy-midnight transition-colors text-center cursor-pointer block"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                PÁGINA WEB
              </motion.a>
              <motion.a
                href="/radio"
                className="flex-1 bg-gold-base border-2 border-gold-base text-navy-midnight font-body text-[11px] font-bold uppercase px-2 py-3 hover:bg-gold-highlight transition-colors text-center cursor-pointer block"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                ESCUCHAR RADIO
              </motion.a>
            </div>
          </FadeInItem>
        </FadeInCascade>
      </div>
    </section>
  );
}
