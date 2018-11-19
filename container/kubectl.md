---
title: kubectl
category: Container
layout: 2017/sheet
updated: 2018-11-18
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
| `kubectl get pods --all-namespaces` | Lists all pods in all namespaces |
| `kubectl get deployment my-dep` | Lists a particular deployment |
| `kubectl scale --replicas=3 rs/foo` | Scales a replicaset named 'foo' to 3 |

### Reference

[https://kubernetes.io/docs/reference/kubectl/cheatsheet/](https://kubernetes.io/docs/reference/kubectl/cheatsheet/)