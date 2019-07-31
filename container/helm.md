---
title: helm
category: Container
layout: 2017/sheet
updated: 2019-07-31
keywords:
    - "helm"
    - "helm package manager"
intro: |
  Helm Cheat sheet
---

Shortcuts
---------
{: .-one-column}

### Handy helm commands

| `helm list` | List installed releases |
| `helm list --tiller-namespace [namespace]` | List installed releases for that namespace |
| `helm history --tiller-namespace [namespace] [project name]` | List all releases for that app in a namespace |
| `helm rollback --tiller-namespace [namespace] [project name] [revision]` | Rollback an app in a namespace to a specific version|
| `helmfile --selector app=[name] sync --args --recreate-pods` | Pod recreation for an app, with downtime |
| `helmfile --selector app=[name] sync` | Restart an app without down time, hot swap |


### Reference

[https://gist.github.com/tuannvm/4e1bcc993f683ee275ed36e67c30ac49](https://gist.github.com/tuannvm/4e1bcc993f683ee275ed36e67c30ac49)
