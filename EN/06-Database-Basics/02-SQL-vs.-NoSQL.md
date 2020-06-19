# SQL vs. NoSQL

[slide]
# SQL Databases: Relational Databases

[image assetsSrc="Relational-Databases.png" /]

There are two types of databases:

- relational

- non-relational.

**A relational**, also known as **SQL**, database is very **strict**. It means that the databases **regulate** the input data, what their format is, how **different types** of data are connected, etc.

SQL is one of the most **versatile** options available.

It is also one of the most widely-used options.

Relational databases are great for **complex** queries.

Having a clear structure makes it easy to know what we can do.

Relational databases are highly **restrictive**.

This is neither a plus nor a minus.

It is just a **characteristic** of this type of database.

[/slide]

[slide]
# Relational Databases: Example

[image assetsSrc="rel-db.png" /]

Relational databases organize data into **tables** of **columns** and rows.

Each table defines a type of **entity**, for example, an **order**.

Each column defines a **piece of information about the entity**, for example, the price of an order.

Each row is an **object** or better said, **entity**.

Entities have a **unique key** that identifies them, often called **ID**.

This makes it possible to refer an **entity in a column** of another one.

That's the reason why this type of database is called **relational**, entities can be related to each other.

The first table is about the **items** which are sold in a shop.

- Each item has an **ID**, an **Order ID** which refers to an order entity, name of the item, and price.

The second table is about the customers of the shop.

- Each customer has an **ID**, **name**, and **email**.

The last table is about the **orders made**.

- Each order has an **ID**, **Customer ID**, **date**, and **total price**.

If IDs weren't used, there would have been **many more columns** to keep the information needed.

That would lead to **redundant** and **repetitive** information kept in the database.

By referring to the ID of an entity in a column, we can access it easily.

In this example, each item sold has a **column** referring to the **order ID** and each order has a **column referring** to the **customer ID** who's made the order.

Notice that there are **2 items sold** with Order ID equal to 1 and the total amount in the Order with ID equal to 1 is the sum of the items' prices.
[/slide]


[slide]
# NoSQL Databases: Non-Relational Databases)

# ADD PICTURE

NoSQL, or also non-relational, database has a **dynamic** schema.

A schema is a way the **database is defined**, its structure.

The data stored is **unstructured**.

Properties of an entity, the columns in the SQL database, can be **added dynamically**.

The data stored in the NoSQL database can be **column-oriented**.

A **document-oriented** database is designed to store and query data as document formats.

The most used formats are JSON and XML.

It allows the developers to **evolve the database** with the application's needs.

A graph-based database uses **graph structure** for queries with nodes, edges, and properties to query and store data.

The key concept of the system is the **graph**.

The graph r**elates the data items** in the store to a **collection** of nodes and edges.

The edges represent the relationship between the nodes.

A key-value database is designed for **querying** and **storing** associative arrays and dictionaries.

They contain a collection of objects which are consisted of different fields, each containing data.

These objects are very similar to the JavaScript objects, with which some of you might be familiar.

[/slide]
