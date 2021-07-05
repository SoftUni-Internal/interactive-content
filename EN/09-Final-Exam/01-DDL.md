[slide hideTitle]

# Data Definition Language (DDL)

[/slide]

[slide hideTitle]

# Database Overview

You have been given an Entity / Relationship Diagram of the **SoftUni Stores System**

[image assetsSrc="Exam.png" /]


The **SoftUniStoresSystem** needs to hold information about **stores, products, employees, addresses, towns, pictures and categories**.

Your task is to create a database called **softuni_stores_system**. Then you will have to create several **tables**.

-	**stores** - contains information about the **stores**.
    -	**Each store has a name, rating, has parking and relation with addresses**.

-	**products** - contains information about the **products**.
    -	**Each product has a name, best before, price, description** and has 
        relations with **categories** and **pictures**.

-	**products_stores** - a **many** to **many mapping** table between the **products** and the **stores**.
    -	Has a **composite primary key** from **product_id** and **store_id** 

-	**employees** - contains information about the **employees**.
    -	**Each employee has first name, middle name, last name, salary and have relations with stores and with self**.

-	**addresses** - contains information about the **addresses** of stores.
    -	Each **address has name and relation with towns**.

-	**towns** - contains information about the **towns**.
    -	**Each town has a name**.

-	**categories** - contains information about the **categories**.
    -	**Each category has a name**.

-	**pictures** - contains information about the **pictures**.
    -	**Each picture has a name and date and time when is added on**.

[/slide]

[slide hideTitle]

# Table Design

**You have been tasked to create the tables in the database by the following models:**

### pictures
| **Column Name** | **Data Type** | **Constraint** |
| --- | --- | --- |
| id | Integer, from 1 to 2,147,483,647. | Primary Key AUTO_INCREMENT |
| url | A string containing a maximum of 100 characters. Unicode is NOT needed. | NULL is NOT permitted. |
| added_on | A date and time of adding picture. | NULL is NOT permitted. |
|  |  |  |


### categories
| **Column Name** | **Data Type** | **Constraint** |
| --- | --- | --- |
| id | Integer, from 1 to 2,147,483,647. | Primary Key AUTO_INCREMENT |
| name | A string containing a maximum of 40 characters. Unicode is NOT needed. | NULL is NOT permitted. The name is unique. |
|  |  |  |


### products
| **Column Name** | **Data Type** | **Constraint** |
| --- | --- | --- |
| id | Integer, from 1 to 2,147,483,647. |  Primary Key AUTO_INCREMENT |
| name | A string containing a maximum of 40 characters. Unicode is NOT needed. |  NULL is NOT permitted. The name is unique. |
| best_before | A date that product is best before  | 
| price | Decimal number, up to 10 digits, 2 of which after the decimal point. | NULL is NOT permitted. |
| description |  A very long String field  |
| category_id | Integer, from 1 to 2,147,483,647. | Relationship with table categories. NULL is NOT permitted. |
| picture_id | Integer, from 1 to 2,147,483,647. |  Relationship with table pictures. NULL is NOT permitted. |


### towns
| **Column Name** | **Data Type** | **Constraint** |
| --- | --- | --- |
| id | Integer, from 1 to 2,147,483,647. | Primary Key AUTO_INCREMENT |
| name | A string containing a maximum of 20 characters. Unicode is NOT needed. | NULL is NOT permitted. The name is unique. |

### addresses
| **Column Name** | **Data Type** | **Constraint** |
| --- | --- | --- |
| id | Integer, from 1 to 2,147,483,647. | Primary KeyAUTO_INCREMENT |
| name | A string containing a maximum of 50 characters. Unicode is NOT needed. | NULL is NOT permitted. The name is unique. |
| town_id | Integer, from 1 to 2,147,483,647. | Relationship with table towns. NULL is NOT permitted. |



