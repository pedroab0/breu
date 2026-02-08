# Breu Theme Documentation

A dark VS Code theme with a pure black background and carefully curated color palette. Also available for Warp terminal and Gemini CLI.

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Black | `#000000` | Background |
| White | `#F8F8F2` | Default text, variables, object keys |
| Gray | `#6272A4` | Comments, muted text |
| Cyan | `#8BE9FD` | Keywords, storage, modifiers, JSDoc tags |
| Green | `#50FA7B` | Functions, attributes, inline code |
| Orange | `#FFB86C` | Parameters, warnings, modified files |
| Pink | `#FF79C6` | Tags, types, escape sequences, separators |
| Purple | `#BD93F9` | Constants, `this`/`self`, headings |
| Red | `#FF5555` | Errors, deletions, RegExp assertions |
| Yellow | `#F1FA8C` | Strings, quotes, blockquotes |
| Blue | `#179FFF` | Classes, activity bar badge, info icons |

## Theme File Structure

```text
breu-color-theme.json
├── name: "Breu"
├── type: "dark"
├── semanticHighlighting: true
├── colors: { ... }        # UI colors
└── tokenColors: [ ... ]   # Syntax highlighting
```

---

## UI Colors (`colors`)

### Activity Bar

| Key | Value | Description |
|-----|-------|-------------|
| `activityBar.background` | `*BG` | Sidebar background |
| `activityBar.foreground` | `*UI_FG_LIGHT` | Icon color |
| `activityBarBadge.background` | `*BLUE` | Badge background |
| `activityBarBadge.foreground` | `*UI_FG_BRIGHT` | Badge text |

### Editor

| Key | Value | Description |
|-----|-------|-------------|
| `editor.background` | `*BG` | Editor background |
| `editor.findMatchHighlightBackground` | `*ORANGE_25` | Search match highlight |
| `editor.lineHighlightBackground` | `*BG` | Current line highlight |
| `editor.selectionBackground` | `*UI_SELECTION` | Selected text background |
| `editor.selectionHighlightBackground` | `*UI_SELECTION_50` | Other occurrences |
| `editor.wordHighlightBackground` | `*UI_SELECTION_50` | Word highlight |
| `editor.wordHighlightStrongBackground` | `*UI_FG_MUTED_25` | Strong word highlight |

### Editor Cursor & Indicators

| Key | Value | Description |
|-----|-------|-------------|
| `editorCursor.foreground` | `*CYAN` | Cursor color |
| `editorError.foreground` | `*RED` | Error underline |
| `editorWarning.foreground` | `*WARNING_GOLD` | Warning underline |
| `editorInfo.foreground` | `*BLUE` | Info underline |

### Bracket Highlighting

| Key | Value | Description |
|-----|-------|-------------|
| `editorBracketHighlight.foreground1` | `*BLUE` | Level 1 - Blue |
| `editorBracketHighlight.foreground2` | `*BRACKET_2` | Level 2 - Orchid |
| `editorBracketHighlight.foreground3` | `*BRACKET_3` | Level 3 - Gold |

### Editor Widgets

| Key | Value | Description |
|-----|-------|-------------|
| `editorHoverWidget.background` | `*BG` | Hover popup background |
| `editorHoverWidget.border` | `*UI_BORDER` | Hover popup border |
| `editorSuggestWidget.background` | `*BG` | Autocomplete background |
| `editorSuggestWidget.border` | `*UI_BORDER` | Autocomplete border |
| `editorSuggestWidget.highlightForeground` | `*CYAN` | Match highlight |
| `editorSuggestWidget.selectedBackground` | `*UI_BG_LIGHTER` | Selected item |

### Git Decorations

| Key | Value | Description |
|-----|-------|-------------|
| `gitDecoration.modifiedResourceForeground` | `*ORANGE` | Modified files |
| `editorGutter.modifiedBackground` | `*ORANGE` | Gutter modified indicator |
| `minimapGutter.modifiedBackground` | `*ORANGE` | Minimap modified indicator |

