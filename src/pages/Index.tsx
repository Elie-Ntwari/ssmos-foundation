import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, GraduationCap, ClipboardCheck, Scale, Cpu, Factory, Building2, Truck, Hospital, Pickaxe, Leaf, CheckCircle, Play, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { contentService } from '@/services/contentService';
import { NewsArticle } from '@/types/api';
import { Button } from '@/components/ui/button';
import { stats, interventionAreas } from '@/data/mockData';
import Layout from '@/components/layout/Layout';
import logo from '@/assets/logo.png';

const iconMap: Record<string, any> = {
  Factory, Building2, Truck, Hospital, Pickaxe, Leaf,
  Briefcase: Shield, GraduationCap, ClipboardCheck, Scale, Cpu
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

const Index = () => {
  const { t, language } = useLanguage();
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async () => {
    try {
      setIsLoading(true);
      const response = await contentService.getNews();
      if (response.error === false && response.data) {
        // Filtrer seulement les articles publiés
        const publishedNews = response.data.filter(article => article.status === 'published');
        setArticles(publishedNews);
      }
    } catch (error: any) {
      console.error('Erreur lors du chargement des actualités:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const latestArticles = Array.isArray(articles) ? articles.slice(0, 3) : [];

  return (
    <Layout>
      {/* Hero Section - Modern & Professional */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-primary via-primary to-[hsl(214,79%,28%)] py-12 md:py-16 lg:py-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient Orbs */}
          <motion.div 
            className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-secondary/15 blur-[80px]"
            animate={{ 
              scale: [1, 1.15, 1],
              opacity: [0.25, 0.4, 0.25] 
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute top-1/2 -left-32 w-[350px] h-[350px] rounded-full bg-secondary/12 blur-[70px]"
            animate={{ 
              scale: [1.15, 1, 1.15],
              opacity: [0.15, 0.3, 0.15] 
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }} />
          </div>
          
          {/* Floating Particles with enhanced animation */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-secondary/30 rounded-full"
              style={{
                left: `${20 + i * 18}%`,
                top: `${30 + (i % 3) * 20}%`,
              }}
              animate={{
                y: [-15, 15, -15],
                x: [0, (i % 2 === 0 ? 10 : -10), 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut"
              }}
            />
          ))}
          
          {/* Animated connecting lines */}
          <motion.svg 
            className="absolute inset-0 w-full h-full opacity-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ delay: 1, duration: 2 }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.line
                key={i}
                x1={`${20 + i * 25}%`}
                y1="20%"
                x2={`${30 + i * 20}%`}
                y2="80%"
                stroke="rgba(255, 255, 255, 0.1)"
                strokeWidth="1"
                animate={{
                  pathLength: [0, 1, 0],
                  opacity: [0, 0.2, 0]
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  delay: i * 0.8,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Badge */}
              <motion.div 
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-sm relative overflow-hidden"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                />
                <motion.div 
                  className="w-1.5 h-1.5 bg-secondary rounded-full relative z-10"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-white/90 text-xs md:text-sm font-medium relative z-10">Safety & Santé na Mosala - République Démocratique du Congo</span>
              </motion.div>

              <motion.h1 
                className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] tracking-tight relative"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Text reveal animation */}
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  {t('hero.title')}
                </motion.span>
                {/* Subtle glow effect */}
                <motion.div
                  className="absolute -inset-4 bg-secondary/10 blur-2xl -z-10"
                  animate={{ 
                    opacity: [0.3, 0.5, 0.3],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </motion.h1>
              
              <motion.p 
                className="text-sm sm:text-base md:text-lg lg:text-xl text-white/85 leading-relaxed max-w-xl relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  {t('hero.subtitle')}
                </motion.span>
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-3 pt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button asChild className="bg-secondary text-primary font-semibold text-sm md:text-base px-6 py-5 md:px-8 md:py-6 hover:bg-secondary/90 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl relative overflow-hidden group">
                    <Link to="/services" className="flex items-center justify-center gap-2 relative z-10">
                      <motion.span
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '200%' }}
                        transition={{ duration: 0.6 }}
                      />
                      {t('hero.cta.primary')}
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
                      >
                        <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
                      </motion.span>
                    </Link>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button asChild variant="outline" className="border-2 border-white/40 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 text-sm md:text-base px-6 py-5 md:px-8 md:py-6 font-semibold hover:border-white/60 relative overflow-hidden group">
                    <Link to="/contact" className="flex items-center justify-center relative z-10">
                      <motion.span
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '200%' }}
                        transition={{ duration: 0.6 }}
                      />
                      {t('hero.cta.secondary')}
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Content - Logo/Visual */}
            <motion.div
              className="hidden lg:flex flex-col items-center justify-center space-y-6"
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative w-full max-w-md">
                {/* Multi-layer Glow Effects */}
                <motion.div 
                  className="absolute inset-0 bg-secondary/25 blur-[40px] rounded-full -z-10"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3],
                    x: [0, 10, 0],
                    y: [0, -10, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div 
                  className="absolute inset-0 bg-secondary/15 blur-[60px] rounded-full -z-10"
                  animate={{ 
                    scale: [1, 1.15, 1],
                    opacity: [0.2, 0.35, 0.2],
                    x: [0, -15, 0],
                    y: [0, 15, 0]
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Logo Container - Modern Card Design */}
                <motion.div
                  className="relative bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-white/20 backdrop-blur-sm"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                  whileHover={{ 
                    scale: 1.03,
                    y: -5,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                >
                  {/* Subtle gradient overlay with animation */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-white to-gray-50/50 rounded-3xl opacity-50"
                    animate={{ 
                      backgroundPosition: ['0% 0%', '100% 100%']
                    }}
                    transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
                  />
                  
                  {/* Animated border glow */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl bg-gradient-to-r from-secondary/20 via-secondary/40 to-secondary/20 opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ 
                      backgroundSize: '200% 200%',
                      backgroundPosition: '0% 50%'
                    }}
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  
                  {/* Logo Image with subtle float */}
                  <motion.div 
                    className="relative z-10 flex items-center justify-center"
                    animate={{ 
                      y: [0, -8, 0]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  >
                    <motion.img
                      src={logo}
                      alt="SSMos Logo"
                      className="w-full max-w-[280px] h-auto drop-shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    />
                  </motion.div>

                  {/* Decorative Corner Accents */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-secondary/40 to-secondary/20 rounded-2xl backdrop-blur-md border border-secondary/30"
                    animate={{ 
                      rotate: [0, 5, 0, -5, 0],
                      scale: [1, 1.05, 1, 1.08, 1],
                      x: [0, 2, 0, -2, 0],
                      y: [0, -2, 0, 2, 0]
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div
                    className="absolute -bottom-2 -left-2 w-16 h-16 bg-gradient-to-tr from-white/30 to-white/10 rounded-xl backdrop-blur-md border border-white/20"
                    animate={{ 
                      rotate: [0, -5, 0, 5, 0],
                      scale: [1, 1.05, 1, 1.08, 1],
                      x: [0, -2, 0, 2, 0],
                      y: [0, 2, 0, -2, 0]
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  />
                  
                  {/* Bottom accent line with animation */}
                  <motion.div 
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-secondary/50 to-transparent rounded-full"
                    animate={{ 
                      width: ['6rem', '8rem', '6rem'],
                      opacity: [0.5, 0.8, 0.5]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </motion.div>
              </div>

              {/* Trust Indicators - Enhanced Design */}
              <motion.div
                className="flex items-center gap-8 pt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <motion.div 
                  className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-colors relative overflow-hidden group"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '200%' }}
                    transition={{ duration: 0.6 }}
                  />
                  <motion.div 
                    className="p-1.5 bg-secondary/20 rounded-full relative z-10"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  >
                    <CheckCircle className="h-4 w-4 text-secondary" />
                  </motion.div>
                  <span className="text-white/90 text-sm font-medium relative z-10">{stats.companies}+ {t('hero.partners')}</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-colors relative overflow-hidden group"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '200%' }}
                    transition={{ duration: 0.6 }}
                  />
                  <motion.div 
                    className="p-1.5 bg-secondary/20 rounded-full relative z-10"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, -5, 0]
                    }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1.2 }}
                  >
                    <CheckCircle className="h-4 w-4 text-secondary" />
                  </motion.div>
                  <span className="text-white/90 text-sm font-medium relative z-10">{stats.years} {t('hero.years')}</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 50L48 45.7C96 41.3 192 32.7 288 30.5C384 28.3 480 32.7 576 39.2C672 45.7 768 54.3 864 54.2C960 54 1056 45 1152 41.7C1248 38.3 1344 40.7 1392 41.8L1440 43V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z" fill="hsl(var(--background))"/>
          </svg>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t('home.about.title')}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {t('home.about.description')}
            </p>
            <Button asChild variant="outline" className="group">
              <Link to="/about">
                {t('services.learnMore')}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Intervention Areas */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto">
          <motion.h2 
            className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t('home.axes.title')}
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {interventionAreas.map((area, index) => {
              const IconComponent = iconMap[area.icon] || Factory;
              return (
                <motion.div
                  key={area.title}
                  variants={fadeInUp}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="card-institutional group"
                >
                  <div className="w-14 h-14 rounded-xl hero-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {language === 'en' ? area.titleEn : language === 'ln' ? area.titleLn : language === 'sw' ? area.titleSw : area.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {language === 'en' ? area.descriptionEn : language === 'ln' ? area.descriptionLn : language === 'sw' ? area.descriptionSw : area.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding hero-gradient">
        <div className="container mx-auto">
          <motion.h2 
            className="font-display text-3xl md:text-4xl font-bold text-white text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t('home.stats.title')}
          </motion.h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: stats.companies, label: t('stats.companies'), suffix: '+' },
              { value: stats.trainings, label: t('stats.trainings'), suffix: '+' },
              { value: stats.experts, label: t('stats.experts'), suffix: '' },
              { value: stats.years, label: t('stats.years'), suffix: '' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div 
                  className="font-display text-4xl md:text-5xl font-bold text-secondary mb-2"
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                >
                  {stat.value}{stat.suffix}
                </motion.div>
                <div className="text-white/80 text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-12">
            <motion.h2 
              className="font-display text-3xl md:text-4xl font-bold text-foreground"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {t('home.news.title')}
            </motion.h2>
            <Button asChild variant="outline" className="hidden sm:flex group">
              <Link to="/news">
                {t('home.news.viewAll')}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
          {isLoading ? (
            <div className="flex justify-center items-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {latestArticles.map((article, index) => (
                <motion.div key={article.id} variants={fadeInUp}>
                  <Link
                    to={`/news/${article.id}`}
                    className="card-institutional group overflow-hidden block"
                  >
                    <div className="aspect-video overflow-hidden rounded-lg mb-4 -mt-2 -mx-2">
                      {article.image ? (
                        <img
                          src={article.image}
                          alt={article.title.fr || article.title.en || 'Actualité'}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full bg-muted flex items-center justify-center">
                          <Shield className="h-12 w-12 text-muted-foreground" />
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2.5 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded-full">
                        {article.category}
                      </span>
                      <span className="text-muted-foreground text-xs">
                        {new Date(article.created_at).toLocaleDateString(language === 'en' ? 'en-US' : 'fr-FR')}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-secondary transition-colors line-clamp-2 mb-2">
                      {language === 'en' ? (article.title.en || article.title.fr) : 
                       language === 'ln' ? (article.title.ln || article.title.fr) : 
                       language === 'sw' ? (article.title.sw || article.title.fr) : 
                       article.title.fr}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {language === 'en' ? (article.excerpt.en || article.excerpt.fr) : 
                       language === 'ln' ? (article.excerpt.ln || article.excerpt.fr) : 
                       language === 'sw' ? (article.excerpt.sw || article.excerpt.fr) : 
                       article.excerpt.fr}
                    </p>
                  </Link>
                </motion.div>
              ))}
              {latestArticles.length === 0 && !isLoading && (
                <div className="col-span-full text-center py-12 text-muted-foreground">
                  <p>{t('home.news.noArticles') || 'Aucune actualité disponible'}</p>
                </div>
              )}
            </motion.div>
          )}
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t('cta.ready.title')}
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              {t('cta.ready.description')}
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg transition-all duration-300 hover:-translate-y-0.5">
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

export default Index;
