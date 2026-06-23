'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Calendar, MapPin, ExternalLink } from 'lucide-react';
import FadeInCascade, { FadeInItem } from './FadeInCascade';
import TextReveal from './TextReveal';

export default function Nosotros() {
  const [showMap, setShowMap] = useState(false);

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

      <FadeInCascade className="grid grid-cols-1 md:grid-cols-2 gap-gutter items-start">
        {/* Left Aspect Video */}
        <FadeInItem className="relative border-2 border-gold-base aspect-video overflow-hidden group w-full">
          <motion.img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxGMArN4FTBJtjMwO-AI7NxHWI_K1qPkFZsLEiHGnSghq0OaDpOX4k1f5u99_HbwoITXmn2PVird7TvO0XnRAX1PWa7ywIq7WExm-aXxBSa_5fP9MfFUCwqbc0fjtB1Ig9EhbBMceAgNPqSS9KgJoU5zDdNKk52o2bNyl-u8366F1ZQMMXet34lNIdlGvHxW-coQeN5ikzFJ96hA1R20sNK5YrnQloy3iwsgNyfOFDzBsYH24wbp2HBa6hXp1gvxhxTZBpp5Fve_iA"
            alt="Ministerio Evangelístico Pentecostal"
            className="w-full h-full object-cover filter brightness-90 group-hover:brightness-100 transition-all duration-500"
            whileHover={{ scale: 1.05 }}
          />
        </FadeInItem>

        {/* Right Info */}
        <FadeInItem className="flex flex-col gap-6 w-full">
          <TextReveal
            as="h3"
            text="DESDE 1995"
            className="font-headline text-5xl text-gold-base uppercase tracking-tighter font-bold"
          />
          <p className="font-body text-lg text-off-white opacity-80 leading-relaxed">
            Centralizando recursos bíblicos con urgencia y claridad para preparar a la iglesia.
          </p>
          <motion.button
            onClick={() => setShowMap(!showMap)}
            className="self-start border-2 border-gold-base text-gold-base font-body text-sm font-bold uppercase px-8 py-3 hover:bg-gold-base hover:text-navy-midnight transition-colors cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showMap ? 'OCULTAR MAPA' : 'UBICACIONES'}
          </motion.button>

          <AnimatePresence>
            {showMap && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden w-full flex flex-col gap-4 border-2 border-gold-base bg-surface-container p-5 mt-2"
              >
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-gold-base shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-headline text-sm font-bold uppercase text-gold-highlight tracking-tight">
                      Templo Central - Santiago Centro
                    </h4>
                    <p className="font-body text-xs text-on-surface opacity-80 mt-1 leading-relaxed">
                      Chacabuco 549, Santiago, Región Metropolitana, Chile.
                    </p>
                  </div>
                </div>

                {/* Styled Iframe for Dark Mode Integration */}
                <div className="border-2 border-gold-base/30 relative aspect-video w-full bg-black">
                  <iframe
                    title="Mapa Chacabuco 549"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.3562635952097!2d-70.68065092346788!3d-33.44002629761925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c4516ab71101%3A0xe54e605d8bc156c4!2sChacabuco%20549%2C%20Santiago%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1719170000000!5m2!1ses!2scl"
                    width="100%"
                    height="100%"
                    className="border-0 grayscale invert opacity-75 contrast-125"
                    loading="lazy"
                    allowFullScreen
                  />
                </div>

                <a
                  href="https://maps.google.com/?q=Chacabuco+549,+Santiago,+Chile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-gold-base/50 bg-transparent text-gold-base px-4 py-2 font-body text-xs font-bold uppercase hover:bg-gold-base hover:text-navy-midnight transition-colors cursor-pointer"
                >
                  Abrir en Google Maps <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </motion.div>
            )}
          </AnimatePresence>
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
                href="/biografia"
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
