import { useState, useEffect } from 'react';

type DisplayLevel = 'beginner' | 'advanced';

export default function LevelToggle() {
  const [level, setLevel] = useState<DisplayLevel>('beginner');

  useEffect(() => {
    const stored = localStorage.getItem('cct-level') as DisplayLevel | null;
    if (stored === 'beginner' || stored === 'advanced') setLevel(stored);
  }, []);

  const toggle = () => {
    const next: DisplayLevel = level === 'beginner' ? 'advanced' : 'beginner';
    setLevel(next);
    localStorage.setItem('cct-level', next);
    window.dispatchEvent(new CustomEvent('cct-level-change', { detail: next }));
  };

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-1.5 px-2 py-1 text-xs font-medium rounded-md border border-surface-200 dark:border-surface-700 hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors"
      aria-label={`Switch to ${level === 'beginner' ? 'advanced' : 'beginner'} mode`}
    >
      <span className={`w-2 h-2 rounded-full ${level === 'beginner' ? 'bg-green-500' : 'bg-orange-500'}`} />
      <span>{level === 'beginner' ? 'Beginner' : 'Advanced'}</span>
    </button>
  );
}
