[slide hideTitle]

# Spring Data

In programming, everything is related, therefore to truly understand and comprehend the ORM technology we had to go through the stepping stones. 

- First, we understood how we can connect to the database and execute native SQL in our code through JDBC.

- Secondly, we got a grasp of what is an ORM and why it is so useful, easing our job of mapping the database tables to java objects.

- Then we had a closer look at one such ORM, Hibernate, and understood the true nature and behavior of an ORM framework.

- Further, we got to know what Hibernate and other ORM engines are based on, Java Persistence Library (JPA) gives us common prototype and functionality to the ORM tools, which gives us abstraction and makes it easier to change from one ORM (JPA provider) to another.

Now it's time to have a look at another layer in working with the database, **Spring Data**, it's a tool which addresses common difficulties in working with data, making our job easier by providing us with template classes.

[image assetsSrc="Spring-data-introduction.png" /]

The first question that may come to mind is "What is **Spring**?", actually **Spring** is a huge open-source modular framework ecosystem developed by **Pivotal Software**. 

Every different module provides us with a range of services when used together we can build web applications. 

[image assetsSrc="Spring-data-introduction(1).png" /]

[/slide]

[slide hideTitle]

# Spring data

Spring data the module of **Spring**, which is responsible for operating with the database, as mentioned above, it's combined with an ORM such as **Hibernate**, giving us full access over our database and providing us with another level of abstraction over our JPA provider.

Few of the tools we get when working with **Spring data** are: 

- Extra level of abstraction over the used ORM.

- The chance to integrate custom repositories.

- We can create dynamic query derivation from repository method names.

- Better exception handling by translating data access related exceptions.

- And many more... 

[/slide]

[slide hideTitle]

# Extra Layer of Abstraction Over the ORM

Spring Data's Role is just an extra layer of abstraction over the used ORM

[image assetsSrc="Spring-data-introduction(2).png" /]

[/slide]

[slide hideTitle]

# Spring Boot

Spring boot is a stand-alone tool, used to build the backbone of your **Spring application**. It's also developed by Pivotal Table.

Its sole purpose is to help the developer to get started with the web application and to reduces the development time, easing the configuration. 

A pattern laid in the foundation of **Spring Boot** is the - **Convention over configuration** design pattern.

What does it mean? 

**Convention over configuration** is a widely used design pattern with the purpose to reduce the decisions that a developer should make during his work. 

Its idea is that if you follow the conventions a given framework has you won't need to describe every decision in your code.

For instance, if you have a model in your application **Student** it corresponds to a table in your database names **student**. 

Now let's get back to **Spring Boot**. 

What it does for you is to build your application and provide you with optional **started** POM's to simplify your **Maven** configuration.

It will automatically configure **Spring** whenever possible. 

No need for code generation and no requirement for XML configurations.

[/slide]

[slide hideTitle]

# Dependencies

Most spring boots need almost no configuration.

Let's have an **example**:

```java
//Here we set the dependencies of our application in the pom.xml file.

 <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-jpa</artifactId>
        <version>2.3.3.RELEASE</version>
        </dependency>

        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
        <version>8.0.21</version>
        </dependency>
    </dependencies>
```

[/slide]

[slide hideTitle]

# Build

```java
 <build>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <version>3.8.0</version>
                <configuration>
                    <source>15</source>
                    <target>15</target>
                </configuration>
            </plugin>
        </plugins>
    </build>
```

[/slide]

[slide hideTitle]

# Configuration

The configuration for the spring application is held in the application.properties.

```java
#Data Source Properties
spring.datasource.driverClassName = 
com.mysql.cj.jdbc.Driver
spring.datasource.url = jdbc:mysql://localhost:3306/school?useSSL=false     //Database we use and the databse connection settings.
spring.datasource.username = root
spring.datasource.password = 1234

#JPA Properties
spring.jpa.properties.hibernate.dialect = org.hibernate.dialect.MySQL8Dialect   //The JPA provider / ORM we need in our application.
spring.jpa.properties.hibernate.format_sql = TRUE
spring.jpa.hibernate.ddl-auto = create-drop

###Logging Levels
# Disable the default loggers       // The logging settings.
logging.level.org = WARN
logging.level.blog = WARN

#Show SQL executed with parameter bindings
logging.level.org.hibernate.SQL = DEBUG
logging.level.org.hibernate.type.descriptor = TRACE

```

Depending on your project you may need different spring.boot files, you can find many alraedy implemeneted in the internet.

[/slide]

[slide hideTitle]

# Java-Based Configuration

Further configuration is done through the JavaConfig file.

The **JavaConfig.java** file refers to the annotation-based configuration, 

back in the days instead of this file, it was using the original XML based configuration.

The actual JavaConfig component is the one that goes through the class files and annotations to build the configuration (as opposed to going through an XML file to build the configuration) and registers your @Beans.

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
        factory.setPackagesToScan("com.demo.domain");                  //This is the models package.
        factory.setDataSource(dataSource());
        Properties jpaProperties = new Properties();
        jpaProperties.setProperty("hibernate.hbm2ddl.auto","validate");
        jpaProperties.setProperty("hibernate.format_sql", "true");
        factory.setJpaProperties(jpaProperties);
        factory.afterPropertiesSet();
        return factory.getObject();
    }

@Bean
public PlatformTransactionManager transactionManager() {                //Register a transaction manager.
        JpaTransactionManager txManager = new JpaTransactionManager();
        txManager.setEntityManagerFactory(entityManagerFactory());
        return txManager;
}
```

[/slide]