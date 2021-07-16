# Lab: Workshop - Mini ORM

[slide hideTitle]

# Project Setup

By following the steps in this lab, you will create a custom ORM with basic functionality (inserting, updating, and retrieving one or multiple objects).

It will allow for working with already created database tables or for creating new ones.

Create a new **Maven project** in IntelliJ.

[image assetsSrc="Java-ORM-Fundamentals-Homework-1.jpg" /]

**Maven** is a software development tool that helps you manage the build, setup, and dependencies of your project.  

Fill in the fields as shown below and click "Next".

[image assetsSrc="Java-ORM-Fundamentals-Homework-2.jpg" /]

Select a project location and click "Next" again. 

Initially, no database driver is imported. This can be done through Maven, by adding a dependency in the **"pom.xml"** file: 

```java
<dependencies>
    <dependency>
        <groupId>mysql</groupId>
        <artifactId>mysql-connector-java</artifactId>
        <version>8.0.21</version>
    </dependency>
</dependencies>
```

[/slide]

[slide hideTitle]

# Creating Entities

In the means of ORMs, database objects are mapped to object-oriented implementations called "**entities**".

They are objects that **relate** to database tables.

For example, a `users` table contains fields with the main characteristics of a user entity – `id`, `username`, `first_name`, `last_name`, `age`, etc.

In the **"java"** folder, create a package called **entities**.

Then, create a **User** class with the following fields and properties: 

- `id` - **int**
- `username` - **String**
- `password` - **String**
- `age` - **int**
- `RegistrationDate` - **Date**

Create a **constructor** that sets **all fields except for id** – it is auto incremented on database level.

The order of the constructor's parameters must be **identical to the sequence of columns in the database table.**

Add Getters and Setters for all fields.

```java
public class User {
    private int id;
    private String username;
    private String password;
    private int id;
    private Date registrationDate;

    public User (String username, String password, int age, Date registrationDate) {
        this.username = username;
        this.password = password;
        this.age = age;
        this.registrationDate = registrationDate;
    }

    // TODO: Add Getters & Setters

}
```

[/slide]

[slide hideTitle]

# Connecting to the Database

It is time to separate our logic into classes. 

Create a new "**orm**" package and a `Connector` class inside. 

It will establish the connection with our database.

In order to achieve this, we will require the following parameters for the database: 

- **username**

- **password**

- **dbName** – the current database for the project
  - we must create one **manually**
   
```java
public static void createConnection(String username, String password, String dbName) throws SQLException {
    Properties props = new Properties();
    props.setProperty("user", username);
    props.setProperty("password", password);
    connection = DriverManager.getConnection("jdbc:mysql://localhost:3306" + dbName, props);
}

public static Connection getConnection() {
    return connection;
}
```

[/slide]

[slide hideTitle]

# Creating a Database Context 

Create an `interface` that will define the possible database operations.

Name your interface `DbContext` and define the following methods inside: 

- `boolean persist(E entity)` – **inserts** or **updates** an entity, according to whether it is attached to the context or not

- `Iterable<E> find(Class<E> table)` – returns a **collection** of all entity objects of type `E`

- `Iterable<E> find(Class<E> table, String where)` – returns a **collection** of all entity objects of type `E` that match the criteria of the "**where**" String

- `E findFirst(Class<E> table)` – returns the **first entity object** of type `E`

- `E findFirst(Class<E> table, String where)` – returns the **first entity object** of type `E` matching the criteria given in "**where**"

```java
public interface DbContext<E> {
    boolean persist(E entity);

    Iterable<E> find(Class<E> table); 

    Iterable<E> find(Class<E> table, String where); 

    E findFirst(Class<E> table); 

    E findFirst(Class<E> table, String where); 
}
```

[/slide]

[slide hideTitle]

# Creating an Entity Manager 

Let us begin writing the **core** of our Mini ORM. 

That will be the `EntityManager` class, responsible for **inserting, updating, and retrieving** entity objects.

This class will implement methods of the `DbContext` interface.

It will require a `Connection` object, initialized with a given connection string.  

```java
public class EntityManager<E> implements DbContext<E> {
    private Connection connection;

    public EntityManager(Connection connection) {
        this.connection = connection;
    }

    // TODO: Implement methods

}
```

[/slide]

[slide hideTitle]

# Persisting an Object in the Database

The logic behind the `persist` method has a simple implementation.

It should **check** if the database contains the given object: 

- if it does – it should **update the existing object's properties with the new values**; 

- otherwise, **it must add a new entry**. 

The method **returns** whether the object was successfully persisted in the database or not. 

We can check if the user we are trying to persist is **new** by checking the value of its `id` field - if it is **not empty** that means we must try to **update** it. 

Keep in mind that the method works with **a generic type** – `E` and we **do not have direct access** to its getter methods – for example `getId`.  

In order to easily work with other entities in the future (not only `User`), we have to access the field using `Annotations`.  

Create 3 annotations - `Entity`, `Column`, and `Id`. 

## Entity Annotation:

```java
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

@Retention(RetentionPolicy.RUNTIME)
public @interface Entity {
    String name();
}
```

## Id Annotation:

```java
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

@Retention(RetentionPolicy.RUNTIME)
public @interface Id {
}
```

