---
title: grep
category: Linux
layout: 2017/sheet
updated: 2022-06-22
keywords:
    - "grep"
    - "grep cheatsheet"
prism_languages: [bash]
intro: |
  Grep cheatsheet
---

Shortcuts
---------
{: .-one-column}

### OR

```bash
$ cat file.txt | grep 'hello\|world' # searches for 'hello' or 'world'
```

### AND

```bash
$ cat file.txt | grep 'hello' | grep 'world' # and using pipe operation

$ cat file.txt | grep -E 'hello.*world'
```

### NOT

```bash
$ cat file.txt | grep -v 'hello' # search for all patterns that do not have 'hello'
```

### Ignore case

```bash
$ cat file.txt  | grep -i 'blah' # search for blah in any casing format
```
