
# Homework

[slide hideTitle]

# Problem: Create a Database

After learning how to create a database using the GUI in Workbench, this task requires us to do so using **SQL queries**. 

Initialize the new database using only SQL queries. Start by **creating a new database called minions**.

[/slide]


[slide hideTitle]

# Problem: Create Tables

[code-task title="Create Tables" taskId="MySQL-Data-Definition-and-Data-Types-Create-Tables" executionType="tests-execution" executionStrategy="mysql-run-queries-and-check-database" requiresInput]
[code-editor language=sql]
```
-- Write your query here
```
[/code-editor]
[task-description]
## Description
After learning how to create a database using the GUI in Workbench, this task requires us to do so **using SQL queries**. 

Initialize the new database using only **SQL queries**. Start by **creating a new database called minions**.

[/task-description]
[code-io /]
[tests]
[test open]
[input]
SELECT lower(TABLE_NAME), lower(COLUMN_NAME) 
FROM information_schema.COLUMNS 
WHERE TABLE_SCHEMA = database()
    and lower(TABLE_NAME) = 'minions'
order by lower(COLUMN_NAME);

SELECT DISTINCT lower(column_name)
    FROM INFORMATION_SCHEMA.key_column_usage
    WHERE TABLE_SCHEMA = database()
    and lower(table_name) = 'minions'
    order by lower(COLUMN_NAME);

SELECT lower(TABLE_NAME), lower(COLUMN_NAME) 
FROM information_schema.COLUMNS 
WHERE TABLE_SCHEMA = database()
    and lower(TABLE_NAME) = 'towns' AND lower(COLUMN_NAME) = 'town_id'
ORDER by lower(COLUMN_NAME);
[/input]
[output]
minions
age
minions
id
minions
name
id
towns
town_id
[/output]
[/test]
[test]
[input]
SELECT DISTINCT lower(TABLE_NAME) as t
    FROM INFORMATION_SCHEMA.TABLES
    WHERE TABLE_SCHEMA = database()
    and lower(table_name) = 'minions';
[/input]
[output]
minions
[/output]
[/test]
[test]
[input]
SELECT lower(COLUMN_NAME) 
FROM information_schema.COLUMNS 
WHERE TABLE_SCHEMA = database()
    and lower(TABLE_NAME) = 'minions'
order by lower(COLUMN_NAME);
[/input]
[output]
age
id
name
[/output]
[/test]
[test]
[input]
SELECT DISTINCT lower(column_name)
    FROM INFORMATION_SCHEMA.key_column_usage
    WHERE TABLE_SCHEMA = database()
    and lower(table_name) = 'minions';
[/input]
[output]
id
[/output]
[/test]
[test]
[input]
SELECT DISTINCT lower(TABLE_NAME) as t
    FROM INFORMATION_SCHEMA.TABLES
    WHERE TABLE_SCHEMA = database()
    and lower(table_name) = 'towns';
[/input]
[output]
towns
[/output]
[/test]
[test]
[input]
SELECT lower(COLUMN_NAME)
FROM information_schema.COLUMNS 
WHERE TABLE_SCHEMA = database() AND lower(TABLE_NAME) = 'towns' AND lower(COLUMN_NAME) = 'town_id';
[/input]
[output]
town_id
[/output]
[/test]
[test]
[input]
SELECT DISTINCT lower(column_name)
    FROM INFORMATION_SCHEMA.key_column_usage
    WHERE TABLE_SCHEMA = database()
    and lower(table_name) = 'towns' AND lower(COLUMN_NAME) = 'town_id';
[/input]
[output]
town_id
[/output]
[/test]
[/tests]
[/code-task]


[/slide]


[slide hideTitle]

# Problem: Alter Minions Table

[code-task title="Alter Minions" taskId="mysql-data-definitions-and-data-types-Alter-Minions" executionType="tests-execution" executionStrategy="mysql-run-skeleton-run-queries-and-check-database" requiresInput]
[code-editor language=sql]
```
-- Write your query here
```
[/code-editor]
[code-adapter]
create table minions (
  id int primary key,
  name varchar(25),
  age int
);

create table towns (
  id int primary key,
  name varchar(45)
);
[/code-adapter]
[task-description]
## Description
In the newly created Minions database add a table **minions (id, name, age)**. 

Then add a new table called **towns (town_id, name)**. 

Set the **id** and **town_id** columns of both tables to be **primary key** as **constraint**, id's must be set to **auto increment**. 

