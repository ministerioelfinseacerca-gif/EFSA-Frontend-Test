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
    <div className="min-h-screen bg-background text-on-background flex flex-col font-body">
      {/* Navigation */}
      <TopNavBar />

      <main className="w-full flex flex-col gap-20 pb-32">
        {/* Hero Section */}
        <section className="relative w-full overflow-hidden border-b-2 border-gold-base bg-surface-container-lowest py-20 px-margin-mobile md:px-margin-desktop">
          {/* Subtle background overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-midnight/20 to-transparent pointer-events-none" />
          
          <div className="max-w-container-max mx-auto relative flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 border border-error bg-error/15 px-3 py-1.5 self-start">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping bg-error opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 bg-error"></span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-error-container">
                Señal en vivo
              </span>
            </div>

            <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter uppercase text-gold-highlight leading-none">
              Radio Tiempos Finales
            </h1>
            <p className="max-w-2xl font-body text-sm md:text-base text-on-surface opacity-80 leading-relaxed">
              La voz oficial del Ministerio Evangelístico Pentecostal <span className="text-gold-base font-bold">“El Fin se Acerca”</span>. Llevando la Palabra de verdad, esperanza y profecía bíblica las 24 horas del día a todo Chile y el mundo entero.
            </p>

            <div className="flex flex-wrap gap-3 mt-4 text-xs font-bold uppercase tracking-widest text-gold-base">
              <span className="flex items-center gap-1 bg-surface-container px-3 py-2 border border-surface-bright">
                <MapPin className="h-4 w-4" /> Santiago 600 AM
              </span>
              <span className="flex items-center gap-1 bg-surface-container px-3 py-2 border border-surface-bright">
                <MapPin className="h-4 w-4" /> Iquique 107.7 FM
              </span>
              <span className="flex items-center gap-1 bg-surface-container px-3 py-2 border border-surface-bright">
                <Sparkles className="h-4 w-4" /> Transmisión Continua
              </span>
            </div>
          </div>
        </section>

        {/* Immersive Player Section */}
        <section id="reproductor" className="max-w-container-max w-full mx-auto px-margin-mobile md:px-margin-desktop scroll-mt-24">
          <div className="mb-6 text-center">
            <h2 className="font-headline text-2xl font-bold uppercase tracking-tighter text-gold-highlight">
              Señal de Transmisión
            </h2>
            <p className="font-body text-xs text-on-surface opacity-70 mt-1">
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
              <span className="inline-flex items-center gap-1.5 border border-gold-base/20 bg-navy-midnight/20 px-3 py-1 font-body text-xs font-bold uppercase tracking-widest text-gold-base">
                <Heart className="h-3.5 w-3.5" /> Clamor & Oración
              </span>
              <h2 className="mt-3 font-headline text-3xl font-bold uppercase tracking-tighter text-gold-highlight">
                Peticiones de Oración
              </h2>
              <p className="mt-2 font-body text-sm text-on-surface opacity-70 leading-relaxed">
                ¿Tienes una necesidad o un pedido especial? Nuestro ministerio de intercesión está comprometido a orar por ti. Envíanos tu petición y la sumaremos a la cadena de oración diaria.
              </p>
            </div>

            <div className="border-2 border-gold-base bg-surface-container-lowest p-6 shadow-none relative overflow-hidden">
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
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="user-name" className="font-headline text-xs font-bold uppercase tracking-wider text-gold-base">
                        Tu Nombre *
                      </label>
                      <input
                        type="text"
                        id="user-name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ej. Hermano Juan Pérez"
                        className="w-full bg-surface-container text-sm text-off-white px-3 py-2.5 border border-surface-bright focus:border-gold-base focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="user-city" className="font-headline text-xs font-bold uppercase tracking-wider text-gold-base">
                        Ciudad / País
                      </label>
                      <input
                        type="text"
                        id="user-city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Ej. Santiago, Chile"
                        className="w-full bg-surface-container text-sm text-off-white px-3 py-2.5 border border-surface-bright focus:border-gold-base focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="user-request" className="font-headline text-xs font-bold uppercase tracking-wider text-gold-base">
                        Tu Petición de Oración *
                      </label>
                      <textarea
                        id="user-request"
                        required
                        rows={4}
                        value={request}
                        onChange={(e) => setRequest(e.target.value)}
                        placeholder="Escribe aquí tu petición para presentarla en el clamor..."
                        className="w-full bg-surface-container text-sm text-off-white px-3 py-2.5 border border-surface-bright focus:border-gold-base focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="mt-2 inline-flex items-center justify-center gap-2 border-2 border-gold-base bg-gold-base px-6 py-3 text-xs font-bold uppercase tracking-wider text-navy-midnight hover:bg-gold-highlight hover:border-gold-highlight transition-colors cursor-pointer"
                    >
                      <Send className="h-4 w-4" /> Enviar Petición
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
                    <CheckCircle className="h-16 w-16 text-gold-base" />
                    <div>
                      <h3 className="font-headline text-lg font-bold uppercase text-gold-highlight">
                        Petición Registrada
                      </h3>
                      <p className="mt-2 font-body text-xs text-on-surface opacity-80 max-w-xs leading-relaxed">
                        ¡Gracias, hermano/a <span className="font-bold text-off-white">{name}</span>! Hemos recibido tu solicitud. Nuestro grupo de intercesores estará clamando ante Dios por tu petición en los cultos especiales de oración.
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
            <div className="border border-surface-bright bg-surface-container p-5 flex flex-col gap-3">
              <span className="font-headline text-xs font-extrabold uppercase tracking-widest text-gold-base">
                Contacto Directo Cabina
              </span>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 border border-gold-base/30 bg-navy-midnight/20 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-gold-base" />
                </div>
                <div>
                  <p className="text-[10px] font-body text-on-surface opacity-60 uppercase tracking-wider">Llámanos a cabina</p>
                  <a href="tel:+56225511378" className="font-mono text-sm font-bold text-gold-highlight hover:text-gold-base transition-colors">
                    +56 2 2551 1378
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 border border-gold-base/30 bg-navy-midnight/20 flex items-center justify-center shrink-0">
                  <MessageSquare className="h-5 w-5 text-gold-base" />
                </div>
                <div>
                  <p className="text-[10px] font-body text-on-surface opacity-60 uppercase tracking-wider">Sitio Oficial</p>
                  <a href="https://tiemposfinales.cl" target="_blank" rel="noopener noreferrer" className="font-body text-sm font-bold text-gold-highlight hover:text-gold-base transition-colors">
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
