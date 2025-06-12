import { Shield, Brain, Globe } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              О компании <span className="text-gradient">TechArina</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Лидер в области обнаружения и защиты от AI-бот атак
            </p>
          </div>

          {/* Main content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Кто мы такие
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                TechArina объединяет ведущих экспертов в области
                кибербезопасности и AI-технологий. Наша команда имеет богатый
                опыт работы с крупнейшими мировыми компаниями, включая Fortune
                500 и технологических гигантов.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Мы специализируемся на разработке и внедрении передовых решений
                для защиты от новых типов угроз, связанных с искусственным
                интеллектом и автоматизированными атаками.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Наш подход сочетает глубокое понимание алгоритмов машинного
                обучения с практическим опытом в области информационной
                безопасности.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 animate-fade-in">
              <div className="bg-secondary p-6 rounded-lg hover-scale cyber-glow">
                <Shield className="w-12 h-12 text-cyber-blue mb-4" />
                <h4 className="text-xl font-bold text-foreground mb-2">
                  Защита от AI-угроз
                </h4>
                <p className="text-muted-foreground">
                  Передовые методы обнаружения и нейтрализации AI-ботов и
                  автоматизированных атак
                </p>
              </div>

              <div className="bg-secondary p-6 rounded-lg hover-scale cyber-glow">
                <Brain className="w-12 h-12 text-cyber-green mb-4" />
                <h4 className="text-xl font-bold text-foreground mb-2">
                  AI-экспертиза
                </h4>
                <p className="text-muted-foreground">
                  Глубокие знания в области машинного обучения и нейронных сетей
                </p>
              </div>

              <div className="bg-secondary p-6 rounded-lg hover-scale cyber-glow">
                <Globe className="w-12 h-12 text-cyber-purple mb-4" />
                <h4 className="text-xl font-bold text-foreground mb-2">
                  Международный опыт
                </h4>
                <p className="text-muted-foreground">
                  Работа с клиентами по всему миру и понимание глобальных угроз
                </p>
              </div>
            </div>
          </div>

          {/* Mission statement */}
          <div className="text-center bg-secondary p-8 rounded-lg animate-fade-in">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Наша миссия
            </h3>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Создание безопасной цифровой среды для бизнеса и пользователей
              через инновационные решения в области защиты от AI-угроз и
              обеспечение устойчивого развития цифровых технологий.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
