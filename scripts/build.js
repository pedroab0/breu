const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const SRC_FILE = path.join(__dirname, '..', 'src', 'breu.yml');
const THEME_DIR = path.join(__dirname, '..', 'themes');
const OUTPUT_FILE = path.join(THEME_DIR, 'breu-color-theme.json');

async function build() {
  console.log("Building Breu theme...");

  // Read YAML source
  const yamlContent = await fs.promises.readFile(SRC_FILE, "utf-8");

  // Parse YAML (anchors/aliases resolved automatically)
  const theme = yaml.load(yamlContent);

  // Remove the color palette reference (breu object) - it's just for dev reference
  // Keep it in JSON for quick reference but remove null values from colors
  for (const key of Object.keys(theme.colors || {})) {
    if (!theme.colors[key]) {
      delete theme.colors[key];
    }
  }

  // Ensure output directory exists
  if (!fs.existsSync(THEME_DIR)) {
    fs.mkdirSync(THEME_DIR, { recursive: true });
  }

  // Write VS Code JSON output
  await fs.promises.writeFile(OUTPUT_FILE, JSON.stringify(theme, null, 2));

  console.log(`✓ Built: ${OUTPUT_FILE}`);
}

build().catch(err => {
  console.error('Build failed:', err);
  process.exit(1);
});
