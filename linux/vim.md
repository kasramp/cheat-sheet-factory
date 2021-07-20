---
title: Vim
category: Linux
layout: 2017/sheet
tags: [Featured]
updated: 2021-07-20
keywords:
    - "vim"
    - "vim cheat sheet"
    - "vim key bindings"
prism_languages: [vim]
intro: |
  Vim Key Bindings 
---

Shortcuts
---------
{: .-two-column}


## Movements

Moving to *right*, *left*, *up*, and *down*

### Moving *right*

| `l` | Moves the cursor to *right* |
| `2l` | Moves the cursor **two** characters to *right* |
| `nl` | Moves the cursor **n** characters to *right* |

### Moving *left*

| `h` | Moves the cursor to *left* |
| `2h` | Moves the cursor **two** characters to *left* |
| `nh` |Moves the cursor **n** characters to *left* |

### Moving *up*

| `k` | Moves the cursor to *up* |
| `2k` | Moves the cursor **two** characters to *up* |
| `nk` | Moves the cursor **n** characters to *up* |
| `gk` | Move the cursor to a **virtual** line *up* |
 
### Moving *down*

| `j` | Moves the cursor to *down* |
| `2j` | Moves the cursor **two** characters to *down* |
| `nj` | Moves the cursor **n** characters to *down* |
| `gj` | Moves the cursor to a **virtual** line *down* |

### Moving to the *beginning* and the *end* of the *line/file*

| `gg` | Jumps to the *beginning* of the file |
| `G` | Jumps to the *end* of the file |
| `I` | Jumps to the *beginning* of the line and switches to **insert** mode |
| `A` | Jumps to the *end* of the line and switches to **insert** mode |
| `0` | Jumps to the *beginning* of the line but **remains** in the normal mode |
| `$` | Jumps to the *end* of the line but **remains** in the normal mode |

### Moving *forward* and *backward* *word* by *word*

| `w` | Moves **forward** by a *word* which cursor stops at the **first character** of the word |
| `2w` | Moves **forward** **two** *words* which cursor stops at the **first character** of the word |
| `nw` | Moves **forward** **n** *words* which cursor stops at the **first character** of the word |
| `e` | Moves **forward** by a *word* which cursor stops at the **last character** of the word |
| `2e` | Moves **forward** by **two** *words* which cursor stops at the **last character** of the word |
| `ne` | Moves **forward** by **n** *words* which cursor stops at the **last character** of the word |
| `b` | Moves **backward** by a *word* |
| `2b` | Moves **backward** by **two** *words* |
| `nb` | Moves **backward** by **n** *words* |

### Moving *forward* and *backward* *sentence* by *sentence*

| `)` | Moves **forward** by a sentence without leaving normal mode |
| `(` | Moves **backward** by a sentence without leaving normal mode |

### Moving *forward* and *backward* *paragraph* by *paragraph*

| `}` | Moves **forward** by a paragraph without leaving normal mode |
| `{` | Moves **backward** by a paragraph without leaving normal mode |

### Moving *forward* and *backward* *page* by *page*

| `Ctrl + f` | Moves **forward** by a page without leaving normal mode |
| `Ctrl + b` | Moves **backward** by a page without leaving normal mode |
| `Ctrl + d` | Moves **forward** by a half page without leaving normal mode (page down) |
| `Ctrl + u` | Moves **backward** by a half page without leaving normal mode (page up) |

### Moving *beginning* and *end* the document

| `[` | Move to the **beginning** of the document |
| `]` | Moves to the **end** of the document |

### Moving *back* and *forth* in code

| `%` | Move to the matching bracket or parentheses |

### Moving *back* and *forth* in Insert mode

+ Just press `alt` with any key like (`i`, `j`, `k`, `l`). It quits the insert mode and goes to normal mode and does the action as well.

## Insertion

Including inserting a *line* and switching to *insert* mode

### *Line* insertion

| `o` | Inserts a *line* **below** of the current line and moves the cursor to the *beginning* of the line |
| `O` | Insert a *line* **above** of the current line and moves the cursor to the *beginning* of the line |
| `r + enter` | Break the current line to the new line which moves all the text to the next line. It does not switch to insert mode |

### *Line* insertion *helper*

| `Enter` | Insert a *line* **below** of the current line but **does not** switches to Insert mode |
| `[ + Space` | Insert a *line* **above** of the current line but **does not** switches to Insert mode |

### Switching to *Insert* mode

| `i` | Switches to *Insert* mode, **does not** change cursor position |
| `a` | Switches to *Insert* mode, **moves** the cursor **one** character forward |

### *Indentation* insertion

| `>` | Adds a tab, usually eight characters |
| `<` | Removes a tab, usually eight characters |

## Cut, Copy, Paste, Selection, Undo and Redo operations

### *Cut (Delete)*, *Copy (Yank)* and *Paste*

| `yy` | Yanks the **current** *line* |
| `2yy` | Yanks **two** *lines* |
| `nyy` | Yanks **n** *lines* |
| `pp` | Pastes the yanked *line(s)* |
| `x` | Cuts the **current** *character* on the cursor |
| `r` | Replaces the **current** *character* without going to **Insert** mode. |
| `dd` | Cuts the **current** *line* |
| `2dd` | Cuts **two** *lines* |
| `ndd` | Cuts **n** *lines* |
| `dw` | Cuts a *word* if the cursor is at the **beginning** of the word |
| `2dw` | Cuts **two** *words* if the cursor is at the **beginning** of the word |
| `ndw` | Cuts **n** *words* if the cursor is at the **beginning** of the word |
| `diw` | Cuts a *word* **regardless** of the cursor position, but **keeps** white spaces |
| `daw` | Cuts a *word* **regardless** of the cursor position and **removes** white spaces |
| `cw` | Cuts a *word* and switches to **Insert** mode |
| `ciw` | Cuts a *word* **regardless** of the cursor position, but **keeps** white spaces and switches to **Insert** mode |
| `caw` | Cuts a *word* **regardless** of the cursor position and **removes** white spaces and switches to **Inert** mode |
| `das` | Cuts around a *sentence* |
| `dap` | Cuts around a *paragraph* |
| `d$/D` | Cuts from the *current* cursor position until the **end** of the line |

