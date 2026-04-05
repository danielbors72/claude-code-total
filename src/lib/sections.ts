import type { SectionMeta } from './types';

export const sections: SectionMeta[] = [
  {
    id: 'quickstart',
    title: { en: 'Quick Start', ro: 'Pornire rapidă' },
    description: { en: 'Get started with Claude Code in 5 minutes', ro: 'Începe cu Claude Code în 5 minute' },
    icon: 'Rocket',
    path: '/',
  },
  {
    id: 'shortcuts',
    title: { en: 'Keyboard Shortcuts', ro: 'Scurtături tastatură' },
    description: { en: 'All keyboard shortcuts and key combinations', ro: 'Toate scurtăturile și combinațiile de taste' },
    icon: 'Keyboard',
    path: '/shortcuts',
  },
  {
    id: 'commands',
    title: { en: 'Slash Commands', ro: 'Comenzi slash' },
    description: { en: 'Every slash command with examples', ro: 'Toate comenzile slash cu exemple' },
    icon: 'Terminal',
    path: '/commands',
  },
  {
    id: 'mcp',
    title: { en: 'MCP Servers', ro: 'Servere MCP' },
    description: { en: 'Model Context Protocol setup and management', ro: 'Configurare și gestionare Model Context Protocol' },
    icon: 'Plug',
    path: '/mcp',
  },
  {
    id: 'memory',
    title: { en: 'Memory & Files', ro: 'Memorie și fișiere' },
    description: { en: 'CLAUDE.md, rules, and auto-memory system', ro: 'CLAUDE.md, reguli și sistemul de memorie automată' },
    icon: 'Brain',
    path: '/memory',
  },
  {
    id: 'workflows',
    title: { en: 'Workflows & Tips', ro: 'Workflow-uri și sfaturi' },
    description: { en: 'Plan Mode, Worktrees, Voice, and more', ro: 'Plan Mode, Worktrees, Voice și altele' },
    icon: 'Workflow',
    path: '/workflows',
  },
  {
    id: 'configuration',
    title: { en: 'Configuration', ro: 'Configurare' },
    description: { en: 'Config files, settings, and environment variables', ro: 'Fișiere de configurare, setări și variabile de mediu' },
    icon: 'Settings',
    path: '/configuration',
  },
  {
    id: 'skills',
    title: { en: 'Skills & Agents', ro: 'Skill-uri și agenți' },
    description: { en: 'Built-in skills, custom skills, and agent system', ro: 'Skill-uri built-in, personalizate și sistemul de agenți' },
    icon: 'Wand2',
    path: '/skills',
  },
  {
    id: 'cli',
    title: { en: 'CLI Reference', ro: 'Referință CLI' },
    description: { en: 'Commands, flags, and permission modes', ro: 'Comenzi, flaguri și moduri de permisiune' },
    icon: 'SquareTerminal',
    path: '/cli',
  },
];