[/task-description]
[code-io /]
[tests]
[test open]
[input]
SELECT lower(COLUMN_NAME)
FROM information_schema.COLUMNS 
WHERE TABLE_SCHEMA = database()
    and TABLE_NAME = 'minions' 
ORDER BY lower(COLUMN_NAME);

SELECT 
  lower(TABLE_NAME) tn,lower(COLUMN_NAME) cn, lower(REFERENCED_TABLE_NAME) ref_tn,lower(REFERENCED_COLUMN_NAME) ref_cn
FROM
  INFORMATION_SCHEMA.KEY_COLUMN_USAGE
WHERE
  REFERENCED_TABLE_SCHEMA = database() AND
  lower(REFERENCED_COLUMN_NAME) = 'id' AND 
  lower(REFERENCED_TABLE_NAME) = 'towns';
[/input]
[output]
age
id
name
town_id
minions
town_id
towns
id
[/output]
[/test]
[test]
[input]
SELECT lower(COLUMN_NAME)
FROM information_schema.COLUMNS 
WHERE TABLE_NAME = 'minions'
ORDER BY lower(COLUMN_NAME) limit 1;
[/input]
[output]
age
[/output]
[/test]
[test]
[input]
SELECT 
  lower(TABLE_NAME) tn,lower(COLUMN_NAME) cn, lower(REFERENCED_TABLE_NAME) ref_tn,lower(REFERENCED_COLUMN_NAME) ref_cn
FROM
  INFORMATION_SCHEMA.KEY_COLUMN_USAGE
WHERE
  REFERENCED_TABLE_SCHEMA = database() AND
  lower(REFERENCED_COLUMN_NAME) = 'id' AND 
  lower(REFERENCED_TABLE_NAME) = 'towns';
[/input]
[output]
minions
town_id
towns
id
[/output]
[/test]
[/tests]
[/code-task]

[/slide]


[slide hideTitle]

# Problem: Insert Records in Both Tables

# Problem: Insert Records in Both Tables
[code-task title="Insert Records in Both Tables" taskId="MySQL-Data-Definitions-and-Data-Types-Insert-Records-in-Both-Tables" executionType="tests-execution" executionStrategy="" requiresInput]
[code-editor language=sql]
```
-- Write your query here
```
[/code-editor]
[task-description]
## Description

**Populate both tables** with sample records given in the table below.

- **minions**

| **id** | **name** | **age** | **town_id** |
| ---- | ----- | ----- | ----- |
| 1 | Kevin | 22 | 1 |
| 2 | Bob | 15 | 3 |
| 3 | Steward | NULL | 2 |

- **towns**

| **id** | **name** |
| 1 | London |
| 2 | Barcelona |
| 3 | Sofia |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
SELECT \* FROM towns;
SELECT \* FROM minions;
[/input]
[output]
1
London
2
Barcelona
3
Sofia
1
Kevin
22
1
2
Bob
15
3
3
Steward

2
[/output]
[/test]
[test]
[input]
SELECT count(id) FROM towns;
[/input]
[output]
3
[/output]
[/test]
[test]
[input]
SELECT count(id) FROM minions;
[/input]
[output]
3
[/output]
[/test]
[test]
[input]
SELECT \* FROM towns;
[/input]
[output]
1
London
2
Barcelona
3
London
[/output]
[/test]
[test]
[input]
SELECT \* FROM minions;
[/input]
[output]
1
Kevin
22
1
2
Bob
15
3
3
Steward

2
[/output]
[/test]
[/tests]
[/code-task]

[/slide]


[slide hideTitle]

# Problem: Truncate Table Minions

# Problem: Truncate Table Minions
[code-task title="Truncate Table Minions" taskId="mysql-data-definitions-and-data-types-truncate-table-minions" executionType="tests-execution" executionStrategy="mysql-run-skeleton-run-queries-and-check-database" requiresInput]
[code-editor language=sql]
```
-- Write your query here
```

