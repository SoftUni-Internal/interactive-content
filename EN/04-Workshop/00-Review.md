[slide hideTitle]

# Instructions and Resources

This is the **fourth** part of the **PathFinder** workshop. You can find the previous **three** parts in the **Java Spring Fundamentals** course.

[Download](https://videos.softuni.org/resources/java/Java-Spring-Fundamentals/Java-Spring-Fundamentals-Workshop-Project-3.zip) **the project from the previous Fundamentals course.**

[Download](https://videos.softuni.org/resources/java/Java-Spring-Advanced/Java-Spring-Advanced-Workshop-Project-1.zip) **the completed project for this part.**

For this workshop, we will work with the **spring security** and add a **comment section**.

[/slide]

[slide hideTitle]

# Add Dependencies

As we have done in the previous lessons, we will need to add the two dependencies:

- **spring-boot-starter-security**
- **thymeleaf-extras-springsecurity5**

Open the **pom.xml** file located in the root folder and add them.

```xml
	<dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-security</artifactId>
        </dependency>
        <dependency>
            <groupId>org.thymeleaf.extras</groupId>
            <artifactId>thymeleaf-extras-springsecurity5</artifactId>
        </dependency>
```

After adding them, you can press **Ctrl+Shift+O**, or click the **Load Maven Changes** to add the **dependencies**.

[image assetsSrc="00-Add-Marven-Dependencies.png" /]

After waiting some, time you will have the **dependencies**, and there will be no errors.

[/slide]
