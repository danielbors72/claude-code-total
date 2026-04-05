import type { CommandCategory } from '../lib/types';

export const configCategories: CommandCategory[] = [
  {
    id: 'config-files',
    name: { en: 'Config Files', ro: 'Fișiere de configurare' },
    icon: 'File',
    items: [
      {
        id: 'cfg-user-settings',
        title: '~/.claude/settings.json',
        oneLiner: {
          en: 'User-level settings applied to all projects',
          ro: 'Setări la nivel de utilizator, aplicate la toate proiectele',
        },
        explanation: {
          en: 'Your personal settings file. Applies to every project you open with Claude Code. Put your preferred model, theme, and global permissions here. Changes take effect on next session start.',
          ro: 'Fișierul tău personal de setări. Se aplică la fiecare proiect deschis cu Claude Code. Pune aici modelul preferat, tema și permisiunile globale. Modificările se aplică la următoarea sesiune.',
        },
        example: {
          en: '{\n  "model": "claude-opus-4-6",\n  "theme": "dark",\n  "permissions": { "allow": ["Bash(npm test)"] }\n}',
          ro: '{\n  "model": "claude-opus-4-6",\n  "theme": "dark",\n  "permissions": { "allow": ["Bash(npm test)"] }\n}',
        },
        category: 'config-files',
        level: 'beginner',
        tags: ['settings', 'user', 'global', 'config'],
      },
      {
        id: 'cfg-project-settings',
        title: '.claude/settings.json',
        oneLiner: {
          en: 'Project settings shared via version control',
          ro: 'Setări de proiect partajate prin version control',
        },
        explanation: {
          en: 'Project-specific settings committed to your repo. Shared with the entire team. Use this for project-wide tool permissions, allowed commands, and shared configuration.',
          ro: 'Setări specifice proiectului, comise în repo. Partajate cu toată echipa. Folosește-l pentru permisiuni de tool-uri la nivel de proiect, comenzi permise și configurare partajată.',
        },
        category: 'config-files',
        level: 'beginner',
        tags: ['settings', 'project', 'shared', 'team'],
      },
      {
        id: 'cfg-local-settings',
        title: '.claude/settings.local.json',
        oneLiner: {
          en: 'Local-only project settings (not committed)',
          ro: 'Setări locale de proiect (necomise)',
        },
        explanation: {
          en: 'Like project settings but personal — not committed to git. Perfect for local overrides, personal API keys, or machine-specific configuration that shouldn\'t be shared.',
          ro: 'Ca setările de proiect dar personale — nu se comit în git. Perfect pentru override-uri locale, chei API personale sau configurări specifice mașinii care nu trebuie partajate.',
        },
        category: 'config-files',
        level: 'all',
        tags: ['settings', 'local', 'personal', 'gitignore'],
      },
      {
        id: 'cfg-claude-json',
        title: '~/.claude.json',
        oneLiner: {
          en: 'OAuth tokens, MCP servers, and app state',
          ro: 'Tokeni OAuth, servere MCP și starea aplicației',
        },
        explanation: {
          en: 'Managed automatically by Claude Code. Contains your authentication tokens, MCP server configurations, and internal state. You rarely need to edit this directly — use /mcp and /config instead.',
          ro: 'Gestionat automat de Claude Code. Conține tokenii de autentificare, configurările serverelor MCP și starea internă. Rareori trebuie editat direct — folosește /mcp și /config.',
        },
        category: 'config-files',
        level: 'advanced',
        tags: ['oauth', 'state', 'mcp', 'auth'],
      },
      {
        id: 'cfg-mcp-json',
        title: '.mcp.json',
        oneLiner: {
          en: 'Project MCP server definitions (shared via VCS)',
          ro: 'Definiții servere MCP de proiect (partajate prin VCS)',
        },
        explanation: {
          en: 'Define MCP servers for your project here. Committed to git so the whole team gets the same tool integrations. Each server entry specifies the transport method, command, and arguments.',
          ro: 'Definește serverele MCP pentru proiectul tău aici. Comis în git astfel încât toată echipa primește aceleași integrări de tool-uri. Fiecare intrare specifică metoda de transport, comanda și argumentele.',
        },
        example: {
          en: '{\n  "mcpServers": {\n    "my-server": {\n      "command": "npx",\n      "args": ["my-mcp-server"]\n    }\n  }\n}',
          ro: '{\n  "mcpServers": {\n    "serverul-meu": {\n      "command": "npx",\n      "args": ["my-mcp-server"]\n    }\n  }\n}',
        },
        category: 'config-files',
        level: 'all',
        tags: ['mcp', 'servers', 'project', 'tools'],
      },
      {
        id: 'cfg-managed',
        title: 'managed-settings.d/',
        oneLiner: {
          en: 'Drop-in policy fragments for organizations',
          ro: 'Fragmente de politici drop-in pentru organizații',
        },
        explanation: {
          en: 'Organizations can distribute policy files that override user settings. These are drop-in JSON fragments placed in managed directories — useful for enforcing security policies, allowed tools, and model restrictions across teams.',
          ro: 'Organizațiile pot distribui fișiere de politici care suprascriu setările utilizatorului. Sunt fragmente JSON drop-in — utile pentru aplicarea politicilor de securitate, tool-uri permise și restricții de model în echipe.',
        },
        category: 'config-files',
        level: 'advanced',
        tags: ['managed', 'policy', 'organization', 'enterprise'],
      },
    ],
  },
  {
    id: 'key-settings',
    name: { en: 'Key Settings', ro: 'Setări importante' },
    icon: 'Sliders',
    items: [
      {
        id: 'cfg-model-overrides',
        title: 'modelOverrides',
        oneLiner: {
          en: 'Map model picker entries to custom model IDs',
          ro: 'Mapează intrările din model picker la ID-uri personalizate',
        },
        explanation: {
          en: 'Override the models shown in the model picker (Alt+P). Map friendly names to custom model IDs from providers like AWS Bedrock or Google Vertex. Useful in enterprise setups with custom endpoints.',
          ro: 'Suprascrie modelele afișate în model picker (Alt+P). Mapează nume prietenoase la ID-uri de model personalizate de la furnizori ca AWS Bedrock sau Google Vertex. Util în setări enterprise cu endpoint-uri custom.',
        },
        category: 'key-settings',
        level: 'advanced',
        tags: ['model', 'override', 'custom', 'bedrock', 'vertex'],
      },
      {
        id: 'cfg-auto-memory-dir',
        title: 'autoMemoryDirectory',
        oneLiner: {
          en: 'Custom path for auto-memory storage',
          ro: 'Cale personalizată pentru stocarea memoriei automate',
        },
        explanation: {
          en: 'By default, auto-memory lives in ~/.claude/projects/<project>/memory/. Override this if you want memory stored elsewhere, like within the project itself for team sharing.',
          ro: 'Implicit, memoria automată stă în ~/.claude/projects/<project>/memory/. Suprascrie dacă vrei memoria stocată în altă parte, de exemplu în proiect pentru partajare cu echipa.',
        },
        category: 'key-settings',
        level: 'advanced',
        tags: ['memory', 'directory', 'path', 'storage'],
      },
      {
        id: 'cfg-sparse-paths',
        title: 'worktree.sparsePaths',
        oneLiner: {
          en: 'Checkout only needed directories in worktrees',
          ro: 'Checkout doar directoarele necesare în worktrees',
        },
        explanation: {
          en: 'For large monorepos, specify which directories to include in worktree checkouts. Dramatically speeds up worktree creation and saves disk space.',
          ro: 'Pentru monorepo-uri mari, specifică ce directoare să fie incluse în checkout-urile worktree. Accelerează dramatic crearea worktrees și economisește spațiu pe disc.',
        },
        example: {
          en: '{ "worktree": { "sparsePaths": ["src/", "tests/", "config/"] } }',
          ro: '{ "worktree": { "sparsePaths": ["src/", "tests/", "config/"] } }',
        },
        category: 'key-settings',
        level: 'advanced',
        tags: ['worktree', 'sparse', 'monorepo', 'performance'],
      },
      {
        id: 'cfg-sandbox',
        title: 'sandbox.failIfUnavailable',
        oneLiner: {
          en: 'Exit if sandbox fails to start',
          ro: 'Ieși dacă sandbox-ul nu pornește',
        },
        explanation: {
          en: 'When set to true, Claude Code will refuse to run if the sandbox environment isn\'t available. This is a safety net for environments where sandboxing is critical for security.',
          ro: 'Când e setat pe true, Claude Code refuză să ruleze dacă mediul sandbox nu e disponibil. E o plasă de siguranță pentru mediile unde sandboxing-ul e critic pentru securitate.',
        },
        category: 'key-settings',
        level: 'advanced',
        tags: ['sandbox', 'security', 'safety'],
      },
      {
        id: 'cfg-hooks-if',
        title: 'hooks: if',
        oneLiner: {
          en: 'Conditional hooks using permission rule syntax',
          ro: 'Hook-uri condiționale folosind sintaxa regulilor de permisiune',
        },
        explanation: {
          en: 'Make hooks run only when certain conditions are met, using the same syntax as permission rules. For example, run a linter hook only when TypeScript files are edited.',
          ro: 'Fă hook-urile să ruleze doar când anumite condiții sunt îndeplinite, folosind aceeași sintaxă ca regulile de permisiune. De exemplu, rulează un hook de linting doar când se editează fișiere TypeScript.',
        },
        category: 'key-settings',
        level: 'advanced',
        tags: ['hooks', 'conditional', 'rules', 'automation'],
      },
      {
        id: 'cfg-thinking-summaries',
        title: 'showThinkingSummaries',
        isNew: true,
        oneLiner: {
          en: 'Show or hide thinking process summaries',
          ro: 'Afișează sau ascunde sumarele procesului de gândire',
        },
        explanation: {
          en: 'Controls whether thinking summaries appear in the output. Off by default now — opt in if you want to see how Claude reasons through problems without switching to full verbose mode.',
          ro: 'Controlează dacă sumarele gândirii apar în output. Dezactivat implicit acum — activează dacă vrei să vezi cum raționează Claude fără a trece la modul verbose complet.',
        },
        category: 'key-settings',
        level: 'all',
        tags: ['thinking', 'summary', 'verbose', 'display'],
      },
      {
        id: 'cfg-disable-skill-shell',
        title: 'disableSkillShellExec',
        isNew: true,
        oneLiner: {
          en: 'Block shell commands in skills and plugins',
          ro: 'Blochează comenzile shell în skill-uri și plugin-uri',
        },
        explanation: {
          en: 'Security setting that prevents skills and plugins from executing shell commands via backtick syntax. Enable this in security-sensitive environments to limit what third-party skills can do.',
          ro: 'Setare de securitate care previne skill-urile și plugin-urile să execute comenzi shell prin sintaxa backtick. Activează în medii sensibile la securitate pentru a limita ce pot face skill-urile terțe.',
        },
        category: 'key-settings',
        level: 'advanced',
        tags: ['security', 'skills', 'shell', 'restrict'],
      },
    ],
  },
  {
    id: 'env-vars',
    name: { en: 'Environment Variables', ro: 'Variabile de mediu' },
    icon: 'Variable',
    items: [
      {
        id: 'cfg-api-key',
        title: 'ANTHROPIC_API_KEY',
        oneLiner: {
          en: 'API authentication key for direct API access',
          ro: 'Cheie de autentificare API pentru acces direct',
        },
        explanation: {
          en: 'Set this if you\'re using your own API key instead of the Claude Pro/Max subscription. Required for API-based access and enterprise deployments.',
          ro: 'Setează dacă folosești propria cheie API în loc de abonamentul Claude Pro/Max. Necesar pentru acces bazat pe API și deployments enterprise.',
        },
        example: {
          en: 'export ANTHROPIC_API_KEY=sk-ant-...',
          ro: 'export ANTHROPIC_API_KEY=sk-ant-...',
        },
        category: 'env-vars',
        level: 'all',
        tags: ['api', 'key', 'auth', 'token'],
      },
      {
        id: 'cfg-model-env',
        title: 'ANTHROPIC_MODEL',
        oneLiner: {
          en: 'Set default model for all sessions',
          ro: 'Setează modelul implicit pentru toate sesiunile',
        },
        explanation: {
          en: 'Override the default model Claude Code uses. Useful when you want a specific model without typing --model every time.',
          ro: 'Suprascrie modelul implicit folosit de Claude Code. Util când vrei un model specific fără a scrie --model de fiecare dată.',
        },
        example: {
          en: 'export ANTHROPIC_MODEL=claude-sonnet-4-6',
          ro: 'export ANTHROPIC_MODEL=claude-sonnet-4-6',
        },
        category: 'env-vars',
        level: 'all',
        tags: ['model', 'default', 'environment'],
      },
      {
        id: 'cfg-effort-env',
        title: 'CLAUDE_CODE_EFFORT_LEVEL',
        oneLiner: {
          en: 'Default effort level: low/medium/high/max/auto',
          ro: 'Nivel de efort implicit: low/medium/high/max/auto',
        },
        explanation: {
          en: 'Set the default effort level for all sessions. "auto" lets Claude decide based on task complexity. Higher effort means more thorough analysis but uses more tokens.',
          ro: 'Setează nivelul de efort implicit pentru toate sesiunile. "auto" lasă Claude să decidă în funcție de complexitatea task-ului. Efort mai mare înseamnă analiză mai aprofundată dar consumă mai mulți tokeni.',
        },
        category: 'env-vars',
        level: 'all',
        tags: ['effort', 'level', 'quality', 'tokens'],
      },
      {
        id: 'cfg-thinking-tokens',
        title: 'MAX_THINKING_TOKENS',
        oneLiner: {
          en: 'Control thinking budget (0 = disabled)',
          ro: 'Controlează bugetul de gândire (0 = dezactivat)',
        },
        explanation: {
          en: 'Set the maximum number of tokens Claude can use for extended thinking. Set to 0 to disable thinking entirely. Higher values allow deeper reasoning but cost more.',
          ro: 'Setează numărul maxim de tokeni pe care Claude îi poate folosi pentru gândire extinsă. Setează la 0 pentru a dezactiva complet gândirea. Valori mai mari permit raționament mai profund dar costă mai mult.',
        },
        category: 'env-vars',
        level: 'advanced',
        tags: ['thinking', 'tokens', 'budget', 'reasoning'],
      },
      {
        id: 'cfg-no-flicker',
        title: 'CLAUDE_CODE_NO_FLICKER',
        isNew: true,
        oneLiner: {
          en: 'Alt-screen rendering to reduce terminal flicker',
          ro: 'Randare alt-screen pentru a reduce flickerul terminalului',
        },
        explanation: {
          en: 'Set to 1 to enable alternate screen rendering, which eliminates visual flickering in some terminal emulators. Try this if you see screen tearing or flashing during Claude Code output.',
          ro: 'Setează la 1 pentru randare pe ecranul alternativ, care elimină flickerul vizual în unele emulatoare de terminal. Încearcă dacă vezi tearing sau flash-uri în timpul output-ului.',
        },
        example: { en: 'export CLAUDE_CODE_NO_FLICKER=1', ro: 'export CLAUDE_CODE_NO_FLICKER=1' },
        category: 'env-vars',
        level: 'advanced',
        tags: ['flicker', 'terminal', 'display', 'rendering'],
      },
      {
        id: 'cfg-mcp-nonblocking',
        title: 'MCP_CONNECTION_NONBLOCKING',
        isNew: true,
        oneLiner: {
          en: 'Skip MCP server wait in headless mode',
          ro: 'Sari peste așteptarea serverului MCP în modul headless',
        },
        explanation: {
          en: 'In headless mode (-p), MCP servers can slow down startup. Set this to skip waiting for MCP connections, useful in CI/CD where MCP servers may not be available.',
          ro: 'În modul headless (-p), serverele MCP pot încetini pornirea. Setează pentru a sări peste așteptarea conexiunilor MCP, util în CI/CD unde serverele MCP pot lipsi.',
        },
        category: 'env-vars',
        level: 'advanced',
        tags: ['mcp', 'headless', 'ci', 'startup', 'performance'],
      },
      {
        id: 'cfg-claudecode-detect',
        title: 'CLAUDECODE',
        oneLiner: {
          en: 'Detect if running inside Claude Code (=1)',
          ro: 'Detectează dacă rulezi în Claude Code (=1)',
        },
        explanation: {
          en: 'This environment variable is automatically set to "1" when a shell command runs inside Claude Code. Check it in your scripts to adjust behavior — for example, skip interactive prompts or use different output formatting.',
          ro: 'Această variabilă e setată automat la "1" când o comandă shell rulează în Claude Code. Verifică-o în scripturile tale pentru a ajusta comportamentul — de exemplu, sări peste prompturi interactive sau folosește formatare diferită.',
        },
        example: {
          en: 'if [ "$CLAUDECODE" = "1" ]; then\n  echo "Running inside Claude Code"\nfi',
          ro: 'if [ "$CLAUDECODE" = "1" ]; then\n  echo "Rulează în Claude Code"\nfi',
        },
        category: 'env-vars',
        level: 'advanced',
        tags: ['detect', 'environment', 'script', 'conditional'],
      },
    ],
  },
];
