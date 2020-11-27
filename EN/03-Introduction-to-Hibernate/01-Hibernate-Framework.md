[slide]

# Hibernate Framework

Hibernate is a open-source Java ORM framework that take care of mapping an object-oriented model to a relational database.

It is implemented by the configuration of an **XML file** or by using **Java Annotations.**

Hibernate provides an abstract layer for us, meaning that software developers doesn't need to worry about the implementations.

Hibernate does the things for us directly like **connection with the database, writing a queries for CRUD operations and more.**

Using ORM like hibernate improves our productivity by giving us high-level oriented API and removes the needs to write pure SQL.

It helps us improving our performance, maintainability and portability by providing us a way to write less and more cleaner code.

We have different approaches to **Java ORM:**

- POJO (Plain Old Java Objects) + XML mappings

  * This approach is a bit old-fashioned, but very powerful tool.
  * It is implemented in "classical" Hibernate.

- Annotated Java classes (POJO) mapped to DB tables

  * This approach is based on Java annotations and XML.
  * It is easier to implement and maintain.



[/slide]

[slide]

# Hibernate Configuration

Let's take a look at the **Pom.xml file:**

``` java
…
 <dependencies>
        <dependency>
            <groupId>org.hibernate</groupId>
            <artifactId>hibernate-core</artifactId> // Hibernate core
            <version>5.4.22.Final</version>
        </dependency>
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId> // MySQL connector
            <version>8.0.21</version>
        </dependency>    
</dependencies>
…
```

## hibernate.cfg.xml 

``` java
<?xml version='1.0' encoding='utf-8'?>
<!DOCTYPE hibernate-configuration // Hibernate configuration tag
        PUBLIC "-//Hibernate/Hibernate Configuration DTD//EN"
        "http://www.hibernate.org/dtd/hibernate-configuration-3.0.dtd">

<hibernate-configuration>
    <session-factory>
        <property name="hibernate.dialect">
            org.hibernate.dialect.MySQL8Dialect // SQL Dialect
        </property>
        <property name="hibernate.connection.driver_class">
            com.mysql.jdbc.Driver // Driver
        </property>
        <!-- Connection Settings -->
        <property name="hibernate.connection.url">   jdbc:mysql://localhost:3306/school?createDatabaseIfNotExist=true // Connection String
        </property>
        <property name="hibernate.connection.username">
            root // User
        </property>
        <property name="hibernate.connection.password">
            1234 // Password
        </property>
        <property name="hbm2ddl.auto">
            update // Auto Strategy
        </property>
        <!-- List of XML mapping files -->
        <mapping resource="student.hbm.xml"/> // Mapping Files
    </session-factory> 
</hibernate-configuration>
```


[/slide]

[slide]

# Hibernate Implementation

To create an application, first - we need to build the Java POJO classes.



[/slide]