[slide hideTitle]

# Cascade Operations

When we create table relations with **foreign keys** we get few more benefits out of it.

One of those benefits would be **Cascade Operations**.

Cascading is a powerful tool but it should be used with a conscious mind as it may be pretty tricky and even lead us to changes to the data that we have not intended.

Cascading allows when a change is made to a certain entity, this change to apply to all related entities.

[image assetsSrc="Table-Relations(3).png" /]

## Cascade DELETE & Cascade UPDATE

Cascade can be either **DELETE** OR **UPDATE**, followed with a few guidelines you can choose by yourself when you use this strategy.

[/slide]

[slide hideTitle]

# CASCADE DELETE

**Cascade Delete** is used only when the related entities are meaningless without the "main" entity.

Do not use it when making **logical delete/soft delete**. Keep the data in the database but marking it as deleted with a flag-bool.

- You preserve **history**

Keep in mind that in more complicated relations, where there is **circular reference**, the cascade operations will not work.

**Example:**

```java
CREATE TABLE `drivers` (                                        # Create the first table
  `driver_id` INT PRIMARY KEY,                                  # Set its primary key
  `driver_name` VARCHAR(50)
);

CREATE TABLE `cars` (                                           # Create the second table
  `car_id` INT PRIMARY KEY,                                   
  `driver_id` INT,                                              # Set a column for its foreign key.
  CONSTRAINT `fk_car_driver` FOREIGN KEY(`driver_id`)           # Create the foreign key constraint.
  REFERENCES drivers(`driver_id`) ON DELETE CASCADE;            # Set the behaviour on deletion.

```
[/slide]

[slide hideTitle]
# Problem with Solution: Delete Mountains
[code-task title="Problem: Delete Mountains" taskId="java-db-and-mysql-table-relations-delete-mountains" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]

[/code-editor]
[task-description]
## Description
**Drop the tables from the first task.**

Create a query that creates a **one-to-many relationship** between a table, 

holding information about **peaks (id, name)** and another about **mountains (id, name, mountain_id)**,

so that when a **mountain gets removed from the database, all of his peaks are deleted too**.

[/task-description]
[code-io /]
[tests]
[test open]
[input]
insert into mountains(id, name)
values (1, "Mount Everest"),
       (2, "Mount Fuji");
       
insert into peaks(id, name, mountain_id)
values (1, "Vihren", 1),
       (2, "Kutelo", 1),
       (3, "Musala", 2);
       
delete
from mountains
where id = 1;
select *
from peaks;
[/input]
[output]
4
Mount KatahdinMount Katahdin
2
[/output]
[/test]
[test]
[input]
iinsert into mountains(id, name)
values (1, "Mount Everest"),
       (2, "Mount Fuji");
       
insert into peaks(id, name, mountain_id)
values (1, "Vihren", 1),
       (2, "Kutelo", 1),
       (3, "Musala", 2);
       
delete
from mountains
where id = 2;
select *
from peaks;
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

# CASCADE UPDATE

**Cascade Update** is used when the primary key is NOT identity(not **auto-incremented**) and therefore it can be changed.
It is best to use it when you have the **UNIQUE** constraints.
**Do not use** it when the primary key is **identity**(auto-increment).

**Example:**

```java
CREATE TABLE `drivers` (                                    # Create the first table
  `driver_id` INT PRIMARY KEY,
  `driver_name` VARCHAR(50)
);

CREATE TABLE `cars` (                                       # Create the second table
  `car_id` INT PRIMARY KEY,
  `driver_id` INT,                                          # Set a column for it's foreign key
  CONSTRAINT `fk_car_driver` FOREIGN KEY(`driver_id`)       # Create a foreign key constraint
  REFERENCES `drivers`(`driver_id`) ON UPDATE CASCADE;      # Set on Update behaviour.
```

You should keep in mind that **Cascading** can be avoided by using **triggers** or **procedures**.

[/slide]
