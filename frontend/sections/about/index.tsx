'use client';

import Container from '@/components/Container';
import Hero from './internals/Hero';
import Story from './internals/Story';
import Values from './internals/Values';
import Team from './internals/Team';
import Achievements from './internals/Achievements';
import dynamic from 'next/dynamic';

const MotionDiv = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.div),
  { ssr: false },
);
const AnimatePresenceDiv = dynamic(
  () => import('framer-motion').then((mod) => mod.AnimatePresence),
  { ssr: false },
);

const AboutPage = () => {
  return (
    <AnimatePresenceDiv>
      <MotionDiv
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
      </MotionDiv>
    </AnimatePresenceDiv>
  );
};

export default AboutPage;
