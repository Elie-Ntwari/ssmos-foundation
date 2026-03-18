import { useState, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { Briefcase, GraduationCap, ClipboardCheck, Scale, Cpu, ArrowRight, CheckCircle, ArrowLeft, Search, MessageSquare, Loader2, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { contentService } from '@/services/contentService';
import { Service } from '@/types/api';
import { Button } from '@/components/ui/button';
import { getFormattedMultilingualContent as getContent } from '@/utils/multilingual';
import Layout from '@/components/layout/Layout';
import heroServices from '@/assets/hero-services.png';

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
  const location = useLocation();
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadServices();
  }, []);

  // Scroll to anchor when hash changes
  useEffect(() => {
    if (location.hash && !isLoading) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 300);
      }
    }
  }, [location.hash, isLoading]);

  const loadServices = async () => {
    try {
      setIsLoading(true);
      const response = await contentService.getServices();
      if (response.error === false && response.data && Array.isArray(response.data)) {
        const activeServices = response.data.filter(service => service.is_active);
        setServices(activeServices);
      } else {
        setServices([]);
      }
    } catch (error: any) {
      console.error('Erreur lors du chargement des services:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getMultilingualContent = (content: { fr?: string; en?: string; ln?: string; sw?: string }): string => {
    return getContent(content, language);
  };

  const getServiceIcon = (service: Service): string => {
    // Try to get icon from category mapping
    const categoryIconMap: Record<string, string> = {
      'cabinet': 'Briefcase',
      'training': 'GraduationCap',
      'research': 'Search',
      'audit': 'ClipboardCheck',
      'conseil': 'MessageSquare',
      'digital': 'Cpu',
    };
    return categoryIconMap[service.category] || 'Briefcase';
  };

  if (id) {
    const service = services.find(s => s.id === parseInt(id));
    
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

    const iconName = getServiceIcon(service);
    const IconComponent = iconMap[iconName] || Briefcase;

    return (
      <Layout>
        <section className="relative overflow-hidden py-16 md:py-20">
          <div className="absolute inset-0">
            <img src={heroServices} alt="Services SSMos" className="w-full h-full object-cover" />
            <div className="absolute inset-0 hero-gradient opacity-80" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-white/60 text-sm mb-6">
              <Link to="/" className="hover:text-white transition-colors">{t('nav.home')}</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <Link to="/services" className="hover:text-white transition-colors">{t('nav.services')}</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-white">{getMultilingualContent(service.title)}</span>
            </nav>
            <motion.div 
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center">
                <IconComponent className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-white">
                {getMultilingualContent(service.title)}
              </h1>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <div className="max-w-4xl">
              <motion.p 
                className="text-lg text-muted-foreground leading-relaxed mb-8 whitespace-pre-line"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {getMultilingualContent(service.description)}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
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

  return (
    <Layout>
      <section className="relative overflow-hidden py-16 md:py-20">
        <div className="absolute inset-0">
          <img src={heroServices} alt="Services SSMos" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-gradient opacity-80" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <nav className="flex items-center gap-2 text-white/60 text-sm mb-6">
            <Link to="/" className="hover:text-white transition-colors">{t('nav.home')}</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white">{t('nav.services')}</span>
          </nav>
          <motion.h1 
            className="font-display text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {t('services.title')}
          </motion.h1>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto">
          {isLoading ? (
            <div className="flex justify-center items-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : (
            <motion.div 
              className="grid gap-4 sm:gap-6 md:gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {services.map((service) => {
                const iconName = getServiceIcon(service);
                const IconComponent = iconMap[iconName] || Briefcase;
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
                        {getMultilingualContent(service.title)}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed mb-4 whitespace-pre-line">
                        {getMultilingualContent(service.description)}
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
              {services.length === 0 && !isLoading && (
                <div className="text-center py-12 text-muted-foreground">
                  <p>{t('services.noServices') || 'Aucun service disponible'}</p>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </section>

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