### *Selection* (Visual Mode)

| `V` | Selects the **entire** of the **current** line |
| `v` | Switches to **visual** mode |

### *Undo* and *Redo*

| `u` | Does undo |
| `Ctrl + r** or **.` | Does redo |

### *Miscellaneous*

| `J` | Joins the **next** line to the **current** line |

### Moving screen without moving the cursor

+ It's used when reaching to a bottom of a file but want to bring the content of a file to the middle

| `zz` | Bring the current line to the middle of the screen |
| `zt` | Bring the current line to the top of the screen |
| `zb` | Bring the current line to the bottom of the screen |

## Splitting

### Create split

| `Ctrl + w + s` | Horizontal split |
| `:sp` | Horizontal split |
| `:split` | Horizontal split |
| `Ctrl + w + v` | Vertical split |
| `:vsp` | Vertical split |
| `:vsplit` | Vertical split |

### Split opening files

| `:sp [fileName]` | Open a file in horizontal split |
| `:vsp [fileName]` | Open a file in vertical split |

### Cycle through splits

| `Ctrl + w + w` | Go to the next split |
| `Ctrl + w + l` | Go to split on the right |
| `Ctrl + w + h` | Go to split on the left |
| `Ctrl + w + j` | Go to split on the bottom |
| `Ctrl + w + k` | Go to split on the top |
| `Ctrl + w + t` | Go to most top split |
| `Ctrl + w + b` | Go to most bottom split |
| `Ctrl + w + p` | Go to previous split |

### Resizing

| `:resize 20` | Resize horizontally a split to 20 |
| `:resize -20` | Resize horizontally a split to 20 less |
| `:resize +20` | Resize horizontally a split to 20 more |
| `:vertical resize 10` | Resize vertical a split to 10 |
| `:vertical resize -10` | Resize vertical a split to 10 less |
| `:vertical resize +10` | Resize vertical a split to 10 more |
| `Ctrl + w + =` | Reset resize |
| `Ctrl + w + _` | Maximize vertically |
| `Ctrl + w + |` | Maximize horizontally |
| `Ctrl + w + <>` | Resize vertical split |
| `Ctrl + w + +=` | Resize horizontal split | 

### Split placement

| `Ctrl + w + x` | Swap the current split position with the next |
| `:set splitright` | Open split on right side |
| `Ctrl + w + r` | Rotate a split down |
| `Ctrl + w + R` | Rotate a split up (clockwise) |

## Nerd Tree

### File opening

| `o` | Open in prev window |
| `go` | Preview |
| `t` | Open in a new tab |
| `T` | Open in a new tab silently |
| `i` | Open split |
| `gi` | Preview split |
| `s` | Open vsplit |
| `gs` | Preview vsplit |

### File manager

| `o` | Open and close a tree |
| `t` | Open a new file manager in a new tab |
| `T` | Open a new file manager in a new tab silently |
| `r` | Refresh current directory |
| `R` | Referesh current root |
| `p` | Go to parent |
| `P` | Go to root |
| `K` | Go to the first child of directory |
| `J` | Go to the last child of directory |
| `Ctrl + j` | Go the next sibling |
| `Ctrl + k` | Go to the previous sibiling |
| `u` | Move up the root directory |
| `r` | Referesh selected directory |
| `R` | Referesh root directory |
| `I` | Toggle hidden files |
| `e` | Open a selected directory in a new split |
| `m` | Open a nerd tree menu

### Tab related key bindings

| `gt` | Go to the next tab |
| `gT` | Go to the previous tab | 

## Vim no plugin (file browser, find, auto completion, etc.)

```
" disable vi compatibility layer
set nocompatible

" enable syntax highlighting
syntax enable

" for fuzzy file search. 
" use `:find filename`, tab for autocompletion
" to fuzzy search just add * beginning or end of filename
filetype plugin on
set path+=**
" fuzzy search result in a menu using tab or shift + tab
" ^^ can use `:ls` to see open files in buffer and switch between them using `:b filename`.
set wildmenu
" ignores /target directory of maven project
set wildignore+=**/target/**

" tags for jumping here and there in the code where the definition is using
" ctrl + ] go to tag
" ctrl + t back to original place, stack supported. means multiple jump works
" g + ctrl + ] to be able to select implementation instead of interface
command! MakeTags !ctags -R .

" autocompletion in insert mode ctrl + n, ctrl + p
" ctrl + x ctrl + n limit autocompletion to the currenct one
" ctrl + x + ctrl + f  autocompletion of file name. e.g., /home ctrl + x + ctrl + f

" file browser
let g:netrw_banner=0
let g:netrw_browser_split=4
let g:netrw_altv=1
let g:netrw_liststyle=3
let g:netrw_list_hide=netrw_gitignore#Hide()
let g:netrw_list_hide.=',\(^\|\s\s\)\zs\.\S\+'
" :edit -> open a folder. e.g., :edit .
" v/t open in h-split v-split tab

" :read filename -> reads a file and add it to the current buffer/screen

" show line number
set number

" open terminal :ter
```

## Set column marker to 80 columns

+ `:set colorcolumn=80`
