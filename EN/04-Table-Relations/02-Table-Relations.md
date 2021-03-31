[slide hideTitle]

# Table Relations

Now let's have a closer look over **table-ralations**.

Table relations is basically connecting two tables by a common field, often named the same way.

There are several things you must know before creating your first relation.

- The **foreign key** is an **indetifier** of a record located in another table (usually its a primary key.) **It must be unique**.


- By using relationships we avoid repeating data in the database.


- Relationships have multiplicity:


    - **One-to-many** - e.g. mountains/peaks
    - **Many-to-many** - e.g. student/course
    - **One-to-one** - e.g. driver/driver licence

[/slide]

[slide hideTitle]

## One-To-Many

For the referenced table it's a constraint that the referenced column is unique, otherwise the database won't know with which record it should connect the references. 

 
The constrains for the referencing table are that the type of foreign_key matches the referenced type as well as that the foreign key must be of an already existing property.

[image assetsSrc="Table-Relations.png" /]

Here we can examine **One-To-Many** relationship.

Peraprahsed: **"One country has many cities"**.

One-to-many relationship is done by adding a unique identifier in a enitity and than referencing it from another entity with through a foreign key constraint.

Foreign key is introduced with this code:
``` java 
CONSTRAINT `fk_peaks_mountains`         //Giving a name of the constraint/foreign key by convention starting with "fk".
FOREIGN KEY (mountain_id)               //Setting a column for a foreign key.
REFERENCES mountains(mountain_id);      //Referencing the unique identifier in another column.
```

[/slide]

[slide hideTitle]

# Problem: Mountains and Peaks
[code-task title="Problem: Mountains and Peaks" taskId="fdf83a27-ac8d-42f0-9f7b-5571c41ccf6b" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description
Write a query to create two tables – **mountains** and **peaks** and **link their fields properly**. Tables should have:

-	Mountains:
  -	**id** 
  -	**name**
-	Peaks: 
  - **id**
  -	**name**
  -	**mountain_id**

Check your solutions using the "**Run Queries and Check DB**" strategy.

## Examples


[/task-description]
[code-io /]
[tests]
[test]
[input]
SELECT DISTINCT lower(column_name)
FROM INFORMATION_SCHEMA.key_column_usage
WHERE TABLE_SCHEMA = database()
  and lower(table_name) = 'mountains'
order by lower(column_name);


SELECT DISTINCT lower(column_name)
FROM INFORMATION_SCHEMA.key_column_usage
WHERE TABLE_SCHEMA = database()
  and lower(table_name) = 'peaks'
order by lower(column_name);
[/input]
[output]
id
id
mountain_id
[/output]
[/test]
[test]
[input]
SELECT DISTINCT lower(column_name)
FROM INFORMATION_SCHEMA.key_column_usage
WHERE TABLE_SCHEMA = database()
  and lower(table_name) = 'mountains'
order by lower(column_name);


SELECT DISTINCT lower(column_name)
FROM INFORMATION_SCHEMA.key_column_usage
WHERE TABLE_SCHEMA = database()
  and lower(table_name) = 'peaks'
order by lower(column_name);
[/input]
[output]
id
id
mountain_id
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Solution: Mountains and Peaks

[/slide]

[slide hideTitle]

## Many to many

When we want to reference multiple records in a given table to multiple referenes in another table, than we use **Many-to-Many** relationship.

We manage to do that through the help of a maping table.

[image assetsSrc="Table-Relations(1).png" /]

Each record in this mapping table must contain a reference to the first table and a reference to the second table in order for us to manage to **JOIN** them and take the full information we need.

We will talk more about **JOIN** further in the lesson.

How to create **Many-to-Many** relationship:

```java
CREATE TABLE employees(              //Create the first table
  `employee_id` INT PRIMARY KEY,     //Don't forget to set a primary key
   `employee_name` VARCHAR(50)
);

CREATE TABLE projects(            //Crate the second table
  `project_id` INT PRIMARY KEY,   //set unique identifier as well.
   `project_name` VARCHAR(50)
);

CREATE TABLE employees_projects(`employee_id` INT, `project_id` INT,    //Create the mapping table
  CONSTRAINT `pk_employees_projects`                                    //with foreign keys referencing to both tables
  PRIMARY KEY(`employee_id`, `project_id`),                             //don't forget that you can't add entities to the table
  CONSTRAINT `fk_employees_projects_employees`                          //which don't already exist as records in their original tables.
  FOREIGN KEY(`employee_id`)
  REFERENCES employees(`employee_id`),
  CONSTRAINT `fk_employees_projects_projects`
  FOREIGN KEY(`project_id`)
  REFERENCES projects(`project_id`)
);
```

[/slide]

[slide hideTitle]

## One to One

This is the most uncommon relationship, as we don't have it that often in the real world. 

As the name suggests, **One-to-One** relationship is when one entity references only one other entity.

We can see that in the relationship: Driver-Driving licence.

Peraphrased: **"One driver has one driving licence."**.

It's achieved by two records referencing eachother. 

[image assetsSrc="Table-Relations(2).png" /]

[/slide]


[slide hideTitle]

# Setup

The setup for it would be as follows:

```java
CREATE TABLE drivers(                                             //We create the first table                  
  `id` INT PRIMARY KEY,
  `driver_name` VARCHAR(50),
  `driving_licence_id` INT
);

CREATE TABLE driving_licence(                                     //We create the second table.
  `id` INT PRIMARY KEY,
  `number` VARCHAR(10),
  `driver_id` INT UNIQUE,
  CONSTRAINT `fk_driving_licence_drivers` 
  FOREIGN KEY (driver_id) REFERENCES drivers(driver_id)           //We set the first foreign key constraint.
);

CONSTRAINT `fk_driver_driving_licence`                            //Then we set the other constraint.
FOREIGN KEY (driver_licence_id)
 REFERENCES driving_licence(id)
 ```
[/slide]
