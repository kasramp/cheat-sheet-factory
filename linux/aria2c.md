---
title: aria2c
category: Linux
layout: 2017/sheet
updated: 2022-08-22
keywords:
    - "aria2c"
    - "aria2"
    - "aria2c cheatsheet"
prism_languages: [bash]
intro: |
  Aria2c cheatsheet
---

Shortcuts
---------
{: .-one-column}

### RPC mode

```bash
$ aria2c --enable-rpc
```

### Concurrent download with file split

```bash
$ aria2c -x 16 -s 16 [LINK]
```
