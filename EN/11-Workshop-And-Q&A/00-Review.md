[slide hideTitle]

# Instructions and Resources

This is the **fifth** part of the **PathFinder** workshop.

[Download](https://videos.softuni.org/resources/java/Java-Spring-Advanced/Java-Spring-Advanced-Workshop-Project-2.zip) **the project from the previous part.**

In this **workshop**, we will deploy our project in **Docker**.

[/slide]

[slide hideTitle]

# Migrate Project to Gradle

In this **workshop**, we will change our project to **Gradle**.

In your project, delete all files and folders, except the **src** folder and the **pom.xml** file. Next to them, create **build.gradle** file.

[image assetsSrc="17-2-Project-Structure.png" /]

From the **pom.xml** copy all the **dependencies** and add them to the new **build.gradle** file.

```java
plugins {
	id 'org.springframework.boot' version '2.5.4'
	id 'io.spring.dependency-management' version '1.0.11.RELEASE'
	id 'java'
}

group = 'bg.softuni'
sourceCompatibility = '11'

repositories {
	mavenCentral()
}

dependencies {

	implementation 'org.springframework.boot:spring-boot-starter-security'
	implementation 'org.thymeleaf.extras:thymeleaf-extras-springsecurity5'

	implementation 'org.springframework.boot:spring-boot-starter-data-jpa'
	implementation 'org.springframework.boot:spring-boot-starter-thymeleaf'
	implementation 'org.springframework.boot:spring-boot-starter-web'
	implementation 'org.springframework.security:spring-security-crypto'
	implementation 'org.springframework.boot:spring-boot-starter-validation'
	implementation 'org.springframework.security:spring-security-crypto:5.5.2'
	implementation 'org.modelmapper:modelmapper:2.4.4'
	runtimeOnly 'mysql:mysql-connector-java'
	testImplementation 'org.springframework.boot:spring-boot-starter-test'
	testImplementation 'org.springframework.security:spring-security-test'
	testImplementation 'org.hsqldb:hsqldb'
}

test {
	useJUnitPlatform()
}
```

Be sure that the **project version** and the **dependency versions** are the same as in your **pom.xml** file.

After you are done, delete the **pom.xml** file.

When we **compile** the project, the following folders and files should appear:

[image assetsSrc="17-3-After-Compile.png" /]

If you start your project, it should be running as before.

[/slide]
