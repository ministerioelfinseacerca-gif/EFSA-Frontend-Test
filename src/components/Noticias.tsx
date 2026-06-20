'use client';

import { motion } from 'framer-motion';
import FadeInCascade, { FadeInItem } from './FadeInCascade';
import TextReveal from './TextReveal';

export default function Noticias() {
  return (
    <section
      id="noticias"
      className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full flex flex-col gap-8 scroll-mt-24"
    >
      {/* Section Title */}
      <div className="border-b-2 border-gold-base pb-2">
        <h2 className="font-headline text-2xl text-gold-base uppercase tracking-tighter font-semibold">
          NOTICIAS DESTACADAS DEL MES
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {/* Main Feature Story (Left 2/3) */}
        <FadeInCascade className="md:col-span-2 flex flex-col gap-6 bg-surface-container-low p-6 border-2 border-gold-base/30">
          <FadeInItem className="relative aspect-video bg-surface-container-high border-2 border-gold-base flex items-center justify-center group cursor-pointer overflow-hidden">
            <motion.div
              className="absolute inset-0 opacity-40 bg-cover bg-center"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida/AP1WRLu_i-vX45c61t-fxUJX-3ye9w7Ef9VIF4HzKuhmUtUiJI4iOXU8QBQkZk62Fb9DFRv43O4R3Ekn1FbkR8-sRtqtumumplluIl6UGzbAoYsghQ96LNftF4PUsj4HNbenc38u-i5E1LWuvQmdRpvZDGmPBrwF-uYhyqbc3Ts0eoKoxJs0wfbcJRRW3-O8y3zdqrlmIQbPWnkKg-UR1_6KL3EF0Up49NR0-6svnZh-SlpKu0lAk0SaQhD2yy3j")`,
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
            <motion.span
              className="material-symbols-outlined text-6xl text-gold-base opacity-60 z-10"
              whileHover={{ scale: 1.1, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              play_circle
            </motion.span>
          </FadeInItem>

          {/* Content Info */}
          <FadeInItem className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="text-error font-bold font-body text-sm">1 ABR</span>
              <span className="text-gold-base opacity-40">•</span>
              <span className="text-gold-base font-body text-xs uppercase tracking-widest font-semibold">
                ACTUALIDAD
              </span>
            </div>
            
            <TextReveal
              as="h3"
              text="El caso Noelia Castillo: Reflexión bíblica frente a la eutanasia y la soberanía de Dios"
              className="font-headline text-2xl md:text-3xl text-off-white uppercase leading-tight font-bold"
            />
            
            <p className="font-body text-sm md:text-base text-on-surface-variant opacity-80 leading-relaxed">
              Un análisis profundo sobre el valor de la vida desde la perspectiva de las Escrituras. Exploramos la verdad bíblica ante los dilemas éticos contemporáneos y el consuelo de la fe en momentos de crisis.
            </p>
            
            <motion.button
              className="self-start border-2 bg-transparent text-off-white font-body text-xs font-bold uppercase px-8 py-3 hover:border-gold-base transition-colors border-gold-base cursor-pointer"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              LEER ARTÍCULO COMPLETO
            </motion.button>
          </FadeInItem>
        </FadeInCascade>

        {/* Sidebar (Right 1/3) */}
        <FadeInCascade className="flex flex-col gap-8 border-l-2 border-gold-base/10 md:pl-8">
          {/* Sidebar Item 1 */}
          <FadeInItem className="flex flex-col gap-3 group">
            <div className="flex items-center gap-2">
              <span className="text-error font-bold font-body text-xs">1 MAR</span>
              <span className="bg-surface-container-high text-gold-base px-2 py-0.5 font-body text-[10px] font-bold uppercase">
                INTERNACIONAL
              </span>
            </div>
            <motion.h4 
              className="font-headline text-lg text-off-white uppercase leading-tight font-bold group-hover:text-gold-base transition-colors"
              whileHover={{ x: 2 }}
            >
              Quién tiene el poder en Irán tras la muerte del ayatolá Alí Jamenei y cómo se elige a su sucesor
            </motion.h4>
            <p className="font-body text-xs text-on-surface-variant opacity-70 leading-relaxed">
              Implicaciones geopolíticas y proféticas de los recientes eventos en Medio Oriente.
            </p>
          </FadeInItem>

          <hr className="border-gold-base/10" />

          {/* Sidebar Item 2 */}
          <FadeInItem className="flex flex-col gap-3 group">
            <div className="flex items-center gap-2">
              <span className="text-error font-bold font-body text-xs">1 ENE</span>
              <span className="bg-surface-container-high text-gold-base px-2 py-0.5 font-body text-[10px] font-bold uppercase">
                LANZAMIENTO
              </span>
            </div>
            <motion.h4 
              className="font-headline text-lg text-off-white uppercase leading-tight font-bold group-hover:text-gold-base transition-colors"
              whileHover={{ x: 2 }}
            >
              NUESTRO LIBRO «LAS GRANDES MENTIRAS DEL CESACIONISMO»
            </motion.h4>
            <p className="font-body text-xs text-on-surface-variant opacity-70 leading-relaxed">
              Una defensa bíblica contundente de la vigencia de los dones espirituales en la iglesia de hoy.
            </p>
            <motion.a
              className="text-gold-base font-body text-xs font-bold uppercase flex items-center gap-2 hover:text-gold-highlight transition-colors mt-2"
              href="#adquirir"
              whileHover={{ x: 5 }}
            >
              ADQUIRIR <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </motion.a>
          </FadeInItem>
        </FadeInCascade>
      </div>
    </section>
  );
}
