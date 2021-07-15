# Java Persistence Query Language

[slide hideTitle]

# Definition

**JPQL** (short for Java Persistence Query Language) is an **object-oriented** query language, part of the Java persistence API.

When working with complex queries, default query methods are not sufficient.

JPQL makes queries against entities stored in a relational database.

It is similar to SQL except for a few differences:

- In JPQL, we interact and make queries with the entities, not with the tables from the database
- It will not directly affect the database

## Functionalities

[image assetsSrc="Spring-Data-Advanced(3).png" /]

With the JQPL syntax, we can create three types of clauses:

- SELECT clauses
- UPDATE clauses
- DELETE clauses

[/slide]

[slide hideTitle]

# JPQL Syntax

The syntax of JPQL is similar to that of SQL, with one notable difference - SQL works directly with the database, its tables, records, and fields, whereas JPQL works with the Java classes and instances.

Consider the following example:

```java
1.            2.                 3.          4.
SELECT i FROM Ingredient i WHERE b.name IN names
```

1. The select clause
2. The Java class entity we want to work with
3. The alias - how we refer to the table
4. The filtration clause, where we use the entity's properties

## Update and Delete

```java
//A Batch Update clause

UPDATE Ingredients AS b         1.
SET b.price = b,price * 1.10    2.
WHERE b.name in names          3.
```

1. The UPDATE keyword and pointing the entity with an alias.
2. What should be updated.
3. The filtration clause.

```java
DELETE FROM Ingredient AS b     1. 
WHERE b.name = :name            2.
```

1. The DELETE clause plus the entity by choice and an alias
2. The filtration for the batch DELETE.

## JOINS

An indispensable part of working with a database is linking our tables.

With **JPQL**, we have to declare the **JOIN clauses** by ourselves.

As long as we are familiar with how **JOINS** work, Spring Data knows how to find the criteria to join the table by.

There are three **JOIN** clause types available in JPQL:

- INNER JOIN
- LEFT OUTER JOIN
- LEFT INNER JOIN

Take a look at the following example:

```java
SELECT s.name                 
FROM Shampoo AS s             
INNER JOIN s.batch AS b      
WHERE b.batchDate <:batchDate 
```

We choose the data we want from the table through SELECT.

Then, we declare the entities and their aliases.

We use the JOIN keyword and the table on which to execute the operation.

Finally, we can filter the data by using the properties of the joined entity.

[/slide]