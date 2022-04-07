import i18n from "i18next";
import { initReactI18next } from "react-i18next";
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
  // caches: ["localStorage"],
  caches: [],
  lookupFromPathIndex: 0,
  checkWhitelist: true,
};

i18n.on("languageChanged", (lng) => {
  if (lng === "sv") {
    document.title = resources["sv"].translation.documentTitle;
  } else {
    document.title = resources["en"].translation.documentTitle;
  }
});

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    // order: ["localStorage", "sessionStorage", "navigator", "path"],
    debug: false,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    whitelist: availableLanguages,
    detection: DETECTION_OPTIONS,
    resources,
    fallbackLng: ["sv", "eng"]
  });

export default i18n;
