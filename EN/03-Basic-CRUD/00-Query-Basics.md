# Getting the Query Basics

[slide]

# Getting the Query Basics


Hello, youngling programmer, after getting to know the **data types** and **modeling your first database** in MYSQL, now it's time for you to learn how to do basic **CRUD** operations using queries to the data in it.

First, let's understand what the acronym **CRUD** stands for including few query examples.
-> **C** stands for **CREATE** -- using the **INSERT INTO** statement we can choose table and rows which we want to populate,  
 indicating the values after the **VALUES** keyword.

```java
INSERT INTO                                  //Here we insert records
students (full_name, age, course)            //in our students table
VAlUES                                       //with the desired values.
('Jane Doe', 14, 'Java Basics'),               
('John Doe', 22, 'JavaScript Applications');
```


-> **R** stands for **READ** -- via the **SELECT** keyword which indicates *retrieve*,  
 combined with **FROM** keyword which indicates the table, we *READ* our records.    


``` java
SELECT full_name, age, course FROM students; //We retrieve information for the name, age, and course about our students.
```


-> **U** stands for **UPDATE** -- with the keyword **UPDATE** we can give chosen records different values in their columns,
the keyword **WHERE** helps us with filtering the tabla and updating only the records we want. 

``` java
UPDATE students                    //In this example we update
SET course = 'Java Fundamentals'   //certain row in a table
WHERE full_name = 'Jane Doe'       //where a condition is met.
```


-> **D** stands for **DELETE** -- using the **DELETE** statement we can remove permanently remove records from our database,
while **WHERE** has the same purpose as the example above.

``` java
DELETE FROM students                //Here we delete a record from the table students
WHERE course = 'JavaScipt Basics'   //where certain condition is true.
```
[/slide]