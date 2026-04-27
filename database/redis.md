---
title: Redis
category: Database
layout: 2017/sheet
updated: 2025-07-24
keywords:
    - "redis"
    - "redis cheat sheets"
prism_languages: [redis]
intro: |
  List of useful Redis commands
---

Shortcuts
---------
{: .-one-column}

### Redis clients

There are multiple Redis clients. The best command line is the official Redis client, called Redis CLI. To install it on Debian based distros:

```bash
$ sudo apt install redis-tools
```

### Connecting to a Redis cluster

```bash
$ redis-cli -u redis://[USERNAME]:[PASSWORD]@[HOST]:[PORT]
```

Example:

```bash
$ redis-cli -u redis://default:password@redis-10123.crce986.ca-central-1-1.ec2.redns.redis-cloud.com:17285
```

### List all the keys

```bash
127.0.0.1:6379> KEYS *
```

### Delete a key

```bash
127.0.0.1:6379> DEL [key_name]
```

### Show a hash field

```bash
127.0.0.1:6379> HGET [hash]  [field]
```

### Show the entire content of a hash

```bash
127.0.0.1:6379> HGETALL [hash]
```

### Remove a field from a hash

```bash
127.0.0.1:6379> HDEL [hash] [field] [field ...]
```

### Delete all the hashes (keys)

```bash
127.0.0.1:6379> FLUSHALL
```

### Show a TTL for a hash

```bash
127.0.0.1:6379> TTL [hash]
```
