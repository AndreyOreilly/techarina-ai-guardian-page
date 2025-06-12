import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Скрываем индикатор, когда страница прокручена больше чем на 100px
      setIsVisible(window.scrollY < 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isVisible) {
      const timer = setTimeout(() => setShouldRender(false), 300); // Время анимации
      return () => clearTimeout(timer);
    }
    setShouldRender(true);
  }, [isVisible]);

  if (!shouldRender) return null;

  return (
    <div className="fixed left-1/2 bottom-8 -translate-x-1/2 z-10">
      <div
        className={`flex flex-col items-center opacity-0 animate-fade-simple cursor-pointer hover:opacity-80 transition-all duration-300
          ${!isVisible ? "opacity-0 translate-y-4" : ""}`}
        style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}
        onClick={() => {
          const element = document.getElementById("about");
          if (element) element.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="text-muted-foreground text-sm mb-3">
          Листайте вниз
        </span>
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-scroll-hint"></div>
        </div>
      </div>
    </div>
  );
};

const TechArinaLogo = () => (
  <div className="relative w-24 h-24 animate-float">
    <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-green rounded-2xl transform rotate-45 animate-pulse-glow"></div>
    <div className="absolute inset-2 bg-background rounded-xl transform rotate-45"></div>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-4xl font-bold text-gradient">T</div>
    </div>
    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-32">
      <div className="h-1 bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-green rounded-full"></div>
    </div>
  </div>
);

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-background flex items-center justify-center py-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo */}
          <div className="flex flex-col items-center justify-center mb-8 animate-fade-in">
            <TechArinaLogo />
            <h1 className="text-5xl md:text-7xl font-bold text-gradient mt-4">
              TechArina
            </h1>
          </div>

          {/* Main headline */}
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 animate-slide-in-left">
            Защитим ваш цифровой мир от незваных AI-атак
          </h2>

          {/* Subtitle */}
          <p
            className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            Передовые технологии кибербезопасности для защиты от AI-ботов нового
            поколения
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <Button
              size="lg"
              className="text-lg px-8 py-4 bg-primary hover:bg-primary/90 cyber-glow hover-scale group"
              onClick={() => scrollToSection("contact")}
            >
              <span className="flex items-center">
                Запросить консультацию
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover-scale group"
              onClick={() => scrollToSection("about")}
            >
              <span className="flex items-center">
                Узнать больше
                <ChevronDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </span>
            </Button>
          </div>
        </div>
      </div>

      <ScrollIndicator />
    </div>
  );
};

export default Hero;
