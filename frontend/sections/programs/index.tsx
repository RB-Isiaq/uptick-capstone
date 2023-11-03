'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Container from '@/components/Container';
import Beginner from './internals/Beginners';
import Banner from './internals/Banner';
import Tab from './internals/Tab/Tab';

const ProgramsPage = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, translateX: -20 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 1.5, ease: 'easeIn' }}
        exit={{ translateX: -100, opacity: 0 }}
      >
        <Container>
          <Banner />
          <Tab />
          <Beginner />
        </Container>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProgramsPage;
