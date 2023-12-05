'use client';

import { AnimatePresence, motion } from 'framer-motion';
import AboutHero from './internals/AboutHero';
import AchievmentJourney from './internals/achievments';
import AboutValues from './internals/values/AboutValues';
const AboutPage = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeIn' }}
        exit={{ translateX: -100, opacity: 0 }}
      >
        <AboutHero />
        <AboutValues />
        <AchievmentJourney />
      </motion.div>
    </AnimatePresence>
  );
};

export default AboutPage;
