# Docker in Action

[slide hideTitle]

# Docker Installation

Docker comes in two editions - Community and Enterprise.

Docker requires a local installation, and it has separate Linux, macOS, and Windows versions.

Since only Linux has support for control groups and namespaces, versions for other operating systems work on top of a virtual machine.

Linux Docker versions are deployed via a package system, in three separate channels:

- `stable` - the latest tested production version 
- `nightly` - contains the newest changes, but is very unstable
- `test` - used for development purposes

There are specific requirements for macOS and Windows, such as OS version, Hypervisor, etc.

The Docker Toolbox (deprecated) provided an all-in-one solution for Windows and macOS, which included a GUI.

[/slide]

[slide hideTitle]

# Working with Docker

## Pull/Image Pull

When creating your own image, you will most often start with a base image from the Docker Hub.

Pre-built images make the process of creating an image easier.

The `pull` command pulls an image or a repository from a registry:

```
docker pull [OPTIONS] NAME[:TAG|@DIGEST]
```

For example, we can pull an Ubuntu image as follows:

```
docker pull ubuntu

latest: Pulling from library/ubuntu
5a132a7e7af1: Pull complete
fd2731e4c50c: Pull complete
28a2f68d1120: Pull complete
a3ed95caeb02: Pull complete
Digest: sha256:9c25ccf269ee113168c145b23dee08af5e43a7fea6c4c9722f87876677c5cb2
Status: Downloaded newer image for ubuntu:latest
```

As we mentioned earlier, Docker images are multilayered.

In this example, the Ubuntu image has four layers, each with a unique digest (e.g. `5a132a7e7af1`).

Docker prints the digest of the image after the pull has finished. 

In the example above, the digest of the image is:

```
sha256:9c25ccf269ee113168c145b23dee08af5e43a7fea6c4c9722f87876677c5cb2
```

We can also specify the version of an image by passing in a digest, like "13.1" for example:

```
$ docker pull fedora:13.1

13.1: Pulling from library/fedora
5a132a7e7af1: Pull complete
fd2731e4c50c: Pull complete
28a2f68d1120: Pull complete
a3ed95caeb02: Pull complete
Digest: sha256:45b23dee08af5e43a7fea6c4cf9c25ccf269ee113168c19722f87876677c5cb2
Status: Downloaded newer image for fedora:13.1
```

[/slide]