import Container from '@/components/Container';
import Hero from './internals/Hero';
import Story from './internals/Story';
import Values from './internals/Values';
import Team from './internals/Team';
import Achievements from './internals/Achievements';

const AboutPage = () => {
  return (
    <Container>
      <Hero />
      <Story />
      <Values />
      <Team />
      <Achievements />
    </Container>
  );
};

export default AboutPage;
