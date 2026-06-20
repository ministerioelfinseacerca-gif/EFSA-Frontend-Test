'use client';

import { motion } from 'framer-motion';
import { Tablet, BookOpen, ShoppingCart, Book, Store } from 'lucide-react';
import FadeInCascade, { FadeInItem } from './FadeInCascade';
import TextReveal from './TextReveal';

export default function Recursos() {
  return (
    <section
      id="recursos-edificacion"
      className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full flex flex-col gap-8 scroll-mt-24 mb-12"
    >
      {/* Title */}
      <div className="border-b-2 border-gold-base pb-2">
        <h2 className="font-headline text-2xl text-gold-base uppercase tracking-tighter font-semibold">
          RECURSOS PARA LA EDIFICACIÓN
        </h2>
      </div>

      <FadeInCascade className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        {/* Card 1: Material de Estudio */}
        <FadeInItem>
          <motion.div
            className="bg-surface-container-low border-2 border-gold-base p-8 md:p-12 flex flex-col gap-8 relative group hover:bg-surface-container-high transition-colors duration-300 h-full"
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <div className="flex justify-between items-start">
              <div className="w-14 h-14 bg-navy-midnight border border-gold-base flex items-center justify-center">
                <Tablet className="h-7 w-7 text-gold-base" />
              </div>
              <BookOpen className="h-16 w-16 text-gold-base opacity-10 absolute top-8 right-8 pointer-events-none select-none" />
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-headline text-2xl text-gold-highlight uppercase tracking-tight font-bold">
                MATERIAL DE ESTUDIO
              </h3>
              <p className="font-body text-sm md:text-base text-off-white opacity-80 leading-relaxed">
                Acceso inmediato a Reflexiones, Bosquejos para predicadores y Librillos teológicos.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-auto pt-4">
              <motion.button
                className="bg-gold-base text-navy-midnight font-body text-xs font-bold uppercase px-8 py-3 hover:bg-gold-highlight transition-colors cursor-pointer"
                whileTap={{ scale: 0.95 }}
              >
                REFLEXIONES
              </motion.button>
              <motion.button
                className="bg-transparent border-2 border-gold-base text-gold-base font-body text-xs font-bold uppercase px-8 py-3 hover:bg-gold-base/10 transition-colors cursor-pointer"
                whileTap={{ scale: 0.95 }}
              >
                BOSQUEJOS
              </motion.button>
            </div>
          </motion.div>
        </FadeInItem>

        {/* Card 2: Librería Israel */}
        <FadeInItem>
          <motion.div
            className="bg-surface-container-low border-2 border-gold-base p-8 md:p-12 flex flex-col gap-8 relative group hover:bg-surface-container-high transition-colors duration-300 h-full"
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <div className="flex justify-between items-start">
              <div className="w-14 h-14 bg-navy-midnight border border-gold-base flex items-center justify-center">
                <ShoppingCart className="h-7 w-7 text-gold-base" />
              </div>
              <Book className="h-16 w-16 text-gold-base opacity-10 absolute top-8 right-8 rotate-12 pointer-events-none select-none" />
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-headline text-2xl text-gold-highlight uppercase tracking-tight font-bold">
                LIBRERÍA ISRAEL
              </h3>
              <p className="font-body text-sm md:text-base text-off-white opacity-80 leading-relaxed">
                Adquiere biblias de estudio, literatura escogida y material devocional seleccionado con rigor doctrinal para tu crecimiento.
              </p>
            </div>

            <div className="mt-auto pt-4">
              <motion.button
                className="w-full md:w-auto bg-transparent border-2 border-gold-base text-gold-base font-body text-xs font-bold uppercase px-8 py-3 flex items-center justify-center gap-3 hover:bg-gold-base hover:text-navy-midnight transition-colors cursor-pointer"
                whileTap={{ scale: 0.95 }}
              >
                VISITAR TIENDA <Store className="h-4 w-4" />
              </motion.button>
            </div>
          </motion.div>
        </FadeInItem>
      </FadeInCascade>
    </section>
  );
}
