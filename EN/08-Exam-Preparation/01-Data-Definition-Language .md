
[slide hideTitle]
# Data Definition Language (DDL)

Make sure you implement the whole database correctly on your local machine, so that you could work with it.

The instructions you will be given will be the minimal required for you to implement the database.
[/slide]

[slide hideTitle]
# Problem: Table Design

[video src="https://videos.softuni.org/hls/Java/Java-Databases-and-MySQL/EN/Exam-Preparation/interactive-java-databases-and-mysql-exam-preparation-1-data-definition-language-solution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Table Design" taskId="java-db-and-MySQL-exam-table-design" executionType="tests-execution" executionStrategy="mysql-run-queries-and-check-database" requiresInput]
[code-editor language=sql]
```
-- Write your query here

```
[/code-editor]
[task-description]
# Description
You have been tasked to create the tables in the database by the following models:

## Users

| **Column Name** |**Data Type** |**Constraints** |
| --- | --- |--- | 
| **id** | **Integer**, from **1 to 2 147 483 647**. | **Primary Key** | 
| **username** | A **string** containing a maximum of **30 characters**. Unicode is **NOT** needed. | **NULL is NOT** permitted, **UNIQUE** values. |
|**password**|A **string** containing a maximum of **30 characters**. Unicode is **NOT** needed.|**NULL is NOT** permitted.|
|**email**|A **string** containing a maximum of **50 characters**. Unicode is **NOT** needed.|**NULL is NOT** permitted.|
|**gender**|**Exactly 1 character - M or F**|**NULL is NOT** permitted.|
|**age**|**Integer**, from 1 to 2 147 483 647.|**NULL is NOT** permitted.|
|**job_title**|A **string** containing a maximum of **40 characters**. Unicode is **NOT** needed.|**NULL is NOT** permitted.|
|**ip**|A **string** containing a maximum of **30 characters**. Unicode is **NOT** needed.|**NULL is NOT** permitted.|

## Аddresses

| **Column Name** |**Data Type** |**Constraints** |
| --- | --- |--- | 
| **id** | **Integer**, from **1 to 2 147 483 647**. | **Primary Key AUTO_INCREMENT** | 
| **address** | A **string** containing a maximum of **30 characters**. Unicode is **NOT** needed. | **NULL is NOT** permitted. |
|country|A **string** containing a maximum of **30 characters**. Unicode is **NOT** needed.|**NULL is NOT** permitted.|
|user_id|**Integer**, from **1 to 2 147 483 647**.|Relationship with table **users**. **NULL is NOT** permitted.|

## Photos

| **Column Name** |**Data Type** |**Constraints** |
| --- | --- |--- | 
| **id** | **Integer**, from **1 to 2 147 483 647**. | **Primary Key AUTO_INCREMENT** | 
| **description** | Very big String. | **NULL is NOT** permitted. |
| **date** | The exact date and time. | **NULL is NOT** permitted. |
|**views**|**Integer**, from **1 to 2 147 483 647**.|**DEFAULT value is 0.** **NULL is NOT** permitted.|

## Comments

| **Column Name** |**Data Type** |**Constraints** |
| --- | --- |--- | 
| **id** | **Integer**, from **1 to 2 147 483 647**. | **Primary Key AUTO_INCREMENT** | 
| **comment** | A String containing a maximum of **255 characters**. Unicode is **NOT** needed. | **NULL is NOT** permitted. |
| **date** | The exact date and time. | **NULL is NOT** permitted. |
| **photo_id** | **Integer**, from **1 to 2 147 483 647**. | Relationship with table **photos**. **NULL is NOT** permitted. |


## Users_photos

| **Column Name** |**Data Type** |**Constraints** |
| --- | --- |--- | 
| **user_id** | **Integer**, from **1 to 2 147 483 647**. | Relationship with table **users**. **NULL is NOT** permitted. | 
| **photo_id** | **Integer**, from **1 to 2 147 483 647**. | Relationship with table **photos**. **NULL is NOT** permitted.|


## Likes

| **Column Name** |**Data Type** |**Constraints** |
| --- | --- |--- | 
| **id** | **Integer**, from **1 to 2 147 483 647**. |  **Primary Key AUTO_INCREMENT** | 
| **photo_id** | **Integer**, from **1 to 2 147 483 647**.  | Relationship with table photos. |
|**user_id**|**Integer**, from **1 to 2 147 483 647**.|Relationship with table **users**. |

Submit your solutions in Judge on the first task. 

Submit **all** SQL table creation statements.

You will also be given a [data.sql](https://videos.softuni.org/resources/java/java-mysql/01-Exam-Preparation-Table-Design.zip) file. 

It will contain a **dataset** with random data which you will need to **store** in your **local database**. 

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
address
country
id
town
user_id
comment
date
id
photo_id
id
photo_id
user_id
date
description
id
views
age
email
gender
id
ip
job_title
password
username
photo_id
user_id
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
int
varchar(30)
varchar(30)
varchar(30)
datetime
int
int
varchar(255)
int
int
int
datetime
int
int
text
char(1)
int
int
varchar(30)
varchar(30)
varchar(30)
varchar(40)
varchar(50)
int
int
[/output]
[/test]
[test open]
[input]
SELECT COLUMN_KEY FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_SCHEMA = DATABASE()
AND COLUMN_NAME IN ('id','user_id','photo_id')
ORDER BY TABLE_NAME, COLUMN_KEY;
[/input]
[output]
PRI
MUL
PRI
MUL
PRI
MUL
MUL
PRI
PRI
MUL
MUL
[/output]
[/test]
[test]
[input]
SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_SCHEMA = DATABASE()
ORDER BY COLUMN_NAME;
[/input]
[output]
address
age
comment
country
date
date
description
email
gender
id
id
id
id
id
ip
job_title
password
photo_id
photo_id
photo_id
town
user_id
user_id
user_id
username
views
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
datetime
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
text
varchar(255)
varchar(30)
varchar(30)
varchar(30)
varchar(30)
varchar(30)
varchar(30)
varchar(40)
varchar(50)
[/output]
[/test]
[test]
[input]
SELECT COLUMN_KEY FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_SCHEMA = DATABASE()
AND COLUMN_NAME IN ('id','user_id','photo_id')
ORDER BY COLUMN_KEY;
[/input]
[output]
PRI
PRI
PRI
PRI
PRI
MUL
MUL
MUL
MUL
MUL
MUL
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
