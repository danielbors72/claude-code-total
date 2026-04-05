import type { CommandCategory } from '../lib/types';

export const skillsCategories: CommandCategory[] = [
  // ─── Built-in Skills ─────────────────────────────────────────────────
  {
    id: 'built-in-skills',
    name: {
      en: 'Built-in Skills',
      ro: 'Skill-uri integrate',
    },
    icon: '⚡',
    items: [
      {
        id: 'skill-simplify',
        title: '/simplify',
        oneLiner: {
          en: 'Code review using 3 parallel agents',
          ro: 'Code review folosind 3 agenți în paralel',
        },
        explanation: {
          en: 'Launches three independent agents that review your code simultaneously from different angles — readability, complexity, and potential bugs. The results are synthesized into a single actionable review. Great for getting thorough feedback before a PR.',
          ro: 'Lansează trei agenți independenți care-ți revizuiesc codul simultan din unghiuri diferite — lizibilitate, complexitate și potențiale buguri. Rezultatele sunt sintetizate într-un singur review acționabil. Excelent pentru feedback solid înainte de un PR.',
        },
        example: {
          en: 'Run /simplify on a complex utility function to get parallel feedback on readability, edge cases, and simplification opportunities.',
          ro: 'Rulezi /simplify pe o funcție utilitară complexă și primești feedback paralel despre lizibilitate, cazuri limită și oportunități de simplificare.',
        },
        category: 'built-in-skills',
        level: 'beginner',
        tags: ['review', 'code-quality', 'parallel', 'agents', 'refactor'],
      },
      {
        id: 'skill-batch',
        title: '/batch',
        oneLiner: {
          en: 'Large parallel changes across 5-30 worktrees',
          ro: 'Modificări mari în paralel pe 5-30 de worktree-uri',
        },
        explanation: {
          en: 'Spins up multiple isolated git worktrees and runs changes in parallel across them. Ideal for large-scale refactors, migrations, or applying the same pattern across many files. Each worktree works independently so there are no conflicts during execution.',
          ro: 'Creează mai multe worktree-uri git izolate și rulează modificări în paralel. Ideal pentru refactorizări la scară mare, migrări sau aplicarea aceluiași pattern pe multe fișiere. Fiecare worktree lucrează independent, deci nu apar conflicte în timpul execuției.',
        },
        example: {
          en: '/batch "Migrate all React class components to functional components with hooks" — runs across 10+ worktrees simultaneously.',
          ro: '/batch "Migrează toate componentele React de clasă la componente funcționale cu hooks" — rulează pe 10+ worktree-uri simultan.',
        },
        category: 'built-in-skills',
        level: 'advanced',
        tags: ['batch', 'parallel', 'worktree', 'refactor', 'migration', 'scale'],
      },
      {
        id: 'skill-debug',
        title: '/debug [desc]',
        oneLiner: {
          en: 'Troubleshoot from debug logs',
          ro: 'Depanare pornind de la loguri de debug',
        },
        explanation: {
          en: 'Give it a description of the problem or paste debug logs, and it investigates systematically — reading relevant files, tracing the error path, and proposing fixes. Saves you from manually digging through stack traces and log files.',
          ro: 'Îi dai o descriere a problemei sau lipești loguri de debug, și investighează sistematic — citește fișierele relevante, urmărește calea erorii și propune fix-uri. Te scutește de căutatul manual prin stack trace-uri și fișiere de log.',
        },
        example: {
          en: '/debug "API returns 500 on POST /users when email contains +" — Claude traces the issue through routes, validation, and DB layer.',
          ro: '/debug "API returnează 500 pe POST /users când emailul conține +" — Claude urmărește problema prin rute, validare și layer-ul de DB.',
        },
        category: 'built-in-skills',
        level: 'beginner',
        tags: ['debug', 'troubleshoot', 'logs', 'errors', 'fix'],
      },
      {
        id: 'skill-loop',
        title: '/loop [interval]',
        oneLiner: {
          en: 'Run a recurring scheduled task',
          ro: 'Rulează o sarcină recurentă programată',
        },
        explanation: {
          en: 'Sets up a task that runs on a schedule — like watching for test failures, monitoring build output, or periodically checking lint status. Useful for long-running development sessions where you want continuous feedback.',
          ro: 'Setează o sarcină care rulează programat — precum monitorizarea eșecurilor de teste, a output-ului de build sau verificarea periodică a lint-ului. Utilă în sesiuni lungi de dezvoltare unde vrei feedback continuu.',
        },
        example: {
          en: '/loop 30s "Run tests and report any new failures" — checks every 30 seconds while you code.',
          ro: '/loop 30s "Rulează testele și raportează orice eșec nou" — verifică la fiecare 30 de secunde în timp ce scrii cod.',
        },
        category: 'built-in-skills',
        level: 'advanced',
        tags: ['loop', 'schedule', 'recurring', 'watch', 'monitor'],
      },
      {
        id: 'skill-claude-api',
        title: '/claude-api',
        oneLiner: {
          en: 'Load API and SDK reference documentation',
          ro: 'Încarcă documentația de referință API și SDK',
        },
        explanation: {
          en: 'Loads the official Anthropic API and SDK documentation directly into context. Use it when you need to write code that calls Claude\'s API — it gives you accurate, up-to-date parameter names, types, and usage patterns.',
          ro: 'Încarcă documentația oficială Anthropic API și SDK direct în context. Folosește-l când ai de scris cod care apelează API-ul Claude — îți dă nume de parametri, tipuri și patternuri de utilizare precise și actuale.',
        },
        category: 'built-in-skills',
        level: 'beginner',
        tags: ['api', 'sdk', 'documentation', 'anthropic', 'reference'],
      },
    ],
  },

  // ─── Custom Skills ───────────────────────────────────────────────────
  {
    id: 'custom-skills',
    name: {
      en: 'Custom Skills',
      ro: 'Skill-uri personalizate',
    },
    icon: '🛠️',
    items: [
      {
        id: 'skill-project-dir',
        title: '.claude/skills/<name>/',
        oneLiner: {
          en: 'Project-specific skill directory',
          ro: 'Director de skill-uri specifice proiectului',
        },
        explanation: {
          en: 'Create a directory under .claude/skills/ to define a custom skill for your project. Each skill is a folder containing a markdown file with instructions, frontmatter configuration, and optionally executable scripts. The skill becomes available as a slash command.',
          ro: 'Creezi un director sub .claude/skills/ ca să definești un skill personalizat pentru proiect. Fiecare skill e un folder cu un fișier markdown cu instrucțiuni, configurare frontmatter și opțional scripturi executabile. Skill-ul devine disponibil ca slash command.',
        },
        example: {
          en: 'Create .claude/skills/deploy/skill.md with deployment steps — then run /deploy to execute them.',
          ro: 'Creezi .claude/skills/deploy/skill.md cu pașii de deployment — apoi rulezi /deploy ca să-i execuți.',
        },
        category: 'custom-skills',
        level: 'advanced',
        tags: ['skills', 'custom', 'project', 'directory', 'slash-command'],
      },
      {
        id: 'skill-personal-dir',
        title: '~/.claude/skills/<name>/',
        oneLiner: {
          en: 'Personal skills available across all projects',
          ro: 'Skill-uri personale disponibile în toate proiectele',
        },
        explanation: {
          en: 'Same as project skills but stored in your home directory, making them available everywhere. Perfect for personal workflows that you use across multiple projects — custom review processes, deployment scripts, or code generation patterns.',
          ro: 'La fel ca skill-urile de proiect, dar stocate în directorul home, deci disponibile peste tot. Perfecte pentru workflow-uri personale pe care le folosești în mai multe proiecte — procese de review custom, scripturi de deployment sau patternuri de generare cod.',
        },
        category: 'custom-skills',
        level: 'advanced',
        tags: ['skills', 'personal', 'global', 'reusable', 'portable'],
      },
      {
        id: 'skill-description-frontmatter',
        title: 'description frontmatter',
        oneLiner: {
          en: 'Auto-invocation trigger based on description match',
          ro: 'Trigger de invocare automată bazat pe potrivirea descrierii',
        },
        explanation: {
          en: 'The description field in frontmatter tells Claude when to automatically suggest or invoke this skill. Write a clear description of what the skill does and Claude matches it to user requests. This is how skills get discovered without the user memorizing slash commands.',
          ro: 'Câmpul description din frontmatter îi spune lui Claude când să sugereze sau invoce automat skill-ul. Scrii o descriere clară a ce face skill-ul și Claude o potrivește cu cererile utilizatorului. Așa se descoperă skill-urile fără să memorezi slash commands.',
        },
        category: 'custom-skills',
        level: 'advanced',
        tags: ['skills', 'frontmatter', 'description', 'auto-invoke', 'discovery'],
      },
      {
        id: 'skill-allowed-tools',
        title: 'allowed-tools',
        oneLiner: {
          en: 'Skip permission prompts for listed tools',
          ro: 'Sari peste prompturile de permisiune pentru tool-urile listate',
        },
        explanation: {
          en: 'List tools in the allowed-tools frontmatter field and Claude uses them without asking for permission each time. Essential for automated skills that need to read files, run commands, or edit code without constant user confirmation.',
          ro: 'Listezi tool-uri în câmpul allowed-tools din frontmatter și Claude le folosește fără să ceară permisiune de fiecare dată. Esențial pentru skill-uri automatizate care trebuie să citească fișiere, ruleze comenzi sau editeze cod fără confirmare constantă.',
        },
        example: {
          en: 'allowed-tools: ["Read", "Edit", "Bash"] — the skill can read, edit, and run commands without prompting.',
          ro: 'allowed-tools: ["Read", "Edit", "Bash"] — skill-ul poate citi, edita și rula comenzi fără să te întrebe.',
        },
        category: 'custom-skills',
        level: 'advanced',
        tags: ['skills', 'permissions', 'tools', 'automation', 'allowed'],
      },
      {
        id: 'skill-model-override',
        title: 'model',
        oneLiner: {
          en: 'Override AI model for this skill',
          ro: 'Suprascrie modelul AI pentru acest skill',
        },
        explanation: {
          en: 'Set a specific model in the frontmatter to override the default for this skill. Use a faster model like Haiku for simple tasks, or a more capable model for complex reasoning. This optimizes cost and speed per skill.',
          ro: 'Setezi un model specific în frontmatter ca să suprascrii default-ul pentru skill-ul ăsta. Folosește un model mai rapid ca Haiku pentru sarcini simple, sau unul mai capabil pentru raționament complex. Așa optimizezi cost și viteză per skill.',
        },
        category: 'custom-skills',
        level: 'advanced',
        tags: ['skills', 'model', 'override', 'haiku', 'optimization'],
      },
      {
        id: 'skill-effort-override',
        title: 'effort',
        oneLiner: {
          en: 'Override effort level for this skill',
          ro: 'Suprascrie nivelul de efort pentru acest skill',
        },
        explanation: {
          en: 'Control how much reasoning effort Claude puts into this skill. Lower effort for simple, repetitive tasks and higher effort for complex analysis. This directly affects response quality and token usage.',
          ro: 'Controlezi cât efort de raționament pune Claude în skill-ul ăsta. Efort mai mic pentru sarcini simple și repetitive, mai mare pentru analize complexe. Afectează direct calitatea răspunsului și consumul de token-uri.',
        },
        category: 'custom-skills',
        level: 'advanced',
        tags: ['skills', 'effort', 'override', 'optimization', 'tokens'],
      },
      {
        id: 'skill-paths-globs',
        title: 'paths: [globs]',
        oneLiner: {
          en: 'Apply skill to specific file patterns',
          ro: 'Aplică skill-ul doar pe anumite patternuri de fișiere',
        },
        explanation: {
          en: 'Scope a skill to only activate when working with files matching certain glob patterns. A skill with paths: ["*.test.ts"] only triggers when editing test files. Keeps skills focused and avoids irrelevant activations.',
          ro: 'Limitezi un skill să se activeze doar când lucrezi cu fișiere ce se potrivesc anumitor glob patterns. Un skill cu paths: ["*.test.ts"] se activează doar la editarea fișierelor de test. Menține skill-urile focusate și evită activări irelevante.',
        },
        category: 'custom-skills',
        level: 'advanced',
        tags: ['skills', 'paths', 'globs', 'scoped', 'filter'],
        isNew: true,
      },
      {
        id: 'skill-context-fork',
        title: 'context: fork',
        oneLiner: {
          en: 'Run skill in a subagent with isolated context',
          ro: 'Rulează skill-ul într-un subagent cu context izolat',
        },
        explanation: {
          en: 'Setting context to fork runs the skill in a separate subagent with its own conversation context. The subagent does its work independently and returns results to the main conversation. Prevents long skill executions from polluting your main context window.',
          ro: 'Setând context pe fork, skill-ul rulează într-un subagent separat cu propriul context de conversație. Subagentul lucrează independent și returnează rezultatele în conversația principală. Previne ca execuțiile lungi de skill-uri să-ți polueze fereastra de context principală.',
        },
        category: 'custom-skills',
        level: 'advanced',
        tags: ['skills', 'context', 'fork', 'subagent', 'isolation'],
      },
      {
        id: 'skill-arguments',
        title: '$ARGUMENTS',
        oneLiner: {
          en: 'Placeholder for user input in skill templates',
          ro: 'Placeholder pentru input-ul utilizatorului în template-uri de skill',
        },
        explanation: {
          en: 'Use $ARGUMENTS in your skill markdown and it gets replaced with whatever the user types after the slash command. This makes skills flexible and reusable — the same skill works with different inputs each time.',
          ro: 'Folosești $ARGUMENTS în markdown-ul skill-ului și se înlocuiește cu ce scrie utilizatorul după slash command. Asta face skill-urile flexibile și reutilizabile — același skill funcționează cu inputuri diferite de fiecare dată.',
        },
        example: {
          en: 'Skill template: "Review the $ARGUMENTS component" — user runs /review Button and Claude reviews the Button component.',
          ro: 'Template skill: "Review the $ARGUMENTS component" — utilizatorul rulează /review Button și Claude revizuiește componenta Button.',
        },
        category: 'custom-skills',
        level: 'advanced',
        tags: ['skills', 'arguments', 'placeholder', 'template', 'dynamic'],
      },
      {
        id: 'skill-plugin-bin',
        title: 'plugin bin/',
        oneLiner: {
          en: 'Ship executables for Bash tool inside skills',
          ro: 'Include executabile pentru tool-ul Bash în skill-uri',
        },
        explanation: {
          en: 'Add a bin/ directory inside your skill folder to ship executable scripts that Claude can run via the Bash tool. These executables are automatically available on PATH during skill execution. Perfect for wrapping complex CLI operations into simple commands.',
          ro: 'Adaugi un director bin/ în folderul skill-ului ca să incluzi scripturi executabile pe care Claude le poate rula prin tool-ul Bash. Executabilele sunt automat disponibile pe PATH în timpul execuției skill-ului. Perfect pentru a împacheta operații CLI complexe în comenzi simple.',
        },
        category: 'custom-skills',
        level: 'advanced',
        tags: ['skills', 'plugin', 'bin', 'executable', 'bash', 'cli'],
        isNew: true,
      },
    ],
  },

  // ─── Built-in Agents ─────────────────────────────────────────────────
  {
    id: 'built-in-agents',
    name: {
      en: 'Built-in Agents',
      ro: 'Agenți integrați',
    },
    icon: '🤖',
    items: [
      {
        id: 'agent-explore',
        title: 'Explore',
        oneLiner: {
          en: 'Fast read-only agent using Haiku model',
          ro: 'Agent rapid read-only folosind modelul Haiku',
        },
        explanation: {
          en: 'A lightweight agent that can only read files and search — no edits, no commands. Uses the fast Haiku model for speed. Perfect for quickly answering questions about the codebase without risk of accidental changes.',
          ro: 'Un agent ușor care poate doar citi fișiere și căuta — fără editări, fără comenzi. Folosește modelul rapid Haiku pentru viteză. Perfect pentru a răspunde rapid la întrebări despre codebase fără risc de modificări accidentale.',
        },
        example: {
          en: 'Use Explore to answer "Where is the auth middleware defined?" — it searches fast without touching anything.',
          ro: 'Folosește Explore ca să răspunzi la "Unde e definit middleware-ul de auth?" — caută rapid fără să atingă nimic.',
        },
        category: 'built-in-agents',
        level: 'beginner',
        tags: ['agent', 'explore', 'read-only', 'haiku', 'fast', 'search'],
      },
      {
        id: 'agent-plan',
        title: 'Plan',
        oneLiner: {
          en: 'Research agent for plan mode',
          ro: 'Agent de cercetare pentru modul plan',
        },
        explanation: {
          en: 'A research-focused agent that helps you think through changes before making them. It reads code, analyzes architecture, and proposes approaches — but does not edit anything. Use it when you want to understand impact before committing to an implementation.',
          ro: 'Un agent focusat pe cercetare care te ajută să gândești schimbările înainte de a le face. Citește cod, analizează arhitectura și propune abordări — dar nu editează nimic. Folosește-l când vrei să înțelegi impactul înainte să te angajezi la o implementare.',
        },
        category: 'built-in-agents',
        level: 'beginner',
        tags: ['agent', 'plan', 'research', 'analysis', 'architecture'],
      },
      {
        id: 'agent-general',
        title: 'General',
        oneLiner: {
          en: 'Full-access agent for complex tasks',
          ro: 'Agent cu acces complet pentru sarcini complexe',
        },
        explanation: {
          en: 'The default full-capability agent that can read, write, edit files, and run commands. This is what runs when you give Claude a task that requires actual changes. It has access to all tools and works through problems end-to-end.',
          ro: 'Agentul default cu capabilități complete — poate citi, scrie, edita fișiere și rula comenzi. Asta rulează când dai lui Claude o sarcină care necesită modificări reale. Are acces la toate tool-urile și rezolvă problemele de la cap la coadă.',
        },
        category: 'built-in-agents',
        level: 'beginner',
        tags: ['agent', 'general', 'full-access', 'edit', 'write', 'default'],
      },
      {
        id: 'agent-bash',
        title: 'Bash',
        oneLiner: {
          en: 'Terminal agent with separate context',
          ro: 'Agent terminal cu context separat',
        },
        explanation: {
          en: 'A specialized agent that focuses on terminal operations — running commands, scripts, and CLI tools. It has its own context window separate from the main conversation, so long command outputs do not clutter your main chat.',
          ro: 'Un agent specializat pe operațiuni de terminal — rulare de comenzi, scripturi și tool-uri CLI. Are propria fereastră de context separată de conversația principală, deci output-urile lungi de comenzi nu-ți aglomerează chatul principal.',
        },
        category: 'built-in-agents',
        level: 'advanced',
        tags: ['agent', 'bash', 'terminal', 'commands', 'cli', 'isolated'],
      },
    ],
  },

  // ─── Agent Configuration ─────────────────────────────────────────────
  {
    id: 'agent-configuration',
    name: {
      en: 'Agent Configuration',
      ro: 'Configurare agenți',
    },
    icon: '⚙️',
    items: [
      {
        id: 'agent-config-permission-mode',
        title: 'permissionMode',
        oneLiner: {
          en: 'Set default permission behavior for agent actions',
          ro: 'Setează comportamentul implicit de permisiuni pentru acțiunile agentului',
        },
        explanation: {
          en: 'Controls how the agent handles tool permissions. Options range from asking every time (default) to accepting edits automatically (acceptEdits) to bypassing all permissions (bypassPermissions). Choose based on your trust level and workflow speed needs.',
          ro: 'Controlează cum gestionează agentul permisiunile tool-urilor. Opțiunile variază de la a întreba de fiecare dată (default) la acceptarea automată a editărilor (acceptEdits) la ocolirea tuturor permisiunilor (bypassPermissions). Alegi în funcție de nivelul de încredere și nevoia de viteză.',
        },
        example: {
          en: 'permissionMode: "acceptEdits" — Claude edits files without asking but still confirms before running shell commands.',
          ro: 'permissionMode: "acceptEdits" — Claude editează fișiere fără să întrebe, dar tot confirmă înainte de a rula comenzi shell.',
        },
        category: 'agent-configuration',
        level: 'advanced',
        tags: ['agent', 'permissions', 'mode', 'trust', 'automation'],
      },
      {
        id: 'agent-config-isolation',
        title: 'isolation: worktree',
        oneLiner: {
          en: 'Run agent in isolated git worktree',
          ro: 'Rulează agentul într-un worktree git izolat',
        },
        explanation: {
          en: 'Creates a separate git worktree for the agent to work in, completely isolated from your main working directory. Changes happen in the worktree and you can review them before merging. Essential for risky or experimental operations.',
          ro: 'Creează un worktree git separat pentru agent, complet izolat de directorul tău de lucru principal. Modificările se fac în worktree și le poți revizui înainte de merge. Esențial pentru operațiuni riscante sau experimentale.',
        },
        category: 'agent-configuration',
        level: 'advanced',
        tags: ['agent', 'isolation', 'worktree', 'git', 'safety', 'sandbox'],
      },
      {
        id: 'agent-config-memory',
        title: 'memory: user|project|local',
        oneLiner: {
          en: 'Enable persistent agent memory at different scopes',
          ro: 'Activează memorie persistentă pentru agent la diferite niveluri',
        },
        explanation: {
          en: 'Give an agent its own persistent memory that survives across conversations. Choose scope: user (personal, across projects), project (shared with team), or local (only on this machine). The agent accumulates knowledge over time and gets smarter at its specific task.',
          ro: 'Dai agentului propria memorie persistentă care supraviețuiește între conversații. Alegi scopul: user (personală, pe toate proiectele), project (partajată cu echipa) sau local (doar pe mașina asta). Agentul acumulează cunoștințe în timp și devine mai bun la sarcina lui specifică.',
        },
        category: 'agent-configuration',
        level: 'advanced',
        tags: ['agent', 'memory', 'persistent', 'scope', 'learning'],
      },
      {
        id: 'agent-config-background',
        title: 'background: true',
        oneLiner: {
          en: 'Run agent as background task',
          ro: 'Rulează agentul ca sarcină de fundal',
        },
        explanation: {
          en: 'Launches the agent in the background so you can continue working in the main conversation. The agent works independently and you get notified when it finishes. Perfect for long-running tasks like large refactors or comprehensive code reviews.',
          ro: 'Lansează agentul în fundal ca să poți continua să lucrezi în conversația principală. Agentul lucrează independent și ești notificat când termină. Perfect pentru sarcini de durată ca refactorizări mari sau code review-uri comprehensive.',
        },
        category: 'agent-configuration',
        level: 'advanced',
        tags: ['agent', 'background', 'async', 'parallel', 'non-blocking'],
      },
      {
        id: 'agent-config-max-turns',
        title: 'maxTurns',
        oneLiner: {
          en: 'Limit number of agentic turns',
          ro: 'Limitează numărul de turnuri agentice',
        },
        explanation: {
          en: 'Sets a hard cap on how many reasoning/action cycles the agent can take. Prevents runaway agents that loop endlessly or burn through tokens on tasks that should be quick. A safety net for both cost and time.',
          ro: 'Setează o limită fixă pentru câte cicluri de raționament/acțiune poate face agentul. Previne agenții care se învârt la nesfârșit sau consumă token-uri pe sarcini care ar trebui să fie rapide. O plasă de siguranță pentru cost și timp.',
        },
        category: 'agent-configuration',
        level: 'advanced',
        tags: ['agent', 'turns', 'limit', 'safety', 'cost', 'budget'],
      },
      {
        id: 'agent-config-initial-prompt',
        title: 'initialPrompt',
        oneLiner: {
          en: 'Auto-submit first prompt when agent starts',
          ro: 'Trimite automat primul prompt când pornește agentul',
        },
        explanation: {
          en: 'Pre-configures the first message sent to the agent so it starts working immediately without user input. Useful for agents that always begin with the same task — like "scan for security issues" or "run the test suite and report results".',
          ro: 'Pre-configurează primul mesaj trimis agentului ca să înceapă să lucreze imediat fără input de la utilizator. Util pentru agenți care încep mereu cu aceeași sarcină — cum ar fi "scanează probleme de securitate" sau "rulează testele și raportează rezultatele".',
        },
        category: 'agent-configuration',
        level: 'advanced',
        tags: ['agent', 'prompt', 'auto-start', 'initialization', 'automation'],
      },
      {
        id: 'agent-config-send-message',
        title: 'SendMessage',
        oneLiner: {
          en: 'Resume or continue running agents',
          ro: 'Reia sau continuă agenții care rulează',
        },
        explanation: {
          en: 'Send a message to an agent that is already running or paused. Use it to provide additional context, redirect the agent mid-task, or resume a background agent. This is how you communicate with agents without restarting them.',
          ro: 'Trimite un mesaj unui agent care deja rulează sau e în pauză. Folosește-l ca să oferi context adițional, redirecționezi agentul în timpul sarcinii sau reiei un agent de fundal. Așa comunici cu agenții fără să-i repornești.',
        },
        category: 'agent-configuration',
        level: 'advanced',
        tags: ['agent', 'message', 'resume', 'continue', 'communication'],
      },
      {
        id: 'agent-config-mention',
        title: '@agent-name',
        oneLiner: {
          en: 'Mention and invoke named subagents',
          ro: 'Menționează și invocă subagenți numiți',
        },
        explanation: {
          en: 'Use @-mention syntax to invoke a specific named agent directly from your prompt. This lets you delegate parts of a conversation to specialized agents without switching context. The mentioned agent runs as a subagent and returns results to the main conversation.',
          ro: 'Folosești sintaxa @-menționare ca să invoci un agent specific direct din prompt. Asta îți permite să delegi părți din conversație agenților specializați fără să schimbi contextul. Agentul menționat rulează ca subagent și returnează rezultatele în conversația principală.',
        },
        example: {
          en: '"@explorer where is the auth middleware?" — the Explore agent searches the codebase and reports back.',
          ro: '"@explorer unde e middleware-ul de auth?" — agentul Explore caută în codebase și raportează înapoi.',
        },
        category: 'agent-configuration',
        level: 'advanced',
        tags: ['agent', 'mention', 'invoke', 'subagent', 'delegation'],
        isNew: true,
      },
    ],
  },
];
