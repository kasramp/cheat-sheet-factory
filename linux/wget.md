---
title: grep
category: Linux
layout: 2017/sheet
updated: 2024-04-16
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

### Recursive download (current directory) and specific file extension

```bash
$ wget -r --no-parent -A .tgz 'https://cdn.openbsd.org/pub/OpenBSD/7.5/amd64'
```

### Recursive download (no robots follow)

```bash
$ wget -r --no-parent -e robots=off https://ftp.openbsd.org/pub/OpenBSD/songs/
```

### Save to a custom path

```bash
$ wget -P "PATH" "DOWNLOAD_URL"
```
