# Spring Data

[slide hideTitle]

# The Spring Framework

To gain an understanding of ORM, we went through several steps:

- We learned how to connect to the database and execute native SQL queries in our code through JDBC

- Secondly, we saw how ORM frameworks map database tables to Java objects

- Then, we took a closer look at Hibernate and its behavior in a real-world project

- Further, we learned that Java Persistence Library (JPA) provides abstraction and makes it easier to switch from one ORM (JPA provider) to another

**Spring Data** is a tool that addresses common difficulties in working with data, making our job easier by providing us with template classes

[image assetsSrc="Spring-data-introduction.png" /]

**Spring** is an open-source modular ecosystem developed by **Pivotal Software**.

Every different module provides us with a range of services.

When used together, they help us build web applications.

[image assetsSrc="Spring-data-introduction(1).png" /]

[/slide]

[slide hideTitle]

# Spring Data

Spring Data is the module of the **Spring Ecosystem** responsible for operating with databases. 

It is combined with an ORM like **Hibernate**, giving us full access to our database and providing us with another level of abstraction over our JPA provider.

Working with **Spring Data** provides multiple benefits, such as:

- An extra level of **abstraction** over the used ORM

- The chance to integrate **custom repositories**

- We can create **dynamic query derivation** from repository method names

- Better **exception handling** by translating data access-related exceptions

[image assetsSrc="Spring-data-introduction(2).png" /]

[/slide]

[slide hideTitle]

# Spring Boot

Spring Boot is another part of the **Spring Ecosystem**.
 
It is a standalone tool used to build the backbone of **Spring Application**.

Its primary purpose is to help the developer get started with a web application by reducing the development time and simplifying configuration.

**Spring Boot** is based on the **convention over configuration** design pattern.

This pattern aims to reduce the number of decisions we should make during the development process.

When following the given framework's conventions, you should not describe every decision in your code.

For instance, if you have a **Student** object in the application, it corresponds to the **students** table in the database.

[/slide]

[slide hideTitle]

# Dependencies

To work with **Spring Data in our projects**, we'll need to **add two dependencies** in our `pom.xml` file:

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

The less common way of configuring a Spring Boot project is by using an annotation-based **JavaConfig** file:

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
