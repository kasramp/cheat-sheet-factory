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
$ tar -cvf [file.tar] [files] # create
$ tar -xvf [file.tar] # extract
$ tar -xvf [file.tar] -C [/path] # extract to a location
$ tar -xvf [file.tar] --overwrite # extract overwrite
$ tar -tvf [file.tar] # list the content
```

### .gz

```bash
$ gzip [filenames] # create gzip of each file and removes the original file
$ gzip -k [filenames] # create gzip of each file and keep the original files
$ gzip -r [directory] # create gzip of directory
$ gzip -d / gunzip [file.gz] # decompress file
$ gzip -dr /gunzip [directory] # decompress directory
$ gzip -dk [file.gz] # keep the original directory
$ gzip -l [file.gz] # see the content
$ gzip -df / gunzip -f [file.gz] # decompress overwrite
```

### .tar.gz

```bash
$ tar -cvzf [file.tar.gz] [files] [directories] # create .tar.gz
$ tar -xvzf [file.tar.gz]  # extract .tar.gz
$ tar -xvzf [file.tar.gz] -C [/path] # extract to a location
$ tar -xvzf [file.tar.gz] --overwrite # extract overwrite
$ tar -tvzf [file.tar.gz] # list the content
```

### .bz2

```bash
$ bzip2 -z [filenames] # create gzip of each file and removes the original file
$ bzip2 -zk [filenames] # create gzip of each file and keep the original files - bzip2 has no directory support
$ bzip2 -zd / bunzip2 [file.bzip2] # decompress file
$ bzip2 -dk /bunzip2 -k [file.bzip2] # keep the original directory
$ bzip2 -df / bunzip2 -f [file.bzip2] # decompress overwrite
```

### tar.bz2

```bash
$ tar -cvjf [file.tar.gz] [files] [directories] # create .tar.gz
$ tar -xvjf [file.tar.gz]  # extract .tar.gz
$ tar -xvjf [file.tar.gz] -C [/path] # extract to a location
$ tar -xvjf [file.tar.gz] --overwrite # extract overwrite
$ tar -tvjf [file.tar.gz] # list the content
```

### .xz

```bash
$ xz -z [filenames] # create gzip of each file and removes the original file
$ xz -zk [filenames] # create gzip of each file and keep the original files - bzip2 has no directory support
$ xz -zd /unxz [file.gz] # decompress file
$ xz -dk /unxz [file.gz] # keep the original directory
$ xz -df /unxz [file.gaz] # decompress overwrite
```

### .tar.xz

```bash
$ tar -cvJf [file.tar.gz] [files] [directories] # create .tar.xz
$ tar -xvJf [file.tar.gz]  # extract .tar.xz
$ tar -xvJf [file.tar.gz] -C [/path] # extract to a location
$ tar -xvJf [file.tar.gz]  --overwrite # extract overwrite
$ tar -tvJf [file.tar.gz] # list the content
```

### .zip

```bash
$ zip [file.zip] [files/directories] # create a zip file
$ unzip -l [file.zip] # list content
$ unzip [file.zip] # extract a file
$ unzip [file.zip] -d [path] # unzip to a path
$ zip -u [file.zip] [new_file] # add a new file
$ zip -d [file.zip] [file] # remove a file
$ unzip -o [file.zip] # unzip overwrite
$ unzip -n [file.zip] # skip duplicates
$ zip [file.zip] [files/directories] -e # create a password protected zip
```

### .rar

```bash
$ rar a [file.rar] [files/directories] # create a rar file
$ rar l [file.rar] # list content
$ unrar e [file.rar] # extract rar file, doesn't preserve the structure
$ unrar x [file.rar] [path] # extract to a path, preserve structure as well
$ rar u [file.rar] [new_file] # add a new file 
$ rar d [file.rar] [file] # remove a file
$ rar x [file.rar] -o+ # overwrite
$ rar x [file.rar] -o- # skip duplicates
$ rar p [file.rar] [files] # password protect
```

### .7z

```bash
$ 7z a [file.7z] [files/directories] # create a 7z file
$ 7z l [file.7z] # list content
$ 7z e [file.7z] # extract 7z file doesn't preserve structure
$ 7z x [file.7z] # extract 7z file
$ 7z x [file.7z] -o[path] # extract to a path (no space after `o`)
$ 7z u [file.7z] [new_file] # add a new file 
$ 7z d [file.7z] [file] # remove a file
$ 7a x [file.7z] -aoa # overwrite  
$ 7a x [file.7z] -aos # skip duplicates
$ 7z a [file.7z] [files] -p # password protect
```
