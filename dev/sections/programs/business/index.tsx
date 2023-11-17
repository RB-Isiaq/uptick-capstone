'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Hero from './internals/Hero';
import Unleash from './internals/Unleash';
import Commitment from './internals/Commitment';
import Startup from './internals/Startup';
import Why from './internals/Why';
import Application from './internals/Application';
import Join from './internals/Join';

const BusinessPage = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeIn' }}
        exit={{ translateX: -100, opacity: 0 }}
      >
        <Hero />
        <Unleash />
        <Commitment />
        <Startup />
        <Why />
        <Application />
        <Join />
      </motion.div>
    </AnimatePresence>
  );
};

export default BusinessPage;
