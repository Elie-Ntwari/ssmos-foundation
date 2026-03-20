import React, { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react';
import { Language, getTranslation, languages } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  languages: typeof languages;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = useCallback((key: string) => {
    return getTranslation(language, key);
  }, [language]);

  // Persister la langue dans localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('ssmos_language') as Language;
    if (savedLanguage && ['fr', 'en', 'ln', 'sw'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Sauvegarder la langue quand elle change
  const handleSetLanguage = useCallback((lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('ssmos_language', lang);
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t, languages }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
