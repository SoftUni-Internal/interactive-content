# ORM Introduction

[slide hideTitle]

# ORM Definition

ORM or **object-relational mapping** is a **programming technique** for data conversion.

This technique allows database **queries** and **manipulations** to be performed by using the **object-oriented paradigm**.

It maps **objects** to **table rows in relational databases**.

[image assetsSrc="Java-ORM-Fundamentals-1.png" /]

Using ORM, we can perform the full range of CRUD operations.

It can **store, retrieve, update, and delete** from an object-oriented program in a relational database.

All ORM systems utilize a "**data layer**", responsible for managing translation between both systems.

This layer is typically a **library** written in an object-oriented language, such as Java.

It often works in conjunction with the web framework, used to write the rest of our application.

[/slide]

[slide hideTitle]

# ORM Usage

**Object-oriented languages** are concerned with objects, which are **non-scalar values**.

Databases do not share that **object-oriented** nature and work only with scalar values ( **integer**, **string**, etc.).

**Parsing** and **serialization** are required for **OOP languages** to communicate with **databases**.

**ORM** makes the communication between these **incompatible** systems easier.

An **ORM** can create **SQL queries** automatically, saving time in the process.

[/slide]

[slide hideTitle]
# JDBC and ORM

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

The main feature of **ORM Frameworks** is the automatic generation of **SQL queries**.

These **queries** can perform all basic **CRUD** operations (**persist**, **update**, **delete**, **merge** etc.).

Most of those frameworks also protect from **SQL injection** attacks.

There are two strategies of working with an **ORM**:

- `Database-first approach` - produces all the **entities** from an **existing database**

- `Code-first approach` - classes are created **first** and then **migrated** to the **database**

[/slide]

[slide hideTitle]
# Perform data operations with ORM

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

And the corresponding **SQL query**:

```java
SELECT * FROM students WHERE id=1;
```

**ORM Frameworks** can operate with **custom queries**.

**Hibernate**, for example, works with both **SQL** and **HQL**.

**HQL** or **Hibernate Query Language** is another query language that is **object-oriented**, unlike **SQL**.

**HQL** also implements the concepts of **inheritance**, **polymorphism** and **association**.

The following code shows examples of custom queries with **both** query languages:

- `HQL`

```java
List<Student> studentList = session.createQuery("FROM Student").toList();
```

- `SQL`

```java
String sql = "SELECT * FROM EMPLOYEE";
SQLQuery query = session.createSQLQuery(sql);
query.addEntity(Employee.class);
List results = query.list();
```

[/slide]


[slide hideTitle]
# Code First Approach

The **code-first** approach is used for **domain-driven** applications.

When implemented, **entity classes** are created first, and then the **database** is populated based on them.

This approach lets the **business logic** drive the application instead of the **database**.

The following picture illustrates how the **code-first** approach works:

[image assetsSrc="Java-ORM-Fundamentals-3.png" /]

[/slide]


[slide hideTitle]
# POJO + XML

One way to use the **code-first** approach is to combine **POJO** (**Plain Old Java Objects**) with **XML**.

This method is applied in **traditional ORMs**.

The following code is an example of a **POJO + XML** combination:

```java
...
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
...
```

While this solution is powerful, it is old and not a recommended practice.

[/slide]


[slide hideTitle]
# POJO Mapped to DB Tables

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

[/slide]
