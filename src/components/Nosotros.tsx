'use client';

import { useState, useRef } from 'react';
import { ArrowRight, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { useGSAP, gsap } from '@/hooks/useGSAP';
import ScrollReveal from './scroll-reveal';
import TextReveal from './text-reveal';

export default function Nosotros() {
  const [showMap, setShowMap] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    // Multilayer Parallax effect for title
    gsap.to(titleRef.current, {
      y: -40,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, [], sectionRef);

  return (
    <section ref={sectionRef} id="nosotros" className="py-20 sm:py-28 px-4 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16">
        
        {/* Title */}
        <div ref={titleRef} className="w-full">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-efsa-red mb-4">
            Nuestra Visión
          </p>
          <TextReveal
            as="h2"
            className="font-headline text-4xl sm:text-5xl text-gold-highlight uppercase tracking-tight font-bold mb-6"
          >
            NOSOTROS
          </TextReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-10 items-stretch relative">
          
          {/* Left Column (Image) */}
          <div className="w-full h-full">
            <ScrollReveal className="h-full" animation="zoom">
              <div className="relative border border-gold-base/20 w-full h-full min-h-[300px] md:min-h-[500px] overflow-hidden group bg-surface-container-lowest">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                  style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCxGMArN4FTBJtjMwO-AI7NxHWI_K1qPkFZsLEiHGnSghq0OaDpOX4k1f5u99_HbwoITXmn2PVird7TvO0XnRAX1PWa7ywIq7WExm-aXxBSa_5fP9MfFUCwqbc0fjtB1Ig9EhbBMceAgNPqSS9KgJoU5zDdNKk52o2bNyl-u8366F1ZQMMXet34lNIdlGvHxW-coQeN5ikzFJ96hA1R20sNK5YrnQloy3iwsgNyfOFDzBsYH24wbp2HBa6hXp1gvxhxTZBpp5Fve_iA")` }}
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column (Scrolling Content) */}
          <div className="flex flex-col justify-between w-full gap-8 h-full">
            
            {/* Info Details */}
            <ScrollReveal className="flex flex-col h-full" animation="zoom">
              <div className="flex flex-col gap-6 flex-grow">
                <h3 className="font-headline text-4xl sm:text-5xl text-gold-highlight uppercase tracking-tight font-bold mt-[-5px]">
                  DESDE 1995
                </h3>
                <div className="flex flex-col gap-4">
                  <p className="font-body text-base sm:text-lg text-on-surface opacity-80 leading-relaxed">
                    Durante casi tres décadas, el Ministerio Evangelístico Pentecostal <strong className="text-gold-highlight font-medium">"El Fin Se Acerca"</strong> ha trabajado incansablemente para expandir el reino de Dios y preparar a la iglesia para los tiempos venideros a través de:
                  </p>
                  <ul className="font-body text-sm sm:text-base text-on-surface opacity-75 flex flex-col gap-3 mt-1">
                    <li className="flex items-start gap-2">
                      <span className="text-efsa-red mt-1">■</span>
                      <span><strong>Predicación Constante:</strong> Más de 30 años proclamando el evangelio puro en la Plaza de Armas de Santiago.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-efsa-red mt-1">■</span>
                      <span><strong>Expansión Ministerial:</strong> Fundación de nuestro Templo Central y alcance de más de 7,000 almas para Cristo.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-efsa-red mt-1">■</span>
                      <span><strong>Medios de Comunicación:</strong> Difusión del mensaje profético en Radio Tiempos Finales 600 AM y Gracia TV.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-efsa-red mt-1">■</span>
                      <span><strong>Edificación Digital:</strong> Centralización de recursos bíblicos y sana doctrina a través de esta plataforma.</span>
                    </li>
                  </ul>
                </div>
                <button
                  onClick={() => setShowMap(!showMap)}
                  className="self-start border-2 border-gold-base/40 text-gold-base font-headline text-sm font-bold uppercase tracking-widest px-8 py-3 hover:bg-gold-base hover:text-navy-midnight transition-colors duration-300 cursor-pointer"
                >
                  {showMap ? 'OCULTAR MAPA' : 'UBICACIONES'}
                </button>

                {showMap && (
                  <div className="overflow-hidden w-full flex flex-col gap-4 border border-gold-base/20 bg-surface-container-lowest p-5 mt-2 animate-in slide-in-from-top-2 fade-in duration-300">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-efsa-red shrink-0 mt-0.5" strokeWidth={1.5} />
                      <div>
                        <h4 className="font-headline text-sm font-bold uppercase text-gold-base tracking-tight">
                          Templo Central - Santiago Centro
                        </h4>
                        <p className="font-body text-sm text-on-surface opacity-70 mt-1 leading-relaxed">
                          Chacabuco 549, Santiago, Región Metropolitana, Chile.
                        </p>
                      </div>
                    </div>

                    <div className="border border-gold-base/20 relative aspect-video w-full bg-surface-container-lowest">
                      <iframe
                        title="Mapa Chacabuco 549"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.3562635952097!2d-70.68065092346788!3d-33.44002629761925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c4516ab71101%3A0xe54e605d8bc156c4!2sChacabuco%20549%2C%20Santiago%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1719170000000!5m2!1ses!2scl"
                        width="100%"
                        height="100%"
                        className="border-0"
                        loading="lazy"
                        allowFullScreen
                      />
                    </div>

                    <a
                      href="https://maps.google.com/?q=Chacabuco+549,+Santiago,+Chile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 border-2 border-gold-base/40 bg-transparent text-gold-base px-4 py-3 font-headline text-xs font-bold uppercase tracking-widest hover:bg-gold-base hover:text-navy-midnight transition-colors duration-300"
                    >
                      Abrir en Google Maps <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.5} />
                    </a>
                  </div>
                )}
              </div>
            </ScrollReveal>

            {/* Pastor Profile Card */}
            <ScrollReveal className="mt-auto">
              <div className="bg-surface-container-lowest border border-gold-base/20 p-8 flex flex-col items-center gap-6 group hover:border-gold-base/40 transition-colors duration-300 text-center sm:text-left sm:flex-row sm:items-start mb-[-5px]">
                {/* Avatar Container */}
                <div className="w-24 h-24 sm:w-32 sm:h-32 border border-gold-base/20 flex items-center justify-center shrink-0 overflow-hidden bg-surface-container rounded-full sm:rounded-none">
                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                    style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBeZ3eqsZdep37GuykFkKXy4dIPzcXKxe0Zgiqmz4a6Ps_7Cw2RbnCWjGuzLmVrA2bgJLbircQ_hg9pRvA126aBOElfWS-qS5uG8xR99Kz6U1yuVBCj-wjIYF3uvg8KSib7gc-ACr-yRT6gGJe5sZjl__c9JM3NP3KzrSlO-1bhYC3I5EqPMy9SWcErtUmpKQrzfK5R8r67yQYmU4SmnaVaa9ffJMFNl47Wv3NMS4R9myT-XJnzd8SUP_EtNVJtrHxrwfps1fgT6CbT")` }}
                  />
                </div>

                {/* Info Details */}
                <div className="flex flex-col gap-3 w-full">
                  <h3 className="font-headline text-xl sm:text-2xl text-gold-highlight uppercase font-bold tracking-tight">
                    PASTOR MARCOS MORALES
                  </h3>
                  <p className="font-body text-sm sm:text-base text-on-surface opacity-70 leading-relaxed">
                    Dedicado a la predicación del evangelio pentecostal y la defensa de la fe desde la fundación de este ministerio.
                  </p>
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6 mt-1">
                    <a
                      className="text-efsa-red font-headline text-[10px] sm:text-xs font-bold uppercase flex items-center gap-1.5 hover:text-red-400 transition-colors group/link"
                      href="/biografia"
                    >
                      LEER BIOGRAFÍA{' '}
                      <ArrowRight className="h-3.5 w-3.5 group-hover/link:translate-x-1 transition-transform" strokeWidth={1.5} />
                    </a>
                    <a
                      className="text-gold-base font-headline text-[10px] sm:text-xs font-bold uppercase flex items-center gap-1.5 hover:text-gold-highlight transition-colors"
                      href="#agenda"
                    >
                      AGENDA{' '}
                      <Calendar className="h-3.5 w-3.5" strokeWidth={1.5} />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </div>
    </section>
  );
}
