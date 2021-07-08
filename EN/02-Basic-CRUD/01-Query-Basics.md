# The Basics of Querying

[slide hideTitle]

# The Basics of Querying

**CRUD** operations are the most used functionalities in databases and applications.

**CRUD** is an acronym that stands for **C**reate, **R**ead, **U**pdate, and **D**elete.

## CREATE

Using the `INSERT INTO` statement, we can choose the tables and rows which we want to populate, indicating the values after the `VALUES` keyword.

``` java
INSERT INTO `students` (`full_name`, `age`, `course`)     
VALUES 
('Jane Doe', 14, 'Java Basics'), 
('John Doe', 22, 'JavaScript Applications');
```

In this example, we insert values into a table called `students`.

Note that the values of an inserted record should follow the order of the table columns.

If you are inserting values into all the columns, writing their names is optional, but the order of the values still has to match that of the columns in the table.

## READ

Using the `SELECT` keyword, which indicates **retrieving**, combined with the `FROM` keyword, we can get records from the database. 

``` java
SELECT `full_name`, `age`, `course`
FROM `students`;
```

In this example, we retrieve information for the `full_name`, `age`, and `course` columns. Any other columns available in the table will not be shown.

Specifying the exact column names rather than using the `SELECT *` allows you to control what kinds of information you're retrieving.

## UPDATE

The `UPDATE` keyword allows us to change the records in our database.

To do so, we also need to use `SET` to actually change the value and `WHERE` to specify a condintion.

``` java
UPDATE `students`                    
SET `course` = 'Java Fundamentals'   
WHERE `full_name` = 'Jane Doe'       
```

We are updating the values in the `course` field of any record that matches the condition specified after the `WHERE` keyword.

If you omit the `WHERE` keyword, all records will be updated.

When updating the database, you usually want to update only specific records, so you will need to set conditions.

## DELETE

Using the `DELETE` statement, we can remove records from our database.

Do not forget to add a `WHERE` statement so that you can specify a condition for the records that should be deleted.

``` java
DELETE FROM `students`               
WHERE `course` = 'JavaScipt Basics'   
```

In this example, we delete a record from the `students` table if value of the `course` field matches the given word.

[/slide]