### stores
| **Column Name** | **Data Type** | **Constraint** |
| --- | --- | --- |
| id | Integer, from 1 to 2,147,483,647. | Primary Key AUTO_INCREMENT |
| name | A string containing a maximum of 20 characters. Unicode is NOT needed. | NULL is NOT permitted. The name is unique. |
| rating  | A floating point number  | NULL is NOT permitted. |
| has_parking | Can be true or false | Default is FALSE |
| address_id | Integer, from 1 to 2,147,483,647. | Relationship with table addresses.NULL is NOT permitted. |



### products_stores
| **Column Name** | **Data Type** | **Constraint** |
| --- | --- | --- |
| product_id | Integer, from 1 to 2,147,483,647. | NULL is NOT permitted. | 
| store_id | Integer, from 1 to 2,147,483,647. | NULL is NOT permitted. | 


### employees
| **Column Name** | **Data Type** | **Constraint** |
| --- | --- | --- |
| id | Integer, from 1 to 2,147,483,647. |  Primary Key AUTO_INCREMENT |
| first_name | A string containing a maximum of 15 characters. Unicode is NOT needed. |  NULL is NOT permitted. |
| middle_name | A single one character |
| last_name | A string containing a maximum of 20 characters. Unicode is NOT needed. |  NULL is NOT permitted. |
| salary | Decimal number, up to 19 digits, 2 of which after the decimal point. |  DEFAULT 0  |
| hire_date | A date that employee was hired |  NULL is NOT permitted. |
| manager_id | Integer, from 1 to 2,147,483,647. |
| store_id | Integer, from 1 to 2,147,483,647. |  NULL is NOT permitted. |


[/slide]

[slide hideTitle]
# Problem: Table Design - 13pts
[code-task title="Problem: Table Design - 13pts" taskId="1b216b03-738f-43ab-a7d4-4ef1c91d6938" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

**Submit your output to the Judge system from the following sql querie:**

```java 
SELECT COLUMN_TYPE FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_SCHEMA = 'softuni_stores_system'
ORDER BY COLUMN_NAME, TABLE_NAME;
```

### Output

| **output** |
| --- |
| added_on |
| address_id |
| best_before |
| ... |
|  |

**NOTE: If your output displays column type int as int(11), you need to remove the (11) int(11) != int**


[/task-description]
[code-io /]
[tests]
[test]
[input]
datetime
int
date
int
text
varchar(15)
tinyint(1)
date
int
int
int
int
int
int
int
varchar(20)
int
char(1)
varchar(50)
varchar(40)
varchar(40)
varchar(20)
varchar(20)
int
decimal(10,2)
int
float
decimal(19,2)
int
int
int
varchar(100)
[/input]
[output]
datetime
int
date
int
text
varchar(15)
tinyint(1)
date
int
int
int
int
int
int
int
varchar(20)
int
char(1)
varchar(50)
varchar(40)
varchar(40)
varchar(20)
varchar(20)
int
decimal(10,2)
int
float
decimal(19,2)
int
int
int
varchar(100)
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Table Design
[code-task title="Problem: Table Design" taskId="0a9661d4-465f-4928-9a0e-5a6426a6471f" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
```java
SELECT COLUMN_KEY FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_SCHEMA = 'softuni_stores_system'
  AND COLUMN_NAME IN ('id','product_id','store_id',
                      'town_id', 'address_id', 'category_id', 'picture_id','manager_id')
ORDER BY COLUMN_NAME, TABLE_NAME DESC, COLUMN_KEY DESC;
```

**Submit your output to the Judge system from the following sql querie:**

### Output

| **output** |
| --- |
| MUL |
| MUL |
| PRI |
| … |
|  |


[/task-description]
[code-io /]
[tests]
[test]
[input]
MUL
MUL
PRI
PRI
PRI
PRI
PRI
PRI
PRI
MUL
MUL
PRI
PRI
MUL
MUL
[/input]
[output]
MUL
MUL
PRI
PRI
PRI
PRI
PRI
PRI
PRI
MUL
MUL
PRI
PRI
MUL
MUL
[/output]
[/test]
[/tests]
[/code-task]
[/slide]