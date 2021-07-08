[slide hideTitle]

# Hibernate Framework

Hibernate is an open-source Java ORM framework that takes care of mapping an object-oriented model to a relational database.

It is implemented by the configuration of an **XML file** or by using **Java Annotations.**

Hibernate provides an abstract layer for us, meaning that software developers don't need to worry about the implementations.

Hibernate does the things for us directly like **connection with the database, writing queries for CRUD operations, and more.**

Using ORM like hibernate improves our productivity by giving us high-level-oriented API and removes the need to write pure SQL.

It helps us improve our performance, maintainability, and portability by providing us a way to write less and more cleaner code.

We have different approaches to **Java ORM:**

- POJO (Plain Old Java Objects) + XML mappings

  * This approach is a bit old-fashioned, but a very powerful tool.
  * It is implemented in "classical" Hibernate.

- Annotated Java classes (POJO) mapped to DB tables

  * This approach is based on Java annotations and XML.
  * It is easier to implement and maintain.



[/slide]

[slide hideTitle]

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

[slide hideTitle]

# Hibernate Implementation

To create an application, first - we need to build the Java **POJO** classes.

Here we have a simple java class with some **fields**, **constructor**, **getters** and **setters**.

``` java
public class Student {
  private int id;
  private String name;
  private LocalDate registrationDate;

  // Constructor, getters, and setters
}
```

Now, we must create and configure our student.cfg.xml mapping file.

``` java
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

Next, we need to configure our Main class too.

``` java
public class Main {
    public static void main(String[] args) {
        Configuration cfg = new Configuration(); // Service Registry
        cfg.configure();
        SessionFactory sessionFactory = cfg.buildSessionFactory();
        Session session = sessionFactory.openSession(); // We need to open the session
        session.beginTransaction();

        // Your Code Here
        session.getTransaction().commit(); // After we are done, we must commmit our transaction
        session.close();
    }
}
```

Let's see how we can **save** our objects after the transaction:

``` java
public static void main(String[] args) {

    // Logic

    session.beginTransaction();
    
    Student example = new Student();
    session.save(example); // Saving object

    session.getTransaction().commit();
    session.close();
    }
}
```

The next example is showing how we **retrieve** our data by `get()` method.

``` java
public static void main(String[] args) {

    // Logic

    session.beginTransaction();
    
    Student student = session.get(Student.class, 1); // We get the object in the method

    session.getTransaction().commit();
    session.close();
    }
}

```

We can **retrieve** data by queries also:

``` java
public static void main(String[] args) {
    // Logic here
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

Hibernate query language extends and allows us to use **object-oriented programming** on our **SQL** queries.

The difference between **SQL** and **HQL** is that hibernate query language is fully object-oriented and supports concepts like **inheritance** and **polymorphism**.

We can write independent queries in **HQL**, which are converted in **SQL** at **runtime**.

HQL can even return the child objects as part of the query result.

Let's take a look at these simple examples:

**SELECT:**

```
"FROM Student"
```

**SELECT + WHERE:**

``` 
"FROM Student WHERE name = 'John'"
```

**SELECT + JOIN:**

``` 
"FROM Student AS s 
JOIN s.major AS major"
```

Let see how we can obtain data information by Criteria:

``` java
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

