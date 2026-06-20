'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInCascadeProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}

export default function FadeInCascade({
  children,
  className = '',
  stagger = 0.15,
  delay = 0,
}: FadeInCascadeProps) {
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-5%' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface FadeInItemProps {
  children: ReactNode;
  className?: string;
}

export function FadeInItem({ children, className = '' }: FadeInItemProps) {
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // easeOutExpo
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}
