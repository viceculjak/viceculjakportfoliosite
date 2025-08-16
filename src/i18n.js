import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import enTranslations from './locales/en.json';
import hrTranslations from './locales/hr.json';
import deTranslations from './locales/de.json';
import bgTranslations from './locales/bg.json';

const resources = {
  en: {
    translation: enTranslations
  },
  hr: {
    translation: hrTranslations
  },
  de: {
    translation: deTranslations
  },
  bg: {
    translation: bgTranslations
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    }
  });

export default i18n;
