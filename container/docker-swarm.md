---
title: Docker Swarm
category: Container
layout: 2017/sheet
updated: 2024-10-02
keywords:
    - "docker"
    - "docker swarm"
intro: |
  Docker Swarm Cheat sheet
---

Shortcuts
---------
{: .-one-column}

### Handy Docker Swarm commands

| `docker swarm init` | Initialization of swarm mode |
| `docker stack deploy -c docker-compose.yml [name-stack]` | Deploy a stack to Docker Swarm |
| `docker service ls` | Check the services |
| `docker service ps [service-name]` | Check tasks (containers) |
| `docker service scale [service-name]=5` | Scale the service to five |
| `docker service update --image [image:tag] [service-name]` | Rolling update |
| `docker service rm [service-name]` | Remove a service |
| `docker stack rm [name-stack]` | Remove a stack |

### Service vs Stack

Service refers to an entry in `docker-compose.yml` file, whereas Stack usually
refers to the entire `docker-compose.yml` which is composed of some interrelated
services. Services in a stack can be scaled, not the stack itself.
