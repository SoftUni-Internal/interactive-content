# Homework: Mini ORM

[slide hideTitle]

# Description

_**Here is a link to the**_ [resources](https://videos.softuni.org/resources/java/Java-ORM-And-Spring-Data/Java-ORM-Fundamentals-Homework.zip) _**for this task.**_

By following the guides of this document you will be able to create your custom ORM with basic functionality (insert, update and retrieve single or set of objects).

It will have options to work with already created tables in a database or create new tables if such are not present yet.

[/slide]

[slide hideTitle]

# 1. Setup

Create a new **Maven project** in IntelliJ.

[image assetsSrc="Java-ORM-Fundamentals-Homework-1.jpg" /]

**Maven** is a software development tool that helps you manage your projects' build, setup and their dependencies.

Fill in the fields as shown in the screenshot below and click "Next".

[image assetsSrc="Java-ORM-Fundamentals-Homework-2.jpg" /]

Select the desired project location and click "Next" again.

Initially, no database driver is imported. Do that using Maven by adding a dependency in the `pom.xml` file.

[image assetsSrc="Java-ORM-Fundamentals-Homework-3.jpg" /]

[/slide]

[slide hideTitle]

# 2. Create Entities

In the means of ORMs, database objects are mapped to object-oriented implementations called **“entities”**.

They are objects that analogically to database tables, for example - users, hold fields containing user’s main characteristics – **id**, **username**, **first_name**, **last_name**, **age** etc.

In the "java" folder create a package called **entities** where every one of our entities will be.

Now let us **create a User class** with fields and properties (**id**, **username**, **password**, **age**, **registrationDate**).

Create a **constructor** that sets all fields **except for the id** because it is **auto-incremented on a database level**.

The order of the parameters in the constructor must be **the same as the sequence of columns in the table in the database**.

Add **Getters** and **Setters** for all fields.

[image assetsSrc="Java-ORM-Fundamentals-Homework-4.jpg" /]

[/slide]

[slide hideTitle]

# 3. Create Database Connection

Unlike all previous tasks, it is time to start separating our logic into classes.

Create a new package called **orm** and a **class Connector** in it that generates a connection with our database.

In order to achieve this, we would require the following parameters:

- **Username** – database username

- **Password** – database password

- **Database Name** – the current database for the project. We need to create one manually

[image assetsSrc="Java-ORM-Fundamentals-Homework-5.jpg" /]

[/slide]

[slide hideTitle]

# 4. Create Database Context

Let us create an interface that will define the operations we can perform with the database.

Define the following methods in it.

- **boolean persist**(**E entity**) – it will insert or update an entity depending if it is attached to the context

- **Iterable**\<**E**\> **find**(**Class**\<**E**\> **table**) – returns collection of all entity objects of type **E**

- **Iterable**\<**E**\> **find**(**Class**\<**E**\> **table**, **String** **where**) – returns collection of all entity objects of type **T** matching the criteria given in **“where”**

- **E findFirst**(**Class**\<**E**\> **table**) – returns the first entity object of type **E**

- **E findFirst**(**Class**\<**E**\> **table**, **String** **where**) – returns the first entity object of type **E** matching the criteria given in “where”

[image assetsSrc="Java-ORM-Fundamentals-Homework-6.jpg" /]

[/slide]

[slide hideTitle]

# 5. Create Entity Manager

Let us focus on creating the core of our Mini ORM.

The **EntityManager** class that will be responsible for inserting, updating and retrieving entity objects.

This class would implement methods of the **DbContext interface**.

It will require a **Connection** object that would be initialized with a given connection string.

[image assetsSrc="Java-ORM-Fundamentals-Homework-7.jpg" /]

[/slide]

[slide hideTitle]

# 6. Persist Object in the Database

The logic behind the persist method is simple.

First, the method should **check** if the given **object**, which will be persisted, **is not already** in the database and if not **add it**, otherwise **update its properties with the new values**.

The method returns whether the object was **successfully persisted** in the database or not.

We can do check if the user is in the database by using the value of its **id** field. If it is not empty that means we are trying to insert it.

But the method works with a generic type – **E** and we do not have direct access to its **getter** methods.

In order to minimize specifics and work with other entities in the future (not only **User**) we have to access the field some other way.

One thing that can help us is **Annotations**.

Create 3 annotations **Entity**, **Column**, and **Id**.

**Entity Annotation**:

[image assetsSrc="Java-ORM-Fundamentals-Homework-8.jpg" /]

**Id Annotation**:

[image assetsSrc="Java-ORM-Fundamentals-Homework-9.jpg" /]

**Column Annotation**

[image assetsSrc="Java-ORM-Fundamentals-Homework-10.jpg" /]

**Annotate entities and their corresponding fields**.

In the **Entity** annotation, specify the name of the database table you want to be mapped – **users**.
In **Column** annotation – the corresponding table column name to the java field.

We are going to need a new additional method **getId** (**Class entity**) in the **EntityManager** class. It will return the **id** field via reflection:

[image assetsSrc="Java-ORM-Fundamentals-Homework-11.jpg" /]

[image assetsSrc="Java-ORM-Fundamentals-Homework-12.jpg" /]

If the returned value is **null** we need to do an insert, otherwise, update.

So far the persist method should look like this:

[image assetsSrc="Java-ORM-Fundamentals-Homework-13.jpg" /]

We need to implement 2 more methods:

- **private boolean doInsert**(**E entity, Field primary**)

- **private boolean doUpdate**(**E entity, Field primary**)

Both methods would prepare query statements and execute them.

The difference between them is when you insert a new entity you should **set its id**.

The **иd** is generated on a database level. Both methods return whether the entity was successfully persisted.

Here are some tips for the **Insert** method:
- Get the table name you will be inserting into
- Start joining the components of your query – **INSERT** clause, table name + fields, **VALUES** and the corresponding values for the insertion

**HINT**: Iterate over the fields of the entity.

- Prepare and execute statement via the connection

[image assetsSrc="Java-ORM-Fundamentals-Homework-14.jpg" /]

And some tips for the **Update** method:
- Get the table name you will be updating into
- Start joining the components of your query – **UPDATE** clause, table name, **SET**, **WHERE** and the given predicate

**HINT**: Iterate over the fields of the entity and add: `id = \{id\}”` to the **WHERE** clause

- Prepare and execute a statement via the connection

[image assetsSrc="Java-ORM-Fundamentals-Homework-15.jpg" /]

[/slide]

[slide hideTitle]

# 7. Fetching Results

Finally, when we have persisted our entities (objects) in the database.

Implement functionality to **get them out of the database and persist them in the operating memory**.

We would implement just several methods.

That would be **all Find methods from the DbContext**.

Tips on how to implement: `public E findFirst(Class\<E\> table, String where)`.

[image assetsSrc="Java-ORM-Fundamentals-Homework-16.jpg" /]

Here you can see that we used a new method **fillEntity**.

That method receives a **ResultSet** object, **retrieves** **information from the current row** of the reader and fills the data.

Create two methods:

[image assetsSrc="Java-ORM-Fundamentals-Homework-17.jpg" /]

[image assetsSrc="Java-ORM-Fundamentals-Homework-18.jpg" /]

Both methods cooperate closely.

The **fillEntity** method calls the **fillField** method and passes the entity, which fields have to be filled, the current field, the **ResultSet** object, from which we will get information, and the name from the **Column** annotation, which will give us access to the value in the **ResultSet**.

[/slide]

[slide hideTitle]

# 8. Test Framework

Let us test the business logic to make sure it works as expected. Create several users and persist them in the database.

Then update some of the properties of the users (e.g., change password or increase age or some other change).

Remember, you need to use the persist method to commit changes of the object to the database.

Make sure the data is always updated in the database.

Here is some example of usage:

[image assetsSrc="Java-ORM-Fundamentals-Homework-19.jpg" /]

[/slide]

[slide hideTitle]

# 9. Fetch Users

Insert several users in the database and **print the usernames and passwords** of those who are **registered after 2010** year and are **at least 18 years old**.

[/slide]
