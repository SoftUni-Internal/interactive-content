
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
[code-task title="Insert Records in Both Tables" taskId="MySQL-Data-Definitions-and-Data-Types-Insert-Records-in-Both-Tables" executionType="tests-execution" executionStrategy="mysql-run-skeleton-run-queries-and-check-database" requiresInput]
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

**Populate both tables** with sample records given in the table below.

- **minions**

| **id** | **name** | **age** | **town_id** |
| ---- | ----- | ----- | ----- |
| 1 | Kevin | 22 | 1 |
| 2 | Bob | 15 | 3 |
| 3 | Steward | NULL | 2 |

- **towns**

| **id** | **name** |
|---|---|
| 1 | London |
| 2 | Barcelona |
| 3 | Sofia |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
SELECT * FROM towns;
SELECT * FROM minions;
[/input]
[output]
``1
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

2``
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
SELECT * FROM towns;
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
[test]
[input]
SELECT * FROM minions;
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

[code-task title="Truncate Table Minions" taskId="mysql-data-definitions-and-data-types-truncate-table-minions" executionType="tests-execution" executionStrategy="mysql-run-skeleton-run-queries-and-check-database" requiresInput]
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
ADD CONSTRAINT fk_minions_towns FOREIGN KEY (town_id) REFERENCES towns(id);

insert into towns values (1, 'London');
insert into towns values (2, 'Barcelona');
insert into towns values (3, 'Sofia');

insert into minions values (1, 'Kevin', 22, 1);
insert into minions values (2, 'Bob', 15, 3);
insert into minions values (3, 'Steward',null, 2);
[/code-adapter]
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

# Problem: Set a Default Value of a Field
[code-task title="Set a Default Value of a Field" taskId="MySQL-Data-Definitions-and-Data-Types-Set-A-Default-Value-Of-A-Field" executionType="tests-execution" executionStrategy="mysql-run-skeleton-run-queries-and-check-database" requiresInput]
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
Using **SQL queries**, modify the **default value** of **last_login_time** field to be the **current time**.
[/task-description]
[code-io /]
[tests]
[test open]
[input]
SELECT TABLE_NAME, COLUMN_NAME, COLUMN_DEFAULT
FROM INFORMATION_SCHEMA.COLUMNS 
WHERE table_name = 'users' and column_name='last_login_time ' AND COLUMN_DEFAULT IS NOT NULL;
[/input]
[output]
users
last_login_time
CURRENT_TIMESTAMP
[/output]
[/test]
[test]
[input]
SELECT TABLE_NAME, COLUMN_NAME
FROM INFORMATION_SCHEMA.COLUMNS 
WHERE table_name = 'users' and column_name='last_login_time ' AND COLUMN_DEFAULT IS NOT NULL;
[/input]
[output]
users
last_login_time
[/output]
[/test]
[test]
[input]
SELECT TABLE_NAME, COLUMN_NAME, COLUMN_DEFAULT
FROM INFORMATION_SCHEMA.COLUMNS 
WHERE table_name = 'users' and column_name='last_login_time ' AND COLUMN_DEFAULT IS NOT NULL;
[/input]
[output]
users
last_login_time
CURRENT_TIMESTAMP
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]

# Problem: Set a Unique Field
[code-task title="Set a Unique Field" taskId="MySQL-Data-Definitions-and-Data-Types-Set-A-Unique-Field" executionType="tests-execution" executionStrategy="mysql-run-skeleton-run-queries-and-check-database" requiresInput]
[code-editor language=sql]
```
-- Write your query here
```
[/code-editor]
[code-adapter]
drop table if exists users;
create table users
(
id bigint not null auto_increment,
username varchar(30) not null,
password varchar(26) not null,
profile_picture blob,
last_login_time datetime,
is_deleted int,
constraint pk_users primary key (id, username)
);
[/code-adapter]
[task-description]
## Description
Using **SQL queries** modify the **users** table.

Remove the **username** field from the primary key so only the **id** field would be primary key.

Now **add a unique constraint** to the **username** field.

The initial primary key name is **pk_users**.
[/task-description]
[code-io /]
[tests]
[test open]
[input]
SELECT DISTINCT lower(column_name)
    FROM INFORMATION_SCHEMA.key_column_usage
    WHERE TABLE_SCHEMA = database()
    and constraint_name = 'PRIMARY'
    and lower(table_name) = 'users';
	
    SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS
	WHERE TABLE_SCHEMA = database()
    AND COLUMN_KEY = 'UNI';
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
    and constraint_name = 'PRIMARY'
    and lower(table_name) = 'users';
[/input]
[output]
id
[/output]
[/test]
[test]
[input]
SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS
	WHERE TABLE_SCHEMA = database()
    AND COLUMN_KEY = 'UNI';
[/input]
[output]
username
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]

# Problem: Movies Database
[code-task title="Movies Database" taskId="MySQL-Data-Definitions-and-Data-Types-Movies-Database" executionType="tests-execution" executionStrategy="mysql-run-queries-and-check-database" requiresInput]
[code-editor language=sql]
```
-- Write your query here
```
[/code-editor]
[task-description]
## Description

Using **SQL queries** create the **Movies** database with the following entities: 

- **directors** (id, director_name, notes)  

  - director_name cannot be null 

- **genres** (id, genre_name, notes)  

  - genre_name cannot be null 

- **categories** (id, category_name, notes)   

  - category_name cannot be null 

- **movies** (id, title, director_id, copyright_year, length, genre_id, category_id, rating, notes) 

  - title cannot be null 

Set **appropriate data types** for each column. 

**Set a primary key** to each table. 

Populate each table with **5 records**. 

Make sure the columns that are present in any 2 tables would be of the **same data type**. 

Define which fields are required and which are optional.  

[/task-description]
[code-io /]
[tests]
[test]
[input]
SELECT lower(TABLE_NAME)
FROM information_schema.TABLES
WHERE lower(TABLE_SCHEMA) = database() and lower(TABLE_NAME) = 'directors'
order by lower(TABLE_NAME);

SELECT DISTINCT (lower(COLUMN_NAME))
FROM information_schema.COLUMNS
WHERE lower(TABLE_NAME) = 'directors'
order by lower(COLUMN_NAME);

SELECT DISTINCT lower(column_name)
FROM INFORMATION_SCHEMA.key_column_usage
WHERE TABLE_SCHEMA = database() and lower(table_name) = 'directors'
order by lower(COLUMN_NAME);
[/input]
[output]
directors
director_name
id
notes
id
[/output]
[/test]
[test]
[input]
SELECT lower(TABLE_NAME)
FROM information_schema.TABLES
WHERE lower(TABLE_SCHEMA) = database() and lower(TABLE_NAME) = 'genres'
order by lower(TABLE_NAME);

SELECT distinct lower(COLUMN_NAME)
FROM information_schema.COLUMNS
WHERE lower(TABLE_NAME) = 'genres'
order by lower(COLUMN_NAME);

SELECT DISTINCT lower(column_name)
FROM INFORMATION_SCHEMA.key_column_usage
WHERE TABLE_SCHEMA = database()
  and lower(table_name) = 'genres'
order by lower(COLUMN_NAME);
[/input]
[output]
genres
genre_name
id
notes
id
[/output]
[/test]
[test]
[input]
SELECT lower(TABLE_NAME)
FROM information_schema.TABLES
WHERE lower(TABLE_SCHEMA) = database()
  and lower(TABLE_NAME) = 'categories'
