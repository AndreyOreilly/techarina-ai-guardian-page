
import Hero from '@/components/Hero';
import About from '@/components/About';
import Values from '@/components/Values';
import Team from '@/components/Team';
import Clients from '@/components/Clients';
import Contact from '@/components/Contact';
import { Button } from '@/components/ui/button';
import { Database, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Секция управления задачами */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <Database className="w-16 h-16 text-cyber-blue mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Система управления задачами
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Управляйте своими задачами с помощью нашей безопасной системы, 
              интегрированной с базой данных Supabase
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => navigate('/tasks')}
                className="text-lg px-8 py-4 cyber-glow hover-scale"
              >
                Перейти к задачам
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => navigate('/auth')}
                className="text-lg px-8 py-4 hover-scale"
              >
                Войти в систему
              </Button>
            </div>
          </div>
        </div>
      </section>

      <About />
      <Values />
      <Team />
      <Clients />
      <Contact />
    </div>
  );
};

export default Index;
