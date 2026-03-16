import { Language } from '@/i18n/translations';

export type MultilingualText = {
  fr?: string;
  en?: string;
  ln?: string;
  sw?: string;
};

/**
 * Helper function to get multilingual content based on current language
 * Falls back to French, then English if the current language is not available
 */
export const getMultilingualContent = (
  content: MultilingualText,
  language: Language
): string => {
  return content[language] || content.fr || content.en || '';
};

/**
 * Normalize CMS text so line breaks and spacing are rendered consistently.
 */
export const normalizeCmsText = (text: string): string => {
  return text
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .replace(/\u00A0/g, ' ')
    .trim();
};

/**
 * Read multilingual text and return a display-ready CMS string.
 */
export const getFormattedMultilingualContent = (
  content: MultilingualText,
  language: Language
): string => {
  return normalizeCmsText(getMultilingualContent(content, language));
};
