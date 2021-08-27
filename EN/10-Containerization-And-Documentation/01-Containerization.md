# Containers and Docker

[slide hideTitle]

# Containerization

Often times when deploying an application to production, we face compatibilty problems.

We may have developed our application in a Linux environment, and trying to run it on Windows results in multiple errors.

Containerization solves this problem by running our applications in isolated environments called containers.

These containers use the same shared operating system and are essentially fully standalone packages.

They encapsulate the application's codebase, which includes all dependencies, binaries, libraries, and configurations.

Since each container is independent from the host OS, the applications can be run on different platforms, or in the cloud.

[/slide]

[slide hideTitle]

# VMs and Containers

There are two approaches when it comes to encapsulating an application - virtual machines and containers.

At the root of a VM is an operating system.

The Hypervisor provides hardware abstraction to the host OS.

This allows for the installation of guest OSes, used for running various applications.

Each guest OS process is fully isolated from its neighbours, meaning that they allocate separate system resources.

Visually, the guest OS envronment is indistinguishable from the host OS.

In a container, we once again have a host OS, but this time we also have a container runtime - Docker.

The Docker runtime environment allows us to use Linux features in order to create a jail.

Each jail encapsulates a container that can freely use all features and resources of the underlying host OS.

This is what makes containers different from VMs - the isolation is taken to a minimum.

To achieve this, container runtime environments use Linux cgroups (control groups) and namespaces.

Jails are created with the help of namespaces, by creating a lightweight OS instance on top of the existing one.

Control groups are used to set system resource limits for a given jail. 

[/slide]

[slide hideTitle]

# Solutions

There is a wide variety of container runtimes, the two most common being rkt (pronounced as "rocket") and Docker.

- rkt, made and maintained by CoreOS - [https://coreos.com/rkt](https://coreos.com/rkt)

- Docker, by Docker Inc. - [https://www.docker.com](https://www.docker.com)

Docker has a larger user base, namely because it is often used with Kubernetes.

Kubernetes, also known as K8s, is an open-source system for automating deployment, scaling, and management of containerized applications.

[/slide]

[slide hideTitle]

# VMs and Containers

## Virtual Machines

Virtual machines are used to virualize a system's hardware by using the Hypervisor component.

This appoach allows for full isolation between processes.

As a downside, they use more system resources, the reason being the fully-fledged guest OS running on top of the host.

VMs allow us to run almost any OS, regardless of the underlying host OS.

## Containers

Containers virtualize the operating sytem itself, instead of the hardware.

This is a much lighter form of isolation.

The kernel is shared between all containers, significatntly reducing resource usage.

They run on the same OS.

[/slide]

[slide hideTitle]

# Containers Concepts (Docker View)

## Container Image

The relationship between a container and an image is analogous to that of classes and objects in Java.

The container is similar to a class, where each image is an instance of it.

## Container OS Image

The container image consists of multiple layers, the first one being the container OS image.

As the name suggests, it contains the operating system.

If you look at an image's file structure, you may notice folders like, `root`, `sys`, `var`, etc. - they are part of this layer.

## Container Repository

A container repository stores images, along with their dependencies.

For example, a popular public container repository is Docker Hub.

It contains images of many tools, such as relational database management systems (MySQL, MariaDB, etc.).

[/slide]

[slide hideTitle]

# Definitions

There are two important definitions in the context of containerization - images and containers.

Containers are processes that run on the host OS with a high degree of isolation.

An image allows for easier distribution of a container.

Take for example an image of the MariaDB RDBMSs.

The root layer is the host operating system - Ubuntu, followed by an installation of MariaDB.

When the image is ran, it becomes a container with a third, writable layer.

Since images themselves are read-only, this layer is used to store files created during runtime.

[/slide]
