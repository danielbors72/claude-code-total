import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { Lang, LocalizedString } from '../lib/types';

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (text: LocalizedString) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
  t: (text) => text.en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en');

  useEffect(() => {
    const stored = localStorage.getItem('cct-lang') as Lang | null;
    if (stored === 'en' || stored === 'ro') {
      setLangState(stored);
    }
  }, []);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem('cct-lang', newLang);
    document.documentElement.lang = newLang;
  };

  const t = (text: LocalizedString) => text[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