[code-adapter]
CREATE TABLE IF NOT EXISTS minions
(
id INT NOT NULL,
name VARCHAR(50) NOT NULL,
age INT NULL,
CONSTRAINT pk_minions PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS towns
(
id INT NOT NULL,
name VARCHAR(50) NOT NULL,
CONSTRAINT pk_towns PRIMARY KEY (id)
);
ALTER TABLE minions
ADD COLUMN town_id INT NOT NULL;

ALTER TABLE minions
ADD CONSTRAINT fk_minions_towns FOREIGN KEY (town_id) REFERENCES towns(id);

insert into towns values (1, 'London');
insert into towns values (2, 'Barcelona');
insert into towns values (3, 'Sofia');

insert into minions values (1, 'Kevin', 22, 1);
insert into minions values (2, 'Bob', 15, 3);
insert into minions values (3, 'Steward',null, 2);
[/code-adapter]
[/code-editor]
[task-description]
## Description
Delete all data from the minions table using an SQL query. 

[/task-description]
[code-io /]
[tests]
[test]
[input]
SELECT count(id) FROM minions;
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
SELECT \* FROM towns;
[/input]
[output]
1
London
2
Barcelona
3
Sofia
[/output]
[/test]
[/tests]
[/code-task]

[/slide]


[slide hideTitle]

# Problem: Drop All Tables

# Problem: Drop All Tables
[code-task title="Drop All Tables" taskId="mysql-data-definitions-and-data-types-drop-all-tables" executionType="tests-execution" executionStrategy="mysql-run-skeleton-run-queries-and-check-database" requiresInput]
[code-editor language=sql]
```
-- Write your query here
```
[/code-editor]
[code-adapter]
CREATE TABLE IF NOT EXISTS minions
(
id INT NOT NULL,
name VARCHAR(50) NOT NULL,
age INT NULL,
CONSTRAINT pk_minions PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS towns
(
id INT NOT NULL,
name VARCHAR(50) NOT NULL,
CONSTRAINT pk_towns PRIMARY KEY (id)
);
ALTER TABLE minions
ADD COLUMN town_id INT NOT NULL;

ALTER TABLE minions
ADD CONSTRAINT fk_minions_towns FOREIGN KEY (town_id) REFERENCES towns(id)
[/code-adapter]
[task-description]
## Description
**Delete all tables** from the **minions** database using an **SQL query**. 

[/task-description]
[code-io /]
[tests]
[test open]
[input]
```
\# check if both tables are dropped
SELECT count(\*)
FROM information_schema.TABLES
WHERE (TABLE_SCHEMA = database()) AND (TABLE_NAME = 'minions');

SELECT count(\*)
FROM information_schema.TABLES
WHERE (TABLE_SCHEMA = database()) AND (TABLE_NAME = 'towns');
```
[/input]
[output]
```
0
0
```
[/output]
[/test]
[test]
[input]
SELECT count(\*)
FROM information_schema.TABLES
WHERE (TABLE_SCHEMA = database()) AND (TABLE_NAME = 'minions');
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
SELECT count(\*)
FROM information_schema.TABLES
WHERE (TABLE_SCHEMA = database()) AND (TABLE_NAME = 'towns');
[/input]
[output]
0
[/output]
[/test]
[/tests]
[/code-task]

[/slide]


[slide hideTitle]

# Problem: Create A Table Called "People"
[code-task title="Create A Table Called People" taskId="mysql-data-definitions-and-data-types-create-a-table-called-people" executionType="tests-execution" executionStrategy="mysql-run-queries-and-check-database" requiresInput]
[code-editor language=sql]
```
-- Write your query here
```
[/code-editor]
[task-description]
## Description

Using **SQL queries** create table "**people**" with columns:
- **id** – unique number for every person, there will be **no more than 2^31 - 1 people**. (Auto incremented)
- **name** – the full name of the person will be **no longer than 200 Unicode characters**. (Not null)
- **picture** – image with **size up to 2 MB**. (Allow nulls)
- **height** –  In meters. Real number precise up to **2 digits** after the floating point. (Allow nulls)
- **weight** –  In kilograms. Real number precise up to **2 digits** after the floating point. (Allow nulls)
- **gender** – Possible values are **m** or **f**. (Not null)
- **birthdate** – (Not null)
- **biography** – detailed biography of the person, it can contain the **max allowed Unicode characters**. (Allow nulls)

Make **id** primary key. Populate the table with **5 records**.  

[/task-description]
[code-io /]
[tests]
[test open]
[input]
SELECT lower(COLUMN_NAME) 
FROM information_schema.COLUMNS 
WHERE TABLE_SCHEMA = database()
    AND lower(TABLE_NAME) = 'people';

SELECT DISTINCT lower(column_name)
    FROM INFORMATION_SCHEMA.key_column_usage
    WHERE TABLE_SCHEMA = database()
    and lower(table_name) = 'people';
	
SELECT COLUMN_NAME
FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_SCHEMA = database()
    AND TABLE_NAME = 'people'
    AND COLUMN_NAME = 'id'
    AND EXTRA like '%auto_increment%';
	
SELECT COLUMN_NAME
FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_SCHEMA = database()
    AND TABLE_NAME = 'people'
    AND IS_NULLABLE = 'NO';
	
select count(id) from people;
[/input]
[output]
id
name
picture
height
weight
gender
birthdate
biography
id
id
id
name
gender
birthdate
5
[/output]
[/test]
[test]
[input]
SELECT lower(TABLE_NAME), lower(COLUMN_NAME)
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = database()
    AND lower(TABLE_NAME) = 'people' and lower(COLUMN_NAME) = 'id' and EXTRA like '%auto_increment%'
order by lower(TABLE_NAME);

SELECT DISTINCT lower(column_name)
FROM INFORMATION_SCHEMA.key_column_usage
WHERE TABLE_SCHEMA = database()
  and lower(table_name) = 'people'
order by lower(COLUMN_NAME)
[/input]
[output]
people
id
id
[/output]
[/test]
[test]
[input]
SELECT lower(TABLE_NAME), lower(COLUMN_NAME) 
FROM information_schema.COLUMNS 
WHERE TABLE_SCHEMA = database()
    AND lower(TABLE_NAME) = 'people' and lower(COLUMN_NAME) = 'name' AND IS_NULLABLE = 'NO';
[/input]
[output]
people
name
[/output]
[/test]
[test]
[input]
SELECT lower(TABLE_NAME), lower(COLUMN_NAME) 
FROM information_schema.COLUMNS 
WHERE TABLE_SCHEMA = database()
    AND lower(TABLE_NAME) = 'people' and lower(COLUMN_NAME) = 'picture';
[/input]
[output]
people
picture
[/output]
[/test]
[test]
[input]
SELECT lower(TABLE_NAME), lower(COLUMN_NAME) 
FROM information_schema.COLUMNS 
WHERE TABLE_SCHEMA = database()
    AND lower(TABLE_NAME) = 'people' and lower(COLUMN_NAME) = 'height';
[/input]
[output]
people
height
[/output]
[/test]
[test]
[input]
SELECT lower(TABLE_NAME), lower(COLUMN_NAME) 
FROM information_schema.COLUMNS 
WHERE TABLE_SCHEMA = database()
    AND lower(TABLE_NAME) = 'people' and lower(COLUMN_NAME) = 'weight';
[/input]
[output]
people
weight
[/output]
[/test]
[test]
[input]
SELECT lower(TABLE_NAME), lower(COLUMN_NAME) 
FROM information_schema.COLUMNS 
WHERE TABLE_SCHEMA = database()
    AND lower(TABLE_NAME) = 'people' and lower(COLUMN_NAME) = 'gender' AND IS_NULLABLE = 'NO';
[/input]
[output]
people
gender
[/output]
[/test]
[test]
[input]
SELECT lower(TABLE_NAME), lower(COLUMN_NAME) 
FROM information_schema.COLUMNS 
WHERE TABLE_SCHEMA = database()
    AND lower(TABLE_NAME) = 'people' and lower(COLUMN_NAME) = 'birthdate' AND IS_NULLABLE = 'NO';
[/input]
[output]
people
birthdate
[/output]
[/test]
[test]
[input]
SELECT lower(TABLE_NAME), lower(COLUMN_NAME) 
FROM information_schema.COLUMNS 
WHERE TABLE_SCHEMA = database()
    AND lower(TABLE_NAME) = 'people' and lower(COLUMN_NAME) = 'biography';
[/input]
[output]
people
biography
[/output]
[/test]
[test]
[input]
select count(id) from people;
[/input]
[output]
5
[/output]
[/test]
[/tests]
[/code-task]

[/slide]


[slide hideTitle]

# Problem: Create A Table Called "Users" 
[code-task title="Create A Table Called Users " taskId="MySQL-Data-Definitions-and-Data-Types-Create-a-Table-Called-Users" executionType="tests-execution" executionStrategy="mysql-run-queries-and-check-database" requiresInput]
[code-editor language=sql]
```
-- Write your query here
```
[/code-editor]
[task-description]
## Description
Using **SQL queries** create table **users** with columns:

- **id** – unique number for every user. There will be **no more than 2^63 - 1 users**. (Auto incremented)
- **username** – unique identifier of the user, will be **no more than 30 characters long (non Unicode)**. (Required)
- **password** – **no longer than 26 characters (non Unicode)**. (Required)
- **profile_picture** – image with a **size up to 900 KB**. 
- **last_login_time**
- **is_deleted** – shows if the user deleted his/her profile. Possible states are **true** or **false**.

Make **id** primary key. Populate the table with **5 records**.


[/task-description]
[code-io /]
[tests]
[test open]
[input]
SELECT lower(TABLE_NAME), lower(COLUMN_NAME) 
FROM information_schema.COLUMNS 
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'users' and lower(COLUMN_NAME) = 'id' and EXTRA like '%auto_increment%';

SELECT lower(column_name)
    FROM INFORMATION_SCHEMA.key_column_usage
    WHERE TABLE_SCHEMA = database()
    and lower(table_name) = 'users '
	 and constraint_name = 'PRIMARY';
[/input]
[output]
users
id
id
[/output]
[/test]
[test]
[input]
SELECT lower(TABLE_NAME), lower(COLUMN_NAME) 
FROM information_schema.COLUMNS 
WHERE lower(TABLE_NAME) = 'users' and lower(COLUMN_NAME) = 'last_login_time';
[/input]
[output]
users
last_login_time
[/output]
[/test]
[test]
[input]
SELECT lower(TABLE_NAME), lower(COLUMN_NAME) 
FROM information_schema.COLUMNS 
WHERE lower(TABLE_NAME) = 'users' and lower(COLUMN_NAME) = 'is_deleted';
[/input]
[output]
users
is_deleted
[/output]
[/test]
[test]
[input]
select count(id) from users;
[/input]
[output]
5
[/output]
[/test]
[/tests]
[/code-task]

[/slide]


[slide hideTitle]

# Problem: Change the Primary Key
[code-task title="Change the Primary Key" taskId="MySQL-Data-Definitions-and-Data-Types-Change-The-Primary-Key" executionType="tests-execution" executionStrategy="mysql-run-skeleton-run-queries-and-check-database" requiresInput]
[code-editor language=sql]
```
-- Write your query here
```
[/code-editor]
[code-adapter]
CREATE TABLE IF NOT EXISTS users
(
id BIGINT NOT NULL AUTO_INCREMENT,
username VARCHAR(30) NOT NULL,
password VARCHAR(26) NOT NULL,
profile_picture BLOB,
last_login_time DATETIME,
is_deleted INT,
CONSTRAINT pk_users PRIMARY KEY (id)
);
[/code-adapter]
[task-description]
## Description
Using **SQL queries** modify table **users** from the previous task. 

First **remove current primary key** then create a **new primary key** that is a **combination** of their **id** and **username**. 

The initial primary key is **pk_users**.
[/task-description]
[code-io /]
[tests]
[test open]
[input]
SELECT DISTINCT lower(column_name)
    FROM INFORMATION_SCHEMA.key_column_usage
    WHERE TABLE_SCHEMA = database()
    and lower(table_name) = 'users';
[/input]
[output]
id
username
[/output]
[/test]
[test]
[input]
SELECT DISTINCT lower(column_name)
    FROM INFORMATION_SCHEMA.key_column_usage
    WHERE TABLE_SCHEMA = database()
    and lower(table_name) = 'users';
[/input]
[output]
id
username
[/output]
[/test]
[/tests]
[/code-task]

[/slide]


[slide hideTitle]

# Problem: Set Default Value of a Field

TODO: Generate problem

[/slide]


[slide hideTitle]

# Problem: Set Unique Field

TODO: Generate problem

[/slide]


[slide hideTitle]

# Problem: Movies Database

TODO: Generate problem

[/slide]


[slide hideTitle]

# Problem: Multiple Implementation

TODO: Generate problem

[/slide]

[slide hideTitle]

# Problem Name: Hotel Database

TODO: Generate problem

[/slide]


[slide hideTitle]

# Problem: Basic Insert

TODO: Generate problem

[/slide]


[slide hideTitle]

# Problem: Basic Select All Fields

TODO: Generate problem

[/slide]


[slide hideTitle]

# Problem: Basic Select All Fields and Order Them

TODO: Generate problem

[/slide]


[slide hideTitle]

# Problem: Basic Select Some Fields

TODO: Generate problem

[/slide]


[slide hideTitle]

# Problem: Increase Employees Salary

TODO: Generate problem

[/slide]


[slide hideTitle]

# Problem: Decrease Tax Rate

TODO: Generate problem

[/slide]

