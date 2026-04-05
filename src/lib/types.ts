export type Lang = 'en' | 'ro';

export interface LocalizedString {
  en: string;
  ro: string;
}

export type Level = 'beginner' | 'advanced' | 'all';

export interface CommandItem {
  id: string;
  title: string;
  shortcut?: string;
  oneLiner: LocalizedString;
  explanation: LocalizedString;
  example?: LocalizedString;
  category: string;
  level: Level;
  tags: string[];
  isNew?: boolean;
}

export interface CommandCategory {
  id: string;
  name: LocalizedString;
  icon: string;
  items: CommandItem[];
}

export interface WorkflowStep {
  stepNumber: number;
  title: LocalizedString;
  description: LocalizedString;
  code?: string;
  tip?: LocalizedString;
}

export interface WorkflowGuide {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  level: Level;
  steps: WorkflowStep[];
  tags: string[];
}

export interface QuickStartStep {
  id: string;
  title: LocalizedString;
  instruction: LocalizedString;
  code?: string;
  expectedOutput?: string;
  level: Level;
}

export interface SectionMeta {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  icon: string;
  path: string;
}

export interface SearchEntry {
  id: string;
  section: string;
  title: string;
  description: string;
  tags: string[];
  path: string;
}
