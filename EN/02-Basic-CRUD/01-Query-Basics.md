# The Basics of Querying

[slide hideTitle]

# The Basics of Querying

**CRUD** operations are the most used functionalities in databases and applications.

**CRUD** is an acronym that stands for **C**reate, **R**ead, **U**pdate and **D**elete.


## CREATE

Using the **INSERT INTO** statement we can choose tables and rows which we want to populate, indicating the values after the **VALUES** keyword.

``` java
INSERT INTO `students` (`full_name`, `age`, `course`)     
VALUES 
('Jane Doe', 14, 'Java Basics'), 
('John Doe', 22, 'JavaScript Applications');
```

We are inserting records into a table called **students**.

The data will be added to the specified columns, so it is important that the order of values follow that of the specified columns.

If you are inserting values into all the columns, writing the column names is optional but the order of the values still has to match that of the columns in the table.


## READ
Using the **SELECT** keyword, which indicates *retrieve* combined with the **FROM** keyword, which indicates the table, we retreive our records from the database. 

``` java
SELECT `full_name`, `age`, `course`
FROM `students`;
```

We retrieve information for the name, age, and course columns, any other columns available in the table will not be shown.

Specifying the exact column names rather than using the `SELECT *` allows you to control what kinds of information you're retrieving.

## UPDATE
Using the **UPDATE** keyword, we can change the specified records to different values in their columns.

Doing so requires another keyword - **WHERE** which helps us with filtering the table and updating only the records we want. 

``` java
UPDATE `students`                    
SET `course` = 'Java Fundamentals'   
WHERE `full_name` = 'Jane Doe'       
```

We are updating the values in the course field of any record that matches the condition specified after the **WHERE** keyword.

If you omit the **WHERE** keyword, all records will be updated even if you did not mean to do so.

When updating the database you usually want to update only specific records, so a condition has to be specified.


## DELETE

Using the **DELETE** statement we can remove records from our database.

Don't forget to add a **WHERE** statement, so that you can specify a condition for the records that should be deleted.

``` java
DELETE FROM `students`               
WHERE `course` = 'JavaScipt Basics'   
```

We are deleting a record from the **students** table, where a certain condition is true.

[/slide]
