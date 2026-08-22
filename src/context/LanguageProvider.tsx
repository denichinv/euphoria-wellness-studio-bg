import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import { LanguageContext, type Language } from "../context/LanguageContext";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem("language");

    return savedLanguage === "en" ? "en" : "bg";
  });
  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem("language", language);
  }, [language]);
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
