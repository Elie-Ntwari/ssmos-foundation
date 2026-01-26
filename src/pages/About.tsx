import { Target, Eye, Heart, Award, Shield, Lightbulb, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import Layout from '@/components/layout/Layout';

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
      icon: ShieldCheck,
      title: t('about.values.prevention'),
      description: t('about.values.prevention.desc'),
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient py-20 md:py-28">
        <div className="container mx-auto px-4">
          <motion.h1 
            className="font-display text-4xl md:text-5xl font-bold text-white text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t('about.title')}
          </motion.h1>
          <motion.p 
            className="text-white/80 text-lg text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Safety & Santé na Mosala
          </motion.p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {t('about.intro')}
            </motion.h2>
            <motion.p 
              className="text-muted-foreground text-lg leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              {t('about.intro.text')}
            </motion.p>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                className="card-institutional"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {t('about.context.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('about.context.text')}
                </p>
              </motion.div>
              <motion.div 
                className="card-institutional bg-accent border-secondary/20"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {t('about.vision.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('about.vision.text')}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Goal */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
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
            </motion.div>
            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <motion.h2 
            className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t('about.values.title')}
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center card-institutional"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="section-padding hero-gradient">
        <div className="container mx-auto text-center">
          <motion.div 
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Heart className="h-12 w-12 text-secondary mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              {t('about.vision.title')}
            </h2>
            <p className="text-white/85 text-lg leading-relaxed">
              {t('about.vision.text')}
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
