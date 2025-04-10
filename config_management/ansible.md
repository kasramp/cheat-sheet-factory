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

Dry run a single ansible inventory:

```
$ ansible [section] --limit [host] -m ping
$ ansible databases --limit db01 -m ping
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

To override configuration per host, one can create a `host_vars` directory and then create a directory named after each host in the `inventory` file like follow:

```
# file path and name: host_vars/web01
---
host: 192.168.0.3
port: 33 # ssh port
become_ask_pass: true
# custom variable
custom_db_port: 1234
```

Getting a diff between `/etc/ansible/ansible.cfg` and custom `ansible.cfg`:

```
$ ansible-config dump --only-changed
```
