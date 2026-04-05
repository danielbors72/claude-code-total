import { useState, useEffect } from 'react';
import type { CommandCategory, Lang } from '../../lib/types';
import CommandCard from './CommandCard';

interface Props {
  categories: CommandCategory[];
}

export default function CommandGrid({ categories }: Props) {
  const [lang, setLang] = useState<Lang>('en');
  const [filter, setFilter] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('cct-lang') as Lang | null;
    if (stored === 'en' || stored === 'ro') setLang(stored);
    const onLangChange = (e: Event) => setLang((e as CustomEvent).detail);
    window.addEventListener('cct-lang-change', onLangChange);
    return () => window.removeEventListener('cct-lang-change', onLangChange);
  }, []);

  const t = (text: { en: string; ro: string }) => text[lang];
  const filtered = filter ? categories.filter((c) => c.id === filter) : categories;

  return (
    <div>
      {/* Category filter pills */}
      {categories.length > 1 && (
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setFilter(null)}
            className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
              filter === null
                ? 'bg-primary-500 text-white'
                : 'bg-surface-100 dark:bg-surface-800 text-surface-600 dark:text-surface-400 hover:bg-surface-200 dark:hover:bg-surface-700'
            }`}
          >
            {lang === 'en' ? 'All' : 'Toate'}
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id === filter ? null : cat.id)}
              className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
                filter === cat.id
                  ? 'bg-primary-500 text-white'
                  : 'bg-surface-100 dark:bg-surface-800 text-surface-600 dark:text-surface-400 hover:bg-surface-200 dark:hover:bg-surface-700'
              }`}
            >
              {t(cat.name)}
            </button>
          ))}
        </div>
      )}

      {/* Categories with cards */}
      <div className="space-y-8">
        {filtered.map((category) => (
          <section key={category.id}>
            <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
              {t(category.name)}
              <span className="text-xs font-normal text-surface-400 dark:text-surface-500">
                ({category.items.length})
              </span>
            </h2>
            <div className="space-y-2">
              {category.items.map((item) => (
                <CommandCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
