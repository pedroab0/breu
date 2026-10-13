const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const SRC_FILE = path.join(__dirname, '..', 'src', 'breu.yml');
const THEME_DIR = path.join(__dirname, '..', 'themes');
const OUTPUT_FILE = path.join(THEME_DIR, 'breu-zsh-syntax.zsh');

async function build() {
  console.log('Building Breu Zsh syntax highlighting configuration...');

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

  // Build Zsh syntax highlighting configuration
  const zshSyntaxHighlighting = `# Breu Zsh Syntax Highlighting Configuration
# Matches the Breu color palette for zsh-syntax-highlighting

ZSH_HIGHLIGHT_STYLES[alias]='fg=${BLUE},bold'
ZSH_HIGHLIGHT_STYLES[builtin]='fg=${CYAN}'
ZSH_HIGHLIGHT_STYLES[command]='fg=${GREEN}'
ZSH_HIGHLIGHT_STYLES[commandseparator]='fg=${PINK}'
ZSH_HIGHLIGHT_STYLES[comment]='fg=${COMMENT}'
ZSH_HIGHLIGHT_STYLES[function]='fg=${GREEN}'
ZSH_HIGHLIGHT_STYLES[globbing]='fg=${PURPLE}'
ZSH_HIGHLIGHT_STYLES[history-expansion]='fg=${PURPLE}'
ZSH_HIGHLIGHT_STYLES[keyword]='fg=${CYAN}'
ZSH_HIGHLIGHT_STYLES[path]='fg=${CYAN},underline'
ZSH_HIGHLIGHT_STYLES[precommand]='fg=${CYAN},italic'
ZSH_HIGHLIGHT_STYLES[single-hyphen-option]='fg=${ORANGE}'
ZSH_HIGHLIGHT_STYLES[double-hyphen-option]='fg=${ORANGE}'
ZSH_HIGHLIGHT_STYLES[string]='fg=${YELLOW}'
`;

  await fs.promises.writeFile(OUTPUT_FILE, zshSyntaxHighlighting);

  console.log(`✓ Built: ${OUTPUT_FILE}`);
}

build().catch(err => {
  console.error('Zsh syntax build failed:', err);
  process.exit(1);
});