### Lists

| Key | Value | Description |
|-----|-------|-------------|
| `list.activeSelectionBackground` | `*UI_BG_LIGHTER` | Selected item background |
| `list.activeSelectionForeground` | `*UI_FG_LIGHT` | Selected item text |
| `list.focusBackground` | `*UI_LIST_FOCUS` | Focused item background |
| `list.highlightForeground` | `*CYAN` | Match highlight |
| `list.hoverBackground` | `*UI_LIST_HOVER` | Hover background |

### Notifications

| Key | Value | Description |
|-----|-------|-------------|
| `notifications.background` | `*UI_BG_LIGHT` | Notification background |
| `notifications.foreground` | `*UI_FG_LIGHT` | Notification text |
| `notificationsInfoIcon.foreground` | `*BLUE` | Info icon |
| `notificationsWarningIcon.foreground` | `*ORANGE` | Warning icon |
| `notificationsErrorIcon.foreground` | `*RED` | Error icon |

### Sidebar & Status Bar

| Key | Value | Description |
|-----|-------|-------------|
| `sideBar.background` | `*BG` | Sidebar background |
| `sideBarSectionHeader.background` | `*BG` | Section header background |
| `statusBar.background` | `*BG` | Status bar background |
| `statusBar.foreground` | `*UI_FG_MUTED` | Status bar text |
| `statusBarItem.remoteBackground` | `*BG` | Remote indicator background |
| `statusBarItem.remoteForeground` | `*CYAN` | Remote indicator text |

### Tabs & Title Bar

| Key | Value | Description |
|-----|-------|-------------|
| `tab.activeBackground` | `*BG` | Active tab background |
| `tab.inactiveBackground` | `*BG` | Inactive tab background |
| `tab.border` | `*BG` | Tab border |
| `titleBar.activeBackground` | `*BG` | Title bar background |

### Terminal

| Key | Value | Description |
|-----|-------|--------------|
| `terminal.background` | `*BG` | Background |
| `terminal.foreground` | `*FG` | Default text |
| `terminal.ansiBlack` | `*ANSI_BLACK` | Black |
| `terminal.ansiRed` | `*ANSI_RED` | Red |
| `terminal.ansiGreen` | `*ANSI_GREEN` | Green |
| `terminal.ansiYellow` | `*ANSI_YELLOW` | Yellow |
| `terminal.ansiBlue` | `*ANSI_BLUE` | Blue (purple) |
| `terminal.ansiMagenta` | `*ANSI_MAGENTA` | Magenta |
| `terminal.ansiCyan` | `*ANSI_CYAN` | Cyan |
| `terminal.ansiWhite` | `*ANSI_WHITE` | White |

---

## Token Colors (`tokenColors`)

### Text & Markup

| Name | Scopes | Color | Style |
|------|--------|-------|-------|
| Source | `source` | `#F8F8F2` | - |
| Emphasis | `emphasis` | - | italic |
| Strong | `strong` | - | bold |
| Header | `header` | `#BD93F9` | - |
| Markup headings | `markup.heading` | `#BD93F9` | bold |
| Markup italic | `markup.italic` | `#F1FA8C` | italic |
| Bold markup | `markup.bold` | `#FFB86C` | bold |
| Blockquotes | `markup.quote` | `#F1FA8C` | italic |
| Inline code | `markup.inline.raw` | `#50FA7B` | - |
| Links | `markup.underline.link` | `#8BE9FD` | - |

### Diff

| Name | Scopes | Color |
|------|--------|-------|
| Inserted | `markup.inserted` | `#50FA7B` |
| Deleted | `markup.deleted` | `#FF5555` |
| Changed | `markup.changed` | `#FFB86C` |
| Diff header | `meta.diff`, `meta.diff.header` | `#6272A4` |

### Classes & Types

