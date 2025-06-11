
import Hero from '@/components/Hero';
import About from '@/components/About';
import Values from '@/components/Values';
import Team from '@/components/Team';
import Clients from '@/components/Clients';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Values />
      <Team />
      <Clients />
      <Contact />
    </div>
  );
};

export default Index;
