---
title: kubectl
category: Container
layout: 2017/sheet
updated: 2019-01-30
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

| `kubectl get pods -n [namespace]` | List pods |
| `kubectl logs -n [namespace] [podname] -f` | Tail logs for a pod in a namespace |
| `kubectl config view` | Show configurations |
| `kubectl config view` | Show configurations |
| `kubectl get services` | List all services in the namespace |
| `kubectl get pods --all-namespaces` | List all pods in all namespaces |
| `kubectl get deployment my-dep` | List a particular deployment |
| `kubectl scale --replicas=3 rs/foo` | Scale a replicaset named 'foo' to 3 |
| `kubectl delete pods [pod]` | Delete a pod |
| `kubectl delete pods [pod] --grace-period=0 --force` | Force delete a pod |
| `kubectl exec -it [pod] /bin/bash` | SSH to a pod |


## Kubectl config for multiple clusters

```bash
export KUBECONFIG='stage-cluster.kubeconfig:prod-cluster.kubeconfig' # export kube configs for multiple clusters
kubectl config get-contexts # get list of contexts
kubectl config current-context # get current context in use
kubectl config use-context stage-cluster # switch to `stage-cluster` context
kubectl config use-context prod-cluster # switch to `prod-cluster` context
```

### Reference

[https://kubernetes.io/docs/reference/kubectl/cheatsheet/](https://kubernetes.io/docs/reference/kubectl/cheatsheet/)

