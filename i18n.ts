import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ru from "./translations/ru.json";
import en from "./translations/en.json";
export const resources = {
  ru: {
    translation: ru,
  },
  en: {
    translation: en,
  },
} as const;

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  resources,
  fallbackLng: "ru",
});

export default i18n;
