---
title: Ansible
category: Configuration Management
layout: 2017/sheet
updated: 2023-03-07
keywords:
    - "ansible"
    - "ansible configuration management"
intro: |
  Ansible Cheat Sheet
---

Shortcuts
---------
{: .-one-column}

### Inventory

```bash
[webserver]
web01
web02

[databases]
db[01:02]
```

### Configuration

Ansible configuration file can be overwritten by setting `ANSIBLE_CONFIG` environment variable. Otherwise it looks at the files in the following orders:

- `ansible.cfg` in the current directory
- `~/.ansible.cfg` in the home directory
- `/etc/ansible/ansible.cfg` default config in `/etc`

The file has two sections, `[default]` for defaults operation and `[privilate_escalation]` determines how ansible performs privilate escalation on managed hosts.

Example of `ansible.cfg` file:

```
[defaults]
inventory = ./inventory
remote_user = ansible # ssh username
ask_pass = false # when sshing to the machine

[privilege_escalation]
become = true # automatically use root
become_user = root
become_method = sudo # how to escalate privilege
become_ask_pass = false # don't ask password when switchin to root
```
