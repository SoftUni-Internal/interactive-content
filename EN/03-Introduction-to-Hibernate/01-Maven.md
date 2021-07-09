# Maven

[slide hideTitle]

# Maven Overview

Maven is a project management framework. 

It manages the build and dependencies of our project, using **XML** files.

The concept of Maven revolves around the form lifecycle.

That means that the process around building a particular project is clearly defined.

To build a Maven project, we only need to learn a small list of commands.

The **POM** ensures we achieve the desired results.

The Project Object Model, stored in the **pom.xml** file, holds the configuration of our project.

[/slide]

[slide hideTitle]

# Maven Overview

Now, let us create a new project by using Maven.

- Select "**Maven**" project from the new project panel:

[image assetsSrc="Hibernate.jpg" /]

- Choose the name of the project, the current Project group, and the project version:

[image assetsSrc="Hibernate(2).jpg" /]

- Set up the **name** and **location**:

[image assetsSrc="Hibernate(3).png" /]

- Enable Maven **auto-import**:

[image assetsSrc="Hibernate(4).png" /]

[/slide]

[slide hideTitle]

# Maven Configurations

A Project Object Model (**POM**) is the fundamental unit of work in Maven.

The `pom.xml` file contains all configurations.

When executing a task or goal, Maven looks for this file in the current directory.

Let us take a look at the POM file and its dependencies.


## POM Model

```xml
<build>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <configuration>
                    <source>15</source>
                    <target>15</target>
                </configuration>
            </plugin>
        </plugins>
    </build>
```

## Dependencies

We declare dependencies using the `<dependency>` tag:

```xml
<dependencies>
        <dependency>
            <groupId>org.hibernate</groupId>
            <artifactId>hibernate-core</artifactId>
            <version>5.4.22.Final</version>
        </dependency>
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <version>8.0.21</version>
        </dependency>
 </dependencies>
```


[/slide]
