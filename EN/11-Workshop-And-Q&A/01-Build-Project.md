[slide hideTitle]

# Hide Database

If we will deploy our project, we want to hide our **database connection**. We don't want other people to access it.

We will go to the **application.yml** and change the **URL parameter**.

[image assetsSrc="17-0-Find-Application-YML.png" /]

```java
url: "jdbc:mysql://${MYSQL_HOST:localhost}:3306/pathfinder?allowPublicKeyRetrieval=true&useSSL=false&createDatabaseIfNotExist=true&serverTimezone=UTC"
```

If someone finds the code for the project, he will not know the value for **MYSQL_HOST** and he won't be able to connect to our database.

[/slide]

[slide hideTitle]

# Build Project

The next thing we want to do is to **build our project**. To do this open the **terminal** or **command prompt** of your **root project** folder and type:

```cmd
./gradlew clean build
```

[image assetsSrc="18-Gradle-Clean-Install.png" /]

This will create a **build** folder inside your project. We need this folder because this is the folder we will **deploy** to the public.

[/slide]

[slide hideTitle]

# Setup Docker File

The next thing we want to do is create a directory called **deployment** and file **Dockerfile** file. This file will tell the **image** to deploy the build folder.

[image assetsSrc="18-1-Add-DockerFile.png" /]

Here we add the following code:

```docker
FROM openjdk:11.0.7-jre

COPY build/libs/pathfinder.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
```

Be sure that the **JDK version** matches your project.

[/slide]
