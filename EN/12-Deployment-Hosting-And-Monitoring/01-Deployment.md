# Deployment

[slide hideTitle]

# What is Deployment?

Deployment means to push changes or update from one environment to another.

Most software platforms use a deployment pipeline to streamline the process.

There are four main stages of a deployment pipeline:

- Version Control
- Acceptance Tests
- Independent Deployment
- Production Deployment

[/slide]

[slide hideTitle]

# Where to Deploy?​

There are multiple platforms that allow us to deploy an application.

The most popular ones are:

- Heroku - [https://id.heroku.com/login](https://id.heroku.com/login)

- Amazon Web Services (AWS) - [https://aws.amazon.com/](https://aws.amazon.com/)

- Google Cloud Platform - [https://cloud.google.com/](https://cloud.google.com/)

[/slide]

[slide hideTitle]

# Deploying on Heroku

In this lesson, we are going to learn how to deploy an application on Heroku.

There are three possible approaches:

- Using Git 
  * you need to install Heroku Git and Heroku CLI 

- Using GitHub

- Using the Container Registry (Heroku CLI)

[/slide]

[slide hideTitle]

# Procfile and System.properties​

In order to deploy a project, there are three required files:

- pom.xml
  
- Procfile​
  
- system.properties

[/slide]

[slide hideTitle]

# System.properties​

`system.properties​` holds all of the system configuration properties needed to run the project​

By default, Heroku uses JDK Version 1.8​.

To set a specific version, add the following line:​

```java
java.runtime.version={version}​
```

[/slide]

[slide hideTitle]

# Procfile

Heroku uses a Procfile to ensure your application is running as intended.

It holds commands, which will be executed when bootstrapping the application.

In your app's root directory, create a new file and name it Procfile, with a capital 'P'.

It should include:

```
web: java -jar target/{name}-{version}.jar​
```

Replace name and version with the values from pom.xml:

```xml
<version>1.0.0-SNAPSHOT</version>​
<name>project_name</name>​
```

[/slide]

[slide hideTitle]

# Application.properties

```java
spring.datasource.url=${JDBC_DATABASE_URL:}​
spring.datasource.username=${JDBC_DATABASE_USERNAME:}​
spring.datasource.password=${JDBC_DATABASE_PASSWORD:}​
​
server.port=${PORT:8080}​
​
spring.datasource.hikari.connection-timeout=30000​
spring.datasource.hikari.maximum-pool-size=10​
​
spring.jpa.properties.hibernate.dialect = org.hibernate.dialect.PostgreSQLDialect​​
```

[/slide]