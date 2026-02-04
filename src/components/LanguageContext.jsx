import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    if (typeof window === "undefined") return "en";
    const stored = window.localStorage.getItem("uon_language");
    if (stored === "hi" || stored === "en") return stored;
    const browserLang = window.navigator.language?.toLowerCase() || "";
    return browserLang.startsWith("hi") ? "hi" : "en";
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem("uon_language", language);
  }, [language]);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    root.classList.remove("lang-en", "lang-hi");
    root.classList.add(language === "hi" ? "lang-hi" : "lang-en");
    root.setAttribute("lang", language);
  }, [language]);
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
