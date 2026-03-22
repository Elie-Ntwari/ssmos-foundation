import { useState, useEffect } from 'react';
import { ChevronRight, Loader2, Building, Shield, Target, Eye, ShieldCheck, Award, Lightbulb, Heart, Users, Handshake } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { contentService } from '@/services/contentService';
import { InstitutionalPage } from '@/types/api';
import { normalizeCmsText } from '@/utils/multilingual';
import Layout from '@/components/layout/Layout';
import heroPresentation from '@/assets/hero-about-presentation.jpg';
import heroContext from '@/assets/hero-about-context.jpg';
import heroMission from '@/assets/hero-about-mission.jpg';
import heroVision from '@/assets/hero-about-vision.jpg';
import heroValues from '@/assets/hero-about-values.jpg';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
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
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Award,
      title: t('about.values.excellence'),
      description: t('about.values.excellence.desc'),
      color: 'from-cyan-500 to-teal-500',
    },
    {
      icon: Shield,
      title: t('about.values.integrity'),
      description: t('about.values.integrity.desc'),
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: Lightbulb,
      title: t('about.values.innovation'),
      description: t('about.values.innovation.desc'),
      color: 'from-teal-500 to-emerald-500',
    },
  ];

  const presentationPage = pages['presentation'];
  const contextePage = pages['contexte'];
  const visionPage = pages['vision'];
  const missionPage = pages['mission'];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-20">
        <div className="absolute inset-0">
          <img src={heroPresentation} alt="Qui sommes-nous" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-gradient opacity-85 backdrop-blur-[2px]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
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
      <section id="presentation" className="min-h-[70vh] md:min-h-[85vh] flex items-start md:items-center section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {isLoading ? (
              <div className="flex justify-center items-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : (
              <div className="grid md:grid-cols-5 gap-6 md:gap-12 items-start md:items-center">
                <motion.div 
                  className="md:col-span-3 space-y-4 md:space-y-6"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10">
                    <Building className="h-4 w-4 text-primary" />
                    <span className="text-primary text-sm font-medium">{t('about.nav.presentation')}</span>
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                    {getContent(presentationPage, 'title') || t('about.intro')}
                  </h2>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed text-justify whitespace-pre-line">
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
                  <div className="w-full aspect-square rounded-2xl md:rounded-3xl overflow-hidden relative group">
                    <img src={heroPresentation} alt="Présentation SSMos" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 hero-gradient opacity-60" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        className="w-24 h-24 rounded-2xl bg-white/15 border border-white/30 flex items-center justify-center backdrop-blur-sm"
                        animate={{ y: [0, -6, 0], scale: [1, 1.03, 1] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                      >
                        <Building className="h-10 w-10 text-white" />
                      </motion.div>
                    </div>
                    <div className="absolute bottom-5 left-6 right-6 text-center">
                      <p className="text-white/90 text-sm tracking-wide uppercase font-medium">
                        Safety. Santé. Excellence.
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
      <section id="contexte" className="relative overflow-hidden">
        {/* Hero banner for this section */}
        <div className="relative py-16 md:py-20">
          <div className="absolute inset-0">
            <img src={heroContext} alt="Contexte" className="w-full h-full object-cover" />
            <div className="absolute inset-0 hero-gradient opacity-85 backdrop-blur-[2px]" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.h2 
              className="font-display text-3xl md:text-5xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {isLoading ? <Loader2 className="h-6 w-6 animate-spin inline-block" /> : getContent(contextePage, 'title') || t('about.context.title')}
            </motion.h2>
          </div>
        </div>
        <div className="section-padding bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <motion.div
                className="bg-card rounded-2xl border border-border p-6 md:p-12 shadow-sm"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl hero-gradient flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                  <p className="min-w-0 break-words text-muted-foreground text-base md:text-lg leading-relaxed text-justify whitespace-pre-line">
                    {isLoading ? '' : getContent(contextePage, 'content') || t('about.context.text')}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Mission & But */}
      <section id="mission" className="relative overflow-hidden">
        <div className="relative py-16 md:py-20">
          <div className="absolute inset-0">
            <img src={heroMission} alt="Mission" className="w-full h-full object-cover" />
            <div className="absolute inset-0 hero-gradient opacity-85 backdrop-blur-[2px]" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.h2 
              className="font-display text-3xl md:text-5xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {t('about.mission.title')} & {t('about.goal.title')}
            </motion.h2>
          </div>
        </div>
        <div className="section-padding bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                <motion.div 
                  className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-all duration-300 space-y-4 md:space-y-5"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl hero-gradient flex items-center justify-center">
                    <Target className="h-6 w-6 md:h-7 md:w-7 text-white" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    {isLoading ? <Loader2 className="h-5 w-5 animate-spin inline-block" /> : getContent(missionPage, 'title') || t('about.mission.title')}
                  </h3>
                  <p className="text-muted-foreground text-base md:text-[1rem] leading-relaxed text-justify whitespace-pre-line">
                    {isLoading ? '' : getContent(missionPage, 'content') || t('about.mission.text')}
                  </p>
                  <div className="flex items-center gap-3 pt-2">
                    <div className="flex -space-x-2">
                      {[Users, Heart, Handshake].map((Icon, i) => (
                        <div key={i} className="w-7 h-7 md:w-8 md:h-8 rounded-full hero-gradient flex items-center justify-center border-2 border-card">
                          <Icon className="h-3 w-3 md:h-3.5 md:w-3.5 text-white" />
                        </div>
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground font-medium">{t('about.nav.mission')}</span>
                  </div>
                </motion.div>

                <motion.div 
                  className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-all duration-300 space-y-4 md:space-y-5"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center">
                    <Eye className="h-6 w-6 md:h-7 md:w-7 text-white" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    {t('about.goal.title')}
                  </h3>
                  <p className="text-muted-foreground text-base md:text-[1rem] leading-relaxed text-justify">
                    {t('about.goal.text')}
                  </p>
                  <div className="flex items-center gap-3 pt-2">
                    <div className="flex -space-x-2">
                      {[Shield, Target, Eye].map((Icon, i) => (
                        <div key={i} className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center border-2 border-card">
                          <Icon className="h-3 w-3 md:h-3.5 md:w-3.5 text-white" />
                        </div>
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground font-medium">{t('about.nav.goal')}</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Vision 2030 */}
      <section id="vision" className="relative overflow-hidden">
        <div className="relative min-h-[70vh] flex items-center">
          <div className="absolute inset-0">
            <img src={heroVision} alt="Vision 2030" className="w-full h-full object-cover" />
            <div className="absolute inset-0 hero-gradient opacity-85 backdrop-blur-[2px]" />
          </div>
          <div className="container mx-auto px-4 relative z-10 py-20">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="space-y-8"
              >
                <motion.div 
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  <Eye className="h-4 w-4 text-secondary" />
                  <span className="text-white/90 text-sm font-medium">{t('about.nav.vision')}</span>
                </motion.div>
                <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-white">
                  {isLoading ? <Loader2 className="h-8 w-8 animate-spin inline-block" /> : getContent(visionPage, 'title') || t('about.vision.title')}
                </h2>
                <p className="text-white/85 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-justify whitespace-pre-line">
                  {isLoading ? '' : getContent(visionPage, 'content') || t('about.vision.text')}
                </p>
                <motion.div
                  className="w-24 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto"
                  animate={{ scaleX: [0.7, 1, 0.7], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Valeurs */}
      <section id="valeurs" className="relative overflow-hidden">
        <div className="relative py-16 md:py-20">
          <div className="absolute inset-0">
            <img src={heroValues} alt="Nos valeurs" className="w-full h-full object-cover" />
            <div className="absolute inset-0 hero-gradient opacity-85 backdrop-blur-[2px]" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.h2 
              className="font-display text-3xl md:text-5xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {t('about.values.title')}
            </motion.h2>
          </div>
        </div>
        <div className="section-padding bg-background">
          <div className="container mx-auto px-4">
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  className="relative bg-card rounded-2xl border border-border p-5 md:p-6 shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-all duration-300 group overflow-hidden"
                  variants={fadeInUp}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  {/* Top accent bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${value.color}`} />
                  
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl hero-gradient flex items-center justify-center mb-4 md:mb-5 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-7 w-7 md:h-8 md:w-8 text-white" />
                  </div>
                  <h3 className="font-display text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                    {value.description}
                  </p>
                  
                  {/* Index number */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center">
                    <span className="text-xs font-bold text-muted-foreground">0{index + 1}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
