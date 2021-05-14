import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import en from './en';
import ua from './ua';

i18n.use(LanguageDetector).use(initReactI18next).init({
  fallbackLng: localStorage.getItem('language') || 'en',
  resources: {
    en,
    ua,
  },
});

export default i18n;
