---
title: PostgreSQL
category: Database
layout: 2017/sheet
updated: 2023-05-22
keywords:
    - "postgreSQL"
    - "postgres"
    - "postgres cheat sheets"
intro: |
  List of useful PostgreSQL commands
---

Shortcuts
---------
{: .-one-column}

### Basics

| `psql -U [postgres] -d [db] -h [host]` | Connect to a database |
| `psql -U [postgres] [db]` | Connect to a database shorthand |
| `\c [db] [username]` | Switch to a different database |
| `\c [db]` | Switch to a different database shorthand |
| `\l` | List all databases |
| `\dt` | List all tables |
| `\d [table name]` | Describe a table |
| `\dn` | List schemas |
| `\df` | List functions |
| `\dv` | List views |
| `\du` | List users and roles |
| `\g` | Execute previous command |
| `\s` | History |
| `\i [file name]` | Execute queries from a file |
| `\timing` | Turn query execution timing |
| `\q` | Quit |
{: .-shortcuts}

### Create and drop database, table

| `createdb [db name]` | Create a database |
| `dropdb [db name]` | Drop a database |
| `create table [table description]` | Create a table |
| `drop table [table name]` | Drop a table |

### Add remove user

| `createuser [user]` | Create a user |
| `createuser -s [user]` | Create a super user |
| `dropuser [user]` | Drop a user |

### Backup, restore

| `pg_dump -O [db name] > backup.pg_dump` | Backup a database |
| `psql -f backup.pg_dump [db name]` | Restore a database | 

### Start, stop and restart PostgreSQL

| `/etc/init.d/postgresql stop` | Stop PostgreSQL |
| `service postgresql stop` | Stop PostgreSQL |
| `/etc/init.d/postgresql start` | Start PostgreSQL |
| `service postgresql` | Start PostgreSQL |
| `/etc/init.d/postgresql restart` | Restart PostgreSQL |
| `service postgresql restart` | Restart PostgreSQL |
| `/etc/init.d/postgresql reload` | Reload PostgreSQL |
| `service postgresql reload` | Reload PostgreSQL |
