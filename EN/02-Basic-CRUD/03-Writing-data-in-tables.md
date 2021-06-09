[slide hideTitle]

# Writing data into tables

Let us take a look at how to **create** records in our database.

The creation of records is done by the keyword **INSERT**.

``` java
INSERT INTO `students`
VALUES ('Maria', 'Richardson', '22', 'JavaScript Applications');
//Here we add a new record to our table students.
```

This query is possible and it will compile, but to be more exhaustive and make our queries easier to comprehend, it's better to name the columns that we want to **INSERT INTO**.

```java
INSERT INTO students(`first_name`, `last_name`, `age`, `course_name`)     // As we specify the column names it will be easier for whoever
VALUES ('Maria', 'Richardson', '22', 'JavaScript Applications');          // reads our query to better undestand what we were trying to do.
```


We can also add data in bulk, it's done by simply listing all of the data we want to include with a **,** separator between each one.

```java
INSERT INTO students(`first_name`, `last_name`, `age`, `course_name`) 
VALUES ('Maria', 'Richardson', '22', 'JavaScript Applications'),
       ('Jane', 'Doe', '12', 'JavaScript Basics'),
       ('John', 'Doe', '16', 'Java Advanced'), ...
```

[/slide]

[slide hideTitle]

# Reusing Existing Data

MySQL gives us the chance to re-use already persisted records or part of records in our other tables.

```java
CREATE TABLE `courses`     // Here we separate our courses
AS SELECTED `course_name`  // taking the name of the course
FROM `students`            // from our students table
```

We can also take records and write them into an already existing table.

```java
INSERT INTO `courses_records`
SELECT CONCAT(`course_name`, ' ', `course_id`)
FROM `courses`;
```


[/slide]
