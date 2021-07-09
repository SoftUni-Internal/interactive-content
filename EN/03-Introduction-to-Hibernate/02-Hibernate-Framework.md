[slide hideTitle]

# Hibernate Framework

Hibernate is an open-source Java ORM framework that handles mapping an object-oriented model to a relational database.

It is implemented by the configuration of an **XML file** or by using **Java Annotations.**

Hibernate abstracts implementations from developers, providing a simplified experience.

It automatically performs usual operations, such as **connecting to the database, writing queries for CRUD operations, and more.**

Using an ORM such as Hibernate improves our productivity by giving us a high-level-oriented API and removing the need to write plain SQL.

It improves application performance, maintainability, and portability, providing us with a way to write cleaner and more concise code in the process.

[/slide]

[slide hideTitle]

# Java ORM Approaches

We have **two** different approaches to **Java ORM:**

- **POJO** (Plain Old Java Objects) + **XML mappings**

  * a **capable** but deprecated procedure
  * implemented in "classic" **Hibernate**

- **Annotated Java classes** mapped to **database tables**

  * an approach based on **Java annotations and XML**
  * easier to **implement** and **maintain**

[/slide]

[slide hideTitle]

# Hibernate Configuration

Let us take a look at the `Pom.xml` **file**:

```xml
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
```

This is the structure of the `hibernate.cfg.xml` file:

```xml
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

[slide hideTitle]

# Hibernate Implementation: Example

To create an application, first - we need to build the **POJO** classes.

Here we have a simple Java class with some **fields**, **constructor**, **getters** and **setters**.

```java
public class Student {
  private int id;
  private String name;
  private LocalDate registrationDate;

  // Constructor, getters, and setters
}
```

## Mapping

Now, we must create and configure our ``student.cfg.xml`` mapping file.

```xml
<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE hibernate-mapping PUBLIC // Mapping file
        "-//Hibernate/Hibernate Mapping DTD//EN"
        "http://www.hibernate.org/dtd/hibernate-mapping-3.0.dtd">

<hibernate-mapping>
    <class name="entities.Student" table="students"> // Class mapping
        <id name="id" column="id"> // Field mapping
            <generator class="identity" />
        </id>

        <property name="name" column="first_name" />
        <property name="registrationDate" column="registration_date"/> // Field mapping
    </class>
</hibernate-mapping>
```

## Sessions

Next, we need to configure our **Main** class too.

```java
public class Main {
    public static void main(String[] args) {
        Configuration cfg = new Configuration(); // Service Registry
        cfg.configure();
        SessionFactory sessionFactory = cfg.buildSessionFactory();
        Session session = sessionFactory.openSession(); // We need to open the session
        session.beginTransaction();

        // Your code
        session.getTransaction().commit(); // After we are done, we must commmit our transaction
        session.close();
    }
}
```

## Saving Data

This is how we **save** our objects after the transaction:

```java
public static void main(String[] args) {

    // Logic goes here

    session.beginTransaction();
    
    Student example = new Student();
    session.save(example); // Saving object

    session.getTransaction().commit();
    session.close();
    }
}
```

## Retrieving Data by `get()`

This example illustrates data **retrieval** using the `get()` method:

```java
public static void main(String[] args) {

    // ...

    session.beginTransaction();
    
    Student student = session.get(Student.class, 1); // We get the object in the method

    session.getTransaction().commit();
    session.close();
    }
}
```

## Retrieving Data by Query

We can **retrieve** data by queries too:

```java
public static void main(String[] args) {

        session.beginTransaction();

    List<Student> studentList = 
    session.createQuery("FROM Student " , Student.class).list(); // We are getting list of objects
        for (Student student : studentList) {
            System.out.println(student.getId());
        }
        session.getTransaction().commit();
        session.close();
    }
}
```

[/slide]

[slide hideTitle]

# Hibernate Query Language - HQL

Hibernate Query Language extends upon SQL, allowing us to utilize **object-oriented programming** in our **SQL** queries.

The difference between both is that Hibernate Query language is fully object-oriented, supporting the concepts of **inheritance** and **polymorphism**.

We can write independent queries in **HQL**, converted to **SQL** at **runtime**.

HQL can even return the child objects as a part of the query result.

Let us take a look at these simple examples:

### `SELECT`:

```sql
FROM Student
```

### `SELECT + WHERE`:

```sql 
FROM Student WHERE name = 'John'
```

### `SELECT + JOIN`:

```sql 
FROM Student AS s 
JOIN s.major AS major
```

## Retrieve Data by Criteria

This is how we can obtain information by `criteria`:

```java
public static void main(String[] args) {
    public static void main(String[] args) {
    // Logic here...
    session.beginTransaction();
    CriteriaBuilder builder = session.getCriteriaBuilder();
    CriteriaQuery criteria = builder.createQuery();
    Root<Student> r = criteria.from(Student.class);
    criteria.select(r).where(builder.like(r.get("name"),"P%"));
    List<Student> studentList = session.createQuery(criteria).getResultList(); // Get list of objects by criteria
        for (Student student : studentList) {
            System.out.println(student.getName());
        }

        session.getTransaction().commit();
        session.close();
    }
```

[/slide]

