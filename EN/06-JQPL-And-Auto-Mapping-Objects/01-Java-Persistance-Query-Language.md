# Java Persistence Query Language

[slide hideTitle]

# JPQL Definition

JPQL (or the Java Persistence Query Language) is an **object-oriented** query language, which is part of the Java persistence API.

It is a tool used when either our queries get too complex and query method names are just not enough or the method name gets too ugly.

Used to make queries against entities stored in a relational database.

JPQL is similar to SQL except for a few differences.

- The biggest and most important difference is that we interact and make queries with the entities, not with the tables from the DB
- It will not affect the database directly

[/slide]

[slide hideTitle]

# JPQL Functionalities

[image assetsSrc="Spring-Data-Advanced(3).png" /]

With the JQPL syntax, we can create:
- SELECT clauses
- UPDATE clauses
- DELETE clauses

[/slide]

[slide hideTitle]

# Syntax

The syntax of JPQL is similar to the SQL syntax, the difference being that SQL works directly with the database, its tables, records, and fields, whereas JPQL works with the Java classes and instances.

Let us have a few examples look.

```java
  1.              2.     3.          4.
SELECT i FROM Ingredient i WHERE b.name IN names
```

1. The select clause
2. The the Java class entity we want to work with
3. The alias or how the table should be referred to as
4. The filtration clause, where we use the entity's properties

[/slide]

[slide hideTitle]

## JOINS

Naturally, when we work with the database we would need to link our tables.

With **JPQL** we have to declare the **JOIN clauses** by ourselves.

Luckily it's not a hard task, as long as we are familiar with how **JOINS** work, as Spring-Data is smart enough to find the criteria by which the tables should be joined.

Join available in JPQL:

- INNER JOIN
- LEFT OUTER JOIN
- LEFT INNER JOIN

Let's have an example:

```java
SELECT s.name                           // We choose what we want from the table through SELECT
FROM Shampoo AS s                       // then we declare the entities and it's alias
INNER JOIN s.batch AS b                 // declaration of the type of JOIN and the table which should be joined
WHERE b.batchDate <:batchDate           // then we can make a filtration through using the properties of the joined entity.
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

Write a method that selects all shampoos with ingredients in a given list

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