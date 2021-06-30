[slide hideTitle]

# Java Persistence Query Language - JPQL

JPQL is a tool used when either our queries get too complex and query method names are just not enough or the method name gets too ugly.

It's an **object-oriented** query language part of the Java Persistence API.

Used to make queries against entities stored in a relational database.

JPQL is similar to SQL except for a few differences.

- The biggest and most important difference is that we interact and make queries with the entities, not with the tables from the DB.
- It won't affect the database directly.

[/slide]

[slide hideTitle]

# JPQL Functionalities

The JPQL functionalities include:

[image assetsSrc="Spring-Data-Advanced(3).png" /]

The functionalities include: 
- SELECT clauses.
- UPDATE clauses, you can also do bulk UPDATE.
- DELETE clauses and bulk DELETE. 

[/slide]

[slide hideTitle]

# Syntax

The syntax of JPQL is pretty intuitive as long as we have worked with SQL before, it's pretty similar to it.

As mentioned above the difference between them is that SQL works directly with the database, its tables, records, and fields, whereas JPQL works with the Java classes and instances.

This is a plus to us, as it maps the database records to classes with which we can interact in our program.

Let's have a few examples look.

```java
//A simple SELECT clause.

  1.              2.       3.        4.
SELECT b FROM Ingredient AS b WHERE b.name IN names
```

1. The select keyword.
2. The entity we want to work with.. don't forget it's a java class, not the table itself.
3. Allias or how the table should be referred to as.
4. The filtration clause, where we use the entity's properties... bonus we get to have **CodeCompletion**.
[/slide]

[slide hideTitle]

### JOINS

Naturally, when we work with the database we would need to **JOIN** our tables, with **JPQL** we have to declare the joins by ourselves.

Luckily it's not a hard task, as long as we are familiar with how **JOINS** work, as Spring-Data is smart enough to find the criteria by which the tables should be joined.

Join available in JPQL:

- INNER JOIN
- LEFT OUTER JOIN
- LEFT INNER JOIN


Let's have an example:

```java
SELECT s.name                           //We choose what we want from the table through SELECT
    FROM Shampoo AS s                   //then we declare the entities and it's alias
   INNER JOIN s.batch AS b              //declaration of the type of JOIN and the table which should be joined
   WHERE b.batchDate <:batchDate       //then we can make a filtration through using the properties of the joined entity.
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

     @Query(value = "select s from Shampoo s " +
      "join s.ingredients i where i in :ingredients")
     List<Shampoo> findByIngredientsIn(@Param(value = "ingredients")   
          Set<Ingredient> ingredients);
}
```

[/slide]