import { useState, useEffect, useRef, useMemo } from 'react';
import Fuse from 'fuse.js';
import type { Lang } from '../../lib/types';
import { shortcutCategories } from '../../content/shortcuts';
import { commandCategories } from '../../content/commands';
import { cliCategories } from '../../content/cli';
import { configCategories } from '../../content/configuration';
import { mcpCategories } from '../../content/mcp';
import { memoryCategories } from '../../content/memory';
import { skillsCategories } from '../../content/skills';
import { workflowCategories } from '../../content/workflows';

interface SearchItem {
  id: string;
  title: string;
  description: string;
  section: string;
  sectionIcon: string;
  path: string;
  tags: string[];
}

const sectionMap: Record<string, { path: string; icon: string }> = {
  shortcuts: { path: '/shortcuts', icon: '⌨️' },
  commands: { path: '/commands', icon: '⚡' },
  cli: { path: '/cli', icon: '💻' },
  configuration: { path: '/configuration', icon: '⚙️' },
  mcp: { path: '/mcp', icon: '🔌' },
  memory: { path: '/memory', icon: '🧠' },
  skills: { path: '/skills', icon: '🪄' },
  workflows: { path: '/workflows', icon: '🔄' },
};

function buildIndex(lang: Lang): SearchItem[] {
  const allCategories = [
    { categories: shortcutCategories, section: 'shortcuts' },
    { categories: commandCategories, section: 'commands' },
    { categories: cliCategories, section: 'cli' },
    { categories: configCategories, section: 'configuration' },
    { categories: mcpCategories, section: 'mcp' },
    { categories: memoryCategories, section: 'memory' },
    { categories: skillsCategories, section: 'skills' },
    { categories: workflowCategories, section: 'workflows' },
  ];

  const items: SearchItem[] = [];
  for (const { categories, section } of allCategories) {
    const info = sectionMap[section];
    for (const cat of categories) {
      for (const item of cat.items) {
        items.push({
          id: item.id,
          title: item.title,
          description: item.oneLiner[lang],
          section,
          sectionIcon: info.icon,
          path: info.path,
          tags: item.tags,
        });
      }
    }
  }
  return items;
}

export default function SearchModal() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [lang, setLang] = useState<Lang>('en');
  const [selectedIdx, setSelectedIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const stored = localStorage.getItem('cct-lang') as Lang | null;
    if (stored === 'en' || stored === 'ro') setLang(stored);
    const onLangChange = (e: Event) => setLang((e as CustomEvent).detail);
    window.addEventListener('cct-lang-change', onLangChange);
    return () => window.removeEventListener('cct-lang-change', onLangChange);
  }, []);

  const searchIndex = useMemo(() => buildIndex(lang), [lang]);
  const fuse = useMemo(
    () =>
      new Fuse(searchIndex, {
        keys: [
          { name: 'title', weight: 3 },
          { name: 'description', weight: 2 },
          { name: 'tags', weight: 1 },
        ],
        threshold: 0.3,
        includeScore: true,
      }),
    [searchIndex]
  );

  const results = query.length > 0 ? fuse.search(query).slice(0, 12) : [];

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Also listen for search trigger button
  useEffect(() => {
    const btn = document.getElementById('search-trigger');
    if (btn) {
      const handler = () => setOpen(true);
      btn.addEventListener('click', handler);
      return () => btn.removeEventListener('click', handler);
    }
  }, []);

  // Focus input when opened
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setSelectedIdx(0);
    }
  }, [open]);

  // Keyboard nav in results
  const handleInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIdx((prev) => Math.min(prev + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIdx((prev) => Math.max(prev - 1, 0));
    } else if (e.key === 'Enter' && results[selectedIdx]) {
      window.location.href = results[selectedIdx].item.path;
      setOpen(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setOpen(false)} />

      {/* Modal */}
      <div className="relative w-full max-w-lg mx-4 bg-white dark:bg-surface-900 rounded-xl shadow-2xl border border-surface-200 dark:border-surface-700 overflow-hidden">
        {/* Input */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-surface-200 dark:border-surface-800">
          <svg className="w-5 h-5 text-surface-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => { setQuery(e.target.value); setSelectedIdx(0); }}
            onKeyDown={handleInputKeyDown}
            placeholder={lang === 'en' ? 'Search commands, shortcuts, settings...' : 'Caută comenzi, scurtături, setări...'}
            className="flex-1 bg-transparent text-sm outline-none text-surface-900 dark:text-surface-100 placeholder:text-surface-400"
          />
          <kbd className="text-xs text-surface-400">Esc</kbd>
        </div>

        {/* Results */}
        {query.length > 0 && (
          <div className="max-h-80 overflow-y-auto py-2">
            {results.length === 0 ? (
              <div className="px-4 py-8 text-center text-sm text-surface-400">
                {lang === 'en' ? 'No results found' : 'Niciun rezultat găsit'}
              </div>
            ) : (
              results.map((result, idx) => (
                <a
                  key={result.item.id}
                  href={result.item.path}
                  className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                    idx === selectedIdx
                      ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300'
                      : 'text-surface-700 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-800'
                  }`}
                  onMouseEnter={() => setSelectedIdx(idx)}
                  onClick={() => setOpen(false)}
                >
                  <span className="text-base shrink-0">{result.item.sectionIcon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium">{result.item.title}</div>
                    <div className="text-xs text-surface-500 dark:text-surface-400 truncate">
                      {result.item.description}
                    </div>
                  </div>
                  <span className="text-xs text-surface-400 shrink-0">{result.item.section}</span>
                </a>
              ))
            )}
          </div>
        )}

        {/* Empty state hint */}
        {query.length === 0 && (
          <div className="px-4 py-8 text-center text-sm text-surface-400">
            {lang === 'en' ? 'Start typing to search across all sections...' : 'Începe să scrii pentru a căuta în toate secțiunile...'}
          </div>
        )}
      </div>
    </div>
  );
}
