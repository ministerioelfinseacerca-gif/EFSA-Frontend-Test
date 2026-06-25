'use client';

import { motion } from 'framer-motion';

interface TextRevealProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'span' | 'div';
}

export default function TextReveal({ text, className = '', as = 'h1' }: TextRevealProps) {
  // Split words including non-breaking spaces or existing HTML entities
  const words = text.split(/\s+/);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  const childVariants = {
    hidden: { y: '105%' },
    visible: {
      y: '0%',
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] as const, // easeOutExpo
      },
    },
  };

  const Component = motion[as];

  return (
    <Component
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10%' }}
      className={`${className} flex flex-wrap inline-flex`}
    >
      {words.map((word, idx) => {
        // Handle empty spaces and special symbols
        const cleanWord = word.replace(/&nbsp;/g, '\u00A0');
        return (
          <span
            key={idx}
            className="relative overflow-hidden mr-[0.2em] py-[0.1em] -my-[0.1em] inline-block"
            style={{ display: 'inline-block' }}
          >
            <motion.span variants={childVariants} className="inline-block">
              {cleanWord === '' ? '\u00A0' : cleanWord}
            </motion.span>
          </span>
        );
      })}
    </Component>
  );
}
