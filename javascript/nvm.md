---
title: NVM
category: Javascript
layout: 2017/sheet
tags: [Featured]
updated: 2020-04-09
keywords:
  - "nvm"
  - "nvm cheat sheet"
  - "node version manager"
prism_languages: [bash]
intro: |
  NVM cheat sheet
---

{: .-two-column}

## Basics

### Installation

```bash
$ wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```

### Usage

#### Install latest version

```bash
$ nvm install node # install latest version
```

#### Install specific version

```bash
$ nvm install 6.14.4
```

#### List available version

```bash
$ nvm ls-remote
```

#### Install LTS

```bash
$ nvm install --lts
```

#### Use an installed version

```bash
$ nvm use node
```