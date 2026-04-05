import ThemeToggle from './ThemeToggle';
import LangToggle from './LangToggle';
import LevelToggle from './LevelToggle';

export default function HeaderControls() {
  return (
    <div className="flex items-center gap-2">
      <LevelToggle />
      <LangToggle />
      <ThemeToggle />
    </div>
  );
}
