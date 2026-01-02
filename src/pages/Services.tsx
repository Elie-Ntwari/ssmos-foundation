import { Link, useParams } from 'react-router-dom';
import { Briefcase, GraduationCap, ClipboardCheck, Scale, Cpu, ArrowRight, CheckCircle, ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { services } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';

const iconMap: Record<string, any> = {
  Briefcase, GraduationCap, ClipboardCheck, Scale, Cpu
};

const Services = () => {
  const { t, language } = useLanguage();
  const { id } = useParams();

  // If viewing a specific service
  if (id) {
    const service = services.find(s => s.id === id);
    
    if (!service) {
      return (
        <Layout>
          <div className="section-padding text-center">
            <h1 className="font-display text-2xl font-bold text-foreground">Service non trouvé</h1>
            <Button asChild className="mt-4">
              <Link to="/services">Retour aux services</Link>
            </Button>
          </div>
        </Layout>
      );
    }

    const IconComponent = iconMap[service.icon] || Briefcase;
    const features = language === 'en' ? service.featuresEn : service.features;

    return (
      <Layout>
        {/* Hero */}
        <section className="hero-gradient py-20 md:py-28">
          <div className="container mx-auto px-4">
            <Button asChild variant="ghost" className="text-white/80 hover:text-white mb-6">
              <Link to="/services">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {language === 'en' ? 'Back to services' : 'Retour aux services'}
              </Link>
            </Button>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center">
                <IconComponent className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-white">
                {language === 'en' ? service.titleEn : service.title}
              </h1>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <div className="max-w-4xl">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {language === 'en' ? service.fullDescEn : service.fullDesc}
              </p>
              
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                {language === 'en' ? 'What we offer' : 'Ce que nous proposons'}
              </h2>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 p-4 bg-accent rounded-lg">
                    <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button asChild size="lg" className="btn-hero-primary bg-primary hover:bg-primary/90">
                <Link to="/contact">
                  {t('hero.cta.secondary')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  // Services list view
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 opacity-0 animate-fade-up">
            {t('services.title')}
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto opacity-0 animate-fade-up stagger-1">
            {t('services.subtitle')}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid gap-8">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Briefcase;
              return (
                <div
                  key={service.id}
                  className="card-institutional flex flex-col md:flex-row gap-6 opacity-0 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 rounded-xl hero-gradient flex items-center justify-center flex-shrink-0">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-display text-2xl font-bold text-foreground mb-3">
                      {language === 'en' ? service.titleEn : service.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {language === 'en' ? service.shortDescEn : service.shortDesc}
                    </p>
                    <Button asChild variant="outline">
                      <Link to={`/services/${service.id}`}>
                        {t('services.learnMore')}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-accent">
        <div className="container mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            {language === 'en' ? 'Need a tailored solution?' : 'Besoin d\'une solution sur mesure ?'}
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            {language === 'en'
              ? 'Our team is ready to analyze your needs and offer you a customized solution.'
              : 'Notre équipe est prête à analyser vos besoins et vous proposer une solution personnalisée.'}
          </p>
          <Button asChild size="lg" className="btn-hero-primary bg-primary hover:bg-primary/90">
            <Link to="/contact">
              {t('hero.cta.secondary')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
