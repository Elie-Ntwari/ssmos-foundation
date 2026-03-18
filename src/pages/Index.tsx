import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { contentService } from '@/services/contentService';
import { NewsArticle, HomePageSection, InterventionAxis } from '@/types/api';
import { Button } from '@/components/ui/button';
import { stats } from '@/data/mockData';
import { getFormattedMultilingualContent as getContent } from '@/utils/multilingual';
import Layout from '@/components/layout/Layout';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';
import logo from '@/assets/logo.png';
import hero1 from '@/assets/hero-1.png';
import hero2 from '@/assets/hero-2.png';
import hero3 from '@/assets/hero-3.png';
import axisAgriculture from '@/assets/axis-agriculture.png';
import axisMines from '@/assets/axis-mines.png';
import axisTransport from '@/assets/axis-transport.png';
import axisBtp from '@/assets/axis-btp.png';
import axisSante from '@/assets/axis-sante.png';
import axisIndustrie from '@/assets/axis-industrie.png';

const axisImageMap: Record<string, string> = {
  Leaf: axisAgriculture,
  Pickaxe: axisMines,
  Truck: axisTransport,
  Building2: axisBtp,
  Hospital: axisSante,
  Factory: axisIndustrie
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
  const [homeSections, setHomeSections] = useState<Record<string, HomePageSection>>({});
  const [interventionAxes, setInterventionAxes] = useState<InterventionAxis[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingSections, setIsLoadingSections] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [axesCarouselApi, setAxesCarouselApi] = useState<CarouselApi | null>(null);

  const heroSlides = [
    {
      image: hero1,
      title: getSectionContentStatic('hero_title') || t('hero.title'),
      subtitle: getSectionContentStatic('hero_subtitle') || t('hero.subtitle'),
      showLogo: true,
    },
    {
      image: hero2,
      title: getSectionContentStatic('hero_title_2') || t('hero.slide2.title'),
      subtitle: getSectionContentStatic('hero_subtitle_2') || t('hero.slide2.subtitle'),
      showLogo: false,
    },
    {
      image: hero3,
      title: getSectionContentStatic('hero_title_3') || t('hero.slide3.title'),
      subtitle: getSectionContentStatic('hero_subtitle_3') || t('hero.slide3.subtitle'),
      showLogo: false,
    },
  ];

  function getSectionContentStatic(sectionKey: string): string {
    const section = homeSections[sectionKey];
    if (!section) return '';
    return getContent(section.content, language);
  }

  useEffect(() => {
    loadAllData();
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!axesCarouselApi || interventionAxes.length <= 1) return;
    const timer = setInterval(() => {
      axesCarouselApi.scrollNext();
    }, 4500);
    return () => clearInterval(timer);
  }, [axesCarouselApi, interventionAxes.length]);

  const loadAllData = async () => {
    try {
      setIsLoading(true);
      setIsLoadingSections(true);
      
      const newsResponse = await contentService.getNews();
      if (newsResponse.error === false && newsResponse.data) {
        const publishedNews = newsResponse.data.filter(article => article.status === 'published');
        setArticles(publishedNews);
      }

      const sectionsResponse = await contentService.getHomeSections();
      if (sectionsResponse.error === false && sectionsResponse.data) {
        const sectionsMap: Record<string, HomePageSection> = {};
        sectionsResponse.data.forEach(section => {
          sectionsMap[section.section_key] = section;
        });
        setHomeSections(sectionsMap);
      }

      const axesResponse = await contentService.getInterventionAxes();
      if (axesResponse.error === false && axesResponse.data) {
        setInterventionAxes(axesResponse.data);
      }
    } catch (error: any) {
      console.error('Erreur lors du chargement des données:', error);
    } finally {
      setIsLoading(false);
      setIsLoadingSections(false);
    }
  };

  const getSectionContent = (sectionKey: string): string => {
    const section = homeSections[sectionKey];
    if (!section) return '';
    return getContent(section.content, language);
  };

  const getMultilingualContent = (content: { fr?: string; en?: string; ln?: string; sw?: string }): string => {
    return getContent(content, language);
  };

  const latestArticles = Array.isArray(articles) ? articles.slice(0, 3) : [];

  const nextSlide = useCallback(() => setCurrentSlide((prev) => (prev + 1) % 3), []);
  const prevSlide = useCallback(() => setCurrentSlide((prev) => (prev - 1 + 3) % 3), []);
  const showImpactSection = false;

  return (
    <Layout>
      {/* Hero Carousel Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background Images with Crossfade */}
        {[hero1, hero2, hero3].map((img, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: currentSlide === index ? 1 : 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          >
            <img
              src={img}
              alt={`SSMos Hero ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Same blue tone as top hero sections on other pages */}
            <div className="absolute inset-0 hero-gradient opacity-80" />
          </motion.div>
        ))}

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03] z-[1]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
          {/* Top Banner - visible on all slides */}
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-sm mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div 
              className="w-2 h-2 bg-secondary rounded-full"
              animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-white/90 text-sm md:text-base font-medium">
              Safety & Santé na Mosala (SSMos)— République Démocratique du Congo
            </span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Left Content - Animated per slide */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <motion.h1 
                  className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] tracking-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  {heroSlides[currentSlide].title}
                </motion.h1>
                
                <motion.p 
                  className="text-sm sm:text-base md:text-lg lg:text-xl text-white/85 leading-relaxed max-w-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.6 }}
                >
                  {heroSlides[currentSlide].subtitle}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div 
                  className="flex flex-col sm:flex-row gap-3 pt-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <Button asChild className="bg-secondary text-primary font-semibold text-sm md:text-base px-6 py-5 md:px-8 md:py-6 hover:bg-secondary/90 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl">
                    <Link to="/services" className="flex items-center justify-center gap-2">
                      {t('hero.cta.primary')}
                      <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="border-2 border-white/40 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 text-sm md:text-base px-6 py-5 md:px-8 md:py-6 font-semibold hover:border-white/60">
                    <Link to="/contact" className="flex items-center justify-center">
                      {t('hero.cta.secondary')}
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Right Content - Logo Box (visible on slide 1, stats on others) */}
            <motion.div
              className="hidden lg:flex flex-col items-center justify-center space-y-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {/* Logo always visible */}
              <motion.div
                className="relative bg-white rounded-2xl p-4 md:p-6 shadow-2xl mb-6 w-fit mx-auto"
                whileHover={{ scale: 1.03, y: -3 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.img
                  src={logo}
                  alt="SSMos Logo"
                  className="w-32 md:w-40 h-auto drop-shadow-lg"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>

              {heroSlides[currentSlide].showLogo ? (
                <div className="w-full max-w-md">
                  {/* Stats grid on slide 1 too */}
                  <motion.div 
                    className="grid grid-cols-2 gap-3 w-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {[
                      { value: `${stats.companies}+`, label: t('stats.companies') },
                      { value: `${stats.trainings}+`, label: t('stats.trainings') },
                      { value: `${stats.experts}`, label: t('stats.experts') },
                      { value: `${stats.years}`, label: t('stats.years') },
                    ].map((stat, i) => (
                      <motion.div
                        key={stat.label}
                        className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
                      >
                        <div className="font-display text-2xl font-bold text-secondary mb-0.5">{stat.value}</div>
                        <div className="text-white/80 text-xs">{stat.label}</div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              ) : (
                <motion.div 
                  className="grid grid-cols-2 gap-4 w-full max-w-md"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {[
                    { value: `${stats.companies}+`, label: t('stats.companies') },
                    { value: `${stats.trainings}+`, label: t('stats.trainings') },
                    { value: `${stats.experts}`, label: t('stats.experts') },
                    { value: `${stats.years}`, label: t('stats.years') },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
                    >
                      <div className="font-display text-3xl font-bold text-secondary mb-1">{stat.value}</div>
                      <div className="text-white/80 text-xs">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </motion.div>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center mt-10">
            {/* Dots */}
            <div className="flex items-center gap-3">
              {[0, 1, 2].map((i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`transition-all duration-300 rounded-full ${
                    currentSlide === i 
                      ? 'w-10 h-3 bg-secondary' 
                      : 'w-3 h-3 bg-white/40 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0 z-[2]">
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
              {getSectionContent('about_title') || t('home.about.title')}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 whitespace-pre-line">
              {getSectionContent('about_description') || t('home.about.description')}
            </p>
            <Button asChild variant="outline" className="group">
              <Link to="/about/presentation">
                {t('services.learnMore')}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Intervention Areas */}
      <section className="section-padding hero-gradient">
        <div className="container mx-auto">
          <motion.h2 
            className="font-display text-3xl md:text-4xl font-bold text-white text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {getSectionContent('axes_title') || t('home.axes.title')}
          </motion.h2>
          {isLoadingSections ? (
            <div className="flex justify-center items-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : (
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <Carousel
                setApi={setAxesCarouselApi}
                opts={{ align: 'start', loop: true }}
                className="w-full px-2 sm:px-8 md:px-12"
              >
                <CarouselContent className="-ml-4 sm:-ml-6">
                  {interventionAxes.map((axis) => {
                    const axisImage = axis.image || axisImageMap[axis.icon] || axisIndustrie;
                    return (
                      <CarouselItem key={axis.id} className="pl-4 sm:pl-6 basis-full md:basis-1/3">
                        <motion.div
                          variants={fadeInUp}
                          whileHover={{ y: -5, transition: { duration: 0.2 } }}
                          className="relative group overflow-hidden rounded-2xl min-h-[220px] sm:min-h-[250px] md:min-h-[260px] border border-white/20 shadow-[var(--card-shadow)]"
                        >
                          <img
                            src={axisImage}
                            alt={getMultilingualContent(axis.title)}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 hero-gradient opacity-80" />
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_60%)]" />
                          <div className="absolute inset-0 z-10 flex items-center justify-center p-4 sm:p-6 text-center">
                            <h3 className="inline-flex items-center justify-center w-fit max-w-[88%] sm:max-w-[82%] mx-auto font-display text-xl sm:text-2xl md:text-3xl font-bold text-white text-center leading-tight drop-shadow-[0_3px_10px_rgba(0,0,0,0.45)] bg-white/10 border border-white/25 backdrop-blur-sm rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4">
                              {getMultilingualContent(axis.title)}
                            </h3>
                          </div>
                        </motion.div>
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
                <CarouselPrevious className="hidden sm:inline-flex left-0 md:-left-1 bg-white/90 hover:bg-white text-primary border-primary/20" />
                <CarouselNext className="hidden sm:inline-flex right-0 md:-right-1 bg-white/90 hover:bg-white text-primary border-primary/20" />
              </Carousel>
            </motion.div>
          )}
        </div>
      </section>

      {/* Impact visual section */}
      {showImpactSection && (
        <section className="section-padding hero-gradient overflow-hidden">
          <div className="container mx-auto">
            <div className="relative rounded-3xl border border-white/20 bg-white/5 backdrop-blur-md p-8 md:p-12 min-h-[220px] md:min-h-[260px] flex items-center justify-center">
              <motion.div
                aria-hidden
                className="absolute -top-20 -left-20 h-48 w-48 rounded-full bg-secondary/30 blur-3xl"
                animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.12, 1] }}
                transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                aria-hidden
                className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-primary-foreground/20 blur-3xl"
                animate={{ x: [0, -25, 0], y: [0, 15, 0], scale: [1, 0.92, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.img
                src={logo}
                alt="SSMos motif"
                aria-hidden
                className="absolute inset-0 m-auto w-36 md:w-44 opacity-[0.1] pointer-events-none select-none"
                animate={{ y: [0, -6, 0], scale: [1, 1.03, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              />
              <div className="relative z-10 text-center">
                <motion.h2
                  className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="bg-gradient-to-r from-white via-secondary to-white bg-clip-text text-transparent">
                    SSMOS Impact Vision
                  </span>
                </motion.h2>
                <motion.div
                  aria-hidden
                  className="mx-auto mt-5 h-1 rounded-full bg-gradient-to-r from-transparent via-secondary to-transparent"
                  style={{ width: 'min(360px, 70vw)' }}
                  animate={{ opacity: [0.4, 1, 0.4], scaleX: [0.85, 1, 0.85] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>
            </div>
          </div>
        </section>
      )}

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
              {getSectionContent('news_title') || t('home.news.title')}
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
              {latestArticles.map((article) => (
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
                      {getMultilingualContent(article.title)}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {getMultilingualContent(article.excerpt)}
                    </p>
                  </Link>
                </motion.div>
              ))}
              {latestArticles.length === 0 && !isLoading && (
                <div className="col-span-full text-center py-12 text-muted-foreground">
                  <Shield className="h-12 w-12 text-muted-foreground/50 mx-auto mb-3" />
                  <p className="text-muted-foreground text-sm">{t('home.news.noArticles')}</p>
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
              {getSectionContent('cta_title') || t('cta.ready.title')}
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto whitespace-pre-line">
              {getSectionContent('cta_description') || t('cta.ready.description')}
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
