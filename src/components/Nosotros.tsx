'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import FadeInCascade, { FadeInItem } from './FadeInCascade';
import TextReveal from './TextReveal';

export default function Nosotros() {
  return (
    <section
      id="nosotros"
      className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full flex flex-col gap-8 scroll-mt-24"
    >
      {/* Title */}
      <div className="border-b-2 border-gold-base pb-2">
        <h2 className="font-headline text-sm font-bold text-gold-base uppercase tracking-widest">
          NOSOTROS
        </h2>
      </div>

      <FadeInCascade className="grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
        {/* Left Aspect Video */}
        <FadeInItem className="relative border-2 border-gold-base aspect-video overflow-hidden group">
          <motion.img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxGMArN4FTBJtjMwO-AI7NxHWI_K1qPkFZsLEiHGnSghq0OaDpOX4k1f5u99_HbwoITXmn2PVird7TvO0XnRAX1PWa7ywIq7WExm-aXxBSa_5fP9MfFUCwqbc0fjtB1Ig9EhbBMceAgNPqSS9KgJoU5zDdNKk52o2bNyl-u8366F1ZQMMXet34lNIdlGvHxW-coQeN5ikzFJ96hA1R20sNK5YrnQloy3iwsgNyfOFDzBsYH24wbp2HBa6hXp1gvxhxTZBpp5Fve_iA"
            alt="Ministerio Evangelístico Pentecostal"
            className="w-full h-full object-cover filter brightness-90 group-hover:brightness-100 transition-all duration-500"
            whileHover={{ scale: 1.05 }}
          />
        </FadeInItem>

        {/* Right Info */}
        <FadeInItem className="flex flex-col gap-6">
          <TextReveal
            as="h3"
            text="DESDE 1995"
            className="font-headline text-5xl text-gold-base uppercase tracking-tighter font-bold"
          />
          <p className="font-body text-lg text-off-white opacity-80 leading-relaxed">
            Centralizando recursos bíblicos con urgencia y claridad para preparar a la iglesia.
          </p>
          <motion.button
            className="self-start border-2 border-gold-base text-gold-base font-body text-sm font-bold uppercase px-8 py-3 hover:bg-gold-base hover:text-navy-midnight transition-colors cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            UBICACIONES
          </motion.button>
        </FadeInItem>
      </FadeInCascade>

      {/* Pastor Profile Card */}
      <FadeInCascade stagger={0.2} delay={0.1}>
        <FadeInItem className="bg-surface-container-high border-2 border-gold-base p-8 flex flex-col md:flex-row items-center gap-8">
          {/* Avatar Container */}
          <div className="w-24 h-24 bg-gold-base border border-gold-base flex items-center justify-center shrink-0 overflow-hidden">
            <motion.img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeZ3eqsZdep37GuykFkKXy4dIPzcXKxe0Zgiqmz4a6Ps_7Cw2RbnCWjGuzLmVrA2bgJLbircQ_hg9pRvA126aBOElfWS-qS5uG8xR99Kz6U1yuVBCj-wjIYF3uvg8KSib7gc-ACr-yRT6gGJe5sZjl__c9JM3NP3KzrSlO-1bhYC3I5EqPMy9SWcErtUmpKQrzfK5R8r67yQYmU4SmnaVaa9ffJMFNl47Wv3NMS4R9myT-XJnzd8SUP_EtNVJtrHxrwfps1fgT6CbT"
              alt="Pastor Marcos Morales"
              className="w-full h-full object-cover filter contrast-110"
              whileHover={{ scale: 1.1 }}
            />
          </div>

          {/* Info Details */}
          <div className="flex flex-col gap-4 w-full">
            <h3 className="font-headline text-2xl text-off-white uppercase font-bold tracking-tight">
              PASTOR MARCOS MORALES
            </h3>
            <p className="font-body text-sm text-off-white opacity-70 leading-relaxed">
              Dedicado a la predicación del evangelio pentecostal y la defensa de la fe desde la fundación de este ministerio.
            </p>
            <div className="flex flex-wrap gap-8">
              <motion.a
                className="text-gold-base font-body text-xs font-bold uppercase flex items-center gap-2 hover:text-gold-highlight transition-colors"
                href="#biografia"
                whileHover={{ x: 3 }}
              >
                LEER BIOGRAFÍA{' '}
                <ArrowRight className="h-4 w-4" />
              </motion.a>
              <motion.a
                className="text-gold-base font-body text-xs font-bold uppercase flex items-center gap-2 hover:text-gold-highlight transition-colors"
                href="#agenda"
                whileHover={{ x: 3 }}
              >
                AGENDA{' '}
                <Calendar className="h-4 w-4" />
              </motion.a>
            </div>
          </div>
        </FadeInItem>
      </FadeInCascade>
    </section>
  );
}
