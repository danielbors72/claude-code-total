import type { CommandCategory } from '../lib/types';

export const workflowCategories: CommandCategory[] = [
  {
    id: 'plan-mode',
    name: { en: 'Plan Mode', ro: 'Modul Plan' },
    icon: 'Map',
    items: [
      {
        id: 'wf-plan-mode-cycle',
        title: 'Permission Mode Cycling',
        oneLiner: {
          en: 'Shift+Tab cycles: Normal → Auto-Accept → Plan',
          ro: 'Shift+Tab ciclează: Normal → Auto-Accept → Plan',
        },
        explanation: {
          en: 'Plan Mode is read-only — Claude explores the codebase and designs an approach without making changes. Use it before complex implementations to align on strategy before writing code. Shift+Tab lets you switch between modes without leaving the conversation.',
          ro: 'Plan Mode este doar-citire — Claude explorează codul și proiectează o abordare fără să facă modificări. Folosește-l înainte de implementări complexe ca să te aliniezi pe strategie înainte de a scrie cod. Shift+Tab te lasă să comuți între moduri fără să ieși din conversație.',
        },
        example: {
          en: 'Press Shift+Tab twice to enter Plan Mode, describe your feature, review the plan, then Shift+Tab back to Normal to execute.',
          ro: 'Apasă Shift+Tab de două ori pentru Plan Mode, descrie feature-ul, revizuiește planul, apoi Shift+Tab înapoi la Normal pentru execuție.',
        },
        category: 'plan-mode',
        level: 'beginner',
        tags: ['plan', 'mode', 'strategy', 'read-only'],
      },
      {
        id: 'wf-plan-flag',
        title: '--permission-mode plan',
        oneLiner: {
          en: 'Start Claude Code directly in plan mode',
          ro: 'Pornește Claude Code direct în modul plan',
        },
        explanation: {
          en: 'If you know you want to plan before coding, start the session in plan mode from the CLI. This prevents accidental edits while you explore and design your approach.',
          ro: 'Dacă știi că vrei să planifici înainte de a coda, pornește sesiunea în plan mode din CLI. Previne editări accidentale în timp ce explorezi și proiectezi abordarea.',
        },
        example: { en: 'claude --permission-mode plan', ro: 'claude --permission-mode plan' },
        category: 'plan-mode',
        level: 'all',
        tags: ['plan', 'flag', 'start'],
      },
    ],
  },
  {
    id: 'thinking',
    name: { en: 'Thinking & Effort', ro: 'Gândire și efort' },
    icon: 'Brain',
    items: [
      {
        id: 'wf-thinking-toggle',
        title: 'Toggle Thinking',
        shortcut: 'Alt+T',
        oneLiner: {
          en: 'Enable extended thinking for complex problems',
          ro: 'Activează gândirea extinsă pentru probleme complexe',
        },
        explanation: {
          en: 'Extended thinking lets Claude reason through complex problems step by step before responding. Toggle it on for architecture decisions, debugging tricky issues, or when you need more thorough analysis. View thinking output with Ctrl+O.',
          ro: 'Gândirea extinsă permite lui Claude să raționeze pas cu pas prin probleme complexe înainte de a răspunde. Activează-o pentru decizii de arhitectură, debugging dificil sau când ai nevoie de o analiză mai aprofundată. Vezi output-ul gândirii cu Ctrl+O.',
        },
        category: 'thinking',
        level: 'all',
        tags: ['thinking', 'reasoning', 'complex'],
      },
      {
        id: 'wf-effort-levels',
        title: 'Effort Levels',
        oneLiner: {
          en: 'Control depth: low (○), medium (◐), high (●), max (★), auto',
          ro: 'Controlează profunzimea: low (○), medium (◐), high (●), max (★), auto',
        },
        explanation: {
          en: 'Effort levels control how thoroughly Claude approaches a task. Use "low" for quick answers, "high" for thorough implementations, "max" for the deepest analysis. "auto" lets Claude decide based on complexity. Set via /effort command or CLAUDE_CODE_EFFORT_LEVEL env var.',
          ro: 'Nivelurile de efort controlează cât de aprofundat abordează Claude un task. Folosește "low" pentru răspunsuri rapide, "high" pentru implementări amănunțite, "max" pentru cea mai profundă analiză. "auto" lasă Claude să decidă în funcție de complexitate.',
        },
        example: {
          en: '/effort max\n# or start with: claude --effort high',
          ro: '/effort max\n# sau pornește cu: claude --effort high',
        },
        category: 'thinking',
        level: 'all',
        tags: ['effort', 'depth', 'quality'],
      },
      {
        id: 'wf-ultrathink',
        title: 'Ultrathink',
        oneLiner: {
          en: 'Type "ultrathink" in prompt for maximum single-turn depth',
          ro: 'Scrie "ultrathink" în prompt pentru profunzime maximă pe un singur turn',
        },
        explanation: {
          en: 'When you need the absolute deepest analysis on a single response, type "ultrathink" anywhere in your prompt. This maximizes thinking tokens for that turn only. Great for complex architecture reviews or when you need Claude to really think through all implications.',
          ro: 'Când ai nevoie de cea mai profundă analiză pe un singur răspuns, scrie "ultrathink" oriunde în prompt. Maximizează token-ii de gândire doar pentru acel turn. Excelent pentru revizuiri complexe de arhitectură.',
        },
        category: 'thinking',
        level: 'advanced',
        tags: ['ultrathink', 'deep', 'analysis'],
      },
    ],
  },
  {
    id: 'worktrees',
    name: { en: 'Git Worktrees', ro: 'Git Worktrees' },
    icon: 'GitBranch',
    items: [
      {
        id: 'wf-worktree-basic',
        title: 'Worktree Isolation',
        oneLiner: {
          en: 'Work on features in isolated copies of your repo',
          ro: 'Lucrează pe feature-uri în copii izolate ale repo-ului',
        },
        explanation: {
          en: 'Git worktrees let you have multiple working copies of a repo simultaneously. Claude can work in a worktree without affecting your main directory. Perfect for parallel feature development or when you want to try something without risk.',
          ro: 'Git worktrees îți permit să ai mai multe copii de lucru ale repo-ului simultan. Claude poate lucra într-un worktree fără să afecteze directorul principal. Perfect pentru dezvoltare paralelă sau când vrei să încerci ceva fără risc.',
        },
        example: {
          en: 'claude -w my-feature\n# or: claude --worktree my-feature',
          ro: 'claude -w feature-ul-meu\n# sau: claude --worktree feature-ul-meu',
        },
        category: 'worktrees',
        level: 'advanced',
        tags: ['worktree', 'isolation', 'git', 'branch'],
      },
      {
        id: 'wf-worktree-agent',
        title: 'Agent Worktrees',
        oneLiner: {
          en: 'Run subagents in isolated worktrees',
          ro: 'Rulează sub-agenți în worktrees izolate',
        },
        explanation: {
          en: 'When using the Agent tool, set isolation: "worktree" to give each agent its own copy of the repo. The agent works independently, and changes are returned when done. Great for parallel tasks that might conflict.',
          ro: 'Când folosești tool-ul Agent, setează isolation: "worktree" pentru a da fiecărui agent propria copie a repo-ului. Agentul lucrează independent, iar modificările sunt returnate când termină.',
        },
        category: 'worktrees',
        level: 'advanced',
        tags: ['agent', 'worktree', 'parallel', 'isolation'],
      },
      {
        id: 'wf-sparse-paths',
        title: 'Sparse Checkout',
        oneLiner: {
          en: 'Only checkout needed directories in worktrees',
          ro: 'Checkout doar directoarele necesare în worktrees',
        },
        explanation: {
          en: 'For large repos, use sparsePaths in settings to checkout only the directories your worktrees need. This saves disk space and speeds up worktree creation significantly.',
          ro: 'Pentru repo-uri mari, folosește sparsePaths în setări pentru a face checkout doar la directoarele de care au nevoie worktrees-urile. Economisește spațiu pe disc și accelerează crearea semnificativ.',
        },
        example: {
          en: '// In .claude/settings.json:\n{ "worktree": { "sparsePaths": ["src/", "tests/"] } }',
          ro: '// În .claude/settings.json:\n{ "worktree": { "sparsePaths": ["src/", "tests/"] } }',
        },
        category: 'worktrees',
        level: 'advanced',
        tags: ['sparse', 'checkout', 'performance', 'large-repo'],
      },
    ],
  },
  {
    id: 'voice',
    name: { en: 'Voice Mode', ro: 'Modul vocal' },
    icon: 'Mic',
    items: [
      {
        id: 'wf-voice-mode',
        title: 'Push-to-Talk',
        oneLiner: {
          en: '/voice enables voice input — hold Space to record',
          ro: '/voice activează input vocal — ține Space apăsat pentru a înregistra',
        },
        explanation: {
          en: 'Voice mode converts speech to text for hands-free coding sessions. Type /voice, then hold Space to record and release to send. Supports 20 languages including English, Spanish, French, German, Czech, Polish, and more.',
          ro: 'Modul vocal convertește vorbirea în text pentru sesiuni de coding hands-free. Scrie /voice, apoi ține Space apăsat pentru a înregistra și eliberează pentru a trimite. Suportă 20 de limbi inclusiv engleză, spaniolă, franceză, germană, cehă, poloneză.',
        },
        category: 'voice',
        level: 'all',
        tags: ['voice', 'speech', 'dictation', 'hands-free'],
      },
    ],
  },
  {
    id: 'context',
    name: { en: 'Context Management', ro: 'Gestionarea contextului' },
    icon: 'Layers',
    items: [
      {
        id: 'wf-context-visual',
        title: 'Context Visualization',
        oneLiner: {
          en: '/context shows how much context window is used',
          ro: '/context arată cât din fereastra de context este folosită',
        },
        explanation: {
          en: 'The /context command displays a grid showing your context window usage — how much is consumed by conversation history, tool results, and system context. Helps you understand when to compact.',
          ro: 'Comanda /context afișează un grid cu utilizarea ferestrei de context — cât este consumat de istoricul conversației, rezultatele tool-urilor și contextul de sistem. Te ajută să înțelegi când să faci compact.',
        },
        category: 'context',
        level: 'beginner',
        tags: ['context', 'window', 'usage', 'visualization'],
      },
      {
        id: 'wf-compact',
        title: 'Smart Compaction',
        oneLiner: {
          en: '/compact [focus] compresses context, preserving focus area',
          ro: '/compact [focus] comprimă contextul, păstrând zona de interes',
        },
        explanation: {
          en: 'When context gets full, /compact compresses the conversation while preserving essential information. Pass a focus parameter to tell Claude what to prioritize keeping. Auto-compact triggers around 95% capacity. CLAUDE.md content always survives compaction.',
          ro: 'Când contextul se umple, /compact comprimă conversația păstrând informațiile esențiale. Adaugă un parametru de focus pentru a spune lui Claude ce să prioritizeze. Auto-compact se declanșează la ~95% capacitate. Conținutul CLAUDE.md supraviețuiește mereu compactării.',
        },
        example: {
          en: '/compact focus on the authentication changes',
          ro: '/compact focus pe modificările de autentificare',
        },
        category: 'context',
        level: 'beginner',
        tags: ['compact', 'compress', 'context', 'memory'],
      },
      {
        id: 'wf-opus-context',
        title: 'Context Window Size',
        oneLiner: {
          en: 'Opus 4.6 has 1M token context on Max/Team/Enterprise',
          ro: 'Opus 4.6 are context de 1M tokeni pe Max/Team/Enterprise',
        },
        explanation: {
          en: 'Claude Code on Opus 4.6 provides up to 1 million tokens of context on Max, Team, and Enterprise plans. This is enough for large codebases, but compaction is still important for optimal performance.',
          ro: 'Claude Code pe Opus 4.6 oferă până la 1 milion de tokeni de context pe planurile Max, Team și Enterprise. E suficient pentru codebases mari, dar compactarea rămâne importantă pentru performanță optimă.',
        },
        category: 'context',
        level: 'all',
        tags: ['context', 'window', 'opus', 'tokens'],
      },
    ],
  },
  {
    id: 'sessions',
    name: { en: 'Session Power Moves', ro: 'Trucuri de sesiune' },
    icon: 'History',
    items: [
      {
        id: 'wf-continue',
        title: 'Continue Last Session',
        oneLiner: {
          en: 'claude -c picks up where you left off',
          ro: 'claude -c continuă de unde ai rămas',
        },
        explanation: {
          en: 'Start Claude Code with -c to continue your last conversation. All context is restored — no need to re-explain what you were working on.',
          ro: 'Pornește Claude Code cu -c pentru a continua ultima conversație. Tot contextul e restaurat — nu trebuie să re-explici la ce lucrai.',
        },
        example: { en: 'claude -c', ro: 'claude -c' },
        category: 'sessions',
        level: 'beginner',
        tags: ['continue', 'resume', 'session', 'restore'],
      },
      {
        id: 'wf-resume-name',
        title: 'Resume by Name',
        oneLiner: {
          en: 'Name sessions with /rename, resume with claude -r',
          ro: 'Denumește sesiuni cu /rename, reia cu claude -r',
        },
        explanation: {
          en: 'Name your sessions with /rename for easy retrieval later. Use claude -r "name" to resume any named session. Great for long-running projects where you switch between features.',
          ro: 'Denumește sesiunile cu /rename pentru recuperare ușoară. Folosește claude -r "nume" pentru a relua orice sesiune denumită. Excelent pentru proiecte pe termen lung unde comuți între feature-uri.',
        },
        example: {
          en: '/rename auth-refactor\n# Later:\nclaude -r "auth-refactor"',
          ro: '/rename auth-refactor\n# Mai târziu:\nclaude -r "auth-refactor"',
        },
        category: 'sessions',
        level: 'all',
        tags: ['resume', 'name', 'session', 'switch'],
      },
      {
        id: 'wf-btw',
        title: 'Side Questions with /btw',
        oneLiner: {
          en: 'Ask quick questions without polluting context',
          ro: 'Pune întrebări rapide fără a polua contextul',
        },
        explanation: {
          en: 'The /btw command lets you ask a quick side question that doesn\'t consume your conversation context. Perfect for "what was that git command again?" type questions while you\'re in the middle of complex work.',
          ro: 'Comanda /btw îți permite să pui o întrebare rapidă care nu consumă contextul conversației. Perfectă pentru întrebări de tip "care era comanda git aia?" în timp ce ești în mijlocul unei lucrări complexe.',
        },
        example: {
          en: '/btw how do I squash the last 3 commits?',
          ro: '/btw cum fac squash la ultimele 3 commit-uri?',
        },
        category: 'sessions',
        level: 'all',
        tags: ['btw', 'side', 'question', 'context'],
      },
      {
        id: 'wf-headless',
        title: 'Headless / SDK Mode',
        oneLiner: {
          en: 'claude -p for scripting and automation',
          ro: 'claude -p pentru scripting și automatizare',
        },
        explanation: {
          en: 'Headless mode (-p) runs Claude Code non-interactively, perfect for CI/CD pipelines, scripts, or piping data. Combine with --output-format json for structured output and --max-budget-usd for cost control.',
          ro: 'Modul headless (-p) rulează Claude Code non-interactiv, perfect pentru pipeline-uri CI/CD, scripturi sau piping de date. Combină cu --output-format json pentru output structurat și --max-budget-usd pentru control de costuri.',
        },
        example: {
          en: 'claude -p "explain this function" < main.py\ncat file.ts | claude -p "find bugs" --output-format json',
          ro: 'claude -p "explică această funcție" < main.py\ncat file.ts | claude -p "găsește bug-uri" --output-format json',
        },
        category: 'sessions',
        level: 'advanced',
        tags: ['headless', 'sdk', 'automation', 'pipe', 'ci'],
      },
    ],
  },
  {
    id: 'scheduling',
    name: { en: 'Scheduling & Remote', ro: 'Programare și remote' },
    icon: 'Clock',
    items: [
      {
        id: 'wf-loop',
        title: 'Recurring Tasks',
        oneLiner: {
          en: '/loop runs a task on a schedule (e.g. every 5 minutes)',
          ro: '/loop rulează un task pe un program (ex. la fiecare 5 minute)',
        },
        explanation: {
          en: 'The /loop command schedules a recurring task within your session. Useful for monitoring builds, watching for changes, or periodic health checks.',
          ro: 'Comanda /loop programează un task recurent în sesiunea ta. Utilă pentru monitorizarea build-urilor, urmărirea schimbărilor sau verificări periodice de sănătate.',
        },
        example: {
          en: '/loop 5m check if the build passed on CI',
          ro: '/loop 5m verifică dacă build-ul a trecut pe CI',
        },
        category: 'scheduling',
        level: 'advanced',
        tags: ['loop', 'recurring', 'schedule', 'monitor'],
      },
      {
        id: 'wf-remote-control',
        title: 'Remote Control',
        isNew: true,
        oneLiner: {
          en: '/rc bridges your terminal to claude.ai/code web interface',
          ro: '/rc face bridge între terminal și interfața web claude.ai/code',
        },
        explanation: {
          en: 'Remote control (/rc) connects your local Claude Code session to the claude.ai/code web interface. You can continue your work from a browser, share your session, or hand off to someone else.',
          ro: 'Remote control (/rc) conectează sesiunea ta locală Claude Code la interfața web claude.ai/code. Poți continua munca din browser, partaja sesiunea sau preda altcuiva.',
        },
        category: 'scheduling',
        level: 'advanced',
        tags: ['remote', 'web', 'bridge', 'share'],
      },
      {
        id: 'wf-remote-session',
        title: 'Web Sessions',
        oneLiner: {
          en: '--remote starts a cloud session on claude.ai',
          ro: '--remote pornește o sesiune cloud pe claude.ai',
        },
        explanation: {
          en: 'The --remote flag starts Claude Code as a web session on claude.ai, accessible from any browser. Your work runs in the cloud instead of locally.',
          ro: 'Flag-ul --remote pornește Claude Code ca o sesiune web pe claude.ai, accesibilă din orice browser. Munca ta rulează în cloud în loc de local.',
        },
        example: { en: 'claude --remote', ro: 'claude --remote' },
        category: 'scheduling',
        level: 'advanced',
        tags: ['remote', 'cloud', 'web', 'browser'],
      },
    ],
  },
];
