[slide hideTitle]

# Cascade Operations

As mentioned earlier, creating table relations with **foreign keys** brings several benefits.

One of those benefits is the ability to perform **cascade operations**.

Cascading applies the **mofifications** of a **single** entity to **all** related entities.

It is a powerful tool but should be used with caution, as it may be pretty tricky and even lead us to data changes that we may not intend to do.

[image assetsSrc="Table-Relations(3).png" /]

## Cascade DELETE & Cascade UPDATE

Cascading can be performed either with `DELETE` or `UPDATE` followed by a few guidelines you can choose when you use this strategy.

[/slide]

[slide hideTitle]

# Cascade DELETE

**Cascade DELETE** is used only when the related entities are meaningless without the "main" entity.

Avoid using it when performing **logical delete/soft delete**. 

Keep the data in the database but marking it as deleted with a flag bool.

- You preserve **history**

Keep in mind that in more complicated relations, where there is **circular reference**, the cascade operations will not work.

**Example:**

```java
CREATE TABLE `drivers` (                              # Create the first table
 `driver_id` INT PRIMARY KEY,                         # Set its primary key
 `driver_name` VARCHAR(50)
);

CREATE TABLE `cars` (                                 # Create the second table
 `car_id` INT PRIMARY KEY, 
 `driver_id` INT,                                     # Set a column for its foreign key
 CONSTRAINT `fk_car_driver` FOREIGN KEY(`driver_id`)  # Create the foreign key constraint
 REFERENCES drivers(`driver_id`) ON DELETE CASCADE;   # Set the behaviour on deletion.
```
[/slide]


[slide hideTitle]
# Problem with Solution: Delete Mountains
[code-task title="Delete Mountains" taskId="java-db-and-MySQL-table-relations-delete-mountains" executionType="tests-execution" executionStrategy="mysql-run-queries-and-check-database" requiresInput]
[code-editor language=sql]

```
-- Write your query here
```
[/code-editor]
[task-description]
# Description
Use the tables from the **first** problem - **Mountains and Peaks**.

Write a query to create a **one-to-many** relationship between one table, holding information about **mountains** (**id**, **name**) and another table - about **peaks** (**id**, **name**, **mountain_id**), so that when a mountain gets removed from the database, all of its peaks get deleted too.


[/task-description]
[code-io /]
[tests]
[test open]
[input]
insert into mountains(id,name) values(1,"Pirin"),(2,"Rila");
insert into peaks(id,name,mountain_id) values(1, "Vihren",1),(2, "Kutelo",1),(4, "Musala",2);
delete from mountains where id = 1;
select \* from peaks;
[/input]
[output]
4
Musala
2
[/output]
[/test]
[test]
[input]
insert into mountains(name) values("Pirin"),("Rila");
insert into peaks(id,name,mountain_id) values(1, "Vihren",1),(2, "Kutelo",1),(4, "Musala",2);
delete from mountains where id = 2;
select \* from peaks;
[/input]
[output]
1
Vihren
1
2
Kutelo
1
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Cascade UPDATE

**Cascade UPDATE** is used when the primary key is not an identity (not **auto-incremented**), making it changeable.

It is best to use it when you have **UNIQUE** constraints.

**Do not use** it when the primary key is **identity** (auto-increment).

**Example:**

```java
CREATE TABLE `drivers` (                               # Create the first table
 `driver_id` INT PRIMARY KEY,
 `driver_name` VARCHAR(50)
);

CREATE TABLE `cars` (                                  # Create the second table
 `car_id` INT PRIMARY KEY,
 `driver_id` INT,                                      # Set a column for its foreign key
 CONSTRAINT `fk_car_driver` FOREIGN KEY(`driver_id`)   # Create a foreign key constraint
 REFERENCES `drivers`(`driver_id`) ON UPDATE CASCADE;  # Set on Update behaviour
```

Keep in mind that **cascading** can be avoided using **triggers** or **procedures**.

[/slide]

