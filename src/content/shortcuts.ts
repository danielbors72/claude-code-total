import type { CommandCategory } from '../lib/types';

export const shortcutCategories: CommandCategory[] = [
  // ─── General Controls ───────────────────────────────────────────────
  {
    id: 'general-controls',
    name: {
      en: 'General Controls',
      ro: 'Comenzi generale',
    },
    icon: '⌨️',
    items: [
      {
        id: 'shortcut-ctrl-c',
        title: 'Cancel',
        shortcut: 'Ctrl+C',
        oneLiner: {
          en: 'Cancel input or generation',
          ro: 'Anulează input-ul sau generarea',
        },
        explanation: {
          en: 'Stops whatever Claude is currently doing — whether you are typing a prompt or Claude is mid-response. Use it when the answer is going in the wrong direction or you realise the prompt needs rephrasing.',
          ro: 'Oprește orice face Claude în momentul ăla — fie că scrii un prompt, fie că Claude generează un răspuns. Folosește-l când vezi că răspunsul o ia pe arătură sau vrei să reformulezi promptul.',
        },
        example: {
          en: 'Claude starts generating a long refactor you didn\'t intend — hit Ctrl+C to stop and clarify your request.',
          ro: 'Claude începe un refactor lung pe care nu-l voiai — dai Ctrl+C, oprești și clarifici ce ai nevoie de fapt.',
        },
        category: 'general-controls',
        level: 'all',
        tags: ['cancel', 'stop', 'interrupt', 'abort'],
      },
      {
        id: 'shortcut-ctrl-d',
        title: 'Exit',
        shortcut: 'Ctrl+D',
        oneLiner: {
          en: 'Exit session',
          ro: 'Ieși din sesiune',
        },
        explanation: {
          en: 'Closes the current Claude Code session cleanly. This is the standard Unix way to signal end-of-input. Your conversation context is preserved and you can resume later.',
          ro: 'Închide sesiunea curentă de Claude Code. E modul standard Unix de a semnala sfârșitul inputului. Contextul conversației se păstrează și poți reveni mai târziu.',
        },
        category: 'general-controls',
        level: 'all',
        tags: ['exit', 'quit', 'close', 'session'],
      },
      {
        id: 'shortcut-ctrl-l',
        title: 'Clear Screen',
        shortcut: 'Ctrl+L',
        oneLiner: {
          en: 'Clear screen',
          ro: 'Curăță ecranul',
        },
        explanation: {
          en: 'Clears the terminal display without losing conversation history. Useful when your screen gets cluttered with long outputs and you want a fresh visual start.',
          ro: 'Curăță ce se vede pe ecran, fără să pierzi istoricul conversației. Util când terminalul e plin de output-uri lungi și vrei un ecran curat.',
        },
        category: 'general-controls',
        level: 'all',
        tags: ['clear', 'screen', 'clean', 'terminal'],
      },
      {
        id: 'shortcut-ctrl-o',
        title: 'Verbose / Transcript',
        shortcut: 'Ctrl+O',
        oneLiner: {
          en: 'Toggle verbose/transcript mode',
          ro: 'Comută modul verbose/vizualizare operații',
        },
        explanation: {
          en: 'Switches into transcript mode where you can scroll through the full conversation, search it, and review everything Claude has done. Great for auditing tool calls and understanding what happened behind the scenes.',
          ro: 'Te duce în modul de vizualizare a operațiilor, unde poți derula prin toată conversația, căuta în ea și vedea tot ce a făcut Claude în background. Perfect când vrei să verifici ce tool-uri a apelat și ce s-a întâmplat.',
        },
        category: 'general-controls',
        level: 'all',
        tags: ['verbose', 'transcript', 'log', 'history', 'audit'],
      },
      {
        id: 'shortcut-ctrl-r',
        title: 'Reverse Search',
        shortcut: 'Ctrl+R',
        oneLiner: {
          en: 'Reverse search history',
          ro: 'Căutare inversă în istoric',
        },
        explanation: {
          en: 'Searches backwards through your prompt history, just like in bash. Start typing and it finds the most recent matching prompt. Saves time when you want to re-run or tweak a previous request.',
          ro: 'Caută înapoi prin istoricul de prompturi, exact ca în bash. Începi să tastezi și găsește cel mai recent prompt care se potrivește. Economisești timp când vrei să refolosești o cerere anterioară.',
        },
        example: {
          en: 'You ran a complex prompt 20 messages ago — Ctrl+R and type a keyword to find it instantly.',
          ro: 'Ai dat un prompt complex acum 20 de mesaje — Ctrl+R, tastezi un cuvânt cheie și îl găsești instant.',
        },
        category: 'general-controls',
        level: 'all',
        tags: ['search', 'history', 'reverse', 'find', 'previous'],
      },
      {
        id: 'shortcut-ctrl-g',
        title: 'Open in Editor',
        shortcut: 'Ctrl+G',
        oneLiner: {
          en: 'Open prompt in editor',
          ro: 'Deschide promptul în editor',
        },
        explanation: {
          en: 'Opens your current prompt in your configured $EDITOR (vim, nano, VS Code, etc.). Perfect for writing long, multi-line prompts with proper formatting instead of struggling with single-line input.',
          ro: 'Deschide promptul curent în editorul configurat ($EDITOR — vim, nano, VS Code etc.). Perfect când ai de scris prompturi lungi, pe mai multe linii, cu formatare ca lumea.',
        },
        example: {
          en: 'You need to write a detailed prompt with code examples — Ctrl+G opens vim, you write comfortably, save, and it sends.',
          ro: 'Ai de scris un prompt detaliat cu exemple de cod — Ctrl+G deschide vim, scrii confortabil, salvezi, și se trimite.',
        },
        category: 'general-controls',
        level: 'all',
        tags: ['editor', 'vim', 'nano', 'vscode', 'multiline', 'prompt'],
      },
      {
        id: 'shortcut-ctrl-b',
        title: 'Background Task',
        shortcut: 'Ctrl+B',
        oneLiner: {
          en: 'Background running task',
          ro: 'Trimite task-ul în background',
        },
        explanation: {
          en: 'Sends the current running task to the background so you can continue using your terminal. Claude keeps working and you can check back later. Ideal for long-running operations like large refactors or codebase analysis.',
          ro: 'Trimite task-ul curent în background ca să-ți poți folosi terminalul. Claude continuă să lucreze și te întorci mai târziu. Ideal pentru operații lungi — refactorizări mari sau analiză de codebase.',
        },
        example: {
          en: 'Claude is analyzing a large codebase — Ctrl+B to background it and keep working in your terminal.',
          ro: 'Claude analizează un codebase mare — dai Ctrl+B, îl trimiți în background și continui să lucrezi în terminal.',
        },
        category: 'general-controls',
        level: 'all',
        tags: ['background', 'async', 'task', 'parallel', 'multitask'],
      },
      {
        id: 'shortcut-ctrl-t',
        title: 'Task List',
        shortcut: 'Ctrl+T',
        oneLiner: {
          en: 'Toggle task list',
          ro: 'Comută lista de task-uri',
        },
        explanation: {
          en: 'Shows or hides the list of background tasks. Use it to check progress on tasks you backgrounded with Ctrl+B, or to switch between multiple running tasks.',
          ro: 'Arată sau ascunde lista de task-uri din background. Folosește-l ca să verifici progresul task-urilor trimise cu Ctrl+B sau să comuți între mai multe task-uri active.',
        },
        category: 'general-controls',
        level: 'all',
        tags: ['tasks', 'list', 'background', 'manage', 'switch'],
      },
      {
        id: 'shortcut-ctrl-v',
        title: 'Paste Image',
        shortcut: 'Ctrl+V',
        oneLiner: {
          en: 'Paste image',
          ro: 'Lipește imagine',
        },
        explanation: {
          en: 'Pastes an image from your clipboard directly into the prompt. Claude can analyze screenshots, diagrams, UI mockups, and error messages. Incredibly useful for visual debugging or implementing designs.',
          ro: 'Lipește o imagine din clipboard direct în prompt. Claude poate analiza screenshot-uri, diagrame, mockup-uri UI și mesaje de eroare. Super util pentru debug vizual sau implementare de design-uri.',
        },
        example: {
          en: 'Screenshot a UI bug, Ctrl+V to paste it, and ask Claude to find the CSS issue.',
          ro: 'Faci screenshot la un bug de UI, Ctrl+V să-l lipești, și îl întrebi pe Claude ce e greșit în CSS.',
        },
        category: 'general-controls',
        level: 'all',
        tags: ['image', 'paste', 'screenshot', 'visual', 'clipboard'],
      },
      {
        id: 'shortcut-esc-esc',
        title: 'Rewind / Summarize',
        shortcut: 'Esc+Esc',
        oneLiner: {
          en: 'Rewind or summarize',
          ro: 'Derulează înapoi sau sumarizează',
        },
        explanation: {
          en: 'Double-tap Escape to rewind the conversation to a previous point or trigger a summary. Useful when a conversation branch went wrong and you want to go back to a known good state.',
          ro: 'Apasă Escape de două ori ca să derulezi conversația la un punct anterior sau să declanșezi o sumarizare. Util când o ramură a conversației a luat-o greșit și vrei să te întorci la un punct bun.',
        },
        category: 'general-controls',
        level: 'all',
        tags: ['rewind', 'undo', 'summarize', 'rollback', 'escape'],
      },
    ],
  },

  // ─── Mode Switching ─────────────────────────────────────────────────
  {
    id: 'mode-switching',
    name: {
      en: 'Mode Switching',
      ro: 'Schimbare moduri',
    },
    icon: '🔄',
    items: [
      {
        id: 'shortcut-shift-tab',
        title: 'Cycle Permission Modes',
        shortcut: 'Shift+Tab',
        oneLiner: {
          en: 'Cycle permission modes (Normal → Auto-Accept → Plan)',
          ro: 'Ciclează modurile de permisiune',
        },
        explanation: {
          en: 'Rotates between Normal mode (asks before every action), Auto-Accept (approves tool calls automatically), and Plan mode (Claude only plans, doesn\'t execute). Use Auto-Accept for trusted operations and Plan mode when you want to review before committing.',
          ro: 'Rotește între modul Normal (întreabă înainte de fiecare acțiune), Auto-Accept (aprobă automat apelurile de tool) și Plan (Claude doar planifică, nu execută). Folosește Auto-Accept pentru operații de încredere și Plan când vrei să revizuiești înainte de a acționa.',
        },
        example: {
          en: 'Switch to Auto-Accept before a big refactor so Claude doesn\'t pause at every file edit.',
          ro: 'Comută pe Auto-Accept înainte de un refactor mare ca să nu te oprească Claude la fiecare editare de fișier.',
        },
        category: 'mode-switching',
        level: 'all',
        tags: ['mode', 'permission', 'auto-accept', 'plan', 'normal', 'cycle'],
      },
      {
        id: 'shortcut-alt-p',
        title: 'Switch Model',
        shortcut: 'Alt+P',
        oneLiner: {
          en: 'Switch model',
          ro: 'Schimbă modelul',
        },
        explanation: {
          en: 'Opens a model picker to switch between available Claude models mid-conversation. Useful when you want to try a different model for a specific task — for example, switching to a faster model for simple questions.',
          ro: 'Deschide un selector de modele ca să comuți între modelele Claude disponibile, chiar în mijlocul conversației. Util când vrei să încerci alt model pentru un task specific — de exemplu, un model mai rapid pentru întrebări simple.',
        },
        category: 'mode-switching',
        level: 'all',
        tags: ['model', 'switch', 'picker', 'sonnet', 'opus', 'haiku'],
      },
      {
        id: 'shortcut-alt-t',
        title: 'Toggle Thinking',
        shortcut: 'Alt+T',
        oneLiner: {
          en: 'Toggle thinking',
          ro: 'Comută gândirea extinsă',
        },
        explanation: {
          en: 'Enables or disables extended thinking, where Claude shows its reasoning process before answering. Turn it on for complex architectural decisions or debugging — turn it off for simple questions to save time and tokens.',
          ro: 'Activează sau dezactivează gândirea extinsă, unde Claude își arată raționamentul înainte de a răspunde. Activează-l pentru decizii complexe de arhitectură sau debugging — dezactivează-l pentru întrebări simple, ca să economisești timp și tokeni.',
        },
        category: 'mode-switching',
        level: 'all',
        tags: ['thinking', 'reasoning', 'extended', 'toggle'],
      },
      {
        id: 'shortcut-alt-o',
        title: 'Toggle Fast Mode',
        shortcut: 'Alt+O',
        oneLiner: {
          en: 'Toggle fast mode',
          ro: 'Comută modul rapid',
        },
        explanation: {
          en: 'Switches between the default model and a faster, lighter model for quick tasks. New shortcut that lets you optimize for speed when you don\'t need heavy reasoning — great for simple edits, file lookups, or quick questions.',
          ro: 'Comută între modelul implicit și unul mai rapid, mai ușor, pentru task-uri simple. Shortcut nou care te ajută să optimizezi pentru viteză când nu ai nevoie de raționament complex — ideal pentru editări simple, căutări de fișiere sau întrebări rapide.',
        },
        category: 'mode-switching',
        level: 'all',
        tags: ['fast', 'speed', 'quick', 'light', 'model', 'toggle'],
        isNew: true,
      },
    ],
  },

  // ─── Input Methods ──────────────────────────────────────────────────
  {
    id: 'input-methods',
    name: {
      en: 'Input Methods',
      ro: 'Metode de input',
    },
    icon: '✏️',
    items: [
      {
        id: 'shortcut-backslash-enter',
        title: 'Quick Newline',
        shortcut: '\\+Enter',
        oneLiner: {
          en: 'Quick newline',
          ro: 'Linie nouă rapidă',
        },
        explanation: {
          en: 'Inserts a newline in your prompt without sending it. Use backslash before Enter to write multi-line prompts directly in the input field, without needing to open an external editor.',
          ro: 'Inserează o linie nouă în prompt fără să-l trimită. Folosește backslash înainte de Enter ca să scrii prompturi pe mai multe linii direct în câmpul de input, fără să deschizi un editor extern.',
        },
        category: 'input-methods',
        level: 'all',
        tags: ['newline', 'multiline', 'enter', 'input'],
      },
      {
        id: 'shortcut-ctrl-j',
        title: 'Newline (Control)',
        shortcut: 'Ctrl+J',
        oneLiner: {
          en: 'Newline (control sequence)',
          ro: 'Linie nouă (secvență de control)',
        },
        explanation: {
          en: 'Alternative way to insert a newline using a control sequence. Some terminal emulators handle this more reliably than backslash+Enter. Both methods achieve the same result.',
          ro: 'Metodă alternativă de a insera o linie nouă folosind o secvență de control. Unele emulatoare de terminal gestionează asta mai bine decât backslash+Enter. Ambele metode fac același lucru.',
        },
        category: 'input-methods',
        level: 'all',
        tags: ['newline', 'multiline', 'control', 'input', 'alternative'],
      },
    ],
  },

  // ─── Prefixes ───────────────────────────────────────────────────────
  {
    id: 'prefixes',
    name: {
      en: 'Prefixes',
      ro: 'Prefixe',
    },
    icon: '🏷️',
    items: [
      {
        id: 'shortcut-slash',
        title: 'Slash Command',
        shortcut: '/',
        oneLiner: {
          en: 'Slash command',
          ro: 'Comenzi slash',
        },
        explanation: {
          en: 'Opens the slash command menu for built-in commands like /help, /clear, /compact, and custom commands defined in your project. Slash commands are the primary way to trigger specific Claude Code features.',
          ro: 'Deschide meniul de comenzi slash pentru comenzi built-in ca /help, /clear, /compact și comenzi custom definite în proiect. Comenzile slash sunt metoda principală de a activa funcționalități specifice ale Claude Code.',
        },
        example: {
          en: 'Type / to see all available commands, then select one to run it.',
          ro: 'Tastează / ca să vezi toate comenzile disponibile, apoi selectează una ca s-o rulezi.',
        },
        category: 'prefixes',
        level: 'all',
        tags: ['slash', 'command', 'menu', 'help', 'clear', 'compact'],
      },
      {
        id: 'shortcut-exclamation',
        title: 'Bash Execution',
        shortcut: '!',
        oneLiner: {
          en: 'Direct bash execution',
          ro: 'Execuție bash directă',
        },
        explanation: {
          en: 'Prefix a line with ! to run it directly as a bash command, bypassing Claude entirely. The output is shown but not sent to Claude. Useful for quick shell commands when you don\'t need AI assistance.',
          ro: 'Pune ! la începutul liniei ca s-o rulezi direct ca și comandă bash, fără să treacă prin Claude. Output-ul se afișează dar nu se trimite la Claude. Util pentru comenzi rapide de shell când nu ai nevoie de AI.',
        },
        example: {
          en: '!git status — runs git status directly without Claude interpreting it.',
          ro: '!git status — rulează git status direct, fără ca Claude să-l interpreteze.',
        },
        category: 'prefixes',
        level: 'all',
        tags: ['bash', 'shell', 'execute', 'direct', 'command'],
      },
      {
        id: 'shortcut-at',
        title: 'File Mention',
        shortcut: '@',
        oneLiner: {
          en: 'File mention + autocomplete',
          ro: 'Menționare fișier + autocompletare',
        },
        explanation: {
          en: 'Type @ followed by a filename to reference a specific file with autocomplete. Claude will automatically read the mentioned file and use it as context. Much faster than describing which file you mean in plain text.',
          ro: 'Tastează @ urmat de un nume de fișier pentru a referenția un fișier cu autocompletare. Claude citește automat fișierul menționat și îl folosește ca context. Mult mai rapid decât să descrii în text care fișier vrei.',
        },
        example: {
          en: '@src/lib/types.ts — references the types file so Claude reads it before answering.',
          ro: '@src/lib/types.ts — referențiază fișierul de tipuri ca Claude să-l citească înainte de a răspunde.',
        },
        category: 'prefixes',
        level: 'all',
        tags: ['file', 'mention', 'autocomplete', 'reference', 'context'],
      },
    ],
  },

  // ─── Session Picker ─────────────────────────────────────────────────
  {
    id: 'session-picker',
    name: {
      en: 'Session Picker',
      ro: 'Selector sesiuni',
    },
    icon: '📋',
    items: [
      {
        id: 'shortcut-arrow-keys',
        title: 'Navigate',
        shortcut: 'Arrow Keys',
        oneLiner: {
          en: 'Navigate and expand/collapse',
          ro: 'Navigare și expandare/restrângere',
        },
        explanation: {
          en: 'Use arrow keys to move through the session list. Up/Down to navigate between sessions, Left/Right to collapse or expand project groups. Standard tree-view navigation.',
          ro: 'Folosește săgețile ca să te miști prin lista de sesiuni. Sus/Jos pentru navigare între sesiuni, Stânga/Dreapta pentru a restrânge sau expanda grupurile de proiecte. Navigare standard de tip arbore.',
        },
        category: 'session-picker',
        level: 'advanced',
        tags: ['navigate', 'arrow', 'move', 'expand', 'collapse', 'session'],
      },
      {
        id: 'shortcut-session-p',
        title: 'Preview Session',
        shortcut: 'P',
        oneLiner: {
          en: 'Preview session',
          ro: 'Previzualizare sesiune',
        },
        explanation: {
          en: 'Shows a preview of the selected session without opening it. Lets you peek at the conversation content to decide if it\'s the one you\'re looking for, without committing to loading the full session.',
          ro: 'Arată o previzualizare a sesiunii selectate fără s-o deschidă. Te lasă să arunci o privire la conținutul conversației ca să decizi dacă e cea pe care o cauți, fără să încarci toată sesiunea.',
        },
        category: 'session-picker',
        level: 'advanced',
        tags: ['preview', 'peek', 'session', 'view'],
      },
      {
        id: 'shortcut-session-r',
        title: 'Rename Session',
        shortcut: 'R',
        oneLiner: {
          en: 'Rename session',
          ro: 'Redenumire sesiune',
        },
        explanation: {
          en: 'Renames the currently selected session. Helpful for organizing your sessions with meaningful names instead of auto-generated ones, especially when you have many sessions for the same project.',
          ro: 'Redenumește sesiunea selectată. Util pentru a-ți organiza sesiunile cu nume relevante în loc de cele generate automat, mai ales când ai multe sesiuni pentru același proiect.',
        },
        category: 'session-picker',
        level: 'advanced',
        tags: ['rename', 'name', 'session', 'organize'],
      },
      {
        id: 'shortcut-session-slash',
        title: 'Search Sessions',
        shortcut: '/',
        oneLiner: {
          en: 'Search sessions',
          ro: 'Căutare sesiuni',
        },
        explanation: {
          en: 'Opens a search field within the session picker to filter sessions by name or content. Much faster than scrolling through dozens of sessions to find the right one.',
          ro: 'Deschide un câmp de căutare în selectorul de sesiuni ca să filtrezi după nume sau conținut. Mult mai rapid decât să derulezi prin zeci de sesiuni ca să-l găsești pe cel potrivit.',
        },
        category: 'session-picker',
        level: 'advanced',
        tags: ['search', 'filter', 'find', 'session'],
      },
      {
        id: 'shortcut-session-a',
        title: 'All Projects',
        shortcut: 'A',
        oneLiner: {
          en: 'All projects',
          ro: 'Toate proiectele',
        },
        explanation: {
          en: 'Shows sessions from all projects, not just the current one. Useful when you need to find a conversation from a different project directory or want an overview of all your recent work.',
          ro: 'Arată sesiunile din toate proiectele, nu doar cel curent. Util când ai nevoie să găsești o conversație dintr-un alt proiect sau vrei o vedere de ansamblu a muncii recente.',
        },
        category: 'session-picker',
        level: 'advanced',
        tags: ['all', 'projects', 'global', 'session'],
      },
      {
        id: 'shortcut-session-b',
        title: 'Current Branch',
        shortcut: 'B',
        oneLiner: {
          en: 'Current branch',
          ro: 'Branch-ul curent',
        },
        explanation: {
          en: 'Filters sessions to show only those from the current git branch. Perfect for feature branches where you want to see only the conversations related to the work on that branch.',
          ro: 'Filtrează sesiunile ca să arate doar cele de pe branch-ul git curent. Perfect pentru branch-uri de feature, când vrei să vezi doar conversațiile legate de munca de pe acel branch.',
        },
        category: 'session-picker',
        level: 'advanced',
        tags: ['branch', 'git', 'filter', 'session', 'current'],
      },
    ],
  },

  // ─── Transcript Mode ────────────────────────────────────────────────
  {
    id: 'transcript-mode',
    name: {
      en: 'Transcript Mode (Ctrl+O)',
      ro: 'Vizualizare operații (Ctrl+O)',
    },
    icon: '📜',
    items: [
      {
        id: 'shortcut-transcript-slash',
        title: 'Search Transcript',
        shortcut: '/',
        oneLiner: {
          en: 'Search transcript',
          ro: 'Căutare în vizualizare',
        },
        explanation: {
          en: 'Opens a search within the transcript view. Type a keyword to find specific parts of the conversation. Works like vim\'s / search — familiar to terminal users.',
          ro: 'Deschide o căutare în vizualizarea transcrierii. Tastează un cuvânt cheie ca să găsești părți specifice din conversație. Funcționează ca / din vim — familiar pentru utilizatorii de terminal.',
        },
        category: 'transcript-mode',
        level: 'advanced',
        tags: ['search', 'find', 'transcript', 'keyword'],
      },
      {
        id: 'shortcut-transcript-n',
        title: 'Next / Previous Match',
        shortcut: 'N / Shift+N',
        oneLiner: {
          en: 'Next/previous match',
          ro: 'Următorul/anteriorul rezultat',
        },
        explanation: {
          en: 'After searching with /, press N to jump to the next match or Shift+N for the previous match. Same keybindings as vim for muscle-memory consistency.',
          ro: 'După ce cauți cu /, apasă N pentru următorul rezultat sau Shift+N pentru cel anterior. Aceleași combinații ca în vim, pentru consistență cu memoria musculară.',
        },
        category: 'transcript-mode',
        level: 'advanced',
        tags: ['next', 'previous', 'match', 'search', 'navigate'],
      },
      {
        id: 'shortcut-transcript-ctrl-e',
        title: 'Toggle Show All',
        shortcut: 'Ctrl+E',
        oneLiner: {
          en: 'Toggle show all',
          ro: 'Comută afișarea completă',
        },
        explanation: {
          en: 'Toggles between showing a condensed view and the full, unabridged transcript. Use it when you need to see everything, including tool calls and their full output that are normally collapsed.',
          ro: 'Comută între vizualizarea condensată și cea completă. Folosește-l când ai nevoie să vezi totul, inclusiv apelurile de tool-uri și output-ul lor complet, care în mod normal sunt restrânse.',
        },
        category: 'transcript-mode',
        level: 'advanced',
        tags: ['show', 'all', 'expand', 'full', 'transcript'],
      },
      {
        id: 'shortcut-transcript-exit',
        title: 'Exit Transcript',
        shortcut: 'Q / Esc',
        oneLiner: {
          en: 'Exit transcript mode',
          ro: 'Ieși din vizualizarea operațiilor',
        },
        explanation: {
          en: 'Exits transcript mode and returns to the normal input prompt. Press Q or Escape — both work, matching the conventions of pagers like less and vim.',
          ro: 'Iese din vizualizarea operațiilor și te duce înapoi la promptul normal. Apasă Q sau Escape — ambele merg, urmând convențiile din less și vim.',
        },
        category: 'transcript-mode',
        level: 'advanced',
        tags: ['exit', 'quit', 'close', 'transcript', 'escape'],
      },
    ],
  },
];
