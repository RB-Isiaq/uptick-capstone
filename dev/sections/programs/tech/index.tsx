'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Hero from './internals/Hero';
import Programs from './internals/Programs';
import Join from './internals/Join';

const TechPage = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeIn' }}
        exit={{ translateX: -100, opacity: 0 }}
      >
        <Hero />
        <Programs />
        <Join />
      </motion.div>
    </AnimatePresence>
  );
};

export default TechPage;
