---
title: yaourt
category: Linux
layout: 2017/sheet
updated: 2020-01-03
keywords:
    - "yaourt"
    - "arch yaourt"
    - "yaourt switches"
intro: |
  Yaourt switches 
---

Switches
---------
{: .-two-column}

### Installation

+ `sudo pacman -Sy yaourt` 

### Upgrade all yaourt packages

+ `yaourt -Syu --aur`

### Common switches

| `-S` | Install a package |
| `-Sy` | Sync database |
| `-R` | Remove a package |
| `-S [package] --noconfirm` | Install without confirmation |
{: .-shortcuts}
