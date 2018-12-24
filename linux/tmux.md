---
title: tmux
category: Linux
layout: 2017/sheet
updated: 2018-12-24
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

### Attaching/detaching 

| `Ctrl + b + d` | Detach a tmux session |
| `tmux attach`  | Attach a tmux session |
| `tmux attach -t [session name/number]` | Attach to a tmux with a given name |
| `tmux ls` | Get a list of tmux session |