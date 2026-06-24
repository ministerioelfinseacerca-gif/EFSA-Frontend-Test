'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Menu, X, ArrowLeft } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

export default function TopNavBar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { label: 'INICIO', href: '/#inicio', active: pathname === '/' },
    { label: 'NOSOTROS', href: '/#nosotros' },
    { label: 'NOTICIAS', href: '/#noticias' },
    { label: 'MULTIMEDIA', href: '/#multimedia' },
    { label: 'EVENTOS', href: '/#eventos' },
    { label: 'RECURSOS', href: '/#recursos-edificacion' },
    { label: 'RADIO', href: '/radio', active: pathname === '/radio' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMobileMenuOpen(false);
    
    // Smooth scroll if we are already on the home page and clicking a hash link
    if (href.startsWith('/#') && pathname === '/') {
      e.preventDefault();
      const id = href.replace('/#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Update URL hash without jumping
        window.history.pushState(null, '', href);
      }
    }
  };

  const isRadioOrBioPage = pathname.includes('/radio') || pathname.includes('/biografia');

  return (
    <header className="bg-background border-b-2 border-gold-base w-full sticky top-0 z-50">
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
        {/* Brand / Back Button for internal pages on mobile */}
        <div className="flex items-center gap-3">
          {isRadioOrBioPage && (
            <button
              onClick={() => router.push('/')}
              className="md:hidden text-gold-base p-1 hover:text-gold-highlight cursor-pointer flex items-center justify-center mr-2"
              aria-label="Volver al inicio"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
          )}
          <Link href="/" className="flex items-center gap-3 md:gap-4 cursor-pointer">
            <img
              alt="Ministerio Evangelístico Pentecostal"
              className="h-10 md:h-14 w-auto object-contain filter brightness-100"
              src="/logo.svg"
            />
            <div className="flex flex-col">
              <span className="font-headline text-sm md:text-lg font-bold text-gold-base tracking-tighter uppercase leading-none">
                PLATAFORMA DIGITAL
              </span>
              <span className="font-body text-[10px] md:text-xs text-gold-base opacity-80 uppercase tracking-widest">
                EL FIN SE ACERCA
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          {links.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`font-body text-sm font-bold tracking-wider relative py-1 transition-all duration-200 hover:scale-105 active:scale-95 inline-block ${
                link.active
                  ? 'text-gold-highlight border-b-2 border-gold-base'
                  : 'text-gold-base opacity-80 hover:text-gold-highlight'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop User Account */}
        <div className="hidden md:flex items-center gap-4">
          <button
            className="text-gold-base hover:text-gold-highlight cursor-pointer flex items-center justify-center p-1 border-2 border-transparent hover:border-gold-base transition-transform hover:scale-105 active:scale-95"
            aria-label="Perfil de usuario"
          >
            <User className="h-7 w-7 text-gold-base" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gold-base p-2 focus:outline-none"
            aria-label="Menú"
          >
            {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-surface-dark border-b-2 border-gold-base overflow-hidden"
          >
            <nav className="flex flex-col items-center py-6 gap-6">
              {links.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`font-headline text-lg font-bold tracking-widest uppercase ${
                    link.active ? 'text-gold-highlight' : 'text-off-white hover:text-gold-base'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
