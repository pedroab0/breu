const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const SRC_FILE = path.join(__dirname, '..', 'src', 'breu.yml');
const THEME_DIR = path.join(__dirname, '..', 'themes');
const OUTPUT_FILE = path.join(THEME_DIR, 'breu-gemini.json');

async function build() {
  console.log('Building Breu Gemini CLI theme...');

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

  // Named UI colors from breu.ui
  const [
    UI_BORDER, UI_BG_BADGE, UI_BG_BUTTON, UI_BG_INPUT,
    UI_BG_LIGHT, UI_BG_LIGHTER, UI_FG_BRIGHT, UI_FG_LIGHT, UI_FG_MUTED,
    UI_FG_DIM, UI_SELECTION, UI_GUIDE, UI_LIST_FOCUS, UI_LIST_HOVER,
    UI_ERROR_ALT, LINE_NUMBER, WARNING_GOLD, LIGHT_BLUE,
  ] = theme.breu.ui;

  // Build Gemini CLI theme
  const geminiTheme = {
    name: 'Breu',
    type: 'dark',
    Background: BG,
    Foreground: FG,
    LightBlue: LIGHT_BLUE,
    AccentBlue: BLUE,
    AccentPurple: PURPLE,
    AccentCyan: CYAN,
    AccentGreen: GREEN,
    AccentYellow: YELLOW,
    AccentRed: RED,
    Comment: COMMENT,
    Gray: UI_FG_MUTED,
    DiffAdded: GREEN,
    DiffRemoved: RED,
    GradientColors: [PURPLE, BLUE, CYAN],
  };

  await fs.promises.writeFile(
    OUTPUT_FILE,
    JSON.stringify(geminiTheme, null, 2) + '\n'
  );

  console.log(`✓ Built: ${OUTPUT_FILE}`);
}

build().catch(err => {
  console.error('Gemini CLI build failed:', err);
  process.exit(1);
});
