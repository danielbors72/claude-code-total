import type { QuickStartStep } from '../lib/types';

export const quickstartSteps: QuickStartStep[] = [
  {
    id: 'qs-install',
    title: { en: 'Install Claude Code', ro: 'Instalează Claude Code' },
    instruction: {
      en: 'Install Claude Code globally using npm. You need Node.js 18+ installed first.',
      ro: 'Instalează Claude Code global folosind npm. Ai nevoie de Node.js 18+ instalat înainte.',
    },
    code: 'npm install -g @anthropic-ai/claude-code',
    level: 'beginner',
  },
  {
    id: 'qs-start',
    title: { en: 'Start your first session', ro: 'Pornește prima sesiune' },
    instruction: {
      en: 'Navigate to any project directory and type `claude` to start an interactive session. You\'ll be prompted to log in the first time.',
      ro: 'Navighează în orice director de proiect și scrie `claude` pentru a porni o sesiune interactivă. La prima utilizare vei fi rugat să te autentifici.',
    },
    code: 'cd your-project\nclaude',
    expectedOutput: '╭──────────────────────╮\n│ Claude Code v2.1.91  │\n╰──────────────────────╯',
    level: 'beginner',
  },
  {
    id: 'qs-first-prompt',
    title: { en: 'Ask your first question', ro: 'Pune prima întrebare' },
    instruction: {
      en: 'Type a question or instruction. Claude can read your codebase, write code, run commands, and more. Try something like:',
      ro: 'Scrie o întrebare sau instrucțiune. Claude poate citi codul tău, scrie cod, rula comenzi și altele. Încearcă ceva de genul:',
    },
    code: 'explain the architecture of this project',
    level: 'beginner',
  },
  {
    id: 'qs-slash-commands',
    title: { en: 'Discover slash commands', ro: 'Descoperă comenzile slash' },
    instruction: {
      en: 'Type `/` to see all available commands. The most useful ones to start with: `/help` for guidance, `/model` to switch AI models, `/clear` to start fresh.',
      ro: 'Scrie `/` pentru a vedea toate comenzile disponibile. Cele mai utile la început: `/help` pentru ghidaj, `/model` pentru schimbarea modelului AI, `/clear` pentru a lua de la zero.',
    },
    code: '/help',
    level: 'beginner',
  },
  {
    id: 'qs-init-claude-md',
    title: { en: 'Set up project memory', ro: 'Configurează memoria proiectului' },
    instruction: {
      en: 'Run `/init` to create a CLAUDE.md file in your project root. This file tells Claude about your project conventions, tech stack, and preferences. It\'s loaded automatically in every session.',
      ro: 'Rulează `/init` pentru a crea un fișier CLAUDE.md în root-ul proiectului. Acest fișier îi spune lui Claude despre convențiile proiectului, stack-ul tehnic și preferințele tale. Se încarcă automat în fiecare sesiune.',
    },
    code: '/init',
    level: 'beginner',
  },
  {
    id: 'qs-plan-mode',
    title: { en: 'Try Plan Mode', ro: 'Încearcă Plan Mode' },
    instruction: {
      en: 'Press Shift+Tab twice to enter Plan Mode. Here Claude will explore and plan without making changes — perfect for complex tasks. Press Shift+Tab again to go back to normal mode and execute the plan.',
      ro: 'Apasă Shift+Tab de două ori pentru a intra în Plan Mode. Aici Claude explorează și planifică fără a face modificări — perfect pentru task-uri complexe. Apasă Shift+Tab din nou pentru a reveni la modul normal și a executa planul.',
    },
    level: 'beginner',
  },
];
