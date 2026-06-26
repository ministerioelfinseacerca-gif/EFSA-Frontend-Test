'use client';

import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import FadeInCascade, { FadeInItem } from './FadeInCascade';
import TextReveal from './TextReveal';
import ScrollReveal from './scroll-reveal';

export default function Noticias() {
  return (
    <section
      id="noticias"
      className="w-full py-20 sm:py-28 px-6 sm:px-8 md:px-12 lg:px-16 bg-editorial-beige border-y border-gold-base/20 scroll-mt-24 font-[family-name:var(--font-montserrat)]"
    >
      <div className="max-w-7xl mx-auto w-full">
        <ScrollReveal animation="left" className="w-full flex flex-col gap-8">
          {/* Section Title */}
          <div className="border-b border-navy-midnight/10 pb-6 mb-2">
            <h2 className="font-black text-5xl md:text-6xl lg:text-[4.5rem] text-navy-midnight leading-[1.05] tracking-tighter mb-4">
              Actualidad <br className="hidden md:block" />
              <span className="font-light italic text-sky-800 tracking-tight">ministerial.</span>
            </h2>
            <p className="font-light text-base md:text-lg text-navy-midnight/70 max-w-2xl">
              Mantente informado sobre las últimas noticias, reflexiones y acontecimientos relevantes en nuestro ministerio y en el panorama cristiano global.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Main Feature Story (Left 2/3) */}
            <FadeInCascade className="md:col-span-2 flex flex-col gap-6 bg-white p-6 border border-navy-midnight/10 shadow-sm">
              <FadeInItem className="relative aspect-video bg-navy-midnight/5 border border-gold-base/50 flex items-center justify-center group cursor-pointer overflow-hidden">
                <motion.div
                  className="absolute inset-0 opacity-40 bg-cover bg-center"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida/AP1WRLu_i-vX45c61t-fxUJX-3ye9w7Ef9VIF4HzKuhmUtUiJI4iOXU8QBQkZk62Fb9DFRv43O4R3Ekn1FbkR8-sRtqtumumplluIl6UGzbAoYsghQ96LNftF4PUsj4HNbenc38u-i5E1LWuvQmdRpvZDGmPBrwF-uYhyqbc3Ts0eoKoxJs0wfbcJRRW3-O8y3zdqrlmIQbPWnkKg-UR1_6KL3EF0Up49NR0-6svnZh-SlpKu0lAk0SaQhD2yy3j")`,
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
                <Play className="h-14 w-14 text-gold-base opacity-75 group-hover:opacity-100 transition-all duration-200 z-10 fill-current" />
              </FadeInItem>

              {/* Content Info */}
              <FadeInItem className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-sky-800 font-black text-sm">1 ABR</span>
                  <span className="text-navy-midnight/30">•</span>
                  <span className="text-navy-midnight/60 font-black text-xs uppercase tracking-widest">
                    ACTUALIDAD
                  </span>
                </div>
                
                <TextReveal
                  as="h3"
                  text="El caso Noelia Castillo: Reflexión bíblica frente a la eutanasia y la soberanía de Dios"
                  className="font-black text-2xl md:text-3xl text-navy-midnight uppercase leading-tight"
                />
                
                <p className="font-light text-sm md:text-base text-navy-midnight/80 leading-relaxed">
                  Un análisis profundo sobre el valor de la vida desde la perspectiva de las Escrituras. Exploramos la verdad bíblica ante los dilemas éticos contemporáneos y el consuelo de la fe en momentos de crisis.
                </p>
                
                <motion.button
                  className="group relative inline-flex items-center justify-center gap-2 border border-transparent bg-transparent text-navy-midnight font-black text-xs uppercase px-6 py-3 rounded-full hover:border-navy-midnight/20 transition-all duration-500 cursor-pointer"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute inset-0 rounded-full bg-navy-midnight/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-0" />
                  <span className="relative z-10">LEER ARTÍCULO COMPLETO</span>
                </motion.button>
              </FadeInItem>
            </FadeInCascade>

            {/* Sidebar (Right 1/3) */}
            <FadeInCascade className="flex flex-col gap-8 border-l-2 border-navy-midnight/10 md:pl-8">
              {/* Sidebar Item 1 */}
              <FadeInItem className="flex flex-col gap-3 group">
                <div className="flex items-center gap-2">
                  <span className="text-sky-800 font-black text-xs">1 MAR</span>
                  <span className="bg-navy-midnight/5 text-navy-midnight/70 px-2 py-0.5 font-black text-[10px] uppercase">
                    INTERNACIONAL
                  </span>
                </div>
                <motion.h4 
                  className="font-black text-lg text-navy-midnight uppercase leading-tight group-hover:text-sky-800 transition-colors"
                  whileHover={{ x: 2 }}
                >
                  Quién tiene el poder en Irán tras la muerte del ayatolá Alí Jamenei y cómo se elige a su sucesor
                </motion.h4>
                <p className="font-light text-xs text-navy-midnight/70 leading-relaxed">
                  Implicaciones geopolíticas y proféticas de los recientes eventos en Medio Oriente.
                </p>
              </FadeInItem>

              <hr className="border-navy-midnight/10" />

              {/* Sidebar Item 2 */}
              <FadeInItem className="flex flex-col gap-3 group">
                <div className="flex items-center gap-2">
                  <span className="text-sky-800 font-black text-xs">1 ENE</span>
                  <span className="bg-navy-midnight/5 text-navy-midnight/70 px-2 py-0.5 font-black text-[10px] uppercase">
                    LANZAMIENTO
                  </span>
                </div>
                <motion.h4 
                  className="font-black text-lg text-navy-midnight uppercase leading-tight group-hover:text-sky-800 transition-colors"
                  whileHover={{ x: 2 }}
                >
                  NUESTRO LIBRO «LAS GRANDES MENTIRAS DEL CESACIONISMO»
                </motion.h4>
                <p className="font-light text-xs text-navy-midnight/70 leading-relaxed">
                  Una defensa bíblica contundente de la vigencia de los dones espirituales en la iglesia de hoy.
                </p>
                <motion.a
                  className="text-gold-base font-black text-xs uppercase flex items-center gap-2 hover:text-gold-base/80 transition-colors mt-2"
                  href="#adquirir"
                  whileHover={{ x: 5 }}
                >
                  ADQUIRIR <ArrowRight className="h-4 w-4" />
                </motion.a>
              </FadeInItem>
            </FadeInCascade>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
