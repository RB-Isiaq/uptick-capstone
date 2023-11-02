'use client';

import { motion, AnimatePresence } from 'framer-motion';

import Container from '@/components/Container';
import Hero from './internals/Hero';
import Story from './internals/Story';
import Values from './internals/Values';
import Team from './internals/Team';

import Achievements from './internals/Achievements';

const AboutPage = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, translateX: -20 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 1.5, ease: 'easeIn' }}
        exit={{ translateX: -100, opacity: 0 }}
      >
        <Container>
          <Hero />
          <Story />
          <Values />
          <Team />
          <Achievements />
        </Container>
      </motion.div>
    </AnimatePresence>
  );
};

export default AboutPage;
