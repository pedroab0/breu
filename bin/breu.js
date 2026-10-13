#!/usr/bin/env node

/**
 * Breu Theme Installer CLI
 * https://github.com/pedroab0/breu
 */

const fs = require('fs');
const path = require('path');
const os = require('os');
const { spawnSync } = require('child_process');
const readline = require('readline');

// Breu Palette ANSI codes
const C_RESET = '\x1b[0m';
const C_BOLD = '\x1b[1m';
const C_DIM = '\x1b[2m';
const C_CYAN = '\x1b[38;2;139;233;253m';
const C_GREEN = '\x1b[38;2;80;250;123m';
const C_PINK = '\x1b[38;2;255;121;198m';
const C_PURPLE = '\x1b[38;2;189;147;249m';
const C_YELLOW = '\x1b[38;2;241;250;140m';
const C_GRAY = '\x1b[38;2;157;165;180m';

const HOME = os.homedir();
const THEMES_DIR = path.join(__dirname, '..', 'themes');

// Command-line arguments
const args = process.argv.slice(2);
const isAll = args.includes('--all') || args.includes('-y') || args.includes('--yes');
const isHelp = args.includes('--help') || args.includes('-h');
const isDryRun = args.includes('--dry-run');
const toolArg = args.find(a => a.startsWith('--tool=') || a.startsWith('--tools='));
const specifiedTools = toolArg ? toolArg.split('=')[1].split(',').map(s => s.trim().toLowerCase()) : null;

if (isHelp) {
  console.log(`
${C_BOLD}${C_CYAN}Breu Theme Installer${C_RESET}
${C_DIM}A dark theme with pure black background (#000000)${C_RESET}

${C_BOLD}Usage:${C_RESET}
  npx breu                 ${C_GRAY}Interactive menu to choose tools${C_RESET}
  npx breu --all           ${C_GRAY}Install to all detected tools without prompting${C_RESET}
  npx breu --tools=warp,zsh ${C_GRAY}Install to specific tools${C_RESET}
  npx breu --dry-run       ${C_GRAY}Simulate installation without writing files${C_RESET}
  npx breu --help          ${C_GRAY}Show this help message${C_RESET}

${C_BOLD}Available Tools:${C_RESET}
  vscode, warp, zsh, gemini, opencode
`);
  process.exit(0);
}

// Check command availability
function commandExists(cmd) {
  const result = spawnSync('which', [cmd], { stdio: 'ignore' });
  return result.status === 0;
}

