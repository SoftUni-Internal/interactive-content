[slide hideTitle]

# Cascade Operations

As mentioned earlier, creating table relations with **foreign keys** brings several benefits.

One of those benefits is **Cascade Operations**.

Cascading applies a change made to a single entity to all related entities.

It is a powerful tool but should be used with caution, as it may be pretty tricky and even lead us to changes to the data that we have not intended.

[image assetsSrc="Table-Relations(3).png" /]

## Cascade DELETE & Cascade UPDATE

Cascade can be either **DELETE** OR **UPDATE**, followed with a few guidelines you can choose by yourself when you use this strategy.

[/slide]

[slide hideTitle]

# CASCADE DELETE

**Cascade Delete** is used only when the related entities are meaningless without the "main" entity.

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

**Drop the tables from the first task.**

Create a query that creates a **one-to-many relationship** between a table. 

It should hold information about **peaks (id, name)** and another about **mountains (id, name, mountain_id)**.

This means that when a **mountain gets deleted from the database, all of his peaks are removed too**.

[/slide]

[slide hideTitle]

# CASCADE UPDATE

**Cascade Update** is used when the primary key is NOT identity(not **auto-incremented**), and therefore, it is changeable.

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

Keep in mind that **Cascading** can be avoided using **triggers** or **procedures**.

[/slide]

