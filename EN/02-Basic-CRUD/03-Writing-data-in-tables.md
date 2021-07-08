[slide hideTitle]

# Writing Data into Tables

We can use the `INSERT` keyword to create new records.

``` java
INSERT INTO `students`
VALUES ('Maria', 'Richardson', '22', 'JavaScript Applications');
```

This query works just fine, but it is better to specify the columns that we want to **insert into**:

```java
INSERT INTO `students`(`first_name`, `last_name`, `age`, `course_name`)     
VALUES ('Maria', 'Richardson', '22', 'JavaScript Applications');         
```

We can also add data in bulk.

This is done by listing all of the data we want to include with a **","** separator between each one.

```java
INSERT INTO students(`first_name`, `last_name`, `age`, `course_name`) 
VALUES ('Maria', 'Richardson', '22', 'JavaScript Applications'),
       ('Jane', 'Doe', '12', 'JavaScript Basics'),
       ('John', 'Doe', '16', 'Java Advanced'), ...
```

[/slide]

[slide hideTitle]

# Reusing Existing Data

In MySQL, we can create a new table using data from an existing table.

```java
CREATE TABLE `courses`     
AS SELECT `course_name` 
FROM `students`            
```

This query will create a new table with a `course_name` column, which it will populate using the records from the `students` table.

We can also take records and write them into an already existing table.

```java
INSERT INTO `courses_records`
SELECT CONCAT(`course_name`, ' ', `course_id`)
FROM `courses`;
```

[/slide]
