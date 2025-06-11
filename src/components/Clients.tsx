
const Clients = () => {
  const clients = [
    {
      name: "Facebook",
      logo: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=200&h=100&fit=crop&crop=center",
      category: "Social Media"
    },
    {
      name: "Google",
      logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=200&h=100&fit=crop&crop=center",
      category: "Technology"
    },
    {
      name: "Microsoft",
      logo: "https://images.unsplash.com/photo-1633409361618-c73427e4e206?w=200&h=100&fit=crop&crop=center",
      category: "Software"
    },
    {
      name: "Amazon",
      logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=200&h=100&fit=crop&crop=center",
      category: "E-commerce"
    },
    {
      name: "Tesla",
      logo: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=200&h=100&fit=crop&crop=center",
      category: "Automotive"
    },
    {
      name: "Netflix",
      logo: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=200&h=100&fit=crop&crop=center",
      category: "Entertainment"
    }
  ];

  const achievements = [
    {
      number: "99.9%",
      label: "Точность обнаружения",
      description: "AI-атак в реальном времени"
    },
    {
      number: "< 1ms",
      label: "Время отклика",
      description: "Системы защиты"
    },
    {
      number: "500M+",
      label: "Заблокированных атак",
      description: "За последний год"
    },
    {
      number: "0",
      label: "Ложных срабатываний",
      description: "У 95% клиентов"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Наши <span className="text-gradient">клиенты</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Доверие ведущих мировых компаний и результаты, говорящие сами за себя
            </p>
          </div>
          
          {/* Client logos */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground text-center mb-8 animate-fade-in">
              Партнеры и клиенты
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {clients.map((client, index) => (
                <div 
                  key={index}
                  className="group bg-card p-6 rounded-lg hover-scale cyber-glow transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-lg flex items-center justify-center text-white font-bold text-lg mb-3 mx-auto group-hover:scale-110 transition-transform duration-300">
                      {client.name.substring(0, 2)}
                    </div>
                    <h4 className="font-bold text-foreground text-sm mb-1">
                      {client.name}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {client.category}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Achievements */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground text-center mb-8 animate-fade-in">
              Результаты нашей работы
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="text-center bg-card p-6 rounded-lg hover-scale cyber-glow animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-lg font-semibold text-foreground mb-2">
                    {achievement.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {achievement.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Testimonial */}
          <div className="bg-gradient-to-r from-cyber-blue/10 to-cyber-purple/10 p-8 rounded-xl animate-fade-in">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Что говорят наши клиенты
              </h3>
              <blockquote className="text-lg text-muted-foreground italic max-w-4xl mx-auto leading-relaxed mb-6">
                "TechArina помогла нам выявить и предотвратить более 10 миллионов потенциальных AI-атак 
                за первые три месяца внедрения. Их решение работает как часы и практически не требует 
                вмешательства наших специалистов."
              </blockquote>
              <div className="text-foreground font-semibold">
                — CISO крупной технологической компании
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
