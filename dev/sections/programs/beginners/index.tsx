'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Hero from './internals/Hero';
import Curiosity from './internals/Curiosity';
import Offer from './internals/Offer';
import Why from './internals/Why';
import Learn from './internals/Learn';
import Reasons from './internals/Reasons';

const BeginnersPage = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeIn' }}
        exit={{ translateX: -100, opacity: 0 }}
      >
        <Hero />
        <Curiosity />
        <Offer />
        <Why />
        <Reasons />
        <Learn />
      </motion.div>
    </AnimatePresence>
  );
};

export default BeginnersPage;
