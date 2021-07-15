# Java Persistence Query Language

[slide hideTitle]

# JPQL Definition

JPQL (or the Java Persistence Query Language) is an **object-oriented** query language, part of the Java persistence API.

When working with complex queries, default query methods are not sufficient.

JPQL makes queries against entities stored in a relational database.

It is similar to SQL except for a few differences.

- In JPQL, we interact and make queries with the entities, not with the tables from the database
- It will not directly affect the database

[/slide]

[slide hideTitle]

# JPQL Functionalities

[image assetsSrc="Spring-Data-Advanced(3).png" /]

With the JQPL syntax, we can create three types of clauses:

- SELECT clauses
- UPDATE clauses
- DELETE clauses

[/slide]

[slide hideTitle]

# Syntax

The syntax of JPQL is similar to the SQL syntax, the difference being that SQL works directly with the database, its tables, records, and fields, whereas JPQL works with the Java classes and instances.

Consider the following example:

```java
  1.              2.     3.          4.
SELECT i FROM Ingredient i WHERE b.name IN names
```

1. The select clause
2. The the Java class entity we want to work with
3. The alias - how we refer to the table
4. The filtration clause, where we use the entity's properties

[/slide]

[slide hideTitle]

## JOINS

Naturally, when working with the database, we should link our tables.

With **JPQL**, we have to declare the **JOIN clauses** by ourselves.

As long as we are familiar with how **JOINS** work, Spring Data knows how to find the criteria to join the table by.

Join available in JPQL:

- INNER JOIN
- LEFT OUTER JOIN
- LEFT INNER JOIN

Let's have an example:

```java
SELECT s.name                           // We choose the data we want from the table through SELECT
FROM Shampoo AS s                       // Then we declare the entities, and their aliases
INNER JOIN s.batch AS b                 // Declaration of type JOIN and the table on which to execute the operation
WHERE b.batchDate <:batchDate           // Then, we can filter data by using the properties of the joined entity
```
[/slide]

[slide hideTitle]

# Update and Delete

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

[/slide]

[slide hideTitle]

# Problem: Select Shampoos by Ingredients

### Description

Write a method that selects all shampoos with ingredients in a given list.

### Example

| **input** | **output** |
| --- | --- |
| Berry, Mineral-Colagen  | Color Protection & Radiance  |
|   | Fresh it Up!  |
|   | Nectar Nutrition  |
|   | Superfruit Nutrition  |
|   | Color Protection & Radiance  |
|   | Nectar Nutrition  |
|   | …  |
|   |    |


[/slide]

[slide hideTitle]

# Solution: Select Shampoos by Ingredients

```java
@Repository
public interface IngredientRepository extends JpaRepository<Ingredient, Long>{

     @Query(value = "SELECT s FROM Shampoo s " +
      "JOIN s.ingredients i WHERE i IN :ingredients")
     List<Shampoo> findByIngredientsIn(@Param(value = "ingredients")   
          Set<Ingredient> ingredients);
}
```

[/slide]