'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, MessageSquare, Send, CheckCircle, Heart, Star, Sparkles } from 'lucide-react';
import TopNavBar from '@/components/TopNavBar';
import Footer from '@/components/Footer';
import RadioPortalPlayer from '@/components/radio-portal-player';
import ProgramSchedule, { ScheduleHeader } from '@/components/program-schedule';

export default function RadioPortalPage() {
  const [formSubmitted, setFormSubmitted] = React.useState(false);
  const [name, setName] = React.useState('');
  const [city, setCity] = React.useState('');
  const [request, setRequest] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !request) return;

    // Simulate API submission
    setFormSubmitted(true);
    setTimeout(() => {
      // Reset form after a few seconds
      setFormSubmitted(false);
      setName('');
      setCity('');
      setRequest('');
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-editorial-beige text-navy-midnight flex flex-col font-[family-name:var(--font-montserrat)]">
      {/* Navigation */}
      <TopNavBar />

      <main className="w-full flex flex-col gap-20 pb-32">
        {/* Hero Section */}
        <section className="relative w-full overflow-hidden border-b border-navy-midnight/10 bg-transparent py-24 md:py-32 px-6 sm:px-8 md:px-12 lg:px-16 min-h-[60vh] flex flex-col justify-center">
          {/* Background Video */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source src="/radio_studio.mp4" type="video/mp4" />
          </video>
          
          {/* Overlays for text legibility */}
          <div className="absolute inset-0 bg-editorial-beige/40 z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-transparent z-10 pointer-events-none" />
          
          <div className="max-w-container-max mx-auto relative flex flex-col gap-4 z-20 w-full">
            <div className="inline-flex items-center gap-2 border border-error bg-error/15 px-3 py-1.5 self-start">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping bg-error opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 bg-error"></span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-error-container">
                Señal en vivo
              </span>
            </div>

            <h1 className="font-black text-6xl md:text-8xl lg:text-[7rem] text-navy-midnight leading-[1.05] tracking-tighter mb-4 mt-2">
              Radio <br className="hidden md:block" />
              <span className="font-light italic text-sky-800 tracking-tight">Tiempos finales.</span>
            </h1>
            <p className="max-w-2xl font-light text-base md:text-lg text-navy-midnight/80 leading-relaxed border-l-2 border-gold-base pl-4">
              La voz oficial del Ministerio Evangelístico Pentecostal <strong className="text-navy-midnight font-black">“El Fin se Acerca”</strong>. Llevando la Palabra de verdad, esperanza y profecía bíblica las 24 horas del día a todo Chile y el mundo entero.
            </p>

            <div className="flex flex-wrap gap-3 mt-6 text-[10px] md:text-xs font-black uppercase tracking-widest text-navy-midnight">
              <span className="flex items-center gap-1.5 bg-white px-4 py-2 border border-navy-midnight/10 rounded-full shadow-sm">
                <MapPin className="h-4 w-4 text-sky-800" strokeWidth={1.5} /> Santiago 600 AM
              </span>
              <span className="flex items-center gap-1.5 bg-white px-4 py-2 border border-navy-midnight/10 rounded-full shadow-sm">
                <MapPin className="h-4 w-4 text-sky-800" strokeWidth={1.5} /> Iquique 107.7 FM
              </span>
              <span className="flex items-center gap-1.5 bg-white px-4 py-2 border border-navy-midnight/10 rounded-full shadow-sm">
                <Sparkles className="h-4 w-4 text-sky-800" strokeWidth={1.5} /> Transmisión Continua
              </span>
            </div>
          </div>
        </section>

        {/* Immersive Player Section */}
        <section id="reproductor" className="max-w-container-max w-full mx-auto px-margin-mobile md:px-margin-desktop scroll-mt-24">
          <div className="mb-10 text-center flex flex-col items-center">
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-widest text-navy-midnight">
              Señal de Transmisión
            </h2>
            <p className="font-light text-base text-navy-midnight/70 mt-3 max-w-lg mx-auto">
              Escucha nuestras transmisiones de audio o sintoniza el estudio en vivo en video HD.
            </p>
          </div>
          <RadioPortalPlayer />
        </section>

        {/* Grid: Weekly Schedule & Prayer Requests */}
        <section className="max-w-container-max w-full mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Weekly Schedule (8/12 width) */}
          <div className="lg:col-span-7 flex flex-col">
            <ScheduleHeader />
            <ProgramSchedule />
            <p className="mt-4 font-body text-[10px] text-on-surface opacity-50 uppercase tracking-widest flex items-center justify-center gap-2">
              <span>* Horarios configurados en hora oficial de Santiago de Chile (CLT/CLST)</span>
            </p>
          </div>

          {/* Prayer Request Form (5/12 width) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 font-black text-xs uppercase tracking-widest text-sky-800 bg-sky-800/10 rounded-full">
                <Heart className="h-3.5 w-3.5" /> Clamor & Oración
              </span>
              <h2 className="mt-4 font-black text-4xl uppercase tracking-tighter text-navy-midnight leading-[1.05]">
                Peticiones de Oración
              </h2>
              <p className="mt-3 font-light text-base text-navy-midnight/70 leading-relaxed">
                ¿Tienes una necesidad o un pedido especial? Nuestro ministerio de intercesión está comprometido a orar por ti. Envíanos tu petición y la sumaremos a la cadena de oración diaria.
              </p>
            </div>

            <div className="border border-navy-midnight/10 bg-white p-8 rounded-2xl shadow-sm relative overflow-hidden">
              <AnimatePresence mode="wait">
                {!formSubmitted ? (
                  <motion.form
                    key="prayer-form"
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="flex flex-col gap-2">
                      <label htmlFor="user-name" className="font-black text-xs uppercase tracking-wider text-navy-midnight">
                        Tu Nombre *
                      </label>
                      <input
                        type="text"
                        id="user-name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ej. Hermano Juan Pérez"
                        className="w-full bg-editorial-beige/50 text-base font-light text-navy-midnight px-4 py-3 border border-navy-midnight/10 focus:border-sky-800 focus:outline-none transition-colors rounded-xl"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="user-city" className="font-black text-xs uppercase tracking-wider text-navy-midnight">
                        Ciudad / País
                      </label>
                      <input
                        type="text"
                        id="user-city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Ej. Santiago, Chile"
                        className="w-full bg-editorial-beige/50 text-base font-light text-navy-midnight px-4 py-3 border border-navy-midnight/10 focus:border-sky-800 focus:outline-none transition-colors rounded-xl"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="user-request" className="font-black text-xs uppercase tracking-wider text-navy-midnight">
                        Motivo de Oración *
                      </label>
                      <textarea
                        id="user-request"
                        required
                        rows={4}
                        value={request}
                        onChange={(e) => setRequest(e.target.value)}
                        placeholder="Escribe aquí tu petición..."
                        className="w-full bg-editorial-beige/50 text-base font-light text-navy-midnight px-4 py-3 border border-navy-midnight/10 focus:border-sky-800 focus:outline-none transition-colors resize-y rounded-xl"
                      ></textarea>
                    </div>

                      <button
                        type="submit"
                        className="w-full bg-navy-midnight text-white font-black text-xs uppercase tracking-widest px-6 py-4 rounded-full transition-all duration-300 hover:bg-sky-800 flex justify-center items-center gap-2 group"
                      >
                        ENVIAR PETICIÓN
                        <Send className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-message"
                    className="flex flex-col items-center justify-center text-center py-8 gap-4"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="flex flex-col items-center justify-center h-full min-h-[300px] text-center gap-4 bg-editorial-beige/50 rounded-2xl">
                      <CheckCircle className="h-16 w-16 text-sky-800" strokeWidth={1.5} />
                      <h3 className="font-black text-2xl uppercase tracking-tighter text-navy-midnight">
                        Petición Recibida
                      </h3>
                      <p className="font-light text-navy-midnight/70 text-base max-w-[250px]">
                        ¡Gracias, hermano/a <span className="font-bold text-navy-midnight">{name}</span>! Hemos recibido tu solicitud. Nuestro grupo de intercesores estará clamando ante Dios por tu petición en los cultos especiales de oración.
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] font-bold text-gold-base uppercase tracking-widest mt-4">
                      <Star className="h-3.5 w-3.5 fill-current animate-spin" /> Dios te bendiga grandemente
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Quick Contact Box */}
            <div className="border border-navy-midnight/10 bg-white p-6 rounded-2xl flex flex-col gap-5 shadow-sm">
              <span className="font-black text-xs uppercase tracking-widest text-sky-800 bg-sky-800/10 px-3 py-1 self-start rounded-full">
                Contacto Directo Cabina
              </span>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-editorial-beige/50 text-sky-800 flex items-center justify-center shrink-0 border border-navy-midnight/5">
                  <Phone className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col">
                  <p className="text-[10px] font-black text-navy-midnight/60 uppercase tracking-widest">Llámanos a cabina</p>
                  <a href="tel:+56225511378" className="font-black text-base text-navy-midnight hover:text-sky-800 transition-colors">
                    +56 2 2551 1378
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-editorial-beige/50 text-sky-800 flex items-center justify-center shrink-0 border border-navy-midnight/5">
                  <MessageSquare className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col">
                  <p className="text-[10px] font-black text-navy-midnight/60 uppercase tracking-widest">Sitio Oficial</p>
                  <a href="https://tiemposfinales.cl" target="_blank" rel="noopener noreferrer" className="font-light italic text-base text-navy-midnight hover:text-sky-800 transition-colors">
                    tiemposfinales.cl
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
