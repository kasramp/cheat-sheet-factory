---
title: w3m Shortcuts
category: Linux
layout: 2017/sheet
updated: 2018-10-15
keywords:
    - "w3m"
    - "w3m key bindings"
intro: |
  List of w3m key bindings 
---

Shortcuts
---------
{: .-three-column}

### Common shortcuts

| `⇧h` | Show hot keys |
| `⇧b` | Get out of hot keys menu |
| `←→↑↓`/`hjkl` | Navigation |
| `⭾`/`⇧⭾` | Navigate through links |
| `v` | View the source |
| `/` | Forward search |
| `?` | Backward search |
| `n` | Go to next search |
| `⇧n` | Go to previous search |
| `⇧b` | Go previous page |
| `s` | Go forward page |
| `gg` | Go to top of page |
| `⇧g` | Go to end of page |
| `⇧t` | Open a tab |
| `⌃q` | Close a tab |
| `⇧u` | Go to a url |
| `⇧{}` | Switch between tabs |
| `⇧m` | Copy a link of current page |
| `Esc⇧m` | Copy a link that cursor is on it |
| `⌃h` | Show history |
| `⇧b` | Exit history |
| `⇧i` | View image |
| `Esci` | Save image |
| `c` | Show which page you are on |
| `u` | View a URL of a link |
| `Escb` | View bookmarks |
| `Esca` | To bookmark |
| `<>` | Scroll left and right |
| `o` | Open options/preferences |
{: .-shortcuts}

### Misc

Show all links in a page in pop up form to select (without going to link):
{: .-setup}

```
Escm
```

Show all links in a page in pop up form to select (with going to link): 

```
Escl
```

To be able to login to sites that require cookies:

```
w3m -cookie
```

Bookmarks are stored in:

```
~/.w3m/bookmarks.html
```