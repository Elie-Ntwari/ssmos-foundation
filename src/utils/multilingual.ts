import { Language } from '@/i18n/translations';

/**
 * Helper function to get multilingual content based on current language
 * Falls back to French, then English if the current language is not available
 */
export const getMultilingualContent = (
  content: { fr?: string; en?: string; ln?: string; sw?: string },
  language: Language
): string => {
  return content[language] || content.fr || content.en || '';
};
