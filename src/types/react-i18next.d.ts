import { ns } from '@/lib/locale/i18n';
import ja from '@/locales/ja';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: {
      common: typeof ja.common;
    };
  }
  type NameSpace = (typeof ns)[number];
}
