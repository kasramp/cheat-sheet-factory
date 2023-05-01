---
title: grep
category: Linux
layout: 2017/sheet
updated: 2023-05-01
keywords:
    - "wget"
    - "wget cheatsheet"
prism_languages: [bash]
intro: |
  Wget cheatsheet
---

Shortcuts
---------
{: .-one-column}

### Recursive download (current directory)

```bash
$ wget -r --no-parent http://firmware.openbsd.org/firmware/7.1/
```

### Recursive download (no robots follow)

```bash
$ wget -r --no-parent -e robots=off https://ftp.openbsd.org/pub/OpenBSD/songs/
```

### Save to a custom path

```bash
$ wget -P "PATH" "DOWNLOAD_URL"
```
