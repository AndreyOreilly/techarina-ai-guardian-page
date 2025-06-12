import { Linkedin, Globe, Award } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Арина",
      role: "CEO & Founder",
      experience: "Эксперт в AI и инновациях",
      background: "Основатель и визионер TechArina",
      specialization: "Инновации, AI стратегии",
      avatar: "/images/arina.JPG",
      useImage: true
    },
    {
      name: "Анна Волкова",
      role: "CEO & Co-Founder",
      experience: "15+ лет в кибербезопасности",
      background: "Бывший директор по безопасности в крупной международной корпорации",
      specialization: "Стратегическое планирование, управление рисками",
      avatar: "AV"
    },
    {
      name: "Михаил Chen",
      role: "CTO & AI Research Lead",
      experience: "12+ лет в AI/ML",
      background: "PhD в Computer Science, бывший исследователь в Google AI",
      specialization: "Машинное обучение, обнаружение аномалий",
      avatar: "MC"
    },
    {
      name: "Sarah Johnson",
      role: "Head of Threat Intelligence",
      experience: "10+ лет в киберразведке",
      background: "Бывший аналитик ЦРУ, специалист по международным угрозам",
      specialization: "Анализ угроз, кибершпионаж",
      avatar: "SJ"
    },
    {
      name: "David Kim",
      role: "Lead Security Architect",
      experience: "14+ лет в enterprise security",
      background: "Архитектор безопасности в Fortune 100 компаниях",
      specialization: "Архитектура безопасности, cloud security",
      avatar: "DK"
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Наша <span className="text-gradient">команда</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Международный штат экспертов с уникальной экспертизой в области AI и кибербезопасности
            </p>
          </div>
          
          {/* Team stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="text-center bg-secondary p-6 rounded-lg animate-fade-in">
              <div className="text-3xl font-bold text-cyber-blue mb-2">50+</div>
              <div className="text-muted-foreground">Экспертов</div>
            </div>
            <div className="text-center bg-secondary p-6 rounded-lg animate-fade-in" style={{animationDelay: '0.1s'}}>
              <div className="text-3xl font-bold text-cyber-green mb-2">15+</div>
              <div className="text-muted-foreground">Стран</div>
            </div>
            <div className="text-center bg-secondary p-6 rounded-lg animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="text-3xl font-bold text-cyber-purple mb-2">200+</div>
              <div className="text-muted-foreground">Проектов</div>
            </div>
            <div className="text-center bg-secondary p-6 rounded-lg animate-fade-in" style={{animationDelay: '0.3s'}}>
              <div className="text-3xl font-bold text-cyber-blue mb-2">24/7</div>
              <div className="text-muted-foreground">Поддержка</div>
            </div>
          </div>
          
          {/* Team members */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-background p-6 rounded-xl hover-scale cyber-glow group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Avatar */}
                {member.useImage ? (
                  <div className="w-32 h-32 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <img 
                      src={member.avatar} 
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                ) : (
                  <div className="w-20 h-20 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {member.avatar}
                  </div>
                )}
                
                {/* Name and role */}
                <h3 className="text-xl font-bold text-foreground text-center mb-2">
                  {member.name}
                </h3>
                <p className="text-primary text-center mb-3 font-medium">
                  {member.role}
                </p>
                
                {/* Experience */}
                <div className="text-sm text-muted-foreground space-y-2">
                  <div className="flex items-center">
                    <Award className="w-4 h-4 text-cyber-green mr-2" />
                    {member.experience}
                  </div>
                  <p className="leading-relaxed">{member.background}</p>
                  <p className="text-cyber-blue font-medium">{member.specialization}</p>
                </div>
                
                {/* Social links */}
                <div className="flex justify-center space-x-3 mt-4 pt-4 border-t border-border">
                  <Linkedin className="w-5 h-5 text-muted-foreground hover:text-cyber-blue cursor-pointer transition-colors" />
                  <Globe className="w-5 h-5 text-muted-foreground hover:text-cyber-green cursor-pointer transition-colors" />
                </div>
              </div>
            ))}
          </div>
          
          {/* Team description */}
          <div className="bg-gradient-to-r from-cyber-blue/10 to-cyber-purple/10 p-8 rounded-xl animate-fade-in">
            <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
              Международная экспертиза
            </h3>
            <p className="text-lg text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed">
              Наша команда объединяет специалистов из ведущих технологических компаний, 
              государственных учреждений и академических институтов со всего мира. 
              Это позволяет нам понимать угрозы на глобальном уровне и предлагать 
              решения, адаптированные к специфике различных регионов и отраслей.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
