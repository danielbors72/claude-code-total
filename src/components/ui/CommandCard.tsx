import { useState, useEffect } from 'react';
import type { CommandItem, Lang, Level } from '../../lib/types';

interface Props {
  item: CommandItem;
}

export default function CommandCard({ item }: Props) {
  const [expanded, setExpanded] = useState(false);
  const [lang, setLang] = useState<Lang>('en');
  const [level, setLevel] = useState<'beginner' | 'advanced'>('beginner');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const storedLang = localStorage.getItem('cct-lang') as Lang | null;
    if (storedLang === 'en' || storedLang === 'ro') setLang(storedLang);
    const storedLevel = localStorage.getItem('cct-level') as 'beginner' | 'advanced' | null;
    if (storedLevel) setLevel(storedLevel);

    const onLangChange = (e: Event) => setLang((e as CustomEvent).detail);
    const onLevelChange = (e: Event) => setLevel((e as CustomEvent).detail);
    window.addEventListener('cct-lang-change', onLangChange);
    window.addEventListener('cct-level-change', onLevelChange);
    return () => {
      window.removeEventListener('cct-lang-change', onLangChange);
      window.removeEventListener('cct-level-change', onLevelChange);
    };
  }, []);

  const isVisible = item.level === 'all' || level === 'advanced' || item.level === 'beginner';
  if (!isVisible) return null;

  const t = (text: { en: string; ro: string }) => text[lang];

  const copyExample = () => {
    if (item.example) {
      navigator.clipboard.writeText(t(item.example));
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  return (
    <div
      className={`group border rounded-lg transition-all duration-200 ${
        expanded
          ? 'border-primary-300 dark:border-primary-700 bg-primary-50/50 dark:bg-primary-900/10 shadow-sm'
          : 'border-surface-200 dark:border-surface-800 hover:border-surface-300 dark:hover:border-surface-700'
      }`}
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center gap-3 px-4 py-3 text-left"
        aria-expanded={expanded}
      >
        {/* Shortcut badge */}
        {item.shortcut && (
          <span className="shrink-0">
            <kbd>{item.shortcut}</kbd>
          </span>
        )}

        {/* Title + one-liner */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="font-medium text-sm">{item.title}</span>
            {item.isNew && (
              <span className="px-1.5 py-0.5 text-[10px] font-bold rounded bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300">
                NEW
              </span>
            )}
            {item.level === 'advanced' && (
              <span className="px-1.5 py-0.5 text-[10px] font-medium rounded bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400">
                ADV
              </span>
            )}
          </div>
          <p className="text-xs text-surface-500 dark:text-surface-400 mt-0.5 truncate">
            {t(item.oneLiner)}
          </p>
        </div>

        {/* Expand icon */}
        <svg
          className={`w-4 h-4 shrink-0 text-surface-400 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Expanded content */}
      {expanded && (
        <div className="px-4 pb-4 pt-1 border-t border-surface-200 dark:border-surface-800">
          <p className="text-sm text-surface-700 dark:text-surface-300 leading-relaxed">
            {t(item.explanation)}
          </p>

          {item.example && (
            <div className="mt-3">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-medium text-surface-500 dark:text-surface-400">
                  {lang === 'en' ? 'Example' : 'Exemplu'}
                </span>
                <button
                  onClick={(e) => { e.stopPropagation(); copyExample(); }}
                  className="text-xs text-primary-500 hover:text-primary-600 transition-colors"
                >
                  {copied ? (lang === 'en' ? 'Copied!' : 'Copiat!') : (lang === 'en' ? 'Copy' : 'Copiază')}
                </button>
              </div>
              <pre className="p-3 rounded-md bg-surface-100 dark:bg-surface-900 text-xs font-mono text-surface-800 dark:text-surface-200 overflow-x-auto">
                <code>{t(item.example)}</code>
              </pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
