---
title: pacman
category: Linux
layout: 2017/sheet
updated: 2025-01-28
keywords:
    - "pacman"
    - "arch pacman"
    - "pacman switches"
intro: |
  Pacman switches 
---

Switches
---------
{: .-three-column}

### Update mirror list

```bash
$ sudo pacman-mirrors -g
```

### Update keys

```bash
$ sudo pacman -Sy --needed archlinux-keyring
```

### Common switches

| `-Syy` | Update repository list |
| `-Syu` | Upgrade packages |
| `-Sy` | Install a package |
| `-R` | Remove a package |
| `-Rs` | Remove a package with deps not required by other packages |
| `-Ss` | Search for a package |
| `-Qq` | List of installed packages |
{: .-shortcuts}

### Reconfiguring mirrors

+ `sudo pacman-mirrors -g`

### Count of installed packages

+ `sudo pacman -Qq | wc -l`

### Useful aliases for Ubuntu/Debian users

+ `alias apt-update='sudo pacman -Syy'` 
+ `alias apt-upgrade='sudo pacman -Syu'`
+ `alias apt-install='sudo pacman -Sy'`
+ `alias apt-search='sudo pacman -Ss'`
