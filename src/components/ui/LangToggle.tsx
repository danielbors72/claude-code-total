import { useState, useEffect } from 'react';
import type { Lang } from '../../lib/types';

export default function LangToggle() {
  const [lang, setLang] = useState<Lang>('en');

  useEffect(() => {
    const stored = localStorage.getItem('cct-lang') as Lang | null;
    if (stored === 'en' || stored === 'ro') setLang(stored);
  }, []);

  const toggle = () => {
    const next: Lang = lang === 'en' ? 'ro' : 'en';
    setLang(next);
    localStorage.setItem('cct-lang', next);
    document.documentElement.lang = next;
    // Dispatch custom event so other components can react
    window.dispatchEvent(new CustomEvent('cct-lang-change', { detail: next }));
  };

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-md border border-surface-200 dark:border-surface-700 hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors"
      aria-label={`Switch to ${lang === 'en' ? 'Romanian' : 'English'}`}
    >
      <span className={lang === 'en' ? 'text-primary-500 font-bold' : 'text-surface-400'}>EN</span>
      <span className="text-surface-300 dark:text-surface-600">/</span>
      <span className={lang === 'ro' ? 'text-primary-500 font-bold' : 'text-surface-400'}>RO</span>
    </button>
  );
}
