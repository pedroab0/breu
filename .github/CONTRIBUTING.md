# Contributing to Breu

Thanks for your interest in contributing to Breu!

## Getting Started

1. Fork the repository
2. Clone your fork:

   ```bash
   git clone https://github.com/YOUR_USERNAME/breu.git
   ```

3. Open the folder in VS Code
4. Press `F5` to launch the Extension Development Host
5. Select **Breu** from the Color Theme picker

## Making Changes

### Theme Source File

The single source of truth is `src/breu.yml` — **never edit files in `themes/` directly**, as they are automatically generated:

- **`breu.base` / `breu.ui` / `breu.alpha`** - Named color anchors
- **`colors`** - UI colors (editor, sidebar, terminal, etc.)
- **`tokenColors`** - Syntax highlighting rules
- **`semanticTokenColors`** - Semantic token rules

### Building Themes

After editing `src/breu.yml`, you can regenerate all theme targets:

```bash
npm run build
```

This compiles all targets into `themes/` (VS Code, Warp, Gemini CLI, Zsh prompt, Zsh syntax highlighting, and OpenCode).

Or build specific targets if you are working on a particular tool:

```bash
npm run build:warp       # Warp terminal theme
npm run build:gemini     # Gemini CLI theme
npm run build:zsh        # Zsh prompt theme
npm run build:zsh-syntax # Zsh syntax config
npm run build:opencode   # OpenCode theme
```

### Testing Changes

1. Edit `src/breu.yml` and run `npm run build` (or your target-specific build command)
2. In the Extension Development Host (`F5`), run `Developer: Reload Window` (`Cmd+Shift+P`)
3. Use `Developer: Inspect Editor Tokens and Scopes` to debug token colors
4. Use sample files in `examples/` to visually verify syntax coverage

### Color Palette

Please use colors from the Breu palette:

| Color | Hex |
|-------|-----|
| Background | `#000000` |
| Foreground | `#F8F8F2` |
| Comment | `#6272A4` |
| Cyan | `#8BE9FD` |
| Green | `#50FA7B` |
| Orange | `#FFB86C` |
| Pink | `#FF79C6` |
| Purple | `#BD93F9` |
| Red | `#FF5555` |
| Yellow | `#F1FA8C` |
| Blue | `#179FFF` |

## Submitting Changes

1. Create a new branch:

   ```bash
   git checkout -b fix/your-fix-name
   ```

2. Make your changes
3. Commit with a clear message:

   ```bash
   git commit -m "fix: description of the fix"
   ```

4. Push to your fork:

   ```bash
   git push origin fix/your-fix-name
   ```

5. Open a Pull Request

## Commit Message Format

Use [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Color/styling changes
- `refactor:` - Code refactoring

## Questions?

Open an issue if you have questions or suggestions.
