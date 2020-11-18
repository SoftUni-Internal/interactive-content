[slide]
# Retrieving data

Now let's have a look over one of the most common (if not the most) operattion when we are talking about databases.


Retrieving data, is the action where we demand records from our tables, through the keyword **SELECT**, which further gives us several possibilities: 

## Retrieve all available infromation from a table

``` java
SELECT * FROM students; //Gives us back all available records, with all available columns from the table "students".
```


[image assetsSrc="Retrieving-data.png" /]

##  Make a projection of a table


``` java
SELECT full_name, course, grade FROM students; //Makes a "projection" giving us only the infromation we need (full_name, course, grade). 
```


[image assetsSrc="Retrieving-data(1).png" /]


**Keynote** - when we make a projection, we take only data that we need, which optimizes our query and makes less trafic to the database.


## Make a filtration/take a subset of desired rows


``` java
SELECT full_name, grade                   //Makes a filtration, taking a only the subset of records
FROM students                             //that meet our requirement of courseName.
WHERE courseName = "Java Advanced";
```


[image assetsSrc="Retrieving-data(2).png" /]

**Keynote** - This operation won't boost the performance, as the databse has to iterate through all the records in order to find the one that meets the requierment, but it will find you only the records that you need.


## Combining tables


``` java
SELECT course_name, course_schedule, teacher_full_name    //Here we can choose information from
FROM Orders                                               //two tables by using JOIN to join them
INNER JOIN Customers ON Courses.teacherId=Teachers.id;    //by two equal rows
```

[image assetsSrc="Retrieving-data(3).png" /]

Although we show you how **JOIN** works, we are not going to talk about it in this lecture, as you will have it in a further lesson.

[/slide]

[slide]
## Concatenation of columns

### concat()
As you may already know SQL is not only a tool for storing and retrieving data, but you can also use it's build in functions.

Now we will teach you how to use one of the basic string functions, **Concatenation**.

```Java
SELECT
     concat(`first_name`,' ',`last_name`) AS 'full_name',    //The function concat is used to combine first_name, ' ' and last_name
    `course` AS  'Course',                                  // to result in a single column combination of them both - full_name.
    `grade` AS 'Grade'                                      //The keyword 'AS' may be used in order to give a column desired name.
        FROM students;
```
The function **concat()** accepts columnds further combining the values of its record's rows, into a single column.

Let's not forget that:
-> String literals should be enclosed by ['].
-> Table and column names that contain a special symbol should be surrounded by [`].

### concat_ws()

Than we have another function, which is simillar to **concat()**

**concat_ws()** is used in order to join two or more rows, with separator.

```Java
SELECT
    concat_ws(' ', `first_name`, `last_name`) AS 'full_name',   //Simillary the concat_ws function is used to combine rows, strings into a single column.
    `course` AS 'Course'
    `grade` AS 'Grade'
        FROM students
```
The separator is given as first value in the argument, than you list the rows you want to concatenate,
resulting in a new column combination of both. 


It's **important** to remember that concat_ws() has additional behaviour of ignoring the records which have **NULL** value of the given rows.
[/slide]

[slide]
## Filtering the selected rows

[/slide]