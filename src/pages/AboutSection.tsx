import { useEffect, useMemo, useState, type ComponentType } from 'react';
import { ChevronRight, Loader2, Shield, ShieldCheck, Lightbulb, Award, Building, Target, Eye } from 'lucide-react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/i18n/LanguageContext';
import { contentService } from '@/services/contentService';
import { InstitutionalPage } from '@/types/api';
import { normalizeCmsText } from '@/utils/multilingual';
import heroPresentation from '@/assets/hero-about-presentation.jpg';
import heroContext from '@/assets/hero-about-context.jpg';
import heroMission from '@/assets/hero-about-mission.jpg';
import heroVision from '@/assets/hero-about-vision.jpg';
import heroValues from '@/assets/hero-about-values.jpg';

type AboutSectionId = 'presentation' | 'contexte' | 'mission' | 'vision' | 'valeurs';

const validSections: AboutSectionId[] = ['presentation', 'contexte', 'mission', 'vision', 'valeurs'];

const sectionHeroImages: Record<AboutSectionId, string> = {
  presentation: heroPresentation,
  contexte: heroContext,
  mission: heroMission,
  vision: heroVision,
  valeurs: heroValues,
};

type IconComponent = ComponentType<{ className?: string }>;
const sectionIcons: Record<AboutSectionId, IconComponent> = {
  presentation: Building,
  contexte: Shield,
  mission: Target,
  vision: Eye,
  valeurs: ShieldCheck,
};

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};
const AboutSection = () => {
  const { sectionId } = useParams<{ sectionId: string }>();
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const [pages, setPages] = useState<Record<string, InstitutionalPage>>({});
  const [isLoading, setIsLoading] = useState(true);

  const currentSection = useMemo<AboutSectionId | null>(() => {
    if (!sectionId) return null;
    return validSections.includes(sectionId as AboutSectionId) ? (sectionId as AboutSectionId) : null;
  }, [sectionId]);

  useEffect(() => {
    if (!currentSection) {
      navigate('/about/presentation', { replace: true });
    }
  }, [currentSection, navigate]);

  useEffect(() => {
    const loadPages = async () => {
      try {
        setIsLoading(true);
        const response = await contentService.getPages();
        if (response.error === false && response.data && Array.isArray(response.data)) {
          const pagesMap: Record<string, InstitutionalPage> = {};
          response.data.forEach((page) => {
            pagesMap[page.slug] = page;
          });
          setPages(pagesMap);
        }
      } catch (error: unknown) {
        console.error('Erreur lors du chargement des pages:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadPages();
  }, []);

  const getContent = (page: InstitutionalPage | undefined, field: 'title' | 'content'): string => {
    if (!page) return '';
    const content = page[field];
    if (typeof content === 'object' && content !== null) {
      return normalizeCmsText(content[language] || content.fr || content.en || '');
    }
    return '';
  };

  if (!currentSection) {
    return null;
  }

  const sectionTitleMap: Record<AboutSectionId, string> = {
    presentation: t('about.nav.presentation'),
    contexte: t('about.nav.context'),
    mission: t('about.nav.mission'),
    vision: t('about.nav.vision'),
    valeurs: t('about.nav.values'),
  };

  const missionPage = pages.mission;
  const presentationPage = pages.presentation;
  const contextePage = pages.contexte;
  const visionPage = pages.vision;
  const valeursPage = pages.valeurs || pages.values || pages['nos-valeurs'] || pages['nosvaleurs'];

  const values = [
    { icon: ShieldCheck, title: t('about.values.prevention'), description: t('about.values.prevention.desc') },
    { icon: Award, title: t('about.values.excellence'), description: t('about.values.excellence.desc') },
    { icon: Shield, title: t('about.values.integrity'), description: t('about.values.integrity.desc') },
    { icon: Lightbulb, title: t('about.values.innovation'), description: t('about.values.innovation.desc') },
  ];

  const sectionPageMap: Partial<Record<AboutSectionId, InstitutionalPage | undefined>> = {
    presentation: presentationPage,
    contexte: contextePage,
    mission: missionPage,
    vision: visionPage,
    valeurs: valeursPage,
  };

  const sectionFallbackMap: Record<AboutSectionId, { title: string; content: string }> = {
    presentation: { title: t('about.intro'), content: t('about.intro.text') },
    contexte: { title: t('about.context.title'), content: t('about.context.text') },
    mission: { title: t('about.mission.title'), content: t('about.mission.text') },
    vision: { title: t('about.vision.title'), content: t('about.vision.text') },
    valeurs: { title: t('about.values.title'), content: values.map((v) => `- ${v.title}: ${v.description}`).join('\n\n') },
  };

  const pageForCurrentSection = sectionPageMap[currentSection];
  const sectionTitle = getContent(pageForCurrentSection, 'title') || sectionFallbackMap[currentSection].title;
  const sectionContent = getContent(pageForCurrentSection, 'content') || sectionFallbackMap[currentSection].content;
  const heroImage = sectionHeroImages[currentSection];
  const SectionIcon = sectionIcons[currentSection];

  return (
    <Layout>
      <section className="relative overflow-hidden py-16 md:py-20">
        <div className="absolute inset-0">
          <img src={heroImage} alt={sectionTitleMap[currentSection]} className="w-full h-full object-cover" />
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
            <Link to="/about/presentation" className="hover:text-white transition-colors">{t('nav.about')}</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white">{sectionTitleMap[currentSection]}</span>
          </motion.nav>

          <motion.h1
            className="font-display text-4xl md:text-5xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {sectionTitleMap[currentSection]}
          </motion.h1>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-5xl">
          {currentSection === 'valeurs' && !getContent(valeursPage, 'content') ? (
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              initial="initial"
              animate="animate"
              variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
            >
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  className="relative bg-card rounded-2xl border border-border p-6 shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-all duration-300 group overflow-hidden"
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                >
                  <div className="absolute top-0 left-0 right-0 h-1 hero-gradient" />
                  <div className="w-14 h-14 rounded-xl hero-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed text-justify">{value.description}</p>
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center">
                    <span className="text-xs font-bold text-muted-foreground">0{index + 1}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-card rounded-2xl border border-border p-6 md:p-12 shadow-[var(--card-shadow)]">
                <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl hero-gradient flex items-center justify-center flex-shrink-0">
                    <SectionIcon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                  <div className="space-y-3 md:space-y-4 min-w-0">
                    <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                      {isLoading ? <Loader2 className="h-6 w-6 animate-spin inline-block" /> : sectionTitle}
                    </h2>
                    <p className="min-w-0 break-words text-muted-foreground text-base md:text-lg leading-relaxed text-justify whitespace-pre-line">
                      {isLoading ? '' : sectionContent}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default AboutSection;
