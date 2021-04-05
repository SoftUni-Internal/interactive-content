# ORM Introduction

[slide hideTitle]

# ORM Definition

ORM or **Object-Relational Mapping** is a **programming technique** for data conversion.

This technique allows database **queries** and **manipulations** to be made using the **object-oriented paradigm**.

It maps **objects** to **rows** from **tables in relational databases**.

[image assetsSrc="Java-ORM-Fundamentals-1.png" /]

[/slide]

[slide]

# ORM Usage

**Object-oriented languages** mostly deal with objects, which are **non-scalar values**.

Databases, however, do not share that **object-oriented** nature and work only with scalar values ( **integer**, **string** etc.).

A lot of **parsing** and **serialization** is required for **OOP languages** to communicate with **databases**.

**ORM** makes the communication between these **incompatible** systems much easier.

Developers save a lot of work hours because of the ability of an **ORM** to create **SQL queries** automatically.

[/slide]

[slide]

# JDBC and ORM

**ORMs** and **JDBC** are two different solutions to a problem

Each one of them is better than the other in different ways.

The **strength** of **JDBC**:

- It is easy to learn

- Its performance is a little better

However, ORMs are superior to JDBC due to:

- Easier maintainability

- The focus on the business logic instead of the database structure

- Better scalability

Overall, it can be said that **JDBC** is good for **small applications**.

With it, the data can be **directly presented from the database**.

**ORMs**, however, are used for **big, domain-driven applications** that have more **complex object relationships**.

[/slide]

[slide hideTitle]
# Application Architecture

**Application architecture** is a very important thing to consider when creating a project.

**Layered architecture** is one of the simpler choices.

In this type of architecture, there are **four** layers:
- `Presentation Layer` - What the users of the application **see**
- `Service layer`- Where all of the **business logic** is **stored** and **operates** from
- `Persistence layer (ORM)` - Stores **handler functions** that connect the **service layer** to the **database layer**
- `Database layer` - Where the **data for the application** is stored

[image assetsSrc="Java-ORM-Fundamentals-2.png" /]

[/slide]

[slide hideTitle]
# ORM Frameworks: Features

The main feature of **ORM Frameworks** is that they automatically generate **SQL queries**.

These **queries** can perform all of the basic **CRUD** operations (**persist**, **update**, **delete**, **merge** etc.).

Most of those frameworks also protect from **simple, direct SQL injection** attacks.

Working with **ORM** can happen in two different ways:

- `Database-first approach` - This approach creates all the **entities** from an **existing database**

- `Code-first approach` - Classes are created **first** and then **migrated** to the **database**

[/slide]

[slide hideTitle]
# Perform data operations with ORM

As covered previously, **ORMs** automatically create **SQL queries**.

The following code shows some examples of working with **ORM**:

- **Saving an entity on the database**

```java
Student student = new Student("Kevin", "Reynolds");
session.save(student);
```

The code from above would be translated into:

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

**ORM Frameworks** also allow working with **custom queries**.

**Hibernate**, for example, works with both **SQL** and **HQL**.

**HQL** or **Hibernate Query Language** is another query language that is **object-oriented**, unlike **SQL**.

**HQL** also works with concepts like **inheritance**, **polymorphism** and **association**.

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

[slide]

# Code First Approach

The **code-first** approach is used for **domain-driven** applications.

When using it **entity classes** are created first then the **database** is filled based on the classes.

This approach lets the **business logic** drive the application, instead of the **database**.

The following picture illustrates how the **code-first** approach works:

[image assetsSrc="Java-ORM-Fundamentals-3.png" /]

[/slide]

[slide]

# POJO + XML

One way to use the **code-first** approach is to combine **POJO** (**Plain Old Java Objects**) with **XML**.

This practice is a bit **dated** but does the job **perfectly** and is quite **powerful**.

It is used in **traditional ORMs**.

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

[/slide]

[slide]

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
