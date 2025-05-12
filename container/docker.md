---
title: Docker
category: Container
layout: 2017/sheet
updated: 2025-03-12
keywords:
    - "docker"
    - "docker container"
intro: |
  Docker Cheat sheet
---

Shortcuts
---------
{: .-one-column}

### Handy Docker commands

| `docker run -it ubuntu sh` | Run a container in interactive mode |
| `docker exec -it ubuntu sh` | SSH to a running container |
| `docker image` | Lists all the docker images |
| `docker rmi --force [image-name]` | Remove a docker container |
| `docker ps` | Shows running containers |
| `docker pull [image:revision]` | Pulls a docker image |

### Docker build from a Dockerfile

```bash
$ docker build -f path/Dockerfile -t imageName:lastest .
```

### Pruning

| `docker system prune` | Removes stopped containers, unused volumes, unused networks, and dangling images |
| `docker system prune -a` | All above plus images without container associations (suitable for freeing up space) |
| `docker volume prune` | Removes unused volumes |


### Container

| `docker container ls` | List of running containers |
| `docker container ls -a` | List of all ran containers |
| `docker container rm` | Remove a ran container |

### Image

| `docker images` | List all of the images |
| `docker image rm [IMG]` | Remove a docker image |

### Volume

| `docker volume ls` | List all volumes |
| `docker volume rm [V_NAME]` | Remove a volume |
| `docker volume prune` | Remove all unsed volumes |

### Docker compose

Assign a name to a docker compose container group,

In docker-compose v1:

```bash
$ docker-compose -f docker-compose.yml -p CUSTOM_NAME up
```

In docker compose v2, add `name` after version and run:

```bash
$ docker compose -f docker-compose.yml up
```
