# Breu — A dark theme with pure black background
# Author: Pedro Barbosa
# https://github.com/pedroab0/breu

# Colors
BREU_BLUE="%F{#179FFF}"
BREU_PINK="%F{#FF79C6}"
BREU_GREEN="%F{#50FA7B}"
BREU_RED="%F{#FF5555}"
BREU_CYAN="%F{#8BE9FD}"
BREU_PURPLE="%F{#BD93F9}"
BREU_YELLOW="%F{#F1FA8C}"
BREU_COMMENT="%F{#6272A4}"
RESET_COLOR="%f"

# Git integration
autoload -Uz vcs_info
precmd_vcs_info() { vcs_info }
precmd_functions+=( precmd_vcs_info )
zstyle ':vcs_info:git:*' formats " %{$BREU_PINK%}(%b%u%c)%{$RESET_COLOR%}"
zstyle ':vcs_info:git:*' actionformats " %{$BREU_PINK%}(%b|%a%u%c)%{$RESET_COLOR%}"

# Prompt
setopt PROMPT_SUBST
PROMPT='%{$BREU_CYAN%}%~%{$RESET_COLOR%}${vcs_info_msg_0_} %(?.%{$BREU_GREEN%}.%{$BREU_RED%})➜ %{$RESET_COLOR%}'
