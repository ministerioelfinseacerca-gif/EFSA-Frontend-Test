'use client';

import { motion } from 'framer-motion';
import { Play, Tv, Users, FileText, Instagram, Image, Video, Smartphone, Radio } from 'lucide-react';
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
        {/* LEFT COLUMN: YouTube Live & Facebook Feed */}
        <FadeInCascade className="lg:col-span-2 flex flex-col gap-6">
          {/* YouTube Video card */}
          <FadeInItem className="relative aspect-video bg-surface-dark border-2 border-gold-base flex flex-col items-center justify-center group overflow-hidden cursor-pointer">
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-error px-3 py-1">
              <span className="w-2 h-2 bg-off-white rounded-full animate-ping"></span>
              <span className="font-body text-xs text-off-white font-bold uppercase">LIVE</span>
            </div>
            <motion.div
              className="absolute inset-0 opacity-20 bg-cover bg-center"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida/AP1WRLu_i-vX45c61t-fxUJX-3ye9w7Ef9VIF4HzKuhmUtUiJI4iOXU8QBQkZk62Fb9DFRv43O4R3Ekn1FbkR8-sRtqtumumplluIl6UGzbAoYsghQ96LNftF4PUsj4HNbenc38u-i5E1LWuvQmdRpvZDGmPBrwF-uYhyqbc3Ts0eoKoxJs0wfbcJRRW3-O8y3zdqrlmIQbPWnkKg-UR1_6KL3EF0Up49NR0-6svnZh-SlpKu0lAk0SaQhD2yy3j")`,
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
            <Play className="h-16 w-16 text-error z-10 fill-current opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent z-10">
              <div className="flex items-center gap-3">
                <Tv className="h-6 w-6 text-gold-base" />
                <span className="font-headline text-lg text-off-white uppercase font-bold tracking-tight">
                  TRANSMISIÓN EN VIVO - CANAL OFICIAL
                </span>
              </div>
            </div>
          </FadeInItem>

          {/* Facebook Wrapper card */}
          <FadeInItem className="bg-surface-container-high border-2 border-gold-base p-4 flex flex-col gap-4 w-full">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-gold-base" />
                <span className="font-body text-sm font-bold text-off-white uppercase">FACEBOOK</span>
              </div>
              <motion.button
                className="border border-gold-base text-gold-base px-3 py-1 font-body text-xs font-bold uppercase hover:bg-gold-base hover:text-navy-midnight transition-colors cursor-pointer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                FOLLOW
              </motion.button>
            </div>
            <div className="aspect-video bg-surface-dark border border-gold-base/30 flex items-center justify-center">
              <FileText className="h-12 w-12 text-gold-base opacity-20" />
            </div>
          </FadeInItem>
        </FadeInCascade>

        {/* RIGHT COLUMN: Social Feed Sidebar */}
        <FadeInCascade className="flex flex-col gap-6">
          {/* Instagram */}
          <FadeInItem className="bg-surface-container-high border-2 border-gold-base p-4 flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Instagram className="h-5 w-5 text-gold-base" />
                <span className="font-body text-sm font-bold text-off-white uppercase">INSTAGRAM</span>
              </div>
              <motion.button
                className="border border-gold-base text-gold-base px-3 py-1 font-body text-xs font-bold uppercase hover:bg-gold-base hover:text-navy-midnight transition-colors cursor-pointer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                FOLLOW
              </motion.button>
            </div>
            <div className="aspect-square bg-surface-dark border border-gold-base/30 flex items-center justify-center">
              <Image className="h-12 w-12 text-gold-base opacity-20" />
            </div>
          </FadeInItem>

          {/* TikTok */}
          <FadeInItem className="bg-surface-container-high border-2 border-gold-base p-4 flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Video className="h-5 w-5 text-gold-base" />
                <span className="font-body text-sm font-bold text-off-white uppercase">TIKTOK</span>
              </div>
              <motion.button
                className="border border-gold-base text-gold-base px-3 py-1 font-body text-xs font-bold uppercase hover:bg-gold-base hover:text-navy-midnight transition-colors cursor-pointer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                FOLLOW
              </motion.button>
            </div>
            <div className="aspect-[9/16] h-48 mx-auto bg-surface-dark border border-gold-base/30 flex items-center justify-center">
              <Smartphone className="h-12 w-12 text-gold-base opacity-20" />
            </div>
          </FadeInItem>

          {/* Radio Sidebar Box */}
          <FadeInItem className="bg-surface-container-high border-2 border-gold-base p-6 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Radio className="h-5 w-5 text-gold-base" />
              <span className="font-body text-xs font-bold text-off-white uppercase tracking-wider">
                RADIO TIEMPOS FINALES
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-headline text-lg text-gold-highlight uppercase font-bold tracking-tight">
                RADIO EN VIVO
              </h3>
              <p className="font-body text-sm text-on-surface-variant opacity-70 leading-relaxed">
                Sintonice nuestra señal 24/7 con programación que edifica su alma.
              </p>
            </div>
            <motion.a
              href="/radio"
              className="mt-2 bg-gold-base text-navy-midnight font-body text-sm font-bold uppercase px-6 py-3 hover:bg-gold-highlight transition-colors w-full text-center cursor-pointer block"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              ESCUCHAR AHORA
            </motion.a>
          </FadeInItem>
        </FadeInCascade>
      </div>
    </section>
  );
}
