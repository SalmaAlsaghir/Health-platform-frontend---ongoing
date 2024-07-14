import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './translations/en.json';
import translationAR from './translations/ar.json';

const resources = {
  en: { translation: translationEN },
  ar: { translation: translationAR },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // default language
  interpolation: { escapeValue: false },
});

export default i18n;
