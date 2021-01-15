# Homework

[slide]

# Description

## Workshop – MiniORM

_**Here is a link to the**_ [resources](https://mega.nz/file/DY4D0KwL#oPOosYAR2P1UhQf0kN4Zv2karxcHljNFdeIYT4U5HW8) _**for this task.**_

By following the guides of this document you will be able to create your custom ORM with basic functionality (insert, update and retrieve single or set of objects).

It will have options to work with already created tables in a database or create new tables if such are not present yet.

[/slide]

[slide]

# 1. Setup

Create a new Maven project in IntelliJ.

[image assetsSrc="Java-ORM-Fundamentals-Homework-1.jpg" /]

Maven is a software development tool that helps you manage your projects' build, setup, and their dependencies.

Fill in the fields as shown in the screenshot below and click “Next”

[image assetsSrc="Java-ORM-Fundamentals-Homework-2.jpg" /]

Select the desired project location and click “Next” again.

Initially, no database driver is imported. Do that using Maven by adding a dependency in the `pom.xml` file.

[image assetsSrc="Java-ORM-Fundamentals-Homework-3.jpg" /]

[/slide]

[slide]

# 2. Create Entities

In the means of ORMs, database objects are mapped to object-oriented implementations called **“entities”**.

They are objects that analogically to database tables, for example - users, hold fields containing user’s main characteristics – **id**, **username**, **first_name**, **last_name**, **age** etc.

In the “java” folder create a package called entities where will every one of our entities be.

Now let’s **create a User class** with fields and properties (**id**, **username**, **password**, **age**, **registrationDate**).

Create a **constructor** that **sets all fields except id – it’s auto-incremented on a database level**.

The order of the parameters in the constructor must be **the same as the sequence of columns in the table in the database**.

Add Getters and Setters for all fields.

[image assetsSrc="Java-ORM-Fundamentals-Homework-4.jpg" /]

[/slide]

[slide]

# 3. Create Database Connection

Unlike all previous tasks, it’s time to start separating our logic into classes.

Create new package **“orm”** and **class Connector** in it that generates a connection with our database.

In order to achieve this, we would require the following parameters:

- **Username** – database username

- **Password** – database password

- **Database Name** – the current database for the project. We need to create one manually

[image assetsSrc="Java-ORM-Fundamentals-Homework-5.jpg" /]

[/slide]

[slide]

# 4. Create Database Context

It’s time to create an interface that will define the operations we can perform with the database.

Name your **interface** and defined the following methods in it.

- **boolean** **persist**(**E entity**) – it will insert or update an entity depending if it is attached to the context

- **Iterable**\<**E**\> **find**(**Class**\<**E**\> **table**) – returns collection of all entity objects of type **E**

- **Iterable**\<**E**\> **find**(**Class**\<**E**\> **table**, **String** **where**) – returns collection of all entity objects of type **T** matching the criteria given in **“where”**

- **E** **findFirst**(**Class**\<**E**\> **table**) – returns the first entity object of type **E**

- **E** **findFirst**(**Class**\<**E**\> **table**, **String** **where**) – returns the first entity object of type **E** matching the criteria given in “where”

[image assetsSrc="Java-ORM-Fundamentals-Homework-6.jpg" /]

[/slide]

[slide]

# 5. Create Entity Manager

Enough with the preparation it’s time to write the core of our Mini ORM.

That would be the **EntityManager** class that will be responsible for inserting, updating and retrieving entity objects.

That class would implement methods of the **DbContext interface**.

It will require a **Connection** object that would be initialized with a given connection string.

[image assetsSrc="Java-ORM-Fundamentals-Homework-7.jpg" /]

[/slide]

[slide]

# 6. Persist Object in the Database

The logic behind the persist method is pretty simple.

First, the method should **check** if the given **object** to be persisted **is not contained** in the database and if not **add it**, otherwise **update its properties with the new values**.

The method returns whether the object was **successfully persisted** in the database or not.

But how can we check if the user that we are trying to persist is new to the database or have to update it?

We can do that by checking the value of its **id** field and if it is not empty that means we’re trying to insert it.

But the method works with a generic type – **E** and we don’t have direct access to its getter methods – **getId** for example.

In order to minimize specifics and work with other entities in the future(not only **User**) we have to access the field some other way.

One thing that can help us is **Annotations**.

Create 3 annotations **Entity**, **Column**, and **Id**.

[image assetsSrc="Java-ORM-Fundamentals-Homework-8.jpg" /]

[image assetsSrc="Java-ORM-Fundamentals-Homework-9.jpg" /]

[image assetsSrc="Java-ORM-Fundamentals-Homework-10.jpg" /]

**Annotate entities and their corresponding fields**.

In the **Entity** annotation specify the name of the database table you want to be mapped – **users** and in **Column** – the corresponding table column name to the java field.

We are going to need a new additional method **getId**(**Class entity**) in the **EntityManager** class. It will return the **id** field via reflection:

[image assetsSrc="Java-ORM-Fundamentals-Homework-11.jpg" /]

[image assetsSrc="Java-ORM-Fundamentals-Homework-12.jpg" /]

If the returned value is null we need to do an insert, otherwise, update. So far the persist method should look like this:

[image assetsSrc="Java-ORM-Fundamentals-Homework-13.jpg" /]

We need to implement 2 more methods:

- **private** **boolean** **doInsert**(**E entity, Field primary**)

- **private** **boolean** **doUpdate**(**E entity, Field primary**)

Both methods would prepare query statements and execute them.

The difference between them is when you insert a new entity you should **set its id**.

The **Id** is generated on a database level. Both methods return whether the entity was successfully persisted.

Here are some tips for the Insert method:

- Get the table name you will be inserting into

- Start joining the components of your query – **INSERT** clause, table name + fields, **VALUES** and the corresponding values for the insertion

**HINT**: Iterate over entity’s fields.

- Prepare and execute statement via the connection

[image assetsSrc="Java-ORM-Fundamentals-Homework-14.jpg" /]

And some tips for the update method:

- Get the table name you will be updating into

- Start joining the components of your query – **UPDATE** clause, table name, **SET**, **WHERE** and the given predicate

**HINT**: Iterate over entity’s fields and add “id = \{entity’s id value\}” to **WHERE** clause

- Prepare and execute a statement via the connection

[image assetsSrc="Java-ORM-Fundamentals-Homework-15.jpg" /]

[/slide]

[slide]

# 7. Fetching Results

Finally, when we have persisted our entities (objects) in the database let ‘s implement functionality to **get them out of the database and persist them in the operating memory**. We would implement just several methods.

That would be **all Find methods from the DbContext**.

Here are some tips about how to implement **public** **E** **findFirst**(**Class**\<**E**\> **table**, **String** **where**) the other ones are similar and they would be on you.

[image assetsSrc="Java-ORM-Fundamentals-Homework-16.jpg" /]

Here you can see that we used a new method **fillEntity**.

That method receives a **ResultSet** object, **retrieves** **information from the current row** of the reader and fills the data.

Create two methods:

[image assetsSrc="Java-ORM-Fundamentals-Homework-17.jpg" /]

[image assetsSrc="Java-ORM-Fundamentals-Homework-18.jpg" /]

Both methods cooperate closely.

**FillEntity** calls for **fillField** and passes the entity which fields have to be filled, current field, the **ResultSet** object from which we will get information, and field’s **Column** annotation name, which will give us access to the value in the **ResultSet**.

[/slide]

[slide]

# 8. Test Framework

If you came to this point you are done with building the **first part** of our MiniORM.

Now let’s test it to make sure it works as expected. Create several users and persist them in the database.

Then update some of the properties of the users (e.g., change password or increase age or some other change).

Remember you need to use the persist method to commit changes of the object to the database.

Make sure the data is always updated in the database.

Here is some example of usage:

[image assetsSrc="Java-ORM-Fundamentals-Homework-19.jpg" /]

[/slide]

[slide]

# 9. Fetch Users

Insert several users in the database and **print the usernames and passwords** of those who are **registered after 2010** year and are **at least 18 years old**.

[/slide]
