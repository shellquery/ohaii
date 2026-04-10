import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { content } from '../data/content';

export type Lang = 'en' | 'zh';
export type Theme = 'light' | 'dark';

interface AppContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  theme: Theme;
  setTheme: (t: Theme) => void;
  t: typeof content.en;
}

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    return (localStorage.getItem('ohaii-lang') as Lang) || 'zh';
  });
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem('ohaii-theme') as Theme) || 'light';
  });

  useEffect(() => {
    localStorage.setItem('ohaii-lang', lang);
  }, [lang]);

  useEffect(() => {
    localStorage.setItem('ohaii-theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const t = content[lang];

  return (
    <AppContext.Provider value={{ lang, setLang, theme, setTheme, t }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
