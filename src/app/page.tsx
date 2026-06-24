import SmoothScroll from '@/components/SmoothScroll';
import TopNavBar from '@/components/TopNavBar';
import Hero from '@/components/Hero';
import Nosotros from '@/components/Nosotros';
import DeclaracionFe from '@/components/DeclaracionFe';
import Noticias from '@/components/Noticias';
import Multimedia from '@/components/Multimedia';
import Eventos from '@/components/Eventos';
import Recursos from '@/components/Recursos';
import Footer from '@/components/Footer';
import RadioPlayerPersistent from '@/components/RadioPlayerPersistent';
import InfiniteMarquee from '@/components/infinite-marquee';

export default function Home() {
  return (
    <>
      {/* Smooth scroll (Lenis client wrapper) */}
      <SmoothScroll />

      {/* Main navigation */}
      <TopNavBar />

      {/* Main content grid */}
      <main className="w-full flex flex-col gap-24 pt-8 pb-32">
        {/* Hero Section */}
        <Hero />

        {/* Separator Marquee */}
        <InfiniteMarquee
          items={["Sana Doctrina", "•", "Radio 24/7", "•", "Escatología", "•", "Apologética", "•"]}
          speed={30}
          className="py-6 border-y border-gold-base/20 bg-black/10"
        />

        {/* Nosotros (About) Section */}
        <Nosotros />

        {/* Declaración de Fe Section */}
        <DeclaracionFe />

        {/* Noticias (News) Section */}
        <Noticias />

        {/* Multimedia & Social Feeds Section */}
        <Multimedia />

        {/* Upcoming Events Section */}
        <Eventos />

        {/* Recursos (Study Resources) Section */}
        <Recursos />
      </main>

      {/* Footer information */}
      <Footer />

      {/* Persistent Audio Radio Player fixed bottom */}
      <RadioPlayerPersistent />
    </>
  );
}
