const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const SRC_FILE = path.join(__dirname, '..', 'src', 'breu.yml');
const THEME_DIR = path.join(__dirname, '..', 'themes');
const OUTPUT_FILE = path.join(THEME_DIR, 'breu-warp.yaml');

async function build() {
  console.log('Building Breu Warp theme...');

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

  // Named ANSI colors from breu.ansi
  const [
    ANSI_BLACK, ANSI_RED, ANSI_GREEN, ANSI_YELLOW, ANSI_BLUE, ANSI_MAGENTA, ANSI_CYAN, ANSI_WHITE,
    ANSI_BRIGHT_BLACK, ANSI_BRIGHT_RED, ANSI_BRIGHT_GREEN, ANSI_BRIGHT_YELLOW, ANSI_BRIGHT_BLUE, ANSI_BRIGHT_MAGENTA, ANSI_BRIGHT_CYAN, ANSI_BRIGHT_WHITE,
  ] = theme.breu.ansi;

  // Build Warp terminal theme
  const warpTheme = {
    accent: BLUE,
    cursor: CYAN,
    background: BG,
    details: "darker",
    foreground: FG,
    terminal_colors: {
      normal: {
        black: ANSI_BLACK,
        red: ANSI_RED,
        green: ANSI_GREEN,
        yellow: ANSI_YELLOW,
        blue: BLUE,
        magenta: ANSI_MAGENTA,
        cyan: ANSI_CYAN,
        white: ANSI_WHITE,
      },
      bright: {
        black: ANSI_BRIGHT_BLACK,
        red: ANSI_BRIGHT_RED,
        green: ANSI_BRIGHT_GREEN,
        yellow: ANSI_BRIGHT_YELLOW,
        blue: ANSI_BRIGHT_BLUE,
        magenta: ANSI_BRIGHT_MAGENTA,
        cyan: ANSI_BRIGHT_CYAN,
        white: ANSI_BRIGHT_WHITE,
      },
    },
  };

  const warpYaml =
    '# Breu — A dark theme with pure black background\n' +
    '# https://github.com/pedroab0/breu\n' +
    yaml.dump(warpTheme, { quotingType: '"', forceQuotes: true, lineWidth: -1 });

  await fs.promises.writeFile(OUTPUT_FILE, warpYaml);

  console.log(`✓ Built: ${OUTPUT_FILE}`);
}

build().catch(err => {
  console.error('Warp build failed:', err);
  process.exit(1);
});
