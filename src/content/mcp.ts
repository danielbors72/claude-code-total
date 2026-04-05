import type { CommandCategory } from '../lib/types';

export const mcpCategories: CommandCategory[] = [
  {
    id: 'transport',
    name: { en: 'Transport Methods', ro: 'Metode de transport' },
    icon: 'Network',
    items: [
      {
        id: 'mcp-http',
        title: 'HTTP Transport',
        oneLiner: {
          en: 'Recommended for remote MCP servers',
          ro: 'Recomandat pentru servere MCP remote',
        },
        explanation: {
          en: 'HTTP transport is the recommended way to connect to remote MCP servers. It\'s reliable, supports authentication, and works through firewalls and proxies. Use --transport http when adding servers.',
          ro: 'Transportul HTTP este modul recomandat de conectare la servere MCP remote. E fiabil, suportă autentificare și funcționează prin firewall-uri și proxy-uri. Folosește --transport http când adaugi servere.',
        },
        example: {
          en: 'claude mcp add my-server --transport http https://my-server.com/mcp',
          ro: 'claude mcp add serverul-meu --transport http https://my-server.com/mcp',
        },
        category: 'transport',
        level: 'all',
        tags: ['http', 'remote', 'transport', 'network'],
      },
      {
        id: 'mcp-stdio',
        title: 'stdio Transport',
        oneLiner: {
          en: 'For local MCP servers running as processes',
          ro: 'Pentru servere MCP locale care rulează ca procese',
        },
        explanation: {
          en: 'stdio transport runs the MCP server as a local child process and communicates via stdin/stdout. This is the default for most local tools like file system servers, database connectors, and custom scripts.',
          ro: 'Transportul stdio rulează serverul MCP ca un proces local și comunică prin stdin/stdout. Este implicit pentru majoritatea tool-urilor locale ca servere de fișiere, conectori de baze de date și scripturi custom.',
        },
        example: {
          en: 'claude mcp add my-tool --transport stdio -- npx my-mcp-tool',
          ro: 'claude mcp add tool-ul-meu --transport stdio -- npx my-mcp-tool',
        },
        category: 'transport',
        level: 'all',
        tags: ['stdio', 'local', 'process', 'transport'],
      },
      {
        id: 'mcp-sse',
        title: 'SSE Transport',
        oneLiner: {
          en: 'Server-Sent Events for streaming remote servers',
          ro: 'Server-Sent Events pentru servere remote cu streaming',
        },
        explanation: {
          en: 'SSE (Server-Sent Events) transport is used for remote servers that stream data. Less common than HTTP but useful for servers that push real-time updates.',
          ro: 'Transportul SSE (Server-Sent Events) e folosit pentru servere remote care trimit date în flux. Mai puțin comun decât HTTP dar util pentru servere care trimit actualizări în timp real.',
        },
        category: 'transport',
        level: 'advanced',
        tags: ['sse', 'streaming', 'remote', 'events'],
      },
    ],
  },
  {
    id: 'scopes',
    name: { en: 'Configuration Scopes', ro: 'Domenii de configurare' },
    icon: 'Layers',
    items: [
      {
        id: 'mcp-scope-local',
        title: 'Local Scope (~/.claude.json)',
        oneLiner: {
          en: 'Personal MCP servers, only visible to you',
          ro: 'Servere MCP personale, vizibile doar pentru tine',
        },
        explanation: {
          en: 'MCP servers configured in your personal ~/.claude.json are available in all projects but only for you. Use this for personal tools, API integrations, or services with your own credentials.',
          ro: 'Serverele MCP configurate în ~/.claude.json personal sunt disponibile în toate proiectele dar doar pentru tine. Folosește pentru tool-uri personale, integrări API sau servicii cu credențialele tale.',
        },
        category: 'scopes',
        level: 'beginner',
        tags: ['local', 'personal', 'scope', 'private'],
      },
      {
        id: 'mcp-scope-project',
        title: 'Project Scope (.mcp.json)',
        oneLiner: {
          en: 'Shared via version control for the whole team',
          ro: 'Partajat prin version control pentru toată echipa',
        },
        explanation: {
          en: 'Project-level MCP configuration lives in .mcp.json at the project root. Committed to git so every team member gets the same tool integrations automatically. The recommended approach for team tools.',
          ro: 'Configurarea MCP la nivel de proiect stă în .mcp.json la root-ul proiectului. Comis în git astfel încât fiecare membru al echipei primește aceleași integrări de tool-uri automat. Abordarea recomandată pentru tool-urile de echipă.',
        },
        category: 'scopes',
        level: 'beginner',
        tags: ['project', 'shared', 'team', 'vcs'],
      },
    ],
  },
  {
    id: 'management',
    name: { en: 'Management Commands', ro: 'Comenzi de gestionare' },
    icon: 'Settings',
    items: [
      {
        id: 'mcp-interactive',
        title: '/mcp',
        oneLiner: {
          en: 'Interactive UI for managing MCP servers',
          ro: 'Interfață interactivă pentru gestionarea serverelor MCP',
        },
        explanation: {
          en: 'The /mcp command opens an interactive interface where you can add, remove, enable, disable, and configure MCP servers. The easiest way to manage your MCP setup.',
          ro: 'Comanda /mcp deschide o interfață interactivă unde poți adăuga, elimina, activa, dezactiva și configura servere MCP. Cel mai ușor mod de a gestiona setup-ul MCP.',
        },
        category: 'management',
        level: 'beginner',
        tags: ['mcp', 'manage', 'interactive', 'ui'],
      },
      {
        id: 'mcp-list',
        title: 'claude mcp list',
        oneLiner: {
          en: 'List all configured MCP servers and their status',
          ro: 'Listează toate serverele MCP configurate și statusul lor',
        },
        explanation: {
          en: 'Shows all MCP servers from all scopes (local, project, user) with their current status — connected, disconnected, or errored.',
          ro: 'Afișează toate serverele MCP din toate domeniile (local, proiect, utilizator) cu statusul curent — conectat, deconectat sau cu eroare.',
        },
        example: { en: 'claude mcp list', ro: 'claude mcp list' },
        category: 'management',
        level: 'beginner',
        tags: ['list', 'status', 'servers'],
      },
      {
        id: 'mcp-serve',
        title: 'claude mcp serve',
        oneLiner: {
          en: 'Run Claude Code itself as an MCP server',
          ro: 'Rulează Claude Code ca un server MCP',
        },
        explanation: {
          en: 'Turn Claude Code into an MCP server that other tools can connect to. This allows IDEs, scripts, and other MCP clients to interact with Claude Code programmatically.',
          ro: 'Transformă Claude Code într-un server MCP la care alte tool-uri se pot conecta. Permite IDE-urilor, scripturilor și altor clienți MCP să interacționeze cu Claude Code programatic.',
        },
        category: 'management',
        level: 'advanced',
        tags: ['serve', 'server', 'api', 'integration'],
      },
      {
        id: 'mcp-desc-limit',
        title: 'Tool Description Limit',
        oneLiner: {
          en: 'Tool descriptions limited to 2KB each',
          ro: 'Descrierile tool-urilor limitate la 2KB fiecare',
        },
        explanation: {
          en: 'MCP server tool descriptions and instructions are capped at 2KB to keep context manageable. Keep your tool descriptions concise and focused on what the tool does and when to use it.',
          ro: 'Descrierile și instrucțiunile tool-urilor MCP sunt limitate la 2KB pentru a menține contextul gestionabil. Ține descrierile tool-urilor concise și concentrate pe ce face tool-ul și când să-l folosești.',
        },
        category: 'management',
        level: 'advanced',
        tags: ['limit', 'description', '2kb', 'cap'],
      },
      {
        id: 'mcp-max-result',
        title: 'maxResultSizeChars',
        isNew: true,
        oneLiner: {
          en: 'Override result size limit up to 500K characters',
          ro: 'Suprascrie limita de dimensiune rezultat până la 500K caractere',
        },
        explanation: {
          en: 'MCP tools can annotate their results with maxResultSizeChars to increase the default result size cap up to 500,000 characters. Useful for tools that return large datasets, documentation, or code files.',
          ro: 'Tool-urile MCP pot adnota rezultatele cu maxResultSizeChars pentru a crește limita implicită până la 500.000 caractere. Util pentru tool-uri care returnează seturi mari de date, documentație sau fișiere de cod.',
        },
        category: 'management',
        level: 'advanced',
        tags: ['result', 'size', 'limit', 'override', 'large'],
      },
    ],
  },
];