| Name | Scopes | Color | Style |
|------|--------|-------|-------|
| Class names | `entity.name.class`, `entity.name.type.class` | `#179FFF` | - |
| Inherited classes | `entity.other.inherited-class` | `#179FFF` | italic |
| Types | `entity.name.type`, `support.type`, etc. | `#FF79C6` | italic |
| Generics | `entity.name.type.type-parameter` | `#FF79C6` | - |

### Functions

| Name | Scopes | Color | Style |
|------|--------|-------|-------|
| Function names | `entity.name.function`, `meta.function-call.*` | `#50FA7B` | - |
| Function parameters | `variable.parameter` | `#FFB86C` | italic |
| Decorators | `meta.decorator variable.*` | `#50FA7B` | italic |

### Keywords & Storage

| Name | Scopes | Color |
|------|--------|-------|
| Keywords | `keyword`, `punctuation.definition.keyword` | `#8BE9FD` |
| Storage | `storage` | `#8BE9FD` |
| Modifiers | `storage.modifier` | `#8BE9FD` |
| Keyword "new" | `keyword.control.new`, `keyword.operator.new` | - (bold) |

### Variables & Constants

| Name | Scopes | Color | Style |
|------|--------|-------|-------|
| Variables | `variable` | `#F8F8F2` | - |
| Constants | `constant`, `variable.other.constant` | `#BD93F9` | - |
| this/super/self | `variable.language`, `keyword.other.this` | `#BD93F9` | italic |
| Shell variables | `source.shell variable.other` | `#BD93F9` | - |

### Strings

| Name | Scopes | Color |
|------|--------|-------|
| Strings | `string` | `#F1FA8C` |
| String quotes | `punctuation.definition.string.*` | `#F1FA8C` |
| Escape sequences | `constant.character.escape` | `#FF79C6` |
| Docstrings | `string.quoted.docstring.multi` | `#6272A4` |
| RegExp strings | `string.regexp` | `#F8F8F2` |

### HTML/CSS

| Name | Scopes | Color | Style |
|------|--------|-------|-------|
| HTML tags | `entity.name.tag` | `#FF79C6` | - |
| Attributes | `entity.other.attribute-name` | `#50FA7B` | italic |
| CSS selectors | `meta.selector` | `#FF79C6` | - |

### Comments & Documentation

| Name | Scopes | Color | Style |
|------|--------|-------|-------|
| Comments | `comment` | `#6272A4` | - |
| JSDoc keywords | `storage.type.class.jsdoc`, `comment.block.documentation keyword` | `#8BE9FD` | - |
| JSDoc types | `comment.block.documentation entity.name.type` | `#8BE9FD` | italic |
| JSDoc parameters | `comment.block.documentation variable` | `#FFB86C` | italic |

### Serializable Languages (JSON, YAML, TOML)

| Name | Scopes | Color |
|------|--------|-------|
| Keys | `support.type.property-name.json`, `entity.name.tag.yaml`, `variable.other.key.toml` | `#8BE9FD` |
| Dates/timestamps | `constant.other.date`, `constant.other.timestamp` | `#FFB86C` |

### Punctuation

| Name | Scopes | Color |
|------|--------|-------|
| Brackets/braces | `meta.brace.round`, `punctuation.definition.*` | `#F8F8F2` |
| Separators | `punctuation.separator.*` | `#FF79C6` |
| Interpolation | `punctuation.definition.template-expression.*` | `#FF79C6` |

---

## Color Philosophy

- **Pure black background** (`#000000`) - Maximum contrast, OLED-friendly
- **Cyan for keywords** - Reserved words stand out clearly
- **Green for functions** - Easy to identify callable code
- **Pink for types** - Distinguishes type information
- **Yellow for strings** - Clearly marks literal values
- **Orange for parameters/warnings** - Draws attention without being alarming
- **Purple for constants** - Indicates immutable values
- **Blue for classes** - Separates class definitions from types

---

## File Structure Summary

```text
colors: 54 UI color definitions
tokenColors: 56 syntax highlighting rules
```

Total theme definitions: **110 color rules**
