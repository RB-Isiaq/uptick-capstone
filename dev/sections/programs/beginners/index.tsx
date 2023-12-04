'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Hero from './internals/Hero';
import Curiosity from './internals/Curiosity';
import Offer from './internals/Offer';
import Why from './internals/Why';

const BeginnersPage = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeIn' }}
        exit={{ translateX: -100, opacity: 0 }}
        className="overflow-hidden"
      >
        <Hero />
        <Curiosity />
        <Offer />
        <Why />
      </motion.div>
    </AnimatePresence>
  );
};

export default BeginnersPage;
