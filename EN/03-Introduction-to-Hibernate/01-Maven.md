[slide hideTitle]

# Maven

Maven is a project management framework. It is used to describe how software is built and it's dependencies.

It is using with **XML** files.

The concept of Maven is built around form lifecycle.

That's mean the process around building a particular project is clearly defined.

It is only necessary for us, to learn a small list of commands to build any Maven project. 

The **Pom** file will ensure we get the results we desired.

Projects are configured using a Project Object Model, which is stored in the **pom.xml** file.

Now, let's create our project from the beginning.

- Select "Maven" project from the new project panel:

[image assetsSrc="Hibernate.jpg" /]

- Choose the name of the project, current Project group, and project version.

[image assetsSrc="Hibernate(2).jpg" /]

- Set up project **name** and **location.**

[image assetsSrc="Hibernate(3).png" /]

- Enable Maven **auto-import.**

[image assetsSrc="Hibernate(4).png" /]

[/slide]

[slide hideTitle]

# Maven Configurations

A Project Object Model (**POM**) is the fundamental unit of work in Maven.

All of the configurations are held in the pom.xml file.

That's means when we execute a task or goal, Maven search for the POM file in the current directory.

Take a look at the POM file and dependencies inside.


## Pom Model:

```
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

## Dependencies:

Dependencies are set with \<dependency\> tag.

```
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
