<p align="center">
  <img src="assets/breu.png" alt="Breu Logo" width="128" />
</p>

# Breu

A dark theme with a true `#000000` black background for OLED displays — available for Visual Studio Code, Warp Terminal, Zsh, Gemini CLI, and OpenCode.

<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=pedroab0.breu"><img src="https://img.shields.io/open-vsx/dt/pedroab0/breu?style=for-the-badge&label=Open%20VSX%20Downloads&color=%238BE9FD" alt="Open VSX Downloads" /></a>
  <a href="https://www.npmjs.com/package/@pedroab0/breu"><img src="https://img.shields.io/npm/v/@pedroab0/breu?style=for-the-badge&color=%2350FA7B&label=npm" alt="npm package" /></a>
</p>

## Screenshots

### TypeScript

![TypeScript](assets/typescript.jpg)

### C#

![C#](assets/c-sharp.jpg)

## More Language Samples

Explore additional language examples at [VS Code Themes](https://vscodethemes.com/e/pedroab0.breu/breu).

## Installation

### Quick Install (NPX & Global CLI)

The fastest way to install Breu is using the interactive universal installer via NPX:

```bash
# Run instantly with zero install
npx @pedroab0/breu

# Or install globally
npm install -g @pedroab0/breu
breu
```

The interactive menu detects your installed tools and lets you choose which ones to configure:

```text
? Which tools would you like to install Breu for?
  (Use ↑/↓ to navigate, Space to toggle, 'a' to toggle all, Enter to confirm)

❯ [✔] VS Code / VSCodium (code CLI detected)
  [✔] Warp Terminal (~/.warp detected)
  [✔] Zsh (Prompt & Syntax Highlighting) (~/.zshrc detected)
  [✔] Gemini CLI (~/.gemini detected)
  [ ] OpenCode (not detected)
```

#### What It Configures

| Tool | Detection | Automated Action |
|---|---|---|
| **VS Code / VSCodium** | `code` or `codium` CLI | Installs extension via `code --install-extension pedroab0.breu` |
| **Warp Terminal** | `~/.warp` exists | Copies theme to `~/.warp/themes/breu.yaml` |
| **Zsh (Prompt)** | `~/.oh-my-zsh` or `~/.zshrc` | Copies prompt to `~/.oh-my-zsh/custom/themes/breu.zsh-theme` or `~/.breu.zsh-theme` |
| **Zsh (Syntax)** | `~/.zshrc` or zsh shell | Copies syntax highlighting styles to `~/.breu-zsh-syntax.zsh` |
| **Gemini CLI** | `~/.gemini` exists | Copies theme config to `~/.gemini/breu-gemini.json` |
| **OpenCode** | `~/.config/opencode` or CLI | Copies theme config to `~/.config/opencode/themes/breu.json` |

#### Non-Interactive & Automation Flags

```bash
npx @pedroab0/breu --all           # Install to all detected tools without prompts
npx @pedroab0/breu --tools=warp,zsh # Install only to specific tools
npx @pedroab0/breu --dry-run       # Simulate installation without writing files
npx @pedroab0/breu --help          # Show usage and available flags
```

---

### Manual Setup & Alternative Methods

If you prefer installing themes manually or are configuring an environment without Node.js:

#### VS Code Marketplace

1. Open **Extensions** sidebar (`Cmd+Shift+X`)
2. Search for `Breu`
3. Click **Install**
4. Go to **Preferences > Color Theme** and select **Breu**

#### Open VSX (VSCodium)

1. Open **Extensions** sidebar
2. Search for `Breu`
3. Click **Install**
4. Select **Breu** from Color Theme

#### Build / Clone from Git (VS Code & VSCodium)

**VS Code:**

```bash
git clone https://github.com/pedroab0/breu.git ~/.vscode/extensions/pedroab0.breu
```

**VSCodium:**

```bash
git clone https://github.com/pedroab0/breu.git ~/.vscode-oss/extensions/pedroab0.breu
```

Restart your editor and select the theme.

#### Warp Terminal

```bash
mkdir -p ~/.warp/themes
cp themes/breu-warp.yaml ~/.warp/themes/breu.yaml
```

Open Warp and go to **Settings > Appearance > Current Theme**, then select **Breu**.

#### Building from source

```bash
npm run build:warp
# output: themes/breu-warp.yaml
```

#### Zsh Theme & Syntax Highlighting

The Zsh theme features a clean prompt with directory info, git status, and a success/failure indicator.

##### Option 1: Manual installation

1. Copy the theme file to your home directory:
   ```bash
   cp themes/breu.zsh-theme ~/.breu.zsh-theme
   ```
2. Source it in your `~/.zshrc`:
   ```bash
   source ~/.breu.zsh-theme
   ```

##### Option 2: Oh My Zsh

1. Copy the theme to the custom themes directory:
   ```bash
   mkdir -p ~/.oh-my-zsh/custom/themes
   cp themes/breu.zsh-theme ~/.oh-my-zsh/custom/themes/breu.zsh-theme
   ```
2. Set the theme in your `~/.zshrc`:
   ```zsh
   ZSH_THEME="breu"
   ```

##### Syntax Highlighting (Optional)

If you have [zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting) installed, you can apply the Breu palette to it:

1. Copy the syntax theme to your home directory:
   ```bash
   cp themes/breu-zsh-syntax.zsh ~/.breu-zsh-syntax.zsh
   ```
2. Source it in your `~/.zshrc` *after* the plugin is loaded:
   ```bash
   source ~/.breu-zsh-syntax.zsh
   ```

##### Building from source

```bash
npm run build:zsh
# output: themes/breu.zsh-theme

npm run build:zsh-syntax
# output: themes/breu-zsh-syntax.zsh
```

#### Gemini CLI

There are two ways to install the theme manually. See the [Gemini CLI custom themes docs](https://geminicli.com/docs/cli/themes/#custom-color-themes) for more details.

##### Option 1: [Load from a file](https://geminicli.com/docs/cli/themes/#loading-themes-from-a-file)

Copy the theme file to your home directory:

```bash
cp themes/breu-gemini.json ~/.gemini/
```

Then set the absolute path in `~/.gemini/settings.json`:

```json
{
  "ui": {
    "theme": "/Users/<your-username>/.gemini/breu-gemini.json"
  }
}
```

##### Option 2: [Define inline in settings](https://geminicli.com/docs/cli/themes/#how-to-define-a-custom-theme)

Add the theme directly to your `~/.gemini/settings.json`:

```json
{
  "ui": {
    "theme": "Breu",
    "customThemes": {
      "Breu": {
        "name": "Breu",
        "type": "dark",
        "Background": "#000000",
        "Foreground": "#F8F8F2",
        "LightBlue": "#5CB8FF",
        "AccentBlue": "#179FFF",
        "AccentPurple": "#BD93F9",
        "AccentCyan": "#8BE9FD",
        "AccentGreen": "#50FA7B",
        "AccentYellow": "#F1FA8C",
        "AccentRed": "#FF5555",
        "Comment": "#6272A4",
        "Gray": "#9DA5B4",
        "DiffAdded": "#50FA7B",
        "DiffRemoved": "#FF5555",
        "GradientColors": ["#BD93F9", "#179FFF", "#8BE9FD"]
      }
    }
  }
}
```

You can also switch themes inside Gemini CLI using the `/theme` command.

##### Building from source

```bash
npm run build:gemini
# output: themes/breu-gemini.json
```

#### OpenCode

[OpenCode](https://opencode.ai) is an AI-powered terminal coding assistant. Breu ships a ready-made theme file that matches the color palette exactly.

##### Requirements

Your terminal must support **truecolor** (24-bit color).

```bash
echo $COLORTERM   # should print: truecolor
```

If it does not, add `export COLORTERM=truecolor` to your shell profile.

##### Installation

**Option A — User-wide (applies to every project)**

```bash
mkdir -p ~/.config/opencode/themes
cp themes/breu-opencode.json ~/.config/opencode/themes/breu.json
```

**Option B — Project-specific**

```bash
mkdir -p .opencode/themes
cp themes/breu-opencode.json .opencode/themes/breu.json
```

##### Activation

Either run the `/theme` command inside OpenCode and select **breu**, or set it in your configuration file (`~/.config/opencode/opencode.json` or `.opencode/opencode.json`):

```json
{
  "$schema": "https://opencode.ai/config.json",
  "theme": "breu"
}
```

##### Building from source

```bash
npm run build:opencode
# output: themes/breu-opencode.json
```

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| ![Background](https://img.shields.io/badge/-000000-000000) | `#000000` | Editor background |
| ![Foreground](https://img.shields.io/badge/-F8F8F2-F8F8F2) | `#F8F8F2` | Default text |
| ![Cyan](https://img.shields.io/badge/-8BE9FD-8BE9FD) | `#8BE9FD` | Keywords, storage, JSON keys |
| ![Green](https://img.shields.io/badge/-50FA7B-50FA7B) | `#50FA7B` | Functions, attributes |
| ![Orange](https://img.shields.io/badge/-FFB86C-FFB86C) | `#FFB86C` | Parameters, warnings |
| ![Pink](https://img.shields.io/badge/-FF79C6-FF79C6) | `#FF79C6` | Tags, types, separators |
| ![Purple](https://img.shields.io/badge/-BD93F9-BD93F9) | `#BD93F9` | Constants, `this`/`self` |
| ![Red](https://img.shields.io/badge/-FF5555-FF5555) | `#FF5555` | Errors, deletions |
| ![Yellow](https://img.shields.io/badge/-F1FA8C-F1FA8C) | `#F1FA8C` | Strings, quotes |
| ![Blue](https://img.shields.io/badge/-179FFF-179FFF) | `#179FFF` | Classes, components, info |
| ![Comment](https://img.shields.io/badge/-6272A4-6272A4) | `#6272A4` | Comments, muted text |

## Features

- True black (`#000000`) background for OLED displays
- Multi-platform themes (VS Code, Warp, Gemini CLI, Zsh, OpenCode)
- Full terminal ANSI color support
- Semantic highlighting enabled
- Comprehensive syntax highlighting for 15+ languages
- Debug panel theming
- Git decoration colors

## Documentation

See [THEME.md](THEME.md) for complete color documentation.

## License

[MIT](LICENSE) © Pedro Barbosa
