# Docker

[slide hideTitle]

# Docker Engine

The mission of Docker is to simplify the bulding and deployment of an application to the cloud.

Docker is a client-server application with three main components:

- dockerd daemon - the root component
- REST API - used for communication with the daemon
- Docker CLI - allows us to send commands to the API

Using the Docker CLI, we can manage containers, images, network settings, and data volumes (an alternative of the writable layer).

[/slide]

[slide hideTitle]

# Registries

We use registries to download pre-burned Docker images.

There are two types of registries - provided by Docker and third-party.

The Docker Cloud registry provides:

- Docker Hub [https://hub.docker.com/explore/](https://hub.docker.com/explore/)​

- Docker Store [https://store.docker.com/](https://store.docker.com/)

Third-party registries include Quay.io, Artifactory, Google Container Registry.

Many companies use third-party registries, such as Google Container Registry, because they allow for private storage of proprietary, internal images.

[/slide]

[slide hideTitle]

# Workflow

The DOCKER_HOST is at the heart of the Docker Workflow.

Using Docker CLI, we make REST requests to the Docker daemon, in the form of commands.

The `docker build` command is used to create a new image.

`docker run` bootstraps an already created image, by adding it to a container. 

We use `docker pull` to obtain an image from a remote registry and download it.

[/slide]