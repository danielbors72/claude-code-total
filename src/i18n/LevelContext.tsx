import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { Level } from '../lib/types';

type DisplayLevel = 'beginner' | 'advanced';

interface LevelContextType {
  level: DisplayLevel;
  setLevel: (level: DisplayLevel) => void;
  isVisible: (itemLevel: Level) => boolean;
}

const LevelContext = createContext<LevelContextType>({
  level: 'beginner',
  setLevel: () => {},
  isVisible: () => true,
});

export function LevelProvider({ children }: { children: ReactNode }) {
  const [level, setLevelState] = useState<DisplayLevel>('beginner');

  useEffect(() => {
    const stored = localStorage.getItem('cct-level') as DisplayLevel | null;
    if (stored === 'beginner' || stored === 'advanced') {
      setLevelState(stored);
    }
  }, []);

  const setLevel = (newLevel: DisplayLevel) => {
    setLevelState(newLevel);
    localStorage.setItem('cct-level', newLevel);
  };

  const isVisible = (itemLevel: Level) => {
    if (itemLevel === 'all') return true;
    if (level === 'advanced') return true;
    return itemLevel === 'beginner';
  };

  return (
    <LevelContext.Provider value={{ level, setLevel, isVisible }}>
      {children}
    </LevelContext.Provider>
  );
}

export function useLevel() {
  return useContext(LevelContext);
}
