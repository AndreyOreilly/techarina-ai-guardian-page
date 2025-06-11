
import { Shield, Eye, TrendingUp } from 'lucide-react';

const Values = () => {
  const values = [
    {
      icon: Shield,
      title: "Надежность и инновации",
      description: "Мы внедряем самые современные технологии, обеспечивая максимальную надежность и эффективность наших решений.",
      gradient: "from-cyber-blue to-cyber-purple"
    },
    {
      icon: Eye,
      title: "Прозрачность и ответственность",
      description: "Открытость в работе с клиентами, честность в оценках и полная ответственность за результаты нашей деятельности.",
      gradient: "from-cyber-green to-cyber-blue"
    },
    {
      icon: TrendingUp,
      title: "Постоянное совершенствование и обучение",
      description: "Непрерывное развитие команды, изучение новых угроз и адаптация к изменяющемуся ландшафту кибербезопасности.",
      gradient: "from-cyber-purple to-cyber-green"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Наши <span className="text-gradient">ценности</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Принципы, которые определяют нашу работу и отношения с клиентами
            </p>
          </div>
          
          {/* Values grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="group bg-card p-8 rounded-xl hover-scale cyber-glow transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${value.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {value.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Additional content */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-cyber-blue/10 to-cyber-purple/10 p-8 rounded-xl animate-fade-in">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Почему выбирают TechArina?
              </h3>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Наши ценности не просто слова на сайте — это основа каждого решения, которое мы принимаем. 
                Мы строим долгосрочные отношения с клиентами, основанные на доверии, экспертизе и 
                непрерывном стремлении к совершенству в области кибербезопасности.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