order by lower(TABLE_NAME);

SELECT lower(COLUMN_NAME)
FROM information_schema.COLUMNS
WHERE lower(TABLE_SCHEMA) = database()
  and lower(TABLE_NAME) = 'categories'
order by lower(COLUMN_NAME);

SELECT DISTINCT lower(column_name)
FROM INFORMATION_SCHEMA.key_column_usage
WHERE TABLE_SCHEMA = database()
  and lower(table_name) = 'categories'
order by lower(COLUMN_NAME);
[/input]
[output]
categories
category_name
id
notes
id
[/output]
[/test]
[test]
[input]
SELECT lower(TABLE_NAME)
FROM information_schema.TABLES
WHERE lower(TABLE_SCHEMA) = database() and lower(TABLE_NAME) = 'movies'
order by lower(TABLE_NAME);

SELECT Distinct(lower(COLUMN_NAME))
FROM information_schema.COLUMNS
WHERE lower(TABLE_NAME) = 'movies'
order by lower(COLUMN_NAME);

SELECT DISTINCT lower(column_name)
FROM INFORMATION_SCHEMA.key_column_usage
WHERE TABLE_SCHEMA = database()
  and lower(table_name) = 'movies'
order by lower(column_name);
[/input]
[output]
movies
category_id
copyright_year
director_id
genre_id
id
length
notes
rating
title
id
[/output]
[/test]
[test]
[input]
select count(id) from directors;
[/input]
[output]
5
[/output]
[/test]
[test]
[input]
select count(id) from categories;
[/input]
[output]
5
[/output]
[/test]
[test]
[input]
SELECT distinct lower(TABLE_NAME), lower(COLUMN_NAME) 
FROM information_schema.COLUMNS 
WHERE lower(TABLE_NAME) = 'directors' and lower(COLUMN_NAME) = 'director_name' AND IS_NULLABLE = 'NO';
[/input]
[output]
directors
director_name
[/output]
[/test]
[test]
[input]
SELECT distinct lower(TABLE_NAME), lower(COLUMN_NAME) 
FROM information_schema.COLUMNS 
WHERE lower(TABLE_NAME) = 'genres' and lower(COLUMN_NAME) = 'genre_name' AND IS_NULLABLE = 'NO';
[/input]
[output]
genres
genre_name
[/output]
[/test]
[test]
[input]
SELECT distinct lower(TABLE_NAME), lower(COLUMN_NAME) 
FROM information_schema.COLUMNS 
WHERE lower(TABLE_NAME) = 'categories' and lower(COLUMN_NAME) = 'category_name' AND IS_NULLABLE = 'NO';
[/input]
[output]
categories
category_name
[/output]
[/test]
[test]
[input]
SELECT distinct lower(TABLE_NAME), lower(COLUMN_NAME) 
FROM information_schema.COLUMNS 
WHERE lower(TABLE_NAME) = 'movies' and lower(COLUMN_NAME) = 'title' AND IS_NULLABLE = 'NO';
[/input]
[output]
movies
title
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]

# Problem: Car Rental Database
[code-task title="Car Rental Database" taskId="MySQL-Data-Definitions-and-Data-Types-Car-Rental-Database" executionType="tests-execution" executionStrategy="mysql-run-queries-and-check-database" requiresInput]
[code-editor language=sql]
```
-- Write your query here
```
[/code-editor]
[task-description]
## Description

Using **SQL queries** create a **car_rental** database with the following entities: 

- **categories** (**id**, **category**, **daily_rate**, **weekly_rate**, **monthly_rate**, **weekend_rate**) 

- **cars** (**id**, **plate_number**, **make**, **model**, **car_year**, **category_id**, **doors**, **picture**, **car_condition**, **available**) 

- **employees** (**id**, **first_name**, **last_name**, **title**, **notes**) 

- **customers** (**id**, **driver_licence_number**, **full_name**, **address**, **city**, **zip_code**, **notes**) 

- **rental_orders** (**id**, **employee_id**, **customer_id**, **car_id**, **car_condition**, **tank_level**, **kilometrage_start**, **kilometrage_end**, **total_kilometrage**, **start_date**, **end_date**, **total_days**, **rate_applied**, **tax_rate**, **order_status**, **notes**) 

Set the most **appropriate data types** for each column. 

**Set a primary key** to each table. 

Populate each table with **3 records**. 

Make sure the columns that are present in any 2 tables would be of the **same data type**. 

Define which fields are required and which are optional. 
[/task-description]
[code-io /]
[tests]
[test open]
[input]
SELECT DISTINCT lower(TABLE_NAME)
FROM information_schema.TABLES
WHERE TABLE_SCHEMA = database()
    AND lower(TABLE_NAME) = 'categories'
order by lower(TABLE_NAME);

SELECT DISTINCT lower(COLUMN_NAME)
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = database()
    AND lower(TABLE_NAME) = 'categories'
order by lower(COLUMN_NAME);

SELECT DISTINCT lower(column_name)
FROM INFORMATION_SCHEMA.key_column_usage
WHERE TABLE_SCHEMA = database()
    AND lower(table_name) = 'categories'
order by lower(COLUMN_NAME);
[/input]
[output]
categories
category
daily_rate
id
monthly_rate
weekend_rate
weekly_rate
id
[/output]
[/test]
[test]
[input]
SELECT DISTINCT lower(TABLE_NAME)
FROM information_schema.TABLES
WHERE lower(TABLE_SCHEMA) = database()
  and lower(TABLE_NAME) = 'employees'
order by lower(TABLE_NAME);

SELECT DISTINCT lower(COLUMN_NAME)
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = database()
    AND lower(TABLE_NAME) = 'employees'
order by lower(COLUMN_NAME);

SELECT DISTINCT lower(column_name)
FROM INFORMATION_SCHEMA.key_column_usage
WHERE TABLE_SCHEMA = database()
  and lower(table_name) = 'employees'
order by lower(COLUMN_NAME);
[/input]
[output]
employees
first_name
id
last_name
notes
title
id
[/output]
[/test]
[test]
[input]
SELECT DISTINCT lower(TABLE_NAME)
FROM information_schema.TABLES
WHERE lower(TABLE_SCHEMA) = database()
  and lower(TABLE_NAME) = 'rental_orders'
order by lower(TABLE_NAME);

SELECT DISTINCT lower(COLUMN_NAME)
FROM information_schema.COLUMNS
WHERE lower(TABLE_NAME) = 'rental_orders'
order by lower(COLUMN_NAME);

SELECT DISTINCT lower(column_name)
FROM INFORMATION_SCHEMA.key_column_usage
WHERE TABLE_SCHEMA = database()
  and lower(table_name) = 'rental_orders'
