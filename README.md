# Tree-Sitter FernLog

Tree-Sitter grammar file and queries to support easier viewing of [`Fern`](https://sr.ht/~bugwhisperer/fern/) journal Log files. Tree-Sitter is editor independent and can be integrated into many text editors.

## Install and Configure

1. Make sure you have `nvim-treesitter` installed
```
-- Using lazy.nvim
{
  "nvim-treesitter/nvim-treesitter",
  build = ":TSUpdate",
}
```
2. Install the custom FernLog parser
```
-- Using vim/neovim
:TSInstall fernlog
```

## Found a bug? Feature idea?
Please open any tickets for bugs found or feature requests here: [https://todo.sr.ht/~bugwhisperer/Fern-Issues](https://todo.sr.ht/~bugwhisperer/Fern-Issues).

