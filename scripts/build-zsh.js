const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const SRC_FILE = path.join(__dirname, '..', 'src', 'breu.yml');
const THEME_DIR = path.join(__dirname, '..', 'themes');
const OUTPUT_FILE = path.join(THEME_DIR, 'breu.zsh-theme');

async function build() {
  console.log('Building Breu Zsh theme...');

  // Read YAML source
  const yamlContent = await fs.promises.readFile(SRC_FILE, 'utf-8');

  // Parse YAML (anchors/aliases resolved automatically)
  const theme = yaml.load(yamlContent);

  // Ensure output directory exists
  if (!fs.existsSync(THEME_DIR)) {
    fs.mkdirSync(THEME_DIR, { recursive: true });
  }

  // Named palette from breu.base
  const [BG, FG, SELECTION, COMMENT, CYAN, GREEN, ORANGE, PINK, PURPLE, RED, YELLOW, BLUE] = theme.breu.base;

  // Build Zsh theme
  const zshTheme = `# Breu — A dark theme with pure black background
# Author: Pedro Barbosa
# https://github.com/pedroab0/breu

# Colors
BREU_BLUE="%F{${BLUE}}"
BREU_PINK="%F{${PINK}}"
BREU_GREEN="%F{${GREEN}}"
BREU_RED="%F{${RED}}"
BREU_CYAN="%F{${CYAN}}"
BREU_PURPLE="%F{${PURPLE}}"
BREU_YELLOW="%F{${YELLOW}}"
BREU_COMMENT="%F{${COMMENT}}"
RESET_COLOR="%f"

# Git integration
autoload -Uz vcs_info
precmd_vcs_info() { vcs_info }
precmd_functions+=( precmd_vcs_info )
zstyle ':vcs_info:git:*' formats " %{$BREU_PINK%}(%b%u%c)%{$RESET_COLOR%}"
zstyle ':vcs_info:git:*' actionformats " %{$BREU_PINK%}(%b|%a%u%c)%{$RESET_COLOR%}"

# Prompt
setopt PROMPT_SUBST
PROMPT='%{$BREU_CYAN%}%~%{$RESET_COLOR%}\${vcs_info_msg_0_} %(?.%{$BREU_GREEN%}.%{$BREU_RED%})➜ %{$RESET_COLOR%}'
`;

  await fs.promises.writeFile(OUTPUT_FILE, zshTheme);

  console.log(`✓ Built: ${OUTPUT_FILE}`);
}

build().catch(err => {
  console.error('Zsh build failed:', err);
  process.exit(1);
});
