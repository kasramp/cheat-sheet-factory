---
title: Yaourt
category: Linux
layout: 2017/sheet
updated: 2020-07-09
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
| `-Ss [keyword]` | Search for a package |
| `-Si [keyword]` | Get info about a certain keyword |
| `-Rcs [package]` | Remove a package with all dependencies |
| `-Syu --noconfirm` | Upgrades all packages without asking for confirmation |

{: .-shortcuts}
