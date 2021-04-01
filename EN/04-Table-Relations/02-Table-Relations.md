[slide hideTitle]

# Table Relations

Now let us take a closer look over **table relations**.

Table relations connect two tables by a common field, often named the same way. This field is called a **foreign key**.

The **foreign key** is an **identifier** of a record located in another table (usually it is a primary key). **It must be unique**!

By using relationships, we avoid repeating data in the database.

Relationships have multiplicity:
    - **One-to-many** - e.g. mountain/peaks
    - **Many-to-many** - e.g. students/courses
    - **One-to-one** - e.g. driver/driver licence

[/slide]

[slide hideTitle]

## One-To-Many

For the referenced table, it is a constraint that the referenced column is unique.

Otherwise the database will not know which record it should connect the references.

The data type of the referencing column must match the data type of the refered column and the foreign key must already exist.

[image assetsSrc="Table-Relations.png" /]

Here we can examine the **One-To-Many** relationship.

Paraphrased: **"One country has many cities"**.

А **One-to-many** relationship is done by adding a unique identifier in an enitity and then referencing it from another entity with a foreign key constraint.

Foreign key is introduced with this code:
``` java 
CONSTRAINT `fk_peaks_mountains`         //Giving a name of the constraint/foreign key by convention starting with "fk".
FOREIGN KEY (mountain_id)               //Setting a column for a foreign key.
REFERENCES mountains(mountain_id);      //Referencing the unique identifier in another column.
```

[/slide]

[slide hideTitle]

# Problem with Solution: Mountains and Peaks
[code-task title="Mountains and Peaks" taskId="java-db-and-mysql-table-relations-mountains-and-peaks" executionType="tests-execution" executionStrategy="java-code" requiresInput]

[code-editor language=java]

[/code-editor]
[task-description]
## Description
Write a query that creates two tables – **mountains** and **peaks**.

The tables should have:
- Mountains:
  -	**id** 
  -	**name**

- Peaks: 
  - **id**
  -	**name**
  -	**mountain_id**

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

## Many-to-many

When we want to reference multiple records in a given table to multiple referenes in another table, we use а **Many-to-Many** relationship.

We manage to do that through the help of a mapping table.

[image assetsSrc="Table-Relations(1).png" /]

Each record in the mapping table must contain a reference to the first table and a reference to the second table in order for us to manage to **JOIN** them and take the full information we need.

Creating a **Many-to-Many** relationship:

```java
CREATE TABLE `employees` (              // Create the first table
  `employee_id` INT PRIMARY KEY,        // Do not forget to set a primary key
   `employee_name` VARCHAR(50)
);

CREATE TABLE `projects` (               // Crate the second table
  `project_id` INT PRIMARY KEY,         // set unique identifier as well.
   `project_name` VARCHAR(50)
);

CREATE TABLE `employees_projects` (`employee_id` INT, `project_id` INT,    // Create the mapping table
  CONSTRAINT `pk_employees_projects`                                       // with foreign keys referencing to both tables
  PRIMARY KEY(`employee_id`, `project_id`),                                // do not forget that you cannot add entities to the table
  CONSTRAINT `fk_employees_projects_employees`                             // which do not already exist as records in their original tables.
  FOREIGN KEY(`employee_id`)
  REFERENCES `employees`(`employee_id`),
  CONSTRAINT `fk_employees_projects_projects`
  FOREIGN KEY(`project_id`)
  REFERENCES projects(`project_id`)
);
```

[/slide]

[slide hideTitle]

## One-to-One

As the name suggests, **One-to-One** relationship is when one entity references only one other entity.

We can see that in the relationship: Driver-Driving licence.

Paraphrased: **"One driver has one driving licence."**.

It is achieved by two records referencing eachother. 

[image assetsSrc="Table-Relations(2).png" /]

[/slide]


[slide hideTitle]

# Setup

The setup for it would be as follows:

```java
CREATE TABLE `drivers` (                                                // We create the first table                  
  `id` INT PRIMARY KEY,
  `driver_name` VARCHAR(50),
  `driving_licence_id` INT
);

CREATE TABLE `driving_licence` (                                        // We create the second table.
  `id` INT PRIMARY KEY,
  `number` VARCHAR(10),
  `driver_id` INT UNIQUE,
  CONSTRAINT `fk_driving_licence_drivers` 
  FOREIGN KEY (`driver_id`) REFERENCES `drivers`(`driver_id`)           // We set the first foreign key constraint.
);

CONSTRAINT `fk_driver_driving_licence`                                  // Then we set the other constraint.
FOREIGN KEY (`driver_licence_id`)
REFERENCES `driving_licence`(`id`)
 ```
[/slide]
