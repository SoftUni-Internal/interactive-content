[slide hideTitle]
# Data Definition Language (DDL)

Make sure you implement the whole database correctly on your local machine so that you can work with it. 

The instructions you will be given will be the minimum required for you to implement the database.


[/slide]

[slide hideTitle]
# Problem: Table Design
[code-task title="Table Design" taskId="java-db-and-MySQL-exam-table-design" executionType="tests-execution" executionStrategy="mysql-run-queries-and-check-database" requiresInput]
[code-editor language=sql]
```
-- Write your query here

```
[/code-editor]
[task-description]
# Description
You should create the tables in the database by the following models:

## Addresses

| **Column Name** |**Data Type** |**Constraints** |
| --- | --- |--- | 
| **id** | **Integer**, from **1 to 2 147 483 647**. | **Primary Key AUTO_INCREMENT** | 
| **name** | A **string** containing a maximum of **10 characters**. Unicode is **NOT** needed. | **NULL is NOT** permitted. |

## Categories

| **Column Name** |**Data Type** |**Constraints** |
| --- | --- |--- | 
| **id** | **Integer**, from **1 to 2 147 483 647**. | **Primary Key AUTO_INCREMENT** | 
| **name** | A **string** containing a maximum of **10 characters**. Unicode is **NOT** needed. | **NULL is NOT** permitted. |

## Clients

| **Column Name** |**Data Type** |**Constraints** |
| --- | --- |--- | 
| **id** | **Integer**, from **1 to 2 147 483 647**. | **Primary Key AUTO_INCREMENT** | 
| **full_name** | A **string** containing a maximum of **50 characters**. Unicode is **NOT** needed. | **NULL is NOT** permitted. |
| **phone_number** | A **string** containing a maximum of **20 characters**. Unicode is **NOT** needed. | **NULL is NOT** permitted. |

## Drivers

| **Column Name** |**Data Type** |**Constraints** |
| --- | --- |--- | 
| **id** | **Integer**, from **1 to 2 147 483 647**. | **Primary Key AUTO_INCREMENT** | 
| **first_name** | A **string** containing a maximum of **30 characters**. Unicode is **NOT** needed. | **NULL is NOT** permitted. |
| **last_name** | A **string** containing a maximum of **30 characters**. Unicode is **NOT** needed. | **NULL is NOT** permitted. |
| **age** | **Integer**, from **1 to 2 147 483 647**. | **NULL is NOT** permitted. |
| **rating** | **Floating point** number. | **DEFAULT value is 5.5**, **NULL** is permitted. |

## Cars

| **Column Name** |**Data Type** |**Constraints** |
| --- | --- |--- | 
| **id** | **Integer**, from **1 to 2 147 483 647**. | **Primary Key AUTO_INCREMENT** | 
| **make** | A **string** containing a maximum of **20 characters**. Unicode is **NOT** needed. | **NULL is NOT** permitted. |
| **model** | A **string** containing a maximum of **20 characters**. Unicode is **NOT** needed. | **NULL is** permitted. |
| **year** | **Integer**, from **1 to 2 147 483 647**. | **DEFAULT** value is 0, **NULL is NOT** permitted.|
| **mileage** | **Integer**, from **1 to 2 147 483 647**. | **DEFAULT value is 0**, **NULL** is permitted. |
| **condition** | **Character** that shows the **condition** of the car.  One character. | **NULL is NOT** permitted. |
| **category_id** | **Integer**, from **1 to 2 147 483 647**. | Relationship with table "**categories**". **NULL is NOT** permitted. |

## Courses

