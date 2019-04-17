---
title: kubectl
category: Container
layout: 2017/sheet
updated: 2019-04-17
keywords:
    - "kubectl"
    - "Kubernetes kubectl"
prism_languages: [bash]
intro: |
  Kubectl cheat sheet
---

Shortcuts
---------
{: .-one-column}

### Handy kubectl commands

| `kubectl get pods -n [namespace]` | List pods |
| `kubectl get pods -o wide -n [namespace]` | List pods with nodes information |
| `kubectl logs -n [namespace] [podname] -f` | Tail logs for a pod in a namespace |
| `kubectl logs -n [namespace] [podname] -p` | Get logs for a previous deployment |
| `kubectl config view` | Show configurations |
| `kubectl config view` | Show configurations |
| `kubectl get services` | List all services in the namespace |
| `kubectl get pods --all-namespaces` | List all pods in all namespaces |
| `kubectl get deployment my-dep` | List a particular deployment |
| `kubectl scale --replicas=3 rs/foo` | Scale a replicaset named 'foo' to 3 |
| `kubectl delete pods [pod]` | Delete a pod |
| `kubectl delete pods [pod] --grace-period=0 --force` | Force delete a pod |
| `kubectl exec -it [pod] /bin/bash` | SSH to a pod |
| `kubectl port-forward [pod] 8888:8080 -n [namespace]` | Port forwarding |
| `kubectl create --dry-run --validate -f pod-dummy.yaml -n [namespace]` | Dry run of pod |
| `kubectl -n [namespace] scale deployment [podname] --replicas=0` | Scale down to zero instances |
| `kubectl -n [namespace] scale deployment [podname] --replicas=2` | Scale to two instances |
| `kubectl -n [namespace] get deployment [servicename] -o yaml` | Get deployment details |
| `kubectl -n [namespace] get pods --watch` | Watch pods |
| `kubectl -n [namespace] exec [podname] env` | Get pod environment variables |
| `kubectl -n [namespace] top pod` | Get pods resource usage |
| `kubectl -n [namespace] delete pod [podname]` | Delete a pod |
| `kubectl -n [namespace] delete pod [podname] --grace-period=0 --force` | Force delete a pod |
| `kubectl -n [namespace] get ingresses` | Get ingresses list |
| `kubectl -n [namespace] edit deployment [servicename]` | Edit deployment, good for resource changes without downtime |
| `kubectl -n [namespace] edit hpa [servicename]` | Change horizontal scaling setting without downtime |
| `kubectl -n [namespace] get secret` | Get secret list |
| `kubectl -n [namespace] get secret --export -o yaml [secretname] > ~/secret.txt` | Export a secret |
| `kubectl -n [namespace] create secret generic [secretname] --from-file=~/secret.txt` | Create a secret |

### Kubectl config for multiple clusters

```bash
export KUBECONFIG='stage-cluster.kubeconfig:prod-cluster.kubeconfig' # export kube configs for multiple clusters
kubectl config get-contexts # get list of contexts
kubectl config current-context # get current context in use
kubectl config use-context stage-cluster # switch to `stage-cluster` context
kubectl config use-context prod-cluster # switch to `prod-cluster` context
```

### Reference

[https://kubernetes.io/docs/reference/kubectl/cheatsheet/](https://kubernetes.io/docs/reference/kubectl/cheatsheet/)

[https://github.com/dennyzhang/cheatsheet-kubernetes-A4](https://github.com/dennyzhang/cheatsheet-kubernetes-A4)
