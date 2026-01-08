import { Link } from 'react-router-dom';
import { ArrowRight, Shield, GraduationCap, ClipboardCheck, Scale, Cpu, Factory, Building2, Truck, Hospital, Pickaxe, Leaf, CheckCircle, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { stats, articles, interventionAreas } from '@/data/mockData';
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

  const latestArticles = articles.slice(0, 3);

  return (
    <Layout>
      {/* Hero Section - Modern & Professional */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-primary via-primary to-[hsl(214,79%,28%)]">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient Orbs */}
          <motion.div 
            className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-secondary/20 blur-[100px]"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3] 
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute top-1/2 -left-32 w-[400px] h-[400px] rounded-full bg-secondary/15 blur-[80px]"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2] 
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }} />
          </div>
          
          {/* Floating Particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-secondary/40 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 3) * 20}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                <span className="text-white/90 text-sm font-medium">Safety & Santé na Mosala</span>
              </motion.div>

              <motion.h1 
                className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                {t('hero.title')}
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                {t('hero.subtitle')}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <Button asChild size="lg" className="bg-secondary text-primary font-semibold hover:bg-secondary/90 shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                  <Link to="/services">
                    {t('hero.cta.primary')}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-white/40 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300">
                  <Link to="/contact">
                    {t('hero.cta.secondary')}
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Content - Logo/Visual */}
            <motion.div
              className="hidden lg:flex flex-col items-center justify-center space-y-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-secondary/20 blur-[60px] rounded-full" />

                {/* Logo Container */}
                <motion.div
                  className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={logo}
                    alt="SSMos Logo"
                    className="w-72 h-auto drop-shadow-2xl"
                  />
                </motion.div>

                {/* Decorative Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-20 h-20 bg-secondary/30 rounded-2xl backdrop-blur-sm"
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-6 -left-6 w-16 h-16 bg-white/10 rounded-xl backdrop-blur-sm"
                  animate={{ rotate: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                />
              </div>

              {/* Trust Indicators */}
              <motion.div
                className="flex items-center gap-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span className="text-white/70 text-sm">{stats.companies}+ {t('hero.partners')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span className="text-white/70 text-sm">{stats.years} {t('hero.years')}</span>
                </div>
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
                    {language === 'en' ? article.titleEn : language === 'ln' ? article.titleLn : language === 'sw' ? article.titleSw : article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {language === 'en' ? article.excerptEn : language === 'ln' ? article.excerptLn : language === 'sw' ? article.excerptSw : article.excerpt}
                  </p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
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
