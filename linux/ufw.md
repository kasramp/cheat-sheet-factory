---
title: ufw
category: Linux
layout: 2017/sheet
updated: 2022-10-10
keywords:
    - "ufw"
    - "ufw firewall"
    - "ufw cheatsheet"
    - "ufw netfilter firewall"
prism_languages: [bash]
intro: |
  UFW cheatsheet
---

Shortcuts
---------
{: .-one-column}

### Install UFW

```bash
$ sudo apt install ufw
```

### Enable UFW

```bash
$ sudo ufw enable
```

### Get status

```bash
$ sudo ufw status
```

### Open a port

```bash
$ sudo ufw allow 8080/tcp
$ sudo ufw allow 1194/udp
$ sudo ufw allow 43994 # opens both tcp and udp
```

### Close a port

```bash
$ sudo ufw deny 8080/tcp
```

### Reload config

```bash
$ sudo ufw reload
```
