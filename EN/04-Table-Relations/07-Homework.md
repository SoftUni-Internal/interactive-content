# Homework

[slide hideTitle]
# Problem: One-To-One Relationship - TODO: Add Tests

**Here is a link to the** [resources](https://videos.softuni.org/resources/java/java-mysql/05.Table-Relations-Geography-Db-Exercise.zip) **for this task.**

Create two tables as follows. Use the appropriate data types.

**Insert the data from the example below.**

•	Alter the **people** table and make **person_id** a **primary key**. 

•	Create a **foreign key** between **people** and **passports** by using the **passport_id** column. 

•	Think about which passport field should be **UNIQUE**.

## Examples

**People**

| **person_id** | **first_name** | **salary** | **passport_id** |
| --- | --- | --- | --- |
| 1   | Roberto | 43300.00 | 102 |
| 2 | Tom | 56100.00 | 103 |
| 3 | Yana | 60200.00 | 101 |
|  |  |  |  |

**Passports**

| **passport_id** | **passport_number** |
| --- | --- |
| 101 | N34FG21B |
| 102 | K65LO4R7 |
| 103 | ZE657QP2 |
|  |  |

[/slide]

[slide hideTitle]
# Problem: One-To-Many Relationship - TODO: Add Tests

**Here is a link to the** [resources](https://videos.softuni.org/resources/java/java-mysql/05.Table-Relations-Geography-Db-Exercise.zip) **for this task.**

Create two tables as follows. Use the appropriate data types.

Insert the data from the example below. 

Add primary and foreign keys.


## Examples

**manufacturer**

| **manufacturer_id** | **name** | **established_on** |
| --- | --- |
| 1   | BMW | 01/03/1916 |
| 2 | Tesla | 01/01/2003 |
| 3 | Lada | 01/05/1966 |
|  |  | |

**models**

| **model_id** | **name** | **manufacturer_id** |
| --- | --- |
| 101 | X1 | 1 |
| 102 | i6 | 1 |
| 103 | Model S | 2 |
| 104 | Model X | 2 |
| 105 | Model 3 | 2 |
| 106 | Nova | 3 |
|  |  |  |

[/slide]

[slide hideTitle]
# Problem: Many-To-Many Relationship - TODO: Add Tests

**Here is a link to the** [resources](https://videos.softuni.org/resources/java/java-mysql/05.Table-Relations-Geography-Db-Exercise.zip) **for this task.**

Create three tables as follows. Use the appropriate data types.

**Insert the data from the example above**.

Add primary and foreign keys.

Hint: the table **student_exams** should have a composite primary key.
.

## Examples

**students**

| **student_id** | **name** |
| --- | --- |
| 1   | Mila |
| 2 | Toni |
| 3 | Ron |
|  |  |

**exams**

| **exam_id** | **name** |
| --- | --- |
| 101 | Spring MVC |
| 102 | Neo4j |
| 103 | Oracle 11g |
|  |  |

**students_exams**

| **student_id** | **exam_id** |
| --- | --- |
| 1 | 101 |
| 1 | 102 |
| 2 | 101 |
| 3 | 103 |
| 2 | 102 |
| 2 | 103 |
|  |  |

[/slide]

[slide hideTitle]
# Problem: Self-Referencing - TODO: Add Tests

**Here is a link to the** [resources](https://videos.softuni.org/resources/java/java-mysql/05.Table-Relations-Geography-Db-Exercise.zip) **for this task.**

Create a single table as follows. Use appropriate data types.

**Insert the data from the example above**.

Add primary and foreign keys. 

The foreign key should be between **manager_id** and **teacher_id**.

## Examples

**Teachers**

| **teacher_id** | **name** | **manager_id** |
| --- | --- |
| 101 | John |
| 102 | Maya | 106 |
| 103 | Silvia | 106 |
| 104 | Ted | 105 |
| 105 | Mark | 101 |
| 106 | Greta | 101 |
|  |  |  |

[/slide]

[slide hideTitle]
# Problem: Online Store Database - TODO: Add Tests

**Here is a link to the** [resources](https://videos.softuni.org/resources/java/java-mysql/05.Table-Relations-Geography-Db-Exercise.zip) **for this task.**

Create a new database and design the following structure:

[image assetsSrc="Table-Relations-Homework.png" /]


[/slide]

[slide hideTitle]
# Problem: Peaks in Rila - TODO: Add Tests

**Here is a link to the** [resources](https://videos.softuni.org/resources/java/java-mysql/05.Table-Relations-Geography-Db-Exercise.zip) **for this task.**

Display all peaks for "**Rila**".

Include the following columns:
    - **mountain_range**
    - **peak_name**
    - **peak_elevation**

Peaks should be sorted by the **peak_elevation** column in descending order.


## Examples
| **mountain_range** | **peak_name** | **peak_elevation** |
| --- | --- |
| Rila | Musala | 2925 |
| … | … | … |
|  |  |  |

[/slide]