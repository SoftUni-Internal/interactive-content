# ORM Introduction

[slide hideTitle]

# What is ORM?

[video src="https://videos.softuni.org/hls/Java/Java-ORM-and-Spring-Data/02.ORM-Fundamentals/02-ORM-Fundamentals-3-5-orm-introduction-what-is-orm-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

ORM or **object-relational mapping** is a **programming technique** for data conversion.

This technique allows database **queries** and **manipulations** to be performed by using the **object-oriented paradigm**.

It maps **objects** to **table rows in relational databases**.

[image assetsSrc="Java-ORM-Fundamentals-1.png" /]

Using ORM, we can perform the full range of CRUD operations.

It can **store, retrieve, updates, and delete** from an object-oriented program in a relational database.

All ORM systems utilize a "**data layer**", responsible for managing translation between both systems.

This layer is typically a **library** written in an object-oriented language, such as Java.

It often works in conjunction with the **web framework** used to write the rest of our application.

[/slide]

[slide hideTitle]

# Why Do We Need ORM?

[video src="https://videos.softuni.org/hls/Java/Java-ORM-and-Spring-Data/02.ORM-Fundamentals/02-ORM-Fundamentals-6-why-do-we-need-orm-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Object-oriented languages** are based on the concept of "objects", which have **non-scalar values**.

Databases do not share that **object-oriented** nature and work only with **scalar** values ( **integer**, **string**, etc.).

**Parsing** and **serialization** are required for **OOP languages** to communicate with **databases**.

**ORM** makes the communication between these **incompatible** systems easier.

An **ORM** can create **SQL queries** automatically, saving time in the process.

[/slide]

[slide hideTitle]
# JDBC and ORM

[video src="https://videos.softuni.org/hls/Java/Java-ORM-and-Spring-Data/02.ORM-Fundamentals/02-ORM-Fundamentals-7-jdbc-and-orm-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**ORMs** and **JDBC** are two different solutions to a problem.

Both have their advantages and pitfalls.

**JDBC** has several benefits, such as:

- Being easier to learn

- Having slightly better performance

However, ORMs are superior to JDBC due to:

- Easier maintainability

- Being focused on business logic instead of database structure

- Better scalability

**JDBC** is better for **small applications** because the data can be **directly presented from the database**.

**ORMs** are used for **big, domain-driven applications** that have more **complex object relationships**.

[/slide]

[slide hideTitle]
# Application Architecture

[video src="https://videos.softuni.org/hls/Java/Java-ORM-and-Spring-Data/02.ORM-Fundamentals/02-ORM-Fundamentals-8-application-architecture-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Application architecture** is a crucial thing to consider when creating a project.

**Layered architecture**, as the name suggests, has **four** layers:
- Presentation Layer - the visible part of the application
- Service layer - where **business logic** is being **stored** and **operates** from
- Persistence layer (ORM) - stores **handler functions** that connect the **service layer** to the **database layer**
- Database layer - where **application data** is being collected

[image assetsSrc="Java-ORM-Fundamentals-2.png" /]

[/slide]

[slide hideTitle]
# ORM Frameworks: Features

[video src="https://videos.softuni.org/hls/Java/Java-ORM-and-Spring-Data/02.ORM-Fundamentals/02-ORM-Fundamentals-9-orm-frameworks-features-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The main feature of **ORM Frameworks** is the automatic generation of **SQL queries**.

These **queries** can perform all basic **CRUD** operations (**persist**, **update**, **delete**, **merge** etc.).

Most of those frameworks also protect from **SQL injection** attacks.

There are two strategies of working with an **ORM**:

- **Database-first approach** - produces all the **entities** from an **existing database** 
  * recommended for larger applications

- **Code-first approach** - classes are created **first** and then **migrated** to the **database**
  * suitable for smaller projects


By taking the database-first approach, we can alter the model without having to recreate the database and lose all data.

This limitation of code-first makes it less suitable for production environments, as compared to the database first approach.

This is why the database-first approach is more suitable for projects that may require modification in production.

Another disadvantage of code-first is that the model builder requires privileges on the master database.

This does not apply when using an [SQL Server Compact database](https://en.wikipedia.org/wiki/SQL_Server_Compact).

An advantage of taking the code-first approach is the cleaner, more concise code.

It is recommended for simpler stand-alone applications without versioning.


[/slide]

[slide hideTitle]
# Performing Data Operations With ORM

[video src="https://videos.softuni.org/hls/Java/Java-ORM-and-Spring-Data/02.ORM-Fundamentals/02-ORM-Fundamentals-10-11-perform-data-operations-wih-orm-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The following code shows some examples of working with **ORM**:

- **Saving an entity on the database**

```java
Student student = new Student("Kevin", "Reynolds");
session.save(student);
```

Can be transformed into the following SQL query:

```java
INSERT INTO students
(firstName, lastName)
VALUES
('Kevin', 'Reynolds')
```

- **Retrieving data from a database**

```java
Student student = (Student)
session.get(Student.class, 1); // gets a student with id = 1
```

Results in the following **query**:

```java
SELECT * FROM students WHERE id=1;
```

**ORM Frameworks** can operate with **custom queries**.

**Hibernate**, for example, works with both **SQL** and **HQL**.

**HQL** or **Hibernate Query Language** is another query language that is **object-oriented**, unlike **SQL**.

**HQL** also implements the concepts of **inheritance**, **polymorphism** and **association**.

The following code shows examples of custom queries with **both** query languages:

## `HQL`:

```java
List<Student> studentList = session.createQuery("FROM Student").toList();
```

## `SQL`:

```java
String sql = "SELECT * FROM EMPLOYEE";
SQLQuery query = session.createSQLQuery(sql);
query.addEntity(Employee.class);
List results = query.list();
```

[/slide]


[slide hideTitle]
# Code First Model

[video src="https://videos.softuni.org/hls/Java/Java-ORM-and-Spring-Data/02.ORM-Fundamentals/02-ORM-Fundamentals-12-14-code-first-model-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The **code first** approach is used for **domain-driven** applications.

When implemented, **entity classes** are created first, and then the **database** is populated based on them.

This approach lets the **business logic** drive the application instead of the **database**.

The following picture illustrates how the **code-first** approach works:

[image assetsSrc="Java-ORM-Fundamentals-3.png" /]

By applying, this approach in this diagram, the `Student` and `Employee` classes are created first.

The Entity Framework then handles their conversion to database entries.

## POJO + XML

One way to use the **code-first** approach is to combine **POJO** (**Plain Old Java Objects**) with **XML**.

This method is applied in **traditional ORMs**.

The following code is an example of a **POJO + XML** combination:

```js
<?xml version="1.0" encoding="UTF-8" ?>
<entity-mappings xmlns="http://java.sun.com/xml/ns/persistence/orm"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
     xsi:schemaLocation="http://java.sun.com/xml/ns/persistence/orm    
http://java.sun.com/xml/ns/persistence/orm_1_0.xsd"
    version="1.0">
   <description>Mapping file</description>
   <entity class="Employee">
      <table name="EMPLOYEETABLE"/>
      <attributes>
         <id name="id">
            <generated-value strategy="TABLE"/>
         </id>
         <basic name="name">
            <column name="EMP_NAME" length="100"/>
         </basic>
         <basic name="salary">
         </basic>
      </attributes>
   </entity>
</entity-mappings>
```

The above code contains various properties, the first one being the `<entity-mappings>` root tag.

It holds the `persistence-unit-metadata` element, containing metadata for the persistence unit.

We will learn what a persistence unit is in the next lesson.

The `<description>` tag contains information about the entity classes in the application.

`<package>` specifies the package of the classes listed within the sub-elements and attributes of the same mapping file only.

The `<entity>` element has a `class` attribute, used to define the name of the entity class.

To define the attributes of the class, we use `<attributes>`. 

It can contain multiple subtags, such as `<id>`, `<basic>` (maps the entity columns to those in the database), and `<version>`.

While this approach is powerful, it is old and not a recommended practice.

## POJO Mapped to DB Tables

There is an easier way to implement the **code-first** method than combining **POJO** and **XML**.

**Plain Old Java Objects** can be mapped **directly** to a **database table** by using **annotations**.

This is how the alternative to **POJO + XML** looks:

```java
@Entity
@Table(name = "employees")
public class Employee {
    @Id
    private int id;
    @Column(name = "name")
    private String name;
    @Column(name = "position")
    private String position;
}
```

In the snippet above, `@Entity` defines the `Employee` class as an entity - a persistent POJO class.

The `@Table` annotation is set at the class level.

It allows us to define the **table, catalog, and schema names** for our entity mapping.

`@Id` declares the identifier property of this entity.

[/slide]
