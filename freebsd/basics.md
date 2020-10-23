---
title: FreeBSD
category: FreeBSD
layout: 2017/sheet
updated: 2019-01-02
keywords:
    - "freebsd"
    - "freebsd basics"
intro: |
    FreeBSD getting started basics
---

Shortcuts
---------
{: .-two-column}

### Package manager

| `pkg update` | Install/upgrade package manager |
| `pkg search [keyword]` | Search for a package |

### Application installation

| `pkg install xorg` | Install Xorg |
| `pkg install i3 i3 status i3lock dmenu` | Install i3WM |
| `pkg install firefox` | Install Firefox |
| `pkg install w3m w3m-img` | Install w3m |
| `pkg install mpv` | Install mpv |
| `pkg install htop` | Install htop |
  
### Getting network running

+ `ifconfig -a`, pick the network interface 
+ `dhclient [network interface]`

### Set i3 as default WM

+ `echo 'exec i3' >> ~/.xinitrc`

### Starting Xorg

+ `startx`

### Shutdown & reboot

+ `poweroff` or `shutdown -p now`
+ `reboot`