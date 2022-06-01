[slide hideTitle]

# Instructions and Resources

This is the **fifth** part of the **PathFinder** workshop.

[Download](https://videos.softuni.org/resources/java/Java-Spring-Advanced/Java-Spring-Advanced-Workshop-Project-1.zip) **the project from the previous part.**

[Download](https://videos.softuni.org/resources/java/Java-Spring-Advanced/Java-Spring-Advanced-Workshop-Project-2.zip) **the completed project for this part.**

For this workshop, we will work with the **Unit Testing**.

[/slide]

[slide hideTitle]

# Testing Project Structure

Usually a project is split into two **different directories**:

- **main**
- **test**

In this workshop, we will work in the **test** directory. We will create a few new classes and files, that will overwrite the already existing project.

First, we want to create a **resource** directory in the **test**. There we will create an **application.yaml**.

[image assetsSrc="13-Add-Directories.png" /]

As shown in the picture above, next to the **PathfinderprojectApplicationTests** class, we will create two new **packages**. We create:

- **service**
- **web**

In the **service** package, we create a **PathfinderUserDetailsServiceTest** class.

For the **web** package, we create a **CommentControllerTest** class.

In the **application.yaml** we want to add the following code:

```yml
spring:
  sql:
    init:
      mode: never
  jpa:
    hibernate:
      ddl-auto: create
```

[/slide]
