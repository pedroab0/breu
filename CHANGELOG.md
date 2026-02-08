# Changelog

All notable changes to the Breu theme will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.4] - 2026-02-08

### Added

- Warp terminal theme with build script (`npm run build:warp`)
- Gemini CLI theme with build script (`npm run build:gemini`)
- New UI color tokens (`UI_BORDER`, `UI_BG_BADGE`, `UI_BG_BUTTON`, `UI_BG_INPUT`, `UI_BG_LIGHT`, `UI_BG_LIGHTER`, `UI_FG_BRIGHT`, `UI_FG_LIGHT`, `UI_FG_MUTED`, `UI_FG_DIM`, `UI_SELECTION`, `UI_GUIDE`, `UI_LIST_FOCUS`, `UI_LIST_HOVER`, `UI_ERROR_ALT`, `LINE_NUMBER`, `WARNING_GOLD`, `LIGHT_BLUE`, `BRACKET_2`, `BRACKET_3`)
- Alpha transparency tokens (`YELLOW_20`, `GREEN_20`, `ORANGE_25`, `UI_SELECTION_50`, `UI_FG_MUTED_25`, `UI_FG_MUTED_15`, `DIFF_INSERTED_20`, `UI_PEEK_MATCH_50`, `UI_SCROLL_ACTIVE_50`, `UI_SCROLL_50`, `UI_SCROLL_HOVER_50`)

### Changed

- Tokenized all hardcoded hex values in `src/breu.yml` into YAML anchors for consistency and maintainability
- Updated `THEME.md` to reference token names instead of raw hex values
- Updated `README.md` with Warp and Gemini CLI installation instructions

## [1.0.3] - 2026-01-09

### Fixed

- Fix `.vscodeignore` and `.gitignore` files

## [1.0.2] - 2026-01-09

### Added

- Semantic token colors for enhanced IDE highlighting

### Changed

- Updated blue color to #179FFF for better contrast and visual appeal

## [1.0.1] - 2025-11-28

### Changed

- Migrated theme source from JSON to YAML for better maintainability
- Color values now use YAML anchors for DRY (Don't Repeat Yourself) principle
- Improved `package.json` manifest with additional metadata fields

### Added

- Build system with `npm run build` to generate theme from YAML source
- Published to Open VSX Registry
- Download badge in README

## [1.0.0] - 2025-11-27

### Added

- Initial release
- True black (`#000000`) background
- Complete syntax highlighting for JavaScript, TypeScript, JSON, YAML, Markdown, and more
- Full terminal ANSI color palette (16 colors)
- Semantic highlighting support
- Debug panel theming with colored icons
- Git decoration colors (modified, added, deleted, untracked)
- Error/warning/info distinction (red/yellow/blue)
- Comment tag highlighting (TODO, FIXME, NOTE, ERROR)
- Editor widget styling (hover, suggestions, notifications)
- Bracket pair colorization
