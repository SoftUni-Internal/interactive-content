[slide hideTitle]

# JOIN Statements

The **JOIN** statements enable us to **connect** two tables by their **foreign keys** and take all the information we need **simultaneously** with only one query statement.

To achieve **JOIN**, we need two tables and a **JOIN CONDITION**.

Take a look at this example:

```java
SELECT * // Here, we select everything from the two tables.
FROM `table_a` // We name the first table that we want to join.
JOIN `table_b` ON `table_b`.common_column = `table_a`.common_column // And than we create a "Join condition" using "FOREIGN KEYS".
```
[/slide]

[slide hideTitle]
# Problem with Solution: Trip Organization - TODO: Add Tests

**A link to the** [resources](https://videos.softuni.org/resources/java/java-mysql/05.Table-Relations-Camp-Db-Lab.zip) **for this task.**

Create a query that retrieves information about the transportation organization of the SoftUni camp. 

Get information about the drivers (**name and id**) and their **vehicle type**. 

[/slide]

