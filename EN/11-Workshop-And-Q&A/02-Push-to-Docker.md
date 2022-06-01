[slide hideTitle]

# Install Docker

First, you want to **register** On the **official docker site**: [https://hub.docker.com/signup](https://hub.docker.com/signup).

Next, you want to install **Docker Desktop** on your computer:
[https://docs.docker.com/desktop/windows/install/](https://docs.docker.com/desktop/windows/install/).

Be sure to read the documentation because you need to have **enabled virtualization** and **WSL 2** or **Hyper-V** containers. The documentation on the site describes how to set it up.

[/slide]

[slide hideTitle]

# Build Docker

Next, we will **locally build** our project for the **docker hub**. In the terminal, we will type:

```cmd
docker build -t {username}/pathfinder:v1 -f deployment/Dockerfile .
```

Be sure to write your own **{username}** in the command.

[image assetsSrc="19-Docker-Build.png" /]

If there are no errors, your project should be built **locally**.

[/slide]

[slide hideTitle]

# Docker Push

Before we push our local changes, we want to log in to the site with our **command prompt**. Type **docker login** and then your credentials.

```cmd
docker login
{your username}
{your password}
```

[image assetsSrc="21-Docker-Login.png" /]

If everything is ok, we will see **Login Succeeded** message.

Now we can push the project to our **docker** profile.

[image assetsSrc="22-Docker-Push.png" /]

If you check your **repository**, you should see it there. Just replace **yourusername** with your own.

[https://hub.docker.com/repository/docker/{yourusername}/pathfinder](https://hub.docker.com/repository/docker/{yourusername}/pathfinder)

[/slide]