// Define tool definitions and detection
const TOOLS = [
  {
    id: 'vscode',
    name: 'VS Code / VSCodium',
    detect: () => {
      if (commandExists('code')) return 'code CLI detected';
      if (commandExists('codium')) return 'codium CLI detected';
      return null;
    },
    install: (dryRun) => {
      if (dryRun) return `${C_GRAY}[dry-run] Would run 'code --install-extension pedroab0.breu'${C_RESET}`;
      if (commandExists('code')) {
        console.log(`  ${C_CYAN}→${C_RESET} Installing VS Code marketplace extension...`);
        const res = spawnSync('code', ['--install-extension', 'pedroab0.breu'], { stdio: 'inherit' });
        if (res.status === 0) {
          return `${C_GREEN}✓${C_RESET} VS Code extension installed from Marketplace.`;
        }
      }
      return `${C_YELLOW}!${C_RESET} Could not run 'code --install-extension'. Install 'pedroab0.breu' via VS Code Extensions tab.`;
    },
    activationTip: 'Select "Breu" in Preferences > Color Theme (Cmd+K Cmd+T).',
  },
  {
    id: 'warp',
    name: 'Warp Terminal',
    detect: () => {
      const warpDir = path.join(HOME, '.warp');
      return fs.existsSync(warpDir) ? '~/.warp detected' : null;
    },
    install: (dryRun) => {
      const src = path.join(THEMES_DIR, 'breu-warp.yaml');
      const destDir = path.join(HOME, '.warp', 'themes');
      const dest = path.join(destDir, 'breu.yaml');
      if (dryRun) return `${C_GRAY}[dry-run] Would copy ${src} → ${dest}${C_RESET}`;
      fs.mkdirSync(destDir, { recursive: true });
      fs.copyFileSync(src, dest);
      return `${C_GREEN}✓${C_RESET} Copied Warp theme to ${C_CYAN}~/.warp/themes/breu.yaml${C_RESET}`;
    },
    activationTip: 'Open Warp > Settings > Appearance > Current Theme, then select "Breu".',
  },
  {
    id: 'zsh',
    name: 'Zsh (Prompt & Syntax Highlighting)',
    detect: () => {
      const omz = path.join(HOME, '.oh-my-zsh');
      if (fs.existsSync(omz)) return 'Oh My Zsh detected';
      if (fs.existsSync(path.join(HOME, '.zshrc'))) return '~/.zshrc detected';
      if ((process.env.SHELL || '').includes('zsh')) return 'Zsh shell detected';
      return null;
    },
    install: (dryRun) => {
      const omzThemes = path.join(HOME, '.oh-my-zsh', 'custom', 'themes');
      const srcPrompt = path.join(THEMES_DIR, 'breu.zsh-theme');
      const srcSyntax = path.join(THEMES_DIR, 'breu-zsh-syntax.zsh');

      let promptDestDesc = '';
      let promptDest = '';
      if (fs.existsSync(path.join(HOME, '.oh-my-zsh'))) {
        promptDest = path.join(omzThemes, 'breu.zsh-theme');
        promptDestDesc = '~/.oh-my-zsh/custom/themes/breu.zsh-theme';
      } else {
        promptDest = path.join(HOME, '.breu.zsh-theme');
        promptDestDesc = '~/.breu.zsh-theme';
      }
      const syntaxDest = path.join(HOME, '.breu-zsh-syntax.zsh');

      if (dryRun) {
        return `${C_GRAY}[dry-run] Would copy prompt → ${promptDestDesc}\n    [dry-run] Would copy syntax → ~/.breu-zsh-syntax.zsh${C_RESET}`;
      }

      if (fs.existsSync(path.join(HOME, '.oh-my-zsh'))) {
        fs.mkdirSync(omzThemes, { recursive: true });
      }
      fs.copyFileSync(srcPrompt, promptDest);
      fs.copyFileSync(srcSyntax, syntaxDest);

      return `${C_GREEN}✓${C_RESET} Copied prompt to ${C_CYAN}${promptDestDesc}${C_RESET}\n    ${C_GREEN}✓${C_RESET} Copied syntax highlighting to ${C_CYAN}~/.breu-zsh-syntax.zsh${C_RESET}`;
    },
    activationTip: 'In ~/.zshrc set ZSH_THEME="breu" (or source ~/.breu.zsh-theme), and add "source ~/.breu-zsh-syntax.zsh".',
  },
  {
    id: 'gemini',
    name: 'Gemini CLI',
    detect: () => {
      const geminiDir = path.join(HOME, '.gemini');
      return fs.existsSync(geminiDir) ? '~/.gemini detected' : null;
    },
    install: (dryRun) => {
      const src = path.join(THEMES_DIR, 'breu-gemini.json');
      const destDir = path.join(HOME, '.gemini');
      const dest = path.join(destDir, 'breu-gemini.json');
      if (dryRun) return `${C_GRAY}[dry-run] Would copy ${src} → ${dest}${C_RESET}`;
      fs.mkdirSync(destDir, { recursive: true });
      fs.copyFileSync(src, dest);
      return `${C_GREEN}✓${C_RESET} Copied Gemini CLI theme to ${C_CYAN}~/.gemini/breu-gemini.json${C_RESET}`;
    },
    activationTip: 'Set "theme": "/Users/<you>/.gemini/breu-gemini.json" in ~/.gemini/settings.json or use /theme.',
  },
  {
    id: 'opencode',
    name: 'OpenCode',
    detect: () => {
      const ocDir = path.join(HOME, '.config', 'opencode');
      if (fs.existsSync(ocDir)) return '~/.config/opencode detected';
      if (commandExists('opencode')) return 'opencode CLI detected';
      return null;
    },
    install: (dryRun) => {
      const src = path.join(THEMES_DIR, 'breu-opencode.json');
      const destDir = path.join(HOME, '.config', 'opencode', 'themes');
      const dest = path.join(destDir, 'breu.json');
      if (dryRun) return `${C_GRAY}[dry-run] Would copy ${src} → ${dest}${C_RESET}`;
      fs.mkdirSync(destDir, { recursive: true });
      fs.copyFileSync(src, dest);
      return `${C_GREEN}✓${C_RESET} Copied OpenCode theme to ${C_CYAN}~/.config/opencode/themes/breu.json${C_RESET}`;
    },
    activationTip: 'Run /theme inside OpenCode and select "breu", or set "theme": "breu" in config.',
  },
];

// Initialize tool options with detection
const items = TOOLS.map(tool => {
  const detectedReason = tool.detect();
  let checked = Boolean(detectedReason);

  if (specifiedTools) {
    checked = specifiedTools.includes(tool.id);
  } else if (isAll) {
    checked = Boolean(detectedReason);
  }

  return {
    ...tool,
    detectedReason,
    checked,
  };
});

function printBanner() {
  console.log(`
${C_BOLD}${C_CYAN}  ██████╗ ██████╗ ███████╗██╗   ██╗${C_RESET}
${C_BOLD}${C_CYAN}  ██╔══██╗██╔══██╗██╔════╝██║   ██║${C_RESET}
${C_BOLD}${C_CYAN}  ██████╔╝██████╔╝█████╗  ██║   ██║${C_RESET}
${C_BOLD}${C_CYAN}  ██╔══██╗██╔══██╗██╔══╝  ██║   ██║${C_RESET}
${C_BOLD}${C_CYAN}  ██████╔╝██║  ██║███████╗╚██████╔╝${C_RESET}
${C_BOLD}${C_CYAN}  ╚═════╝ ╚═╝  ╚═╝╚══════╝ ╚═════╝ ${C_RESET}
  ${C_DIM}A dark theme with pure black background (#000000)${C_RESET}
`);
}

