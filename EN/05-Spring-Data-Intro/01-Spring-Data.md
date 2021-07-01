# Spring Data

[slide hideTitle]

# The Spring Framework

In programming, everything is related, therefore to truly understand and comprehend the ORM technology we had to go through the stepping stones.

- First, we understood how we can connect to the database and execute native SQL queries in our code through JDBC

- Secondly, we got a grasp of what is an ORM and why it is so useful, easing our job of mapping the database tables to java objects

- Then we had a closer look at one such ORM, Hibernate, and understood the true nature and behavior of an ORM framework

- Further, we got to know what Hibernate and other ORM engines are based on, Java Persistence Library (JPA) gives us common prototype and functionality to the ORM tools, which gives us abstraction and makes it easier to change from one ORM (JPA provider) to another

Now it's time to have a look at another layer in working with the database, **Spring Data**, it's a tool which addresses common difficulties in working with data, making our job easier by providing us with template classes

[image assetsSrc="Spring-data-introduction.png" /]

The first question that may come to mind is "What is **Spring**?", actually **Spring** is a big open-source modular ecosystem developed by **Pivotal Software**.

Every different module provides us with a range of services when used together we can build web applications.

[image assetsSrc="Spring-data-introduction(1).png" /]

[/slide]

[slide hideTitle]

# Spring data

Spring data the module of the **Spring Ecosystem**, which is responsible for operating with databases. It's combined with an ORM such as **Hibernate**, giving us full access over our database and providing us with another level of abstraction over our JPA provider.

A few of the tools we get when working with **Spring data** are:

- Extra level of abstraction over the used ORM.

- The chance to integrate custom repositories.

- We can create dynamic query derivation from repository method names.

- Better exception handling by translating data access related exceptions.

- And many more...

[image assetsSrc="Spring-data-introduction(2).png" /]

[/slide]

[slide hideTitle]

# Spring Boot

Spring Boot is another project that is part of the **Spring Ecosystem**. It is a stand-alone tool used to build the backbone of **Spring Application**.

Its sole purpose is to help the developer get started with a web application and to reduces the development time, easing the configuration.

A pattern laid in the foundation of **Spring Boot** is the **convention over configuration** design pattern.

**Convention over configuration** is a widely used design pattern with the purpose to reduce the decisions that a developer should make during his work.

Its idea is that if you follow the conventions a given framework has you won't need to describe every decision in your code.

For instance, if you have a **Student** object in the application, it corresponds to the **students** table in the database.

[/slide]

[slide hideTitle]

# Dependencies

To work with **Spring Data in our projects**, we'll need to **add 2 dependencies** in our **pom.xml** file:

```java
<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-data-jpa</artifactId>
        <version>2.5.2</version>
    </dependency>

    <dependency>
        <groupId>mysql</groupId>
        <artifactId>mysql-connector-java</artifactId>
        <version>8.0.25</version>
    </dependency>
</dependencies>
```

[/slide]

[slide hideTitle]

# Configuration

The **configuration** for **Spring application** is held in an **application.properties** file.

```java
# Data Source Properties
spring.datasource.driverClassName = com.mysql.cj.jdbc.Driver                // The drive for the MySQL database
spring.datasource.url = jdbc:mysql://localhost:3306/school?useSSL=false     // Connection URL to the database, the database name and properties
spring.datasource.username = root
spring.datasource.password = 1234

#JPA Properties
spring.jpa.properties.hibernate.dialect = org.hibernate.dialect.MySQL8Dialect   // The hibernate dialect used in the query builder
spring.jpa.properties.hibernate.format_sql = TRUE
spring.jpa.hibernate.ddl-auto = create-drop

### Logging Levels
# Disable the default loggers       // The logging settings.
logging.level.org = WARN
logging.level.blog = WARN

# Show SQL executed with parameter bindings
logging.level.org.hibernate.SQL = DEBUG
logging.level.org.hibernate.type.descriptor = TRACE

```

Depending on the project, **additional properties** may be needed.

[/slide]

[slide hideTitle]

# Java-Based Configuration

The less-common way of configuring a Spring Boot project is by using an annotation-based **JavaConfig** file.

Let's have a look at one **Java.Config** file.

```java
    @Bean
    public EntityManagerFactory entityManagerFactory() {                //This is the JPA configuration

        HibernateJpaVendorAdapter vendorAdapter = new HibernateJpaVendorAdapter();
        vendorAdapter.setDatabase(Database.MYSQL);
        vendorAdapter.setGenerateDdl(true);
        vendorAdapter.setShowSql(true);
        LocalContainerEntityManagerFactoryBean factory = new LocalContainerEntityManagerFactoryBean();
        factory.setJpaVendorAdapter(vendorAdapter);
        factory.setPackagesToScan("com.demo.domain");                  //The models' package
        factory.setDataSource(dataSource());
        Properties jpaProperties = new Properties();
        jpaProperties.setProperty("hibernate.hbm2ddl.auto","validate");
        jpaProperties.setProperty("hibernate.format_sql", "true");
        factory.setJpaProperties(jpaProperties);
        factory.afterPropertiesSet();
        return factory.getObject();
    }

@Bean
public PlatformTransactionManager transactionManager() {                //Registering a transaction manager
        JpaTransactionManager txManager = new JpaTransactionManager();
        txManager.setEntityManagerFactory(entityManagerFactory());
        return txManager;
}
```

[/slide]
