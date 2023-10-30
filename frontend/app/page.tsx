import About from '@/components/About';
import Contact from '@/components/Contact';
import Container from '@/components/Container';
import Hero from '@/components/Hero';
import Programs from '@/components/Programs';
import Why from '@/components/Why';

export default function Home() {
  return (
    <main data-testid="home_page">
      <Container>
        <Hero />
        <Why />
        <Programs />
        <About />
        <Contact />
      </Container>
    </main>
  );
}
