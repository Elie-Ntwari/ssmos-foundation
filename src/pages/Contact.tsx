import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import Layout from '@/components/layout/Layout';

const Contact = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: t('contact.form.success'),
      description: language === 'en' 
        ? 'We will get back to you shortly.' 
        : 'Nous vous répondrons dans les plus brefs délais.',
    });

    // Reset after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: t('contact.info.address'),
      value: '123 Avenue de la Paix, Gombe\nKinshasa, RDC',
    },
    {
      icon: Phone,
      label: t('contact.info.phone'),
      value: '+243 812 345 678',
    },
    {
      icon: Mail,
      label: t('contact.info.email'),
      value: 'contact@ssmos.cd',
    },
    {
      icon: Clock,
      label: t('contact.info.hours'),
      value: language === 'en' 
        ? 'Mon - Fri: 8:00 AM - 5:00 PM' 
        : 'Lun - Ven : 8h00 - 17h00',
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 opacity-0 animate-fade-up">
            {t('contact.title')}
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto opacity-0 animate-fade-up stagger-1">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card-institutional">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                {language === 'en' ? 'Send us a message' : 'Envoyez-nous un message'}
              </h2>
              
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                    <CheckCircle className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {t('contact.form.success')}
                  </h3>
                  <p className="text-muted-foreground">
                    {language === 'en' 
                      ? 'We will get back to you shortly.' 
                      : 'Nous vous répondrons dans les plus brefs délais.'}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Label htmlFor="name">{t('contact.form.name')}</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      className="mt-1.5"
                      placeholder={language === 'en' ? 'John Doe' : 'Jean Dupont'}
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">{t('contact.form.email')}</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="mt-1.5"
                      placeholder="exemple@email.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject">{t('contact.form.subject')}</Label>
                    <Input
                      id="subject"
                      name="subject"
                      required
                      className="mt-1.5"
                      placeholder={language === 'en' ? 'How can we help?' : 'Comment pouvons-nous vous aider ?'}
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">{t('contact.form.message')}</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="mt-1.5 resize-none"
                      placeholder={language === 'en' ? 'Your message...' : 'Votre message...'}
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full btn-hero-primary bg-primary hover:bg-primary/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        {language === 'en' ? 'Sending...' : 'Envoi en cours...'}
                      </span>
                    ) : (
                      <>
                        {t('contact.form.submit')}
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              {/* Info Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((info) => (
                  <div key={info.label} className="card-institutional">
                    <div className="w-10 h-10 rounded-lg hero-gradient flex items-center justify-center mb-3">
                      <info.icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-foreground text-sm mb-1">
                      {info.label}
                    </h3>
                    <p className="text-muted-foreground text-sm whitespace-pre-line">
                      {info.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="card-institutional h-64 flex items-center justify-center bg-muted/50">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-muted-foreground/50 mx-auto mb-2" />
                  <p className="text-muted-foreground text-sm">
                    {language === 'en' ? 'Interactive map' : 'Carte interactive'}
                  </p>
                  <p className="text-muted-foreground/70 text-xs mt-1">
                    Kinshasa, Gombe
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