async function promptSelection(items) {
  return new Promise((resolve) => {
    let cursor = 0;
    let linesRendered = 0;

    const render = () => {
      // Clear previous lines
      if (linesRendered > 0) {
        process.stdout.write(`\x1b[${linesRendered}A\x1b[0J`);
      }

      const out = [];
      out.push(`${C_BOLD}? Which tools would you like to install Breu for?${C_RESET}`);
      out.push(`${C_DIM}  (Use ↑/↓ to navigate, Space to toggle, 'a' to toggle all, Enter to confirm)${C_RESET}\n`);

      items.forEach((item, idx) => {
        const isCurrent = idx === cursor;
        const pointer = isCurrent ? `${C_PINK}❯${C_RESET}` : ' ';
        const checkbox = item.checked
          ? `${C_GREEN}[✔]${C_RESET}`
          : `${C_GRAY}[ ]${C_RESET}`;
        const name = isCurrent
          ? `${C_BOLD}${C_CYAN}${item.name}${C_RESET}`
          : item.name;
        const detected = item.detectedReason
          ? ` ${C_DIM}(${item.detectedReason})${C_RESET}`
          : ` ${C_GRAY}(not detected)${C_RESET}`;

        out.push(`${pointer} ${checkbox} ${name}${detected}`);
      });

      out.push(''); // blank trailing line
      const text = out.join('\n');
      process.stdout.write(text);
      linesRendered = out.length;
    };

    readline.emitKeypressEvents(process.stdin);
    if (process.stdin.isTTY) {
      process.stdin.setRawMode(true);
    }
    process.stdin.resume();

    render();

    const onKeypress = (str, key) => {
      if (!key) return;

      if (key.ctrl && key.name === 'c') {
        process.stdin.setRawMode(false);
        process.stdin.pause();
        process.stdout.write('\n');
        process.exit(130);
      }

      if (key.name === 'up') {
        cursor = (cursor - 1 + items.length) % items.length;
        render();
      } else if (key.name === 'down') {
        cursor = (cursor + 1) % items.length;
        render();
      } else if (key.name === 'space') {
        items[cursor].checked = !items[cursor].checked;
        render();
      } else if (str === 'a' || str === 'A') {
        const allChecked = items.every(i => i.checked);
        items.forEach(i => (i.checked = !allChecked));
        render();
      } else if (key.name === 'return' || key.name === 'enter') {
        if (process.stdin.isTTY) {
          process.stdin.setRawMode(false);
        }
        process.stdin.pause();
        process.stdin.removeListener('keypress', onKeypress);
        process.stdout.write('\n');
        resolve(items.filter(i => i.checked));
      }
    };

    process.stdin.on('keypress', onKeypress);
  });
}

async function run() {
  printBanner();

  let selected = [];

  if (specifiedTools || isAll || !process.stdin.isTTY) {
    selected = items.filter(i => i.checked);
    if (selected.length === 0) {
      console.log(`${C_YELLOW}! No tools selected or detected.${C_RESET}`);
      console.log(`Run ${C_BOLD}npx breu --help${C_RESET} or run without flags to select interactively.\n`);
      process.exit(0);
    }
  } else {
    selected = await promptSelection(items);
  }

  if (selected.length === 0) {
    console.log(`${C_YELLOW}No tools selected. Nothing installed.${C_RESET}\n`);
    process.exit(0);
  }

  console.log(`\n${C_BOLD}📦 Installing Breu theme for ${selected.length} tool(s):${C_RESET}\n`);

  const activationNotes = [];

  for (const item of selected) {
    console.log(`${C_BOLD}${C_PURPLE}▶ ${item.name}${C_RESET}`);
    try {
      const msg = item.install(isDryRun);
      console.log(`  ${msg}`);
      if (item.activationTip) {
        activationNotes.push({ name: item.name, tip: item.activationTip });
      }
    } catch (err) {
      console.error(`  ${C_PINK}✗ Failed to install for ${item.name}:${C_RESET} ${err.message}`);
    }
    console.log('');
  }

  console.log(`${C_BOLD}${C_GREEN}✨ Installation complete!${C_RESET}\n`);

  if (activationNotes.length > 0) {
    console.log(`${C_BOLD}Next steps to activate:${C_RESET}`);
    activationNotes.forEach(({ name, tip }) => {
      console.log(`  ${C_CYAN}•${C_RESET} ${C_BOLD}${name}:${C_RESET} ${C_GRAY}${tip}${C_RESET}`);
    });
    console.log('');
  }
}

run().catch((err) => {
  console.error('Installation error:', err);
  process.exit(1);
});
