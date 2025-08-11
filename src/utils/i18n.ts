import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { navAr, navEn } from "../../public/locales";

const resources = {
  en: {
    nav: navEn,
  },
  ar: {
    nav: navAr,
  },
} as const;

const lang = localStorage.getItem("lang") || "en";

document.documentElement.lang = lang;
document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

i18n.use(initReactI18next).init({
  resources,
  lng: lang,
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export const changeLanguage = (lng: "en" | "ar") => {
  i18n.changeLanguage(lng);
  localStorage.setItem("lang", lng);
  document.documentElement.lang = lng;
  document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
};

export default i18n;
