import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './en/translation.json';
// import ta from './ta/translation.json';

i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    resources: {
      en: {translation: en},
      // ta: {translation: ta},
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  })
  .then(() => console.log('i18next initialized successfully'))
  .catch(err => console.error('i18next initialization failed:', err));

export default i18n;
