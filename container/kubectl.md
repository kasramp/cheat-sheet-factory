---
title: kubectl
category: Container
layout: 2017/sheet
updated: 2020-09-22
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

### Basics

Kubernetes is a container orchestration service. It has a master node which we can communicate with it through `kubectl`.
The master node manages other nodes that run pods. `kubectl` will be run on nodes by the master node. Each node can run
multiple pods, and each pod runs a container. 

Master node components consist of:

- `Store (etcd)` - like a database, stores information on which node to track
- `Controller Manager` - to manage request. Whenever a request comes-in, the manager control and schedules it
- `Scheduler` - determines when a pod comes to live or goes a way
- `API server` - a set of rest APIs to interact with Kubernetes master node, usually through `kubectl`. It accepts `YAML` or `JSON`

To have pods up and running we need to have `deployment` scripts which effectively are blueprint of pods. To have each
pod communicate with each other or even expose out of the cluster, we need to have Kubernetes `service` to manage that.

A Kubernetes node consists of the followings:

- `Kubelet agent` - it's used by the master node to execute commands on and manage the node
- `Container runtime` - to run containers
- `Kube-proxy` - for networking and for example assign IP address to the pod
 
### Handy kubectl commands

| `kubectl version` | Get version |
| `kubectl cluster-info` | Get information about the cluster |
| `kubect get all` | All information about pod, services, deployments, etc. |
| `kubectl run [pod-name] --image=[image-name]` | To create a deployment and get a pod up and running |
| `kubectl port-forward [pod] [ports]` | Forward a port for external access |
| `kubectl expose [pod] [ports]` | Expose a port for a deployment, pod |
| `kubectl create [resource]` | Create a resource |
| `kubectl apply [resource]` | Create a resource if not exists or modify the existing |
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
| `kubectl delete pods [pod]` | Delete a pod (then it will be recreated) |
| `kubectl delete deployment [name-of-deployment]` | Delete pods without recreation |
| `kubectl delete pods [pod] --grace-period=0 --force` | Force delete a pod |
| `kubectl exec -it [pod] /bin/bash` | SSH to a pod |
| `kubectl port-forward [pod] 8888:8080 -n [namespace]` | Port forwarding |
| `kubectl create --dry-run --validate -f pod-dummy.yaml -n [namespace]` | Dry run of pod |
| `kubectl -n [namespace] create -f [pod-file.yaml]` | Create a pod from a yaml file, throws error if pod already exists |
| `kubectl -n [namespace] apply -f [pod-file.yaml]` | Create or update a pod (Better replacement of the above) |
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
| `kubectl -n [namespace] describe pod [podname]` | Describe a pod with useful information |


### Kubectl config for multiple clusters

```bash
export KUBECONFIG='stage-cluster.kubeconfig:prod-cluster.kubeconfig' # export kube configs for multiple clusters
kubectl config get-contexts # get list of contexts
kubectl config current-context # get current context in use
kubectl config use-context stage-cluster # switch to `stage-cluster` context
kubectl config use-context prod-cluster # switch to `prod-cluster` context
```

### Run Kubernetes in local

- `minikube`
- `docker desktop` (is only available for mac and Windows)

### Enable Web UI (dashboard)

To have an overview and a nice UI for K8s, you can enable Web UI dashboard as following,

```bash
$ kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.0.0/aio/deploy/recommended.yaml
$ kubectl describe secret -n kube-system # adds the token and get the token
$ kubectl proxy # give a url
```

Then go to the url and past the token.

More details [here](https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/)

### Reference

[https://kubernetes.io/docs/reference/kubectl/cheatsheet/](https://kubernetes.io/docs/reference/kubectl/cheatsheet/)

[https://github.com/dennyzhang/cheatsheet-kubernetes-A4](https://github.com/dennyzhang/cheatsheet-kubernetes-A4)
