---
title: vim
category: Linux
layout: 2017/sheet
updated: 2018-12-25
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