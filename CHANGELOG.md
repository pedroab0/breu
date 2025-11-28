# Changelog

All notable changes to the Breu theme will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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
