import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './en.json';
import pt_BR from './pt_BR.json';
  
i18n.use(initReactI18next).use(LanguageDetector).init({
  lng: 'pt_BR',
  fallbackLng: 'pt_BR',
  resources: {
    en: en,
    pt_BR: pt_BR,
  },
  interpolation: {
    escapeValue: false // react already safes from xss
  }
});
  
export default i18n;