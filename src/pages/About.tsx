import { useState, useEffect } from 'react';
import { ChevronRight, Loader2, Building, Shield, Target, Eye, ShieldCheck, Award, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { contentService } from '@/services/contentService';
import { InstitutionalPage } from '@/types/api';
import { normalizeCmsText } from '@/utils/multilingual';
import Layout from '@/components/layout/Layout';
import heroAbout from '@/assets/hero-about.png';

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

const About = () => {
  const { t, language } = useLanguage();
  const location = useLocation();
  const [pages, setPages] = useState<Record<string, InstitutionalPage>>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadPages();
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') loadPages();
    };
    const handleFocus = () => loadPages();
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('focus', handleFocus);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('focus', handleFocus);
    };
  }, []);

  // Scroll to anchor on hash change
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 300);
      }
    }
  }, [location.hash, isLoading]);

  const loadPages = async () => {
    try {
      setIsLoading(true);
      const response = await contentService.getPages();
      if (response.error === false && response.data && Array.isArray(response.data)) {
        const pagesMap: Record<string, InstitutionalPage> = {};
        response.data.forEach(page => { pagesMap[page.slug] = page; });
        setPages(pagesMap);
      }
    } catch (error: any) {
      console.error('Erreur lors du chargement des pages:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getContent = (page: InstitutionalPage | undefined, field: 'title' | 'content'): string => {
    if (!page) return '';
    const content = page[field];
    if (typeof content === 'object' && content !== null) {
      return normalizeCmsText(content[language] || content.fr || content.en || '');
    }
    return '';
  };

  const values = [
    {
      icon: ShieldCheck,
      title: t('about.values.prevention'),
      description: t('about.values.prevention.desc'),
    },
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
  ];

  const presentationPage = pages['presentation'];
  const contextePage = pages['contexte'];
  const visionPage = pages['vision'];
  const missionPage = pages['mission'];

  return (
    <Layout>
      {/* Hero Section - Clean title only */}
      <section className="relative overflow-hidden py-16 md:py-20">
        <div className="absolute inset-0">
          <img src={heroAbout} alt="Qui sommes-nous" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-gradient opacity-80" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <motion.nav
            className="flex items-center gap-2 text-white/60 text-sm mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <Link to="/" className="hover:text-white transition-colors">{t('nav.home')}</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white">{t('nav.about')}</span>
          </motion.nav>
          
          <motion.h1 
            className="font-display text-4xl md:text-5xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t('nav.about')}
          </motion.h1>
        </div>
      </section>

      {/* Section 1: Présentation générale */}
      <section id="presentation" className="min-h-[85vh] flex items-center section-padding bg-background">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            {isLoading ? (
              <div className="flex justify-center items-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : (
              <div className="grid md:grid-cols-5 gap-12 items-center">
                <motion.div 
                  className="md:col-span-3 space-y-6"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                    {getContent(presentationPage, 'title') || t('about.intro')}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed whitespace-pre-line">
                    {getContent(presentationPage, 'content') || t('about.intro.text')}
                  </p>
                </motion.div>
                <motion.div
                  className="md:col-span-2"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <div className="w-full aspect-square rounded-3xl hero-gradient p-8 border border-white/20 relative overflow-hidden">
                    <motion.div
                      className="absolute -inset-10 rounded-full border border-white/15"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    />
                    <motion.div
                      className="absolute inset-6 rounded-full border border-white/20"
                      animate={{ rotate: -360 }}
                      transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        className="w-24 h-24 rounded-2xl bg-white/15 border border-white/30 flex items-center justify-center backdrop-blur-sm"
                        animate={{ y: [0, -6, 0], scale: [1, 1.03, 1] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                      >
                        <Building className="h-10 w-10 text-white" />
                      </motion.div>
                    </div>
                    <motion.div
                      className="absolute top-6 right-6 w-12 h-12 rounded-xl bg-white/10 border border-white/30 flex items-center justify-center"
                      animate={{ y: [0, -5, 0], rotate: [0, 6, 0] }}
                      transition={{ duration: 5, repeat: Infinity }}
                    >
                      <Shield className="h-6 w-6 text-white" />
                    </motion.div>
                    <motion.div
                      className="absolute bottom-8 left-8 w-12 h-12 rounded-xl bg-white/10 border border-white/30 flex items-center justify-center"
                      animate={{ y: [0, 5, 0], rotate: [0, -6, 0] }}
                      transition={{ duration: 5.5, repeat: Infinity }}
                    >
                      <Target className="h-6 w-6 text-white" />
                    </motion.div>
                    <motion.div
                      className="absolute bottom-6 right-10 w-10 h-10 rounded-lg bg-secondary/40 border border-white/25 flex items-center justify-center"
                      animate={{ scale: [1, 1.15, 1], opacity: [0.75, 1, 0.75] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <Eye className="h-5 w-5 text-white" />
                    </motion.div>
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/15 to-transparent" />
                    <div className="absolute bottom-5 left-6 right-6 text-center">
                      <p className="text-white/90 text-sm tracking-wide uppercase font-medium">
                        Safety. Sante. Excellence.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Section 2: Contexte de création */}
      <section id="contexte" className="min-h-[85vh] flex items-center section-padding bg-muted/50">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                {isLoading ? <Loader2 className="h-6 w-6 animate-spin inline-block" /> : getContent(contextePage, 'title') || t('about.context.title')}
              </h2>
              <div className="bg-card rounded-2xl border border-border p-8 md:p-12 shadow-sm">
                <div className="w-14 h-14 rounded-xl hero-gradient flex items-center justify-center mb-6">
                  <Shield className="h-7 w-7 text-white" />
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed whitespace-pre-line">
                  {isLoading ? '' : getContent(contextePage, 'content') || t('about.context.text')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Mission & But */}
      <section id="mission" className="min-h-[85vh] flex items-center section-padding bg-background">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                className="bg-card rounded-2xl border border-border p-8 shadow-sm space-y-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-14 h-14 rounded-xl hero-gradient flex items-center justify-center">
                  <Target className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  {isLoading ? <Loader2 className="h-5 w-5 animate-spin inline-block" /> : getContent(missionPage, 'title') || t('about.mission.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {isLoading ? '' : getContent(missionPage, 'content') || t('about.mission.text')}
                </p>
              </motion.div>

              <motion.div 
                className="bg-card rounded-2xl border border-border p-8 shadow-sm space-y-4"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="w-14 h-14 rounded-xl hero-gradient flex items-center justify-center">
                  <Eye className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  {t('about.goal.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('about.goal.text')}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Vision 2030 */}
      <section id="vision" className="min-h-[70vh] flex items-center hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <h2 className="font-display text-3xl md:text-5xl font-bold text-white">
                {isLoading ? <Loader2 className="h-8 w-8 animate-spin inline-block" /> : getContent(visionPage, 'title') || t('about.vision.title')}
              </h2>
              <p className="text-white/85 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto whitespace-pre-line">
                {isLoading ? '' : getContent(visionPage, 'content') || t('about.vision.text')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 5: Valeurs */}
      <section id="valeurs" className="min-h-[85vh] flex items-center section-padding bg-background">
        <div className="container mx-auto">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              {t('about.values.title')}
            </h2>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                className="card-institutional"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="w-14 h-14 rounded-xl hero-gradient flex items-center justify-center mb-4">
                  <value.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
