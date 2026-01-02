import { Link } from 'react-router-dom';
import { ArrowRight, Shield, GraduationCap, ClipboardCheck, Scale, Cpu, Factory, Building2, Truck, Hospital, Pickaxe, Leaf } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { stats, articles, interventionAreas } from '@/data/mockData';
import Layout from '@/components/layout/Layout';

const iconMap: Record<string, any> = {
  Factory, Building2, Truck, Hospital, Pickaxe, Leaf,
  Briefcase: Shield, GraduationCap, ClipboardCheck, Scale, Cpu
};

const Index = () => {
  const { t, language } = useLanguage();

  const latestArticles = articles.slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative hero-gradient min-h-[85vh] flex items-center overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/20 to-transparent" />
          <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-secondary rounded-full animate-pulse" />
          <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-secondary/50 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 opacity-0 animate-fade-up">
              {t('hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-white/85 mb-8 leading-relaxed opacity-0 animate-fade-up stagger-1">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up stagger-2">
              <Button asChild size="lg" className="btn-hero-primary">
                <Link to="/services">
                  {t('hero.cta.primary')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="btn-hero-secondary">
                <Link to="/contact">
                  {t('hero.cta.secondary')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t('home.about.title')}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {t('home.about.description')}
            </p>
            <Button asChild variant="outline">
              <Link to="/about">
                {t('services.learnMore')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Intervention Areas */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            {t('home.axes.title')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {interventionAreas.map((area, index) => {
              const IconComponent = iconMap[area.icon] || Factory;
              return (
                <div
                  key={area.title}
                  className="card-institutional group opacity-0 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 rounded-xl hero-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {language === 'en' ? area.titleEn : area.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {language === 'en' ? area.descriptionEn : area.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding hero-gradient">
        <div className="container mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white text-center mb-12">
            {t('home.stats.title')}
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: stats.companies, label: t('stats.companies'), suffix: '+' },
              { value: stats.trainings, label: t('stats.trainings'), suffix: '+' },
              { value: stats.experts, label: t('stats.experts'), suffix: '' },
              { value: stats.years, label: t('stats.years'), suffix: '' },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="font-display text-4xl md:text-5xl font-bold text-secondary mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-white/80 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              {t('home.news.title')}
            </h2>
            <Button asChild variant="outline" className="hidden sm:flex">
              <Link to="/news">
                {t('home.news.viewAll')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestArticles.map((article, index) => (
              <Link
                key={article.id}
                to={`/news/${article.id}`}
                className="card-institutional group opacity-0 animate-fade-up overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden rounded-lg mb-4 -mt-2 -mx-2">
                  <img
                    src={article.image}
                    alt={language === 'en' ? article.titleEn : article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded-full">
                    {t(`news.category.${article.category}`)}
                  </span>
                  <span className="text-muted-foreground text-xs">
                    {new Date(article.date).toLocaleDateString(language === 'en' ? 'en-US' : 'fr-FR')}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-secondary transition-colors line-clamp-2 mb-2">
                  {language === 'en' ? article.titleEn : article.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {language === 'en' ? article.excerptEn : article.excerpt}
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Button asChild variant="outline">
              <Link to="/news">
                {t('home.news.viewAll')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-accent">
        <div className="container mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            {language === 'en' ? 'Ready to improve your workplace safety?' : 'Prêt à améliorer votre sécurité au travail ?'}
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            {language === 'en'
              ? 'Contact our team of experts to discuss your needs and discover our tailored solutions.'
              : 'Contactez notre équipe d\'experts pour discuter de vos besoins et découvrir nos solutions sur mesure.'}
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

export default Index;
