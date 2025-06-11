
import { Shield, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyber-blue rounded-full blur-xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-cyber-green rounded-full blur-xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-28 h-28 bg-cyber-purple rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo */}
          <div className="flex items-center justify-center mb-8 animate-fade-in">
            <Shield className="w-16 h-16 text-cyber-blue mr-4 animate-pulse-glow" />
            <h1 className="text-5xl md:text-7xl font-bold text-gradient">
              TechArina
            </h1>
          </div>
          
          {/* Main headline */}
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 animate-slide-in-left">
            Защитим ваш цифровой мир от незваных AI-атак
          </h2>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in" style={{animationDelay: '0.3s'}}>
            Передовые технологии кибербезопасности для защиты от AI-ботов нового поколения
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '0.6s'}}>
            <Button 
              size="lg" 
              className="text-lg px-8 py-4 bg-primary hover:bg-primary/90 cyber-glow hover-scale"
            >
              Запросить консультацию
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover-scale"
            >
              Узнать больше
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
