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

// Get saved lang OR default to "ar"
const lang = localStorage.getItem("lang") || "ar";

// Ensure we always save a fallback into localStorage
if (!localStorage.getItem("lang")) {
  localStorage.setItem("lang", "ar");
}

// Apply language and direction to <html>
document.documentElement.lang = lang;
document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

i18n.use(initReactI18next).init({
  resources,
  lng: lang, // starting language
  fallbackLng: "ar", // fallback language
  interpolation: { escapeValue: false },
});

export const changeLanguage = (lng: "en" | "ar") => {
  i18n.changeLanguage(lng);
  localStorage.setItem("lang", lng);
  document.documentElement.lang = lng;
  document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
};

export default i18n;
