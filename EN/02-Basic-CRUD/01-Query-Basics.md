# The Basics of Querying

[slide hideTitle]

## The Basics of Querying

The **CRUD** operations are the most used functionallities in databases and applications.

**CRUD** itself is an acronym, meaning **C**reate, **R**ead, **U**pdate and **D**elete.

## **CREATE** 

Using the **INSERT INTO** statement we can choose tables and rows which we want to populate, indicating the values after the **VALUES** keyword.

``` java
INSERT INTO                                  --Here we insert records
students (full_name, age, course)            --in our students table
VAlUES                                       --with the desired values.
('Jane Doe', 14, 'Java Basics'),               
('John Doe', 22, 'JavaScript Applications');
```


## **READ** 
Using the **SELECT** keyword, which indicates *retrieve* combined with the **FROM** keyword, which indicates the table, we retreive our records from the database. 

``` java
SELECT full_name, age, course
FROM students;

--We retrieve information for the name, age, and course about our students--
```

## **UPDATE**
Using the keyword **UPDATE**, we can change specified records to different values in their columns,
the keyword **WHERE** helps us with filtering the table and updating only the records we want. 

``` java
UPDATE students                    --In this example we update.
SET course = 'Java Fundamentals'   --certain row in a table.
WHERE full_name = 'Jane Doe'       --where a condition is met.
```

## **DELETE** 
Using the **DELETE** statement we can remove records from our database,
while **WHERE** has the same purpose as the example above.

``` java
DELETE FROM students                --Here we delete a record from the table students.
WHERE course = 'JavaScipt Basics'   --where certain condition is true.
```
[/slide]
