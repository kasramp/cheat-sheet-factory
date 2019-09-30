---
title: tmux
category: Linux
layout: 2017/sheet
updated: 2019-09-30
keywords:
    - "tmux"
    - "tmux cheat sheet"
    - "terminal multiplexer"
intro: |
  Tmux shortcuts 
---

Shortcuts
---------
{: .-two-column}

## Basic shortcuts

### Running in unicode

+ `tmux -u`

### Splitting

| `Ctrl + b + "` | Create a new horizontal split |
| `Ctrl + b + %` | Create a vertical split |
| `Ctrl + b + arrow keys` | Traverse between the split |

### Windowing

| `Ctrl + b + c` | Creates a new window |
| `Ctrl + b + p` | Backs to the previous window |
| `Ctrl + b + n` | Go to the next window |
| `Ctrl + b + [0-9]` | Jump to a window number |

### Attaching/detaching 

| `Ctrl + b + d` | Detach a tmux session |
| `tmux attach`  | Attach a tmux session |
| `tmux attach -t [session name/number]` | Attach to a tmux with a given name |

### Misc

| `tmux ls` | Get a list of tmux session |
| `tmux kill-session -t [session name/number]` | Kill a tmux session |

### Renaming

| `Ctrl + b + $` | Rename the tmux session |
| `Ctrl + b + ,` | Rename the current window |
| `tmux -s [session name]` | Create a session with custom name |

## [Oh My Tmux! shortcuts](https://github.com/gpakosz/.tmux)

### FYI

+ `Ctrl + b` and `Ctrl + a` are interchangeable


### Splitting

| `Ctrl + b + %` | Vertical split |
| `Ctrl + b + -` | Horizontal split |
| `Ctrl + b` + `l`/`h` | Traverse vertical split |
| `Ctrl + b` + `j`/`k` | Traverse horizontal split | 

### Windowing

| `Ctrl + b + c` | Create a new window |
| `Ctrl + b + l` | *Next window |
| `Ctrl + b + h` | *Previous widow |


### Attaching/detaching

| `Ctrl + b + d` | Detach tmux |
| `tmux attach` | Attach tmux |
| `tmux attach -t [session number]` | Attach to a particular session |



### Maximize and minimize

| `Ctrl + b + z` | Maximize a normal window |
| `Ctrl + b + z` | Minimize the current maximize window |

### Miscs

| `Ctrl + b + t` | Show time |
| `Ctrl + b [` | Enter scrolling mode |
| `q` | Exits scrolling mode |

### Copy

+ Copy to clipboard: `Ctrl + b + [` or `Ctrl + b + Enter` to go to copy mode, then `Ctrl + Space` to select, and then `y` to yank, and then `Ctrl + w` to exit the copy mode 
+ Copy to clipboard: Use mouse to select and then press `Ctrl + b + y` to yank

### Paste

+ Paste from clipboard: `Ctrl + b + ]` or `Ctrl + b + p` or `Ctrl + b + P` to paste from custom clipboard stack

### History

+ Clipboard history: `Ctrl + b + b`

### Mouse enable/disable

+ Enable and disable mouse for mouse scrolling: `Ctrl + b + m`. Keep in mind when mouse scrolling is activated, middle click copy/paste won't work
