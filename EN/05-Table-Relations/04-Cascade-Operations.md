[slide hideTitle]

# Cascade Operations

When we create table relations with **Foreign keys** we get few more benefits out of it, one of those benefits would be **Cascade Operations**.

Cascading is a powerful tool but it should be used with a conscious mind, as it may be pretty tricky and even lead us to changes to the data that we haven't intended.

Cascading allows when a change is made to a certain entity, this change to apply to all related entities.

[image assetsSrc="Table-Relations(3).png" /]

## Cascade DELETE & Cascade UPDATE

Cascade can be either **DELETE** OR **UPDATE**, followed with a few guidelines you can choose by yourself when you use this strategy.

[/slide]

[slide hideTitle]

# CASCADE DELETE

**Uses**
 - Use Cascade Delete only when the related entities are meaningless without the "main" one.

**Do not use**
- When you make **logical delete/soft delete**. Keeping your data in the database but marking it as deleted with a flag-bool.

- You preserve **history**.

Keep in mind that in more complicated relations where there is **Circular Reference** it cascade operations won't work.

**Example:**

```java
CREATE TABLE drivers(                                       //Create the first table
  driver_id INT PRIMARY KEY,                                //Set its primary key
  driver_name VARCHAR(50)
);

CREATE TABLE cars(                                          //Create the second table
  car_id INT PRIMARY KEY,                                   
  driver_id INT,                                            //set a column for it's foreign key
  CONSTRAINT fk_car_driver FOREIGN KEY(driver_id)           //create the foreign key constraint
  REFERENCES drivers(driver_id) ON DELETE CASCADE);         //set the behaviour on deletion.

```
[/slide]

[slide hideTitle]
# Problem: Delete Mountains
[code-task title="Problem: Delete Mountains" taskId="7b83c243-38f3-4147-ac70-b80a3d3ce501" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
**Drop tables from the task 1.**

Write a query to create a **one-to-many relationship** between a table, 

holding information about **peaks (id, name)** and other - about **mountains (id, name, mountain_id)**, 

so that when a **mountain gets removed from the database, all of his peaks are deleted too**.

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

[slide]

# Solution: Delete Mountains

[/slide]


[slide hideTitle]

# CASCADE UPDATE

Cascade update behavior is similar to cascade delete, therefore with a rule of thumb, you will understand when to use it and when not to.

## Cascade Update

**Uses**
- Use it when the primary key is NOT identity(not **auto-increment**) and therefore it can be changed.
- It's best to use it when you have the **UNIQUE** constraints.
**Do not use**
- When the primary key is **identity**(auto-increment).

Let's have an
**Example:**

```java
CREATE TABLE drivers(                                   //Create the first table
  driver_id INT PRIMARY KEY,
  driver_name VARCHAR(50)
);

CREATE TABLE cars(                                      //Create the second table
  car_id INT PRIMARY KEY,
  driver_id INT,                                        //set a column for it's foreign key
  CONSTRAINT fk_car_driver FOREIGN KEY(driver_id)       //create a foreign key constraint
  REFERENCES drivers(driver_id) ON UPDATE CASCADE);     //set on Update behaviour.
```

You should keep in mind that **Cascading** can be avoided by using triggers or procedures.

[/slide]