order by lower(COLUMN_NAME);
[/input]
[output]
rental_orders
car_condition
car_id
customer_id
employee_id
end_date
id
kilometrage_end
kilometrage_start
notes
order_status
rate_applied
start_date
tank_level
tax_rate
total_days
total_kilometrage
id
[/output]
[/test]
[test]
[input]
select count(id) from categories;
select count(id) from cars;
select count(id) from employees;
select count(id) from customers;
select count(id) from rental_orders;
[/input]
[output]
3
3
3
3
3
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Problem: Basic Insert
[code-task title="Basic Insert" taskId="MySQL-Data-Definitions-and-Data-Types-Basic-Insert" executionType="tests-execution" executionStrategy="mysql-run-skeleton-run-queries-and-check-database" requiresInput]
[code-editor language=sql]
```
-- Write your query here
```
[/code-editor]
[code-adapter]
CREATE TABLE IF NOT EXISTS towns
(
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(50),
	CONSTRAINT pk_towns PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS addresses
(
	id INT NOT NULL AUTO_INCREMENT,
	address_text VARCHAR(100),
	town_id INT,
	CONSTRAINT pk_adresses PRIMARY KEY (id),
	CONSTRAINT fk_adresses_towns FOREIGN KEY (town_id) REFERENCES towns(id)
);

CREATE TABLE IF NOT EXISTS departments
(
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(50),
	CONSTRAINT pk_departments_id PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS employees
(
	id INT NOT NULL AUTO_INCREMENT,
	first_name VARCHAR(50),
	middle_name VARCHAR(50),
	last_name VARCHAR(50),
	job_title VARCHAR(20),
	department_id INT,
	hire_date DATE,
	salary DECIMAL(12,2),
	address_id INT,
	CONSTRAINT pk_employees PRIMARY KEY (id),
	CONSTRAINT fk_employees_deparments FOREIGN KEY (department_id) REFERENCES departments(id),
	CONSTRAINT fk_employees_addresses FOREIGN KEY (address_id) REFERENCES addresses(id)
);
[/code-adapter]
[task-description]
## Description

Create a database called soft_uni. 

This database will be used in the future tasks. 

It should hold information about 

- towns (id, name) 

- addresses (id, address_text, town_id) 

- departments (id, name) 

- employees (id, first_name, middle_name, last_name, job_title, department_id, hire_date, salary, address_id) 

The Id columns are auto incremented starting from 1 and increased by 1 (1, 2, 3, 4…). 

Make sure you use appropriate data types for each column. 

Add primary and foreign keys as constraints for each table. 

Use only SQL queries. 

Define which fields are always required and which are optional. 

Use the **SoftUni** database and insert some data into it **using SQL queries**. 

| **name** | **job_title** | **department** | **hire_date** | **salary** |
|---|---|---|---|---|
| Kyrie Keefe Swanson | .NET Developer | Software Development | 01/02/2013 | 3500.00 |
| Tamsyn Corrina Masterson | Senior Engineer | Engineering | 02/03/2004 | 4000.00 |
| Sonia Eddy Christians | Intern | Quality Assurance | 28/08/2016 | 525.25 |
| Petal Hylda Cantrell | CEO | Sales | 09/12/2007 | 3000.00 |
| Faye Emberly Paddon | Intern | Marketing | 28/08/2016 | 599.88 |

- **towns**: Berlin, Madrid, Sofia, Lille, 

- **departments**: Engineering, Sales, Marketing, Software Development, Quality Assurance 

- **employees**: 
[/task-description]
[code-io /]
[tests]
[test open]
[input]
select name from towns;
select name from departments;
select first_name, middle_name, last_name, job_title, department_id, hire_date, salary from employees;
[/input]
[output]
Berlin
Madrid
Sofia
Lille
Engineering
Sales
Marketing
Software Development
Quality Assurance
Kyrie 
Keefe 
Swanson
.NET Developer
4
2013-02-01 00:00:00
3500.00
Tamsyn 
Corrina 
Masterson
Senior Engineer
1
2004-03-02 00:00:00
4000.00
Sonia 
Eddy 
Christians
Intern
5
2016-08-28 00:00:00
525.25
Petal 
Hylda 
Cantrell
CEO
2
2007-12-09 00:00:00
3000.00
Faye 
Emberly 
Paddon
Intern
3
2016-08-28 00:00:00
599.88
[/output]
[/test]
[test]
[input]
select name from towns;
[/input]
[output]
Berlin
Madrid
Sofia
Lille
[/output]
[/test]
[test]
[input]
select name from departments;
[/input]
[output]
Engineering
Sales
Marketing
Software Development
Quality Assurance
[/output]
[/test]
[test]
[input]
select first_name, middle_name, last_name, job_title, department_id, hire_date, salary from employees;
[/input]
[output]
Kyrie 
Keefe 
Swanson
.NET Developer
4
2013-02-01 00:00:00
3500.00
Tamsyn 
Corrina 
Masterson
Senior Engineer
1
2004-03-02 00:00:00
4000.00
Sonia 
Eddy 
Christians
Intern
5
2016-08-28 00:00:00
525.25
Petal 
Hylda 
Cantrell
CEO
2
2007-12-09 00:00:00
3000.00
Faye 
Emberly 
Paddon
Intern
3
2016-08-28 00:00:00
599.88
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]

# Problem: Basic Select All Fields
[code-task title="Basic Select All Fields" taskId="MySQL-Data-Definitions-and-Data-Types-Basic-Select-All-Fields" executionType="tests-execution" executionStrategy="mysql-prepare-db-and-run-queries" requiresInput]
[code-editor language=sql]
```
-- Write your query here
```
[/code-editor]
[task-description]
## Description

Use the **soft_uni** database and select all records from **towns**, then from **departments** and finally from the **employees** table.  

[/task-description]
[code-io /]
[tests]
[test open]
[input]
CREATE TABLE IF NOT EXISTS towns
(
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(50),
	CONSTRAINT pk_towns PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS addresses
(
	id INT NOT NULL AUTO_INCREMENT,
	address_text VARCHAR(100),
	town_id INT,
	CONSTRAINT pk_adresses PRIMARY KEY (id),
	CONSTRAINT fk_adresses_towns FOREIGN KEY (town_id) REFERENCES towns(id)
);

CREATE TABLE IF NOT EXISTS departments
(
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(50),
	CONSTRAINT pk_departments_id PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS employees
(
	id INT NOT NULL AUTO_INCREMENT,
	first_name VARCHAR(50),
	middle_name VARCHAR(50),
	last_name VARCHAR(50),
	job_title VARCHAR(20),
	department_id INT,
	hire_date DATETIME,
	salary DOUBLE(12,4),
	address_id INT,
	CONSTRAINT pk_employees PRIMARY KEY (id),
	CONSTRAINT fk_employees_deparments FOREIGN KEY (department_id) REFERENCES departments(id),
	CONSTRAINT fk_employees_addresses FOREIGN KEY (address_id) REFERENCES addresses(id)
);

INSERT INTO towns (name) VALUES ('Berlin');
INSERT INTO towns (name) VALUES ('Madrid'); 
INSERT INTO towns (name) VALUES ('Sofia');
INSERT INTO towns (name) VALUES ('Lille');

INSERT INTO departments (name) VALUES ('Engineering');
INSERT INTO departments (name) VALUES ('Sales');
INSERT INTO departments (name) VALUES ('Marketing');
INSERT INTO departments (name) VALUES ('Software Development'); 
INSERT INTO departments (name) VALUES ('Quality Assurance');

INSERT INTO employees (first_name, middle_name, last_name, job_title, department_id, hire_date, salary) VALUES ('Kyrie', 'Keefe', 'Swanson', '.NET Developer', 4, '2013-02-01', 3500.00);
INSERT INTO employees (first_name, middle_name, last_name, job_title, department_id, hire_date, salary) VALUES ('Tamsyn', 'Corrina', 'Masterson', 'Senior Engineer', 1, '2004-03-02', 4000.00);
INSERT INTO employees (first_name, middle_name, last_name, job_title, department_id, hire_date, salary) VALUES ('Sonia', 'Eddy', 'Christians', 'Intern', 5, '2016-08-28', 525.25);
INSERT INTO employees (first_name, middle_name, last_name, job_title, department_id, hire_date, salary) VALUES ('Petal', 'Hylda', 'Cantrell', 'CEO', 2, '2007-12-09', 3000.00);
INSERT INTO employees (first_name, middle_name, last_name, job_title, department_id, hire_date, salary) VALUES ('Faye', 'Emberly', 'Paddon', 'Intern', 3, '2016-08-28', 599.88);
[/input]
[output]
1
Berlin
2
Madrid
3
Sofia
4
Lille
1
Engineering
2
Sales
3
Marketing
4
Software Development
5
Quality Assurance
1
Kyrie 
Keefe 
Swanson
.NET Developer
4
2013-02-01 00:00:00
3500
2
Tamsyn 
Corrina 
Masterson	
Senior Engineer
1
2004-03-02 00:00:00
4000
3
Sonia 
Eddy 
Christians
Intern
5
2016-08-28 00:00:00
525.25
4
Petal 
Hylda 
Cantrell
CEO
2
2007-12-09 00:00:00
3000
5
Faye 
Emberly 
Paddon
Intern
3
2016-08-28 00:00:00
599.88
[/output]
[/test]
[test]
[input]
CREATE TABLE IF NOT EXISTS towns
(
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(50),
	CONSTRAINT pk_towns PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS addresses
(
	id INT NOT NULL AUTO_INCREMENT,
	address_text VARCHAR(100),
	town_id INT,
	CONSTRAINT pk_adresses PRIMARY KEY (id),
	CONSTRAINT fk_adresses_towns FOREIGN KEY (town_id) REFERENCES towns(id)
);

CREATE TABLE IF NOT EXISTS departments
(
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(50),
	CONSTRAINT pk_departments_id PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS employees
(
	id INT NOT NULL AUTO_INCREMENT,
	first_name VARCHAR(50),
	middle_name VARCHAR(50),
	last_name VARCHAR(50),
	job_title VARCHAR(20),
	department_id INT,
	hire_date DATETIME,
	salary DOUBLE(12,4),
	address_id INT,
	CONSTRAINT pk_employees PRIMARY KEY (id),
	CONSTRAINT fk_employees_deparments FOREIGN KEY (department_id) REFERENCES departments(id),
	CONSTRAINT fk_employees_addresses FOREIGN KEY (address_id) REFERENCES addresses(id)
);

INSERT INTO towns (name) VALUES ('Sofia');
INSERT INTO towns (name) VALUES ('Plovdiv'); 
INSERT INTO towns (name) VALUES ('Varna');
INSERT INTO towns (name) VALUES ('Burgas');
[/input]
[output]
1
Sofia
2
Plovdiv
3
Varna
4
Burgas
[/output]
[/test]
[test]
[input]
CREATE TABLE IF NOT EXISTS towns
(
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(50),
	CONSTRAINT pk_towns PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS addresses
(
	id INT NOT NULL AUTO_INCREMENT,
	address_text VARCHAR(100),
	town_id INT,
	CONSTRAINT pk_adresses PRIMARY KEY (id),
	CONSTRAINT fk_adresses_towns FOREIGN KEY (town_id) REFERENCES towns(id)
);

CREATE TABLE IF NOT EXISTS departments
(
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(50),
	CONSTRAINT pk_departments_id PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS employees
(
	id INT NOT NULL AUTO_INCREMENT,
	first_name VARCHAR(50),
	middle_name VARCHAR(50),
	last_name VARCHAR(50),
	job_title VARCHAR(20),
	department_id INT,
	hire_date DATETIME,
	salary DOUBLE(12,4),
	address_id INT,
	CONSTRAINT pk_employees PRIMARY KEY (id),
	CONSTRAINT fk_employees_deparments FOREIGN KEY (department_id) REFERENCES departments(id),
	CONSTRAINT fk_employees_addresses FOREIGN KEY (address_id) REFERENCES addresses(id)
);

INSERT INTO departments (name) VALUES ('Engineering');
INSERT INTO departments (name) VALUES ('Sales');
INSERT INTO departments (name) VALUES ('Marketing');
INSERT INTO departments (name) VALUES ('Software Development'); 
INSERT INTO departments (name) VALUES ('Quality Assurance');
[/input]
[output]
1
Engineering
2
Sales
3
Marketing
4
Software Development
5
Quality Assurance
[/output]
[/test]
[test]
[input]
CREATE TABLE IF NOT EXISTS towns
(
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(50),
	CONSTRAINT pk_towns PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS addresses
(
	id INT NOT NULL AUTO_INCREMENT,
	address_text VARCHAR(100),
	town_id INT,
	CONSTRAINT pk_adresses PRIMARY KEY (id),
	CONSTRAINT fk_adresses_towns FOREIGN KEY (town_id) REFERENCES towns(id)
);

CREATE TABLE IF NOT EXISTS departments
(
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(50),
	CONSTRAINT pk_departments_id PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS employees
(
	id INT NOT NULL AUTO_INCREMENT,
	first_name VARCHAR(50),
	middle_name VARCHAR(50),
	last_name VARCHAR(50),
	job_title VARCHAR(20),
	department_id INT,
	hire_date DATETIME,
	salary DOUBLE(12,4),
	address_id INT,
	CONSTRAINT pk_employees PRIMARY KEY (id)
);

INSERT INTO employees (first_name, middle_name, last_name, job_title, department_id, hire_date, salary) VALUES ('Ivan', 'Ivanov', 'Ivanov', '.NET Developer', 4, '2013-02-01', 3500.00);
INSERT INTO employees (first_name, middle_name, last_name, job_title, department_id, hire_date, salary) VALUES ('Petar', 'Petrov', 'Petrov', 'Senior Engineer', 1, '2004-03-02', 4000.00);
INSERT INTO employees (first_name, middle_name, last_name, job_title, department_id, hire_date, salary) VALUES ('Maria', 'Petrova', 'Ivanova', 'Intern', 5, '2016-08-28', 525.25);
INSERT INTO employees (first_name, middle_name, last_name, job_title, department_id, hire_date, salary) VALUES ('Georgi', 'Terziev', 'Ivanov', 'CEO', 2, '2007-12-09', 3000.00);
INSERT INTO employees (first_name, middle_name, last_name, job_title, department_id, hire_date, salary) VALUES ('Peter', 'Pan', 'Pan', 'Intern', 3, '2016-08-28', 599.88);
[/input]
[output]
1
Ivan
Ivanov
Ivanov
.NET Developer
4
2013-02-01 00:00:00
3500
2
Petar
Petrov
Petrov	
Senior Engineer
1
2004-03-02 00:00:00
4000
3
Maria
Petrova
Ivanova
Intern
5
2016-08-28 00:00:00
525.25
4
Georgi
Terziev
Ivanov
CEO
2
2007-12-09 00:00:00
3000
5
Peter
Pan
Pan
Intern
3
2016-08-28 00:00:00
599.88
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problem: Basic Select All Fields and Order Them
[code-task title="Basic Select All Fields and Order Them" taskId="MySQL-Data-Definitions-and-Data-Types-Basic-Select-All-Fields-And-Order-Them" executionType="tests-execution" executionStrategy="mysql-prepare-db-and-run-queries" requiresInput]
[code-editor language=sql]
```
-- Write your query here
```
[/code-editor]
[task-description]
## Description

Modify the queries from the previous problem by sorting: 

- **towns** - alphabetically by name 

- **departments** - alphabetically by name 

- **employees** - descending by salary 

[/task-description]
[code-io /]
[tests]
[test open]
[input]
CREATE TABLE IF NOT EXISTS towns
(
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(50),
	CONSTRAINT pk_towns PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS addresses
(
	id INT NOT NULL AUTO_INCREMENT,
	address_text VARCHAR(100),
	town_id INT,
	CONSTRAINT pk_adresses PRIMARY KEY (id),
	CONSTRAINT fk_adresses_towns FOREIGN KEY (town_id) REFERENCES towns(id)
);

CREATE TABLE IF NOT EXISTS departments
(
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(50),
	CONSTRAINT pk_departments_id PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS employees
(
	id INT NOT NULL AUTO_INCREMENT,
	first_name VARCHAR(50),
	middle_name VARCHAR(50),
	last_name VARCHAR(50),
	job_title VARCHAR(20),
	department_id INT,
	hire_date DATETIME,
	salary DOUBLE(12,4),
	address_id INT,
	CONSTRAINT pk_employees PRIMARY KEY (id),
	CONSTRAINT fk_employees_deparments FOREIGN KEY (department_id) REFERENCES departments(id),
	CONSTRAINT fk_employees_addresses FOREIGN KEY (address_id) REFERENCES addresses(id)
);

INSERT INTO towns (name) VALUES ('Berlin');
INSERT INTO towns (name) VALUES ('Madrid'); 
INSERT INTO towns (name) VALUES ('Sofia');
INSERT INTO towns (name) VALUES ('Lille');

INSERT INTO departments (name) VALUES ('Engineering');
INSERT INTO departments (name) VALUES ('Sales');
INSERT INTO departments (name) VALUES ('Marketing');
INSERT INTO departments (name) VALUES ('Software Development'); 
INSERT INTO departments (name) VALUES ('Quality Assurance');

INSERT INTO employees (first_name, middle_name, last_name, job_title, department_id, hire_date, salary) VALUES ('Kyrie', 'Keefe', 'Swanson', '.NET Developer', 4, '2013-02-01', 3500.00);
INSERT INTO employees (first_name, middle_name, last_name, job_title, department_id, hire_date, salary) VALUES ('Tamsyn', 'Corrina', 'Masterson', 'Senior Engineer', 1, '2004-03-02', 4000.00);
INSERT INTO employees (first_name, middle_name, last_name, job_title, department_id, hire_date, salary) VALUES ('Sonia', 'Eddy', 'Christians', 'Intern', 5, '2016-08-28', 525.25);
INSERT INTO employees (first_name, middle_name, last_name, job_title, department_id, hire_date, salary) VALUES ('Petal', 'Hylda', 'Cantrell', 'CEO', 2, '2007-12-09', 3000.00);
INSERT INTO employees (first_name, middle_name, last_name, job_title, department_id, hire_date, salary) VALUES ('Faye', 'Emberly', 'Paddon', 'Intern', 3, '2016-08-28', 599.88);
[/input]
[output]
1
Berlin
4
Lille
2
Madrid
3
Sofia
1
Engineering
3
Marketing
5
Quality Assurance
2
Sales
4
Software Development
2
Tamsyn 
Corrina 
Masterson
Senior Engineer
1
2004-03-02 00:00:00
4000
1
Kyrie 
Keefe 
Swanson
.NET Developer
4
2013-02-01 00:00:00
3500
4
Petal 
Hylda 
Cantrell
CEO
2
2007-12-09 00:00:00
3000
5
Faye 
Emberly 
Paddon
Intern
3
2016-08-28 00:00:00
599.88
3
Sonia 
Eddy 
Christians
Intern
5
2016-08-28 00:00:00
525.25
[/output]
[/test]
[test]
[input]
CREATE TABLE IF NOT EXISTS towns
(
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(50),
	CONSTRAINT pk_towns PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS addresses
(
	id INT NOT NULL AUTO_INCREMENT,
	address_text VARCHAR(100),
	town_id INT,
	CONSTRAINT pk_adresses PRIMARY KEY (id),
	CONSTRAINT fk_adresses_towns FOREIGN KEY (town_id) REFERENCES towns(id)
);

CREATE TABLE IF NOT EXISTS departments
(
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(50),
	CONSTRAINT pk_departments_id PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS employees
(
	id INT NOT NULL AUTO_INCREMENT,
	first_name VARCHAR(50),
	middle_name VARCHAR(50),
	last_name VARCHAR(50),
	job_title VARCHAR(20),
	department_id INT,
	hire_date DATETIME,
	salary DOUBLE(12,4),
	address_id INT,
	CONSTRAINT pk_employees PRIMARY KEY (id),
	CONSTRAINT fk_employees_deparments FOREIGN KEY (department_id) REFERENCES departments(id),
	CONSTRAINT fk_employees_addresses FOREIGN KEY (address_id) REFERENCES addresses(id)
);

INSERT INTO towns (name) VALUES ('Sofia');
INSERT INTO towns (name) VALUES ('Plovdiv'); 
INSERT INTO towns (name) VALUES ('Varna');
INSERT INTO towns (name) VALUES ('Burgas');
[/input]
[output]
4
Burgas
2
Plovdiv
1
Sofia
3
Varna
[/output]
[/test]
[test]
[input]
CREATE TABLE IF NOT EXISTS towns
(
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(50),
	CONSTRAINT pk_towns PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS addresses
(
	id INT NOT NULL AUTO_INCREMENT,
	address_text VARCHAR(100),
	town_id INT,
	CONSTRAINT pk_adresses PRIMARY KEY (id),
	CONSTRAINT fk_adresses_towns FOREIGN KEY (town_id) REFERENCES towns(id)
);

CREATE TABLE IF NOT EXISTS departments
(
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(50),
	CONSTRAINT pk_departments_id PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS employees
(
	id INT NOT NULL AUTO_INCREMENT,
	first_name VARCHAR(50),
	middle_name VARCHAR(50),
	last_name VARCHAR(50),
	job_title VARCHAR(20),
	department_id INT,
	hire_date DATETIME,
	salary DOUBLE(12,4),
	address_id INT,
	CONSTRAINT pk_employees PRIMARY KEY (id),
	CONSTRAINT fk_employees_deparments FOREIGN KEY (department_id) REFERENCES departments(id),
	CONSTRAINT fk_employees_addresses FOREIGN KEY (address_id) REFERENCES addresses(id)
);

INSERT INTO departments (name) VALUES ('Engineering');
INSERT INTO departments (name) VALUES ('Sales');
INSERT INTO departments (name) VALUES ('Marketing');
INSERT INTO departments (name) VALUES ('Software Development'); 
INSERT INTO departments (name) VALUES ('Quality Assurance');
[/input]
[output]
1
Engineering
3
Marketing
5
Quality Assurance
2
Sales
4
Software Development
[/output]
[/test]
[test]
[input]
CREATE TABLE IF NOT EXISTS towns
(
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(50),
	CONSTRAINT pk_towns PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS addresses
(
	id INT NOT NULL AUTO_INCREMENT,
	address_text VARCHAR(100),
	town_id INT,
	CONSTRAINT pk_adresses PRIMARY KEY (id),
	CONSTRAINT fk_adresses_towns FOREIGN KEY (town_id) REFERENCES towns(id)
);

CREATE TABLE IF NOT EXISTS departments
(
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(50),
	CONSTRAINT pk_departments_id PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS employees
(
	id INT NOT NULL AUTO_INCREMENT,
	first_name VARCHAR(50),
	middle_name VARCHAR(50),
	last_name VARCHAR(50),
	job_title VARCHAR(20),
	department_id INT,
	hire_date DATETIME,
	salary DOUBLE(12,4),
	address_id INT,
	CONSTRAINT pk_employees PRIMARY KEY (id)
);

INSERT INTO employees (first_name, middle_name, last_name, job_title, department_id, hire_date, salary) VALUES ('Ivan', 'Ivanov', 'Ivanov', '.NET Developer', 4, '2013-02-01', 3500.00);
INSERT INTO employees (first_name, middle_name, last_name, job_title, department_id, hire_date, salary) VALUES ('Petar', 'Petrov', 'Petrov', 'Senior Engineer', 1, '2004-03-02', 4000.00);
INSERT INTO employees (first_name, middle_name, last_name, job_title, department_id, hire_date, salary) VALUES ('Maria', 'Petrova', 'Ivanova', 'Intern', 5, '2016-08-28', 525.25);
INSERT INTO employees (first_name, middle_name, last_name, job_title, department_id, hire_date, salary) VALUES ('Georgi', 'Terziev', 'Ivanov', 'CEO', 2, '2007-12-09', 3000.00);
INSERT INTO employees (first_name, middle_name, last_name, job_title, department_id, hire_date, salary) VALUES ('Peter', 'Pan', 'Pan', 'Intern', 3, '2016-08-28', 599.88);
[/input]
[output]
2
Petar
Petrov
Petrov
Senior Engineer
1
2004-03-02 00:00:00
4000
1
Ivan
Ivanov
Ivanov
.NET Developer
4
2013-02-01 00:00:00
3500
4
Georgi
Terziev
Ivanov
CEO
2
2007-12-09 00:00:00
3000
5
Peter
Pan
Pan
Intern
3
2016-08-28 00:00:00
599.88
3
Maria
Petrova
Ivanova
Intern
5
2016-08-28 00:00:00
525.25
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problem: Basic Select Fields
[code-task title="Basic Select Fields" taskId="MySQL-Data-Definitions-and-Data-Types-Basic-Select-Fields" executionType="tests-execution" executionStrategy="mysql-prepare-db-and-run-queries" requiresInput]
[code-editor language=sql]
```
-- Write your query here
```
[/code-editor]
[task-description]
## Description

Modify the queries from the previous problem to show only **some of the columns**, as follows: 

- **towns** – **name** 

- **departments** – **name** 

- **employees** – **first_name**, **last_name**, **job_title**, **salary**  

[/task-description]
[code-io /]
[tests]
[test open]
[input]
CREATE TABLE IF NOT EXISTS towns
(
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(50),
	CONSTRAINT pk_towns PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS addresses
(
	id INT NOT NULL AUTO_INCREMENT,
	address_text VARCHAR(100),
	town_id INT,
	CONSTRAINT pk_adresses PRIMARY KEY (id),
	CONSTRAINT fk_adresses_towns FOREIGN KEY (town_id) REFERENCES towns(id)
);

CREATE TABLE IF NOT EXISTS departments
(
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(50),
	CONSTRAINT pk_departments_id PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS employees
(
	id INT NOT NULL AUTO_INCREMENT,
	first_name VARCHAR(50),
	middle_name VARCHAR(50),
	last_name VARCHAR(50),
	job_title VARCHAR(20),
	department_id INT,
	hire_date DATETIME,
	salary DOUBLE(12,4),
	address_id INT,
	CONSTRAINT pk_employees PRIMARY KEY (id),
	CONSTRAINT fk_employees_deparments FOREIGN KEY (department_id) REFERENCES departments(id),
	CONSTRAINT fk_employees_addresses FOREIGN KEY (address_id) REFERENCES addresses(id)
);

INSERT INTO towns (name) VALUES ('Berlin');
INSERT INTO towns (name) VALUES ('Madrid'); 
INSERT INTO towns (name) VALUES ('Sofia');
INSERT INTO towns (name) VALUES ('Lille');

INSERT INTO departments (name) VALUES ('Engineering');
INSERT INTO departments (name) VALUES ('Sales');
INSERT INTO departments (name) VALUES ('Marketing');
INSERT INTO departments (name) VALUES ('Software Development'); 
INSERT INTO departments (name) VALUES ('Quality Assurance');

INSERT INTO employees (first_name, middle_name, last_name, job_title, department_id, hire_date, salary) VALUES ('Kyrie', 'Keefe', 'Swanson', '.NET Developer', 4, '2013-02-01', 3500.00);
INSERT INTO employees (first_name, middle_name, last_name, job_title, department_id, hire_date, salary) VALUES ('Tamsyn', 'Corrina', 'Masterson', 'Senior Engineer', 1, '2004-03-02', 4000.00);
INSERT INTO employees (first_name, middle_name, last_name, job_title, department_id, hire_date, salary) VALUES ('Sonia', 'Eddy', 'Christians', 'Intern', 5, '2016-08-28', 525.25);
INSERT INTO employees (first_name, middle_name, last_name, job_title, department_id, hire_date, salary) VALUES ('Petal', 'Hylda', 'Cantrell', 'CEO', 2, '2007-12-09', 3000.00);
INSERT INTO employees (first_name, middle_name, last_name, job_title, department_id, hire_date, salary) VALUES ('Faye', 'Emberly', 'Paddon', 'Intern', 3, '2016-08-28', 599.88);
[/input]
[output]
Berlin
Lille
Madrid
Sofia
Engineering
Marketing
Quality Assurance
Sales
Software Development
Tamsyn
Masterson
Senior Engineer
4000
Kyrie
Swanson
.NET Developer
3500
Petal
Cantrell
CEO
3000
Faye
Paddon
Intern
599.88
Sonia
Christians
Intern
525.25
[/output]
[/test]
[test]
[input]
CREATE TABLE IF NOT EXISTS towns
(
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(50),
	CONSTRAINT pk_towns PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS addresses
(
	id INT NOT NULL AUTO_INCREMENT,
	address_text VARCHAR(100),
	town_id INT,
	CONSTRAINT pk_adresses PRIMARY KEY (id),
	CONSTRAINT fk_adresses_towns FOREIGN KEY (town_id) REFERENCES towns(id)
);

CREATE TABLE IF NOT EXISTS departments
(
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(50),
	CONSTRAINT pk_departments_id PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS employees
(
	id INT NOT NULL AUTO_INCREMENT,
	first_name VARCHAR(50),
	middle_name VARCHAR(50),
	last_name VARCHAR(50),
	job_title VARCHAR(20),
	department_id INT,
	hire_date DATETIME,
	salary DOUBLE(12,4),
	address_id INT,
	CONSTRAINT pk_employees PRIMARY KEY (id),
	CONSTRAINT fk_employees_deparments FOREIGN KEY (department_id) REFERENCES departments(id),
	CONSTRAINT fk_employees_addresses FOREIGN KEY (address_id) REFERENCES addresses(id)
);

INSERT INTO towns (name) VALUES ('Sofia');
INSERT INTO towns (name) VALUES ('Plovdiv'); 
INSERT INTO towns (name) VALUES ('Varna');
INSERT INTO towns (name) VALUES ('Burgas');
[/input]
[output]
Burgas
Plovdiv
Sofia
Varna
[/output]
[/test]
[test]
[input]
CREATE TABLE IF NOT EXISTS towns
(
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(50),
	CONSTRAINT pk_towns PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS addresses
(
	id INT NOT NULL AUTO_INCREMENT,
	address_text VARCHAR(100),
	town_id INT,
	CONSTRAINT pk_adresses PRIMARY KEY (id),
	CONSTRAINT fk_adresses_towns FOREIGN KEY (town_id) REFERENCES towns(id)
);

CREATE TABLE IF NOT EXISTS departments
(
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(50),
	CONSTRAINT pk_departments_id PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS employees
(
	id INT NOT NULL AUTO_INCREMENT,
	first_name VARCHAR(50),
	middle_name VARCHAR(50),
	last_name VARCHAR(50),
	job_title VARCHAR(20),
	department_id INT,
	hire_date DATETIME,
	salary DOUBLE(12,4),
	address_id INT,
	CONSTRAINT pk_employees PRIMARY KEY (id),
	CONSTRAINT fk_employees_deparments FOREIGN KEY (department_id) REFERENCES departments(id),
	CONSTRAINT fk_employees_addresses FOREIGN KEY (address_id) REFERENCES addresses(id)
);

INSERT INTO departments (name) VALUES ('Engineering');
INSERT INTO departments (name) VALUES ('Sales');
INSERT INTO departments (name) VALUES ('Marketing');
INSERT INTO departments (name) VALUES ('Software Development'); 
INSERT INTO departments (name) VALUES ('Quality Assurance');
[/input]
[output]
Engineering
Marketing
Quality Assurance
Sales
Software Development
[/output]
[/test]
[test]
[input]
CREATE TABLE IF NOT EXISTS towns
(
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(50),
	CONSTRAINT pk_towns PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS addresses
(
	id INT NOT NULL AUTO_INCREMENT,
	address_text VARCHAR(100),
	town_id INT,
	CONSTRAINT pk_adresses PRIMARY KEY (id),
	CONSTRAINT fk_adresses_towns FOREIGN KEY (town_id) REFERENCES towns(id)
);

CREATE TABLE IF NOT EXISTS departments
(
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(50),
	CONSTRAINT pk_departments_id PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS employees
(
	id INT NOT NULL AUTO_INCREMENT,
	first_name VARCHAR(50),
	middle_name VARCHAR(50),
	last_name VARCHAR(50),
	job_title VARCHAR(20),
	department_id INT,
	hire_date DATETIME,
	salary DOUBLE(12,4),
	address_id INT,
	CONSTRAINT pk_employees PRIMARY KEY (id)
);

INSERT INTO employees (first_name, middle_name, last_name, job_title, department_id, hire_date, salary) VALUES ('Ivan', 'Ivanov', 'Ivanov', '.NET Developer', 4, '2013-02-01', 3500.00);
INSERT INTO employees (first_name, middle_name, last_name, job_title, department_id, hire_date, salary) VALUES ('Petar', 'Petrov', 'Petrov', 'Senior Engineer', 1, '2004-03-02', 4000.00);
INSERT INTO employees (first_name, middle_name, last_name, job_title, department_id, hire_date, salary) VALUES ('Maria', 'Petrova', 'Ivanova', 'Intern', 5, '2016-08-28', 525.25);
INSERT INTO employees (first_name, middle_name, last_name, job_title, department_id, hire_date, salary) VALUES ('Georgi', 'Terziev', 'Ivanov', 'CEO', 2, '2007-12-09', 3000.00);
INSERT INTO employees (first_name, middle_name, last_name, job_title, department_id, hire_date, salary) VALUES ('Peter', 'Pan', 'Pan', 'Intern', 3, '2016-08-28', 599.88);
[/input]
[output]
Petar
Petrov
Senior Engineer
4000
Ivan
Ivanov
.NET Developer
3500
Georgi
Ivanov
CEO
3000
Peter
Pan
Intern
599.88
Maria
Ivanova
Intern
525.25
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problem: Increase Employees Salaries
[code-task title="Increase Employees Salaries" taskId="MySQL-Data-Definitions-and-Data-Types-Increase-Employees-Salaries" executionType="tests-execution" executionStrategy="mysql-prepare-db-and-run-queries" requiresInput]
[code-editor language=sql]
```
-- Write your query here
```
[/code-editor]
[task-description]
## Description

Use the **softuni** database and **increase the salaries** of all employees by **10%**. **Then** select **only the salary** column from the **employees** table.  

[/task-description]
[code-io /]
[tests]
[test open]
[input]
CREATE TABLE IF NOT EXISTS towns
(
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(50),
	CONSTRAINT pk_towns PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS addresses
(
	id INT NOT NULL AUTO_INCREMENT,
	address_text VARCHAR(100),
	town_id INT,
	CONSTRAINT pk_adresses PRIMARY KEY (id),
	CONSTRAINT fk_adresses_towns FOREIGN KEY (town_id) REFERENCES towns(id)
);

CREATE TABLE IF NOT EXISTS departments
(
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(50),
	CONSTRAINT pk_departments_id PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS employees
(
	id INT NOT NULL AUTO_INCREMENT,
	first_name VARCHAR(50),
	middle_name VARCHAR(50),
	last_name VARCHAR(50),
	job_title VARCHAR(20),
	department_id INT,
	hire_date DATETIME,
	salary DOUBLE(12,4),
	address_id INT,
	CONSTRAINT pk_employees PRIMARY KEY (id),
	CONSTRAINT fk_employees_deparments FOREIGN KEY (department_id) REFERENCES departments(id),
	CONSTRAINT fk_employees_addresses FOREIGN KEY (address_id) REFERENCES addresses(id)
);

INSERT INTO towns (name) VALUES ('Berlin');
INSERT INTO towns (name) VALUES ('Madrid'); 
INSERT INTO towns (name) VALUES ('Sofia');
INSERT INTO towns (name) VALUES ('Lille');

INSERT INTO departments (name) VALUES ('Engineering');
INSERT INTO departments (name) VALUES ('Sales');
INSERT INTO departments (name) VALUES ('Marketing');
INSERT INTO departments (name) VALUES ('Software Development'); 
INSERT INTO departments (name) VALUES ('Quality Assurance');

INSERT INTO employees (first_name, middle_name, last_name, job_title, department_id, hire_date, salary) VALUES ('Kyrie', 'Keefe', 'Swanson', '.NET Developer', 4, '2013-02-01', 3500.00);
INSERT INTO employees (first_name, middle_name, last_name, job_title, department_id, hire_date, salary) VALUES ('Tamsyn', 'Corrina', 'Masterson', 'Senior Engineer', 1, '2004-03-02', 4000.00);
INSERT INTO employees (first_name, middle_name, last_name, job_title, department_id, hire_date, salary) VALUES ('Sonia', 'Eddy', 'Christians', 'Intern', 5, '2016-08-28', 525.25);
INSERT INTO employees (first_name, middle_name, last_name, job_title, department_id, hire_date, salary) VALUES ('Petal', 'Hylda', 'Cantrell', 'CEO', 2, '2007-12-09', 3000.00);
INSERT INTO employees (first_name, middle_name, last_name, job_title, department_id, hire_date, salary) VALUES ('Faye', 'Emberly', 'Paddon', 'Intern', 3, '2016-08-28', 599.88);
[/input]
[output]
3850
4400
577.775
3300
659.868
[/output]
[/test]
[test]
[input]
CREATE TABLE IF NOT EXISTS towns
(
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(50),
	CONSTRAINT pk_towns PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS addresses
(
	id INT NOT NULL AUTO_INCREMENT,
	address_text VARCHAR(100),
	town_id INT,
	CONSTRAINT pk_adresses PRIMARY KEY (id),
	CONSTRAINT fk_adresses_towns FOREIGN KEY (town_id) REFERENCES towns(id)
);

CREATE TABLE IF NOT EXISTS departments
(
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(50),
	CONSTRAINT pk_departments_id PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS employees
(
	id INT NOT NULL AUTO_INCREMENT,
	first_name VARCHAR(50),
	middle_name VARCHAR(50),
	last_name VARCHAR(50),
	job_title VARCHAR(20),
	department_id INT,
	hire_date DATETIME,
	salary DOUBLE(12,4),
	address_id INT,
	CONSTRAINT pk_employees PRIMARY KEY (id),
	CONSTRAINT fk_employees_deparments FOREIGN KEY (department_id) REFERENCES departments(id),
	CONSTRAINT fk_employees_addresses FOREIGN KEY (address_id) REFERENCES addresses(id)
);

INSERT INTO towns (name) VALUES ('Sofia');
INSERT INTO towns (name) VALUES ('Plovdiv'); 
INSERT INTO towns (name) VALUES ('Varna');
INSERT INTO towns (name) VALUES ('Burgas');

INSERT INTO departments (name) VALUES ('Engineering');
INSERT INTO departments (name) VALUES ('Sales');
INSERT INTO departments (name) VALUES ('Marketing');
INSERT INTO departments (name) VALUES ('Software Development'); 
INSERT INTO departments (name) VALUES ('Quality Assurance');

INSERT INTO employees (first_name, middle_name, last_name, job_title, department_id, hire_date, salary) VALUES ('Ivan', 'Ivanov', 'Ivanov', '.NET Developer', 4, '2013-02-01', 3500.00);
INSERT INTO employees (first_name, middle_name, last_name, job_title, department_id, hire_date, salary) VALUES ('Petar', 'Petrov', 'Petrov', 'Senior Engineer', 1, '2004-03-02', 4000.00);
INSERT INTO employees (first_name, middle_name, last_name, job_title, department_id, hire_date, salary) VALUES ('Maria', 'Petrova', 'Ivanova', 'Intern', 5, '2016-08-28', 525.25);
INSERT INTO employees (first_name, middle_name, last_name, job_title, department_id, hire_date, salary) VALUES ('Georgi', 'Terziev', 'Ivanov', 'CEO', 2, '2007-12-09', 3000.00);
INSERT INTO employees (first_name, middle_name, last_name, job_title, department_id, hire_date, salary) VALUES ('Peter', 'Pan', 'Pan', 'Intern', 3, '2016-08-28', 599.88);
[/input]
[output]
3850
4400
577.775
3300
659.868
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]

# Problem: Delete All Records
[code-task title="Delete All Records" taskId="MySQL-Data-Definitions-and-Data-Types-Delete-All-Records" executionType="tests-execution" executionStrategy="mysql-run-skeleton-run-queries-and-check-database" requiresInput]
[code-editor language=sql]
```
-- Write your query here
```
[/code-editor]
[code-adapter]
CREATE TABLE IF NOT EXISTS towns
(
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(50),
	CONSTRAINT pk_towns PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS addresses
(
	id INT NOT NULL AUTO_INCREMENT,
	address_text VARCHAR(100),
	town_id INT,
	CONSTRAINT pk_adresses PRIMARY KEY (id),
	CONSTRAINT fk_adresses_towns FOREIGN KEY (town_id) REFERENCES towns(id)
);

CREATE TABLE IF NOT EXISTS departments
(
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(50),
	CONSTRAINT pk_departments_id PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS employees
(
	id INT NOT NULL AUTO_INCREMENT,
	first_name VARCHAR(50),
	middle_name VARCHAR(50),
	last_name VARCHAR(50),
	job_title VARCHAR(20),
	department_id INT,
	hire_date DATETIME,
	salary DOUBLE(12,4),
	address_id INT,
	CONSTRAINT pk_employees PRIMARY KEY (id),
	CONSTRAINT fk_employees_deparments FOREIGN KEY (department_id) REFERENCES departments(id),
	CONSTRAINT fk_employees_addresses FOREIGN KEY (address_id) REFERENCES addresses(id)
);

INSERT INTO towns (name) VALUES ('Berlin');
INSERT INTO towns (name) VALUES ('Madrid'); 
INSERT INTO towns (name) VALUES ('Sofia');
INSERT INTO towns (name) VALUES ('Lille');

INSERT INTO departments (name) VALUES ('Engineering');
INSERT INTO departments (name) VALUES ('Sales');
INSERT INTO departments (name) VALUES ('Marketing');
INSERT INTO departments (name) VALUES ('Software Development'); 
INSERT INTO departments (name) VALUES ('Quality Assurance');

INSERT INTO employees (first_name, middle_name, last_name, job_title, department_id, hire_date, salary) VALUES ('Kyrie', 'Keefe', 'Swanson', '.NET Developer', 4, '2013-02-01', 3500.00);
INSERT INTO employees (first_name, middle_name, last_name, job_title, department_id, hire_date, salary) VALUES ('Tamsyn', 'Corrina', 'Masterson', 'Senior Engineer', 1, '2004-03-02', 4000.00);
INSERT INTO employees (first_name, middle_name, last_name, job_title, department_id, hire_date, salary) VALUES ('Sonia', 'Eddy', 'Christians', 'Intern', 5, '2016-08-28', 525.25);
INSERT INTO employees (first_name, middle_name, last_name, job_title, department_id, hire_date, salary) VALUES ('Petal', 'Hylda', 'Cantrell', 'CEO', 2, '2007-12-09', 3000.00);
INSERT INTO employees (first_name, middle_name, last_name, job_title, department_id, hire_date, salary) VALUES ('Faye', 'Emberly', 'Paddon', 'Intern', 3, '2016-08-28', 599.88);
[/code-adapter]
[task-description]
## Description

Use an SQL query to **delete all records** from the table called **employees**. 

[/task-description]
[code-io /]
[tests]
[test open]
[input]
SELECT COUNT(\*) FROM employees
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
SELECT COUNT(\*) FROM employees
[/input]
[output]
0
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
