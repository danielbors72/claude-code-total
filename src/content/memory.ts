import type { CommandCategory } from '../lib/types';

export const memoryCategories: CommandCategory[] = [
  // ─── CLAUDE.md Locations ─────────────────────────────────────────────
  {
    id: 'claudemd-locations',
    name: {
      en: 'CLAUDE.md Locations',
      ro: 'Locații CLAUDE.md',
    },
    icon: '📍',
    items: [
      {
        id: 'memory-project-claudemd',
        title: './CLAUDE.md',
        oneLiner: {
          en: 'Project-level instructions, shared with team via VCS',
          ro: 'Instrucțiuni la nivel de proiect, partajate cu echipa prin VCS',
        },
        explanation: {
          en: 'This is the most common location for project instructions. Place it in your repo root and it gets loaded automatically every time Claude opens that project. Since it lives in version control, your whole team benefits from the same rules.',
          ro: 'Cel mai folosit loc pentru instrucțiuni de proiect. Îl pui în root-ul repo-ului și se încarcă automat de fiecare dată când Claude deschide proiectul. Cum e în version control, toată echipa lucrează cu aceleași reguli.',
        },
        example: {
          en: 'Add "Always use TypeScript strict mode" to ./CLAUDE.md and every team member\'s Claude session picks it up.',
          ro: 'Adaugi "Always use TypeScript strict mode" în ./CLAUDE.md și sesiunea Claude a fiecărui coleg o preia automat.',
        },
        category: 'claudemd-locations',
        level: 'beginner',
        tags: ['claudemd', 'project', 'instructions', 'vcs', 'team'],
      },
      {
        id: 'memory-global-claudemd',
        title: '~/.claude/CLAUDE.md',
        oneLiner: {
          en: 'Personal instructions applied to all projects',
          ro: 'Instrucțiuni personale aplicate la toate proiectele',
        },
        explanation: {
          en: 'Your personal preferences that follow you everywhere — coding style, language, response format. These load on top of any project-level CLAUDE.md, so you get both your personal rules and the project rules combined.',
          ro: 'Preferințele tale personale care te urmează peste tot — stil de cod, limbă, format de răspuns. Se încarcă pe lângă orice CLAUDE.md de proiect, deci primești și regulile tale și pe cele ale proiectului.',
        },
        example: {
          en: 'Put "Always respond in Romanian when I write in Romanian" in ~/.claude/CLAUDE.md and it works across all your projects.',
          ro: 'Pui "Răspunde mereu în română când scriu în română" în ~/.claude/CLAUDE.md și funcționează în toate proiectele tale.',
        },
        category: 'claudemd-locations',
        level: 'beginner',
        tags: ['claudemd', 'global', 'personal', 'preferences'],
      },
      {
        id: 'memory-org-claudemd',
        title: '/etc/claude-code/',
        oneLiner: {
          en: 'Organization-wide managed instructions',
          ro: 'Instrucțiuni gestionate la nivel de organizație',
        },
        explanation: {
          en: 'System-level configuration managed by your IT team or organization admin. These are enforced across all users on the machine and cannot be overridden by individual users. Useful for security policies and compliance rules.',
          ro: 'Configurare la nivel de sistem gestionată de echipa IT sau adminul organizației. Se aplică tuturor utilizatorilor de pe mașină și nu pot fi suprascrise individual. Utilă pentru politici de securitate și reguli de conformitate.',
        },
        category: 'claudemd-locations',
        level: 'advanced',
        tags: ['claudemd', 'organization', 'enterprise', 'admin', 'policy'],
      },
      {
        id: 'memory-import-directive',
        title: '@path/to/file',
        oneLiner: {
          en: 'Import external files into CLAUDE.md',
          ro: 'Importă fișiere externe în CLAUDE.md',
        },
        explanation: {
          en: 'Use the @-import syntax inside any CLAUDE.md to pull in content from other files. This keeps your main CLAUDE.md clean while splitting detailed instructions into separate focused files. Paths are relative to the CLAUDE.md location.',
          ro: 'Folosești sintaxa @-import în orice CLAUDE.md ca să aduci conținut din alte fișiere. Așa ții CLAUDE.md-ul principal curat, iar instrucțiunile detaliate stau în fișiere separate, focusate. Căile sunt relative la locația CLAUDE.md.',
        },
        example: {
          en: 'Add @docs/coding-standards.md inside CLAUDE.md to import your coding standards without cluttering the main file.',
          ro: 'Adaugi @docs/coding-standards.md în CLAUDE.md ca să imporți standardele de cod fără să aglomerezi fișierul principal.',
        },
        category: 'claudemd-locations',
        level: 'advanced',
        tags: ['claudemd', 'import', 'include', 'modular', 'organization'],
      },
    ],
  },

  // ─── Rules System ────────────────────────────────────────────────────
  {
    id: 'rules-system',
    name: {
      en: 'Rules System',
      ro: 'Sistem de reguli',
    },
    icon: '📏',
    items: [
      {
        id: 'memory-project-rules',
        title: '.claude/rules/*.md',
        oneLiner: {
          en: 'Project-specific rules, auto-loaded into context',
          ro: 'Reguli specifice proiectului, încărcate automat în context',
        },
        explanation: {
          en: 'Drop markdown files into .claude/rules/ and they are automatically loaded into every conversation for that project. Each file can focus on a single topic — testing conventions, naming patterns, architecture decisions. No imports needed, just create the file.',
          ro: 'Pui fișiere markdown în .claude/rules/ și se încarcă automat în fiecare conversație pentru proiectul respectiv. Fiecare fișier poate acoperi un singur subiect — convenții de testare, patternuri de naming, decizii de arhitectură. Nu trebuie să imporți nimic, doar creezi fișierul.',
        },
        example: {
          en: 'Create .claude/rules/testing.md with "Always use vitest, never jest" and Claude follows it in every session.',
          ro: 'Creezi .claude/rules/testing.md cu "Always use vitest, never jest" și Claude respectă regula în fiecare sesiune.',
        },
        category: 'rules-system',
        level: 'beginner',
        tags: ['rules', 'project', 'auto-load', 'conventions'],
      },
      {
        id: 'memory-user-rules',
        title: '~/.claude/rules/*.md',
        oneLiner: {
          en: 'User rules applied across all projects',
          ro: 'Reguli de utilizator aplicate în toate proiectele',
        },
        explanation: {
          en: 'Personal rules that apply everywhere you use Claude Code. Put your universal preferences here — code style, preferred libraries, response language. They combine with project rules, so you get both layers automatically.',
          ro: 'Reguli personale care se aplică peste tot unde folosești Claude Code. Pune aici preferințele tale universale — stil de cod, librării preferate, limba răspunsurilor. Se combină cu regulile de proiect, deci primești ambele straturi automat.',
        },
        category: 'rules-system',
        level: 'beginner',
        tags: ['rules', 'user', 'global', 'personal', 'preferences'],
      },
      {
        id: 'memory-rules-paths',
        title: 'paths: frontmatter',
        oneLiner: {
          en: 'Apply rules only to specific file paths',
          ro: 'Aplică reguli doar pentru anumite căi de fișiere',
        },
        explanation: {
          en: 'Add a paths field in the YAML frontmatter of a rule file to restrict it to certain files or directories. The rule only activates when Claude works on matching paths. This prevents irrelevant rules from cluttering context when working on unrelated code.',
          ro: 'Adaugi un câmp paths în frontmatter-ul YAML al unui fișier de reguli ca să-l restricționezi la anumite fișiere sau directoare. Regula se activează doar când Claude lucrează pe căile potrivite. Așa eviți ca reguli irelevante să ocupe context inutil.',
        },
        example: {
          en: 'A rule with paths: ["src/api/**"] only loads when Claude edits API files, keeping frontend work context-clean.',
          ro: 'O regulă cu paths: ["src/api/**"] se încarcă doar când Claude editează fișiere API, lăsând lucrul pe frontend fără context inutil.',
        },
        category: 'rules-system',
        level: 'advanced',
        tags: ['rules', 'paths', 'scoped', 'conditional', 'filter'],
      },
      {
        id: 'memory-frontmatter-format',
        title: 'Frontmatter format',
        oneLiner: {
          en: 'YAML frontmatter with description and paths fields',
          ro: 'Frontmatter YAML cu câmpuri description și paths',
        },
        explanation: {
          en: 'Rule files support YAML frontmatter at the top with two key fields: description (explains when the rule applies, helps with auto-selection) and paths (glob patterns to scope the rule). The body of the file contains the actual instructions in markdown.',
          ro: 'Fișierele de reguli suportă frontmatter YAML la început cu două câmpuri cheie: description (explică când se aplică regula, ajută la selecția automată) și paths (glob patterns pentru a limita regula). Corpul fișierului conține instrucțiunile propriu-zise în markdown.',
        },
        example: {
          en: '---\\ndescription: React component conventions\\npaths: ["src/components/**"]\\n---\\nAlways use functional components with hooks.',
          ro: '---\\ndescription: Convenții componente React\\npaths: ["src/components/**"]\\n---\\nFolosește mereu componente funcționale cu hooks.',
        },
        category: 'rules-system',
        level: 'advanced',
        tags: ['rules', 'frontmatter', 'yaml', 'description', 'paths', 'format'],
      },
    ],
  },

  // ─── Auto Memory ─────────────────────────────────────────────────────
  {
    id: 'auto-memory',
    name: {
      en: 'Auto Memory',
      ro: 'Memorie automată',
    },
    icon: '🧠',
    items: [
      {
        id: 'memory-location',
        title: 'Memory location',
        oneLiner: {
          en: 'Persistent memory stored at ~/.claude/projects/<proj>/memory/',
          ro: 'Memorie persistentă stocată în ~/.claude/projects/<proj>/memory/',
        },
        explanation: {
          en: 'Claude Code stores project-specific memory in a dedicated directory under your home folder. Each project gets its own memory space, identified by a hashed project path. This is where Claude remembers things between conversations.',
          ro: 'Claude Code stochează memoria specifică proiectului într-un director dedicat sub home. Fiecare proiect primește propriul spațiu de memorie, identificat printr-un hash al căii proiectului. Aici își amintește Claude lucruri între conversații.',
        },
        category: 'auto-memory',
        level: 'beginner',
        tags: ['memory', 'location', 'persistent', 'project', 'storage'],
      },
      {
        id: 'memory-index-file',
        title: 'MEMORY.md',
        oneLiner: {
          en: 'Index file, auto-loaded into every conversation context',
          ro: 'Fișier index, încărcat automat în contextul fiecărei conversații',
        },
        explanation: {
          en: 'MEMORY.md is the main index that Claude reads at the start of every conversation. It contains links to topic files and short summaries. Think of it as a table of contents for everything Claude should remember about your project.',
          ro: 'MEMORY.md e indexul principal pe care Claude îl citește la începutul fiecărei conversații. Conține linkuri către fișierele de topic și rezumate scurte. Gândește-te la el ca la un cuprins pentru tot ce trebuie să-și amintească Claude despre proiectul tău.',
        },
        example: {
          en: 'MEMORY.md might contain: "- [Auth setup](auth_setup.md) — Using NextAuth with GitHub provider, JWT sessions"',
          ro: 'MEMORY.md ar putea conține: "- [Auth setup](auth_setup.md) — Folosim NextAuth cu provider GitHub, sesiuni JWT"',
        },
        category: 'auto-memory',
        level: 'beginner',
        tags: ['memory', 'index', 'auto-load', 'context', 'summary'],
      },
      {
        id: 'memory-topic-files',
        title: 'Topic files',
        oneLiner: {
          en: 'Individual markdown files linked from MEMORY.md',
          ro: 'Fișiere markdown individuale linkuite din MEMORY.md',
        },
        explanation: {
          en: 'Each topic gets its own markdown file in the memory directory. Claude creates these automatically when it learns something important — architecture decisions, user preferences, project conventions. They are referenced from MEMORY.md and loaded when relevant.',
          ro: 'Fiecare topic primește propriul fișier markdown în directorul de memorie. Claude le creează automat când învață ceva important — decizii de arhitectură, preferințele tale, convenții de proiect. Sunt referite din MEMORY.md și încărcate când sunt relevante.',
        },
        example: {
          en: 'Claude creates user_preferences.md after learning you prefer Tailwind over CSS modules, and links it from MEMORY.md.',
          ro: 'Claude creează user_preferences.md după ce învață că preferi Tailwind în loc de CSS modules, și îl linkuiește din MEMORY.md.',
        },
        category: 'auto-memory',
        level: 'beginner',
        tags: ['memory', 'topics', 'files', 'knowledge', 'persistent'],
      },
      {
        id: 'memory-limits',
        title: 'Limits',
        oneLiner: {
          en: '25KB per file, 200 lines max in MEMORY.md',
          ro: '25KB per fișier, maxim 200 de linii în MEMORY.md',
        },
        explanation: {
          en: 'Memory files have size constraints to keep context manageable. Each individual file is capped at 25KB, and the MEMORY.md index is limited to 200 lines. If you hit these limits, it is time to reorganize — split topics into separate files or summarize older entries.',
          ro: 'Fișierele de memorie au limite de mărime ca să țină contextul gestionabil. Fiecare fișier e limitat la 25KB, iar indexul MEMORY.md la 200 de linii. Dacă atingi limitele, e momentul să reorganizezi — împarte topicurile în fișiere separate sau rezumă intrările vechi.',
        },
        category: 'auto-memory',
        level: 'advanced',
        tags: ['memory', 'limits', 'size', 'constraints', 'optimization'],
      },
      {
        id: 'memory-auto-loading',
        title: 'Auto-loading',
        oneLiner: {
          en: 'All memory files loaded into every conversation',
          ro: 'Toate fișierele de memorie încărcate în fiecare conversație',
        },
        explanation: {
          en: 'Memory files are loaded automatically at the start of each conversation — no manual action needed. Claude reads MEMORY.md and the linked topic files so it has full context from previous sessions. This is what makes Claude "remember" your project across conversations.',
          ro: 'Fișierele de memorie se încarcă automat la începutul fiecărei conversații — fără acțiune manuală. Claude citește MEMORY.md și fișierele de topic linkuite, deci are context complet din sesiunile anterioare. Asta face ca Claude să-și "amintească" proiectul tău între conversații.',
        },
        category: 'auto-memory',
        level: 'beginner',
        tags: ['memory', 'auto-load', 'context', 'persistent', 'automatic'],
      },
    ],
  },
];
