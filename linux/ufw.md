---
title: ufw
category: Linux
layout: 2017/sheet
updated: 2024-01-22
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

### Open/close HTTP

```bash
$ sudo ufw allow 80/tcp
$ sudo ufw deny 80/tcp
```

### Open/close SSH

```bash
$ sudo ufw allow 22/tcp
$ sudo ufw deny 22/tcp
```

### Close a port

```bash
$ sudo ufw deny 8080/tcp
```

### Reload config

```bash
$ sudo ufw reload
```

### Deleting a rule

```bash
$ sudo ufw status numbered
$ sudo ufw delete [2]
```

### Operate with app names

```bash
$ sudo ufw status
$ sudo ufw allow 'Apache Full'
$ sudo ufw delete allow 'Apache'
```
