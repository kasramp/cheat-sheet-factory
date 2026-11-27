---
title: rclone
category: Linux
layout: 2017/sheet
updated: 2026-11-27
keywords:
    - "rclone"
    - "rclone cheatsheet"
    - "open directory size"
prism_languages: [bash]
intro: |
  Rclone cheatsheet
---

Shortcuts
---------
{: .-one-column}

### Size of an open directory (HTTP listing), without downloading

```bash
$ rclone size :http: --http-url "https://example.com/some/dir/"
```

### Browse an open directory's sizes interactively

```bash
$ rclone ncdu :http: --http-url "https://example.com/some/dir/"
```

### Open directory size when the server rate-limits (HTTP 429)

```bash
$ rclone size :http: --http-url "https://example.com/some/dir/" \
    --tpslimit 2 --checkers 1 \
    --retries 5 --low-level-retries 20
```
