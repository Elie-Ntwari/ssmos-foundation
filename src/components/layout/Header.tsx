import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { Language } from '@/i18n/translations';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import logo from '@/assets/logo.png';

const aboutSections = [
  { id: 'presentation', path: '/about/presentation', labelKey: 'about.nav.presentation' },
  { id: 'contexte', path: '/about/contexte', labelKey: 'about.nav.context' },
  { id: 'mission', path: '/about/mission', labelKey: 'about.nav.mission' },
  { id: 'but', path: '/about/but', labelKey: 'about.nav.goal' },
  { id: 'vision', path: '/about/vision', labelKey: 'about.nav.vision' },
  { id: 'valeurs', path: '/about/valeurs', labelKey: 'about.nav.values' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const { t, language, setLanguage, languages } = useLanguage();
  const location = useLocation();

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about'), hasDropdown: true },
    { path: '/services', label: t('nav.services') },
    { path: '/news', label: t('nav.news') },
    { path: '/blog', label: t('nav.blog') },
    { path: '/team', label: t('nav.team') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const isActive = (path: string) => {
    if (path === '/about') {
      return location.pathname === '/about' || location.pathname.startsWith('/about/');
    }
    return location.pathname === path;
  };

  const getLangName = (lang: typeof languages[0], currentLang: Language) => {
    switch (currentLang) {
      case 'fr': return lang.nameFr;
      case 'en': return lang.nameEn;
      case 'ln': return lang.nameLn;
      case 'sw': return lang.nameSw;
      default: return lang.nativeName;
    }
  };

  const currentLang = languages.find(l => l.code === language);

  return (
    <header className="sticky top-0 z-50 w-full bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.img
              src={logo}
              alt="SSMos Logo"
              className="h-12 md:h-14 w-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              link.hasDropdown ? (
                <div
                  key={link.path}
                  className="relative"
                  onMouseEnter={() => setIsAboutOpen(true)}
                  onMouseLeave={() => setIsAboutOpen(false)}
                >
                  <button
                    type="button"
                    aria-haspopup="menu"
                    aria-expanded={isAboutOpen}
                    onClick={() => setIsAboutOpen((prev) => !prev)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center gap-1 ${
                      isActive(link.path)
                        ? 'bg-primary text-primary-foreground'
                        : 'text-foreground hover:bg-accent hover:text-accent-foreground'
                    }`}
                  >
                    {link.label}
                    <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${isAboutOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {isAboutOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 w-64 bg-card rounded-xl border border-border shadow-xl overflow-hidden"
                      >
                        {aboutSections.map((section) => {
                          return (
                            <Link
                              key={section.id}
                              to={section.path}
                              onClick={() => setIsAboutOpen(false)}
                              className="block px-4 py-3 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                            >
                              {t(section.labelKey)}
                            </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    isActive(link.path)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-accent hover:text-accent-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>

          {/* Language Selector & Mobile Menu Button */}
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2">
                  <Globe className="h-4 w-4" />
                  <span className="hidden sm:inline">{currentLang ? getLangName(currentLang, language) : ''}</span>
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-card z-50">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={language === lang.code ? 'bg-accent' : ''}
                  >
                    {getLangName(lang, language)}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
                if (isMenuOpen) setIsMobileAboutOpen(false);
              }}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-border bg-card overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {link.hasDropdown ? (
                    <>
                      <button
                        type="button"
                        onClick={() => setIsMobileAboutOpen((prev) => !prev)}
                        className={`w-full px-4 py-3 rounded-md text-sm font-medium transition-colors flex items-center justify-between ${
                          isActive(link.path)
                            ? 'bg-primary text-primary-foreground'
                            : 'text-foreground hover:bg-accent'
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isMobileAboutOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isMobileAboutOpen && (
                        <div className="ml-4 mt-1 space-y-1">
                          {aboutSections.map((section) => {
                            return (
                              <Link
                                key={section.id}
                                to={section.path}
                                onClick={() => {
                                  setIsMenuOpen(false);
                                  setIsMobileAboutOpen(false);
                                }}
                                className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
                              >
                                {t(section.labelKey)}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                        isActive(link.path)
                          ? 'bg-primary text-primary-foreground'
                          : 'text-foreground hover:bg-accent'
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
