'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Hero from '@/sections/homepage/interenals/Hero';
import Programs from '@/sections/homepage/interenals/Programs';
import Why from '@/sections/homepage/interenals/Why';
import { Line } from '@/components/Line/Line';
import Accelerate from './interenals/Accelerate';
import Join from './interenals/Join';
import Blog from './interenals/Blog';
import Testimonials from './interenals/Testimonials';

const HomePage = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeIn' }}
        exit={{ translateX: -100, opacity: 0 }}
      >
        <Hero />
        <Line />
        <Accelerate />
        <Why />
        <Programs />
        <Line />
        <Testimonials />
        <Join />
        <Blog />
      </motion.div>
    </AnimatePresence>
  );
};

export default HomePage;
