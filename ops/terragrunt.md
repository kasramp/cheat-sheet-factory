---
title: Terragrunt
category: Ops
layout: 2017/sheet
updated: 2024-09-06
keywords:
    - "terragrunt"
    - "terraform"
intro: |
  Terragrunt Cheat sheet
---

Shortcuts
---------
{: .-one-column}

### Handy Terragrunt commands

| `terragrunt validate` | Validate a terraform file syntax |
| `terragrunt plan` | Dry run |
| `terragrunt apply`| Apply a terraform file |
| `terragrunt destroy` | Delete the resource

### Force destroy

Terragrunt does not have an explicit force destroy flag. To achieve a similar result, add this line to the resource file:

```
force_destroy = true
```

Then run `terragrunt destory` command.

### Installation

On macOS:

```bash
$ brew install terragrunt
```
