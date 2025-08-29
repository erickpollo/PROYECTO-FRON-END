import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// 👇 Importa directamente los JSON
import esTranslation from "./locales/es/translation.json";
import enTranslation from "./locales/en/translation.json";
import frTranslation from "./locales/fr/translation.json";

i18n
  .use(LanguageDetector) // Detecta idioma del navegador
  .use(initReactI18next) // Pasa i18n a React
  .init({
    fallbackLng: "es", // Español por defecto
    debug: true,
    interpolation: {
      escapeValue: false, // React ya protege de XSS
    },
    resources: {
      es: { translation: esTranslation },
      en: { translation: enTranslation },
      fr: { translation: frTranslation },
    },
  });

export default i18n;
