import { Target, Eye, Heart, Award, Shield, Lightbulb, Users } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import Layout from '@/components/layout/Layout';

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Award,
      title: t('about.values.excellence'),
      description: t('about.values.excellence.desc'),
    },
    {
      icon: Shield,
      title: t('about.values.integrity'),
      description: t('about.values.integrity.desc'),
    },
    {
      icon: Lightbulb,
      title: t('about.values.innovation'),
      description: t('about.values.innovation.desc'),
    },
    {
      icon: Users,
      title: t('about.values.proximity'),
      description: t('about.values.proximity.desc'),
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient py-20 md:py-28">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white text-center mb-4 opacity-0 animate-fade-up">
            {t('about.title')}
          </h1>
          <p className="text-white/80 text-lg text-center max-w-2xl mx-auto opacity-0 animate-fade-up stagger-1">
            Safety & Santé na Mosala
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
              {t('about.intro')}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {t('about.intro.text')}
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card-institutional">
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {t('about.context.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('about.context.text')}
                </p>
              </div>
              <div className="card-institutional bg-accent border-secondary/20">
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {t('about.vision.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('about.vision.text')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Goal */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="w-14 h-14 rounded-xl hero-gradient flex items-center justify-center flex-shrink-0">
                <Target className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {t('about.mission.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('about.mission.text')}
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-14 h-14 rounded-xl hero-gradient flex items-center justify-center flex-shrink-0">
                <Eye className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {t('about.goal.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('about.goal.text')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            {t('about.values.title')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center card-institutional opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="section-padding hero-gradient">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <Heart className="h-12 w-12 text-secondary mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              {t('about.vision.title')}
            </h2>
            <p className="text-white/85 text-lg leading-relaxed">
              {t('about.vision.text')}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
