'use client';

import { motion } from 'framer-motion';
import TextReveal from './TextReveal';

export default function Hero() {
  return (
    <section id="inicio" className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full">
      <div className="relative w-full h-[600px] border-2 border-gold-base flex items-center bg-surface-dark overflow-hidden group">
        
        {/* Background Image with Ken Burns effect */}
        <motion.div
          initial={{ scale: 1.1, opacity: 0.35 }}
          animate={{ scale: 1.0, opacity: 0.4 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute inset-0 z-0 mix-blend-luminosity bg-cover bg-center"
          style={{
            backgroundImage: `url("https://lh3.googleusercontent.com/aida/AP1WRLu_i-vX45c61t-fxUJX-3ye9w7Ef9VIF4HzKuhmUtUiJI4iOXU8QBQkZk62Fb9DFRv43O4R3Ekn1FbkR8-sRtqtumumplluIl6UGzbAoYsghQ96LNftF4PUsj4HNbenc38u-i5E1LWuvQmdRpvZDGmPBrwF-uYhyqbc3Ts0eoKoxJs0wfbcJRRW3-O8y3zdqrlmIQbPWnkKg-UR1_6KL3EF0Up49NR0-6svnZh-SlpKu0lAk0SaQhD2yy3j")`,
          }}
        />

        {/* Flat Overlays - Solid color, opacity, no soft gradients as requested */}
        <div className="absolute inset-0 bg-navy-midnight/70 z-10" />

        {/* Content */}
        <div className="relative z-20 p-8 md:p-16 max-w-2xl flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block bg-gold-base text-navy-midnight px-3 py-1 font-body text-xs font-bold uppercase self-start border border-gold-base"
          >
            Estudio Profético y Edificación
          </motion.div>

          <TextReveal
            as="h1"
            text="PLATAFORMA DIGITAL DEL MINISTERIO EL FIN SE ACERCA"
            className="font-headline text-4xl md:text-5xl lg:text-6xl text-gold-highlight uppercase leading-none tracking-tight font-extrabold"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-body text-base md:text-lg text-on-surface-variant max-w-xl opacity-90"
          >
            Descubre un espacio dedicado a la edificación espiritual y el estudio profundo de la Palabra. Aquí encontrarás recursos doctrinales, análisis profético y herramientas esenciales para fortalecer tu fe en los tiempos finales.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-wrap gap-4 mt-4"
          >
            <motion.a
              href="#radio"
              className="bg-navy-midnight border-2 border-gold-base text-off-white font-body text-sm font-bold uppercase px-8 py-4 hover:border-gold-highlight cursor-pointer text-center"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Escuchar Radio
            </motion.a>
            <motion.a
              href="#recursos-edificacion"
              className="bg-transparent border-2 border-gold-base text-gold-base font-body text-sm font-bold uppercase px-8 py-4 hover:bg-gold-base/10 cursor-pointer text-center"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Explorar Recursos
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
