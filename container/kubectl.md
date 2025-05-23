---
title: kubectl
category: Container
layout: 2017/sheet
updated: 2025-05-11
keywords:
  - kubectl
  - Kubernetes kubectl
prism_languages: [bash, yml]
---

Getting started
---------
{: .-one-column}

### Basics

Kubernetes is a container orchestration service. It has a master node which we can communicate with it through `kubectl`.

The master node manages other nodes that run pods. `kubectl` will be run on nodes by the master node. Each node can run multiple pods, and each pod runs a container. 

Deployment and service files can be generated using Helm, handcrafted manually, or using [Kompose](https://github.com/kubernetes/kompose) to convert docker-compose files to Kubernetes deployment files.

A deployment is a blue print of a pod.

A pod can contain multiple containers.

Master node components consist of:

- `Store (etcd)` - like a database, stores information on which node to track
- `Controller Manager` - to manage request. Whenever a request comes-in, the manager control and schedules it
- `Scheduler` - determines when a pod comes to live or goes a way
- `API server` - a set of rest APIs to interact with Kubernetes master node, usually through `kubectl`. It accepts `YAML` or `JSON`

To have pods up and running we need to have `deployment` scripts which effectively are blueprint of pods. To have each pod communicate with each other or even expose out of the cluster, we need to have Kubernetes `service` to manage that.

A Kubernetes node consists of the followings:

- `Kubelet agent` - it's used by the master node to execute commands on and manage the node
- `Container runtime` - to run containers
- `Kube-proxy` - for networking and for example assign IP address to the pod

Kubernetes support multiple deployment strategies:

- `rolling update` - zero downtime on upgrading new versions
- `blue-green` - multiple environments running exactly the same time, once it's proven the new one is good, switch all traffic to the new one
- `canary` - a very small amount of traffic goes to the new deployment, once it's proven, swithc all traffic to the new one
- `rollback` - when deploy a new version and doesn't work, so rollbacking to the previous version

Pods live and die so their IP addresses will be changed. Services abstract pod IP addresses from consumers and allow them to access pods without the hassle of figuring out the IP address or anything else.

Different Kuberentes service types:

- `ClusterIP` - expose a service on a cluster-internal IP (default)
- `NodePort` - expose a service on each Node's IP at a static port (allows external access to a node on random 31XXX port)
- `LoadBalancer` - sits in front of nodes and provisions an external IP to act as a load balancer for the service (allows external access to a service with `localhost` and custom port set in service yaml file)
- `ExternalName` - map a service to a DNS name

Commands
---------
{: .-one-column}

### Handy kubectl commands

| `kubectl api-resources` | List supported resources by K8s |
| `kubectl version` | Get version |
| `kubectl cluster-info` | Get information about the cluster |
| `kubect get all` | All information about pod, services, deployments, etc. |
| `kubectl run [pod-name] --image=[image-name]` | To create a deployment and get a pod up and running |
| `kubectl expose [pod] [ports]` | Expose a port for a deployment, pod |
| `kubectl create [resource]` | Create a resource |
| `kubectl apply [resource]` | Create a resource if not exists or modify the existing |
| `kubectl get pods -n [namespace]` | List pods |
| `kubectl get pods -o wide -n [namespace]` | List pods with nodes information |
| `kubectl logs -n [namespace] [podname] -f` | Tail logs for a pod in a namespace |
| `kubectl logs -n [namespace] [podname] -c [containername] -f` | Tail logs for a container of a pod in a namespace |
| `kubectl logs -n [namespace] [podname] -p` | Get logs for a previous deployment |
| `kubectl config view` | Show configurations |
| `kubectl config view` | Show configurations |
| `kubectl get services` | List all services in the namespace |
| `kubectl get pods --all-namespaces` | List all pods in all namespaces |
| `kubectl get deployments` | List all deployments |
| `kubectl get deployment my-dep` | List a particular deployment |
| `kubectl get deployments` | List all deployments |
| `kubectl get deployment --show-labels` | List labels for all deployments |
| `kubectl scale --replicas=3 [name-of-deployment]` | Scale a replicaset to 3 |
| `kubectl delete pods [pod]` | Delete a pod (then it will be recreated) |
| `kubectl delete deployment [name-of-deployment]` | Delete pods without recreation |
| `kubectl delete pods [pod] --grace-period=0 --force` | Force delete a pod |
| `kubectl exec -it [pod] /bin/bash` | SSH to a pod |
| `kubectl exec -it [pod] --container [container_name] bash` | SSH to a container inside of a pod |
| `kubectl create --dry-run --validate -f pod-dummy.yaml -n [namespace]` | Dry run of pod |
| `kubectl -n [namespace] create -f [pod-file.yaml]` | Create a pod/deployment from a yaml file, throws error if pod already exists |
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
| `kubectl -n [namespace] describe pod [podname] -o yaml` | Describe a pod in Yaml |
| `kubectl -n [namespace] descirbe deployment [deployment name]` | Describe a deployment |
| `kubectl -n [namespace] get cronjobs` | List cron jobs |
| `kubectl -n [namespace] get jobs` | List jobs |
| `kubectl -n [namespace] delete job [jobname]` | Deletes a cron job |
| `kubectl get ns` | Get list of namespaces |
| `kubectl -n [namespace] describe externalsecret [secretname]` | Check status of secret sync from external (Secretmanager) |
| `kubectl -n [namespace] get deployment` | List deployments |
| `kubectl -n [namespace] rollout restart deployment` | Restarts pods one after another with no downtime |
| `kubectl -n [namespace] get certificates` | List all certificates |
| `kubectl -n [namespace] describe certificates [certificate-name]` | Describes a certificate |
| `kubectl -n [namespace] get secret [certificate-name] -o json > certificate.json` | Export a cert-manager certificate |
| `kubectl -n [namespace] get certificate [certificate-name] -o jsonpath='{.spec.secretName}' |
   xargs -I {} kubectl -n [namespace] get secret {} -o jsonpath='{.data.tls\.crt}'` | Extracting `tls.crt` from a cert in base64 |
| `kubectl -n [namespace] get certificate [certificate-name] -o jsonpath='{.spec.secretName}' | 
   xargs -I {} kubectl -n [namespace] get secret {} -o jsonpath='{.data.ca\.crt}'` | Extracting `ca.crt` from a cert decoded from base64 |

#### Deploying debug container (for installing tools to troubleshooting)

```bash
kubectl -n [namespace] debug -it [podname] --image=arunvelsriram/utils --target=[namespace] -- /bin/bash
```

### Copying file to/from K8s pods

| `kubectl -n [namespace] cp /tmp/tmp.txt [namespace]/[pod]:/tmp` | Copy from local to a pod |
| `kubectl -n [namespace] cp [namespace]/[pod]:/tmp/tmp.txt /tmp` | Copy from a pod to local |

### Port forwarding

| `kubectl -n [namespace] port-forward pod/[podname] hostport:podport` | Port forward a single pod |
| `kubectl -n [namespace] port-forward deployment/[deploymentname] hostport:podport` | Port forward a deployment |

Volumes
---------
{: .-one-column}

### Basics

There are multiple types of volumes:

- `emptyDir` - it's for ephemeral/transient data (needed by pod during its life), useful for sharing files between multiple containers running in a pod. When a pod goes down, this volume will go away.
- `hostPath` - pod mounts into a (worker) node's file system. Easy to set up but if the node goes down, the data will be lost.
- `nfs` - Network File System where a pod's mounting to an NFS.
- `configMap/secret` - it's for storing key value pairs and sensetive information.
- `persistentVolumeClaim` - provides pods with a persistent option which is abstracted out from pods' point of view.
- `cloud` - data is stored outside of the Kubernetes network.

A persistentVolume can be set up manually (static) or dynamically using StorageClass (SC).

ConfigMap
---------
{: .-one-column}

### ConfigMaps Basics

There are **four** ways to create a ConfigMap

- `literal`
- `manifesto`
- `config file`
- `env file`

### Creating ConfigMap by defining key/value directly (literal)

```bash
$ kubectl create configmap [map-name]
--from-literal=key1=value1
--from-literal=key2=value2
```

### Creating ConfigMap with manifesto file

Config map manifesto example,

```yml
appVersion: v1
kind: ConfigMap
metadata:
  name: myapp-configs
  labels:
    app: myapp-configs
data:
  key1: "value1"
  key2: "value2"
  specific.path.key: "value3"
```

### Creating ConfigMap using config file

Config file example,

```
key1=value1
key2=value2
specific.path.key=value3
```

Then save it in a file `example.config` and apply it,

```bash
$ kubectl create configmap [map-name] --from-file=~/example.config
```

The output would be,

```yml
appVersion: v1
kind: ConfigMap
data:
  example.config: |-
    key1=value1
    key2=value2
    specific.path.key=value3
```

It puts the configuration as a blob with the key being the filename.

### Creating ConfigMap using environment file

Environment file example,

```
key1=value1
key2=value2
specific.path.key=value3
```

Then save it in a file `example.env` and apply it,

```bash
$ kubectl create configmap [map-name] --from-env-file=~/example.env
```

The output would be,

```yml
appVersion: v1
kind: ConfigMap
data:
  key1=value1
  key2=value2
  specific.path.key=value3
```

### Reading ConfigMaps as Yaml

```bash
$ kubectl get cm [map-name] -o yaml
```

### Reading ConfigMaps as env vars

Need to configure the pod as follow,

```yml
spec:
  template: ...
  spec:
    containers: ...
    env:
    - name: [env-variable-name] # KEY1
      valueFrom:
        configMapKeyRef:
          name: [config-map-name] # myapp-configs
          key: [config-map-key] # key1
```

The above would be translated in an environment variable.

### Load all ConfigMaps in one

ConfigMaps as environment variables need to be imported one by one which can be tedious. To make it easier, all can be load in once,

```yml
spec:
  template: ...
  spec:
    containers: ...
      envFrom:
      - configMapRef:
        name: [config-map-name] # myapp-configs
```

Then the values of the ConfigMap would be accessible through environment variables.

### Load ConfigMaps as volumes

Each key would be converted to a file.

```yml
spect:
  template: ...
  spec: ...
    volumes:
      - name: [volume-name]
        configMap:
          name: [config-map-name] # myapp-configs
    containers:
      volumeMounts:
        - name: [volume-name]
          mountPath: [path] # /tmp
```

Secrets
---------
{: .-one-column}

### Creating literal secret

```bash
$ kubectl create secret generic [name-of-secret] 
--from-literal=[secret-key-1]=[secret-value-1]
--from-literal=[secret-key-2]=[secret-value-2]
```

### Creating secret from a file

```bash
$ kubectl create secret generic [name-of-secret] 
--from-file=[secret-key-file-name-1]=[file-path-1]
--from-file=[secret-key-file-name-2]=[file-path-2]
```

### Creating TLS secret

```bash
$ kubectl create secret tls tls-secret --cret=[path-to-cert] --key=[path-to-tls.key]
```

### Reading secrets as env vars

Need to configure the pod as follow,

```yml
spec:
  template: ...
  spec:
    containers: ...
    env:
    - name: [env-variable-name] # MY_SECRET
      valueFrom:
        secretKeyRef:
          name: [secret-name]
          key: [secret-key]
```

### Load secrets as volumes

```yml
spect:
  template: ...
  spec: ...
    volumes:
      - name: [volume-name]
        secret:
          secretName: [secret-name]
    containers:
      volumeMounts:
        - name: [volume-name]
          mountPath: [path] # /tmp
          readOnly: true
```

Miscellaneous
---------
{: .-one-column}

### Kubectl config for multiple clusters

```bash
export KUBECONFIG='stage-cluster.kubeconfig:prod-cluster.kubeconfig' # export kube configs for multiple clusters
kubectl config get-contexts # get list of contexts
kubectl config current-context # get current context in use
kubectl config use-context stage-cluster # switch to `stage-cluster` context
kubectl config use-context prod-cluster # switch to `prod-cluster` context
```

### Deploying a troubleshooting pod

```bash
$ kubectl -n [namespace] run my-shell --rm -i --tty --image ubuntu -- bash
```

Once exited from the shell, remove the pod.

```bash
$ kubectl -n [namespace] delete pod my-shell
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

## Reference
{: .-one-column}

- [https://github.com/kubernetes/examples](https://github.com/kubernetes/examples)
- [https://kubernetes.io/docs/reference/kubectl/cheatsheet/](https://kubernetes.io/docs/reference/kubectl/cheatsheet/)
- [https://github.com/dennyzhang/cheatsheet-kubernetes-A4](https://github.com/dennyzhang/cheatsheet-kubernetes-A4)
