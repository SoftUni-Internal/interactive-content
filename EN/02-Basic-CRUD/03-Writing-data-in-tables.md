[slide hideTitle]

# Writing data into tables

Let us take a look at how to **create** records in our database.

The creation of records is done by the keyword **INSERT**.

``` java
INSERT INTO students
VALUES ('Maria', 'Richardson', '22', 'JavaScript Applications');
```

This query is possible and it will compile, but to make queries easier to comprehend, it is better to name the columns that we want to **INSERT INTO**.

```java
INSERT INTO students(first_name, last_name, age, course_name)     
VALUES ('Maria', 'Richardson', '22', 'JavaScript Applications');         
```

We can also add data in bulk.

This is done by listing all of the data we want to include with a **,** separator between each one.

```java
INSERT INTO students(first_name, last_name, age, course_name) 
VALUES ('Maria', 'Richardson', '22', 'JavaScript Applications'),
       ('Jane', 'Doe', '12', 'JavaScript Basics'),
       ('John', 'Doe', '16', 'Java Advanced'), ...
```

[/slide]

[slide hideTitle]

# Reusing Existing Data

In MySQL we can create a new table using data from an existing table.

```java
CREATE TABLE courses     
AS SELECT course_name 
FROM students            
```

MySQL will create a new table with one column **course_name** which it will populate using the records from the **students** table.


We can also take records and write them into an already existing table.

```java
INSERT INTO courses_records
SELECT CONCAT(course_name, ' ', course_id)
FROM courses;
```


[/slide]
