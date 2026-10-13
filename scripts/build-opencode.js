const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const SRC_FILE = path.join(__dirname, '..', 'src', 'breu.yml');
const THEME_DIR = path.join(__dirname, '..', 'themes');
const OUTPUT_FILE = path.join(THEME_DIR, 'breu-opencode.json');

async function build() {
  console.log('Building Breu OpenCode theme...');

  // Read YAML source
  const yamlContent = await fs.promises.readFile(SRC_FILE, 'utf-8');

  // Parse YAML (anchors/aliases resolved automatically)
  const theme = yaml.load(yamlContent);

  // Ensure output directory exists
  if (!fs.existsSync(THEME_DIR)) {
    fs.mkdirSync(THEME_DIR, { recursive: true });
  }

  // Named palette from breu.base
  const [, FG, , COMMENT, CYAN, GREEN, ORANGE, PINK, PURPLE, RED, YELLOW, BLUE] = theme.breu.base;

  // Named UI colors from breu.ui
  const [
    UI_BORDER, , , ,
    UI_BG_LIGHT, UI_BG_LIGHTER, , , UI_FG_MUTED,
    , UI_SELECTION, UI_GUIDE, , ,
    , LINE_NUMBER,
  ] = theme.breu.ui;

  // Build OpenCode theme
  const openCodeTheme = {
    $schema: "https://opencode.ai/theme.json",
    defs: {
      fg: FG,
      cyan: CYAN,
      green: GREEN,
      orange: ORANGE,
      pink: PINK,
      purple: PURPLE,
      red: RED,
      yellow: YELLOW,
      blue: BLUE,
      comment: COMMENT,
      uiBorder: UI_BORDER,
      uiBgLight: UI_BG_LIGHT,
      uiBgLighter: UI_BG_LIGHTER,
      uiFgMuted: UI_FG_MUTED,
      uiSelection: UI_SELECTION,
      uiGuide: UI_GUIDE,
      lineNumber: LINE_NUMBER,
    },
    theme: {
      primary: "blue",
      secondary: "pink",
      accent: "cyan",
      error: "red",
      warning: "orange",
      success: "green",
      info: "blue",
      text: "fg",
      textMuted: "uiFgMuted",
      background: "none",
      backgroundPanel: "transparent",
      backgroundElement: "#484E5B80",
      border: "uiBorder",
      borderActive: "uiSelection",
      borderSubtle: "uiGuide",
      // diff
      diffAdded: "green",
      diffRemoved: "red",
      diffContext: "comment",
      diffHunkHeader: "comment",
      diffHighlightAdded: "green",
      diffHighlightRemoved: "red",
      diffAddedBg: "#001A0D",
      diffRemovedBg: "#1A0000",
      diffContextBg: "uiBgLight",
      diffLineNumber: "lineNumber",
      diffAddedLineNumberBg: "#001208",
      diffRemovedLineNumberBg: "#120000",
      // markdown
      markdownText: "fg",
      markdownHeading: "purple",
      markdownLink: "cyan",
      markdownLinkText: "pink",
      markdownCode: "green",
      markdownBlockQuote: "yellow",
      markdownEmph: "yellow",
      markdownStrong: "orange",
      markdownHorizontalRule: "comment",
      markdownListItem: "cyan",
      markdownListEnumeration: "cyan",
      markdownImage: "cyan",
      markdownImageText: "pink",
      markdownCodeBlock: "fg",
      // syntax
      syntaxComment: "comment",
      syntaxKeyword: "cyan",
      syntaxFunction: "green",
      syntaxVariable: "fg",
      syntaxString: "yellow",
      syntaxNumber: "purple",
      syntaxType: "pink",
      syntaxOperator: "pink",
      syntaxPunctuation: "fg",
    },
  };

  await fs.promises.writeFile(
    OUTPUT_FILE,
    JSON.stringify(openCodeTheme, null, 2) + '\n'
  );

  console.log(`✓ Built: ${OUTPUT_FILE}`);
}

build().catch(err => {
  console.error('OpenCode build failed:', err);
  process.exit(1);
});