## Column Annotation:

```java
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.FIELD)
public @interface Column {
    String name();
}
```

**Annotate the entities and their corresponding fields.** 

In the `Entity` annotation, specify the name of the database table to be mapped – `users`, and in `Column` – the table column name, corresponding to the Java field. 

We should create an additional method `getId(Class entity)` in the `EntityManager` class. 

It will return the `id` field via reflection: 

```java
private Field getId(Class entity) {
    return Arrays.stream(entity.getDeclaredFields())
            .filter(x -> x.isAnnotationPresent(Id.class))
            .findFirst()
            .orElseThrow(() -> new UnsupportedOperationException("Entity does not have a primary key"));
```


If returned value is **null**, we need to do an **insert**. 

Otherwise, we should perform an **update**. 

At this stage, the `persist` method should look like this: 

```java
public boolean persist(E entity) throws IllegalAccessException {
    Field primaryKey = this.getId(entity.getClass());
    primaryKey.setAccessible(true);
    Object value = primaryKey.get(entity);

    if (value == null || (int) value <= 0) {
        return this.doInsert(entity, primaryKey);
    } else {
        return this.doUpdate(entity, primaryKey);
    }
}
```

We need to implement **two** more methods:

- `private boolean doInsert(E entity, Field primary)`

- `private boolean doUpdate(E entity, Field primary)`

Both methods prepare query statements and execute them. 

The difference between them is that when inserting a new entity, you should **set its** `id`. 

The `id` is generated on database level. 

Both methods **return** whether the entity was successfully persisted. 

## `doInsert`

Implement the `doInsert` method by following these steps:  

- Get the **name** of the table you will be **updating** into 

- Start **joining** the **components** of your query:  
  * `INSERT clause {table name + fields}, VALUES {the corresponding values for the insertion}`

**Hint:** Iterate over an entity’s fields.  

- **Prepare and execute** the statement via the **connection** 

```java
private boolean doInsert(E entity, Field primaryKey) throws SQLException {
    String tableName = this.getTableName(entity.getClass());
    List<String> fieldNames = this.getFieldNames(entity);
    List<String> fieldValues = this.getFieldValues(entity);

    String insertQuery = String.format(INSERT_QUERY, tableName, String.join(", ", fieldNames),
        String.join(", ", fieldValues));


    return this.executeQuery(insertQuery);
}
```


## `doUpdate`

The `doUpdate` method's implementation is similar: 

- Get the **name of the table** you will be updating into 

- Start **joining the components** of your query: 
    * `UPDATE clause, {table name}, SET, WHERE {the given predicate}`

**Hint:** Iterate over an entity’s fields and add `id = {entity’s id value}` to the `WHERE` clause. 

- **Prepare and execute** the statement via the **connection** 

```java
private boolean doUpdate(E entity, Field primaryKey) throws IllegalAccessException {
    String tableName = this.getTableName(entity.getClass());

    List < String > setFieldNameAndValues = Arrays.stream(entity.getClass().getDeclaredFields())
        .map(getFieldNameAndValue(entity))
        .collect(Collectors.toList());

    String updateQuery = String.format(UPDATE_QUERY, tableName,
        String.join(", ", setFieldNameAndValues),
        " id = " + primaryKey.get(entity));

    return executeQuery(updateQuery);
}
```

[/slide]

[slide hideTitle]

# Fetching Results

Once we have persisted our entities (objects) in the database it is time to implement a functionality for **getting them out of the database and persisting them in the operating memory**. 

We will implement **all Find methods from** `DbContext`. 

Here are some tips of how to implement `public E findFirst(Class<E> table, String where)`. 

The rest of the methods have a **similar** implementation. 

[image assetsSrc="Java-ORM-Fundamentals-Homework-16.jpg" /]

As shown above, we use a new `fillEntity` method. 

This method receives a `ResultSet` object, **retrieves information from the current row** of the reader and fills the data. 

Create two methods - `fillEntity` and `fillField`.

## `fillEntity`

[image assetsSrc="Java-ORM-Fundamentals-Homework-17.jpg" /]

## `fillField`

[image assetsSrc="Java-ORM-Fundamentals-Homework-18.jpg" /]

Both methods **cooperate closely**. 

`FillEntity` invokes `fillField`, and passes: 

- the **entity** which **fields** must be **populated** 
- the **current field**
- the `ResultSet` object from which we will **retrieve information**
- `field`'s `Column` annotation name, which will give us access to the value in the `ResultSet`

[/slide]

[slide hideTitle]

# Testing the Framework

We are done with building the **first part** of our MiniORM.

Now we are going to **test** it to ensure that it works as intended. 

Create **several users** and **persist** them in the database. 

Then, **update** some user **properties** (e.g., change their password or increase their age). 

Remember that you must use the `persist` method to **commit** changes of the object to the database. 

Make sure that the data is always **up-to-date** in the database. 

Here is some example usage:  

[image assetsSrc="Java-ORM-Fundamentals-Homework-19.jpg" /]

[/slide]

[slide hideTitle]

# Fetching Users

Insert several users in the database and **print the usernames and passwords** of those who are **both**: 

- **registered after** the year 2010 

- at least **18 years old**

[/slide]
