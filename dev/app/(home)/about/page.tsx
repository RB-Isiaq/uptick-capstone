import AboutPage from '@/sections/aboutpage';

export const metadata = {
  title: 'About Us | Uptick',
  description: 'Nurturing the Future of Tech and Business in Africa.',
};

const About = () => {
  return (
    <main data-testid="about_page">
      <AboutPage />
    </main>
  );
};

export default About;
