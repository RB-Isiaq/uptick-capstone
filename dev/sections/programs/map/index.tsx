'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Hero from './internals/Hero';
import Description from './internals/Description';
import Commitment from './internals/Commitment';
import Why from './internals/Why';
import Contact from './internals/Contact';
import Process from './internals/Process';

const MapPage = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeIn' }}
        exit={{ translateX: -100, opacity: 0 }}
      >
        <Hero />
        <Description />
        <Commitment />
        <Why />
        <Process />
        <Contact />
      </motion.div>
    </AnimatePresence>
  );
};

export default MapPage;
