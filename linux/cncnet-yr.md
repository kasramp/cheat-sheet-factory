---
title: Red Alert 2 & Yuri's Revenge (CnCNet) on Linux
category: Linux
logo: { src: /assets/logos/redalert2.svg }
updated: 2026-11-27
keywords:
    - "CnCNet"
    - "Red Alert 2"
    - "Yuri's Revenge"
    - "Wine"
prism_languages: [bash]
intro: |
  Run the CnCNet Yuri's Revenge client (online play and campaign) on Linux.
  You need your own copy of Red Alert 2 **and** Yuri's Revenge; CnCNet ships only the client.
---

## Setup
<!-- {: .-one-column} -->

### Requirements: Arch

```bash
# wine needs the [multilib] repo enabled in /etc/pacman.conf
$ sudo pacman -S wine dotnet-runtime-8.0
```

### Requirements: Linux Mint (Ubuntu based)

```bash
$ sudo dpkg --add-architecture i386
$ sudo apt update
$ sudo apt install wine wine32 dotnet-runtime-8.0
```

### Requirements: LMDE / Debian

.NET is not in Debian's repos; add Microsoft's first.

```bash
$ wget https://packages.microsoft.com/config/debian/12/packages-microsoft-prod.deb
$ sudo dpkg -i packages-microsoft-prod.deb
$ sudo dpkg --add-architecture i386
$ sudo apt update
$ sudo apt install wine wine32 dotnet-runtime-8.0
```

### Check .NET 8 is there

The launcher needs exactly .NET 8; 6 or 10 do not count.

```bash
$ dotnet --list-runtimes | grep 'NETCore.App 8\.'
```

### Install

1. Unpack the CnCNet YR client (`CnCNet5_YR_Installer`).
2. Put the RA2 + YR game files (`ra2.mix`, `ra2md.mix`, `gamemd.exe`, ...) in the **same folder** as the client. Symlinks do not work, move them.
3. Fix file name case (below).
4. Start: `./YRLauncherUnix.sh`

## Helpers
<!-- {: .-one-column} -->

### Move game files from a subfolder into the client folder

```bash
$ chmod u+w "Red Alert 2" && mv -n "Red Alert 2"/* .
```

`-n` keeps the client's own files (e.g. `RA2MD.INI`) instead of overwriting them.

### Fix file name case for "file is missing" errors

Linux is case-sensitive: `Maps01.mix` is not `MAPS01.MIX`. Renames every required file to the case the client expects.

```bash
$ sed -n 's/^RequiredFiles=//p' Resources/ClientDefinitions.ini | tr -d '\r' | tr ',' '\n' | while read -r f; do [ -e "$f" ] || { g=$(ls | grep -Fixm1 -- "$f"); [ -n "$g" ] && mv -v -- "$g" "$f"; }; done
```

### Notes

- Campaign is on the client's main menu (RA2 and YR).
- No cutscenes if `MOVIES01.MIX` etc. are 4-byte placeholders (rip versions).
- The game runs in its own Wine prefix: `./wineprefix`.
