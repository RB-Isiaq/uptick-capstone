import About from '@/sections/homepage/interenals/About';
import Contact from '@/sections/homepage/interenals/Contact';
import Container from '@/components/Container';
import Hero from '@/sections/homepage/interenals/Hero';
import Programs from '@/sections/homepage/interenals/Programs';
import Why from '@/sections/homepage/interenals/Why';

const HomePage = () => {
  return (
    <Container>
      <Hero />
      <Why />
      <Programs />
      <About />
      <Contact />
    </Container>
  );
};

export default HomePage;
