"use client";

import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const languages = [
  { code: "en", label: "EN", name: "English", flag: "🇺🇸" },
  { code: "uz", label: "UZ", name: "O'zbek", flag: "🇺🇿" },
  { code: "ru", label: "RU", name: "Русский", flag: "🇷🇺" },
];

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved && languages.some((l) => l.code === saved)) {
      setLang(saved);
    }
  }, []);

  const switchLang = (code) => {
    setLang(code);
    localStorage.setItem("lang", code);
    document.documentElement.lang = code;
  };

  return (
    <LanguageContext.Provider value={{ lang, switchLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
