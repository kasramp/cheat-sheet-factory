---
title: kubectl
category: Container
layout: 2017/sheet
tags: [Featured]
updated: 2018-11-17
keywords:
    - "kubectl"
    - "Kubernetes kubectl"
intro: |
  Kubectl cheat sheet
---

Shortcuts
---------
{: .-two-column}

### Handy kubectl commands

| `kubectl get pods -n [namespace]` | Lists pods |
| `kubectl logs -n [namespace] [podname] -f` | Tails logs for a pod in a namespace |
| `kubectl config view` | Shows configurations |
| `kubectl config view` | Shows configurations |
| `kubectl get services` | Lists all services in the namespace |
| `kubectl get pods --all-namespaces` | List all pods in all namespaces |
| `kubectl get deployment my-dep` | List a particular deployment |