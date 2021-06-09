[slide hideTitle]

# JOIN Statements

The **JOIN** statements enable us to **connect** two tables by their **foreign keys** and take all the information we need **simultaneously** with only one query statement.

To achieve **JOIN**, we need two tables and a **JOIN CONDITION**.

Take a look at this example:

```java
SELECT * 
FROM `table_a` /
JOIN `table_b` ON `table_b`.common_column = `table_a`.common_column 
```

Here, we select **everything** from the two tables.

We **name** the first table that we want to **join**.

And then, we create a "**Join condition**" using "**FOREIGN KEYS**".

[/slide]

[slide hideTitle]
# Problem with Solution: Trip Organization - TODO: Add Tests

**Here is a link to the** [resources]() **for this task.**

Create a query that retrieves information about the transportation organization of the SoftUni camp. 

Get information about the drivers (**name and id**) and their **vehicle type**. 

[/slide]