| **Column Name** |**Data Type** |**Constraints** |
| --- | --- |--- | 
| **id** | **Integer**, from **1 to 2 147 483 647**. | **Primary Key AUTO_INCREMENT** | 
| **from_address_id** | **Integer**, from **1 to 2 147 483 647**. | Relationship with table "**addresses**". **NULL is NOT** permitted.|
| **start** | The **date** and **time** when the course starts. | **NULL is NOT** permitted. |
| **bill** | **DECIMAL**, up to **10 digits**, **2 of which after the decimal point**. | DEFAULT value is 10|
| **car_id** | **Integer**, from **1 to 2 147 483 647**. | Relationship with table "**cars**". **NULL is NOT** permitted.|
| **client_id** | **Integer**, from **1 to 2 147 483 647**.  | Relationship with table "**clients**". **NULL is NOT** permitted. |

## Cars_drivers

| **Column Name** |**Data Type** |**Constraints** |
| --- | --- |--- | 
| **car_id** | **Integer**, from **1 to 2 147 483 647**. | Relationship with table "**cars**". **NULL is NOT** permitted. | 
| **driver_id** | **Integer**, from **1 to 2 147 483 647**.  | Relationship with table "**drivers**". **NULL is NOT** permitted. |

Have composite primary key from the "**car_id**" column and the "**driver_id**" column.

Submit **all SQL table creation statements**.

You will also be given a [data.sql](https://videos.softuni.org/resources/java/java-mysql/01-Table-Design-Data-Exam.zip) file. 

It will contain a **dataset** with data which you will need to **store** in your **local database**. 

This data will be given to you, so you do not have to imagine it and lose precious time in the process.
The data is in the form of **INSERT** statement queries.

[/task-description]
[code-io /]
[tests]
[test open]
[input]
SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_SCHEMA = DATABASE()
ORDER BY TABLE_NAME, COLUMN_NAME;
[/input]
[output]
id
name
category_id
condition
id
make
mileage
model
year
car_id
driver_id
id
name
full_name
id
phone_number
bill
car_id
client_id
from_address_id
id
start
age
first_name
id
last_name
rating
[/output]
[/test]
[test open]
[input]
SELECT COLUMN_TYPE FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_SCHEMA = DATABASE()
ORDER BY TABLE_NAME,COLUMN_TYPE;
[/input]
[output]
int
varchar(100)
char(1)
int
int
int
int
varchar(20)
varchar(20)
int
int
int
varchar(10)
int
varchar(20)
varchar(50)
datetime
decimal(10,2)
int
int
int
int
float
int
int
varchar(30)
varchar(30)
[/output]
[/test]
[test open]
[input]
SELECT COLUMN_KEY FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_SCHEMA = DATABASE()
AND COLUMN_NAME IN ('id','car_id','driver_id',
 'from_address_id', 'client_id', 'category_id')
ORDER BY TABLE_NAME, COLUMN_KEY;
[/input]
[output]
PRI
PRI
MUL
PRI
PRI
PRI
PRI
PRI
MUL
MUL
MUL
PRI
[/output]
[/test]
[test]
[input]
SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_SCHEMA = DATABASE()
ORDER BY COLUMN_NAME;
[/input]
[output]
age
bill
car_id
car_id
category_id
client_id
condition
driver_id
first_name
from_address_id
full_name
id
id
id
id
id
id
last_name
make
mileage
model
name
name
phone_number
rating
start
year
[/output]
[/test]
[test]
[input]
SELECT COLUMN_TYPE FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_SCHEMA = DATABASE()
ORDER BY COLUMN_TYPE;
[/input]
[output]
char(1)
datetime
decimal(10,2)
float
int
int
int
int
int
int
int
int
int
int
int
int
int
int
int
varchar(10)
varchar(100)
varchar(20)
varchar(20)
varchar(20)
varchar(30)
varchar(30)
varchar(50)
[/output]
[/test]
[test]
[input]
SELECT COLUMN_KEY FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_SCHEMA = DATABASE()
AND COLUMN_NAME IN ('id','car_id','driver_id',
 'from_address_id', 'client_id', 'category_id')
ORDER BY TABLE_NAME, COLUMN_KEY;
[/input]
[output]
PRI
PRI
MUL
PRI
PRI
PRI
PRI
PRI
MUL
MUL
MUL
PRI
[/output]
[/test]
[/tests]
[/code-task]
[/slide]