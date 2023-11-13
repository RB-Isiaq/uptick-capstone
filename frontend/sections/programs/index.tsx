'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Container from '@/components/Container';
import Beginner from './internals/Beginners';
import Banner from './internals/Banner';
import Tab from './internals/Tab/Tab';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const ProgramsPage = () => {
  const params = useSearchParams();
  const id = params.get('id');
  const [active, setActive] = useState<number>(1);

  useEffect(() => {
    if (id !== null) {
      const idValue = parseInt(id, 10);
      setActive(isNaN(idValue) ? 1 : idValue);
    } else {
      setActive(1);
    }
  }, [id]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, translateX: -20 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 1.5, ease: 'easeIn' }}
        exit={{ translateX: -100, opacity: 0 }}
      >
        <Container>
          <Banner active={active} />
          <Tab active={active} setActive={setActive} />
          <Beginner />
        </Container>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProgramsPage;
