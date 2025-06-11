
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в течение 24 часов.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Свяжитесь с <span className="text-gradient">нами</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Готовы обсудить защиту вашего бизнеса от AI-угроз? Наши эксперты проведут 
              бесплатную консультацию и подберут оптимальное решение.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact form */}
            <div className="animate-slide-in-left">
              <div className="bg-background p-8 rounded-xl cyber-glow">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Запросить консультацию
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Имя *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="Ваше имя"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Компания
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="Название компании"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Сообщение
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="Расскажите о ваших потребностях в области кибербезопасности..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 cyber-glow hover-scale"
                  >
                    Отправить заявку
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </div>
            </div>
            
            {/* Contact information */}
            <div className="animate-fade-in">
              <div className="space-y-8">
                {/* Contact details */}
                <div className="bg-background p-8 rounded-xl cyber-glow">
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    Контактная информация
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-lg flex items-center justify-center mr-4">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-foreground font-semibold">Email</p>
                        <p className="text-muted-foreground">contact@techarina.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyber-green to-cyber-blue rounded-lg flex items-center justify-center mr-4">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-foreground font-semibold">Телефон</p>
                        <p className="text-muted-foreground">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyber-purple to-cyber-green rounded-lg flex items-center justify-center mr-4">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-foreground font-semibold">Офис</p>
                        <p className="text-muted-foreground">Сан-Франциско, США<br />Москва, Россия</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Quick stats */}
                <div className="bg-gradient-to-r from-cyber-blue/10 to-cyber-purple/10 p-8 rounded-xl">
                  <h4 className="text-xl font-bold text-foreground mb-4">
                    Быстрые факты
                  </h4>
                  <div className="space-y-3 text-muted-foreground">
                    <p>✓ Бесплатная консультация в течение 24 часов</p>
                    <p>✓ Индивидуальный план защиты для каждого клиента</p>
                    <p>✓ Поддержка 24/7 на русском и английском языках</p>
                    <p>✓ Внедрение решения за 48 часов</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-border text-center animate-fade-in">
            <p className="text-muted-foreground">
              © 2024 TechArina. Все права защищены. Создано для защиты цифрового мира.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
