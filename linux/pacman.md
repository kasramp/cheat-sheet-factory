---
title: pacman
category: Linux
layout: 2017/sheet
updated: 2018-11-01
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

### Common switches

| `-Syy` | Update repository list |
| `-Syu` | Upgrade packages |
| `-Sy` | Install a package |
{: .-shortcuts}

### Useful aliases for Ubuntu/Debian users

+ `alias apt-update='sudo pacman -Syy'` 
+ `alias apt-upgrade='sudo pacman -Syu'`
+ `alias apt-install='sudo pacman -Sy'`