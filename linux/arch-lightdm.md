---

title: Arch LightDM 
category: Linux
layout: 2017/sheet
updated: 2021-08-01
keywords:
    - "Arch"
    - "Linux"
    - "LightDM"
    - "LightDM slick greeter"
prism_languages: [bash]
intro: |
  How to set and customize LightDM on Arch Linux with Slick greeter
---

Shortcuts
---------
{: .-one-column}

## Packages to install

```bash
$ sudo pacman -Sy lightdm 
$ sudo systemctl enable lightdm.service
$ sudo reboot 
````

If you get `[FAILED] Failed to start Light Display Manager` install,

```bash
$ sudo pacman -Sy lightdm-gtk-greeter # installs the default greeter
$ sudo reboot
```

### Change GTK greeter background

```bash
$ sudo cp background.jpg /usr/share/pixmaps/
$ sudo vim /etc/lightdm/lightdm-gtk-greeter.conf
```

Add this section,

```
[greeter]
background=/usr/share/pixmaps/background.jpg
```

Then reboot the system or use `dm-tool` to test.

```bash
$ dm-tool switch-to-greeter
```

**Note**: dm-tool doesn't work when switching a greeter. It requires a reboot.

### GUI tool to customize GTK greeter


```bash
$ sudo pacman -Sy lightdm-gtk-greeter-settings
```

## Switch to Slick greeter

```bash
$ yay -S lightdm-slick-greeter
```

To use the slick greeter as default, edit `/etc/lightdm/lightdm.conf`

```
[Seat:*]
greeter-session=lightdm-slick-greeter
```

Then reboot the system

### Change Slick greeter background


Create a file `/etc/lightdm/slick-greeter.conf` and add the following:

```
[Greeter]
background=/usr/share/pixmaps/background.jpg
```

### GUI tool to customize Slick greeter

```bash
$ yay -S lightdm-settings
```
