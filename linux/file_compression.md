---
title: File Compression
category: Linux
layout: 2017/sheet
updated: 2021-07-29
keywords:
    - "file compression"
    - "tar.gz"
    - "tar.bz2"
    - "tar.xz"
    - "zip"
    - "rar"
    - "7z"
prism_languages: [bash]
intro: |
  Learn how to create and extract ten different compressed file formats in Linux
---

Shortcuts
---------
{: .-one-column}

## Packages to install

```bash
$ sudo apt install tar gzip bzip2 xz-utils zip unzip rar unrar p7zip-full p7zip-rar
````

## Formats

- .tar
- .gz
- .tar.gz
- .bz2
- .tar.bz2
- .xz
- .tar.xz
- .zip
- .rar
- .7z

### .tar

```bash
$ tar -cvf [file.tar] [files/directories] # create
$ tar -xvf [file.tar] # extract
$ tar -xvf [file.tar] -C [/path] # extract to a location
$ tar -xvf [file.tar] --overwrite # extract overwrite
$ tar -tvf [file.tar] # list content
```

### .gz

```bash
$ gzip [files] # create .gz of each file (remove original files)
$ gzip -k [files] # create .gz of each file (keep original files)
$ gzip -r [directory] # create .gz of a directory files
$ gzip -d / gunzip [file.gz] # extract
$ gzip -dr / gunzip [directory] # extract a directory
$ gzip -dk [file.gz] # keep the original file in a directory
$ gzip -l [file.gz] # list content
$ gzip -df / gunzip -f [file.gz] # extract overwrite
```

### .tar.gz

```bash
$ tar -cvzf [file.tar.gz] [files] [directories] # create
$ tar -xvzf [file.tar.gz]  # extract
$ tar -xvzf [file.tar.gz] -C [/path] # extract to a location
$ tar -xvzf [file.tar.gz] --overwrite # extract overwrite
$ tar -tvzf [file.tar.gz] # list content
```

### .bz2

```bash
$ bzip2 -z [files] # create .bz2 of each file (remove original files)
$ bzip2 -zk [files] # create gzip of each file (keep original files - no directory support)
$ bzip2 -zd / bunzip2 [file.bzip2] # extract
$ bzip2 -df / bunzip2 -f [file.bzip2] # extract overwrite
```

### tar.bz2

```bash
$ tar -cvjf [file.tar.gz] [files] [directories] # create
$ tar -xvjf [file.tar.gz]  # extract
$ tar -xvjf [file.tar.gz] -C [/path] # extract to a location
$ tar -xvjf [file.tar.gz] --overwrite # extract overwrite
$ tar -tvjf [file.tar.gz] # list content
```

### .xz

```bash
$ xz -z [files] # create .xz of each file (remove original files)
$ xz -zk [files] # create .xz of each file (keep original files - no directory support)
$ xz -zd /unxz [file.gz] # extract
$ xz -df /unxz [file.gaz] # extract overwrite
```

### .tar.xz

```bash
$ tar -cvJf [file.tar.gz] [files] [directories] # create
$ tar -xvJf [file.tar.gz]  # extract
$ tar -xvJf [file.tar.gz] -C [/path] # extract to a location
$ tar -xvJf [file.tar.gz]  --overwrite # extract overwrite
$ tar -tvJf [file.tar.gz] # list content
```

### .zip

```bash
$ zip [file.zip] [files] [directories] # create
$ unzip -l [file.zip] # list content
$ unzip [file.zip] # extract
$ unzip [file.zip] -d [/path] # extract to a path
$ zip -u [file.zip] [files] # add new files
$ zip -d [file.zip] [files] # remove files
$ unzip -o [file.zip] # extract overwrite
$ unzip -n [file.zip] # extract skip duplicates
$ zip [file.zip] [files] [directories] -e # create password protected
```

### .rar

```bash
$ rar a [file.rar] [files] [directories] # create
$ rar l [file.rar] # list content
$ unrar e [file.rar] # extract, doesn't preserve the structure
$ unrar x [file.rar] # extract, preserve the structure
$ unrar x [file.rar] [/path] # extract to a path, preserve structure
$ rar u [file.rar] [files] # add new files
$ rar d [file.rar] [files] # remove files
$ rar x [file.rar] -o+ # extract overwrite
$ rar x [file.rar] -o- # extract skip duplicates
$ rar p [file.rar] [files] # create password protected
```

### .7z

```bash
$ 7z a [file.7z] [files] [directories] # create
$ 7z l [file.7z] # list content
$ 7z e [file.7z] # extract, doesn't preserve structure
$ 7z x [file.7z] # extract, preserve structure
$ 7z x [file.7z] -o[/path] # extract to a path (no space after `o`)
$ 7z u [file.7z] [files] # add new files
$ 7z d [file.7z] [files] # remove files
$ 7a x [file.7z] -aoa # extract overwrite
$ 7a x [file.7z] -aos # extract skip duplicates
$ 7z a [file.7z] [files] -p # password protected
```
