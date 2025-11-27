# Breu Theme Documentation

A dark VS Code theme with a pure black background and carefully curated color palette.

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
| Blue | `#2E8CCF` | Classes, activity bar badge, info icons |

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
| `activityBar.background` | `#000000` | Sidebar background |
| `activityBar.foreground` | `#D7DAE0` | Icon color |
| `activityBarBadge.background` | `#2E8CCF` | Badge background |
| `activityBarBadge.foreground` | `#F8FAFD` | Badge text |

### Editor

| Key | Value | Description |
|-----|-------|-------------|
| `editor.background` | `#000000` | Editor background |
| `editor.findMatchHighlightBackground` | `#FFB86C40` | Search match highlight |
| `editor.lineHighlightBackground` | `#000000` | Current line highlight |
| `editor.selectionBackground` | `#484e5b` | Selected text background |
| `editor.selectionHighlightBackground` | `#484e5b80` | Other occurrences |
| `editor.wordHighlightBackground` | `#484e5b80` | Word highlight |
| `editor.wordHighlightStrongBackground` | `#AAB1C040` | Strong word highlight |

### Editor Cursor & Indicators

| Key | Value | Description |
|-----|-------|-------------|
| `editorCursor.foreground` | `#8BE9FD` | Cursor color (cyan) |
| `editorError.foreground` | `#FF5555` | Error underline (red) |
| `editorWarning.foreground` | `#CCA700` | Warning underline (gold) |
| `editorInfo.foreground` | `#2E8CCF` | Info underline (blue) |

### Bracket Highlighting

| Key | Value | Description |
|-----|-------|-------------|
| `editorBracketHighlight.foreground1` | `#179fff` | Level 1 - Blue |
| `editorBracketHighlight.foreground2` | `#da70d6` | Level 2 - Pink |
| `editorBracketHighlight.foreground3` | `#ffd700` | Level 3 - Gold |

### Editor Widgets

| Key | Value | Description |
|-----|-------|-------------|
| `editorHoverWidget.background` | `#000000` | Hover popup background |
| `editorHoverWidget.border` | `#181A1F` | Hover popup border |
| `editorSuggestWidget.background` | `#000000` | Autocomplete background |
| `editorSuggestWidget.border` | `#181A1F` | Autocomplete border |
| `editorSuggestWidget.highlightForeground` | `#8BE9FD` | Match highlight |
| `editorSuggestWidget.selectedBackground` | `#2c313a` | Selected item |

### Git Decorations

| Key | Value | Description |
|-----|-------|-------------|
| `gitDecoration.modifiedResourceForeground` | `#FFB86C` | Modified files (orange) |
| `editorGutter.modifiedBackground` | `#FFB86C` | Gutter modified indicator |
| `minimapGutter.modifiedBackground` | `#FFB86C` | Minimap modified indicator |

### Lists

| Key | Value | Description |
|-----|-------|-------------|
| `list.activeSelectionBackground` | `#2c313a` | Selected item background |
| `list.activeSelectionForeground` | `#d7dae0` | Selected item text |
| `list.focusBackground` | `#383E4A` | Focused item background |
| `list.highlightForeground` | `#8BE9FD` | Match highlight (cyan) |
| `list.hoverBackground` | `#292d35` | Hover background |

### Notifications

| Key | Value | Description |
|-----|-------|-------------|
| `notifications.background` | `#21252b` | Notification background |
| `notifications.foreground` | `#d7dae0` | Notification text |
| `notificationsInfoIcon.foreground` | `#2E8CCF` | Info icon (blue) |
| `notificationsWarningIcon.foreground` | `#FFB86C` | Warning icon (orange) |
| `notificationsErrorIcon.foreground` | `#FF5555` | Error icon (red) |

### Sidebar & Status Bar

| Key | Value | Description |
|-----|-------|-------------|
| `sideBar.background` | `#000000` | Sidebar background |
| `sideBarSectionHeader.background` | `#000000` | Section header background |
| `statusBar.background` | `#000000` | Status bar background |
| `statusBar.foreground` | `#9da5b4` | Status bar text |
| `statusBarItem.remoteBackground` | `#000000` | Remote indicator background |
| `statusBarItem.remoteForeground` | `#8BE9FD` | Remote indicator text (cyan) |

### Tabs & Title Bar

| Key | Value | Description |
|-----|-------|-------------|
| `tab.activeBackground` | `#000000` | Active tab background |
| `tab.inactiveBackground` | `#000000` | Inactive tab background |
| `tab.border` | `#000000` | Tab border |
| `titleBar.activeBackground` | `#000000` | Title bar background |

### Terminal

| Key | Value | Description |
|-----|-------|--------------|
| `terminal.background` | `#000000` | Background |
| `terminal.foreground` | `#F8F8F2` | Default text |
| `terminal.ansiBlack` | `#21222C` | Black |
| `terminal.ansiRed` | `#FF5555` | Red |
| `terminal.ansiGreen` | `#50FA7B` | Green |
| `terminal.ansiYellow` | `#F1FA8C` | Yellow |
| `terminal.ansiBlue` | `#BD93F9` | Blue (purple) |
| `terminal.ansiMagenta` | `#FF79C6` | Magenta |
| `terminal.ansiCyan` | `#8BE9FD` | Cyan |
| `terminal.ansiWhite` | `#F8F8F2` | White |

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
| Class names | `entity.name.class`, `entity.name.type.class` | `#2E8CCF` | - |
| Inherited classes | `entity.other.inherited-class` | `#2E8CCF` | italic |
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
