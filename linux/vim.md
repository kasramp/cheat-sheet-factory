---
title: vim
category: Linux
layout: 2017/sheet
tags: [Featured]
updated: 2019-01-02
keywords:
    - "vim"
    - "vim cheat sheet"
    - "vim key bindings"
intro: |
  Vim Key Bindings 
---

Shortcuts
---------
{: .-two-column}

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