'use client';

import { motion, AnimatePresence } from 'framer-motion';

import About from '@/sections/homepage/interenals/About';
import Contact from '@/sections/homepage/interenals/Contact';
import Container from '@/components/Container';
import Hero from '@/sections/homepage/interenals/Hero';
import Programs from '@/sections/homepage/interenals/Programs';
import Why from '@/sections/homepage/interenals/Why';

const HomePage = () => {
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
          <Why />
          <Programs />
          <About />
          <Contact />
        </Container>
      </motion.div>
    </AnimatePresence>
  );
};

export default HomePage;
