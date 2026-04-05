import type { CommandCategory } from '../lib/types';

export const cliCategories: CommandCategory[] = [
  {
    id: 'core-commands',
    name: { en: 'Core Commands', ro: 'Comenzi de baza' },
    icon: 'Terminal',
    items: [
      {
        id: 'claude',
        title: 'claude',
        oneLiner: {
          en: 'Start interactive REPL mode',
          ro: 'Porneste modul interactiv REPL',
        },
        explanation: {
          en: 'Launches Claude Code in interactive mode where you can have a back-and-forth conversation. This is the default entry point most developers use daily. Your conversation persists until you type /quit or press Ctrl+C.',
          ro: 'Lanseaza Claude Code in modul interactiv pentru conversatii dus-intors. Este punctul de intrare implicit folosit zilnic de majoritatea dezvoltatorilor. Conversatia persista pana cand tastezi /quit sau Ctrl+C.',
        },
        example: {
          en: '$ claude',
          ro: '$ claude',
        },
        category: 'core-commands',
        level: 'beginner',
        tags: ['start', 'interactive', 'repl', 'conversation'],
      },
      {
        id: 'claude-query',
        title: 'claude "query"',
        oneLiner: {
          en: 'Start interactive mode with an initial prompt',
          ro: 'Porneste modul interactiv cu un prompt initial',
        },
        explanation: {
          en: 'Opens an interactive session pre-loaded with your question. Claude processes the prompt first, then you can continue the conversation. Useful when you know your starting question but may need follow-ups.',
          ro: 'Deschide o sesiune interactiva pre-incarcata cu intrebarea ta. Claude proceseaza prompt-ul intai, apoi poti continua conversatia. Util cand stii intrebarea de start dar ai nevoie de follow-up-uri.',
        },
        example: {
          en: '$ claude "explain the auth middleware in this project"',
          ro: '$ claude "explica middleware-ul de auth din acest proiect"',
        },
        category: 'core-commands',
        level: 'beginner',
        tags: ['start', 'prompt', 'query', 'interactive'],
      },
      {
        id: 'claude-print',
        title: 'claude -p "query"',
        oneLiner: {
          en: 'Run in headless/non-interactive mode',
          ro: 'Ruleaza in mod headless/non-interactiv',
        },
        explanation: {
          en: 'Executes a single prompt without entering interactive mode. Output goes to stdout, making it perfect for scripts, CI/CD pipelines, and piping into other commands. Claude processes the request and exits immediately.',
          ro: 'Executa un singur prompt fara a intra in modul interactiv. Output-ul merge la stdout, ideal pentru scripturi, pipeline-uri CI/CD si piping in alte comenzi. Claude proceseaza cererea si iese imediat.',
        },
        example: {
          en: '$ claude -p "generate unit tests for utils.ts" > tests.ts',
          ro: '$ claude -p "genereaza teste unitare pentru utils.ts" > tests.ts',
        },
        category: 'core-commands',
        level: 'beginner',
        tags: ['headless', 'non-interactive', 'script', 'pipe', 'ci', 'automation'],
      },
      {
        id: 'claude-continue',
        title: 'claude -c',
        shortcut: '-c',
        oneLiner: {
          en: 'Continue the most recent conversation',
          ro: 'Continua cea mai recenta conversatie',
        },
        explanation: {
          en: 'Resumes the last conversation you had in the current directory. All previous context is restored so you can pick up exactly where you left off. Extremely useful after closing the terminal accidentally.',
          ro: 'Reia ultima conversatie din directorul curent. Tot contextul anterior este restaurat asa ca poti continua exact de unde ai ramas. Extrem de util dupa inchiderea accidentala a terminalului.',
        },
        example: {
          en: '$ claude -c',
          ro: '$ claude -c',
        },
        category: 'core-commands',
        level: 'beginner',
        tags: ['continue', 'resume', 'history', 'session'],
      },
      {
        id: 'claude-resume',
        title: 'claude -r "name"',
        shortcut: '-r',
        oneLiner: {
          en: 'Resume a named session',
          ro: 'Reia o sesiune salvata dupa nume',
        },
        explanation: {
          en: 'Resumes a previously named session by its identifier. Pair this with --name when starting sessions to create bookmarks for long-running tasks. You can list available sessions and pick the one you need.',
          ro: 'Reia o sesiune anterioara dupa identificator. Combina cu --name la pornirea sesiunilor pentru a crea bookmark-uri pentru task-uri lungi. Poti lista sesiunile disponibile si alege pe cea de care ai nevoie.',
        },
        example: {
          en: '$ claude -r "refactor-auth"',
          ro: '$ claude -r "refactor-auth"',
        },
        category: 'core-commands',
        level: 'advanced',
        tags: ['resume', 'session', 'name', 'bookmark'],
      },
      {
        id: 'claude-update',
        title: 'claude update',
        oneLiner: {
          en: 'Update Claude Code to the latest version',
          ro: 'Actualizeaza Claude Code la ultima versiune',
        },
        explanation: {
          en: 'Downloads and installs the latest Claude Code release. Run this periodically to get new features, bug fixes, and model improvements. The update happens in-place and preserves your settings.',
          ro: 'Descarca si instaleaza ultima versiune Claude Code. Ruleaza periodic pentru functionalitati noi, corectii si imbunatatiri de model. Actualizarea se face in-place si pastreaza setarile.',
        },
        example: {
          en: '$ claude update',
          ro: '$ claude update',
        },
        category: 'core-commands',
        level: 'beginner',
        tags: ['update', 'upgrade', 'version', 'install'],
      },
    ],
  },
  {
    id: 'key-flags',
    name: { en: 'Key Flags', ro: 'Flag-uri importante' },
    icon: 'Flag',
    items: [
      {
        id: 'flag-model',
        title: '--model',
        oneLiner: {
          en: 'Set the AI model for this session',
          ro: 'Seteaza modelul AI pentru aceasta sesiune',
        },
        explanation: {
          en: 'Override the default model for a single session. Useful for testing different models or switching to a cheaper model for simple tasks. Works with any model available through your API key.',
          ro: 'Suprascrie modelul implicit pentru o singura sesiune. Util pentru testarea diferitelor modele sau trecerea la un model mai ieftin pentru task-uri simple. Functioneaza cu orice model disponibil prin cheia API.',
        },
        example: {
          en: '$ claude --model claude-sonnet-4-20250514',
          ro: '$ claude --model claude-sonnet-4-20250514',
        },
        category: 'key-flags',
        level: 'advanced',
        tags: ['model', 'sonnet', 'opus', 'haiku', 'switch'],
      },
      {
        id: 'flag-worktree',
        title: '-w / --worktree',
        shortcut: '-w',
        oneLiner: {
          en: 'Use a git worktree for isolated changes',
          ro: 'Foloseste un git worktree pentru modificari izolate',
        },
        explanation: {
          en: 'Creates a git worktree so Claude works in a separate branch without touching your current files. Perfect for parallel tasks: let Claude refactor in a worktree while you keep coding on main. Changes are merged when ready.',
          ro: 'Creeaza un git worktree ca Claude sa lucreze pe un branch separat fara a atinge fisierele curente. Perfect pentru task-uri paralele: lasa Claude sa refactorizeze in worktree in timp ce tu continui pe main. Schimbarile se merge-uiesc cand sunt gata.',
        },
        example: {
          en: '$ claude -w "refactor the database layer"',
          ro: '$ claude -w "refactorizeaza layer-ul de baza de date"',
        },
        category: 'key-flags',
        level: 'advanced',
        tags: ['worktree', 'git', 'branch', 'isolation', 'parallel'],
      },
      {
        id: 'flag-name',
        title: '-n / --name',
        shortcut: '-n',
        oneLiner: {
          en: 'Name the session for later retrieval',
          ro: 'Numeste sesiunea pentru acces ulterior',
        },
        explanation: {
          en: 'Assigns a human-readable name to your session. Named sessions can be resumed later with -r. Great for long-running projects where you want to maintain separate conversation threads.',
          ro: 'Atribuie un nume lizibil sesiunii tale. Sesiunile numite pot fi reluate cu -r. Excelent pentru proiecte de durata unde vrei fire de conversatie separate.',
        },
        example: {
          en: '$ claude -n "auth-refactor" "let\'s improve the auth flow"',
          ro: '$ claude -n "auth-refactor" "sa imbunatatim flow-ul de auth"',
        },
        category: 'key-flags',
        level: 'advanced',
        tags: ['name', 'session', 'bookmark', 'resume'],
      },
      {
        id: 'flag-add-dir',
        title: '--add-dir',
        oneLiner: {
          en: 'Add an additional directory to the session context',
          ro: 'Adauga un director suplimentar in contextul sesiunii',
        },
        explanation: {
          en: 'Gives Claude access to files in another directory alongside the current working directory. Essential for monorepos or when you need Claude to understand code across multiple packages simultaneously.',
          ro: 'Ofera lui Claude acces la fisiere dintr-un alt director pe langa directorul curent de lucru. Esential pentru monorepo-uri sau cand ai nevoie ca Claude sa inteleaga cod din mai multe pachete simultan.',
        },
        example: {
          en: '$ claude --add-dir ../shared-lib "use types from shared-lib"',
          ro: '$ claude --add-dir ../shared-lib "foloseste tipurile din shared-lib"',
        },
        category: 'key-flags',
        level: 'advanced',
        tags: ['directory', 'context', 'monorepo', 'multi-project'],
      },
      {
        id: 'flag-agent',
        title: '--agent',
        oneLiner: {
          en: 'Use a specific custom agent',
          ro: 'Foloseste un agent personalizat specific',
        },
        explanation: {
          en: 'Loads a custom agent definition from your .claude/agents/ directory. Agents are specialized system prompts that tune Claude for specific workflows like debugging, code review, or documentation.',
          ro: 'Incarca o definitie de agent personalizat din directorul .claude/agents/. Agentii sunt system prompt-uri specializate care configureaza Claude pentru workflow-uri specifice precum debugging, code review sau documentatie.',
        },
        example: {
          en: '$ claude --agent debugger "investigate the memory leak"',
          ro: '$ claude --agent debugger "investigheaza memory leak-ul"',
        },
        category: 'key-flags',
        level: 'advanced',
        tags: ['agent', 'custom', 'persona', 'workflow', 'specialized'],
      },
      {
        id: 'flag-allowed-tools',
        title: '--allowedTools',
        oneLiner: {
          en: 'Pre-approve specific tools to skip permission prompts',
          ro: 'Pre-aproba unelte specifice pentru a sari peste prompt-uri de permisiune',
        },
        explanation: {
          en: 'Whitelists specific tools so Claude can use them without asking. Speeds up automated workflows where you trust certain operations. Accepts tool names like Edit, Write, Bash, or MCP tool names.',
          ro: 'Pune pe lista alba unelte specifice ca Claude sa le foloseasca fara a intreba. Accelereaza workflow-urile automate unde ai incredere in anumite operatii. Accepta nume de unelte precum Edit, Write, Bash sau nume de unelte MCP.',
        },
        example: {
          en: '$ claude --allowedTools "Edit,Write" -p "fix the typos"',
          ro: '$ claude --allowedTools "Edit,Write" -p "corecteaza greselile de tipar"',
        },
        category: 'key-flags',
        level: 'advanced',
        tags: ['tools', 'permissions', 'whitelist', 'approve', 'automation'],
      },
      {
        id: 'flag-output-format',
        title: '--output-format json/stream',
        oneLiner: {
          en: 'Control output formatting for programmatic use',
          ro: 'Controleaza formatul output-ului pentru uz programatic',
        },
        explanation: {
          en: 'Sets the output format in headless mode. "json" returns a single JSON object when complete; "stream" emits newline-delimited JSON events in real-time. Use "stream" for live progress and "json" for parsing final results.',
          ro: 'Seteaza formatul output-ului in modul headless. "json" returneaza un singur obiect JSON la final; "stream" emite evenimente JSON delimitate de newline in timp real. Foloseste "stream" pentru progres live si "json" pentru parsarea rezultatelor finale.',
        },
        example: {
          en: '$ claude -p "list all TODOs" --output-format json | jq .result',
          ro: '$ claude -p "listeaza toate TODO-urile" --output-format json | jq .result',
        },
        category: 'key-flags',
        level: 'advanced',
        tags: ['output', 'json', 'stream', 'format', 'programmatic', 'api'],
      },
      {
        id: 'flag-json-schema',
        title: '--json-schema',
        oneLiner: {
          en: 'Get structured output matching a JSON schema',
          ro: 'Obtine output structurat conform unei scheme JSON',
        },
        explanation: {
          en: 'Forces Claude to return output matching the provided JSON schema. Ideal for extracting structured data from codebases or generating typed configuration files. Requires --output-format json.',
          ro: 'Forteaza Claude sa returneze output conform schemei JSON furnizate. Ideal pentru extragerea datelor structurate din codebase-uri sau generarea fisierelor de configurare tipizate. Necesita --output-format json.',
        },
        example: {
          en: '$ claude -p "list all API endpoints" --output-format json --json-schema \'{"type":"object","properties":{"endpoints":{"type":"array"}}}\'',
          ro: '$ claude -p "listeaza toate endpoint-urile API" --output-format json --json-schema \'{"type":"object","properties":{"endpoints":{"type":"array"}}}\'',
        },
        category: 'key-flags',
        level: 'advanced',
        tags: ['json', 'schema', 'structured', 'typed', 'extraction'],
      },
      {
        id: 'flag-max-turns',
        title: '--max-turns',
        oneLiner: {
          en: 'Limit the number of agentic turns',
          ro: 'Limiteaza numarul de ture agentice',
        },
        explanation: {
          en: 'Caps how many tool-use cycles Claude can perform. Prevents runaway loops in automated pipelines. Each "turn" is one round of Claude thinking and using a tool. Set lower for simple tasks, higher for complex refactors.',
          ro: 'Limiteaza cate cicluri de folosire a uneltelor poate efectua Claude. Previne buclele necontrolate in pipeline-uri automate. Fiecare "tura" este o runda de gandire si folosire a unei unelte. Seteaza mai mic pentru task-uri simple, mai mare pentru refactorizari complexe.',
        },
        example: {
          en: '$ claude -p "fix the linting errors" --max-turns 10',
          ro: '$ claude -p "repara erorile de linting" --max-turns 10',
        },
        category: 'key-flags',
        level: 'advanced',
        tags: ['turns', 'limit', 'loop', 'safety', 'automation'],
      },
      {
        id: 'flag-max-budget',
        title: '--max-budget-usd',
        oneLiner: {
          en: 'Set a cost cap for the session',
          ro: 'Seteaza un plafon de cost pentru sesiune',
        },
        explanation: {
          en: 'Sets a maximum dollar amount Claude can spend on API calls during the session. Claude stops gracefully when the budget is reached. Essential for CI/CD to prevent unexpected costs on complex tasks.',
          ro: 'Seteaza o suma maxima in dolari pe care Claude o poate cheltui pe apeluri API in sesiune. Claude se opreste elegant cand bugetul este atins. Esential pentru CI/CD pentru a preveni costuri neasteptate pe task-uri complexe.',
        },
        example: {
          en: '$ claude -p "refactor the entire codebase" --max-budget-usd 5.00',
          ro: '$ claude -p "refactorizeaza intregul codebase" --max-budget-usd 5.00',
        },
        category: 'key-flags',
        level: 'advanced',
        tags: ['budget', 'cost', 'limit', 'money', 'spending', 'ci'],
      },
      {
        id: 'flag-verbose',
        title: '--verbose',
        oneLiner: {
          en: 'Enable verbose output with extra details',
          ro: 'Activeaza output detaliat cu informatii suplimentare',
        },
        explanation: {
          en: 'Shows additional diagnostic information during execution, including tool calls, timing data, and internal reasoning steps. Useful for debugging why Claude made certain decisions or when reporting bugs.',
          ro: 'Afiseaza informatii diagnostice suplimentare in timpul executiei, inclusiv apeluri de unelte, date de timing si pasi de rationare interni. Util pentru depanarea deciziilor lui Claude sau la raportarea bug-urilor.',
        },
        category: 'key-flags',
        level: 'advanced',
        tags: ['verbose', 'debug', 'diagnostic', 'logging'],
      },
      {
        id: 'flag-bare',
        title: '--bare',
        oneLiner: {
          en: 'Minimal headless mode without hooks or LSP',
          ro: 'Mod headless minimal fara hook-uri sau LSP',
        },
        explanation: {
          en: 'Runs in a stripped-down headless mode that skips loading hooks, LSP servers, and other overhead. Fastest option for simple one-shot queries in scripts where you just need text output without any project integration.',
          ro: 'Ruleaza in modul headless simplificat care sare peste incarcarea hook-urilor, serverelor LSP si alte overhead-uri. Optiunea cea mai rapida pentru query-uri simple in scripturi unde ai nevoie doar de text fara integrare de proiect.',
        },
        example: {
          en: '$ claude -p --bare "what does this regex do: ^[a-z]+$"',
          ro: '$ claude -p --bare "ce face acest regex: ^[a-z]+$"',
        },
        category: 'key-flags',
        level: 'advanced',
        tags: ['bare', 'minimal', 'fast', 'no-hooks', 'headless'],
      },
      {
        id: 'flag-remote',
        title: '--remote',
        oneLiner: {
          en: 'Run a web session on claude.ai',
          ro: 'Ruleaza o sesiune web pe claude.ai',
        },
        explanation: {
          en: 'Offloads the session to run on claude.ai servers instead of locally. Useful for long-running tasks when you want to close your laptop or when you need more compute. Results sync back when complete.',
          ro: 'Transfera sesiunea pentru a rula pe serverele claude.ai in loc de local. Util pentru task-uri de durata cand vrei sa inchizi laptopul sau cand ai nevoie de mai multa putere de calcul. Rezultatele se sincronizeaza la finalizare.',
        },
        category: 'key-flags',
        level: 'advanced',
        tags: ['remote', 'cloud', 'web', 'background', 'offload'],
      },
      {
        id: 'flag-effort',
        title: '--effort',
        oneLiner: {
          en: 'Set the effort level for responses',
          ro: 'Seteaza nivelul de efort pentru raspunsuri',
        },
        explanation: {
          en: 'Controls how much thinking Claude puts into responses. Lower effort is faster and cheaper for simple questions; higher effort yields more thorough analysis for complex tasks. Values: low, medium, high, max, auto.',
          ro: 'Controleaza cat de mult gandeste Claude la raspunsuri. Efort mai mic este mai rapid si ieftin pentru intrebari simple; efort mai mare ofera analize mai detaliate pentru task-uri complexe. Valori: low, medium, high, max, auto.',
        },
        example: {
          en: '$ claude --effort max "design the database schema for this app"',
          ro: '$ claude --effort max "proiecteaza schema bazei de date pentru aceasta aplicatie"',
        },
        category: 'key-flags',
        level: 'advanced',
        tags: ['effort', 'thinking', 'quality', 'speed', 'cost'],
      },
      {
        id: 'flag-permission-mode',
        title: '--permission-mode',
        oneLiner: {
          en: 'Set the permission mode for the session',
          ro: 'Seteaza modul de permisiuni pentru sesiune',
        },
        explanation: {
          en: 'Chooses how Claude handles tool permissions: default prompts for each, acceptEdits auto-approves edits, plan is read-only, dontAsk denies by default. Lets you balance safety and speed per session.',
          ro: 'Alege cum gestioneaza Claude permisiunile uneltelor: default intreaba pentru fiecare, acceptEdits auto-aproba editarile, plan este doar citire, dontAsk refuza implicit. Permite echilibrarea sigurantei si vitezei per sesiune.',
        },
        example: {
          en: '$ claude --permission-mode acceptEdits "fix all the typos"',
          ro: '$ claude --permission-mode acceptEdits "repara toate greselile de tipar"',
        },
        category: 'key-flags',
        level: 'advanced',
        tags: ['permission', 'mode', 'safety', 'approve', 'security'],
      },
      {
        id: 'flag-dangerously-skip-permissions',
        title: '--dangerously-skip-permissions',
        oneLiner: {
          en: 'Skip ALL permission prompts (dangerous!)',
          ro: 'Sare peste TOATE prompt-urile de permisiune (periculos!)',
        },
        explanation: {
          en: 'Bypasses every safety check and permission prompt. Claude can read, write, execute, and delete without asking. Only use in fully sandboxed environments like Docker containers in CI. Never use on your local machine with important data.',
          ro: 'Ocoleaza toate verificarile de siguranta si prompt-urile de permisiune. Claude poate citi, scrie, executa si sterge fara sa intrebe. Foloseste doar in medii complet sandboxed precum containere Docker in CI. Nu folosi niciodata pe masina locala cu date importante.',
        },
        example: {
          en: '$ claude -p --dangerously-skip-permissions "run the full test suite and fix failures"',
          ro: '$ claude -p --dangerously-skip-permissions "ruleaza toata suita de teste si repara esecurile"',
        },
        category: 'key-flags',
        level: 'advanced',
        tags: ['danger', 'permissions', 'bypass', 'sandbox', 'ci', 'docker'],
      },
      {
        id: 'flag-chrome',
        title: '--chrome',
        oneLiner: {
          en: 'Enable Chrome browser integration',
          ro: 'Activeaza integrarea cu browserul Chrome',
        },
        explanation: {
          en: 'Gives Claude access to a Chrome browser instance for web interactions. Claude can navigate pages, click elements, fill forms, and take screenshots. Useful for testing web apps or scraping data during development.',
          ro: 'Ofera lui Claude acces la o instanta de browser Chrome pentru interactiuni web. Claude poate naviga pagini, clickui elemente, completa formulare si face capturi de ecran. Util pentru testarea aplicatiilor web sau scraping de date in dezvoltare.',
        },
        example: {
          en: '$ claude --chrome "test the login flow on localhost:3000"',
          ro: '$ claude --chrome "testeaza flow-ul de login pe localhost:3000"',
        },
        category: 'key-flags',
        level: 'advanced',
        tags: ['chrome', 'browser', 'web', 'testing', 'screenshot', 'scraping'],
      },
    ],
  },
  {
    id: 'permission-modes',
    name: { en: 'Permission Modes', ro: 'Moduri de permisiuni' },
    icon: 'Shield',
    items: [
      {
        id: 'mode-default',
        title: 'default',
        oneLiner: {
          en: 'Prompts for each action individually',
          ro: 'Cere confirmare pentru fiecare actiune individual',
        },
        explanation: {
          en: 'The standard permission mode. Claude asks for your approval before every file edit, shell command, or tool use. Safest option that gives you full control over every change. Recommended for learning and sensitive codebases.',
          ro: 'Modul standard de permisiuni. Claude cere aprobarea ta inainte de fiecare editare de fisier, comanda shell sau folosire de unealta. Cea mai sigura optiune care iti da control total asupra fiecarei modificari. Recomandat pentru invatare si codebase-uri sensibile.',
        },
        category: 'permission-modes',
        level: 'beginner',
        tags: ['permission', 'default', 'safe', 'prompt', 'approve'],
      },
      {
        id: 'mode-accept-edits',
        title: 'acceptEdits',
        oneLiner: {
          en: 'Auto-accept all file edits without prompting',
          ro: 'Auto-accepta toate editarile de fisiere fara confirmare',
        },
        explanation: {
          en: 'Claude can read and write files freely but still asks before running shell commands. Good middle ground when you trust Claude with code changes but want oversight on system-level operations. Most popular mode for daily development.',
          ro: 'Claude poate citi si scrie fisiere liber dar inca intreaba inainte de comenzi shell. Echilibru bun cand ai incredere in Claude cu schimbarile de cod dar vrei supraveghere pe operatiile la nivel de sistem. Cel mai popular mod pentru dezvoltarea zilnica.',
        },
        category: 'permission-modes',
        level: 'beginner',
        tags: ['permission', 'accept', 'edits', 'auto', 'trust'],
      },
      {
        id: 'mode-plan',
        title: 'plan',
        oneLiner: {
          en: 'Read-only exploration mode, no changes allowed',
          ro: 'Mod doar-citire de explorare, fara modificari permise',
        },
        explanation: {
          en: 'Claude can only read files and think -- no edits, no commands, no tool use that modifies anything. Perfect for codebase exploration, architecture review, or when you want Claude to analyze and suggest without touching anything.',
          ro: 'Claude poate doar sa citeasca fisiere si sa gandeasca -- fara editari, fara comenzi, fara unelte care modifica ceva. Perfect pentru explorarea codebase-ului, revizuirea arhitecturii sau cand vrei ca Claude sa analizeze si sugereze fara sa atinga nimic.',
        },
        category: 'permission-modes',
        level: 'beginner',
        tags: ['permission', 'plan', 'readonly', 'explore', 'safe', 'review'],
      },
      {
        id: 'mode-dont-ask',
        title: 'dontAsk',
        oneLiner: {
          en: 'Deny all actions unless explicitly allowed',
          ro: 'Refuza toate actiunile cu exceptia celor permise explicit',
        },
        explanation: {
          en: 'Inverts the default: everything is denied unless you pre-approve it via allowedTools or settings. Most restrictive interactive mode. Use when you want Claude to only use a very specific set of tools you have whitelisted.',
          ro: 'Inverseaza comportamentul implicit: totul este refuzat daca nu pre-aprobezi prin allowedTools sau setari. Cel mai restrictiv mod interactiv. Foloseste cand vrei ca Claude sa utilizeze doar un set foarte specific de unelte pe care le-ai trecut pe lista alba.',
        },
        category: 'permission-modes',
        level: 'advanced',
        tags: ['permission', 'deny', 'restrict', 'whitelist', 'strict'],
      },
      {
        id: 'mode-bypass',
        title: 'bypassPermissions',
        oneLiner: {
          en: 'Skip all checks (requires --dangerously-skip-permissions)',
          ro: 'Sare peste toate verificarile (necesita --dangerously-skip-permissions)',
        },
        explanation: {
          en: 'The nuclear option: no prompts, no restrictions, no safety nets. Requires the --dangerously-skip-permissions flag. Reserved for fully isolated CI/CD environments where Claude operates inside disposable containers with no access to sensitive data.',
          ro: 'Optiunea nucleara: fara prompt-uri, fara restrictii, fara plase de siguranta. Necesita flag-ul --dangerously-skip-permissions. Rezervat pentru medii CI/CD complet izolate unde Claude opereaza in containere de unica folosinta fara acces la date sensibile.',
        },
        category: 'permission-modes',
        level: 'advanced',
        tags: ['permission', 'bypass', 'danger', 'ci', 'container', 'unrestricted'],
      },
    ],
  },
];
