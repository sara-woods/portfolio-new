import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import { en } from "./translations/en";
import { sv } from "./translations/sv";

const availableLanguages = ["en", "sv"];

const resources = {
  en: en,
  sv: sv,
};

const DETECTION_OPTIONS = {
  order: ["localStorage", "navigator"],
  caches: ["localStorage"],
};

i18n.on("languageChanged", () => {
  document.documentElement.lang = i18n.language;
});

i18n
  // .use(Backend) // load translations using http (default public/assets/locals/en/translations)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .init({
    // order: ["localStorage", "sessionStorage", "navigator", "path"],
    // debug: false,
    // detection: {
    //   checkWhitelist: true, // options for language detection
    // },
    // interpolation: {
    //   escapeValue: false, // not needed for react as it escapes by default
    // },
    whitelist: availableLanguages,
    detection: DETECTION_OPTIONS,
    resources,
    fallbackLng: "en",
  });

export default i18n;
