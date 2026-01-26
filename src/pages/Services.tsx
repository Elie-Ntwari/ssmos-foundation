import { Link, useParams } from 'react-router-dom';
import { Briefcase, GraduationCap, ClipboardCheck, Scale, Cpu, ArrowRight, CheckCircle, ArrowLeft, Search, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { services } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';

const iconMap: Record<string, any> = {
  Briefcase, GraduationCap, ClipboardCheck, Scale, Cpu, Search, MessageSquare
};

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
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
            <h1 className="font-display text-2xl font-bold text-foreground">
              {language === 'en' ? 'Service not found' : 'Service non trouvé'}
            </h1>
            <Button asChild className="mt-4">
              <Link to="/services">{t('services.backToServices')}</Link>
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
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Button asChild variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10 mb-6">
                <Link to="/services">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  {t('services.backToServices')}
                </Link>
              </Button>
            </motion.div>
            <motion.div 
              className="flex items-center gap-4 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center">
                <IconComponent className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-white">
                {language === 'en' ? service.titleEn : service.title}
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <div className="max-w-4xl">
              <motion.p 
                className="text-lg text-muted-foreground leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {language === 'en' ? service.fullDescEn : service.fullDesc}
              </motion.p>
              
              <motion.h2 
                className="font-display text-2xl font-bold text-foreground mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {t('services.whatWeOffer')}
              </motion.h2>
              <motion.div 
                className="grid sm:grid-cols-2 gap-4 mb-8"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                {features.map((feature, index) => (
                  <motion.div 
                    key={feature} 
                    className="flex items-start gap-3 p-4 bg-accent rounded-lg"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  >
                    <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link to="/contact">
                    {t('hero.cta.secondary')}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
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
          <motion.h1 
            className="font-display text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t('services.title')}
          </motion.h1>
          <motion.p 
            className="text-white/80 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {t('services.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <motion.div 
            className="grid gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Briefcase;
              return (
                <motion.div
                  key={service.id}
                  className="card-institutional flex flex-col md:flex-row gap-6"
                  variants={fadeInUp}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
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
                    <Button asChild variant="outline" className="group">
                      <Link to={`/services/${service.id}`}>
                        {t('services.learnMore')}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-accent">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              {t('cta.needSolution')}
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              {t('cta.needSolution.desc')}
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link to="/contact">
                {t('hero.cta.secondary')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
