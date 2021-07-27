[slide hideTitle]

# One-To-Many/Many-To-One

[video src="https://videos.softuni.org/hls/Java/Java-Databases-and-MySQL/EN/Table-Relations/interactive-java-mysql-table-relations-12-13-one-to-many-many-to-one-foreign-key-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Table relations connect two tables by a common field, often named the same way. This field is called a **foreign key**.

The **foreign key** is an **identifier** of a record located in another table (usually it is a **primary key**). 

**It must be unique!**

By using relationships, we avoid repeating data in the database.

Relationships have multiplicity:
- **One-to-many** - e.g. mountain/peaks
- **Many-to-many** - e.g. students/courses
- **One-to-one** - e.g. driver/driver licence

## One-To-Many/Many-To-One

For the referenced table, it is a constraint that the referenced column is unique.

Otherwise, the database will not know which to record it should connect the references.

The data type of the referencing column should match the data type of the referred column, and the foreign key must already exist.

[image assetsSrc="Table-Relations.png" /]

Here, we can examine the **one-to-many** relationship.

Paraphrased: **"One country has many cities"**.

А **one-to-many** relationship is done by adding a unique identifier in an enitity and then referencing it from another entity with a foreign key constraint.

A foreign key is introduced with the following code:

``` java 
CONSTRAINT `fk_peaks_mountains`         // Giving a name of the constraint/foreign key by convention starting with "fk".
FOREIGN KEY (mountain_id)               // Setting a column for a foreign key.
REFERENCES mountains(mountain_id);      // Referencing the unique identifier in another column.
```

[/slide]

[slide hideTitle]
# Problem with Solution: Mountains and Peaks

[video src="https://videos.softuni.org/hls/Java/Java-Databases-and-MySQL/EN/Table-Relations/problem-and-solution-mountains-and-peaks-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Mountains and Peaks" taskId="java-db-and-MySQL-table-relations-mountains-and-peaks" executionType="tests-execution" executionStrategy="mysql-run-queries-and-check-database" requiresInput]
[code-editor language=sql]

```
-- Write your query here
```
[/code-editor]
[task-description]
# Description
Write a query that creates two tables - **mountains** and **peaks**. 

**Link their fields** properly. 

The tables should have:

**Mountains:**
  - id 
  - name

**Peaks:**
  - id
  - name
  - mountain_id

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

# Many-To-Many

[video src="https://videos.softuni.org/hls/Java/Java-Databases-and-MySQL/EN/Table-Relations/interactive-java-mysql-table-relations-16-18-many-to-many-setup-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

When we want to reference multiple records in a given table to multiple references in another table, we use а **many-to-many** relationship.

We manage to do that through the help of a mapping table.

[image assetsSrc="Table-Relations(1).png" /]

**Each record** in the mapping table should contain:
- a reference to the **first** table 
- a reference to the **second** table 

That is in order for us to be able to **join** them and **obtain** the full information we need.

This is how to create a **many-to-many** relationship:

```java
CREATE TABLE `employees` (              // Create the first table
  `employee_id` INT PRIMARY KEY,        // Do not forget to set a primary key
   `employee_name` VARCHAR(50)
);

CREATE TABLE `projects` (               // Crate the second table
  `project_id` INT PRIMARY KEY,         // Set a unique identifier as well
   `project_name` VARCHAR(50)
);

CREATE TABLE `employees_projects` (`employee_id` INT, `project_id` INT,    // Create the mapping table
  CONSTRAINT `pk_employees_projects`                                       // with foreign keys referencing to both tables
  PRIMARY KEY(`employee_id`, `project_id`),                                // Do not forget that you cannot add entities to the table
  CONSTRAINT `fk_employees_projects_employees`                             // which do not already exist as records in their original tables
  FOREIGN KEY(`employee_id`)
  REFERENCES `employees`(`employee_id`),
  CONSTRAINT `fk_employees_projects_projects`
  FOREIGN KEY(`project_id`)
  REFERENCES projects(`project_id`)
);
```

[/slide]

[slide hideTitle]

# One-To-One

[video src="https://videos.softuni.org/hls/Java/Java-Databases-and-MySQL/EN/Table-Relations/interactive-java-mysql-table-relations-19-21-one-to-one-setup-foreign-key-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

As the name suggests, **one-to-one** relationship is when one entity references only one other entity.

We can see that in the relationship: Driver-Driving license.

Paraphrased: **"One driver has one driving license."**.

It is achieved by two records referencing each other. 

[image assetsSrc="Table-Relations(2).png" /]

## Example

This is an example of a **one-to-one** relationship:

```java
CREATE TABLE `drivers` (                                              
  `id` INT PRIMARY KEY,
  `driver_name` VARCHAR(50),
  `driving_licence_id` INT
);

CREATE TABLE `driving_license` (                                        
  `id` INT PRIMARY KEY,
  `number` VARCHAR(10),
  `driver_id` INT UNIQUE,
  CONSTRAINT `fk_driving_licence_drivers` 
  FOREIGN KEY (`driver_id`) 
  REFERENCES `drivers`(`driver_id`)      
);

CONSTRAINT `fk_driver_driving_licence`                                
FOREIGN KEY (`driver_licence_id`)
REFERENCES `driving_licence`(`id`)
```

We begin by creating the **first** table - `drivers`.

Then, we create a **second** table called `driving_license`.

After that, we set the **first foreign key constraint**:

```java
CONSTRAINT `fk_driving_licence_drivers` 
FOREIGN KEY (`driver_id`) 
REFERENCES `drivers`(`driver_id`)   
```

Finally, we set the **other constraint**:

```java
CONSTRAINT `fk_driver_driving_licence`                                
FOREIGN KEY (`driver_licence_id`)
REFERENCES `driving_licence`(`id`)
```

[/slide]
