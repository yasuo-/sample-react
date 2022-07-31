import i18n from 'i18next';

import LanguageDetector from 'i18next-browser-languagedetector';

import { initReactI18next } from 'react-i18next';

import en from '@/locales/ja';
import ja from '@/locales/ja';

export const ns = ['common', 'login'] as const;
export const defaultNS = 'en';
export const resources = {
  en,
  ja,
} as const;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    ns,
    defaultNS,
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
