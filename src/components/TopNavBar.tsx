'use client';

import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function TopNavBar() {
  const pathname = usePathname();

  const links = [
    { label: 'INICIO', href: '/#inicio', active: pathname === '/' },
    { label: 'NOSOTROS', href: '/#nosotros' },
    { label: 'NOTICIAS', href: '/#noticias' },
    { label: 'MULTIMEDIA', href: '/#multimedia' },
    { label: 'EVENTOS', href: '/#eventos' },
    { label: 'RECURSOS', href: '/#recursos-edificacion' },
    { label: 'RADIO', href: '/radio', active: pathname === '/radio' },
  ];

  return (
    <header className="bg-background border-b-2 border-gold-base w-full sticky top-0 z-40 hidden md:flex">
      <div className="flex justify-between items-center w-full px-margin-desktop py-4 max-w-container-max mx-auto">
        {/* Brand */}
        <div className="flex items-center gap-4">
          <img
            alt="Ministerio Evangelístico Pentecostal"
            className="h-14 w-auto object-contain filter brightness-100"
            src="/logo.svg"
          />
          <div className="flex flex-col">
            <span className="font-headline text-lg font-bold text-gold-base tracking-tighter uppercase leading-none">
              PLATAFORMA DIGITAL
            </span>
            <span className="font-body text-xs text-gold-base opacity-80 uppercase tracking-widest">
              EL FIN SE ACERCA
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex gap-8">
          {links.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.href}
              className={`font-body text-sm font-bold tracking-wider relative py-1 transition-colors duration-200 ${
                link.active
                  ? 'text-gold-highlight border-b-2 border-gold-base'
                  : 'text-gold-base opacity-80 hover:text-gold-highlight'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        {/* User Account / CTA */}
        <div className="flex items-center gap-4">
          <motion.button
            className="text-gold-base hover:text-gold-highlight cursor-pointer flex items-center justify-center p-1 border-2 border-transparent hover:border-gold-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Perfil de usuario"
          >
            <User className="h-7 w-7 text-gold-base" />
          </motion.button>
        </div>
      </div>
    </header>
  );
}
