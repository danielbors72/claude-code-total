import type { CommandCategory } from '../lib/types';

export const commandCategories: CommandCategory[] = [
  // ─── Session Management ───────────────────────────────────────────
  {
    id: 'session-management',
    name: {
      en: 'Session Management',
      ro: 'Gestionarea sesiunilor',
    },
    icon: 'terminal',
    items: [
      {
        id: 'cmd-clear',
        title: '/clear',
        oneLiner: {
          en: 'Clear conversation history',
          ro: 'Sterge istoricul conversatiei',
        },
        explanation: {
          en: 'Wipes the entire conversation so you start fresh. Use it when context gets cluttered or you want to switch topics without leftover assumptions.',
          ro: 'Sterge toata conversatia si pornesti de la zero. Foloseste cand contextul e prea incarcat sau vrei sa schimbi subiectul fara resturi din discutia anterioara.',
        },
        example: {
          en: '/clear',
          ro: '/clear',
        },
        category: 'session-management',
        level: 'beginner',
        tags: ['session', 'reset', 'context'],
      },
      {
        id: 'cmd-compact',
        title: '/compact',
        oneLiner: {
          en: 'Compress context with optional focus area',
          ro: 'Comprima contextul, optional cu un focus specific',
        },
        explanation: {
          en: 'Summarizes the conversation to free up token space while keeping what matters. Add a focus parameter to tell Claude which parts to prioritize during compression.',
          ro: 'Rezuma conversatia ca sa elibereze spatiu de tokeni, pastrand ce conteaza. Adauga un parametru de focus ca sa-i spui lui Claude ce sa prioritizeze la compresie.',
        },
        example: {
          en: '/compact focus on auth changes',
          ro: '/compact focus pe modificarile de autentificare',
        },
        category: 'session-management',
        level: 'all',
        tags: ['context', 'compression', 'tokens', 'memory'],
      },
      {
        id: 'cmd-resume',
        title: '/resume',
        oneLiner: {
          en: 'Resume or switch to a previous session',
          ro: 'Reia sau comuta la o sesiune anterioara',
        },
        explanation: {
          en: 'Opens a picker to continue a past conversation. Great for multi-day tasks or when you closed the terminal mid-work.',
          ro: 'Deschide o lista din care alegi o conversatie anterioara. Perfect pentru taskuri pe mai multe zile sau cand ai inchis terminalul in mijlocul lucrului.',
        },
        example: {
          en: '/resume',
          ro: '/resume',
        },
        category: 'session-management',
        level: 'all',
        tags: ['session', 'history', 'continue'],
      },
      {
        id: 'cmd-rename',
        title: '/rename',
        oneLiner: {
          en: 'Name the current session for easy resumption',
          ro: 'Denumeste sesiunea curenta pentru reluare usoara',
        },
        explanation: {
          en: 'Gives the current session a memorable name so you can find it quickly with /resume. Especially useful when juggling multiple features or projects.',
          ro: 'Da sesiunii curente un nume usor de retinut ca s-o gasesti rapid cu /resume. Util mai ales cand lucrezi pe mai multe features sau proiecte.',
        },
        example: {
          en: '/rename auth-refactor',
          ro: '/rename refactorizare-autentificare',
        },
        category: 'session-management',
        level: 'all',
        tags: ['session', 'naming', 'organization'],
      },
      {
        id: 'cmd-branch',
        title: '/branch',
        oneLiner: {
          en: 'Branch conversation into a new path',
          ro: 'Ramifica conversatia intr-un drum nou',
        },
        explanation: {
          en: 'Creates a fork of the current conversation so you can explore an alternative approach without losing your original thread. Think of it like git branch for your chat.',
          ro: 'Creeaza o ramificatie a conversatiei curente ca sa explorezi o abordare alternativa fara sa pierzi firul original. Gandeste-te la el ca git branch pentru chat.',
        },
        example: {
          en: '/branch try-redis-cache',
          ro: '/branch incearca-cache-redis',
        },
        category: 'session-management',
        level: 'all',
        tags: ['session', 'branching', 'exploration'],
      },
      {
        id: 'cmd-cost',
        title: '/cost',
        oneLiner: {
          en: 'Show token usage with per-model and cache breakdown',
          ro: 'Arata consumul de tokeni cu detalii per model si cache',
        },
        explanation: {
          en: 'Displays a detailed breakdown of tokens used in the current session, split by model and cache hits. Helps you understand where your quota is going.',
          ro: 'Afiseaza un breakdown detaliat al tokenilor folositi in sesiunea curenta, impartiti pe model si cache. Te ajuta sa intelegi unde se duce quota.',
        },
        example: {
          en: '/cost',
          ro: '/cost',
        },
        category: 'session-management',
        level: 'all',
        tags: ['tokens', 'usage', 'billing', 'monitoring'],
        isNew: true,
      },
      {
        id: 'cmd-context',
        title: '/context',
        oneLiner: {
          en: 'Visualize context usage in a grid display',
          ro: 'Vizualizeaza utilizarea contextului intr-un grid',
        },
        explanation: {
          en: 'Shows a visual grid of how the context window is being used. Helps you see how much space is left and what is taking up room in the conversation.',
          ro: 'Arata un grid vizual cu modul in care e folosita fereastra de context. Te ajuta sa vezi cat spatiu mai ai si ce ocupa loc in conversatie.',
        },
        example: {
          en: '/context',
          ro: '/context',
        },
        category: 'session-management',
        level: 'all',
        tags: ['context', 'visualization', 'tokens'],
      },
      {
        id: 'cmd-diff',
        title: '/diff',
        oneLiner: {
          en: 'Interactive diff viewer for changes made',
          ro: 'Viewer interactiv de diff-uri pentru modificarile facute',
        },
        explanation: {
          en: 'Opens an interactive diff of all file changes Claude has made during the session. Review what changed before committing or continuing.',
          ro: 'Deschide un diff interactiv cu toate modificarile facute de Claude in sesiune. Revizuieste ce s-a schimbat inainte sa faci commit sau sa continui.',
        },
        example: {
          en: '/diff',
          ro: '/diff',
        },
        category: 'session-management',
        level: 'all',
        tags: ['diff', 'review', 'changes'],
      },
      {
        id: 'cmd-copy',
        title: '/copy',
        oneLiner: {
          en: 'Copy last or Nth response to clipboard',
          ro: 'Copiaza ultimul raspuns sau al N-lea in clipboard',
        },
        explanation: {
          en: 'Copies Claude\'s last response (or a specific one by number) to your clipboard. Handy for pasting code snippets or explanations elsewhere.',
          ro: 'Copiaza ultimul raspuns al lui Claude (sau unul specific, dupa numar) in clipboard. Util cand vrei sa lipesti cod sau explicatii in alta parte.',
        },
        example: {
          en: '/copy 3',
          ro: '/copy 3',
        },
        category: 'session-management',
        level: 'all',
        tags: ['clipboard', 'copy', 'output'],
      },
      {
        id: 'cmd-rewind',
        title: '/rewind',
        oneLiner: {
          en: 'Rewind conversation and/or code to a checkpoint',
          ro: 'Deruleaza inapoi conversatia si/sau codul la un checkpoint',
        },
        explanation: {
          en: 'Rolls back both the conversation and file changes to a previous point. Use it when Claude went down a wrong path and you want to undo everything cleanly.',
          ro: 'Deruleaza inapoi atat conversatia cat si modificarile din fisiere la un punct anterior. Foloseste cand Claude a luat-o pe un drum gresit si vrei sa anulezi totul curat.',
        },
        example: {
          en: '/rewind',
          ro: '/rewind',
        },
        category: 'session-management',
        level: 'all',
        tags: ['undo', 'rollback', 'checkpoint'],
      },
      {
        id: 'cmd-export',
        title: '/export',
        oneLiner: {
          en: 'Export conversation to a file',
          ro: 'Exporta conversatia intr-un fisier',
        },
        explanation: {
          en: 'Saves the entire conversation to a file. Useful for documentation, sharing with teammates, or keeping a record of complex debugging sessions.',
          ro: 'Salveaza intreaga conversatie intr-un fisier. Util pentru documentatie, pentru a impartasi cu colegii, sau pentru a pastra un istoric al sesiunilor complexe de debugging.',
        },
        example: {
          en: '/export',
          ro: '/export',
        },
        category: 'session-management',
        level: 'all',
        tags: ['export', 'save', 'documentation'],
      },
    ],
  },

  // ─── Configuration ────────────────────────────────────────────────
  {
    id: 'configuration',
    name: {
      en: 'Configuration',
      ro: 'Configurare',
    },
    icon: 'settings',
    items: [
      {
        id: 'cmd-config',
        title: '/config',
        oneLiner: {
          en: 'Open settings interface',
          ro: 'Deschide interfata de setari',
        },
        explanation: {
          en: 'Opens the interactive settings panel where you can adjust all Claude Code preferences. This is the central place for customizing your experience.',
          ro: 'Deschide panoul interactiv de setari unde poti ajusta toate preferintele Claude Code. Acesta e locul central pentru personalizarea experientei tale.',
        },
        example: {
          en: '/config',
          ro: '/config',
        },
        category: 'configuration',
        level: 'beginner',
        tags: ['settings', 'preferences', 'setup'],
      },
      {
        id: 'cmd-model',
        title: '/model',
        oneLiner: {
          en: 'Switch AI model',
          ro: 'Schimba modelul AI',
        },
        explanation: {
          en: 'Switches the active model mid-conversation. Use it to jump between Sonnet for speed and Opus for complex reasoning without starting over.',
          ro: 'Schimba modelul activ in mijlocul conversatiei. Foloseste ca sa sari intre Sonnet pentru viteza si Opus pentru rationament complex fara sa o iei de la capat.',
        },
        example: {
          en: '/model sonnet',
          ro: '/model sonnet',
        },
        category: 'configuration',
        level: 'beginner',
        tags: ['model', 'switch', 'sonnet', 'opus'],
      },
      {
        id: 'cmd-fast',
        title: '/fast',
        oneLiner: {
          en: 'Toggle fast mode for quicker responses',
          ro: 'Comuta modul rapid pentru raspunsuri mai rapide',
        },
        explanation: {
          en: 'Toggles fast mode on or off. When enabled, Claude prioritizes speed over depth, great for simple questions or rapid iteration loops.',
          ro: 'Activeaza sau dezactiveaza modul rapid. Cand e activ, Claude prioritizeaza viteza in detrimentul profunzimii, ideal pentru intrebari simple sau iteratii rapide.',
        },
        example: {
          en: '/fast on',
          ro: '/fast on',
        },
        category: 'configuration',
        level: 'all',
        tags: ['speed', 'performance', 'mode'],
        isNew: true,
      },
      {
        id: 'cmd-theme',
        title: '/theme',
        oneLiner: {
          en: 'Change color theme',
          ro: 'Schimba tema de culori',
        },
        explanation: {
          en: 'Switches the visual theme of the CLI interface. Pick a theme that is comfortable for your eyes and matches your terminal setup.',
          ro: 'Schimba tema vizuala a interfetei CLI. Alege o tema confortabila pentru ochi care se potriveste cu setup-ul terminalului tau.',
        },
        example: {
          en: '/theme',
          ro: '/theme',
        },
        category: 'configuration',
        level: 'all',
        tags: ['theme', 'appearance', 'visual'],
      },
      {
        id: 'cmd-permissions',
        title: '/permissions',
        oneLiner: {
          en: 'View and update permission settings',
          ro: 'Vizualizeaza si actualizeaza setarile de permisiuni',
        },
        explanation: {
          en: 'Shows which tools and actions Claude is allowed to perform, and lets you update them. Controls things like file writes, command execution, and browser access.',
          ro: 'Arata ce tool-uri si actiuni are voie Claude sa execute si te lasa sa le actualizezi. Controleaza scrierea fisierelor, executia comenzilor si accesul la browser.',
        },
        example: {
          en: '/permissions',
          ro: '/permissions',
        },
        category: 'configuration',
        level: 'all',
        tags: ['permissions', 'security', 'access'],
      },
      {
        id: 'cmd-effort',
        title: '/effort',
        oneLiner: {
          en: 'Set reasoning effort level',
          ro: 'Seteaza nivelul de efort al rationamentului',
        },
        explanation: {
          en: 'Controls how much thinking Claude puts into each response. Lower effort means faster but shallower; higher effort means deeper analysis. Auto lets Claude decide.',
          ro: 'Controleaza cat de mult gandeste Claude la fiecare raspuns. Efort mai mic inseamna mai rapid dar mai superficial; efort mai mare inseamna analiza mai profunda. Auto il lasa pe Claude sa decida.',
        },
        example: {
          en: '/effort high',
          ro: '/effort high',
        },
        category: 'configuration',
        level: 'all',
        tags: ['effort', 'reasoning', 'performance'],
      },
      {
        id: 'cmd-color',
        title: '/color',
        oneLiner: {
          en: 'Set prompt-bar color',
          ro: 'Seteaza culoarea barei de prompt',
        },
        explanation: {
          en: 'Changes the accent color of the prompt bar. A quick way to visually distinguish between different projects or environments.',
          ro: 'Schimba culoarea de accent a barei de prompt. Un mod rapid de a distinge vizual intre proiecte sau medii diferite.',
        },
        example: {
          en: '/color blue',
          ro: '/color blue',
        },
        category: 'configuration',
        level: 'all',
        tags: ['color', 'prompt', 'visual', 'customization'],
      },
      {
        id: 'cmd-keybindings',
        title: '/keybindings',
        oneLiner: {
          en: 'Customize keyboard shortcuts',
          ro: 'Personalizeaza scurtaturile de tastatura',
        },
        explanation: {
          en: 'Opens the keybinding editor to remap keyboard shortcuts. Customize the interface to match your muscle memory from other editors.',
          ro: 'Deschide editorul de scurtaturi pentru a remapa tastele. Personalizeaza interfata sa se potriveasca cu reflexele tale din alte editoare.',
        },
        example: {
          en: '/keybindings',
          ro: '/keybindings',
        },
        category: 'configuration',
        level: 'all',
        tags: ['keyboard', 'shortcuts', 'customization'],
      },
      {
        id: 'cmd-terminal-setup',
        title: '/terminal-setup',
        oneLiner: {
          en: 'Configure terminal key bindings',
          ro: 'Configureaza key bindings-urile terminalului',
        },
        explanation: {
          en: 'Helps configure your terminal emulator key bindings for optimal Claude Code usage. Run this if certain key combinations are not working as expected.',
          ro: 'Te ajuta sa configurezi key bindings-urile emulatorului de terminal pentru o utilizare optima a Claude Code. Ruleaza daca anumite combinatii de taste nu functioneaza corect.',
        },
        example: {
          en: '/terminal-setup',
          ro: '/terminal-setup',
        },
        category: 'configuration',
        level: 'all',
        tags: ['terminal', 'setup', 'keybindings'],
      },
    ],
  },

  // ─── Tools & Features ─────────────────────────────────────────────
  {
    id: 'tools-features',
    name: {
      en: 'Tools & Features',
      ro: 'Instrumente si functionalitati',
    },
    icon: 'wrench',
    items: [
      {
        id: 'cmd-init',
        title: '/init',
        oneLiner: {
          en: 'Create CLAUDE.md configuration file',
          ro: 'Creeaza fisierul de configurare CLAUDE.md',
        },
        explanation: {
          en: 'Generates a CLAUDE.md file in the current project with conventions, tech stack, and project-specific instructions. The foundation for Claude understanding your codebase.',
          ro: 'Genereaza un fisier CLAUDE.md in proiectul curent cu conventii, tech stack si instructiuni specifice proiectului. Fundatia prin care Claude iti intelege codebase-ul.',
        },
        example: {
          en: '/init',
          ro: '/init',
        },
        category: 'tools-features',
        level: 'beginner',
        tags: ['init', 'setup', 'claude-md', 'project'],
      },
      {
        id: 'cmd-memory',
        title: '/memory',
        oneLiner: {
          en: 'Edit CLAUDE.md files',
          ro: 'Editeaza fisierele CLAUDE.md',
        },
        explanation: {
          en: 'Opens CLAUDE.md files for editing so you can update project instructions, conventions, or preferences. Changes take effect immediately in the current session.',
          ro: 'Deschide fisierele CLAUDE.md pentru editare ca sa actualizezi instructiunile proiectului, conventiile sau preferintele. Modificarile au efect imediat in sesiunea curenta.',
        },
        example: {
          en: '/memory',
          ro: '/memory',
        },
        category: 'tools-features',
        level: 'all',
        tags: ['memory', 'claude-md', 'instructions'],
      },
      {
        id: 'cmd-mcp',
        title: '/mcp',
        oneLiner: {
          en: 'Manage MCP servers interactively',
          ro: 'Gestioneaza serverele MCP interactiv',
        },
        explanation: {
          en: 'Opens an interactive manager for Model Context Protocol servers. Add, remove, or configure MCP servers that extend Claude with external tools and data sources.',
          ro: 'Deschide un manager interactiv pentru serverele Model Context Protocol. Adauga, sterge sau configureaza servere MCP care extind Claude cu tool-uri si surse de date externe.',
        },
        example: {
          en: '/mcp',
          ro: '/mcp',
        },
        category: 'tools-features',
        level: 'all',
        tags: ['mcp', 'servers', 'tools', 'integration'],
      },
      {
        id: 'cmd-hooks',
        title: '/hooks',
        oneLiner: {
          en: 'Manage lifecycle hooks',
          ro: 'Gestioneaza hook-urile de lifecycle',
        },
        explanation: {
          en: 'Configure hooks that run automatically at specific lifecycle points like before/after edits, commits, or tool calls. Automate quality checks and workflows.',
          ro: 'Configureaza hook-uri care ruleaza automat in momente specifice din lifecycle, cum ar fi inainte/dupa editari, commit-uri sau apeluri de tool-uri. Automatizeaza verificari de calitate si workflow-uri.',
        },
        example: {
          en: '/hooks',
          ro: '/hooks',
        },
        category: 'tools-features',
        level: 'all',
        tags: ['hooks', 'automation', 'lifecycle'],
      },
      {
        id: 'cmd-skills',
        title: '/skills',
        oneLiner: {
          en: 'List available skills',
          ro: 'Listeaza skill-urile disponibile',
        },
        explanation: {
          en: 'Shows all registered skills (custom slash commands defined in .claude/commands). Use it to discover what project-specific automations are available.',
          ro: 'Arata toate skill-urile inregistrate (comenzi slash custom definite in .claude/commands). Foloseste ca sa descoperi ce automatizari specifice proiectului sunt disponibile.',
        },
        example: {
          en: '/skills',
          ro: '/skills',
        },
        category: 'tools-features',
        level: 'all',
        tags: ['skills', 'commands', 'custom'],
      },
      {
        id: 'cmd-agents',
        title: '/agents',
        oneLiner: {
          en: 'Manage custom agents',
          ro: 'Gestioneaza agentii custom',
        },
        explanation: {
          en: 'View and manage custom agent configurations defined in .claude/agents. Agents are specialized personas with specific system prompts and tool permissions.',
          ro: 'Vizualizeaza si gestioneaza configuratiile de agenti custom definite in .claude/agents. Agentii sunt personaje specializate cu system prompts si permisiuni de tool-uri specifice.',
        },
        example: {
          en: '/agents',
          ro: '/agents',
        },
        category: 'tools-features',
        level: 'all',
        tags: ['agents', 'custom', 'personas'],
      },
      {
        id: 'cmd-chrome',
        title: '/chrome',
        oneLiner: {
          en: 'Chrome browser integration',
          ro: 'Integrare cu browserul Chrome',
        },
        explanation: {
          en: 'Enables Chrome browser control for tasks like taking screenshots, reading page content, or interacting with web UIs. Requires Chrome to be installed.',
          ro: 'Activeaza controlul browserului Chrome pentru sarcini ca screenshot-uri, citirea continutului paginilor sau interactiunea cu interfete web. Necesita Chrome instalat.',
        },
        example: {
          en: '/chrome',
          ro: '/chrome',
        },
        category: 'tools-features',
        level: 'all',
        tags: ['chrome', 'browser', 'web', 'screenshot'],
      },
      {
        id: 'cmd-reload-plugins',
        title: '/reload-plugins',
        oneLiner: {
          en: 'Hot-reload skills and plugins',
          ro: 'Reincarca la cald skill-urile si plugin-urile',
        },
        explanation: {
          en: 'Reloads all skills and plugins without restarting Claude Code. Use after editing .claude/commands files or adding new MCP configurations.',
          ro: 'Reincarca toate skill-urile si plugin-urile fara sa repornesti Claude Code. Foloseste dupa ce editezi fisierele din .claude/commands sau adaugi configuratii MCP noi.',
        },
        example: {
          en: '/reload-plugins',
          ro: '/reload-plugins',
        },
        category: 'tools-features',
        level: 'all',
        tags: ['plugins', 'reload', 'skills', 'hot-reload'],
      },
      {
        id: 'cmd-add-dir',
        title: '/add-dir',
        oneLiner: {
          en: 'Add additional working directory',
          ro: 'Adauga un director de lucru suplimentar',
        },
        explanation: {
          en: 'Adds another directory to Claude\'s working context so it can read and edit files across multiple projects or monorepo packages simultaneously.',
          ro: 'Adauga un alt director in contextul de lucru al lui Claude ca sa poata citi si edita fisiere din mai multe proiecte sau pachete monorepo simultan.',
        },
        example: {
          en: '/add-dir ../shared-utils',
          ro: '/add-dir ../shared-utils',
        },
        category: 'tools-features',
        level: 'all',
        tags: ['directory', 'workspace', 'multi-project'],
      },
    ],
  },

  // ─── Special Commands ─────────────────────────────────────────────
  {
    id: 'special-commands',
    name: {
      en: 'Special Commands',
      ro: 'Comenzi speciale',
    },
    icon: 'sparkles',
    items: [
      {
        id: 'cmd-powerup',
        title: '/powerup',
        oneLiner: {
          en: 'Interactive feature lessons to learn Claude Code',
          ro: 'Lectii interactive pentru a invata Claude Code',
        },
        explanation: {
          en: 'Launches interactive tutorials that teach you Claude Code features hands-on. A great way for new users to get up to speed quickly.',
          ro: 'Lanseaza tutoriale interactive care te invata functiile Claude Code prin practica. Un mod excelent pentru utilizatorii noi sa se puna la punct rapid.',
        },
        example: {
          en: '/powerup',
          ro: '/powerup',
        },
        category: 'special-commands',
        level: 'beginner',
        tags: ['tutorial', 'learning', 'onboarding'],
        isNew: true,
      },
      {
        id: 'cmd-btw',
        title: '/btw',
        oneLiner: {
          en: 'Ask a side question without using context',
          ro: 'Pune o intrebare laterala fara sa folosesti contextul',
        },
        explanation: {
          en: 'Asks a quick question in a separate context so it does not pollute your main conversation. Perfect for checking syntax, looking something up, or verifying a fact mid-task.',
          ro: 'Pune o intrebare rapida intr-un context separat ca sa nu polueze conversatia principala. Perfect pentru verificat sintaxa, cautat ceva sau confirmat un fapt in mijlocul unui task.',
        },
        example: {
          en: '/btw what is the syntax for TypeScript generics?',
          ro: '/btw care e sintaxa pentru TypeScript generics?',
        },
        category: 'special-commands',
        level: 'advanced',
        tags: ['side-question', 'quick', 'context-free'],
      },
      {
        id: 'cmd-plan',
        title: '/plan',
        oneLiner: {
          en: 'Enter plan mode with optional description',
          ro: 'Intra in modul plan cu descriere optionala',
        },
        explanation: {
          en: 'Switches Claude into planning mode where it outlines an approach before executing. Add a description to scope the plan. Claude will not make changes until you approve.',
          ro: 'Trece Claude in modul de planificare unde schiteaza o abordare inainte sa execute. Adauga o descriere pentru a delimita planul. Claude nu va face modificari pana nu aprobi.',
        },
        example: {
          en: '/plan refactor the auth module to use JWT',
          ro: '/plan refactorizeaza modulul de auth sa foloseasca JWT',
        },
        category: 'special-commands',
        level: 'all',
        tags: ['planning', 'strategy', 'review'],
      },
      {
        id: 'cmd-loop',
        title: '/loop',
        oneLiner: {
          en: 'Schedule a recurring task',
          ro: 'Programeaza un task recurent',
        },
        explanation: {
          en: 'Sets up a task that runs repeatedly at a given interval. Useful for watch-like behaviors such as re-running tests, checking build status, or monitoring logs.',
          ro: 'Seteaza un task care ruleaza repetat la un interval dat. Util pentru comportamente de tip watch cum ar fi rerularea testelor, verificarea build-ului sau monitorizarea log-urilor.',
        },
        example: {
          en: '/loop 30s run the test suite and report failures',
          ro: '/loop 30s ruleaza suita de teste si raporteaza esecurile',
        },
        category: 'special-commands',
        level: 'advanced',
        tags: ['loop', 'recurring', 'automation', 'watch'],
      },
      {
        id: 'cmd-voice',
        title: '/voice',
        oneLiner: {
          en: 'Enable push-to-talk voice input',
          ro: 'Activeaza inputul vocal push-to-talk',
        },
        explanation: {
          en: 'Turns on voice input mode supporting 20 languages. Press and hold a key to speak, then release to send. Hands-free coding when your hands are busy.',
          ro: 'Activeaza modul de input vocal cu suport pentru 20 de limbi. Tine apasat o tasta sa vorbesti, apoi elibereaz-o sa trimiti. Coding hands-free cand ai mainile ocupate.',
        },
        example: {
          en: '/voice',
          ro: '/voice',
        },
        category: 'special-commands',
        level: 'all',
        tags: ['voice', 'speech', 'input', 'accessibility'],
      },
      {
        id: 'cmd-doctor',
        title: '/doctor',
        oneLiner: {
          en: 'Diagnose installation issues',
          ro: 'Diagnosticheaza probleme de instalare',
        },
        explanation: {
          en: 'Runs a diagnostic check on your Claude Code installation, verifying dependencies, permissions, and configuration. The first thing to try when something is not working.',
          ro: 'Ruleaza o verificare de diagnostic a instalarii Claude Code, verificand dependentele, permisiunile si configuratia. Primul lucru de incercat cand ceva nu functioneaza.',
        },
        example: {
          en: '/doctor',
          ro: '/doctor',
        },
        category: 'special-commands',
        level: 'all',
        tags: ['diagnostic', 'troubleshooting', 'health'],
      },
      {
        id: 'cmd-pr-comments',
        title: '/pr-comments',
        oneLiner: {
          en: 'Fetch GitHub PR comments for review',
          ro: 'Aduce comentariile de pe un PR GitHub pentru review',
        },
        explanation: {
          en: 'Pulls review comments from a GitHub pull request so Claude can help you address them. Provide a PR number or let it detect the current branch PR.',
          ro: 'Aduce comentariile de review de pe un pull request GitHub ca Claude sa te ajute sa le rezolvi. Specifica un numar de PR sau lasa-l sa detecteze PR-ul branch-ului curent.',
        },
        example: {
          en: '/pr-comments 42',
          ro: '/pr-comments 42',
        },
        category: 'special-commands',
        level: 'all',
        tags: ['github', 'pr', 'review', 'comments'],
      },
      {
        id: 'cmd-stats',
        title: '/stats',
        oneLiner: {
          en: 'View usage streaks and preferences',
          ro: 'Vizualizeaza statisticile de utilizare si preferinte',
        },
        explanation: {
          en: 'Shows your usage patterns including daily streaks, most-used commands, and session statistics. A fun way to see how you are using Claude Code over time.',
          ro: 'Arata pattern-urile tale de utilizare inclusiv streak-uri zilnice, comenzi cele mai folosite si statistici de sesiune. Un mod fun de a vedea cum folosesti Claude Code in timp.',
        },
        example: {
          en: '/stats',
          ro: '/stats',
        },
        category: 'special-commands',
        level: 'all',
        tags: ['stats', 'usage', 'analytics'],
      },
      {
        id: 'cmd-insights',
        title: '/insights',
        oneLiner: {
          en: 'Analyze sessions report',
          ro: 'Analizeaza raportul sesiunilor',
        },
        explanation: {
          en: 'Generates an analytical report of your recent sessions, highlighting patterns, frequent tasks, and suggestions for improving your workflow.',
          ro: 'Genereaza un raport analitic al sesiunilor recente, evidentiind pattern-uri, taskuri frecvente si sugestii pentru imbunatatirea workflow-ului.',
        },
        example: {
          en: '/insights',
          ro: '/insights',
        },
        category: 'special-commands',
        level: 'all',
        tags: ['insights', 'analytics', 'report'],
      },
      {
        id: 'cmd-desktop',
        title: '/desktop',
        oneLiner: {
          en: 'Continue conversation in Desktop app',
          ro: 'Continua conversatia in aplicatia Desktop',
        },
        explanation: {
          en: 'Transfers the current conversation to the Claude Desktop application. Use it when you want a richer UI or need to switch from terminal to a graphical interface.',
          ro: 'Transfera conversatia curenta in aplicatia Claude Desktop. Foloseste cand vrei o interfata mai bogata sau trebuie sa treci de la terminal la o interfata grafica.',
        },
        example: {
          en: '/desktop',
          ro: '/desktop',
        },
        category: 'special-commands',
        level: 'all',
        tags: ['desktop', 'app', 'transfer'],
      },
      {
        id: 'cmd-remote-control',
        title: '/remote-control',
        oneLiner: {
          en: 'Bridge to claude.ai/code web interface',
          ro: 'Punte catre interfata web claude.ai/code',
        },
        explanation: {
          en: 'Connects your local Claude Code CLI to the claude.ai/code web interface. Control your local environment remotely from any browser, great for mobile or tablet access.',
          ro: 'Conecteaza CLI-ul local Claude Code la interfata web claude.ai/code. Controleaza mediul local de la distanta din orice browser, ideal pentru acces de pe mobil sau tableta.',
        },
        example: {
          en: '/rc',
          ro: '/rc',
        },
        category: 'special-commands',
        level: 'advanced',
        tags: ['remote', 'web', 'bridge', 'rc'],
        isNew: true,
      },
      {
        id: 'cmd-usage',
        title: '/usage',
        oneLiner: {
          en: 'Check plan limits and rate status',
          ro: 'Verifica limitele planului si statusul ratei',
        },
        explanation: {
          en: 'Shows your current plan usage, remaining quota, and rate limit status. Helps you understand how much capacity you have left before hitting limits.',
          ro: 'Arata consumul curent din plan, quota ramasa si statusul limitei de rata. Te ajuta sa intelegi cata capacitate mai ai inainte sa atingi limitele.',
        },
        example: {
          en: '/usage',
          ro: '/usage',
        },
        category: 'special-commands',
        level: 'all',
        tags: ['usage', 'quota', 'rate-limit', 'billing'],
      },
      {
        id: 'cmd-schedule',
        title: '/schedule',
        oneLiner: {
          en: 'Manage cloud scheduled tasks',
          ro: 'Gestioneaza taskurile programate in cloud',
        },
        explanation: {
          en: 'Create and manage tasks that run on a schedule in the cloud. Set up automated code reviews, dependency updates, or any recurring background job.',
          ro: 'Creeaza si gestioneaza taskuri care ruleaza programat in cloud. Seteaza code review-uri automate, actualizari de dependente sau orice job recurent de fundal.',
        },
        example: {
          en: '/schedule',
          ro: '/schedule',
        },
        category: 'special-commands',
        level: 'advanced',
        tags: ['schedule', 'cloud', 'automation', 'cron'],
      },
      {
        id: 'cmd-security-review',
        title: '/security-review',
        oneLiner: {
          en: 'Security analysis of recent changes',
          ro: 'Analiza de securitate a modificarilor recente',
        },
        explanation: {
          en: 'Runs a security-focused review of recent code changes, looking for vulnerabilities, exposed secrets, and insecure patterns. A quick pre-merge safety check.',
          ro: 'Ruleaza un review focusat pe securitate al modificarilor recente de cod, cautand vulnerabilitati, secrete expuse si pattern-uri nesigure. O verificare rapida de siguranta pre-merge.',
        },
        example: {
          en: '/security-review',
          ro: '/security-review',
        },
        category: 'special-commands',
        level: 'all',
        tags: ['security', 'review', 'audit', 'vulnerabilities'],
      },
      {
        id: 'cmd-help',
        title: '/help',
        oneLiner: {
          en: 'Show help and available commands',
          ro: 'Arata ajutorul si comenzile disponibile',
        },
        explanation: {
          en: 'Displays the full list of available slash commands with brief descriptions. The quickest way to discover what Claude Code can do.',
          ro: 'Afiseaza lista completa a comenzilor slash disponibile cu descrieri scurte. Cel mai rapid mod de a descoperi ce poate face Claude Code.',
        },
        example: {
          en: '/help',
          ro: '/help',
        },
        category: 'special-commands',
        level: 'beginner',
        tags: ['help', 'commands', 'documentation'],
      },
      {
        id: 'cmd-feedback',
        title: '/feedback',
        oneLiner: {
          en: 'Submit feedback to Anthropic',
          ro: 'Trimite feedback catre Anthropic',
        },
        explanation: {
          en: 'Opens a form to send feedback or bug reports directly to the Anthropic team. Also available as /bug. Your input helps improve Claude Code for everyone.',
          ro: 'Deschide un formular pentru a trimite feedback sau rapoarte de bug-uri direct echipei Anthropic. Disponibil si ca /bug. Feedback-ul tau ajuta la imbunatatirea Claude Code pentru toata lumea.',
        },
        example: {
          en: '/feedback',
          ro: '/feedback',
        },
        category: 'special-commands',
        level: 'all',
        tags: ['feedback', 'bug', 'report', 'anthropic'],
      },
      {
        id: 'cmd-release-notes',
        title: '/release-notes',
        oneLiner: {
          en: 'Interactive version changelog',
          ro: 'Changelog interactiv pe versiuni',
        },
        explanation: {
          en: 'Shows an interactive changelog with new features and fixes for each version. Stay up to date with what changed in recent updates.',
          ro: 'Arata un changelog interactiv cu functii noi si fix-uri pentru fiecare versiune. Ramai la curent cu ce s-a schimbat in actualizarile recente.',
        },
        example: {
          en: '/release-notes',
          ro: '/release-notes',
        },
        category: 'special-commands',
        level: 'all',
        tags: ['changelog', 'updates', 'version', 'release'],
        isNew: true,
      },
    ],
  },
];
